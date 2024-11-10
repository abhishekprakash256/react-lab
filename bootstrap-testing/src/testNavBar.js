import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function test_nav_bar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light sticky-top footer-header-color shadow-sm">


<a className="navbar-brand bold" href="{{ url_for('home') }}">Abhi</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>


    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="{{ url_for('about') }}">About<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="/tech">Tech<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="/project">Projects<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="/life">Life<span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="#contact">Contact<span class="sr-only">(current)</span></a>
            </li>
        </ul>
        <form className="form-inline ml-auto" action="/search" method="POST">
            <input className="form-control mr-sm-2 rounded custom-border" type="search" name="search_query" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn button-custom-color rounded" type="submit">Search</button>
        </form>
    </div>

        </nav>
    );
  }
  
  export default test_nav_bar;