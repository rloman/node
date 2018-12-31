$(document).ready(function() {
    initDataTable();
    let api = 'http://jsonplaceholder.typicode.com/posts';
    

    $(".btn").click(function() {
        getData(api);
    });
});

function initDataTable() {

    columns = [
        { "data": "id" },
        { "data": "title" },
        { "data": "body" }
        /*,
        {  "render": function(data, type, full){
            return '<a title="Delete this table" <i class="fa fa-pencil-alt"></i> </a>';
        } },*/
    ];

    $('#dataTable').DataTable( {
        "order": [[ 0, "asc" ]],
        "columns": columns
    } );
}

function getData(api) {

    $.get(api, function(data){

        if (data){
             $("#dataTable").DataTable().clear();
             $("#dataTable").DataTable().rows.add(data);
             $("#dataTable").DataTable().columns.adjust().draw();
        }
    });
 }