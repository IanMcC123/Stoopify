import './home.css';
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'

export default function Home() {
    return (
      <>
        <Header />
        <div class="home-content-wrapper">
          <p>
            This is The Home Page
          </p>
          <p>
            Home Page Content
          </p>
          <a href="/profile">Profile Page</a>
        </div>
        <Footer />
      </>
    )
}