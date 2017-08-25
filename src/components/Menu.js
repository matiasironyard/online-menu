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
      isDisabled: false,
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
    let url = "http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu";
    // Fetch data from API
    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      let menu = data[0];
      let appetizers = menu.Appetizers;
      let entrees = menu.Entrees;
      let desserts = menu.Desserts;
      this.setState({appetizers: appetizers, entrees: entrees, desserts: desserts})
    });
  }

  handleOrder = (event) => {
    let dish = event.dish;
    let price = event.price
    let orderItem = {
      dish: dish,
      price: price,
      quantity: 1,
      checked: true
    };
    let joined = this.state.order.concat(orderItem);
    this.setState({order: joined, isDisabled: true})
  }

  handleDelete = (event) => {
    let dish = event.dish
    function isItem(element) {
      return element.dish === dish;
    }
    let index = this.state.order.find(isItem);
    let updatedOrder = this.state.order.filter(function(i) {
      return i !== index
    });
    this.setState({order: updatedOrder, isDisabled: true})
  }

  handleIncrement = (e)=>{
    e.quantity++
    this.setState({order: this.state.order})
  }

  handleDecrement = (e)=>{
    e.quantity --
    this.setState({order: this.state.order})
  }

  render() {
    // Your render should consist of the BaseLayout with the following children componenets: Appetizers, Entres, and Dessert.
    // Each component needs to receive state via props.
    return (
      <div className="app-body offset col-sm-10 col-sm-offset-1">
        <h2 className="col-sm-offset-2 headings">Menu</h2>
        {this.state.order.length > 0 ? (
          <ModalButton className="hidden" order={this.state.order}/>
        ):(
          <span className="hidden"></span>
        )}
        <OrderModal order={this.state.order} increment={this.handleIncrement} decrement={this.handleDecrement} subTotal={this.state.subTotal} deleteFunc={this.handleDelete}/>
        <Appetizers appetizers={this.state.appetizers} orderFunc={this.handleOrder} deleteFunc={this.handleDelete} disabled={this.state.isDisabled} />
        <Entrees entrees={this.state.entrees} orderFunc={this.handleOrder} deleteFunc={this.handleDelete} order={this.state.order}/>
        <Desserts desserts={this.state.desserts} orderFunc={this.handleOrder} deleteFunc={this.handleDelete} order={this.state.order}/>
      </div>
    );
  }
}

export default Menu;
