import React, { useState } from 'react'
import "./Header.css"
import Data from '../Data/Data'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Post from '../Posts/Post'
import About from '../Pages/About'
import Write from '../Pages/Write'
import Contact from '../Pages/Contact'
import Cate from '../Pages/Cate'
function Header(props) {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        const filteredData = Data.filter((item) => {
            const name = item.Cat.toLowerCase();
            return name.includes(query.toLowerCase());
        })
        setSearchResults(filteredData);
    }
    const clearResults = () => {
        setSearchQuery('');
        setSearchResults([]);
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand fs-2 fw-semibold" to="/"><span className='t1'> WOW</span><span className='t2'>ally</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                            <li className="nav-item">
                                <Link className="nav-link active fw-semibold" aria-current="page" to="/">WOWALLY</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold" to="/cat/news">NEWS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold" to="/cat/entertainment">ENTERTAINMENT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold" to="/cat/sports">SPORTS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold" to="/cat/gaming">GAMING</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold" to="/cat/writing">WRITING</Link>
                            </li>

                        </ul>
                        <form className="d-flex form justify-content-between" role="search">
                            <div className="sicon">
                                <i class="bi bi-facebook"></i> &nbsp; <i class="bi bi-twitter"></i>
                            </div>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchQuery} onChange={handleSearch} />
                            <span className='searchicon'><i class="bi bi-search"></i></span>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-12 col-md-12 col-12">
                        <ul className="list-group ">
                            {searchResults.map((item) => (
                         <li className="list-group-item" key={item.id}> <Link to={`/cat/${item.Cat}`}> {item.Cat}</Link></li>
                            ))}

                        </ul>
                        {searchResults.length > 0 && (
                            <button onClick={clearResults}>Clear Results</button>
                        )}
                    </div>
                </div>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cat/:cid" element={<Cate />} />
                <Route path="/post/:pid" element={<Post />} />
                <Route path="/about" element={<About />} />
                <Route path="/write-for-us" element={<Write />} />
                <Route path="/contact-us" element={<Contact />} />
            </Routes>

        </>
    )
}

export default Header
