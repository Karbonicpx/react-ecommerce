/* eslint-disable no-unused-vars */
import './styles/checkout-header.css'
import './styles/CheckoutPage.css'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { useState, useEffect } from 'react'
import { Header } from '../components/Header'

import { OrderSummary } from '../components/checkout/OrderSummary'
import { PaymentSummary } from '../components/checkout/PaymentSummary'

export function CheckoutPage({ cart, loadCart }) {

    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);

    // Allows to navigate to another page
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCheckoutData = async () => {

            // Backend making the delivery time calculation in milliseconds
            let response = await axios.get('/api/delivery-options?=estimatedDeliveryTime')
                .then((response) => {
                    setDeliveryOptions(response.data)
                })

            response = await axios.get('/api/payment-summary')
                .then((response) => {
                    setPaymentSummary(response.data)
                })
        }

        fetchCheckoutData();
    }, [cart]) // When cart changes, the useEffect is executed again

    return (
        <>
            <Header cart={cart} />
            <title>Checkout</title>

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    
                    <OrderSummary 
                        cart={cart} 
                        deliveryOptions={deliveryOptions} 
                        loadCart={loadCart}
                    />

                    <PaymentSummary
                        paymentSummary={paymentSummary}
                        loadCart={loadCart}
                        navigate={navigate}
                    />

                </div>
            </div>
        </>
    )
}
