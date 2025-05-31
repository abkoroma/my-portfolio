import { skills } from "../../techstack/skills";
import Skills from "../../utils/skills";
import "./about.css";

export default function AboutMe() {

    return (
        <section>
            <h1>ABOUT ME</h1>
            <div className="about-page">
                <div className="about">
                    <h2>Get to know me</h2>
                    <p>
                        I'm a Software Engineer experience in building full-stack applications. As a highly motivated 
                        and technology driven student I have a strong passion for computer science. My interest in 
                        development started in 2011 during High school where I first learn programming using Scratch, 
                        creating interactive games and animations. I love writing code and learning about Technology 
                        and majored in Computer Science at West Virginia University. During my academic journey, I 
                        gained a solid understanding in design of efficient and reliable software that meets given 
                        specification. 
                    </p>
                </div>
                <div className="skills">
                    <h2>Languages and Technology</h2>
                    <div className="skill-list">
                        {
                            skills.map(skill => (
                                <Skills skills={skill} key={skill} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}