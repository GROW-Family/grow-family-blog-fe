/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, SxProps, Theme, Typography } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../../../hook/redux";
import { usePostZustand } from '../../../hook/zustands/usePostZustand';
import { handleDeleteNode } from "../../../redux/post/NewPostSlice";
import styles from "./newPost.module.scss";

const colorRender = (type: TypeNodeType): SxProps<Theme> => {
  switch (type) {
    case "text":
      return {
        bgcolor: "GrayText",
        color: "#000",
      };
    case "lable":
      return {
        bgcolor: "blueviolet",
        color: "#fff",
      };

    case "code":
      return {
        bgcolor: "blue",
        color: "#fff",
      };

    default:
      return {
        bgcolor: "GrayText",
        color: "#000",
      };
  }
};

function Controller() {
  const { data } = usePostZustand();

  const dispatch = useAppDispatch();

  const [active, setActive] = useState(false);
  const [activeId, setActiveId] = useState("");

  const handleOnclick = (itemId: string) => {
    const element = document.getElementById(itemId);

    setActiveId(itemId);

    if (element) {
      if (!active) {
        element.style.backgroundColor = "blue";
        element.style.padding = "8px";
      } else {
        element.style.backgroundColor = "transparent";
        element.style.padding = "0px";
      }
    }

    setActive(!active);
  };

  return (
    <Box sx={{ flexDirection: "column", gap: 1, display: "flex" }}>
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        {data.Title || "Tiêu đề"}
      </Typography>
      <div dangerouslySetInnerHTML={{ __html: data.Foreword }} />

      {data.Node &&
        data.Node?.map((item) => (
          <Box
            key={item.Id}
            className={styles.controllItem}
            onClick={() => handleOnclick(item.Id)}
            sx={{
              bgcolor: active && activeId === item.Id ? "blue" : "aliceblue",
            }}
          >
            <Box className={styles.type} sx={colorRender(item.Type)}>
              {item.Type.toLocaleUpperCase()}
            </Box>
            <Button
              className={styles.deleteBtn}
              onClick={(e) => {
                e.stopPropagation();
                dispatch(handleDeleteNode(item.Id));
              }}
            >
              <DeleteIcon color="error" />
            </Button>
          </Box>
        ))}
    </Box>
  );
}

export default Controller;
