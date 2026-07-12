frappe.pages["boathouse-office"].on_page_load = function(wrapper) {

    let page = frappe.ui.make_app_page({
        parent: wrapper,
        title: "Boathouse Office",
        single_column: true
    });

    frappe.require([
        "/assets/boathouse/js/boathouse_office/office.js",
        "/assets/boathouse/css/boathouse_office/office.css"
    ], () => {

        boathouse_office.init(page);

    });

};
