import React, { useState, useEffect } from "react";
import { Form, Card, Button } from "react-bootstrap";
import * as Api from "../../apiMock";
import Contents from "./Contents";

const ContentForm = ({ portfolioOwnerId }) => {
  const [comments, setComments] = useState([]);

  const fetch = async () => {
    try {
      const response = await Api.get("commentlist", portfolioOwnerId);
      setComments(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  // 입력받은 방명록을 저장하기 위한 state
  const [inputs, setInputs] = useState({
    userId: "",
    comment: "",
  });

  const onChange = (e) => {
    setInputs({
      user_id: portfolioOwnerId,
      comment: e.target.value,
    });
  };

  //

  const addHandler = async (e) => {
    e.preventDefault();
    try {
      await Api.post("comment/create", inputs);
      fetch();
      setInputs({
        ...inputs,
        comment: "",
      });
    } catch (e) {}
  };

  // 기존 방명록을 받아와 저장
  useEffect(() => {
    fetch();
  }, [portfolioOwnerId]);

  return (
    <Card>
      <Card.Header>댓글</Card.Header>
      <Contents comments={comments} setComments={setComments} fetch={fetch} />
      <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          name="comment"
          as="textarea"
          placeholder="댓글을 입력해주세요."
          rows={3}
          value={inputs.comment}
          onChange={onChange}
        />
      </Form.Group>
      <Button className="mt-2" onClick={addHandler}>
        등록
      </Button>
    </Card>
  );
};

export default ContentForm;
