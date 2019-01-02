$(document).ready(function() {
    // $('#myTable').DataTable();
    initDataTable('http://jsonplaceholder.typicode.com/users');

    $(".btn-warning").click(clear);
    $(".btn").click(getData);

});

function initDataTable(api) {

    columns = [
        { "data": "id" },
        { "data": "name" },
        { "data": "username" },
        /* data, type, row, meta */
        // https://datatables.net/reference/option/columns.render
        {  "render": function(data, type, row, meta){
            // data : data for the cell
            // type seems to be the class of the table (e.g. display)
            // row seems to be the per iteration object (in this case a user)
              return `<a onclick="remove(${row.id});" title="Remove this table"> <i class="fa fa-pencil-alt">Delete ${row.id}</i> </a>`;
            } 
        },
    ];

    $('#dataTable').DataTable( {
        "order": [[ 0, "asc" ]],
        "ajax": {
            url: api,
            dataSrc: ''
        },
        "columns": columns
    } );
}

function remove(id) {
    alert(id);
}

function clear() {
    $("#dataTable").DataTable().clear();
    $("#dataTable").DataTable().columns.adjust().draw();
}

function getData() {
          $("#dataTable").dataTable().api().ajax.reload();
 }