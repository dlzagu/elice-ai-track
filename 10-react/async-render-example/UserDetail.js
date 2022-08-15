import React from "react";
import styled from "styled-components";
import { colors } from "../style/colors";

export default function UserDetail({
  email,
  bitcoinAddress,
  bitcoinBalance,
  className,
}) {
  return (
    <Container className={className}>
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
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.pink0};

  width: 500px;
  padding: 24px;

  border-radius: 10px;
`;

const Email = styled.div``;

const Bitcoin = styled.div``;
