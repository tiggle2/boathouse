import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

window.BoathouseCalendar = {
    init(element) {
        const calendar = new Calendar(element, {
            plugins: [dayGridPlugin, timeGridPlugin],
            initialView: "timeGridWeek",
            height: 700,

            headerToolbar: {
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay"
            },

            events: [
                {
                    title: "Test Crane Booking",
                    start: "2026-07-13T09:00:00",
                    end: "2026-07-13T11:00:00",
                    color: "#2563eb"
                },
                {
                    title: "Test Rental Booking",
                    start: "2026-07-14T10:00:00",
                    end: "2026-07-14T15:00:00",
                    color: "#16a34a"
                }
            ]
        });

        calendar.render();
    }
};
