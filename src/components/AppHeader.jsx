export default function AppHeader({ search, setSearch, handleSearch }) {

   
  
    return (
        <header>
            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-danger">BOOLFLIX</a>
                    <form onSubmit={handleSearch} className="d-flex" role="search">
                        <input
                            value={search} onChange={(e) => setSearch(e.target.value)}
                            className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </header>
    )
}