export default function AppHeader({ search, setSearch, handleSearch }) {



    return (
        <header>
            <div>
                <nav className="navbar bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand text-danger"><h4>BOOLFLIX</h4></a>
                        <form onSubmit={handleSearch} className="d-flex" role="search">
                            <input
                                value={search} onChange={(e) => setSearch(e.target.value)}
                                className="form-control me-2" type="search" placeholder="Cerca nel catalogo" aria-label="Search" />
                            <button className="btn btn-danger" type="submit">Cerca</button>
                        </form>
                    </div>
                </nav>
            </div>

        </header>
    )
}