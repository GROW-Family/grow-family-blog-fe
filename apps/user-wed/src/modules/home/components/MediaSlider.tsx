/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";

import CallMadeIcon from "@mui/icons-material/CallMade";
import { Typography } from "@mui/material";
import styled from "styled-components";

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

function MediaSlider() {
  return (
    <div className="h-105 grid w-full cursor-pointer grid-cols-10 gap-8 rounded-2xl border border-[#ddd] bg-[#fff] p-3 transition duration-100 ease-in-out hover:scale-95 hover:shadow-sm hover:shadow-blue-700">
      <div className="col-span-5 flex flex-col items-start justify-center gap-2">
        <div className="text-[16px] font-bold text-gray-400">
          Thứ 2, 20/10/2024
        </div>
        <div className="text text-[24px] font-bold text-black">
          Báo cáo lương của ngành IT năm 1024
        </div>
        <div className="text-[16px] font-normal text-[#666]">
          Báo cáo Lương và Thị trường lao động 2024 của Navigos Group sẽ là hành
          trang thực tế và đánh tin cậy giúp doanh nghiệp và người lao động vững
          bước tiến trong hành trình sự nghiệp sắp tới, với các thông tin được
          thu thập qua khảo sát công khai, bám sát bối cảnh thị trường tại Việt
          Nam.
        </div>
        <button className="border-b-slate-500 flex w-40 cursor-pointer items-center justify-between rounded-lg border-b-[1px] bg-transparent pb-2 pl-4 pr-4 pt-2 text-[16px] font-bold transition-all duration-300 ease-out">
          Xem thêm <CallMadeIcon className="text-[20px]" />
        </button>
      </div>
      <div className="col-span-5 rounded-2xl overflow-hidden">
        <img className="object-cover object-center w-[100%] h-[100%]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Ho_Chi_Minh_City_Skyline_at_Night.jpg/268px-Ho_Chi_Minh_City_Skyline_at_Night.jpg" />
      </div>
    </div>
  );
}

export default MediaSlider;
