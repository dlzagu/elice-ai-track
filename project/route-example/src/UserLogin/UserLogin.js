import React, { useEffect } from "react";
import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useHistory,
} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import PrivateRoute from "./components/PrivateRouter";

import { registerUser, loginUser } from "./service/auth";

function PageLayout({ heding, links, children }) {
  return (
    <div>
      <h2>{heding}</h2>
      <nav>
        {links.map(({ to, text }) => (
          <li>
            <Link to={to}>{text}</Link>
          </li>
        ))}
      </nav>
      <main>{children}</main>
    </div>
  );
}

export default function UserLogin() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>

        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/register">
          <RegisterPage />
        </Route>

        <PrivateRoute path="/detail">
          <UserDetailPage />
        </PrivateRoute>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

function NotFoundPage() {
  return (
    <PageLayout heading="NotFound" links={[{ to: "/login", text: "Go Back" }]}>
      <div>아무것도 없습니다.</div>
    </PageLayout>
  );
}

function LoginPage() {
  const history = useHistory();

  const handleSubmit = (formData) => {
    // loginUser를 활용해 유저 정보를 검색
    // 유저 정보가 없다면, 로그인 X
    // 유저 정보를 찾으면, location.state.user에 유저 정보를 저장하고 detail page로 이동
    const foundUser = loginUser(formData);

    if (!foundUser) return;

    const location = {
      pathname: "/detail",
      state: {
        user: foundUser,
      },
    };

    history.push(location);
  };

  // 페이지 별로 반복되어 등장하는 코드를 공통화
  return (
    <PageLayout
      heding="Login"
      links={[
        { to: "/register", text: "Register" },
        { to: "/", text: "Home" },
      ]}
    >
      <LoginForm onSubmit={handleSubmit} />
    </PageLayout>
  );
}

function RegisterPage() {
  const history = useHistory();

  const handleSubmit = (formData) => {
    // registerUser를 활용하여 유저를 등록
    // 등록했으면 로그인 페이지로 이동
    registerUser(formData);
    history.push("/login");
  };

  // 페이지 별로 반복되어 등장하는 코드를 공통화
  return (
    <PageLayout
      heding="Register"
      links={[
        { to: "/login", text: "Login" },
        { to: "/", text: "Hoem" },
      ]}
    >
      <RegisterForm onSubmit={handleSubmit} />
    </PageLayout>
  );
}

function UserDetailPage() {
  // 유저 정보는 location.state.user에 있음
  // PrivateRoute 컴포넌트는 유저 정보가 없을 경우 로그인 페이지로 사용자를 리다이렉트
  const history = useHistory();
  const location = useLocation();
  const user = location.state.user;

  useEffect(() => {
    return () => history.replace();
  }, [history]);

  // 페이지 별로 반복되어 등장하는 코드를 공통화
  return (
    <PageLayout
      heding="User Details"
      links={[{ to: "/login", text: "Logout" }]}
    >
      <div>
        <em>email : {user.email} </em>
      </div>
    </PageLayout>
  );
}
