/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import "./TravelMenuFlight.scss";

export default function TravelMenuFlight() {
  // states:
  const [tourType, setTourType] = useState("One Way");
  const [minDate, setMinDate] = useState("mm-dd-yyyy");

  // handle functions:

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

  // useEffects:
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    // Pad single-digit month and day with leading zeros
    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }

    const currentDate = `${year}-${month}-${day}`;
    setMinDate(currentDate);
  }, []);

  return (
    <>
      <div className="tour-type-container">
        <TourTypeItem context="One Way" />
        <TourTypeItem context="Round Trip" />
        <TourTypeItem context="Multi City" />
      </div>

      <form className="form-container">
        <div className="form-item">
          <label>Flying from</label>
          <input type="text" placeholder="ex: Dhaka" required />
        </div>

        <div className="form-item">
          <label>Flying To</label>
          <input type="text" placeholder="ex: Chittagong" required />
        </div>

        <div className="form-item">
          <label>Departure</label>
          <input type="date" min={minDate} required />
        </div>

        <div className="form-item">
          <label>{"Adults (12+ Yrs)"}</label>
          <input type="number" defaultValue={1} min={1} required />
        </div>

        <div className="form-item">
          <label>{"Children (02-11 Yrs)"}</label>
          <input type="number" defaultValue={0} min={0} required />
        </div>

        <div className="form-item">
          <label>{"Infants (0-2 Yrs)"}</label>
          <input type="number" defaultValue={0} min={0} required />
        </div>

        <div className="form-item">
          <label>Class</label>
          <select>
            <option value="economy">Economy Class</option>
            <option value="premium-economy">Premium Economy Class</option>
            <option value="business">Business Class</option>
            <option value="First">First Class</option>
          </select>
        </div>

        <div className="form-item">
          <label>Nationality</label>
          <input type="text" placeholder="ex: Bangladeshi" required />
        </div>

        <div className="form-item">
          <label>Contact No.</label>
          <input type="text" placeholder="ex: 01714XXXXXX" required />
        </div>

        <div className="form-item">
          <label>Email</label>
          <input type="email" placeholder="ex: xxxx@gmail.com" required />
        </div>
      </form>
    </>
  );
}
