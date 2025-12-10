

import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "../components/UI/Loader";
import { CountryCard } from "../components/Layout/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState();
    const [filter, setFilter] = useState("all");


    useEffect(() => {
        startTransition(async () => {
            try {
                setError(null);
                const res = await getCountryData();
                console.log("API Response:", res);

                // Check if res.data exists and is an array
                if (res.data && Array.isArray(res.data)) {
                    setCountries(res.data);
                } else {
                    console.error("Unexpected response format:", res.data);
                    setError("Invalid data format received");
                }
            } catch (err) {
                console.error("Error fetching countries:", err);
                setError("Failed to load countries. Please try again.");
            }
        });
    }, []);

    if (isPending) return <Loader />;

    if (error) {
        return (
            <section className="country-section">
                <div className="error-container">
                    <h2>Error</h2>
                    <p>{error}</p>
                    <button onClick={() => window.location.reload()}>Retry</button>
                </div>
            </section>
        );
    }

    // Only render countries if it's an array
    if (!Array.isArray(countries) || countries.length === 0) {
        return (
            <section className="country-section">
                <div className="no-data-container">
                    <h2>No Countries Found</h2>
                    <p>Please check your internet connection and try again.</p>
                </div>
            </section>
        );
    }
    const searchCountry = (country) => {
        if (search) {
            return country.name.common.toLowerCase().includes(search.toLowerCase());
        }
        return country;
    };

const filterRegion = (country) => {
  if (filter === "all") return country;
  return country.region === filter;
};


    const filterCountries = countries.filter((country) => searchCountry(country)
        && filterRegion(country));
    return (
        <section className="country-section">
            <SearchFilter 
            search={search} 
            setSearch={setSearch} 
            filter={filter} 
            setFilter={setFilter} 
            countries={countries}
            setCountries={setCountries}
            />

            <ul className="grid grid-four-cols">
                {filterCountries.map((curCountry, index) => {
                    return <CountryCard country={curCountry} key={index} />;
                })}
            </ul>
        </section>
    );
};
