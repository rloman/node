$(document).ready(function () {

    let api = 'http://jsonplaceholder.typicode.com/users';
    initDataTable(api);

    $(".btn").click(getData);
    $(".btn-warning").click(clear);


});

function initDataTable(api) {

    columns = [
        { "data": "id" },
        { "data": "name" },
        { "data": "username" },
        /* data, type, row, meta */
        // https://datatables.net/reference/option/columns.render
        // just to show the workings, not used in real life
        {
            "render": function (data, type, row, meta) {
                // data : data for the cell
                // type seems to be the class of the table (e.g. display)
                // row seems to be the per iteration object (in this case a user)
                return `<a onclick="remove(${row.id});" title="Remove this table"> <i class="fa fa-pencil-alt">XXX ${row.id}</i> </a>`;
            }
        },
    ];

    // how simple it is to create a datatable :-)
    $('#dataTable').DataTable({
        "order": [[0, "asc"]],
        "ajax": {
            url: api,
            dataSrc: ''
        },
        "columns": columns
    });
}

function remove(id) {
    alert(`About to remove user with id: ${id}`);
}

function clear() {
    $("#dataTable").DataTable().clear();
    $("#dataTable").DataTable().columns.adjust().draw();
}

function getData() {
    $("#dataTable").dataTable().api().ajax.reload();
}