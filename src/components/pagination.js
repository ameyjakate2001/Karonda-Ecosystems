import React from 'react'

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumber = []

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumber.push(i)
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumber.map((page) => (
          <li key={page} className='page-item'>
            <button onClick={() => paginate(page)} className='page-link'>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
