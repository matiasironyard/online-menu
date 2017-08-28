import React, {Component} from 'react';

export default class ModalButton extends Component {


  render() {
    console.log('but', this.props.order)
    return(
      <div className="row no-gutter">
      <div className="order-button-panel col-xs-8 col-lg-5">
        {this.props.order.length > 0 ? (
              <div type="button" className="order-button-button pull-right" data-toggle="modal" data-target="#myModal" style={{zIndex: "2"}}>
                View Order ({this.props.order.length})
              </div>
            ):(<span></span>)}
      </div>
      </div>
        )
  }
}
