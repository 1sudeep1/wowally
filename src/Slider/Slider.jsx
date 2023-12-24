import React from 'react'
import "./Slider.css"
import "../assets/Style.css"
import SliderData from '../Data/SliderData'
function Slider() {

    return (
        <>
            <div className="slider">
                <div id="carouselExampleCaptions" className="carousel slide container">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={3} aria-label="Slide 4" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={4} aria-label="Slide 5" />
                    </div>
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12 pb-5 col-12">
                                        <img src="https://wowally.com/wp-content/uploads/2023/06/Undefined-Beauty-CEO-Dorian-Morris.jpg" className="w-100 img-fluid" alt="..." />
                                    </div>
                                    <div className="col-lg-6 col-sm-12 col-12">
                                        <div className="carousel-caption imm ">
                                            <h5 className='carousel-title'>4 Things To Learn From Undefined Beauty’s CEO Dorian Morris: Fusion of Skin Care and CBD Together</h5>
                                            <p className='carousel-body'>In recent years, Cannabidiol (CBD) has emerged as a popular ingredient in the skincare industry, and Undefined Beauty's CEO Dorian Morris.</p>
                                        </div>
                                        <button className='btn'>Read More</button>
                                    </div>
                                </div>
                            </div>
                        {SliderData.map((a) => (
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12 pb-5 col-12">
                                        <img src={a.sliderimg} className="w-100 img-fluid" alt="..." />
                                    </div>
                                    <div className="col-lg-6 col-sm-12 col-12">
                                        <div className="carousel-caption imm ">
                                            <h5 className='carousel-title'>{a.slidertitle}</h5>
                                            <p className='carousel-body'>{a.sliderbody}</p>
                                        </div>
                                        <button className='btn'>Read More</button>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </>
    )
}

export default Slider
