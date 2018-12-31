$(document).ready(function() {
    // $('#myTable').DataTable();
    initDataTable('http://jsonplaceholder.typicode.com/users');

    getData();
});

function initDataTable(api) {

    columns = [
        { "data": "id" },
        { "data": "name" },
        { "data": "username" }
        /*,
        {  "render": function(data, type, full){
            return '<a title="Delete this table" <i class="fa fa-pencil-alt"></i> </a>';
        } },*/
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

function getData() {
             $("#dataTable").dataTable().api().ajax.reload();
 }