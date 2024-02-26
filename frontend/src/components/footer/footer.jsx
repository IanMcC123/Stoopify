import './footer.css';
// Import social media logos from footer_assets folder
import logo1 from "../assets/footer_assets/Facebook.png"
import logo2 from "../assets/footer_assets/Instagram.png"
import logo3 from "../assets/footer_assets/TikTok.png"



export default function Footer() {
    return (
        // Flexbox for entire footer
        <footer className='Footer_Box'>
            {/* Flexbox for contact info containing contact, address, email, phone number*/}
            <div className='Contact-Info'>
                <p id='Contact'>
                    Contact
                </p>
                <p id='Address'>
                    <strong>Address:</strong> 370 Jay Street Brooklyn NY 11201
                </p>
                <p id='Email'>
                    <strong>
                    Email:
                    </strong> help@stoopify.com
                </p>
                <p id='Phone'>
                    <strong>
                    Phone: 
                    </strong> 212-859-9654
                </p>
            </div>
            {/* Flexbox for social media containing the join bar, social media logos*/}
            <div className="Social-Media">
                <p id='Newsletter'>
                    Join the newsletter today
                </p>
                <p id='Join'>
                    <input id="join_bar" type="text"></input>
                    <button>Join</button>
                </p>
                {/* Display logos imported from footer_assets folder */}
                <div className='logos'> 
                    <img id="Fb" src={logo1} alt="Facebook" width="50" height="50"></img>
                    <img id="Ig" src={logo2} alt="Instagram" width="50" height="50"></img> 
                    <img id="Tt" src={logo3} alt="TikTok" width="50" height="50"></img> 
                </div>
            </div>
        </footer>
    )
}