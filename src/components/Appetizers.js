import React, {Component} from 'react';
import HandleOrder from '../components/Order2'

export default class Appetizers extends Component {


  render(){
    console.log('hdad', this.state)
    // PROPS
    let items = this.props.appetizers
    let orderFunc = this.props.orderFunc;
    let deleteFunc = this.props.deleteFunc;
    let order = this.props.order
    // Since the items do not have a key, let's create one.
    let key = Math.random();

    // MAP PROPS
    let appetizers = items.map((items)=>{
      // Increment the key so that each items has one.


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
              <div className="btn-group" role="group" aria-label="...">
                <HandleOrder orderFunc={orderFunc} deleteFunc={deleteFunc} item={items} toggleActive={this.props.toggleActive} orderItem={this.props.orderItem}/>
              </div>
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
            Appetizers
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
            {appetizers}
          </table>
        </div>
      </div>
    );
  }
}
