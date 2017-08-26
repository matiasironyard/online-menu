import React, {Component} from 'react';
// IMPORT Link
import { NavLink } from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){
    // INLINE STYLING
    let titleStyle = {
      "fontFamily": "Arizonia",
      "fontSize": "12rem",
    }
    let subtitleStyle = {
      "fontFamily": "Raleway",
      "fontSize": "7rem"
    }
    let headerStyle = {
      "textAlign": "center",
      "height": "600px",
      "paddingTop": "100px",
      "color": "#fff",
      "backgroundImage": "url(./images/header2.jpeg)",
      "backgroundSize": "cover",
      "backgroundPosition": "center",
      "boxShadow":"rgba(0, 0, 0, 0.22) -2px 9px 5px 0px",
      "textShadow": "1px 1px 2px black",
      "fontFamily": "decorative",
    }
    let navTitle = {
      "fontFamily": "Arizonia",
      "fontSize": "180%"
    }
    return (
      <div>

        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <NavLink activeClassName="selected" className="navbar-brand" to="/" style={navTitle}>MajesticThai</NavLink>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li>
                    <NavLink  activeClassName="selected" to="/menu">
                      <span>Menu </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink  activeClassName="selected" to="/findus">
                      <span>Find Us </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink  activeClassName="selected" to="">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </NavLink>
                  </li>

                </ul>
              </div>
            </div>
          </nav>
            <div
              className="row header"
              style={headerStyle}>
              <div className="header-title col-sm-12">
                <div
                  className="restaurant-name"
                  style={titleStyle}>
                  Majestic Thai
                </div>
                <div className="subtitle hidden-xs" style={subtitleStyle}>
                  East Meets West
                </div>
              </div>
            </div>

            {/*
              PASS IN CHILDREN
              */}
              <div className="row">
                {this.props.children}
              </div>



        <footer className="row">
          <div className="col-sm-12">
            <span className="footer-title">Majestic Thai </span>
            <span>
              100 Main Street, Spartanburg, SC, 29302 | (864) 898-9999
            </span>
          </div>
        </footer>

        </div>

    );
  }
}
