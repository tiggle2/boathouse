frappe.pages["boathouse-office"].on_page_load = function(wrapper) {

    let page = frappe.ui.make_app_page({
        parent: wrapper,
        title: "Boathouse Office",
        single_column: true
    });

    $(wrapper).find(".layout-main-section").html(`

        <div style="padding:20px">

            <div style="margin-bottom:15px;">
                <button class="btn btn-primary" id="test-crane">
                    New Crane Booking
                </button>

                <button class="btn btn-success" id="test-rental">
                    New Rental Booking
                </button>
            </div>

            <div id="office-calendar"></div>

        </div>

    `);

    $("#test-crane").click(() => {
        frappe.new_doc("Crane Booking");
    });

    $("#test-rental").click(() => {
        frappe.new_doc("Rental Booking");
    });

	const calendarEl = document.getElementById("office-calendar");

	if (window.BoathouseCalendar) {
    window.BoathouseCalendar.init(calendarEl);
	} else {
   	 console.error("BoathouseCalendar missing");
	}

};
