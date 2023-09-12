import facebook from"../assets/facebook-icon.png"
import instagram from "../assets/instagram-icon.png"
import twitter from "../assets/twitter-icon.png"
import youtube from "../assets/youtube-icon.png"


export default function Footer() {
    return (
        <footer className="footer">
            <div className="social-media">
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
                <img src={youtube} alt="" />
            </div>

            <div className="terms-and-conditions">
                <p>Conditions of Use</p>
                <p>Privacy Policy</p>
                <p>Press Room</p>
            </div>

            <div className="copyright">
                <p>&copy; 2021 MovieBox by Adriana Eke Prayudha</p>
            </div>
        </footer>
    )
}