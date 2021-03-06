$(document).ready(function() {
    initDataTable();
    let api = 'http://jsonplaceholder.typicode.com/posts';
    

    $(".btn").click(function() {
        getData(api);
    });

    $(".btn-warning").click(function() {
        clear();
    });
});

function initDataTable() {

    columns = [
        { "data": "id" },
        { "data": "title" },
        { "data": "body" }
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
            // ... fix the code here!
            // clear table
            //  add data to table
            //  adjust and draw table
        }
    });
 }