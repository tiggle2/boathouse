frappe.pages["boathouse-office"].on_page_load = function(wrapper) {

    const page = frappe.ui.make_app_page({
        parent: wrapper,
        title: "Boathouse Office",
        single_column: true
    });

    new BoathouseOffice(page);

};
