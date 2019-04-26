import React from 'react'

export default ({currentCollection}) =>
    <div>
        {console.log(currentCollection)}

        <ul>
            {currentCollection.categories.map((category, i) => 
                <li key={i}>

                    <h2>{category.name}</h2>

                    <ul>
                        {category.entries.map((entry, i)=>
                            <li key={i}><a href={`/entries/${entry.slug}`}>{entry.title}</a></li>
                        )}
                    </ul>

                </li>    
            )}
        </ul>

    </div>