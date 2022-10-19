import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="page-number">
      {pageNumbers.map(number => (
        <a
          onClick={() => paginate(number)}
          href="!#"
        > <p>{number}</p>
        </a>
      ))}
    </div>
  );
};

export default Pagination;
