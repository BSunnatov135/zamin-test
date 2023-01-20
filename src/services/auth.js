import { useMutation, useQuery } from "react-query";
import { request, requestAuth } from "./http-client";

const signupFn = async (data) =>
  await request.post("/v1/object/website_users", data);
const signInFn = async (id) =>
  await request.get(`/v1/object/website_users/${id}`);
const sendCodeFn = async (data) => await requestAuth.post("/send-code", data);
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
  verifyParams,
}) => {
  const signUp = useMutation(signupFn, signupQueryProps);
  const signIn = useQuery(signInFn, singInQueryProps);
  const sendCode = useMutation(sendCodeFn, sendCodeQueryProps);
  const verifyUser = useMutation(
    (data) => verifyUserFn(data, verifyParams),
    verifyUserQueryProps
  );
  return {
    signUp,
    signIn,
    sendCode,
    verifyUser,
  };
};

export default useAuth;
