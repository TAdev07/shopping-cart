import React, {Component} from 'react';
import * as message from '../constants/message';

class CartItem extends Component {
  showTotalPrice = (price, quantity) => {
    return price * quantity;
  };

  onDelete = (product) => {
    this.props.onDeleteProduct(product);
    this.props.onChangeMessage(message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  };

  onUpdateProduct = (product, quantity) => {
    if (quantity > 0) {
      this.props.onUpdateProduct(product, quantity);
    }
  };
  render() {
    const {item} = this.props;
    return (
      <tr>
        <th scope="row">
          <img
            src={item.product.image}
            alt={item.product.name}
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>Iphone 6 Plus</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{item.quantity}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light"
              onClick={() =>
                this.onUpdateProduct(item.product, item.quantity - 1)
              }
            >
              <span>—</span>
            </label>
            <label
              className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light"
              onClick={() =>
                this.onUpdateProduct(item.product, item.quantity + 1)
              }
            >
              <span>+</span>
            </label>
          </div>
        </td>
        <td>{this.showTotalPrice(item.product.price, item.quantity)}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            data-original-title="Remove item"
            onClick={() => {
              this.onDelete(item.product);
            }}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
