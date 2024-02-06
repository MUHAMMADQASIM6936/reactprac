import React from 'react'
import Imagen from '../Images/img2.webp'

const Nike = () => {
  return (
    
<main className="hero">
  <div className="paragraph">
    <h1>YOUR FEET DESERVE THE BEST</h1>
    
    <div className="button">
<button>shop now</button>
<button>category</button>

<div className="shoeimage">

   <img src={Imagen}  alt="shoeimage" />
</div>
</div>
    </div>
</main>

  )
}

export default Nike
