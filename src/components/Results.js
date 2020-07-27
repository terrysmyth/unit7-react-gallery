import React from 'react';
import Photo from './Photo';


const Results = (props, {match}) => {
	console.log(match)
	return (
		<div className="photo-container">
          <h2>Results</h2>
          <ul>
          	{ props.imgs.map( (image) => 
          		<Photo 
          		img={image}
          		key={image.id}
          		/>
          	)}
          </ul>
        </div>
	)
}
export default Results;