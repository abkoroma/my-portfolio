/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
import "./intro.css";
import { GITHUB_LINK, LINKEDIN } from "../../techstack/links";

export default function Intro() {

    return (
        <section className="intro">
            <div className="intro-info">
                <h1>ABU BAKARR KOROMA</h1>
                <p>
                    Software Engineer in Frederick, MD building scalable applications with modern technologies.
                </p>
                <div className="span-container">
                    <span><a href="/projects">View Project</a></span>
                    <span><a href={GITHUB_LINK} target="_blank">Github</a></span>
                    <span><a href={LINKEDIN} target="_blank">Linkedin</a></span>
                </div>
            </div>
            <img className="my_picture" src={require("../../logo/Profile_pic.jpeg")} alt="My picture" />
        </section>
    )
}