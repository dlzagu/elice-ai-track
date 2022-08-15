import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { colors } from "../../style/colors";
import { Bitcoin } from "../elements/Bitcoin";

export default function UserDetail({
  email,
  bitcoinAddress,
  bitcoinBalance,
  className,
}) {
  const nav = useNavigate();

  const handleClick = () => {
    nav(`/${email}/detail`);
  };
  return (
    <StyledLink onClick={handleClick} className={className}>
      <Email>
        <h4>Email</h4>
        <span>{email}</span>
      </Email>

      <Bitcoin>
        <div>
          <strong className="title">Bitcoin Address</strong>
          <span className="content">{bitcoinAddress}</span>
        </div>

        <div>
          <strong className="title">Bitcoin Balance</strong>
          <span className="content">{bitcoinBalance} BTC</span>
        </div>
      </Bitcoin>
    </StyledLink>
  );
}

const Email = styled.div`
  display: flex;

  h4 {
    display: inline-block;
    width: 120px;
    margin: 0;
    font-size: 1.1rem;
  }

  span {
    font-size: 0.85rem;
    font-weight: bold;
    align-self: flex-end;
  }
`;

const StyledLink = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.pink0};
  padding: 24px;

  border-radius: 10px;
  text-decoration: none;

  &:link,
  &:visited {
    color: inherit;
  }
  cursor: pointer;
`;
