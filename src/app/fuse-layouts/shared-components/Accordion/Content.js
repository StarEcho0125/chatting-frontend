import React from 'react'
import Folder from './Folder'

import './Accordion.css'

/** CONTENT FOR THE FIRST ACCORDION COMPONENT */
/** You can change content if you want */

export default function Content() {
    return (
        <div>
            <a href="/" style={{textDecoration: 'none'}}>
            <Folder /> Civil Project (office_0004)
            </a>
            <a href="/" style={{textDecoration: 'none'}}>
            <Folder /> Samurai (office-0003)
            </a>
            <a href="/" style={{textDecoration: 'none'}}>
            <Folder /> Scai  (office-002)
            </a>
            <a href="/" style={{textDecoration: 'none'}}>
            <Folder /> Samurai-Team-001 (Samurai-Team-001)
            </a>
        </div>
    )
}
