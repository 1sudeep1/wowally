import React from 'react'
import "./Contact.css"
import "../assets/Style.css"
function Contact() {
    return (
        <div className="container contat">
            <h3 className='fw-bold fs-3'>Contact Us</h3>
            <p className='fw-semibold'>Direct Email – wowally360@outlook.com</p>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="nameHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Your Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" className="form-control" id="subject" />
                </div>
                <div className="mb-3">
                    <p>Your Message(optional)</p>
                    <textarea id="message" name="message" rows="9" cols="40"></textarea>
                </div>

                <button type="submit" className="btn btn-primary m-0 cbtn">Submit</button>
            </form>


        </div>
    )
}

export default Contact
