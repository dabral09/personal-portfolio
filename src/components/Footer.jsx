import React from 'react';
import{
    AiFillInstagram,
    AiFillGithub,
    AiOutlineArrowUp
} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div>
            <img src={"https://avatars.githubusercontent.com/u/119749111"} alt="Founder"></img>

            <h2>Shubham Dabral</h2>
            <p>The Computer was born to solve problems that didn't exist before.</p>
        </div>

        <aside>
            <h2>Social Media</h2>
            <article>
            <a href="https://github.com/dabral09" target={"blank"}>
                    <AiFillGithub/>
                </a>
                <a href="https://instagram.com/stealth_1997" target={"blank"}>
                    <AiFillInstagram/>
                </a>
            </article>
        </aside>
        <a href='#home'>
            <AiOutlineArrowUp/>
        </a>
    </footer>
  );
}

export default Footer;