/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { Card, TextField } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  justify-content: center;
`;

export const LoginForm = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  width: 600px;
  height: 500px;
  background-color: #fff;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #333;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 16px;
  width: 100%;
`;

export const Input = styled(TextField)`
  width: 100%;
  height: 48px;
`;

export const LoginButton = styled.button`
  width: 100%;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-out;
  font-size: 20px;
  font-weight: 700;
  height: 48px;
  margin-top: 32px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const SiginWith = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SiginWithButton = styled.button`
  width: 180px;
  height: 40px;
  border-radius: 30px;
  border: 1px solid #cdcdcd;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  background-color: #fff;
  transition: all 0.3s linear;

  &:hover {
    border-color: rgb(19, 29, 168);
    background-color: rgb(124, 168, 221);
  }
`;
