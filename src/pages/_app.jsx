import Layout from "../layout/layout";
import "../../styles/GlobalStyle.scss"
// Fonts
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
  subsets: ["latin"],
});
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Provider store={store}> */}
        <Layout className={montserrat.className} >
          <Component {...pageProps} />
        </Layout>
      {/* </Provider> */}
    </>
  );
}

export default MyApp;
