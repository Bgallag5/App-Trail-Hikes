import Header from "../components/Layout/Header";
import "/styles/style.css";
import Sidebar from "../components/Layout/Sidebar/Sidebar";
import { Provider } from "react-redux";
import { store } from "../store/GlobalStore";



function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <div className="app-container">
        <div className="w-screen h-screen overflow-y-hidden ">
          <Header />
          <div className="flex flex-row h-full w-full ">
            <Sidebar />
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default MyApp;
