import React from 'react'
import './footer.scss'


const loc = process.env.PUBLIC_URL;
function Footer() {
    return (
        <div className="footer">
            <div className="footer-left">
                Made with <span>	&#x2764;</span> by  <a href='https://www.linkedin.com/in/mohd-anas-a39a6b1a4/' target="_blank" >Mohd Anas</a>, <a href='https://www.linkedin.com/in/ayush-bisht-9a5582192/' target="_blank"> Ayush Bisht </a>
            </div>
            <div >
                © 2k22 scintilla2022.tech, All rights reserved.
            </div>
            <div className="footer-right">

                <a title='linktree' href="https://linktr.ee/scintilla2k22" target="_blank">
                    <img src={`${loc}/image/linktree.png`} alt="linktree" />
                </a>
                <a title='instagram' href="https://www.instagram.com/scintilla2k22/" target="_blank">
                    <img src={`${loc}/image/instagram.png`} alt="Instagram" />
                </a>

                <a title='youtube' href="https://www.youtube.com/channel/UC-NYMUWDLUwxruNUzpOzO4g/featured" target="_blank">
                    <img src={`${loc}/image/youtube.png`} alt="youtube" />
                </a>
                <a title='facebook' href="https://m.facebook.com/Scintilla123/" target="_blank">
                    <img src={`${loc}/image/facebook.png`} alt="facebook" />
                </a>


            </div>
        </div >
    )
}

export default Footer