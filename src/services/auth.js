import { useMutation, useQuery } from "react-query";
import { request, requestAuth } from "./http-client";

const signupFn = async (data) =>
  await requestAuth.post("/register-otp/website_users", data);
const signInFn = async (id) =>
  await request.get(`/v1/object/website_users/${id}`);
const sendCodeFn = async (data) => await requestAuth.post("/send-code", data);
const registerFn = async (data) =>
  await requestAuth.post("/register-otp/website_users", data);
const verifyUserFn = async (data, verifyParams) =>
  await requestAuth.post(
    `verify/${verifyParams.smsId}/${verifyParams.otp}`,
    data
  );

const useAuth = ({
  signupQueryProps,
  singInQueryProps,
  sendCodeQueryProps,
  verifyUserQueryProps,
  ifUserNotFoundQueryProps,
  verifyParams,
}) => {
  const signUp = useMutation(signupFn, signupQueryProps);
  const signIn = useMutation((id) => signInFn(id), singInQueryProps);
  // const signIn = useMutation({ signInFn, singInQueryProps });
  const sendCode = useMutation(sendCodeFn, sendCodeQueryProps);
  const registerUser = useMutation(registerFn, ifUserNotFoundQueryProps);
  const verifyUser = useMutation(
    (data) => verifyUserFn(data, verifyParams),
    verifyUserQueryProps
  );
  return {
    signUp,
    signIn,
    sendCode,
    verifyUser,
    registerUser,
  };
};

export default useAuth;
