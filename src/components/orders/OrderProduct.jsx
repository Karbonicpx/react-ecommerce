import axios from "axios";
import dayjs from "dayjs";

// Represents each product inside the order
export function OrderProduct({ orderProduct, loadCart }) {

    async function handleBuyAgain() {
        await axios.post(`/api/cart-items/`, {
            productId: orderProduct.product.id,
            quantity: orderProduct.quantity
        });

        // Reload cart number on header
        await loadCart();
    }

    return (
        <>
            {/* Left side - image */}
            <div className="product-image-container">
                <img src={orderProduct.product.image} />
            </div>

            {/* Center - product info */}
            <div className="product-details">
                <div className="product-name">
                    {orderProduct.product.name}
                </div>

                <div className="product-delivery-date">
                    Arriving on: {dayjs(orderProduct.estimatedDeliveryTimeMs).format('MMMM D')}
                </div>

                <div className="product-quantity">
                    Quantity: {orderProduct.quantity}
                </div>

                {/* Buy again button */}
                <button
                    className="buy-again-button button-primary"
                    onClick={handleBuyAgain}
                >
                    {/* Icon */}
                    <img className="buy-again-icon" src="images/icons/buy-again.png" />

                    {/* Text */}
                    <span className="buy-again-message">Add to Cart</span>
                </button>
            </div>

            {/* Right side - tracking button */}
            <div className="product-actions">
                <a href="/tracking">
                    <button className="track-package-button button-secondary">
                        Track package
                    </button>
                </a>
            </div>
        </>
    );
}
