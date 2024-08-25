import React, { useEffect } from "react";
import Cards from "./cards";
import "./events.css";
import EventList from "../JSONData/JsonData.json";
import { measureTimeAndFormat } from "../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../utils/reduxstore/store";
import { selectEvent, setEventsList } from "../utils/reduxstore/eventSlice";
const Events = () => {
  const dispatch = useDispatch<AppDispatch>();
  const eventsList = useSelector((state: RootState) => state.events.eventsList);

  useEffect(() => {
    if (eventsList.length === 0) {
      dispatch(setEventsList(EventList));
    }
  }, [dispatch, eventsList.length]);

  return (
    <div className="event-container">
      <div className="event-heading">
        <h3>All Events</h3>
        <div className="line-container">
          <div className="half-line"></div>
        </div>
      </div>
      <div className="cards-grid">
        {eventsList.map((item: any) => (
          <Cards
            key={item.id}
            title={item.event_name}
            catagory={item.event_category}
            date={measureTimeAndFormat(item.start_time, item.end_time)}
            classname={"selected-button"}
            onSelectEvent={() => dispatch(selectEvent(item.id))}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
