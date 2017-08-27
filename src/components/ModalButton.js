import React, {Component} from 'react';

export default class ModalButton extends Component {


  render() {
    console.log('but', this.props.order)
    return(
      <div>
        {this.props.order.length > 0 ? (
              <button type="button" className="btn btn-default pull-right order-btn" data-toggle="modal" data-target="#myModal" style={{zIndex: "2"}}>
                View Order ({this.props.order.length})
              </button>
            ):(<span></span>)}
      </div>
        )
  }
}
