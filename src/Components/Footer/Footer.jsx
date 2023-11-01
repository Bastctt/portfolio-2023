import React from "react";
import './Footer.css';
import GitIcon from '../../assets/images/github.svg';
import LinkedinIcon from '../../assets/images/linkedin.svg';

function Footer() {
    return (
        <footer id="contact">
            <div class="social-media">
                <ul>
                    <li><a href="https://www.linkedin.com/in/bastien-cochet-47036b222/"><img src={LinkedinIcon} alt="LinkedIn"></img></a></li>
                    <li><a href="https://github.com/Bastctt"><img src={GitIcon} alt="GitHub"></img></a></li>
                    <li><a className="tel" href="tel:+33781911680">+33 7 81 91 16 80</a></li>
                    <li><a className="mail" href="mailto:bastienccht@gmail.com">Cliquez ici pour m'envoyer un e-mail</a></li>
                </ul>
                <div class="line"></div>
                <p class="copyright">© 2023 Bastien Cochet. Tous droits réservés.</p>
            </div>
        </footer>
    );
}

export default Footer;
