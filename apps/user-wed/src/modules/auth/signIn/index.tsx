/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
'use client';

import { Typography } from '@mui/material';
import {
  Container,
  Input,
  LoginButton,
  LoginForm,
  InputWrapper,
  Title,
  SiginWithButton,
  SiginWith,
} from './index.styled';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

function Login() {
  return (
    <Container>
      <LoginForm>
        <Title>Đăng nhập</Title>
        <h5 className='!text-primary-pressed font-medium'> sub title test</h5>
        <InputWrapper>
          <Input id="outlined-username" label="Username" variant="outlined" />
          <Input id="outlined-password" label="Password" variant="outlined" />
        </InputWrapper>

        <LoginButton type="submit">Đăng nhập</LoginButton>
        <SiginWith>
          <SiginWithButton>
            <GoogleIcon />
            Đăng nhập với Goole
          </SiginWithButton>
          <Typography variant="body2">Hoặc</Typography>
          <SiginWithButton>
            <GitHubIcon />
            Đăng nhập với Github
          </SiginWithButton>
        </SiginWith>
      </LoginForm>
    </Container>
  );
}

export default Login;
