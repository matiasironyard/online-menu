import React, {Component} from 'react';

// IMPORT COMPONENTS
import Appetizers from '../components/Appetizers';
import Entrees from '../components/Entrees';
import Desserts from '../components/Desserts';
import OrderModal from '../components/OrderModal';
import ModalButton from '../components/ModalButton';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appetizers: [],
      entrees: [],
      desserts: [],
      order: [],
      toggleActive: false,
      orderItem: {dish: "crab"}
    }
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
    console.log('url', url)
    // Fetch data from API
    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      let menu = data[0];
      let appetizers = menu.Appetizers;
      let i;
      for (i in appetizers) {
        appetizers[i].checkbox = false;
      }
      let entrees = menu.Entrees;
      for (i in entrees) {
        entrees[i].checkbox = false;
      }
      let desserts = menu.Desserts;
      for (i in desserts) {
        desserts[i].checkbox = false;
      }
      this.setState({appetizers: appetizers, entrees: entrees, desserts: desserts})
    });
  }

  handleOrder = (e, refs,id) => {
    let dish = e.dish;
    let price = e.price
    console.log('refs', refs)
    let orderItem = {
      dish: dish,
      price: price,
      quantity: 1,
      refs: refs,
      id: id
    };
    let joined = this.state.order.concat(orderItem);
    this.setState({order: joined, toggleActive: true, orderItem: orderItem})
  }

  handleDelete = (e) => {
    let dish = e.dish;
    function isItem(element) {
      return element.dish === dish;
    }
    let index = this.state.order.find(isItem);
    let updatedOrder = this.state.order.filter(function(i) {
      return i !== index
    });
    this.setState({order: updatedOrder})
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
    console.log('h', this.state)
    // Your render should consist of the BaseLayout with the following children componenets: Appetizers, Entres, and Dessert.
    // Each component needs to receive state via props.
    return (
      <div className="app-body offset col-sm-10 col-sm-offset-1">
        <h2 className="col-sm-offset-2 headings">Menu</h2>
        {this.state.order.length > 0
          ? (<ModalButton className="hidden" order={this.state.order}/>)
          : (
            <span className="hidden"></span>
          )}
        <OrderModal order={this.state.order} increment={this.handleIncrement} decrement={this.handleDecrement} subTotal={this.state.subTotal} deleteFunc={this.handleDelete}/>
        <Appetizers appetizers={this.state.appetizers} orderFunc={this.handleOrder} deleteFunc={this.handleDelete} toggleActive={this.state.toggleActive} orderItem={this.state.orderItem} order={this.state.order}/>
        <Entrees entrees={this.state.entrees} orderFunc={this.handleOrder} deleteFunc={this.handleDelete} toggleActive={this.state.toggleActive} orderItem={this.state.orderItem}/>
        <Desserts desserts={this.state.desserts} orderFunc={this.handleOrder} deleteFunc={this.handleDelete} toggleActive={this.state.toggleActive} orderItem={this.state.orderItem}/>
      </div>
    );
  }
}

export default Menu;
