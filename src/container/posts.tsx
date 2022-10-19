import React from "react";
import { Col, Row } from "react-bootstrap";

const Posts = ({ currentPosts }: any) => {
  return (
    <ul className="list-group mb-3">
      {currentPosts.map((post: any) => (
        <>
          <Row>
            <Col><p>{post.first_name}</p></Col>
            <Col><img src={post.avatar} alt="sf" /></Col>
          </Row>
        </>
      )
      )
      }
    </ul>
  );
};

export default Posts;
