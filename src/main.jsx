import ReactDOM from "react-dom/client"; // Required for rendering the root
import App from "./App";
import { BrowserRouter } from "react-router"; // Used to navigate in different pages with the same html

// Render the root, which is the main component that holds all other components
ReactDOM.createRoot(document.getElementById("root")).render((
  <>
    {/* Basically saying that the homePage is inside the routing in the App */}
    <BrowserRouter>
     <App/>
    </BrowserRouter>
  </>
))