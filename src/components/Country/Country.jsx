
const Country = ({ country }) => {
    const { name, flags } = country;
    console.log(country);
    const countryStyle = {
        border: '2px solid salmon',
        padding: '15px',
        borderRadius: '20px'
    }
    return (
        <div style={countryStyle}>
            <img src={flags?.png} alt="" />
            <h3>Name: {name?.common}</h3>
        </div>
    );
};

export default Country;