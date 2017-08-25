import React, {Component} from 'react';

export default class Email extends Component {
  render() {
    return (
      <div className="app-body email">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="primary-text">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1" className="primary-text">
              <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            </label>
            <textarea className="form-control" rows="10"></textarea>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
}
