import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import RegisterPage from "./pages/RegisterPage";

export default function BitcoinApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<UsersPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
