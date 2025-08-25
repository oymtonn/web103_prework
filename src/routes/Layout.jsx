import { Outlet, Link } from 'react-router-dom'

function Layout() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-title">Creatorverse</div>
        <ul className="navbar-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/create" className="nav-link">Create</Link></li>
        </ul>
      </nav>

      <div style={{ paddingTop: '100px' }}>
        <Outlet />
      </div>
    </>
  )
}

export default Layout
