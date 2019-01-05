import React, {Component} from 'react';

class CartResult extends Component {
  showTotalPrice = (cart) => {
    let result = 0;
    if (cart.length > 0) {
      for (let item of cart) {
        result += item.product.price * item.quantity;
      }
    }
    return result.toFixed(1);
  };
  render() {
    const {cart} = this.props;
    return (
      <tr>
        <td colSpan={3} />
        <td>
          <h4>
            <strong>Tổng Tiền</strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong>{this.showTotalPrice(cart)}$</strong>
          </h4>
        </td>
        <td colSpan={3}>
          <button
            type="button"
            className="btn btn-primary waves-effect waves-light"
          >
            Complete purchase
            <i className="fa fa-angle-right right" />
          </button>
        </td>
      </tr>
    );
  }
}

export default CartResult;
