import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEventsByName } from "../../features/Events/eventsSlice";
import GetEvents from "../Events/GetEvents";
import Header from "../Header/Header"; 
const Search = () => {
  const { title } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (title) {
      dispatch(getEventsByName(title))
        .catch((error) => {
          console.error("Error fetching events by name:", error);
        });
    }
  }, [title, dispatch]);

  const events = useSelector((state) => state.events);

  return (
    <div>
      <Header title={title} /> 
      {events.length > 0 ? (
        <GetEvents events={events} />
      ) : (
        <p>No events found</p>
      )}
    </div>
  );
};

export default Search;
