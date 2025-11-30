import './index.css'
import HomePage from "./pages/HomePage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { Routes, Route } from "react-router"; // Used to make a page be inserted in the routing (SPA)


function App() {

    return (

        // Need to wrap the elements in the Routes to work
        <Routes>
            {/* Route path (URL, in this case is empty so index, or "/") is basically the page, and element is the component we want to show in that page */}
            <Route index element={<HomePage />}/>
            <Route path="checkout" element= {<CheckoutPage/>}/>
        </Routes>

    )
}

export default App;