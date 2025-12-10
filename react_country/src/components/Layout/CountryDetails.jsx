
import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useTransition } from "react";
import { getCountryIndData } from "../../api/postApi";
import Loader from "../UI/Loader";

export const CountryDetails = () => {
    const params = useParams();
    const [isPending, startTransition] = useTransition();
    const [countryData, setCountryData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        startTransition(async () => {
            try {
                setError(null);
                const res = await getCountryIndData(params.id);
                console.log("Country Details API Response:", res);
                
                if (res.data && Array.isArray(res.data) && res.data.length > 0) {
                    setCountryData(res.data[0]);
                } else {
                    setError("Country not found");
                }
            } catch (err) {
                console.error("Error fetching country details:", err);
                setError("Failed to load country details. Please try again.");
            }
        });
    }, [params.id]);

    if (isPending) return <Loader />;

    if (error) {
        return (
            <section className="country-details-section">
                <div className="error-container">
                    <h2>Error</h2>
                    <p>{error}</p>
                    <Link to="/country">
                        <button className="btn btn-darken">Back to Countries</button>
                    </Link>
                </div>
            </section>
        );
    }

    if (!countryData) {
        return (
            <section className="country-details-section">
                <div className="no-data-container">
                    <h2>No Data Available</h2>
                    <Link to="/country">
                        <button className="btn btn-darken">Back to Countries</button>
                    </Link>
                </div>
            </section>
        );
    }

    const {
        name,
        flags,
        population,
        region,
        subregion,
        capital,
        languages,
        currencies,
        timezones,
        borders,
        area,
        maps
    } = countryData;

    return (
        <section className="country-details-section">
            <div className="container">
                <div className="back-button">
                    <Link to="/country">
                        <button className="btn btn-darken">← Back to Countries</button>
                    </Link>
                </div>
                
                <div className="country-details-grid">
                    <div className="country-flag">
                        <img src={flags.svg} alt={flags.alt || name.common} />
                    </div>
                    
                    <div className="country-info">
                        <h1>{name.common}</h1>
                        <p className="country-official-name">Official Name: {name.official}</p>
                        
                        <div className="details-grid">
                            <div className="detail-item">
                                <span className="detail-label">Population:</span>
                                <span className="detail-value">{population.toLocaleString()}</span>
                            </div>
                            
                            <div className="detail-item">
                                <span className="detail-label">Area:</span>
                                <span className="detail-value">{area.toLocaleString()} km²</span>
                            </div>
                            
                            <div className="detail-item">
                                <span className="detail-label">Region:</span>
                                <span className="detail-value">{region}</span>
                            </div>
                            
                            <div className="detail-item">
                                <span className="detail-label">Sub Region:</span>
                                <span className="detail-value">{subregion}</span>
                            </div>
                            
                            <div className="detail-item">
                                <span className="detail-label">Capital:</span>
                                <span className="detail-value">{capital ? capital.join(', ') : 'N/A'}</span>
                            </div>
                            
                            <div className="detail-item">
                                <span className="detail-label">Timezones:</span>
                                <span className="detail-value">{timezones.join(', ')}</span>
                            </div>
                        </div>

                        {languages && Object.keys(languages).length > 0 && (
                            <div className="language-section">
                                <h3>Languages</h3>
                                <p>{Object.values(languages).join(', ')}</p>
                            </div>
                        )}

                        {currencies && Object.keys(currencies).length > 0 && (
                            <div className="currency-section">
                                <h3>Currencies</h3>
                                {Object.entries(currencies).map(([code, currency]) => (
                                    <p key={code}>
                                        <strong>{code}:</strong> {currency.name} ({currency.symbol})
                                    </p>
                                ))}
                            </div>
                        )}

                        {borders && borders.length > 0 && (
                            <div className="borders-section">
                                <h3>Border Countries</h3>
                                <div className="borders-list">
                                    {borders.map((border, index) => (
                                        <span key={index} className="border-item">{border}</span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {maps && (
                            <div className="maps-section">
                                <h3>Maps</h3>
                                <a 
                                    href={maps.googleMaps} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn btn-outline"
                                >
                                    View on Google Maps
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
