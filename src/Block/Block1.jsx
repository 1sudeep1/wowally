import React from 'react'
import "./Block.css"
import "../assets/Style.css"
import Data from '../Data/Data'
import { Link } from 'react-router-dom'
function Block1(props) {
    {var abc=Data.filter((b)=>b.Cat==props.title)}
    return (
        <>
            <section className='bg-light'>
                <div className="container block py-5">
                    <div className="row line">
                        <div className="col-lg-2 col-sm-3 col-md-3 col-12">
                            <h3 className='fw-semibold'>{props.title}</h3>
                        </div>
                        <div className="col-lg-2 offset-lg-8 col-sm-3 offset-sm-6 col-md-3 offset-md-6 col-12">
                        <Link to={`/cat/${props.title}`}><button className='btn1'>Read More</button></Link>
                        </div>
                    </div>
                    <div className="row my-5">
                        {abc.map((a) => (
                            <div className="col-lg-4 col-sm-12 col-md-4 col-12">
                                <img className='w-100 im img-fluid img-thumbnail' src={a.image} alt="" />
                                <div className="row mt-2">
                                    <div className="col-lg-5 col-sm-6 col-md-12 col-12">
                                        <p><i class="bi bi-calendar-check"></i> {a.date}</p>
                                    </div>
                                    <div className="col-lg-3 offset-lg-1  col-sm-3 offset-sm-3 col-md-12 col-12">
                                        <span className='cc'>{a.Cat}</span>
                                    </div>
                                </div>
                                <div className="text">
                                <Link to={`/post/${a.id}`}><h6 className='title fw-semibold'>{a.title}</h6></Link>
                                    <p className='cont'>{a.body}</p>
                                    <Link to={`/post/${a.id}`}>Read More →</Link>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Block1
