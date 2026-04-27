export default function AppHeader({ search, setSearch, handleSearch, handleHome }) {



    return (
        <header>
            <nav className="navbar navbar-dark movie-navbar px-3">
                <div className="container-fluid">
                    <div className="navbar-brand text-danger d-flex align-items-center" onClick={handleHome} style={{ cursor: "pointer" }}                    >
                        <h4 className="m-0">BOOLFLIX</h4>
                    </div>
                    <button className="btn btn-danger">Movies</button>
                    <button className="btn btn-danger">Tv Series</button>
                    <form onSubmit={handleSearch} className="d-flex" role="search">
                        <input
                            value={search} onChange={(e) => setSearch(e.target.value)}
                            className="form-control search-input" type="search" placeholder="Cerca nel catalogo" aria-label="Search" />
                        <button className="btn btn-danger" type="submit">Cerca</button>
                    </form>
                </div>
            </nav>
        </header>
    )
}