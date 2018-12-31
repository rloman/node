$(document).ready(function() {
    // $('#myTable').DataTable();
    initDataTable('http://jsonplaceholder.typicode.com/users');

    // getData('http://jsonplaceholder.typicode.com/users');
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

function getData(api) {
    //if(window.location.pathname == "/addBooking"){return;}
    //var api = "http://localhost:8080/api/tables";
    api = String(api);

    $.get(api, function(data){
        console.log(data);
        if (data){

            alert(data);
            
             $("#dataTable").DataTable().clear();
             $("#dataTable").DataTable().rows.add(data);
             $("#dataTable").DataTable().columns.adjust().draw();
            //  $("#dataTable").dataTable().api().ajax.reload();
        }
    });
 }