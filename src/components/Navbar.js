import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';

export default function Navbar(props){
    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src={logo} alt="Change Case logo" className='site-logo' /> {props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-end text-lg-start">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Me</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/how-it-works">How it works</Link>
              </li>
            </ul>
            <div className="form-check form-switch d-flex justify-content-end">
              <label className={`form-check-label text-${props.mode==='light'?'dark':'light'} pe-2 me-5`} htmlFor="flexSwitchCheckDefault">{`${props.mode==='dark'?'Dark':'Light'} Mode`}</label>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
            </div>
          </div>
        </div>
      </nav>
    )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired
};
Navbar.defaultProps = {
  title:'Set Title'
};