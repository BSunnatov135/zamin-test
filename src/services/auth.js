import { useMutation } from "react-query";
import { request, requestAuth } from "./http-client";

const signupFn = async (data) =>
  await request.post("/v1/object/website_users", data);
const sendCodeFn = async (data) => await requestAuth.post("/send-code", data);
const verifyUserFn = async (data, verifyParams) =>
  await requestAuth.post(
    `verify/${verifyParams.smsId}/${verifyParams.otp}`,
    data
  );

const useAuth = ({
  signupQueryProps,
  sendCodeQueryProps,
  verifyUserQueryProps,
  verifyParams,
}) => {
  const signUp = useMutation(signupFn, signupQueryProps);
  const sendCode = useMutation(sendCodeFn, sendCodeQueryProps);
  const verifyUser = useMutation(
    (data) => verifyUserFn(data, verifyParams),
    verifyUserQueryProps
  );
  return {
    signUp,
    sendCode,
    verifyUser,
  };
};

export default useAuth;
