import './profile.css';
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'

export default function Profile() {
    return (
        <>
            <Header />
            <div className="profile-main">
                <div class="profile-grid-wrapper" >
                    <div class="profile-grid">
                        <div class="profile-cell">
                            <div  class="cell-child">
                                <img src="./profile-pic.png" alt="add profile pic icon"/>
                                <input class="input" placeholder="Please Enter Text" type="text" ></input>
                                <p>Pronouns</p>
                                <p>Member Since</p>
                            </div>
                        </div>
                        <div class="profile-cell">
                            <div class="cell-child">
                                <p>Phone #</p>
                                <p>Email</p>
                                <p>Primary Zip Code</p>
                            </div>
                            <div class="cell-child">
                                <p>Seller Rating</p>
                                <p># items sold</p>
                            </div>
                        </div>
                    </div>
                </div>

            <a href="/">Return to Home</a>
            </div>
            <Footer />
        </>
        
    )
}