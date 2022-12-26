import { Container } from "@mui/material";
import styles from "./style.module.scss";
import HydroIcon from "/public/logos/HydroIcon.svg";
import FAOIcon from "/public/logos/FAOIcon.svg";
import MedIcon from "/public/logos/MedIcon.svg";
import GasLogo from "/public/logos/GasLogo.svg";
import Unicef from "/public/logos/Unicef.svg";
import Tree from "/public/logos/Tree.svg";
import UNDP from "/public/logos/UNDP.svg";
import EduIcon from "/public/logos/EduIcon.svg";
import UNEP from "/public/logos/UNEP.svg";

const items = [
  <MedIcon />,
  <GasLogo />,
  <Unicef />,
  <HydroIcon />,
  <FAOIcon />,
  <Tree />,
  <UNDP />,
  <EduIcon />,
  <UNEP />,
];

export default function Partners() {
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.list}>
          {items.map((item, index) => (
            <div key={index + "key"} className={styles.item}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
