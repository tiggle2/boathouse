import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

window.boathouse_calendar = {

    init() {

        let calendar_element = document.getElementById(
            "office-calendar"
        );

        if (!calendar_element) {
            console.error("Calendar element missing");
            return;
        }


        let calendar = new Calendar(calendar_element, {

            plugins: [
                dayGridPlugin,
                timeGridPlugin
            ],

            initialView: "timeGridWeek",

            height: "auto",

            headerToolbar: {
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek"
            },


            events: [

                {
                    title: "Test Crane Booking",
                    start: "2026-07-13T09:00:00",
                    end: "2026-07-13T12:00:00",
                    backgroundColor: "#2563eb"
                },

                {
                    title: "Test Rental Booking",
                    start: "2026-07-14T10:00:00",
                    end: "2026-07-14T14:00:00",
                    backgroundColor: "#16a34a"
                }

            ]

        });


        calendar.render();

    }

};
