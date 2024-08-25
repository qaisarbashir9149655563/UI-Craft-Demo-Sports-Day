import React from "react";
import "./selectedEvents.css";
import "./events.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../utils/reduxstore/store";
import Cards from "./cards";
import { measureTimeAndFormat } from "../utils/utils";
import { deselectEvent } from "../utils/reduxstore/eventSlice";
const SelectedEvents = () => {
  const dispatch = useDispatch<AppDispatch>();

  const selectedEvents = useSelector(
    (state: RootState) => state.events.selectedEvents
  );
  return (
    <div className="selectedEvents-container">
      <h3>Selected Events</h3>
      <div className="line-container">
        <div className="half-line"></div>
      </div>
      <div className="selected-cards-grid">
        {selectedEvents.map((item) => (
          <Cards
            key={item.id}
            title={item.event_name}
            catagory={item.event_category}
            date={measureTimeAndFormat(item.start_time, item.end_time)}
            classname={"remove-button"}
            onSelectEvent={() => dispatch(deselectEvent(item.id))}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectedEvents;
