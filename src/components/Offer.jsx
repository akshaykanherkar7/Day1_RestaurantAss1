import React from 'react'

const Offer = (props) => {
  return (
    <section class="offers">
        <div class="container">
            {props.offers.map((offer,index)=>(
              <img key={index} className="offer" src={offer} alt=""/>
            ))}
        </div>
    </section>
  )
}

export default Offer