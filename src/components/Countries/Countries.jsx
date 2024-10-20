/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])


    const handleVisitedCountry = (country) => {
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry)
    }

    return (
        <div>
            <h2>All Countries Here!!</h2>
            <div>
                <h2>Visited Country: {visitedCountries.length}</h2>
                <div>
                    {
                        visitedCountries.map((visitedCountry, idx) => <span key={idx}>
                            <img src={visitedCountry.flags.png} alt="" />
                            <h5>{visitedCountry.name.common}</h5>
                        </span>)
                    }
                </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '30px' }}>
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        country={country}
                        handleVisitedCountry={handleVisitedCountry}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;