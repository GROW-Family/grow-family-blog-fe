/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
import {
    Avatar,
    Box,
    Card,
    Chip,
    Grid2,
    Stack,
    Typography
} from '@mui/material';
import clsx from 'clsx';
import styles from './member.module.scss';
import ProgressItem from './ProgressLearning';
import Project from './Project';
import WorkingProcess from './WorkingProcess';

function MemberDetail() {
  return (
    <Grid2 container columns={24} spacing={2}>
      <Grid2 size={8}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'center',
            gap: 4,
            flexDirection: 'column',
          }}
        >
          <Card
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyItems: 'center',
              gap: 1,
              flexDirection: 'column',
              pt: 2,
              pb: 2,
              width: '100%',
            }}
          >
            <Box className={styles.name}>Nguyen Trong Qui</Box>
            <Avatar sx={{ width: 209, height: 209 }} aria-label="recipe">
              NQ
            </Avatar>
            <Box
              sx={{
                pl: 4,
                pr: 4,
                flexDirection: 'column',
                width: '100%',
                gap: 2,
                display: 'flex',
                mt: 2,
              }}
            >
              <Stack className={styles.item}>
                <Box className={styles['lable-text']}>Age</Box>
                <Box className={styles['value-text']}>24</Box>
              </Stack>
              <Stack className={styles.item}>
                <Box className={styles['lable-text']}>Education</Box>
                <Box className={styles['value-text']}>Masters in Business</Box>
              </Stack>
              <Stack className={styles.item}>
                <Box className={styles['lable-text']}>Status</Box>
                <Box className={styles['value-text']}>Single</Box>
              </Stack>
              <Stack className={styles.item}>
                <Box className={styles['lable-text']}>Occupation</Box>
                <Box className={styles['value-text']}>Sales Manager</Box>
              </Stack>
              <Stack className={styles.item}>
                <Box className={styles['lable-text']}>Location</Box>
                <Box className={styles['value-text']}>Sydney</Box>
              </Stack>
              <Stack className={styles.item}>
                <Box className={styles['lable-text']}>TEch literate</Box>
                <Box className={styles['value-text']}>High</Box>
              </Stack>
            </Box>
          </Card>
          <Card
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyItems: 'center',
              gap: 1,
              flexDirection: 'row',
              padding: 2,
            }}
          >
            <svg
              width="38"
              height="34"
              viewBox="0 0 38 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38 0.804135L37.041 7.68112C35.123 7.52026 33.5647 7.84199 32.3659 8.64632C31.1672 9.41043 30.3281 10.5365 29.8486 12.0245C29.409 13.4723 29.3291 15.1614 29.6088 17.0917H38V33.5H21.6972V17.0917C21.6972 11.3006 23.0358 6.91702 25.7129 3.94101C28.3901 0.965003 32.4858 -0.0806224 38 0.804135ZM16.3028 0.804135L15.3438 7.68112C13.4259 7.52026 11.8675 7.84199 10.6688 8.64632C9.47003 9.41043 8.63091 10.5365 8.15142 12.0245C7.71188 13.4723 7.63197 15.1614 7.91167 17.0917H16.3028V33.5H0V17.0917C0 11.3006 1.33859 6.91702 4.01577 3.94101C6.69295 0.965003 10.7886 -0.0806224 16.3028 0.804135Z"
                fill="#6A24FF"
              />
            </svg>
            I am used to with online service and I usually do my online shopping
            from Instagram.
          </Card>
          <Card className={styles.card}>
            <Typography className={styles.title}>Sở thích</Typography>
            <Box
              sx={{
                flexWrap: 'wrap',
                flexDirection: 'row',
                display: 'flex',
                gap: 1,
              }}
            >
              <Chip label="Introvert" />
              <Chip label="Thinker" />
              <Chip label="Spender" />
              <Chip label="Tech-savy" />
            </Box>
          </Card>
        </Box>
      </Grid2>
      <Grid2 size={16}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'center',
            gap: 4,
            flexDirection: 'column',
          }}
        >
          <Card className={styles.card}>
            <Typography className={styles.title}>Mục tiêu nghề nghiệp</Typography>
            <Box
              sx={{
                flexWrap: 'wrap',
                flexDirection: 'row',
                display: 'flex',
                gap: 1,
              }}
            >
              She currenlty lives in Sydney. She finished her master in
              businesss and has just been promoted to Sales Manager. She is
              currently single and like to go out with friends on long holidays.
            </Box>
          </Card>
          <Card className={styles.card}>
            <Typography className={styles.title}>Học vấn</Typography>
            <Box
              sx={{ display: 'flex', flexDirection: 'column', gap: 2, pl: 2 }}
            >
              <ProgressItem
                label="Công nghệ thông tin"
                local="Đại học GTVT"
                since="2019 - 2023"
                desprition="Tốt nghiệp loại giỏi"
              />
              <ProgressItem
                label="Công nghệ thông tin"
                local="Đại học GTVT"
                since="2019 - 2023"
                desprition="Tốt nghiệp loại giỏi"
              />
            </Box>
          </Card>
          <Card className={styles.card}>
            <Typography className={styles.title}>Quá trình làm việc</Typography>
            <Box
              sx={{ display: 'flex', flexDirection: 'column', gap: 2, pl: 2 }}
            >
              <WorkingProcess
                label="Fontend Developer"
                local="Đại học GTVT"
                since="08/2019 - 09/2023"
                desprition="Tốt nghiệp loại giỏi"
                member={200}
              />
            </Box>
          </Card>
          <Card className={styles.card}>
            <Typography className={styles.title}>Dự án tham gia</Typography>
            <Box
              sx={{ display: 'flex', flexDirection: 'column', gap: 2, pl: 2 }}
            >
              <Project
                label="Fontend Developer"
                local="Đại học GTVT"
                since="08/2019 - 09/2023"
                desprition="Tốt nghiệp loại giỏi"
                member={200}
                role='Proẹct Manager'
                tech='Nextjs, DotNet'
              />
            </Box>
          </Card>
          <Box className={styles['box-row']}>
            <Card className={clsx(styles.card, styles['box-row-item'])}>
              <Typography className={styles.title}>Kỹ năng</Typography>
              <Box
                sx={{
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                  display: 'flex',
                  gap: 1,
                }}
              >
                Need to find people with similar skills that can help her tackle
                company goals. View all her hirings in an overview. The price of
                the service is very important
              </Box>
            </Card>
            <Card className={styles.card}>
              <Typography className={styles.title}>Kỹ năng mềm</Typography>
              <Box
                sx={{
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                  display: 'flex',
                  gap: 1,
                }}
              >
                Need to find people with similar skills that can help her tackle
                company goals. View all her hirings in an overview. The price of
                the service is very important
              </Box>
            </Card>
          </Box>
        </Box>
      </Grid2>
    </Grid2>
  );
}

export default MemberDetail;
