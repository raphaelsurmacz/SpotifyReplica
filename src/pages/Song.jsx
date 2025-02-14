import React from 'react'

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
                    <img src="https://i.scdn.co/image/ab67616d00001e02d8bfb4567b1b5e5bc4da915b" alt="Artist image" />
                </div>

                <div className='player'>

                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Song