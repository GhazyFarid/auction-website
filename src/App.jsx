import { Provider } from "react-redux";
import "./App.css";
import AuctionPlatform from "./landingPage/index";
import { store } from "./store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* Landing pages */}
          <Route path="/*" element={<AuctionPlatform />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
