import React, { useState } from 'react'
import Collections from './Collections'
import Contents from './Contents'

export default ({logoUrl, collections, activeArticle}) => {

    const [currentCollection, setCurrentCollection] = useState(0)

    const handleCollectionChange = (newCollection) => {
        console.log("changing state to: ", newCollection)
        setCurrentCollection(newCollection)
    }

    return (
        <aside className="sidebar">
            <div className="sidebar__left-pane">
                <Collections 
                    collections={collections} 
                    currentCollection={currentCollection}
                    handleCollectionChange={handleCollectionChange}
                    />
            </div>

            Current collection: {currentCollection}

            <div className="sidebar__right-pane">
                <a className="sidebar__masthead" href="/">
                    <img src={logoUrl} alt="Futuregov"/>
                    <h1>Technology</h1>
                </a>
                <Contents currentCollection={collections[currentCollection]}/>
            </div>
        </aside>
    )     
}
