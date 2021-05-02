import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4><span> Ajiboye Mayokun</span></h4>
                <p className="about-text">
                    A graduate of computer science who has loved coding for a long time and does his best to
                    keep doing what he loves. Do you want such a person to work for or with you? Find more information 
                    by going through my cv. Links below!
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                    </div>
                    <div className="right-section">
                        <p>: Mayokun Ajiboye</p>
                        <p>: 25</p>
                        <p>: Nigeria</p>
                        <p>: English</p>
                        <p>: 1 Lekan Solanke close, Ade-Oni estate, Ojodu-Berger, Lagos</p>
                    </div>
                </div>
                <a className="btn" href="https://drive.google.com/file/d/1e2QEQNDz7ZYX7NWQE6gQSW2CeIB_uLt1/view?usp=sharing" target="_blank">
                    Download CV
                </a>

            </div>
        </div>
    )
}

export default ImageSection;
