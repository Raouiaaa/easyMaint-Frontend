import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // Enables clicking
import { Modal, Button } from "react-bootstrap"; // Import Bootstrap Modal
import "./calendar.css";

const Calendar = () => {
  // Sample events (You’ll replace this with data from your backend)
  const [events] = useState([
    {
      title: "Maintenance",
      date: "2025-03-05",
      actions: ["Check motor", "Replace filter"],
    },
    {
      title: "Inspection",
      date: "2025-03-10",
      actions: ["Inspect pipes", "Test pump pressure"],
    },
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState([]);

  // Open modal when clicking an event
  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
    setShowModal(true);
  };

  // Handle date click
  const handleDateClick = (info) => {
    const date = info.dateStr;
    setSelectedDate(date);

    // Filter events for the clicked date
    const eventsForDate = events.filter((event) => event.date === date);
    setFilteredEvents(eventsForDate);
  };

  return (
    <div className="calendar-container">
      <div className="calendar">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventClick={handleEventClick} // Show modal when clicking an event
          dateClick={handleDateClick} // Detect when a date is clicked
          eventClassNames={(eventInfo) => {
            return eventInfo.event.title === "Maintenance"
              ? "maintenance-event"
              : "inspection-event";
          }}
          headerToolbar={{
            left: "prev",
            center: "title",
            right: "next",
          }}
          height="auto" // Adjust height to fit content
          dayCellClassNames="custom-day-cell" // Custom styles
        />

        {/* Modal to show scheduled actions */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header>
            <Modal.Title>Scheduled Actions</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedEvent ? (
              <ul>
                {selectedEvent.extendedProps.actions.map((action, index) => (
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
                <strong>{event.title}</strong>
                <ul>
                  {event.actions.map((action, i) => (
                    <li key={i}>{action}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p>No events scheduled.</p>
        )}
      </div>
    </div>
  );
};

export default Calendar;