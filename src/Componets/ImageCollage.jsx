import React from 'react';
import './ImageCollage.css';

function ImageCollage() {
  const images = [
    { src: '/public/images/pexels-alleksana-4186326.jpg' },
    { src: '/public/images/pexels-michael-block-3225531.jpg' },
    { src: '/public/images/pexels-tommy-milanese-7891883.jpg' },
    { src: '/public/images/pexels-eko-agalarov-15713593.jpg' },
    { src: '/public/images/pexels-wewe-yang-4508644.jpg' },
    { src: '/public/images/pexels-zakaria-boumliha-2827374.jpg' },
    { src: '/public/images/pexels-diego-f-parra-3663924.jpg' },
    { src: '/public/images/pexels-victor-5899725.jpg' },
    { src: '/public/images/pexels-tirachard-kumtanom-887828.jpg' },
    { src: '/public/images/pexels-sander-dalhuisen-2566030.jpg' },
    { src: '/public/images/pexels-wendy-wei-1656681.jpg' },
    { src: '/public/images/pexels-asad-photo-maldives-3155726.jpg' },
    { src: '/public/images/pexels-anna-holodna-13812183.jpg' },
    { src: '/public/images/pexels-asad-photo-maldives-1268855.jpg' },
    { src: '/public/images/pexels-osama-i̇brahim-9187088.jpg' },
    { src: '/public/images/pexels-sander-dalhuisen-2566030.jpg' },
    { src: '/public/images/pexels-trace-hudson-2535206.jpg' },
    { src: '/public/images/pexels-taryn-elliott-3889764.jpg' },
    { src: '/public/images/pexels-taryn-elliott-3889843.jpg' },
    { src: '/public/images/pexels-rachel-claire-4825719.jpg' },
    { src: '/public/images/pexels-thanhhoa-tran-1488327.jpg' },
    { src: '/public/images/pexels-quark-studio-2506988.jpg' },
    { src: '/public/images/pexels-pixabay-261102.jpg' },
    { src: '/public/images/pexels-colon-freld-2373201.jpg' }




   
    
  ];
 
  return (
  <div className='Container-collage'>
    <h1>
    Get inspiration for your next trip
    </h1>
    <p>Explore a world of possibilities as we curate enticing travel experiences tailored just for you.
       From exotic destinations to hidden gems, let Utravel spark the inspiration that transforms your travel dreams into extraordinary journeys.
       The world is waiting, and your next adventure begins with us.</p>
      <div className="image-collage">
      {images.map((image, index) => (
        <img key={index} src={image.src} alt="" />
      ))}
    </div>
  </div> 
  );
 }

 export default ImageCollage