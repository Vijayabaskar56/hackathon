import '../components/PrizeCardStyles.css'
import medal from '../assets/medal.png'
import rosette from '../assets/rosette.png'
import trophy from '../assets/trophy.png'

import React from 'react'

const PrizeCard = () => {
  return (
    <>
    <div className="price-container">  
    <div className="card-container">
        <div className="card">
          
              <img src={trophy} alt="prize" className='prize'/>
            <h1>1st Place</h1>
            <h3>Up to $40k worth of prizes</h3>
        </div>
        <div className="card">
        <img src={medal} alt="prize" className='prize'/>
            <h1>2st Place</h1>
            <h3>Up to $40k worth of prizes</h3>
        </div>
        <div className="card">
        <img src={rosette} alt="prize" className='prize'/>
            <h1>3st Place</h1>
            <h3>Up to $40k worth of prizes</h3>
        </div>
    </div>  
    </div>
    </>
  )
}

export default PrizeCard