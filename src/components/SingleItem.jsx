import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';  

const SingleItem = ( { id, image, name, banner, artist = undefined}) => {
  return (
    <div className='single-item'>
        <div className='single-item__div-image-button'>
            <div className='single-item__div-image'>
                <img className='single-item__image'
                src={ image }
                alt={`Artista - ${name}`}
                />
            </div>

            <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} />
        
        </div>

        <div className='single-item__texts'>
            <p className='single-item__title'> { name } </p>
            <p className='single-item__type'> { artist ?? "Artist" } </p>
        </div>

    </div>
  )
}

export default SingleItem