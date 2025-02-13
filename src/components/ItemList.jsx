import React from 'react' 
import SingleItem from './SingleItem'

const ItemList = ({ title, items }) => {
  return (
    <div className='item-list'>
        <div className='item-list__header'>
            <h2 className='item-list__title'>Popular { title }</h2>
            <a className='item-list__link' href='/'>Show all</a>
        </div>

        <div className='item-list__container'>
            {
                Array(items).fill().map( (currentValue, index) => <SingleItem key={`${title}-${index}`}/> )
            }
        </div>
    </div>
  )
}

export default ItemList