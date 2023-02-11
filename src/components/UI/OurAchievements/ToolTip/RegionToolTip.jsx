import React from "react";
import cls from "./RegionToolTip.module.scss";
import useTranslation from "next-translate/useTranslation";

export default function RegionTooltip({ position, region, align }) {
  const { t } = useTranslation("common");
  return (
    <div
      className={cls.regionTooltip}
      style={{
        top: position ? position.y : "-200px",
        left: position
          ? align === "right"
            ? position.x - 260
            : position.x
          : "-200px",
        transform: position ? "scale(1)" : "scale(0)",
      }}
    >
      <span className={cls.title}>{t(region)}</span>
    </div>
  );
}
