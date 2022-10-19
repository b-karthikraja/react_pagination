import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MainData from '../data/data.json'
import Pagination from './pagination'
import Posts from './posts'

const PaginationComp = () => {
  const initialData = MainData;
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = initialData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>

      <div>
        <Posts currentPosts={currentPosts} />
        <Pagination postsPerPage={postsPerPage} totalPosts={initialData.length} paginate={paginate} />
      </div>
    </>
  )
}

export default PaginationComp