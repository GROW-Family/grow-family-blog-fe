/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import UploadFileInput from '../input/UploadFileInput';
import React, { useState } from 'react';
import styles from './input.module.scss';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

function UploadImage() {
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;

    if (file) {
      const image = file[0];

      const imageUrl = URL.createObjectURL(image);

      setPreviewUrl(imageUrl);

      setImage(image);
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.changeImage}>
        <AddPhotoAlternateIcon />
      </button>
      {image && (
        <img
          className={styles.image}
          id="preview"
          alt="Preview"
          src={previewUrl || ''}
        />
      )}
      {!image && <UploadFileInput onChange={onChange} />}
    </div>
  );
}

export default UploadImage;
