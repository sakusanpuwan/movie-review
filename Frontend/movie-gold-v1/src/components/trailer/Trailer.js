import React from 'react'
import {useParams} from 'react-router-dom';
import {ReactPlayer} from 'react-player';
import './Trailer.css';


const Trailer = () => {
   
    const params = useParams(); 
    // returns an object of key/value pair from the dynamic param of the current URL
    // key = parameter names declared in the path string in Route = ytTrailerId
    // value = corresponding URL  = 3vret4rfge4

    // https://javascript.plainenglish.io/react-router-how-to-use-the-useparams-hook-321a6461732
    
    const value = params.ytTrailerId; 

  return (
    <div className='react-player-container'>
        {(value != null)?<ReactPlayer controls="true" playing={true} url = {`https://wwww.youtube.com/watch?v=${value}`} width='100%' height='100%'/> : null}
    </div>
  )
}

export default Trailer