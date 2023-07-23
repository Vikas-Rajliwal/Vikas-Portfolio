import React from "react";
import "./contact.css"
import { useState } from "react";
function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });


    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <section id="contact">
            <div className="container">
                <div className="container-contact">
                    <div className="row" >
                        <div className="col-lg-6">
                            <p className="mb-0">Get in touch</p>
                            <h1 className="">Contact.</h1>
                            <div className="card">
                                <div className="mapouter"><div className="gmap_canvas"><iframe title="Location" className="gmap_iframe" width="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=610&amp;height=400&amp;hl=en&amp;q=Gandhi Nagar sigra Var&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div></div>
                            </div>

                        </div>
                        <div className="col-lg-6" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                            <form
                                className='mt-12 d-flex flex-column gap-2'
                            >
                                <label htmlFor="name" className="mb-2">Your Name</label>
                                <input type="text" name="name" placeholder="What's Your Good Name" onChange={handleChange}></input>
                                <label htmlFor="email" className="mb-2">Your Email</label>
                                <input type="email" name="email" placeholder="What's Your Email" onChange={handleChange}></input>
                                <label htmlFor="message" className="mb-2">Message</label>
                                <textarea rows="4" cols="50" name="message" placeholder="Type Your Message here!" onChange={handleChange}></textarea>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact