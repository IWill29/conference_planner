// src/pages/SelectionPage.jsx
import { useDispatch, useSelector } from "react-redux";
import { ROOMS, ADDONS, MEALS } from "../data/pricing";
import { incRoom, decRoom, incAddon, decAddon, setMeal } from "../app/slices";
import QuantityCounter from "../components/QuantityCounter";

export default function SelectionPage() {
  const d = useDispatch();
  const { rooms, addons, meals } = useSelector(s => s.planner);

  return (
    <div className="container" style={{ paddingTop: 20 }}>
      <h2>Product selection</h2>

      <p className="small">
        Jump to: <a href="#rooms" className="link">Rooms</a> ·{" "}
        <a href="#addons" className="link">Add-ons</a> ·{" "}
        <a href="#meals" className="link">Meals</a>
      </p>

      {/* ROOMS */}
      <section id="rooms" className="section">
        <h3>Rooms</h3>
        <div className="grid">
          {ROOMS.map(r => (
            <div className="card" key={r.id}>
              <div className="card-media">
                <img src={r.img} alt={r.name} loading="lazy" />
              </div>
              <h4>{r.name}</h4>
              <div className="small">Capacity {r.cap} · ${r.price} ea</div>
              <QuantityCounter
                value={rooms[r.id]}
                onDec={() => d(decRoom(r.id))}
                onInc={() => d(incRoom(r.id))}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ADD-ONS */}
      <section id="addons" className="section">
        <h3>Add-ons</h3>
        <div className="grid">
          {ADDONS.map(a => (
            <div className="card" key={a.id}>
              <div className="card-media">
                <img src={a.img} alt={a.name} loading="lazy" />
              </div>
              <h4>{a.name}</h4>
              <div className="small">${a.price} ea</div>
              <QuantityCounter
                value={addons[a.id]}
                onDec={() => d(decAddon(a.id))}
                onInc={() => d(incAddon(a.id))}
              />
            </div>
          ))}
        </div>
      </section>

      {/* MEALS */}
      <section id="meals" className="section">
        <h3>Meals (people count)</h3>
        <div className="grid">
          {MEALS.map(m => (
            <div className="card" key={m.id}>
              <div className="card-media">
                <img src={m.img} alt={m.name} loading="lazy" />
              </div>
              <h4>{m.name}</h4>
              <div className="small">${m.price} per person</div>
              <input
                className="input"
                type="number"
                min="0"
                value={meals[m.id]}
                onChange={e => d(setMeal({ id: m.id, value: e.target.value }))}
                placeholder="Number of people"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
