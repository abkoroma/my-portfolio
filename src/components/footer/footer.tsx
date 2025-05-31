/* eslint-disable react/jsx-no-target-blank */
import './footer.css';
import { GITHUB_LINK, LINKEDIN } from "../../techstack/links";
import { ReactComponent as Github } from "../../logo/github-1.svg";
import { ReactComponent as Linkedin } from "../../logo/linkedin-3.svg";


export default function Footer() {

    return (
        <footer className="footer">
            <div className="footer-con">
                <span>&copy;2024 Abu B Koroma</span>
                <div className="social-links">
                    <a href={GITHUB_LINK} target="_blank"><Github /></a>
                    <a href={LINKEDIN} target="_blank"><Linkedin /></a>
                </div>
            </div>
        </footer>
    );

}