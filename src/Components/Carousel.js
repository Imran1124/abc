import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'

export default function Carousel() {
  const click = () => {
    var element = document.getElementById("cp");
    element.className.remove("carousel-caption d-none d-md-block");
    alert(element.className)
  }
  return (
    <>
      <MDBCarousel showIndicators showControls fade className='carousel'>
        <Link to="/applycard" className='blackbox'><MDBBtn color='danger' outline className='btncarousal'>Apply For Card</MDBBtn></Link>
        <MDBCarouselInner>
          <MDBCarouselItem className='active'>
            <MDBCarouselElement className='carosule' height={300} src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp' alt='...' />
            <MDBCarouselCaption id="cp">
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselCaption>

          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement height={300} src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp' alt='...' />
            <MDBCarouselCaption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement height={300} src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp' alt='...' />
            <MDBCarouselCaption>
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </>
  );
}