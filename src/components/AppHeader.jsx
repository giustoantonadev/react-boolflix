export default function AppHeader({ search, setSearch, handleSearch, handleHome }) {



    return (
        <header>
            <nav className="navbar bg-dark px-5">
                <div className="container-fluid">
                    <div className="navbar-brand text-danger d-flex align-items-center" onClick={handleHome} style={{ cursor: "pointer" }}                    >
                        <h4 className="m-0">BOOLFLIX</h4>
                    </div>
                    <form onSubmit={handleSearch} className="d-flex" role="search">
                        <input
                            value={search} onChange={(e) => setSearch(e.target.value)}
                            className="form-control me-2" type="search" placeholder="Cerca nel catalogo" aria-label="Search" />
                        <button className="btn btn-danger" type="submit">Cerca</button>
                    </form>
                </div>
            </nav>
        </header>
    )
}