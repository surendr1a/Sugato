import React from 'react'

export default function Carousel(props) {
  return (
    <div>
  
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
      <div className="carousel-inner" id='carousel'>
        <div className="carousel-caption" style={{zIndex:1}}>
        <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success text-white bg-success"  type="submit">Search</button>
    </form>
        </div>
        <div className="carousel-item active">
          <img src={props.imgSrc} className="d-block w-100" style={{filter:"brightness(30%)"}}   alt="https://source.unsplash.com/random/720x1280" />
        </div>
        <div className="carousel-item">
          <img src={props.imgSrc} className="d-block w-100" style={{filter:"brightness(30%)"}} alt="https://source.unsplash.com/random/720x1280" />
        </div>
        <div className="carousel-item">
          <img src={props.imgSrc} className="d-block w-100" style={{filter:"brightness(30%)"}} alt="https://source.unsplash.com/random/720x1280" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    
    </div>
  )
}
