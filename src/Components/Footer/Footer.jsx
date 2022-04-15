import React from 'react'
import './footer.scss'


const loc = process.env.PUBLIC_URL;
function Footer() {
    return (
        <div className="footer">
            <div className="footer-left">
                © 2k22 scintilla.com, Made with <span>	&#x2764;</span> by Anas, Ayush
            </div>
            <div className="footer-right">
                <a href="https://www.instagram.com/scintilla2k22/" target="_blank">
                    <img src={`${loc}/image/instagram.png`} alt="Instagram" />
                </a>

                <a href="https://www.youtube.com/channel/UC-NYMUWDLUwxruNUzpOzO4g/about?app=desktop" target="_blank">
                    <img src={`${loc}/image/youtube.png`} alt="youtube" />
                </a>
                <a href="https://m.facebook.com/Scintilla123/" target="_blank">
                    <img src={`${loc}/image/facebook.png`} alt="facebook" />
                </a>
            </div>
        </div >
    )
}

export default Footer