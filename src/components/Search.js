import React from 'react';
import { Consumer } from '../context';
import Photo from './Photo';


const Search = ({ match }) => {

    // Use the url to pass on to the search function
    let search = match.params.search;

    return (
        <div className="photo-container">
          
          	<Consumer>
          		{ context => {
                // Check search to stop Infinite Loop
                if ( context.search !== search ) {
                    context.action(search);
                } 

                // Check Length of array to show if there are no results
                if (context.imgs.length > 0 ) {

                  return (
                    <React.Fragment>
                      <h2>Results: {search}</h2>
                      <ul>
                      { context.imgs.map( (image) =>  
                        <Photo 
                        img={image}
                        key={image.id}
                        />
                      )}
                      </ul>
                    </React.Fragment>
                  )
                } 
                else {
                  return (
                    <React.Fragment>
                      <ul>
                        <li className="not-found">
                          <h3>No Results Found For: {search}</h3>
                          <img src="/no_result.jpeg" />
                          <p>You search did not return any results. Please try again.</p>
                        </li>
                      </ul>
                    </React.Fragment>
                  )
                }
          			
          		}}
          	</Consumer>
        </div>
    )
}

export default Search;