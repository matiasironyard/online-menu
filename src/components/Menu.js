import React, {Component} from 'react';
import update from 'immutability-helper';

// IMPORT COMPONENTS
import Appetizers from '../components/Appetizers';
import Entrees from '../components/Entrees';
import Desserts from '../components/Desserts';
import OrderModal from '../components/OrderModal';
import ModalButton from '../components/ModalButton';

class Menu extends Component {
  constructor(props) {
    super(props);
    this._initState = {
      appetizers: [],
      entrees: [],
      desserts: [],
      order: [0],
      toggleActive: false,
      orderItem: 'crab',
    }
    this.state = this._initState;
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }
  // Lifecycle method
  // Fetch from http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu.
  // The response should return an object with appetizers, entres, and desserts.
  // Set these to state.
  componentDidMount() {
    // Set your API URL with the API key.
    let url = "https://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu";
    // Fetch data from API
    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      let menu = data[0];
      let appetizers = menu.Appetizers;
      let i;
      for (i in appetizers) {
        appetizers[i].checkbox = false;
        appetizers[i].cat = 'appetizers';
      }
      let entrees = menu.Entrees;
      for (i in entrees) {
        entrees[i].checkbox = false;
        entrees[i].cat = 'entrees';
      }
      let desserts = menu.Desserts;
      for (i in desserts) {
        desserts[i].checkbox = false;
        desserts[i].cat = 'desserts';
      }
      this.setState({appetizers: appetizers, entrees: entrees, desserts: desserts})
    });
  }

  handleOrder = (e) => {
<<<<<<< HEAD
    console.log('e', e)

    let joined = this.state.order.concat(e);
    console.log('joined', joined)
    this.setState({order: joined})
=======
    let dish = e.dish;
    let price = e.price;
    let cat = e.cat;
    let orderItem = {
      dish: dish,
      price: price,
      quantity: 1,
      cat: cat
    };
    let joined = this.state.order.concat(orderItem);

    let state;
    if (cat === "appetizers") {
      state = this.state.appetizers
    } else if (cat === "entrees") {
      state = this.state.entrees
    } else if (cat === "desserts") {
      state = this.state.desserts
    }

    function isItem(element) {
      return element.dish === dish;
    }
    let index = state.findIndex(isItem);

    let newObj = update(state, {
      checkbox: {
        $set: state[index].checkbox = true
      }
    });
    this.setState({order: joined, toggleActive: true, orderItem: orderItem, state: newObj})

>>>>>>> be50778
  }

  handleDelete = (e) => {
    let dish = e.dish;
    let cat = e.cat;
    let state;
    if (cat === "appetizers") {
      state = this.state.appetizers
    } else if (cat === "entrees") {
      state = this.state.entrees
    } else if (cat === "desserts") {
      state = this.state.desserts
    }
    function isItem(element) {
      return element.dish === dish;
    }
    let item = this.state.order.find(isItem);
    let updatedOrder = this.state.order.filter(function(i) {
      return i !== item
    });

    function findIndex(element) {
      return element.dish === dish;
    }
    let index = state.findIndex(findIndex);
    let newObj = update(state, {
      checkbox: {
        $set: state[index].checkbox = false
      }
    });
    this.setState({order: updatedOrder, state: newObj})
  }
  reset = ()=>{
    this.setState(this._initState, this.componentDidMount())
  }
  handleIncrement = (e) => {
    e.quantity++;
    this.setState({order: this.state.order})
  }

  handleDecrement = (e) => {
    e.quantity--;
    this.setState({order: this.state.order})
  }

  render() {
    // Your render should consist of the BaseLayout with the following children componenets: Appetizers, Entres, and Dessert.
    // Each component needs to receive state via props.
    return (
      <div className="app-body offset col-sm-10 col-sm-offset-1">
<<<<<<< HEAD
        <h2 className="col-sm-offset-2 headings">Menu</h2>
        {this.state.order.length > 0
          ? (<ModalButton className="hidden" order={this.state.order}/>)
          : (
            <span className="hidden"></span>
          )}
        <OrderModal order={this.state.order} increment={this.handleIncrement} decrement={this.handleDecrement} subTotal={this.state.subTotal} deleteFunc={this.handleDelete}/>
        <Appetizers appetizers={this.state.appetizers} orderFunc={this.handleOrder} deleteFunc={this.handleDelete} toggleActive={this.state.toggleActive} orderItem={this.state.orderItem} order={this.state.order}/>
=======
        <div className="row no-gutter">
          <h2 className=" headings panels col-xs-8 col-lg-5">
            <span style={{color:"white"}}>Our </span><span style={{color:"red"}}> Menu</span>
          </h2>
        </div>
        <div className="row no-gutter">
          {this.state.order.length > 0
            ? (
              <ModalButton order={this.state.order}/>
            )
            : (
              <span className="hidden"></span>
            )}
        </div>
        <OrderModal order={this.state.order} increment={this.handleIncrement} decrement={this.handleDecrement} subTotal={this.state.subTotal} deleteFunc={this.handleDelete} reset={this.reset} paymentStatus={this.state.paymentStatus} makePayment={this.state.makePayment} checkout={this.state.checkout}/>
        <Appetizers appetizers={this.state.appetizers} orderFunc={this.handleOrder} deleteFunc={this.handleDelete} toggleActive={this.state.toggleActive} orderItem={this.state.orderItem}/>
>>>>>>> be50778
        <Entrees entrees={this.state.entrees} orderFunc={this.handleOrder} deleteFunc={this.handleDelete} toggleActive={this.state.toggleActive} orderItem={this.state.orderItem}/>
        <Desserts desserts={this.state.desserts} orderFunc={this.handleOrder} deleteFunc={this.handleDelete} toggleActive={this.state.toggleActive} orderItem={this.state.orderItem}/>
      </div>
    );
  }
}

export default Menu;
