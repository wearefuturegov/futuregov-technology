import React from 'react'

export default ({collections}) =>
    <ul className="collections-list">
        {collections.map((collection, i) =>
            <li key={i}>
                {collection.name}
            </li>
        )}
    </ul>