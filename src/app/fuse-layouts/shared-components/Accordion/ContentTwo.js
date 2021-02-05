import React from 'react'
import Folder from './Folder'

import './Accordion.css'

/** CONTENT FOR THE SECOND ACCORDION COMPONENT */
/** You can change content if you want */

export default function ContentTwo() {
    return (
        <div>
            <a href="/" style={{textDecoration: 'none'}}>
            <Folder /> Project 01 (project-0001)
            </a>
            <a href="/" style={{textDecoration: 'none'}}>
            <Folder /> Project 02 (project-0002)
            </a>
        </div>
    )
}