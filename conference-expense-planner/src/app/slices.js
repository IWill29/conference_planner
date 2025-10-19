import { createSlice, createSelector } from '@reduxjs/toolkit';
import { ROOMS, ADDONS, MEALS } from '../data/pricing';

// Sākotnējās vērtības katrai kategorijai (id -> daudzums)
const roomInit = Object.fromEntries(ROOMS.map(r => [r.id, 0]));
const addonInit = Object.fromEntries(ADDONS.map(a => [a.id, 0]));
const mealInit = Object.fromEntries(MEALS.map(m => [m.id, 0]));

// Visa app sākotnējais stāvoklis
const initialState = {
rooms: roomInit,
addons: addonInit,
meals: mealInit,
showDetails: false // kontrolē modāļa atvēršanu
};

// Slice definē reducerus (kā mainām stāvokli) un actionus (notikumu nosaukumi)
const slice = createSlice({
name: 'planner',
initialState,
reducers: {
// Telpas +/−
incRoom: (s, { payload }) => { s.rooms[payload]++; },
decRoom: (s, { payload }) => { s.rooms[payload] = Math.max(0, s.rooms[payload]-1); },


// Add-on +/−
incAddon: (s, { payload }) => { s.addons[payload]++; },
decAddon: (s, { payload }) => { s.addons[payload] = Math.max(0, s.addons[payload]-1); },


// Maltītes ievade (skaits = cilvēku daudzums)
setMeal: (s, { payload: { id, value } }) => { s.meals[id] = Math.max(0, Number(value)||0); },


// Modāļa stāvoklis
setShow: (s, { payload }) => { s.showDetails = payload; },


// Pilns reset uz sākumu
reset: () => initialState
}
});

// Eksportējam actionus un reduceri veikalam
export const { incRoom, decRoom, incAddon, decAddon, setMeal, setShow, reset } = slice.actions;
export default slice.reducer;

// ------- Selektori (atvasināti aprēķini no stāvokļa) -------
export const selectPlanner = s => s.planner; // saknes atzars

// Tabulas rindas modālim: katra izvēle -> (nosaukums, cena, daudzums, summa)
export const selectRows = createSelector(selectPlanner, p => {
const rows = [];
ROOMS.forEach(r => {
const q = p.rooms[r.id];
if (q>0) rows.push({ type: r.name, unit: r.price, qty: q, sum: q*r.price });
});
ADDONS.forEach(a => {
const q = p.addons[a.id];
if (q>0) rows.push({ type: a.name, unit: a.price, qty: q, sum: q*a.price });
});
MEALS.forEach(m => {
const q = p.meals[m.id];
if (q>0) rows.push({ type: m.name, unit: m.price, qty: q, sum: q*m.price });
});
return rows;
});


// Gala kopsumma = visu rindu summu summa
export const selectTotal = createSelector(selectRows, rows => rows.reduce((t,r)=>t+r.sum,0));