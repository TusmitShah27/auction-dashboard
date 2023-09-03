import React from 'react'
import Subheader from './components/Subheader'
import Gallery from './components/gallery/Gallery'



const Home = () => {

    const galleryImages = [
        {
            img: "./images/logo.jpeg"
        },
        {
            img: "./images/logo.jpeg"
        },
        {
            img: "./images/logo.jpeg"
        },
        {
            img: "./images/logo.jpeg"
        },
        {
            img: "./images/logo.jpeg"
        },
        {
            img: "./images/logo.jpeg"
        },
        {
            img: "./images/logo.jpeg"
        }

    ]

  return (
    <div className='container'>
        <Subheader />
        <Gallery 
            galleryImages = {galleryImages}
        />
    </div>
  )
}




export default Home


