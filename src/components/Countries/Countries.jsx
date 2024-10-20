/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h2>All Countries Here!!</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '30px' }}>
                {
                    countries.map(country => <Country
                        country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;