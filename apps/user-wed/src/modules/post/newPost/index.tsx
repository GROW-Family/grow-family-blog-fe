/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";
import Editor from "@libs/editor/Editor";
import UploadImage from "@libs/file/UploadImage";
import { Box, Input } from "@mui/material";
import "react-quill/dist/quill.snow.css";
import { usePostZustand } from "userSrc/hook/zustands/usePostZustand";

import styles from "./newPost.module.scss";

function NewPost() {
  const {
    data: { Foreword, Title, Node },
    setTitle,
    addNode,
    setForeword,
    editNode,
  } = usePostZustand();

  // useEffect(() => {
  //   console.log("---> Title: ", Node);
  // }, [Node]);

  const handleChangeNode = (value: NodeType) => {
    const team: NodeType[] = Node ? Node : [];
    const indexNode = team.findIndex((e) => e.Id === value.Id);

    if (indexNode > -1) {
      team[indexNode] = value;
    }

    editNode(team);
  };

  return (
    <Box>
      <Input
        value={Title}
        placeholder="Tiêu đề"
        sx={{ mb: 2 }}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <Editor
        id={`id-quill-one`}
        theme="snow"
        value={Foreword}
        placeholder="Mô tả tiêu đề"
        onChange={(e) => setForeword(e)}
      />

      <Box className={styles.contentContainer}>
        {Node &&
          Node?.length > 0 &&
          Node.map((e: NodeType) => (
            <div key={e.Id} id={e.Id}>
              {e.Type === "text" && (
                <Editor
                  id={`id-quill${e.Id}`}
                  theme="snow"
                  value={e.Content}
                  placeholder="Nội dung"
                  onChange={(vl) => {
                    const team: NodeType = {
                      ...e,
                      Content: vl,
                    };

                    handleChangeNode(team);
                  }}
                />
              )}
              {e.Type === "lable" && (
                <input
                  className={styles.lable}
                  type="text"
                  value={e.Content}
                  placeholder="Đề mục"
                  onChange={(vl) => {
                    const team: NodeType = {
                      ...e,
                      Content: vl.currentTarget.value,
                    };

                    handleChangeNode(team);
                  }}
                />
              )}

              {e.Type === "link" && (
                <input
                  className={styles.lable}
                  type="text"
                  value={e.Content}
                  placeholder="Link"
                  onChange={(vl) => {
                    const team: NodeType = {
                      ...e,
                      Content: vl.currentTarget.value,
                    };

                    handleChangeNode(team);
                  }}
                />
              )}

              {e.Type === "image" && <UploadImage />}

              {e.Type === "code" && (
                <textarea
                  className={styles.code}
                  value={e.Content}
                  placeholder="Code"
                  onChange={(vl) => {
                    const team: NodeType = {
                      ...e,
                      Content: vl.currentTarget.value,
                    };

                    handleChangeNode(team);
                  }}
                />
              )}
            </div>
          ))}
      </Box>
    </Box>
  );
}

export default NewPost;
