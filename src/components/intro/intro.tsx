/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
import "./intro.css";
import { ReactComponent as Github } from "../../logo/github-1.svg";
import { ReactComponent as Linkedin } from "../../logo/linkedin-3.svg";
import { GITHUB_LINK, LINKEDIN } from "../../techstack/links";

export default function Intro() {

    return (
        <div className="intro">
            <div className="intro-info">
                <h1>ABU BAKARR KOROMA</h1>
                <p>
                    Software Engineer in Frederick, MD building scalable applications with modern technologies.
                </p>
                <span><a href={GITHUB_LINK} target="_blank"><Github /></a></span>
                <span><a href={LINKEDIN} target="_blank"><Linkedin /></a></span>
            </div>
            <img className="my_picture" src={require("../../logo/my_pic.jpg")} alt="My picture" />
        </div>
    )
}