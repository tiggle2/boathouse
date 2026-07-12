frappe.pages["boathouse-office"].on_page_load = function(wrapper) {

    let page = frappe.ui.make_app_page({
        parent: wrapper,
        title: "Boathouse Office",
        single_column: true
    });

    $(wrapper).find(".layout-main-section").html(`

        <div style="padding:20px">

            <h2>Boathouse Office Loaded</h2>

            <button class="btn btn-primary" id="test-crane">
                New Crane Booking
            </button>

            <button class="btn btn-success" id="test-rental">
                New Rental Booking
            </button>

        </div>

    `);


    $("#test-crane").click(() => {
        frappe.new_doc("Crane Booking");
    });


    $("#test-rental").click(() => {
        frappe.new_doc("Rental Booking");
    });

};
