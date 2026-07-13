console.log("Boathouse office module loaded");


window.BoathouseOffice = class {

    constructor(page) {

        console.log("Boathouse Office started");

        $(page.body).html(`

            <div class="boathouse-office">

                <h2>Boathouse Office</h2>

                <button class="btn btn-primary" id="new-crane">
                    New Crane Booking
                </button>

                <button class="btn btn-success" id="new-rental">
                    New Rental Booking
                </button>

            </div>

        `);


        $("#new-crane").click(() => {
            frappe.new_doc("Crane Booking");
        });


        $("#new-rental").click(() => {
            frappe.new_doc("Rental Booking");
        });

    }

};
