import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import ProductList from "./product";
import Cart from "./cart";

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Shopping Cart App</h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 pr-4">
            <h2 className="text-2xl font-semibold mb-2">Products</h2>
            <ProductList />
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-semibold mb-2">Cart</h2>
            <Cart />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
