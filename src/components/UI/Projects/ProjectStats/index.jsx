import AtmosMonitor from "./AtmosMonitor";
import EcoSchools from "./EcoSchools";
import ModernAssist from "./ModernAssist";
import styles from "./style.module.scss";
import YoungFarmer from "./YoungFarmer";
import ZaminCreative from "./ZaminCreative";

export default function ProjectStats(router) {
  const id = router?.router.query.id;
  console.log(id);
  return (
    <>
      {id == "6898ff37-85ce-4e68-a0f1-7e8157da5df0" ? (
        <ZaminCreative />
      ) : id == "a79936a1-bdd3-4126-bf69-89e2ecfe23ee" ? (
        <AtmosMonitor />
      ) : id == "f9a34f4a-ccd9-4f1c-9157-a665faf486ba" ? (
        <ModernAssist />
      ) : id == "c10d7f60-0f07-45ef-bb40-0d444686b4f6" ? (
        <YoungFarmer />
      ) : id == "35177eda-212c-4573-a8f4-57072ada61f4" ? (
        <EcoSchools />
      ) : (
        ""
      )}
    </>
  );
}
