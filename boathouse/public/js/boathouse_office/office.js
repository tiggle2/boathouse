window.boathouse_office = {

    init(page) {

        this.page = page;

        this.render();

    },


    render() {

        this.page.main.html(`

            <div class="boathouse-office">

                <div class="office-toolbar">
                    <button class="btn btn-primary" id="new-crane">
                        New Crane Booking
                    </button>

                    <button class="btn btn-success" id="new-rental">
                        New Rental Booking
                    </button>
                </div>


                <div class="office-layout">

                    <div id="office-calendar"></div>


                    <div class="office-sidebar">

                        <h4>
                            Outstanding Payments
                        </h4>

                        <div id="payments">
                            Loading...
                        </div>

                    </div>

                </div>

            </div>

        `);


        this.bind_events();


        frappe.require([
            "/assets/boathouse/js/boathouse_office/calendar.js",
            "/assets/boathouse/js/boathouse_office/sidebar.js"
        ], () => {

            boathouse_calendar.init();

            boathouse_sidebar.init();

        });

    },


    bind_events() {

        $("#new-crane").click(() => {

            frappe.new_doc("Crane Booking");

        });


        $("#new-rental").click(() => {

            frappe.new_doc("Rental Booking");

        });

    }

};
