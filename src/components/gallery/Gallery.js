import React from 'react'
import './gallery.css'

const Gallery = ({galleryImages}) => {

  // const [slideNumber, setSlideNumber] = useState(0);
  // const [openModal, setOpenModdal] = useState(false)

  // const handleOpenModal = (index) =>{
  //     setSlideNumber(index)
  //     setOpenModdal(true)
  // }

  return (
    <div>

        <div className='galleryWrap'>
          {
            galleryImages && galleryImages.map((silde, index) => {
              return(
                <div 
                className='single'
                key={index}
                >
                  <img src= {silde.img} alt=''/>
                </div>
              )
            })
          }
        </div>
    </div>

  )
}

export default Gallery
