$(document).ready(function () {
    initDataTable();
    let api = 'http://jsonplaceholder.typicode.com/posts';


    $(".btn").click(function () {
        getData(api);
    });

    $(".btn-warning").click(function () {
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

    // he guys, this is a jQuery Plugin 
    $('#dataTable').DataTable({
        "order": [[0, "asc"]],
        "columns": columns
    });
}

function clear() {
    $("#dataTable").DataTable().clear();
    $("#dataTable").DataTable().columns.adjust().draw();
}

function getData(api) {
    $.get(
        {
            url: api,
            dataType: "json",
            success: function (data) {
                if (data) {
                    $("#dataTable").DataTable().clear();
                    $("#dataTable").DataTable().rows.add(data);
                    $("#dataTable").DataTable().columns.adjust().draw();
                }
            }
        }

    );
}

function getDataAlternate(api) {

    // asynchronous REST GET
    $.get(api, function (data) {

        if (data) {
            $("#dataTable").DataTable().clear();
            $("#dataTable").DataTable().rows.add(data);
            $("#dataTable").DataTable().columns.adjust().draw();
        }
    });
}