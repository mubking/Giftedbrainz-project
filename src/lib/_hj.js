"use client";
import crypto from "crypto";
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from "../utils/index";
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";


const app = initializeApp(firebaseConfig);
const storage = getStorage(app, "gs://adeshina-s-project.appspot.com"); // Corrected a typo: "stroage" to "storage"

function createUniqueFileName(fileName) {
  const timeStamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 12);

  return `${fileName}-${timeStamp}-${randomString}`;
}

export const handleImageSaveToFireBase = async (file) => {
  const extractUniqueFileName = createUniqueFileName(file?.name);
  const storageRef = ref(storage, `blog/${extractUniqueFileName}`);
  const uploadImg = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadImg.on(
      "state_changed",
      (snapshot) => {},
      (error) => reject(error),
      () => {
        getDownloadURL(uploadImg.snapshot.ref)
          .then((url) => resolve(url))
          .catch((error) => reject(error));
      }
    );
  });
}


export const formatDate = (timestamp) => {
  const now = new Date();
  const date = new Date(timestamp);
  const seconds = Math.floor((now - date) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const interval in intervals) {
    const count = Math.floor(seconds / intervals[interval]);
    if (count > 0) {
      if (count === 1) {
        return `${count} ${interval} ago`;
      } else {
        return `${count} ${interval}s ago`;
      }
    }
  }

  return "just now";
};
