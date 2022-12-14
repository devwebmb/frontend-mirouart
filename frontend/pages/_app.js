import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../styles/globals.css";
import "../styles/style.css";

import { store } from "../app/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
