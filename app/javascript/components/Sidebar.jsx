import React, { useState } from 'react'
import Collections from './Collections'
import Contents from './Contents'

export default ({logoUrl, collections, currentSlug, currentCollectionId}) => {

    let initialCollection = collections.findIndex((collection)=>{
        if(collection.id === currentCollectionId){
            return true
        }
    })

    if(initialCollection === -1){initialCollection = 0}

    console.log(initialCollection)

    const [currentCollection, setCurrentCollection] = useState(initialCollection)

    const handleCollectionChange = (newCollection) => {
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
            <div className="sidebar__right-pane">
                <a className="sidebar__masthead" href="/">
                    <img className="sidebar__logo" src={logoUrl} alt="Futuregov"/>
                    <h1 className="sidebar__title">Technology</h1>
                </a>
                <Contents 
                    currentCollection={collections[currentCollection]}
                    currentSlug={currentSlug}
                    />
            </div>
        </aside>
    )     
}
