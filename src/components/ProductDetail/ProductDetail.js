import React, {Component} from 'react';
import styles from './ProductDetail.module.css';

function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }

  return JSON.stringify(obj) === JSON.stringify({});
}

export default class ProductDetail extends Component {
  state = {
    id: 0,
    quantity: 1,
  };
  showRating = (rating) => {
    let result = [];
    for (let i = 0; i < rating; i++) {
      result.push(
        <li key={i}>
          <i className="fa fa-star" />
        </li>
      );
    }
    for (let j = 0; j < 5 - rating; j++) {
      result.push(
        <li key={j + 'o'}>
          <i className="fa fa-star-o" />
        </li>
      );
    }
    return result;
  };

  onAddToCart = (product, quantity) => {
    this.props.onAddToCart(product, quantity);
  };

  showPreviewThumbnail = (images = []) => {
    let result = null;
    const {id} = this.state;
    if (images.length > 0) {
      result = (
        <div>
          <div className="preview-pic tab-content">
            <div className="tab-pane active" id="pic-1">
              <img src={images[id].url} alt="" />
            </div>
          </div>
          <ul className="preview-thumbnail nav nav-tabs">
            {images.map((img, index) => {
              return (
                <li className="active">
                  <span
                    style={{display: 'block', cursor: 'pointer'}}
                    onClick={() => {
                      this.setState({id: index});
                    }}
                  >
                    <img src={img.url} alt={img.alt} />
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
    return result;
  };

  render() {
    const {product} = this.props;
    let {quantity} = this.state;
    return (
      <div className="container">
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                {this.showPreviewThumbnail(product.images)}
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{product.name}</h3>

                <ul className="rating">{this.showRating(product.rating)}</ul>
                <p className="product-description">{product.description}</p>
                <h4 className="price">
                  current price: <span>${product.price}</span>
                </h4>
                <div className={styles.ProductOptions}>
                  <div className={styles.dataTitle}>Số lượng: </div>
                  <div className={styles.QuantityInput}>
                    <button
                      className={styles.btn}
                      onClick={() => {
                        if (quantity > 0) {
                          this.setState({quantity: quantity - 1});
                        }
                      }}
                    >
                      -
                    </button>
                    <input
                      className={styles.input}
                      type="number"
                      value={quantity}
                    />
                    <button
                      className={styles.btn}
                      onClick={() => {
                        this.setState({quantity: quantity + 1});
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="action">
                  <button
                    className="add-to-cart btn btn-default"
                    type="button"
                    onClick={() => {
                      this.onAddToCart(product, quantity);
                    }}
                  >
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
