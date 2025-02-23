/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";

import CallMadeIcon from "@mui/icons-material/CallMade";
import { Typography } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(min(10), 1fr);
  gap: 32px;
  width: 100%;
  height: 420px;
  border: 1px solid #ddd;
  border-radius: 16px;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-out;
  padding: 16px;

  &:hover {
    transform: scale(0.97);
    box-shadow:
      0 4px 8px rgba(6, 58, 154, 0.2),
      0 -4px 8px rgba(6, 58, 154, 0.1),
      -4px 0 8px rgba(6, 58, 154, 0.15),
      4px 0 8px rgba(6, 58, 154, 0.15);
  }
`;

const ContentContainer = styled.div`
  grid-column: span 5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
`;

const ImageContainer = styled.div`
  grid-column: span 5;
  border-radius: 16px;
  overflow: hidden;

  img {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
  }
`;

const Time = styled(Typography)`
  font-size: 16px;
  font-weight: 700;
  color: #8f8a8a;
`;
const Title = styled(Typography)`
  font-size: 24px;
  font-weight: 700;
  color: #333;
`;

const Description = styled.div`
  font-size: 16px;
  color: #666;
  font-weight: 400;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  color: #2840da;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease-out;
  margin-top: 32px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  border-bottom: #cdcdcd 1px solid;

  .arrow-icon {
    font-size: 20px;
  }

  &:hover {
  }
`;

function MediaSlider() {
  return (
    <div className="h-105 rounded-2xl grid w-full cursor-pointer grid-cols-10 gap-8 border border-[#ddd] bg-[#fff] p-3 hover:shadow-sm hover:shadow-blue-700 transition duration-100 ease-in-out hover:scale-95">
      <ContentContainer>
        <Time variant="body1">Thứ 2, 20/10/2024</Time>
        <Title variant="h6">Báo cáo lương của ngành IT năm 1024</Title>
        <Description>
          Báo cáo Lương và Thị trường lao động 2024 của Navigos Group sẽ là hành
          trang thực tế và đánh tin cậy giúp doanh nghiệp và người lao động vững
          bước tiến trong hành trình sự nghiệp sắp tới, với các thông tin được
          thu thập qua khảo sát công khai, bám sát bối cảnh thị trường tại Việt
          Nam.
        </Description>
        <Button>
          Xem thêm <CallMadeIcon className="arrow-icon" />
        </Button>
      </ContentContainer>
      <ImageContainer>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Ho_Chi_Minh_City_Skyline_at_Night.jpg/268px-Ho_Chi_Minh_City_Skyline_at_Night.jpg" />
      </ImageContainer>
    </div>
  );
}

export default MediaSlider;
