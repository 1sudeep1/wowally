import React from 'react'
import "./Post.css"
import "../Block/Block.css"
import { Link, useParams } from 'react-router-dom'
import Data from '../Data/Data'
function Post() {

    const { pid } = useParams()
    { var ss = Data.find((c) => (c.id == pid)) }
    { var abc = Data.filter((b) => (b.Cat == ss.Cat)) }

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-10 col-sm-12 col-md-12">
                        <h5 className='fw-bold fs-2 hh'>{ss.title}</h5>
                        <p>Home » NEWS » Twitch Streamer Kyedae Alixia Shymko’s Cancer News: How Supportive are Her Fans?</p>
                        <div className="row top">
                            <div className="col-lg-6 col-sm-12 col-md-12"><i class="bi bi-calendar-check"></i> Published On: March 3, 2023 </div>
                            <div className="col-lg-2 col-sm-12 col-md-12"><i class="bi bi-person"></i> Lily </div>
                            <div className="col-lg-4 col-sm-12 col-md-12"><i class="bi bi-book"></i> 3 MIN READ</div>
                        </div>
                        <div className="row imgtbl">
                            <div className="col-lg-7 col-sm-12 col-md-12">
                                <img className='w-100 img-fluid' src={ss.image} alt="" />
                                <p className='caption mt-2'>The Twitch streamer Kyedae Alixia Shymko was diagnosed with Acute Myeloid Leukemia. Photo Source: Kyedae Shymko's Instagram.</p>
                            </div>
                            <div className="col-lg-5 col-sm-12 col-md-12">
                                <span className='tabl'>TABLE OF CONTENT</span>
                                <div className="tbody border tt">
                                    <ul>
                                        <li><Link to="">Twitch Streamer Kyedae Alixia Shymko’s Cancer News</Link></li>
                                        <li className='wh'><Link to="">Kyedae’s Twitch Journey</Link></li>
                                        <li><Link to="">Engaged With Her Longtime Boyfriend</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="singledata">
                            <p className='fs-5'><span className='fw-bold'>John Lennon </span>once sang, “Life is what happens to you while you are busy making other plans,” and with the recent announcement of Twitch Streamer Kyedae Alixia Shymko‘s cancer, the lyrics made more sense. Fans are heartbroken and sad about the news.</p>
                            <p className='fs-5'>Kyedae Shymko, better known as Kyedae, is a Japanese-Canadian Twitch streamer and content creator for the LA-based gaming organization 100 Thieves. With the sudden news of her cancer diagnosis, many are praying for and supporting her. Here’s everything we know about the streamer and her health updates.</p>

                            <button className='rrr '>Read More</button>
                            <h3 className='mb-4 headd'>Twitch Streamer Kyedae Alixia Shymko’s Cancer News</h3>
                            <div className="readmore">

                                <p>On March 3, 2023, Kyedae took to her Twitter to announce the tragic news. She wrote that she was recently diagnosed with Acute Myeloid Leukemia (AML) which is a rare type of inherited leukemia.</p>
                                <p>The Japanese-Canadian streamer mention she will be undergoing treatment soon and apologized in advance if her stream schedule became inconsistent. During such times, her stream is the least of the worry to her fans, who are praying for her speedy recovery.</p>
                                <div className="box border p-4 w-75 h-75 mx-auto my-3">
                                    <img className='w-75 h-75' src="https://wowally.com/wp-content/uploads/2023/03/Kyedae-Fans.jpg" alt="" />
                                    <p>Kyedae got engaged to her long-time boyfriend, Tyson Ngo. Photo Source: Kyedae’s Instagram.</p>
                                </div>
                                <p>AML is often curable with chemotherapy and, in some cases, might not need a bone marrow transplant. It all depends on the severity of cancer. Nothing further has been revealed about Kyedae’s health condition.</p>
                                <p>ALSO READ: Adam Rich Died At 54</p>
                                <h3>Kyedae’s Twitch Journey</h3>
                                <p>The popular Twitch streamer Kyedae was first introduced to Twitch by her boyfriend turned fiancee, Tyson Ngo, better known by his online alias TenZ. She met Ngo in high school and began dating after hanging out at a party.</p>
                                <p>Tyson first introduced Kyedae during one of his streams, where he taught her how to play Valorant. On October 31, 2020, she streamed by herself from TenZ’s computer for the first time.</p>
                                <p>This is how her Twitch streaming journey began, and she now has over 2 million Twitch followers. While Kyedae’s fiancee TenZ is a part of Sentinels, she is part of a rival organization, 100 Thieves. She joined 100 Thieves in April of 2021.</p>
                                <h3>Engaged With Her Longtime Boyfriend</h3>
                                <p>Kyedae got engaged to her longtime boyfriend and streaming partner, Tyson Ngo. The couple announced their engagement on the occasion of their 3-year anniversary by sharing a few endearing pictures of their special moment.</p>
                                <div className="box border p-4 w-75 h-75 mx-auto my-3">
                                    <img className='w-75 h-75' src="https://wowally.com/wp-content/uploads/2023/03/Kyedae-Alixia-Shymko-boyfriend.jpg" alt="" />
                                    <p>Kyedae got engaged to her long-time boyfriend, Tyson Ngo. Photo Source: Kyedae’s Instagram.</p>
                                </div>
                                <p>However, TenZ revealed that the couple had been engaged for 8 months but kept it a secret until finally revealing it in August of 2022. They are among the most loved and adored couples in the gaming society.</p>
                                <p>Kyedae Alixia Shymko’s cancer diagnosis alarmed many of her loved ones. With the news, people have been showing concern and supporting her. Kyedae’s fiancee has not spoken anything about the topic yet. We send love and strength to the Shymko family.</p>
                                <p>Kyedae’s Twitter post has so far received over 12M views and is continuing to increase by the hours. Everyone is shocked and saddened by the news. We wish her a speedy recovery and hope to hear the news of her beating cancer in the coming future.</p>
                            </div>
                            <div className="links mt-5 mb-3">
                                <Link to="" className='bg-primary-subtle px-2 rounded-pill'>Celebrity Dating</Link>
                                <Link to="" className='bg-primary-subtle px-2 rounded-pill'>Celebrity Entertainment</Link>
                                <Link to="" className='bg-primary-subtle px-2 rounded-pill'>Celebrity Facts</Link>
                                <Link to="" className='bg-primary-subtle px-2 rounded-pill'>Celebrity Relationship</Link>
                                <Link to="" className='bg-primary-subtle px-2 rounded-pill'>John Lennon</Link>
                                <Link to="" className='bg-primary-subtle px-2 rounded-pill'> Kyedae</Link>
                                <Link to="" className='bg-primary-subtle px-2 rounded-pill'> Kyedae Alixia Shymko</Link>
                                <Link to="" className='bg-primary-subtle px-2 rounded-pill'> Kyedae Cancer Update</Link>
                                <Link to="" className='bg-primary-subtle px-2 rounded-pill'>  TenZ</Link>
                                <Link to="" className='bg-primary-subtle px-2 rounded-pill'>  Tyson Ngo</Link>

                            </div>

                            <div className="linkdot py-2 px-2">
                                <p>Want more updates? come back and visit
                                    <Link to="" className='text-decoration-underline px-1'>Wowally</Link> to get updates on
                                    <Link to="" className='text-decoration-underline px-1'>News</Link>,
                                    <Link to="" className='text-decoration-underline px-1'>Entertainment</Link>,
                                    <Link to="" className='text-decoration-underline px-1'>Sports</Link>,
                                    <Link to="" className='text-decoration-underline px-1'>Gaming</Link>,<br />
                                    <Link to="" className='text-decoration-underline px-1'>Writing</Link></p>
                            </div>
                        </div>

                        <div className="row my-5">
                            <h2>Related Post</h2>
                            {abc.map((a) => (
                                <div className="col-lg-4 col-sm-12 col-md-12 col-12">
                                    <img className='w-100 im img-fluid' src={a.image} alt="" />
                                    <div className="row mt-2">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <p><i class="bi bi-calendar-check"></i> {a.date}</p>
                                        </div>
                                        <div className="col-lg-6 col-md-3 offset-md-3 col-sm-6 col-12">
                                            <span className='cc'>{a.Cat}</span>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <Link to={`/post/${a.id}`}><h6 className='title fw-semibold'>{a.title}</h6></Link>

                                        <p className='cont'>{a.body}</p>
                                        <a href="">Read More →</a>
                                    </div>

                                </div>
                            ))}

                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-12 col-md-12 col-12">
                        <h3>Recent Post</h3>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td><img className='ii' src="https://wowally.com/wp-content/uploads/2023/05/Anika-Janelle-P-net-worth.jpg" alt="" /></td>
                                    <td className='rr'> <Link to="">How Janelle Beauty’s Founder and CEO Anika Janell...</Link></td>
                                </tr>
                                <tr>
                                    <td><img className='ii' src="https://wowally.com/wp-content/uploads/2023/05/Shanzey-Al-Amin-Net-Worth.jpg" alt="" /></td>
                                    <td className='rr'> <Link to="">Transformative Skincare Zeyl Beauty’s Co founder ...</Link></td>
                                </tr>
                                <tr>
                                    <td><img className='ii' src="https://wowally.com/wp-content/uploads/2023/05/Anika-Janelle-P-husband.jpg" alt="" /></td>
                                    <td className='rr'> <Link to="">Meet Anika Janelle P.’s Husband: The Unsung Hero ...</Link></td>
                                </tr>
                                <tr>
                                    <td><img className='ii' src="https://wowally.com/wp-content/uploads/2023/05/Niha-Amin-Net-Worth.jpg" alt="" /></td>
                                    <td className='rr'> <Link to="">Niha Amin’s Net Worth: The Story of a Young Entre...</Link></td>
                                </tr>
                                <tr>
                                    <td><img className='ii' src="https://wowally.com/wp-content/uploads/2023/05/Julie-Schott-Net-Worth.jpg" alt="" /></td>
                                    <td className='rr'> <Link to="">Julie Schott’s Net Worth: 5 Major Importances of ...</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Post
