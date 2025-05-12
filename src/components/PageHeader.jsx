/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import './PageHeader.css';  // Import the CSS file for the page header


const PageHeader = ({ title, curPage }) => {
  return (
    <div className='pageheader-section'>
        <div className="container">
            <div className="row">
             <div className="col-12">
               <div className='pageheader-content text-center'>
                 <h2>{title}</h2>
                 <nav aria-label='breadcrumb'>
                    <ol className='breadcrumb justify-content-center'>
                        <li className='breadcrumb-item'><Link to="/">Home</Link></li>
                        {/* If curPage exists, append it to the breadcrumb, otherwise display nothing */}
                        {curPage && (
                            <li className='breadcrumb-item active' aria-current='page'>{curPage}</li>
                        )}
                    </ol>
                 </nav>
               </div>
             </div>
            </div>
        </div>
    </div>
  )
}

export default PageHeader;
