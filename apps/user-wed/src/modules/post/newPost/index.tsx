/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
'use client';
import Editor from '@libs/editor/Editor';
import UploadImage from '@libs/file/UploadImage';
import { Box, Input } from '@mui/material';
import { useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';
import { useAppDispatch, useAppSelector } from '../../../hook/redux';
import {
  handleChangeNode,
  setForeword,
  setTitle,
} from '../../../redux/post/NewPostSlice';
import styles from './newPost.module.scss';

function NewPost() {
  const { Title, Foreword, Node, Id } = useAppSelector(
    (state) => state.newPost
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
      console.log('---> Title: ', Node);
  }, [Node]);

  return (
    <Box>
      <Input
        value={Title}
        placeholder="Tiêu đề"
        sx={{ mb: 2 }}
        onChange={(e) =>
          dispatch(
            setTitle({
              Title: e.currentTarget.value,
            })
          )
        }
      />
      <Editor
        id={`id-quill-one`}
        theme="snow"
        value={Foreword}
        placeholder="Mô tả tiêu đề"
        onChange={(e) =>
          dispatch(
            setForeword({
              Foreword: e,
            })
          )
        }
      />

      <Box className={styles.contentContainer}>
        {Node &&
          Node?.length > 0 &&
          Node.map((e: NodeType) => (
            <div key={e.Id} id={e.Id}>
              {e.Type === 'text' && (
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

                    dispatch(handleChangeNode(team));
                  }}
                />
              )}
              {e.Type === 'lable' && (
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

                    dispatch(handleChangeNode(team));
                  }}
                />
              )}

              {e.Type === 'link' && (
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

                    dispatch(handleChangeNode(team));
                  }}
                />
              )}

              {e.Type === 'image' && (
               <UploadImage/>
              )}

              {e.Type === 'code' && (
                <textarea
                  className={styles.code}
                  value={e.Content}
                  placeholder="Code"
                  onChange={(vl) => {
                    const team: NodeType = {
                      ...e,
                      Content: vl.currentTarget.value,
                    };

                    dispatch(handleChangeNode(team));
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
