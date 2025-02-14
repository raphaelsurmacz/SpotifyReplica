import React from 'react'
import Player from '../components/Player';
import { Link } from 'react-router-dom';

const Song = () => {
    return (
        <div className="song">
            <div className="song__container">
                <div className="song__image-container">
                    <img src="https://i.scdn.co/image/ab67616d00001e02d8bfb4567b1b5e5bc4da915b" alt="X song image" />
                </div>

            </div>

            <div className="song__bar">
                <div className='song__artist-image'>
                    <Link to="/artist/1">
                        <img src="https://i.scdn.co/image/ab67616d00001e02d8bfb4567b1b5e5bc4da915b"
                        width={80}
                        height={80}
                        alt="Artist image" />
                    </Link>
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