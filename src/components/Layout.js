import React, {Component} from 'react';
// IMPORT Link
import { NavLink } from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){
    let navTitle = {
      "fontFamily": "Arizonia",
      "fontSize": "180%"
    }
    console.log('layout', this)
    return (
      <div>
        <div className="row no-gutter">

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
          </div>


            {/*
              PASS IN CHILDREN
              */}
              <div className="row no-gutter">
                {this.props.children}
              </div>



        <footer className="row no-gutter">
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
