import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission (e.g., send to API)
        alert(`Thank you, ${formData.name}! Your message has been sent (simulated).`);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                />
            </div>
            <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleChange}>
                    <option value="">Select a Subject</option>
                    <option value="Quote Request">Request a Quote</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Career">Careers</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="How can we help you?"
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>

            <style>{`
                .contact-form {
                    background: #fff;
                    padding: 30px;
                    border-radius: 8px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
                }
                .form-group {
                    margin-bottom: 20px;
                }
                .form-group label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: 600;
                    color: var(--secondary-navy);
                }
                .form-group input, .form-group textarea, .form-group select {
                    width: 100%;
                    padding: 12px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    font-family: inherit;
                    transition: border-color 0.3s;
                }
                .form-group input:focus, .form-group textarea:focus, .form-group select:focus {
                    outline: none;
                    border-color: var(--primary-blue);
                }
                button[type="submit"] {
                    width: 100%;
                }
            `}</style>
        </form>
    );
};

export default ContactForm;
