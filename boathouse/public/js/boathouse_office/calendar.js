import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";


export function init_calendar(element) {

    const calendar = new Calendar(element, {

        plugins: [
            dayGridPlugin,
            timeGridPlugin
        ],

        initialView: "timeGridWeek",

        editable: false,

        height: "auto",

        events: []

    });


    calendar.render();

}
