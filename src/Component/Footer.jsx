import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
function Footer() {
  return (
        <>
            <footer>
                <div className="container ll">
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <ul className='foot'>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/write-for-us">Write for Us</Link></li>
                                <li><Link to="/contact-us">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-md-12 text-center col-12">
                        <Link className="navbar-brand fs-2 fw-semibold" to="/"><span className='ff'> WOWally</span></Link>
                        </div>
                    </div>
                    <div className="row p">
                        <div className="col-lg-12  col-sm-12 col-md-12 col-12 pp">
                            <p>Use of this web site constitute acceptance of the Terms of Use andPrivacy Policy GDPR</p>
                            <p>© wowally.com 2023</p>
                            <p>Article by wowally.com All right reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
  )
}

export default Footer
