import { mo } from "./../../db/minio";
import { handleError } from "../../utils/common";

export const createMediaUrl = async (params: type) => {
  try {
    const isBucketExist = await mo.bucketExists("media");
    if (!isBucketExist) {
      await mo.makeBucket("media", "us-west-1");
      await mo.getBucketPolicy("Media");
      console.log("Bucket Created");
    } else {
      console.log("Bucket Exists");
    }

    const mediaPostPath = await mo.presignedPutObject("media", "image1.png");
    const mediaGetPath = await mo.presignedGetObject("media", "image1.png");

    return {
      mediaGetPath,
      mediaPostPath,
      mediaFormat: "jpeg",
    };
  } catch (error) {
    handleError(error);
  }
};

export default {
  createMediaUrl,
};
