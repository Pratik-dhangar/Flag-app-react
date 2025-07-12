import data from "../api/countryData.json";

export const About = () => {
  return (
    <div>
      <div class="head" style={{marginTop:"5rem"}}>Do You Know ??</div>
     <div className="container">
  <div className="row">
    {data.map((country) => (
      <div className="col-md-4 mb-4" key={country.id}>
        <div className="card h-100" style={{ backgroundColor:"#a7b6c2",width: "100%" }}>
          <div className="card-body">
            <h2 className="card-title text-black text-center fw-bold">
              {country.countryName}
            </h2>
            <h3 className="card-subtitle mb-2 text-primary">
              Capital: {country.capital}
            </h3>
            <p className="card-text text-secondary">
              <b>Population:</b> {country.population.toLocaleString()} <br />
              <b>Fact:</b> {country.interestingFact}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      
    </div>
  );
};
