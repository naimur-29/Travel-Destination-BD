/* eslint-disable react/prop-types */
import { useState } from "react";

import "./TravelMenuFlight.scss";

export default function TravelMenuFlight() {
  // states:
  const [tourType, setTourType] = useState("One Way");

  // inner components:
  const TourTypeItem = ({ context }) => (
    <div className="tour-type-item">
      <input
        type="radio"
        name="TripType"
        id={context.split(" ")[0]}
        onChange={() => setTourType(context)}
        checked={tourType === context}
      />
      <label htmlFor={context.split(" ")[0]}>{context}</label>
    </div>
  );

  return (
    <>
      <div className="tour-type-container">
        <TourTypeItem context="One Way" />
        <TourTypeItem context="Round Trip" />
        <TourTypeItem context="Multi City" />
      </div>
    </>
  );
}
