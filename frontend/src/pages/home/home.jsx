import "./home.css";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

export default function Home() {
  return (
    <>
      <Header />
      <div class="home-content-wrapper">
        <div id="title">Latest Listings</div>
        <div id="transparent-wrap">
          <div class="item">Item 1</div>
          <div class="item">Item 2</div>
          <div class="item">Item 3</div>
        </div>
      </div>

      <Footer />
    </>
  );
}
