import React, { useState} from 'react';
import '../css/Contact.css';

export default function Contact() {
    // TODO: delete use of formData - or use for input correcting - otherwise don't need
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    }); 
    // const [showConfirmationMessage, setShowConfirmationmessage] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        // e.preventDefault();
        // setShowConfirmationmessage(true);
        console.log("Form has been submitted");
    }
    return (
        <div className="contact-bg">
            <h1>Contact Page</h1>

            {/* {!showConfirmationMessage ? ( */}
            <form id="contact-form" onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" action="/contact-confirmation" >
                <input type="hidden" name="form-name" value="contact" />
                <p>Want to network, contact about opportunities, or interested in hiring?</p>
                <p>Fill out the contact form below:</p>
                <div className="fields-container">
                    <div className="label-and-input-container">
                        <label htmlFor="name">
                            Name:
                        </label>
                        <input required type="text" id="name" name="name" placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="label-and-input-container">
                        <label htmlFor="email">
                            Email Address:
                        </label>
                        <input required type="email" id="email" name="email" placeholder="example@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="label-and-input-container">
                        <label htmlFor="subject">
                            Subject Title:
                        </label>
                        <input required type="text" id="subject" name="subject" placeholder="Subject Here"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="label-and-input-container">
                        <label htmlFor="message">
                            Message:
                        </label>
                        <textarea required type="text" id="message" name="message" placeholder="Write your message here"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}
// TODO: FIX ISSUE WITH WHERE SUBMIT BUTTON REDIRECTS USER 