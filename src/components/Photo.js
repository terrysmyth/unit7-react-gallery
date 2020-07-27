import React from 'react';

const Photo = (props) => {

    const {
        farm,
        id,
        secret,
        server
    } = props.img;

    return (
				
 		<li>
        	<img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg)`} alt="" />
    	</li>
	 
	)

}

export default Photo;