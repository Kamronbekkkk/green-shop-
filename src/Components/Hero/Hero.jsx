import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <>
            <section className="">
                <div className="hero-section">
                    <div className="hero-content">
                        <p className="welcome-text">WELCOME TO GREENSHOP</p>
                        <h1 className="hero-title">
                            LET'S MAKE A BETTER<span class="highlight"> PLANET</span>
                        </h1>
                        <p className="hero-description">
                            We are an online plant shop offering a wide range of cheap and trendy
                            plants. Use our plants to create a unique Urban Jungle. Order your
                            favorite plants!
                        </p>
                        <button className="hero-btn">SHOP NOW</button>
                    </div>


                    <div className="hero-image">
                        <img
                            src="./01.png"
                            alt="Plant"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero