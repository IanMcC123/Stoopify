// Header Render
import "./header.css";
import login from "../assets/header/Login.png";
import DownArrow from "../assets/header/Down_Arrow.png";
import searchIcon from "../assets/header/Search_Icon.png";

export default function Header() {
  return (
    <div>
      <section id="navBar">
        <header>Stoopify</header>
        <div id="search-container">
          {/* Add search Icon here */}
          <input
            id="search-bar"
            type="text"
            placeholder="Search Furniture..."
          />
          <div id="search-icon-container">
            <img src={searchIcon} alt="Search" width="20" height="20" />
          </div>
        </div>
        <div id="login">
          <h3 style={{ fontWeight: 600, fontSize: 30 }}>
            <img
              src={login}
              alt="Login.png"
              width="30"
              height="30"
              style={{ marginRight: 10 }}
            ></img>
            Login
          </h3>
        </div>
      </section>
      <section id="menu-items">
        <h3>
          Decor
          <img
            src={DownArrow}
            style={{ marginLeft: 5 }}
            alt="Down_Arrow.png"
            width="10"
            height="7"
          ></img>
        </h3>
        <h3 style={{ marginRight: "5%", marginLeft: "5%" }}>
          Furniture
          <img
            src={DownArrow}
            style={{ marginLeft: 5 }}
            alt="Down_Arrow.png"
            width="10"
            height="7"
          ></img>
        </h3>
        <h3>
          About Us
          <img
            src={DownArrow}
            style={{ marginLeft: 5 }}
            alt="Down_Arrow.png"
            width="10"
            height="7"
          ></img>
        </h3>
      </section>
    </div>
  );
}
