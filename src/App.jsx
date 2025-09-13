import { Provider } from "react-redux";
import "./App.css";
import AuctionPlatform from "./landingPage/index";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <AuctionPlatform />
    </Provider>
  );
}

export default App;
