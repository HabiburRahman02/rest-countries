import { useState } from "react";
import './Country.css'
const Country = ({ country }) => {
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited)
    }

    const { name, flags, capital } = country;
    // console.log(capital[0]);
    const countryStyle = {
        border: '2px solid salmon',
        padding: '15px',
        borderRadius: '20px'
    }
    return (
        <div style={countryStyle} className={`${visited && 'visited'}`}>
            <img style={{ height: '200px', width: "100%" }} src={flags?.png} alt="" />
            <h3>Name: {name?.common}</h3>
            <p>Capital: {capital}</p>
            <button onClick={handleVisited}>
                {
                    visited ? 'Visited' : 'Visit'
                }
            </button>
            <p>
                {
                    visited && 'Visited Done'
                }
            </p>
        </div>
    );
};

export default Country;