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

    let dataTable = $('#dataTable').DataTable( {
        "order": [[ 0, "asc" ]],
        "columns": columns
    } );

    // mention this
    $('#dataTable tbody').on('click', 'tr', function () {
        var personData = dataTable.row( this ).data();

        $("#flash").html(`You clicked on ${personData.id}'s row`).append(`<br>which has title "${personData.title}"`);
        $("#flash").show(3000);
        $("#flash").hide(3000);

        // and now we could fetch the detail data of this one row and use Bootstrap Modal (later)
        // https://getbootstrap.com/docs/4.0/components/modal/
    } );

    // like this! for later since we have to learn Bootstrap Modal first
    $('#dataTable').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            $(this).addClass('selected');
            var table = $('#dataTable').DataTable();
            var data = table.row(this).data();
            // getSingleRecord(data.id, api);
            // $('#modal').modal('toggle');
        }
    });
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
