import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
//IMPORT STYLES
import '../styles/App.css';

export default class About extends Component {

  render() {
    // INLINE STYLING
    let cuisineStyle = {
      "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/cuisine.jpg)",
      "backgroundSize": "cover",
      "textShadow": "1px 1px 2px black",
      "height": "100%",
      //  "paddingTop": "20px"
    }
    let aboutStyle = {
      "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/dish.jpg)",
      "backgroundSize": "cover",
      "textShadow": "1px 1px 2px black",
      "backgroundPosition": "top",
      "height": "100%",
      //"padding": "100px"
    }
    // INLINE STYLING
    let titleStyle = {
      "fontFamily": "Arizonia",
      "fontSize": "3rem"
    }
    let subtitleStyle = {
      "fontFamily": "Raleway",
      "fontSize": "2rem"
    }
    let headerStyle = {
      "textAlign": "center",
      "height": "15rem",
      "paddingTop": "100px",
      "color": "#fff",
      "backgroundImage": "url(./images/header2.jpeg)",
      "backgroundSize": "cover",
      "backgroundPosition": "center",
      "boxShadow": "rgba(0, 0, 0, 0.22) -2px 9px 5px 0px",
      "textShadow": "1px 1px 2px black",
      "fontFamily": "decorative"
    }
    return (
      <div>
        <div className="row no-gutter header" style={headerStyle}>

          <div className="header-title col-sm-12">
            <div className="restaurant-name" style={titleStyle}>
              Majestic Thai
            </div>
            <div className="subtitle" style={subtitleStyle}>
              East Meets West
            </div>
          </div>

        </div>
        <div className="app-body about  col-sm-10 col-sm-offset-1">
          <section className="row no-gutter" style={aboutStyle}>
            <article className="col-sm-10 col-sm-offset-1">
              <h2 className="headings">
                Our History
              </h2>
              <hr/>
              <p className="primary-text">
                Duis ullamcorper urna vitae est imperdiet, ut varius elit eleifend. Nullam nibh nunc, convallis eu nisl sit amet, porta faucibus tortor. Mauris sit amet lacus quis orci ornare condimentum vestibulum nec sem. Fusce suscipit eros diam, a pretium erat cursus id. Nam ullamcorper mauris sed vulputate consectetur. Donec id gravida nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse non turpis eu justo feugiat vehicula. Nam nec nulla odio. Pellentesque ac mattis justo. Praesent pretium interdum ipsum quis varius. Cras molestie enim diam, malesuada maximus urna consequat sit amet. Etiam elementum convallis viverra. Aliquam rhoncus lorem enim, non pulvinar diam molestie egestas. Morbi mollis ultrices odio, vitae euismod erat ornare at.
              </p>
            </article>
          </section>
          <section className="row no-gutter" style={cuisineStyle}>
            <article className="col-sm-8">
              <h2 className="headings">
                Our Cuisine
              </h2>
              <hr/>
              <p className="primary-text">Duis ullamcorper urna vitae est imperdiet, ut varius elit eleifend. Nullam nibh nunc, convallis eu nisl sit amet, porta faucibus tortor. Mauris sit amet lacus quis orci ornare condimentum vestibulum nec sem. Fusce suscipit eros diam, a pretium erat cursus id. Nam ullamcorper mauris sed vulputate consectetur. Donec id gravida nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse non turpis eu justo feugiat vehicula.
              </p>
            </article>
            <aside className="col-sm-12 about-menu-btn sub-headings">
              <NavLink activeClassName="selected" to="/menu" className="btn btn-default-mod btn-lg">
                Our Menu
              </NavLink>
            </aside>
          </section>
        </div>
      </div>
    );
  }
}
