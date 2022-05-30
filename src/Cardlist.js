import React from 'react';
import Card from './Card';

const Cardlist = ({cyclists}) => {
	return (
		<div className="cycling-app">
			{
				cyclists.map((user, i) => {
					return <Card 
						key={i} 
						id={cyclists[i].id} 
						name={cyclists[i].name} 
						description={cyclists[i].description} 
						img={cyclists[i].img} 
						alt={cyclists[i].alt}
						/>
				})
			}
    </div>
	);
}

export default Cardlist;