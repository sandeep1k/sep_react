
const Footer = () => {
    return (
        <footer className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand me-auto" href="/#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="d-flex" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">Home</a>
              </li>
              
            </ul>
            </div>
          
        </div>
      </footer>
    )
}
export default Footer