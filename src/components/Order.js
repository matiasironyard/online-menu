import React, {Component} from 'react';

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: this.props.tag,
    }
  }


  render() {
    let orderFunc = this.props.orderFunc;
    let deleteFunc = this.props.deleteFunc;

    return (
      <div className="btn-group" role="group" aria-label="...">
        {this.state.tag === true
          ? (
            <button type="button" className="btn btn-default" onClick={(e) => orderFunc(this.props.item) + this.setState({tag: false})}>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
          )
          : (
            <button type="button" className="btn btn-default disabled">
              <i className="fa fa-check" aria-hidden="true"></i>
            </button>
          )}
        {this.state.tag === false
          ? (
            <button type="button" className="btn btn-default" onClick={(e) => deleteFunc(this.props.item) + this.setState({tag: true})}>
              <i className="fa fa-trash-o" aria-hidden="true"></i>
            </button>
          )
          : (
            <button type="button" className="btn btn-default disabled" onClick={(e) => deleteFunc(this.props.item) + this.setState({tag: true})}>
              <i className="fa fa-trash-o" aria-hidden="true"></i>
            </button>
          )}
      </div>
    )
  }
}
