import React from 'react';
import {faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Ajiboye Mayokun.</span>
                </h1>
                <p className="h-sub-text">
                    I am a software Developer (mostly frontend, React).
                    You'll find some of the interesting works I've done in this profile.
                    Below are links to my social media profiles. Feel free to explore videos and posts
                    on Twitter and facebook and my code base on github or just head to the portfolio section
                    to view some of my works live. If you're hiring I am available.
                </p>
                <div className="icons">
                    <a href="https://web.facebook.com/mayokun.ajiboye.9" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </a>
                    <a href="https://www.github.com/naries" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a href="https://www.twitter.com/AjibsonMayokunA" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faTwitter} className="icon yt"/>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
