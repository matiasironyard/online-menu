import React, {Component} from 'react';

export default class OrderModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
      quantity: 1,
      subTotal: this.props.subTotal,
    }
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.order !== this.props.order) {
      this.setState({order: nextProps.order});
    }
  }


  handleIncrement = (e) => {
    this.props.increment(e);
  }

  handleDecrement = (e) => {
    this.props.decrement(e);
  }

/*  handleSubTotal=(e)=>{
    let prices = [0];
    let i;
    for(i = 0; i < e.length; i ++){
      console.log('order for', e[i])
      let x = Number(e[i].price)
      prices.push(x)
    }
    const sum = prices.reduce((total, amount) => total + amount);
  }*/

  render() {
    let order = this.state.order;
    let prices = [0];
    let i;
    for(i = 0; i < order.length; i ++){
      let x = Number(order[i].price) * order[i].quantity
      prices.push(x)
    }
    let subTotal = prices.reduce((total, amount) => total + amount).toFixed(2);
    let tax = (subTotal * (6/100)).toFixed(2)
    tax = Number(tax)
    let total = subTotal;
    total = Number(total)
    let grandTotal = (total + tax).toFixed(2);

   let deleteFunc = this.props.deleteFunc



    let items = order.map((items) => {
      let price = Number(items.price)
      let quantity = items.quantity;
      let itemTotal = price * quantity;
      let toDecimals = itemTotal.toFixed(2);
      let key = Math.random();


      return (
        <tr key={key} style={{"zIndex": "1"}}>
          <td>{items.dish}</td>
          <td>
            {items.quantity}
          </td>
          <td>
            <div className="btn-group" role="group" aria-label="...">
              <button type="button" className="btn btn-default" onClick={(e) => this.handleIncrement(items)}>
                <i className="fa fa-plus-circle" aria-hidden="true"></i>
              </button>
              {items.quantity > 0 ? (
                <button type="button" className="btn btn-default" onClick={() => this.handleDecrement(items)}>
                  <i className="fa fa-minus-circle" aria-hidden="true"></i>
                </button>
              ):(
                <button type="button" className="btn btn-default" disabled>
                  <i className="fa fa-minus-circle" aria-hidden="true"></i>
                </button>
              )}
              <button type="button" className="btn btn-default" onClick={(e) => deleteFunc(items)}>
                <i className="fa fa-trash-o" aria-hidden="true"></i>
              </button>
            </div>
          </td>
          <td>
            <div className="btn-group" style={{"zIndex": "99"}}>
              <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-leaf" aria-hidden="true"></i> Level <span className="caret"></span>
              </button>
              <ul className="dropdown-menu" style={{"position": "relative", "zIndex": "99"}}>
                <li><a>1</a></li>
                <li><a>2</a></li>
                <li><a>3</a></li>
                <li><a>4</a></li>
                <li><a>5</a></li>
              </ul>
            </div>
          </td>
          <td>{toDecimals}</td>
        </tr>
      )
    })

    return (
      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title" id="myModalLabel">Order Checkout</h4>
            </div>
            <div className="modal-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Dish</th>
                      <th>Quantity</th>
                      <th>Adjust</th>
                      <th>Spice</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items}
                  </tbody>
                </table>
              </div>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Subtotal</th>
                      <th>Tax</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{subTotal}</td>
                      <td>{tax}</td>
                      <td>{grandTotal}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Back to menu </button>
              <button type="button" className="btn btn-primary">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
