import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PageLayout } from "../PageLayout";
import RegisterForm from "../components/RegisterForm";
import * as authAPI from "../../service/auth";
export default function RegisterPage() {
  const nav = useNavigate();

  const handleSubmit = (formData) => {
    // formData에는 email, password가 들어있습니다.
    // 이 정보를 바탕으로 authAPI.registerUser 를 이용해 유저를 등록하세요.
    // 성공적으로 유저를 등록했으면 유저 목록 페이지로 이동하세요.
    authAPI
      .registerUser(formData)
      .then(() => nav("/users"))
      .catch(console.error);

    console.log(formData);
  };

  return (
    <PageLayout>
      <nav>
        <Link to="/users">Users</Link>
      </nav>
      <WrappedRegisterForm onSubmit={handleSubmit} />
    </PageLayout>
  );
}

const WrappedRegisterForm = styled(RegisterForm)`
  margin-bottom: 12px;
`;
