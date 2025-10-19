import { useSelector, useDispatch } from 'react-redux';
import { selectRows, selectTotal, setShow } from '../app/slices';


// Modālais logs: rāda tabulu ar izvēlēm + kopsummu
export default function ShowDetailsModal() {
const rows = useSelector(selectRows); // tabulas rindas
const total = useSelector(selectTotal); // kopsumma
const open = useSelector(s=>s.planner.showDetails); // vai modālis atvērts
const d = useDispatch();


if (!open) return null; // Ja nav atvērts, neko nerenderējam


return (
// Backdrop aizver modāli, ja uz tā uzklikšķina
<div className="modal-backdrop" onClick={()=>d(setShow(false))}>
{/* Klikšķi modāļa iekšpusē neizslēdz modāli */}
<div className="modal" onClick={e=>e.stopPropagation()}>
<h3>Expense summary</h3>
<table className="table">
<thead><tr><th>Item</th><th>Unit</th><th>Qty</th><th>Subtotal</th></tr></thead>
<tbody>
{rows.length===0 ? (
<tr><td colSpan={4} className="small">No selections yet.</td></tr>
) : rows.map((r,i)=> (
<tr key={i}><td>{r.type}</td><td>${r.unit}</td><td>{r.qty}</td><td>${r.sum}</td></tr>
))}
</tbody>
<tfoot>
<tr><th colSpan={3} style={{textAlign:'right'}}>Total</th><th>${total}</th></tr>
</tfoot>
</table>
<div style={{display:'flex',justifyContent:'flex-end',marginTop:12}}>
<button className="btn" onClick={()=>d(setShow(false))}>Close</button>
</div>
</div>
</div>
);
}