import AtmosMonitor from "./AtmosMonitor";
import AtmosMonitorMobile from "./AtmosMonitorMobile";
import EcoSchools from "./EcoSchools";
import EcoSchoolsMobile from "./EcoSchoolsMobile";
import HearingTreatment from "./HearingTreatment";
import HosildorZamin from "./HosildorZamin";
import ModernAssist from "./ModernAssist";
import ModernAssistMobile from "./ModernAssistMobile";
import Sanitation from "./Sanitation";
import SanitationMobile from "./SanitationMobile";
import Screening from "./Screening";
import ScreeningMobile from "./ScreeningMobile";
import styles from "./style.module.scss";
import WantToHear from "./WantToHear";
import YashilHimoya from "./YashilHimoya";
import YashilZamin from "./YashilZamin";
import YoungFarmer from "./YoungFarmer";
import YoungFarmerMobile from "./YoungFarmerMobile";
import ZaminCreative from "./ZaminCreative";
import ZaminCreativeMobile from "./ZaminCreativeMobile";
import ZaminEducation from "./ZaminEducation";
import ZaminEducationMobile from "./ZaminEducationMobile";

export default function ProjectStats(router) {
  const id = router?.router.query.id;
  console.log(id);
  return (
    <>
      {id == "6898ff37-85ce-4e68-a0f1-7e8157da5df0" ? (
        <>
          <ZaminCreative />
          <ZaminCreativeMobile />
        </>
      ) : id == "a79936a1-bdd3-4126-bf69-89e2ecfe23ee" ? (
        <>
          <AtmosMonitor />
          <AtmosMonitorMobile />
        </>
      ) : id == "f9a34f4a-ccd9-4f1c-9157-a665faf486ba" ? (
        <>
          <ModernAssist />
          <ModernAssistMobile />
        </>
      ) : id == "c10d7f60-0f07-45ef-bb40-0d444686b4f6" ? (
        <>
          <YoungFarmer />
          <YoungFarmerMobile />
        </>
      ) : id == "35177eda-212c-4573-a8f4-57072ada61f4" ? (
        <>
          <EcoSchools />
          <EcoSchoolsMobile />
        </>
      ) : id === "3eb55c2c-ecb3-44eb-a8e9-a8f4ef27b597" ? (
        <>
          <YashilZamin />
          <YashilHimoya />
        </>
      ) : id === "66c7707c-c22f-4eb3-9193-547f41cbc0b8" ? (
        <HosildorZamin />
      ) : id === "74296db6-636f-49c4-831e-2f138a312008" ? (
        <>
          <Screening />
          <ScreeningMobile />
        </>
      ) : id === "0e925825-b25b-489e-aa00-a8d00871bbbd" ? (
        <>
          <Sanitation />
          <SanitationMobile />
        </>
      ) : id === "6b21ab55-f17b-46bb-9aeb-dbf2d7737837" ? (
        <>
          <ZaminEducation />
          <ZaminEducationMobile />
        </>
      ) : id === "f7eed81b-0af8-4c40-9c70-cda119a117b6" ? (
        <WantToHear />
      ) : id === "f6f7515d-d595-4355-a95a-cd699ddfa255" ? (
        <HearingTreatment />
      ) : (
        ""
      )}
    </>
  );
}
