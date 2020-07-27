import React, { Component } from 'react';
import axios from 'axios';
import ApiKey from './ApiKey';

const ImagesContext = React.createContext();
// API ignored in .gitignore
const Api_Key = ApiKey;

export class Provider extends Component {
	state = {
      imgs: [],
      search: ""
    }
    // I decided not to preload all 3 nav searches. Kept code dry with just the use of one GET.
    customSearch = (search) => {
    	// I still receive 100 images here. I filter it down to 24 later due to some images receiving errors.
       axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${Api_Key}&tags=${search}&format=json&nojsoncallback=1`)
       	.then( response => {
            const list = response.data.photos.photo.filter( i =>  i.server !== "0" );
       		this.setState({
       			// Take the first 24 only after filter has removed bad images.
	            imgs: list.slice(0, 24),
	            search: search
	          })
       	})
        .catch( error => {
          console.log(error + " : OMG THERE IS AN ERROR")
        })
    } 

	render() {
		return(
			<ImagesContext.Provider value={{
	          imgs: this.state.imgs,
	          action: this.customSearch,
	          search: this.state.search
	        }}>
	        	{this.props.children}
	        </ImagesContext.Provider>
		)
	}

}
export const Consumer = ImagesContext.Consumer;