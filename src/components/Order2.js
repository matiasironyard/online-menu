import React, {Component} from 'react';


export default class HandleOrder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      thisOrder: this.props.order
    }
    this.handleOrder = this.handleOrder.bind(this);
  }


  handleOrder = (e) => {
    let dish = e.dish;
    let price = e.price
    let orderItem = {
      dish: dish,
      price: price,
      quantity: 1,
    };
    console.log('>', orderItem)
    let joined;
    if(this.state.thisOrder === undefined){
      joined = this.state.thisOrder.concat(orderItem)

    } else {
      joined = [0]
    }
    this.setState({thisOrder: this.props.orderFunc(joined)});
  }




  render() {
    console.log('state', this.state)
    let orderFunc= this.props.orderFunc;
    let deleteFunc = this.props.deleteFunc;


    return (
      <div>
        {this.props.item.checkbox === true? (
          <button type="button" className="btn btn-default" onClick={(e) => deleteFunc(this.props.item)}>
            <i className="fa fa-trash-o" aria-hidden="true" ></i>
          </button>
        ):(
          <button ref="btn" type="button" className="btn btn-default" data-toggle="true" onClick={(e) => this.handleOrder(this.props.item)}>
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
        )}
      </div>
    )
  }
}
