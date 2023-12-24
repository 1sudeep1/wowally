import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Data from '../Data/Data';
function Cate(props) {
    let {cid}=useParams();
    {var abc=Data.filter((b)=>(b.Cat==cid.toUpperCase()))};
  return (
    <>
      <div className="container block">
        <div className="row line">
          <div className="col-lg-2  col-sm-4 col-md-4 col-12">
            <h3 className='fw-semibold text-uppercase'>{cid}</h3>
          </div>
          <div className="col-lg-2 offset-lg-8 col-sm-4 offset-sm-4 col-md-4 offset-md-4 col-12">
            <button className='btn1'>Read More</button>
          </div>
        </div>
        <div className="row my-5">
          {abc.map((a) => (
            <div className="col-lg-4 col-sm-12 col-md-12 my-3 col-12">
              <img className='w-100 im img-fluid img-thumbnail' src={a.image} alt="" />
              <div className="row mt-2">
                <div className="col-lg-6 col-sm-4 col-md-4 col-12">
                  <p><i class="bi bi-calendar-check"></i> {a.date}</p>
                </div>
                <div className="col-lg-3 offset-lg-3 col-sm-4 offset-sm-4 col-md-4 offset-md-4 col-12">
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
    </>
  )
}

export default Cate
