import axios from 'axios'
import dayjs from 'dayjs'
import { DeliveryOptions } from './DeliveryOptions'

export function CartItem({ cartItem, deliveryOptions, loadCart }) {

    const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
        return deliveryOption.id === cartItem.deliveryOptionId
    })

    return (
        <div className="cart-item-container">

            <div className="delivery-date">
                Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
            </div>

            <div className="cart-item-details-grid">

                <img className="product-image" src={cartItem.product.image} />

                <div className="cart-item-details">
                    <div className="product-name">{cartItem.product.name}</div>
                    <div className="product-price">
                        {`$${(cartItem.product.priceCents / 100).toFixed(2)}`}
                    </div>

                    <div className="product-quantity">
                        <span>
                            Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                        </span>

                        <span className="update-quantity-link link-primary"
                            onClick={async () => {
                                await axios.put(`/api/cart-items/${cartItem.productId}`);
                                await loadCart();
                            }}>
                            Update
                        </span>

                        <span className="delete-quantity-link link-primary"
                            onClick={async () => {
                                await axios.delete(`/api/cart-items/${cartItem.productId}`)
                                await loadCart();
                            }}>
                            Delete
                        </span>
                    </div>
                </div>

                <DeliveryOptions 
                    cartItem={cartItem}
                    deliveryOptions={deliveryOptions}
                    loadCart={loadCart}
                />

            </div>
        </div>
    )
}
