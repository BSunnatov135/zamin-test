import { useQuery } from "react-query";
import { request } from "./http-client";

const getAchievements = async (data) =>
  await request.post(`/v1/object/get-list/achievements`, {
    data,
  });

const useAchievements = ({ achieveParams }) => {
  const achievements = useQuery(
    ["GET_ACHIEVEMENTS", achieveParams],
    () => getAchievements(achieveParams),
    {
      enabled: !!achieveParams,
    }
  );

  return {
    achievements: achievements?.data,
  };
};

export default useAchievements;
