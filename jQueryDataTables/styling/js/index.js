$(document).ready(function() {
    initDataTable();
    let api = 'http://jsonplaceholder.typicode.com/posts';

    getData(api);
    

    $("#fetch").click(function() {
        getData(api);
    });

    $("#clear").click(function() {
        clear();
    });
});

function initDataTable() {

    columns = [
        { "title": "ID",   "data": "id" }, 
        { "title": "Title", "data": "title" },
        { "title": "Body of post", "data": "body" },
      
        /*,
        {  "render": function(data, type, row, meta){
            return '<a title="Delete this table" <i class="fa fa-pencil-alt"></i> </a>';
        } },*/
    ];

    $('#dataTable').DataTable( {
        "order": [[ 0, "asc" ]],
        "columns": columns
    } );
}

function clear(){
    $("#dataTable").DataTable().clear();
    $("#dataTable").DataTable().columns.adjust().draw();
}

function getData(api) {

    // asynchronous REST GET
    $.get(api, function(data){

        if (data){
             $("#dataTable").DataTable().clear();
             $("#dataTable").DataTable().rows.add(data);
             $("#dataTable").DataTable().columns.adjust().draw();
        }
    });
 }