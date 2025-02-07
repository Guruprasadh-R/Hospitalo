
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // ✅ BrowserRouter should be here
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
