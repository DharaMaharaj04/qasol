import React, { useContext } from "react";
import flowLight from "../../assets/images/flow-light.png";

import { ThemeBgContext } from "../ContextWrapper/ThemeContext";
const FurnitureFlow = () => {
  const { theme } = useContext(ThemeBgContext);
  return (
    <div>
      <img
        className="sm:h-[475px] h-[775px] bg-center bg-no-repeat bg-cover"
        src={flowLight}
        alt="furniture flow"
        initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -50 },
          }}
      ></img>
    </div>
  );
};

export default FurnitureFlow;
