import { init_calendar } from "./calendar";

window.BoathouseOffice = class {

    constructor(page) {

        this.page = page;

        this.render();

        this.bind_events();

        init_calendar(
            document.getElementById("booking-calendar")
        );

    }


    render() {

        $(this.page.body).html(`

            <div class="boathouse-office">

                <div class="mb-4">

                    <button class="btn btn-primary" id="new-crane-booking">
                        New Crane Booking
                    </button>

                    <button class="btn btn-success" id="new-rental-booking">
                        New Rental Booking
                    </button>

                </div>


                <div id="booking-calendar"></div>


            </div>

        `);

    }


    bind_events() {

        $("#new-crane-booking").click(() => {
            frappe.new_doc("Crane Booking");
        });


        $("#new-rental-booking").click(() => {
            frappe.new_doc("Rental Booking");
        });

    }

};
