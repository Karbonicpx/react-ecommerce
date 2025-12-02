import { Fragment } from "react";
import { OrderProduct } from "./OrderProduct";

// Shows a grid of all products inside the order
export function OrderDetails({ order, loadCart }) {
    return (
        <div className="order-details-grid">
            {order.products.map(orderProduct => (
                <Fragment key={orderProduct.product.id}>
                    <OrderProduct
                        orderProduct={orderProduct}
                        loadCart={loadCart}
                    />
                </Fragment>
            ))}
        </div>
    );
}
