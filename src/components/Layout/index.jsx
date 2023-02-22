import Footer from "components/UI/Footer/Footer";
import Header from "components/UI/Header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Layout({ children }) {
  return (
    <div
    // style={{
    //   display: "grid",
    //   gridTemplateRows: "auto 1fr auto",
    //   minHeight: "100vh",
    // }}
    >
      <Header />
      <main style={{ minHeight: "calc(100vh - 375px)" }}>{children}</main>
      <Footer />
    </div>
  );
}
