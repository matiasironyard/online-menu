import React, {Component} from 'react';
import HandleOrder from '../components/Order2'

export default class Desserts extends Component {
  // Add the appropiate lifecycle method so that the component receives the props before mounting.

  render(){
    // PROPS
    let items = this.props.desserts;
    let orderFunc = this.props.orderFunc;
    let deleteFunc = this.props.deleteFunc;
    // Since the items do not have a key, let's create one.
    let key = Math.random();
    // MAP PROPS
    let desserts = items.map((items)=>{
      // Increment the key for each item.
      key++;
      return (
        <tbody key={key}>
          <tr>
            <td>
              {items.dish}
            </td>
            <td>
              {items.description}
            </td>
            <td>
              {items.price}
            </td>
            <td>
                <HandleOrder orderFunc={orderFunc} deleteFunc={deleteFunc} item={items} toggleActive={this.props.toggleActive} orderItem={this.props.orderItem}/>
            </td>
          </tr>
        </tbody>
      )
    })
    return (
      <div className="row no-gutter">
        <div className="col-sm-8 col-sm-offset-2">
          <h3 className="sub-headings">
            <i className="fa fa-leaf" aria-hidden="true"></i>
            Desserts
          </h3>
          <hr/>
          <table className="table">
            <thead>
              <tr>
                <th className="col-sm-3">
                  <i className="fa fa-cutlery" aria-hidden="true"></i>
                </th>
                <th className="col-sm-5">Description</th>
                <th className="col-sm-1">
                  <i className="fa fa-money" aria-hidden="true"></i>
                </th>
                <th className="col-sm-2">
                  Order
                </th>
              </tr>
            </thead>
            {desserts}
          </table>
        </div>
      </div>
    );
  }
}
