import React from 'react'
import './SecondFooter.css'
import { AiFillFacebook, AiOutlineTwitter, AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai'

const SecondFooter = () => {
    return (
        <div>
            <div className="second-footer">
                <div className="footer-nav">
                    <div className="feed">
                        <p className="feed-text">India's Largest Marketplace for Professional Artists</p>
                    </div>
                    <div className="logo-2">
                        <img className='logo2-img' src="https://starclinch.com/static/images/home/StarClinch-Logo-white.svg" alt="logo2" />
                    </div>
                    <div className="social">
                        <p className="social-text">On social networks</p>
                        <AiFillFacebook className='fb-icon' />
                        <AiOutlineTwitter className='twitter-icon' />
                        <AiFillYoutube className='you-icon' />
                        <AiOutlineInstagram className='insta-icon' />
                    </div>
                </div>
                <div className="footer-last">
                    <p className="contact-head">LEGAL ENTITY:</p>
                    <p className="contact-text">VINSM Globe Private Limited
                        GSTIN : 07AAFCK1574R1ZX
                        CIN: U52605DL2012PTC236944
                        Phone: +91 7042 88 4270
                    </p>
                    <a href="https://starclinch.com/contact-us" id='contact-us' class="d-block mb-1">Contact Us</a>
                </div>
            </div>
        </div>
    )
}

export default SecondFooter
