import React, { useState, useEffect } from "react";
import * as authAPI from "../service/auth";
import styled from "styled-components";
import UserDetail from "./UserDetail";
import RegisterForm from "./RegisterForm";
// RegisterForm을 이용해 유저 정보를 가져와 화면을 업데이트하세요.

const WrappedUserDetail = styled(UserDetail)`
  & + & {
    margin-top: 12px;
  }
`;

export default function BitcoinApp() {
  const [users, setUsers] = useState(undefined);

  useEffect(() => {
    authAPI.getUsers().then((data) => {
      console.log(data);
      setUsers(data);
    });
  }, []);

  if (!users) {
    return <div>유저 정보를 불러오는 중입니다...</div>;
  }
  const onSubmit = (formData) => {
    authAPI
      .registerUser(formData)
      .then(authAPI.getUsers)
      .then(setUsers)
      .catch(console.error);
  };

  return (
    <div>
      <WraooedRegiseterForm onSubmit={onSubmit} />
      {users.map((user) => (
        <WrappedUserDetail {...user} />
      ))}
    </div>
  );
}

const WraooedRegiseterForm = styled(RegisterForm)`
  margin-bottom: 12px;
`;
