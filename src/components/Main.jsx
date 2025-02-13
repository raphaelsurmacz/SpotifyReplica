// Main

import React from 'react'
import ItemList from './ItemList';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';

const Main = () => {
  return (
    <div className='main'>
        <ItemList title="artists" items={5} itemsArray={artistArray} />
        
        <ItemList title="songs" items={10} itemsArray = {songsArray}/>
    </div>
)};

export default Main