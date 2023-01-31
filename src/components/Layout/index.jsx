import Footer from "components/UI/Footer/Footer";
import Header from "components/UI/Header/Header";

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
      <main>{children}</main>
      <Footer />
    </div>
  );
}
