import React, {Component} from 'react';
import $ from 'jquery';

export default class OrderModal extends Component {
  constructor(props) {
    super(props);
    this._initState = {
      order: [],
      quantity: 1,
      checkout: false,
      makePayment: "Make Payment",
      paymentStatus: false,
      orderComplete: false,
      collapse: "collapse",
      orderNumber: 0
    }
    this.state = this._initState;
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.processPayment = this.processPayment.bind(this);
    this.resetModal = this.resetModal.bind(this);
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

  processPayment = () => {
    let orderNumber = Math.floor(Math.random() * 89999 + 10000);
    setTimeout(() => {
      this.props.reset()
      this.setState({makePayment: "Done!", checkout: false, orderComplete: true, orderNumber: orderNumber})
    }, 2000);
  }

  resetModal = (e) => {
    this.setState(this._initState);
  }


  render() {
    console.log('hi', this)
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

    let deleteFunc = this.props.deleteFunc;

    let processPayment = this.state.processPayment;

    console.log('this state now', this.state)

    let items = order.map((items) => {
      let price = Number(items.price)
      let quantity = items.quantity;
      let itemTotal = price * quantity;
      let toDecimals = itemTotal.toFixed(2);
      let key = Math.random();

      return (
        <tr key={key}>
          <td>{items.dish} (Qty. {items.quantity})</td>
          <td>$ {toDecimals}</td>
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
        </tr>
      )
    })

    return (
      <div className="row no-gutter">
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
                          <th>Total</th>
                          <th>Adjust</th>
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
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{subTotal}</td>
                          <td>{tax}</td>
                          <td>$ {grandTotal}</td>
                          <td>
                            <button type="button" className="btn btn-default" data-toggle="collapse" data-target="#collapsePayment" aria-expanded="false" aria-controls="collapsePayment">Check Out</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="row no-gutter">
                  <div className="col-sm-12">
                    {(this.state.orderComplete === false)
                      ? <div>
                          <div className="collapse" id="collapsePayment">
                            <div className="col-sm-12">
                              <div className="panel panel-default">
                                <div className="panel-heading">
                                  <h3 className="panel-title">
                                    Payment Details
                                  </h3>
                                </div>

                                <div className="panel-body">
                                  <form>
                                    <div className="form-group col-sm-6">
                                      <label htmlFor="firstName">
                                        FIRST NAME</label>
                                      <div className="input-group">
                                        <input type="text" className="form-control" id="firstName" placeholder="First Name" required autoFocus/>
                                      </div>
                                    </div>
                                    <div className="form-group col-sm-6">
                                      <label htmlFor="lastName">
                                        LAST NAME</label>
                                      <div className="input-group">
                                        <input type="text" className="form-control" id="lastName" placeholder="Last Name" required autoFocus/>
                                      </div>
                                    </div>
                                    <div className="form-group col-sm-6">
                                      <label htmlFor="phone">
                                        PHONE NUMBER</label>
                                      <div className="input-group">
                                        <input type="tel" name="usrtel" className="form-control" id="phone" placeholder="Phone Number" required autoFocus/>
                                      </div>
                                    </div>
                                    <div className="form-group col-sm-6">
                                      <label htmlFor="email">
                                        EMAIL ADDRESS</label>
                                      <div className="input-group">
                                        <input type="text" className="form-control" id="email" placeholder="Email Address" required autoFocus/>
                                      </div>
                                    </div>
                                    <div className="form-group col-sm-12">
                                      <label htmlFor="cardNumber">
                                        CARD NUMBER</label>
                                      <div className="input-group">
                                        <input type="text" className="form-control" id="cardNumber" placeholder="Valid Card Number" required autoFocus/>
                                        <span className="input-group-addon">
                                          <span className="glyphicon glyphicon-lock"></span>
                                        </span>
                                      </div>
                                    </div>
                                    <div className="form-group">

                                      <div className="col-sm-4">
                                        <label htmlFor="expityMonth">
                                          EXPIRY MONTH</label>
                                        <input type="text" className="form-control" id="expityMonth" placeholder="MM" required/>
                                      </div>
                                      <div className="col-sm-4">
                                        <label htmlFor="expityYear">
                                          EXPIRY YEAR</label>
                                        <input type="text" className="form-control" id="expityYear" placeholder="YY" required/>
                                      </div>
                                      <div className="col-sm-4">
                                        <label htmlFor="cvCode">
                                          CV</label>
                                        <input type="password" className="form-control" id="cvCode" placeholder="CV" required/>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                                <div className="panel-footer">
                                  <button type="button" className="btn btn-default" data-toggle="collapse" data-target="#collapseStatus" aria-expanded="false" aria-controls="collapseStatus" onClick={() => this.setState({checkout: true}) + this.processPayment()}>
                                    {(this.state.checkout === false)
                                      ? <div>{this.state.makePayment}</div>
                                      : <i className="fa fa-refresh fa-spin fa-3x fa-fw" aria-hidden="true"></i>
                                    }
                                  </button>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      : <div></div>
                    }
                  </div>
                </div>

                <div className="row no-gutter">
                  <div className="col-sm-12">
                    <div className="collapse" id="collapseStatus">
                      <div className="well">
                        <ul className="list-group">
                          {(this.state.orderComplete === true)
                            ? <li className="list-group-item">
                                <span className="badge">
                                  <i className="fa fa-check" aria-hidden="true"></i>
                                </span>
                                Payment Received!
                              </li>
                            : <li className="list-group-item">
                              <span className="badge">
                                <i className="fa fa-refresh fa-spin fa-3x fa-fw" aria-hidden="true"></i>
                              </span>
                              Processing Payment...
                            </li>
                          }
                          {(this.state.orderComplete === true)
                            ? <li className="list-group-item">
                                <span className="badge">
                                  <i className="fa fa-check" aria-hidden="true"></i>
                                </span>
                                Order Received!
                              </li>
                            : <li className="list-group-item">
                              <span className="badge">
                                <i className="fa fa-refresh fa-spin fa-3x fa-fw" aria-hidden="true"></i>
                              </span>
                              Sending Order...
                            </li>
                          }
                          {(this.state.orderComplete === true)
                            ? <li className="list-group-item">
                                <span className="badge">
                                  Order #: {this.state.orderNumber}
                                </span>
                                Order received. You will receive a text when your order is ready.
                              </li>
                            : <li className="list-group-item">
                              <span className="badge">
                                <i className="fa fa-refresh fa-spin fa-3x fa-fw" aria-hidden="true"></i>
                              </span>
                              Sending Order...
                            </li>
                          }
                        </ul>
                      </div>
                    </div>
                    <div className="modal-footer">
                      {(this.state.orderComplete === false) ?
                        <button type="button" className="btn btn-default" data-dismiss="modal" >Back to menu
                        </button>
                        :
                        <button type="button" className="btn btn-default" data-dismiss="modal" data-toggle="collapse" data-target="#collapseStatus" aria-expanded="false" aria-controls="collapseStatus" onClick={(e) => this.resetModal()}>Thank you!
                        </button>
                      }
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
