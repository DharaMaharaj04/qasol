import React from "react";
import MidComponentItem from "./MidComponentItem";
import MidPhone1 from "../../assets/images/MidComponentPhone.png";
import MidPhone2 from "../../assets/images/midPhone2.png";

const MidComponentParent = () => {
  return (
    <div>
      <div>
        <MidComponentItem
          title="Our Philosophy"
          text="At QA Vision, we believe in a no-compromise approach to quality. Here’s how we do it:"
          img={MidPhone1}
          reverse
        ></MidComponentItem>
      </div>
      <div>
        <MidComponentItem
          title="Search by room"
          img={MidPhone2}
        ></MidComponentItem>
      </div>
    </div>
  );
};

export default MidComponentParent;
