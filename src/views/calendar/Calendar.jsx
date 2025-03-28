import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // Enables clicking
import { Modal, Button } from "react-bootstrap"; // Import Bootstrap Modal
import { getAllScheduledActions } from "../../api/scheduledActionsApi.js";
import "./calendar.css";

function Calendar() {
  const [scheduledActions, setScheduledActions] = useState([]);

  useEffect(() => {
    const fetchScheduledActions = async () => {
      try {
        // Fetch both API calls in parallel
        const data = await getAllScheduledActions();
        setScheduledActions(data);
        // if (data) setScheduledActions(data);
      } catch (err) {
        console.error("Error fetching work orders:", err);
        // setError("Failed to fetch work orders."); // Set error message
      }
    };

    fetchScheduledActions();
  }, []); // Runs once on mount

  const formattedEvents = scheduledActions.map((action) => ({
    title: action.reference, // Display the reference as event title
    date: action.date, // Ensure the date format is correct
    extendedProps: {
      descriptionsOfActions: action.descriptionsOfActions || [],
    },
  }));

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState([]);

  // Open modal when clicking an event
  const handleEventClick = (info) => {
    setSelectedEvent(info.event.extendedProps.descriptionsOfActions?.length > 0 ? info.event : null);
    setShowModal(true);
  };

  // Handle date click
  const handleDateClick = (info) => {
    const date = info.dateStr;
    setSelectedDate(date);

    // Filter events for the clicked date
    const eventsForDate = scheduledActions.filter((event) => event.date === date);
    setFilteredEvents(eventsForDate);
  };

  return (
    <div className="calendar-container">
      <div className="calendar">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={formattedEvents}
          eventClick={handleEventClick} // Show modal when clicking an event
          dateClick={handleDateClick} // Detect when a date is clicked
          eventClassNames="maintenance-event"
          headerToolbar={{
            left: "prev",
            center: "title",
            right: "next",
          }}
          height="auto" // Adjust height to fit content (it was 500px)
          dayCellClassNames="custom-day-cell" // Custom styles
        />

        {/* Modal to show scheduled actions */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header>
            <Modal.Title>{selectedEvent ? selectedEvent.title : "No Event Selected"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedEvent ? (
              <ul>
                {selectedEvent.extendedProps.descriptionsOfActions.map((action, index) => (
                  <li key={index}>{action}</li>
                ))}
              </ul>
            ) : (
              <p>No details available.</p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* Sidebar */}
      <div className="event-sidebar">
        <h3>Events on {selectedDate || "..."}</h3>
        {filteredEvents.length > 0 ? (
          <ul>
            {filteredEvents.map((event, index) => (
              <li key={index}>
                <strong>{event.reference}</strong>
                <ul>
                  {event.descriptionsOfActions.map((action, i) => (
                    <li key={i}>{action}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p>No actions scheduled.</p>
        )}
      </div>
    </div>
  );
};

export default Calendar;