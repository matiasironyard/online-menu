import React, {Component} from 'react';
// IMPORT EMAIL COMPONENT
import Email from '../components/Email'

export default class Find extends Component {
  render() {
    // INLINE STYLING
    let style = {
      "backgroundColor": "#222222",
      "backgroundSize": "cover",
      "height": "100%",
      "padding": "30px"
    }
    let subHeadings = {
      "color": "#fff"
    }

    return (
      <div className="findus offset col-sm-10 col-sm-offset-1">
        <section className="row" style={style}>
          <div className="col-sm-5 map">
            <h3 className="sub-headings" style={subHeadings}>Directions</h3>
            <img className="img-responsive" src="https://maps.googleapis.com/maps/api/staticmap?center=greenville,sc&zoom=16&scale=3&size=600x500&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7Cgreenville,+sc" alt="Google Map of greenville,sc"/>
            <a href="">
              <p className="primary-text">Majestic Thai 100 Main Street, Spartanburg, SC, 29302
              </p>
            </a>
          </div>
          <div className="col-sm-7">
            <h3 className="sub-headings" style={subHeadings}>
              Contact Us
            </h3>
            <hr/>
              <h4 className="sub-headings" style={subHeadings}>
                Call us
              </h4>
            <p className="primary-text">
              <i className="fa fa-phone" aria-hidden="true"></i> 864-456-6789
            </p>
            <hr/>
            <h4 className="sub-headings" style={subHeadings}>
              Message Us
            </h4>
            <Email/>
          </div>
        </section>
      </div>
    );
  }
}
