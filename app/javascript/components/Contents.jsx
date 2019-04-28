import React, {useEffect} from 'react'

export default ({currentCollection, currentSlug}) => {


    useEffect(() => {
        // Can this be refactored into a more declarative style?
        if(document.querySelector(".entry-list__link--active")){
            document.querySelector(".entry-list__link--active").scrollIntoView()
        }
    });

    return(
        <ul 
            className="category-list" 
            aria-live="polite" 
            role="tabpanel" 
            aria-labelledby={`sidebar-tab-${currentCollection.id}`}
            >
            {currentCollection.categories.map((category, i) => 
                <li 
                    className="category-list__item" 
                    key={i}
                    >
                    <h2 className="category-list__title">{category.name}</h2>
                    <ul className="entry-list">
                        {category.entries.map((entry, j)=>
                            <li key={j}><a className={(entry.slug === currentSlug)? "entry-list__link entry-list__link--active" : "entry-list__link"} href={`/entries/${entry.slug}`}>{entry.title}</a></li>
                        )}
                    </ul>
                </li>    
            )}
        </ul>
    )
}
