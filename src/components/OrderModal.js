import React, {Component} from 'react';

export default class OrderModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
      quantity: 1,
      subTotal: this.props.subTotal,
      checkout: false,
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
    for (i = 0; i < order.length; i++) {
      let x = Number(order[i].price) * order[i].quantity
      prices.push(x)
    }
    let subTotal = prices.reduce((total, amount) => total + amount).toFixed(2);
    let tax = (subTotal * (6 / 100)).toFixed(2)
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
        <tr key={key} style={{
          "zIndex": "1"
        }}>
          <td>{items.dish}</td>
          <td>
            {items.quantity}
          </td>
          <td>
            <div className="btn-group" role="group" aria-label="...">
              <button type="button" className="btn btn-default" onClick={(e) => this.handleIncrement(items)}>
                <i className="fa fa-plus-circle" aria-hidden="true"></i>
              </button>
              {items.quantity > 0
                ? (
                  <button type="button" className="btn btn-default" onClick={() => this.handleDecrement(items)}>
                    <i className="fa fa-minus-circle" aria-hidden="true"></i>
                  </button>
                )
                : (
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
            <div className="btn-group" style={{
              "zIndex": "99"
            }}>
              <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-leaf" aria-hidden="true"></i>
                Level
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu" style={{
                "position": "relative",
                "zIndex": "99"
              }}>
                <li>
                  <a>1</a>
                </li>
                <li>
                  <a>2</a>
                </li>
                <li>
                  <a>3</a>
                </li>
                <li>
                  <a>4</a>
                </li>
                <li>
                  <a>5</a>
                </li>
              </ul>
            </div>
          </td>
          <td>{toDecimals}</td>
        </tr>
      )
    })

    return (
      <div className="row">
        <div className="col-sm-12">
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
              <button type="button" className="btn btn-primary pull-right" type="button" data-toggle="collapse" data-target="#collapsePayment" aria-expanded="false" aria-controls="collapsePayment">Check Out</button>
            </div>
            <div className="row no-gutter">
              <div className="col-sm-12">
                <div className="collapse" id="collapsePayment">
                  <div className="col-sm-12">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h3 className="panel-title">
                          Payment Details
                        </h3>
                      </div>
                      <div className="panel-body">
                        <form role="form">
                          <div className="form-group">
                            <label for="firstName">
                              FIRST NAME</label>
                            <div className="input-group">
                              <input type="text" className="form-control" id="firstName" placeholder="First Name" required autofocus/>
                            </div>
                            <label for="lastName">
                              LAST NAME</label>
                            <div className="input-group">
                              <input type="text" className="form-control" id="lastName" placeholder="Last Name" required autofocus/>
                            </div>
                            <label for="phone">
                              PHONE NUMBER</label>
                            <div className="input-group">
                              <input type="tel" name="usrtel" className="form-control" id="phone" placeholder="Phone Number" required autofocus/>
                            </div>
                            <label for="email">
                              EMAIL ADDRESS</label>
                            <div className="input-group">
                              <input type="text" className="form-control" id="email" placeholder="Email Address" required autofocus/>
                            </div>
                          </div>
                          <div className="form-group">
                            <label for="cardNumber">
                              CARD NUMBER</label>
                            <div className="input-group">
                              <input type="text" className="form-control" id="cardNumber" placeholder="Valid Card Number" required autofocus/>
                              <span className="input-group-addon">
                                <span className="glyphicon glyphicon-lock"></span>
                              </span>
                            </div>
                          </div>
                          <div className="row no-gutter">
                            <div className="col-sm-4">
                              <div className="form-group">
                                <label for="expityMonth">
                                  EXPIRY DATE</label>
                                <div className="col-sm-6">
                                  <input type="text" className="form-control" id="expityMonth" placeholder="MM" required/>
                                </div>
                                <div className="col-sm-6">
                                  <input type="text" className="form-control" id="expityYear" placeholder="YY" required/></div>
                              </div>
                            </div>
                            <div className="col-xs-5 col-md-5 pull-right">
                              <div className="form-group">
                                <label for="cvCode">
                                  CV CODE</label>
                                <input type="password" className="form-control" id="cvCode" placeholder="CV" required/>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <button type="button" className="btn btn-primary pull-right" type="button" data-toggle="collapse" data-target="#collapseStatus" aria-expanded="false" aria-controls="collapseStatus" onClick={()=>this.setState({checkout: true})}>
                      {this.state.checkout === false ? (
                        "Make Payment"
                      ):(
                        <i className="fa fa-refresh fa-spin fa-3x fa-fw" aria-hidden="true"></i>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row no-gutter">
              <div className="col-sm-12">
                <div className="collapse" id="collapseStatus">
                  <div className="well">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <span className="badge">
                          <i className="fa fa-refresh fa-spin fa-3x fa-fw" aria-hidden="true"></i>
                        </span>
                        Processing payment...
                      </li>
                      <li className="list-group-item">
                        <span className="badge">
                          <i className="fa fa-refresh fa-spin fa-3x fa-fw" aria-hidden="true"></i>
                        </span>
                        Processing order...
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Back to menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    )
  }
}
