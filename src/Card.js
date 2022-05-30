import React from 'react'
import './card.css'

const Card = ( { img, alt, id, name, description } ) => {
	return (
		<div className="card bg-light-green grow">
			<figure>
				<img src={img} alt={alt}/>
			</figure>
			<div className="mw-70 mw5">
				<h2 className="cyclist-name">{name}</h2>
				<p className="cyclist-description pa1 tc">{description}</p>
			</div>
		</div>
	)
}

export default Card;