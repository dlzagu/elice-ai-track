import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PageLayout } from "../components/PageLayout";
import UserDetail from "../components/UserDetail";
import * as authAPI from "../../service/auth";

function UsersPage() {
  const [users, setUsers] = useState(undefined);

  // authAPI.getUsers를 이용해 유저 목록을 불러오세요.
  useEffect(() => {
    authAPI.getUsers().then(setUsers).catch(console.error);
  }, []);
  return (
    <PageLayout>
      <nav>
        <Link to="/register">Register</Link>
      </nav>

      {!users ? (
        <div>유저 정보를 불러오는 중입니다...</div>
      ) : (
        users.map((user) => <WrappedUserDetail {...user} />)
      )}
    </PageLayout>
  );
}

export default UsersPage;

const WrappedUserDetail = styled(UserDetail)`
  & + & {
    margin-top: 12px;
  }
`;
