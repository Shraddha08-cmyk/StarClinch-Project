import React from 'react'
import './Gallery.css'
import { FcGallery } from 'react-icons/fc'
import img1 from '../../images/img-1.jpg'
import img2 from '../../images/img-2.jpg'
import img3 from '../../images/img-3.jpg'
import img4 from '../../images/img-4.jpg'
import img5 from '../../images/img-5.jpeg'
import img6 from '../../images/img-6.jpeg'
import img7 from '../../images/img-7.jpg'
import img8 from '../../images/img-8.jpg'
import img9 from '../../images/img-9.jpg'

const Gallery = () => {
  return (
    <div>
      <div className="gallery">
        <FcGallery className='gallery-icon' />
        <h6 className='gallery-text'>Gallery</h6>
      </div>
      <div className="photos">
        <img className='img1 img' src={img1} alt="img1" />
        <img className='img2 img' src={img2} alt="img2" />
        <img className='img3 img' src={img3} alt="img3" />
        <img className='img4 img' src={img4} alt="img4" />
        <img className='img5 img' src={img5} alt="img5" />
        <img className='img6 img' src={img6} alt="img6" />
        <img className='img7 img' src={img7} alt="img7" />
        <img className='img8 img' src={img8} alt="img8" />
        <img className='img9 img' src={img9} alt="img9" />
      </div>
    </div>
  )
}

export default Gallery
