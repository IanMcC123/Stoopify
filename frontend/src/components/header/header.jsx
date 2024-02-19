// Header Render
import "./header.css";

export default function Header() {
  return (
    // NavBar
    <div>
      <section id="navBar">
        <header>Stoopify</header>
        <div id="search-container">
          <input id="search-bar" type="text" placeholder="Search Furniture" />
          {/* Add search Icon here */}
        </div>
        <div id="login">
          <h3 style={{ fontWeight: 600, fontSize: 30 }}>Login</h3>
          {/* <img src="Login.png" alt="Login Icon"></img> */}
          {/* Image isn't loading. gotta fix */}
        </div>
      </section>
      <section id="menu-items">
        <h3>Decor</h3>
        <h3 style={{ marginRight: "5%", marginLeft: "5%" }}>Furniture</h3>
        <h3>About Us</h3>
      </section>
    </div>
  );
}
