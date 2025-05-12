/* eslint-disable react/prop-types */
import React from 'react'

const Pagination = ({ productsPerPage, totalProducts, paginate, activePage }) => {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className='default-pagination lab-ul'>
            {/* Previous Button */}
            <li>
                <a 
                    href="#!" 
                    onClick={() => {
                        if (activePage > 1) {
                            paginate(activePage - 1);
                        }
                    }} 
                    className={activePage === 1 ? 'disabled' : ''}
                >
                    <i className='icofont-rounded-left'></i>
                </a>
            </li>

            {/* Page Number Buttons */}
            {pageNumbers.map((number) => (
                <li key={number} className={`page-item ${number === activePage ? "bg-warning" : ""}`}>
                    <button onClick={() => paginate(number)} className='bg-transparent'>
                        {number}
                    </button>
                </li>
            ))}

            {/* Next Button */}
            <li>
                <a 
                    href="#!" 
                    onClick={() => {
                        if (activePage < totalPages) {
                            paginate(activePage + 1);
                        }
                    }} 
                    className={activePage === totalPages ? 'disabled' : ''}
                >
                    <i className='icofont-rounded-right'></i>
                </a>
            </li>
        </ul>
    );
}

export default Pagination;
