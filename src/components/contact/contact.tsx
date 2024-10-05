import { useState } from "react";
import { KEY } from "../../techstack/keys";
import "./contact.css";

export default function Contact() {

    const [message, setMessage] = useState("");

    async function handleSubmit(e: any) {
        e.preventDefault();
        setMessage("Sending...");

        const formData = new FormData(e.target);
        formData.append("access_key", KEY);

        const formResponse = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const formResponseJson = await formResponse.json();
        if (formResponseJson.ok) {
            setMessage("Email sent successfully");
            e.target.reset();
        } else {
            setMessage(formResponseJson.message);
        }

    }

    return (
        <div className="contact">
            <h1>GET IN TOUCH</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="input-box">
                    <label>Name</label>
                    <input className="field" type="text" name="name" placeholder="Name" required />
                </div>
                <div className="input-box">
                    <label>Email</label>
                    <input className="field" type="text" name="email" placeholder="Email" required />
                </div>
                <div className="input-box">
                    <label>Message</label>
                    <textarea className="text-field" name="message" placeholder="Enter your message" required />
                </div>
                <button type="submit" className="button">Send Message</button>
            </form>
            <span>{message}</span>
        </div>
    );
}