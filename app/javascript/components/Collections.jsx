import React from 'react'

export default ({collections}) =>
    <ul className="collections-list">
        {collections.map((collection, i) =>
            <li className="collections-list__item collections-list__item--active" key={i}>
                <button className="collections-list__button">{collection.name}</button>
            </li>
        )}
    </ul>