frappe.pages["boathouse-office"].on_page_load = function(wrapper) {

    const page = frappe.ui.make_app_page({
        parent: wrapper,
        title: "Boathouse Office",
        single_column: true
    });

    if (window.BoathouseOffice) {
        new BoathouseOffice(page);
    } else {
        console.error("BoathouseOffice not loaded");
    }

};
