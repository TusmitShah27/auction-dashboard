import React from 'react'
import './gallery.css'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'


const Gallery = ({galleryImages}) => {

  // const [slideNumber, setSlideNumber] = useState(0);
  // const [openModal, setOpenModdal] = useState(false)

  // const handleOpenModal = (index) =>{
  //     setSlideNumber(index)
  //     setOpenModdal(true)
  // }

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '480px'
  }

  return (
    // <div>

    //     <div className='galleryWrap'>
    //       <Slide>
    //       {
    //         galleryImages && galleryImages.map((silde, index) => {
    //           return(
    //             <div className='single' key={index}>
    //               <img src= {silde.img} alt=''/>
    //             </div>
    //           )
    //         })
    //       }
    //       </Slide>
    //     </div>
    // </div>

    <div className="slide-container">
        <Slide>
         { galleryImages && galleryImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.img})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>

  )
}

export default Gallery
