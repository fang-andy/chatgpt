import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
    return (
        <div className="gpt__header section__padding" id="home">
            <div className="gpt__header-content">
                <h1 className="gradient__text">Let's Build Something amazing with Chat GPT Open AI</h1>
                <p>I'm a wangsta, I'm a straight up G. The gangsta life is the life for me</p>

                <div className="gpt__header-content__input">
                    <input type="email" placeholder="Your email Address"></input>
                    <button type="button">Get Started</button>
                </div>

                <div className="gpt__header-content__people">
                    <img src={people} alt="people" />
                    <p>1,600 people requested access</p>
                </div>

            </div>
            <div className="gpt__header-image">
                <img src={ai} alt="ai" />
            </div>
        </div>
    )
}

export default Header