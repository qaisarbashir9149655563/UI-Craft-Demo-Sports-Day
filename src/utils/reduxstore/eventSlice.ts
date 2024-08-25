import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Event {
  id: number;
  event_name: string;
  event_category: string;
  start_time: string;
  end_time: string;
}

interface EventState {
  eventsList: Event[];
  selectedEvents: Event[];
}

const initialState: EventState = {
  eventsList: [],
  selectedEvents: [],
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setEventsList(state, action: PayloadAction<Event[]>) {
      state.eventsList = action.payload;
    },
    selectEvent(state, action: PayloadAction<number>) {
      const eventIndex = state.eventsList.findIndex(
        (event) => event.id === action.payload
      );
      if (eventIndex !== -1) {
        const selectedEvent = state.eventsList[eventIndex];

        // Check if there is a timing conflict with already selected events
        const isTimingMatching = state.selectedEvents.some((event) => {
          return (
            new Date(selectedEvent.start_time) < new Date(event.end_time) &&
            new Date(selectedEvent.end_time) > new Date(event.start_time)
          );
        });

        // If no timing conflict, add the event to selectedEvents
        if (!isTimingMatching) {
          state.selectedEvents.push(selectedEvent);
          state.eventsList.splice(eventIndex, 1);
        } else {
          alert("Event timing conflicts with a selected event");
        }
      }
    },

    deselectEvent(state, action: PayloadAction<number>) {
      const eventIndex = state.selectedEvents.findIndex(
        (event) => event.id === action.payload
      );
      if (eventIndex !== -1) {
        const deselectedEvent = state.selectedEvents[eventIndex];
        state.eventsList.push(deselectedEvent);
        state.selectedEvents.splice(eventIndex, 1);
      }
    },
  },
});

export const { setEventsList, selectEvent, deselectEvent } = eventSlice.actions;
export default eventSlice.reducer;
