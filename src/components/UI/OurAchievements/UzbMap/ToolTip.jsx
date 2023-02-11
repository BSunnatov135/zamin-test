import React from "react";
import { Tooltip } from "react-svg-tooltip";
import useTranslation from "next-translate/useTranslation";

const TooltipComponent = ({ tooltipRef, title = "region", align = "left" }) => {
  const { t } = useTranslation("common");
  return (
    <Tooltip triggerRef={tooltipRef}>
      <rect
        x={align === "right" ? -300 : 50}
        y={0}
        width={350}
        height={50}
        rx={5}
        ry={5}
        fill="#fff"
      />
      <text
        x={align === "right" ? -250 : 100}
        y={30}
        fontSize={22}
        fill="black"
        className="text-fill"
      >
        {t(title)}
      </text>
    </Tooltip>
  );
};

export default TooltipComponent;
