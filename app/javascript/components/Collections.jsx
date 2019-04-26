import React from 'react'

export default ({collections, currentCollection, handleCollectionChange}) =>
    <ul className="collections-list">
        {collections.map((collection, i) =>
            <li 
                className={(currentCollection === i)? "collections-list__item collections-list__item--active" : "collections-list__item"} 
                key={i}
                >
                <button
                    className="collections-list__button" 
                    onClick={()=>{handleCollectionChange(i)}}
                    disabled={(currentCollection === i)? true : false}
                    >
                        {collection.name}
                </button>
            </li>
        )}
    </ul>