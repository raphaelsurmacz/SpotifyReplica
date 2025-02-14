import React from 'react'
import Player from '../components/Player';

const Song = () => {
    return (
        <div className="song">
            <div className="song__container">
                <div className="song__image-container">
                    <img src="https://i.scdn.co/image/ab67616d00001e02d8bfb4567b1b5e5bc4da915b"
                    alt="X song image" />
                </div>

            </div>

            <div className="song__bar">
                <div className='song__artist-image'>
                    <img src="https://i.scdn.co/image/ab67616d00001e02d8bfb4567b1b5e5bc4da915b"
                    width={80}
                    height={80}
                    alt="Artist image" />
                </div>

                <Player />
                <div>
                    <p className='song__name'>Song name</p>
                    <p>Artist name</p>
                </div>
            </div>
        </div>
    );
};

export default Song