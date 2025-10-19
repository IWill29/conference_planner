import { Link } from 'react-router-dom';

// Vienkārša landing lapa ar hero fonu, saukli un pogu uz izvēles lapu
export default function LandingPage(){
    return (
        <div className="hero">
            {/* Tumšs pārklājums virs bildes, lai teksts kontrastē */}
            <div className="overlay">
                <div className="conteiner" style={{minHeight:'70vh',display:'grid',placeItems:'center',textAlign:'center'}}>
                    <div>
                        <h1 style={{fontSize:48, margin:0}}>Confex Co.</h1>
                        <p className="small">We help you plan memorable conferences at world‑class venues.</p>
                        <p className="small">Transparent pricing. Flexible options. Fast.</p>
                        {/* Poga virza uz /select */}
                        <Link to="/select" className="btn" style={{marginTop:12}}>Start Planning</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}