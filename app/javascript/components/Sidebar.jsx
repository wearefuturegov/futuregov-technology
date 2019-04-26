import React, { useState } from 'react'
import Collections from './Collections'
import Contents from './Contents'

export default ({logoUrl, collections, activeArticle}) => 
    <aside className="sidebar">
        <div className="sidebar__left-pane">
            <Collections collections={collections}/>
        </div>
        <div className="sidebar__right-pane">
            <a className="sidebar__masthead" href="/">
                <img src={logoUrl} alt="Futuregov"/>
                <h1>Technology</h1>
            </a>
            <Contents currentCollection={collections[1]}/>
        </div>
    </aside>