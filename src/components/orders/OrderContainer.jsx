import { OrderHeader } from "./OrderHeader";
import { OrderDetails } from "./OrderDetails";

// Represents the entire "order card" shown on the orders page
export function OrderContainer({ order, loadCart }) {
    return (
        <div className="order-container">
            
            {/* Header containing date, total, and ID */}
            <OrderHeader order={order} />

            {/* List of products inside this order */}
            <OrderDetails
                order={order}
                loadCart={loadCart}
            />
        </div>
    );
}
