/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { Container } from '@mui/material'
import MemberDetail from '../../../../modules/about/team/member/MemberDetail'
import React from 'react'

function page() {
  return (
    <Container maxWidth='lg' sx={{ mb: 4 }}>
      <MemberDetail/>
    </Container>
  )
}

export default page
