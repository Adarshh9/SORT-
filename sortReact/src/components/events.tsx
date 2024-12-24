import React from "react";

interface Event {
  id: number;
  title: string;
  image: string;
  altText: string;
  date: string;
  details: string[];
}

const events: Event[] = [
  {
    id: 1,
    title: "Figma & UI Development",
    image: "img/events/uiux.webp",
    altText: "Figma & UI Development",
    date: "15th Oct",
    details: [
      "Conducted a Figma and UI Development workshop",
      "Focused on design principles and tool usage",
      "Engaged participants in hands-on sessions",
    ],
  },
  {
    id: 2,
    title: "Prayaas 5.0",
    image: "img/events/prayaas.50,.webp",
    altText: "Prayaas 5.0",
    date: "15th October",
    details: [
      "Donated 15+ bags of clothes collected by students and staff",
      "40+ members participated in the event",
      "Supported the local community through donations",
    ],
  },
  // Add the remaining events here in the same format.
  {
    id: 3,
    title: "SORT x NCC Airforce Day",
    image: "img/events/prayaas.50,.webp",
    altText: "SORT x NCC Airforce Day",
    date: "06th October",
    details: [
      "Hosted a talk show with Group Captain Yogesh Pai",
      "Honored the Indian Air Force and its heroes",
      "Inspired participants through personal stories of perseverance",
    ],
  },
];

const Events: React.FC = () => {
  return (
    <section id="events">
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <p className="d-inline-block bg-secondary text-primary py-1 px-4">
              EVENTS
            </p>
            <h1 className="text-uppercase">Recent Events</h1>
          </div>
          <div className="row g-4">
            {events.map((event) => (
              <div
                key={event.id}
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="event-container">
                  <img
                    className="img-fluid event-image"
                    src={event.image}
                    alt={event.altText}
                    data-bs-toggle="modal"
                    data-bs-target={`#event${event.id}Modal`}
                  />
                  <div className="event-overlay">{event.title}</div>
                </div>

                <div
                  className="modal fade"
                  id={`event${event.id}Modal`}
                  tabIndex={-1}
                  aria-labelledby={`event${event.id}ModalLabel`}
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5
                          className="modal-title text-uppercase"
                          id={`event${event.id}ModalLabel`}
                        >
                          {event.title}
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <p>Date: {event.date}</p>
                        <ul>
                          {event.details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
