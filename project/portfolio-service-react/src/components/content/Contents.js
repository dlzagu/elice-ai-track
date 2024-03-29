import React from "react";
import { Card } from "react-bootstrap";
import ContentCard from "./ContentCard";

const Contents = ({ comments, setComments, fetch }) => {
  return (
    <Card.Body style={{ maxHeight: "350px", overflow: "auto" }}>
      {comments.map((comment) => (
        <ContentCard
          comment={comment}
          comment_id={comment.id}
          setComments={setComments}
          fetch={fetch}
        />
      ))}
    </Card.Body>
  );
};

export default Contents;
