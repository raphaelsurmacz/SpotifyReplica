import React from 'react'
import ItemList from './ItemList';

const Main = () => {
  return (
    <div className='main'>
        <ItemList title="artists" items={5} />
        
        <ItemList title="songs" items={10}/>
    </div>
)};

export default Main