import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
//IMPORT STYLES
import '../styles/App.css';

export default class About extends Component {

  render() {
    // INLINE STYLING
    let cuisineStyle = {
      "backgroundImage": "linear-gradient(rgba(225, 225, 225, 0.2), rgba(225, 225, 225, 0.2)), url(./images/cuisine.jpg)",
      "backgroundSize": "cover",
      "textShadow": "1px 1px 2px black",
      "height": "100%",
      //  "paddingTop": "20px"
    }
    let aboutStyle = {
      "backgroundImage": "linear-gradient(rgba(225, 225, 225, 0.2), rgba(225, 225, 225, 0.2)), url(./images/dish.jpg)",
      "backgroundSize": "cover",
      "textShadow": "1px 1px 2px black",
      "backgroundPosition": "top",
      //"padding": "100px"
    }

    let chef = {
      "backgroundImage": "url(./images/chef.jpg)",
      "backgroundSize": "cover",
      "backgroundPosition": "middle",
      "height": "100%"
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
      "boxShadow": "rgba(0, 0, 0, 0.4) -2px 9px 5px 0px",
      "textShadow": "1px 1px 2px black",
      "fontFamily": "decorative"
    }
    return (
      <div>
        <div className="row no-gutter header" style={headerStyle}>

          <div className="header-title col-sm-12">
            <div className="restaurant-name" style={titleStyle}>
              <span>Majestic </span><span style={{color:"red"}}> Thai</span>
            </div>
            <div className="subtitle" style={subtitleStyle}>
              East Meets West
            </div>
          </div>

        </div>
        <div className="app-body about  col-sm-10 col-sm-offset-1">
          <section className="row no-gutter tb"style={aboutStyle}>
            <article className="col-sm-6 panels tb-cell">
              <h2 className="headings">
                The Chef
              </h2>
              <hr/>
                <p className="primary-text">
                  Duis ullamcorper urna vitae est imperdiet, ut varius elit eleifend. Nullam nibh nunc, convallis eu nisl sit amet, porta faucibus tortor. Mauris sit amet lacus quis orci ornare condimentum vestibulum nec sem. Fusce suscipit eros diam, a pretium erat cursus id. Nam ullamcorper mauris sed vulputate consectetur. Donec id gravida nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse non turpis eu justo feugiat vehicula. Nam nec nulla odio. Pellentesque ac mattis justo.
                </p>
            </article>
            <div className="col-sm-6 tb-cell" style={chef}>
            </div>
          </section>
          <section className="row no-gutter" style={aboutStyle}>
            <article className="col-sm-6 col-sm-offset-6 panels">
              <h2 className="headings">
                Our History
              </h2>
              <hr/>
              <p className="primary-text">
                Duis ullamcorper urna vitae est imperdiet, ut varius elit eleifend. Nullam nibh nunc, convallis eu nisl sit amet, porta faucibus tortor. Mauris sit amet lacus quis orci ornare condimentum vestibulum nec sem. Fusce suscipit eros diam, a pretium erat cursus id. Nam ullamcorper mauris sed vulputate consectetur. Donec id gravida nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse non turpis eu justo feugiat vehicula. Nam nec nulla odio. Pellentesque ac mattis justo.
              </p>
            </article>
          </section>
          <section className="row no-gutter" style={cuisineStyle}>
            <article className="col-sm-6 panels">
              <h2 className="headings">
                Our Cuisine
              </h2>
              <hr/>
              <p className="primary-text">Duis ullamcorper urna vitae est imperdiet, ut varius elit eleifend. Nullam nibh nunc, convallis eu nisl sit amet, porta faucibus tortor. Mauris sit amet lacus quis orci ornare condimentum vestibulum nec sem. Fusce suscipit eros diam, a pretium erat cursus id. Nam ullamcorper mauris sed vulputate consectetur. Donec id gravida nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse non turpis eu justo feugiat vehicula.
              </p>
            </article>
          </section>
        </div>
      </div>
    );
  }
}
