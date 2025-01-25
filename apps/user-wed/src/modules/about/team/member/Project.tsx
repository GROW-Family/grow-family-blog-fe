/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import LensIcon from '@mui/icons-material/Lens';
import styles from './member.module.scss';

interface IProjectPros {
  label: string;
  local: string;
  since: string;
  desprition?: string;
  member: number;
  tech?: string;
  role?: string
}

function Project({
  label,
  local,
  since,
  desprition,
  member,
  tech,
  role
}: IProjectPros) {
  return (
    <Box
      sx={{
        flexWrap: 'wrap',
        flexDirection: 'column',
        display: 'flex',
        gap: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 0.5,
        }}
      >
        <LensIcon className={styles.dot} />
        <Typography className={styles.lable}>{label}</Typography>
      </Box>
      <Stack
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 2,
        }}
      >
        <Typography className={styles['lable-v2']}>{local}</Typography>
        <Divider orientation="vertical" flexItem />
        <Typography className={styles['lable-v2']}>{since}</Typography>
      </Stack>
      <Box className={styles.text}>{desprition}</Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 2,
        }}
      >
        <Typography className={styles['lable-v2']}>Số thành viên: </Typography>
        <Typography className={styles.text}> {member} Nhân viên</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 2,
        }}
      >
        <Typography className={styles['lable-v2']}>Công nghệ: </Typography>
        <Typography className={styles.text}> {tech}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 2,
        }}
      >
        <Typography className={styles['lable-v2']}>Nhiệm vụ chính: </Typography>
        <Typography className={styles.text}> {role}</Typography>
      </Box>
    </Box>
  );
}

export default Project;
