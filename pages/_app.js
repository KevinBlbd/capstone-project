import GlobalStyle from "../styles";
import Gallery from "@/components/Gallery";
import Card from "@/components/Card";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
