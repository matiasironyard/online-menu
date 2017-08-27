import React, {Component} from 'react';


export default class HandleOrder extends Component {


  render() {
    let orderFunc = this.props.orderFunc;
    let deleteFunc = this.props.deleteFunc;
    console.log('check', this.props.menuItem == this.props.orderItem.dish, this.props.menuItem, this.props.orderItem.refs, this.props.order)
    if(this.props.order === undefined){
      let placeOrder = <button ref="btn" type="button" className="btn btn-default" data-toggle="true" onClick={(e) => orderFunc(this.props.item, this.refs.btn.value)} value={this.props.menuItem}>
        <i className="fa fa-plus" aria-hidden="true"></i>
      </button>
      console.log('what', placeOrder)
    } else {
      let btnCheck = this.props.order.map((item)=>{
        console.log(item)
        if(item.dish === this.props.orderItem.dish){
          return <button ref="btn" type="button" className="btn btn-default disabled" data-toggle={this.props.menuItem} >
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
        } else {
          return <button ref="btn" type="button" className="btn btn-default" data-toggle="true" onClick={(e) => orderFunc(this.props.item, this.refs.btn.value)} value={this.props.menuItem}>
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
        }
      })
      console.log(btnCheck)
    }





    return (
      <div>
        {this.props.menuItem == this.props.orderItem.dish  ? (
          <button ref="btn" type="button" className="btn btn-default" data-toggle="true" onClick={(e) => orderFunc(this.props.item, this.refs.btn.value)} value={this.props.menuItem}>
            <i className="fa fa-plus" aria-hidden="true"></i>Order Down
          </button>
        ):(
          <button ref="btn" type="button" className="btn btn-default" data-toggle="true" onClick={(e) => orderFunc(this.props.item, this.refs.btn.value)} value={this.props.menuItem}>
            <i className="fa fa-plus" aria-hidden="true"></i>Order up
          </button>
        )}

        <button type="button" className="btn btn-default" onClick={(e) => deleteFunc(this.props.item)}>
          <i className="fa fa-trash-o" aria-hidden="true" ></i>
        </button>
      </div>
    )
  }
}
