import Layout from "../layout/layout";
import "../../styles/GlobalStyle.scss";
import { store } from "../redux/store";
import { Provider } from "react-redux";
// Fonts
// import { Montserrat } from "@next/font/google";

// const montserrat = Montserrat({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
// });
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
      <div>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
      </Provider>
    </>
  );
}

export default MyApp;
