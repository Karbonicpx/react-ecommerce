import axios from 'axios';
import { useState, useEffect } from 'react';
import { Header } from '../components/Header';

import { OrderContainer } from '../components/orders/OrderContainer';

import './styles/OrdersPage.css';

export function OrdersPage({ cart, loadCart }) {
    const [orders, setOrders] = useState([]);

    // Load the user's past orders
    useEffect(() => {
        axios.get('/api/orders?expand=products')
            .then((response) => {
                setOrders(response.data);
            });
    }, []);

    return (
        <>
            <title>Orders</title>

            <Header cart={cart} />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <div className="orders-grid">
                    {orders.map(order => (
                        <OrderContainer
                            key={order.id}
                            order={order}
                            loadCart={loadCart}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
