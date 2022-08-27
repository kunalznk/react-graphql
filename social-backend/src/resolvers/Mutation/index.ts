import authMutation from "./auth";
import mediaMutation from "./minio";
import userMutation from "./user";

export default {
  ...authMutation,
  ...mediaMutation,
  ...userMutation,
};
