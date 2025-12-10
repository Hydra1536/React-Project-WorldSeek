

export const SearchFilter = ({
    search,
    setSearch,
    filter,
    setFilter,
    countries,
    setCountries
}) => {
    const handleInputChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    };
    
    const handleSelectChange = (event) => {
        event.preventDefault();
        setFilter(event.target.value);
    };
    
    const sortCountries = (order) => {
        const sortedCountries = [...countries].sort((a, b) => {
            const nameA = a.name.common.toLowerCase();
            const nameB = b.name.common.toLowerCase();
            
            if (order === "asc") {
                return nameA.localeCompare(nameB);
            } else {
                return nameB.localeCompare(nameA);
            }
        });
        
        setCountries(sortedCountries);
    };

    const clearSearch = () => {
        setSearch('');
    };
    
    return (
        <section className="search-filter-section">
            <div className="search-filter-container">
                <div className="search-input-wrapper">
                    <div className="search-icon">🔍</div>
                    <input
                        type="text"
                        placeholder="Search countries by name..."
                        value={search}
                        onChange={handleInputChange}
                        className="search-input"
                    />
                    {search && (
                        <button 
                            onClick={clearSearch}
                            className="clear-search-btn"
                            title="Clear search"
                        >
                            ✕
                        </button>
                    )}
                </div>
                
                <div className="filter-controls">
                    <div className="sort-buttons">
                        <button 
                            onClick={() => sortCountries("asc")}
                            className="sort-btn sort-asc"
                            title="Sort A to Z"
                        >
                            <span className="sort-icon">↗️</span>
                            A-Z
                        </button>
                        <button 
                            onClick={() => sortCountries("desc")}
                            className="sort-btn sort-desc"
                            title="Sort Z to A"
                        >
                            <span className="sort-icon">↘️</span>
                            Z-A
                        </button>
                    </div>
                    
                    <div className="region-filter">
                        <div className="filter-icon">🌍</div>
                        <select 
                            value={filter} 
                            onChange={handleSelectChange}
                            className="region-select"
                        >
                            <option value="all">All Regions</option>
                            <option value="Africa">Africa</option>
                            <option value="Americas">Americas</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                        </select>
                    </div>
                </div>
            </div>
            
            {/* Active filters display */}
            {(search || filter !== "all") && (
                <div className="active-filters">
                    <span className="active-filters-label">Active filters:</span>
                    {search && (
                        <span className="filter-tag">
                            Search: "{search}"
                            <button onClick={clearSearch} className="remove-filter">✕</button>
                        </span>
                    )}
                    {filter !== "all" && (
                        <span className="filter-tag">
                            Region: {filter}
                            <button onClick={() => setFilter("all")} className="remove-filter">✕</button>
                        </span>
                    )}
                </div>
            )}
        </section>
    );
};
