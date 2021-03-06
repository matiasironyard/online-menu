import React, {Component} from 'react';


export default class HandleOrder extends Component {


  render() {
    let orderFunc = this.props.orderFunc;
    let deleteFunc = this.props.deleteFunc;


    return (
      <div>
        {this.props.item.checkbox === true? (
          <button type="button" className="btn btn-default" onClick={(e) => deleteFunc(this.props.item)}>
            <i className="fa fa-trash-o" aria-hidden="true" ></i>
          </button>
        ):(
          <button ref="btn" type="button" className="btn btn-default" data-toggle="true" onClick={(e) => orderFunc(this.props.item)}>
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
        )}
      </div>
    )
  }
}
