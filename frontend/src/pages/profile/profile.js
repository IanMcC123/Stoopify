import './profile.css';
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'

export default function Profile() {
    return (
        <>
            <Header />
            <div className="Profile">
            <p>
                This is the Profile Page
            </p>
            <p>
                Profile Content
            </p>
            <a href="/">Return to Home</a>
            </div>
            <Footer />
        </>
        
    )
}