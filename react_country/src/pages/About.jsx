import countryFacts from "../api/countryData.json";

export const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        we're proud of
      </h2>
      <div className="gradient-cards">
        {countryFacts.map((country) => {
          // Corrected typo: countryNameame -> countryName
          const { id, countryName, capital, population, interestingFact } = country; 
          
          return (
            // Add a unique key for each mapped element
            <div className="card" key={id}> 
              {/* Use dynamic values within the card structure */}
              <div className="container-card bg-yellow-box">
                <p className="card-title">{countryName}</p>
                <p>
                  <span className="card-description">Capital:</span>
                  {capital}
                </p>
                <p>
                  <span className="card-description">Population:</span>
                  {population}
                </p>
                <p>
                  <span className="card-description">Interesting Fact:</span>
                  {interestingFact}
                </p>
              </div>
            </div>
          );
        })}
        {/* The static card below has been removed to avoid duplication */}
      </div>
    </section>
  );
};
