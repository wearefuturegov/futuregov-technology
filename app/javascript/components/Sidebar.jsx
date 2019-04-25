import React from 'react'
import Collections from './Collections'
import Contents from './Contents'

export default ({logoUrl, collections}) => 
    <aside className="sidebar">
        <div className="sidebar__left-pane">
            <Collections collections={collections}/>
        </div>
        <div className="sidebar__right-pane">
            <div className="sidebar__masthead">
                <img src={logoUrl} alt=""/>
                <h1>Technology</h1>
            </div>
            <Contents/>
        </div>
    </aside>