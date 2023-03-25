import { useMutation, useQuery } from "react-query";
import { request, requestDonation } from "./http-client";

const donateFn = async (data) =>
  await requestDonation.post("/v1/donation", data);

const useDonation = ({ donationProps }) => {
  const donate = useMutation(donateFn, donationProps);

  return {
    donate,
  };
};

export default useDonation;
