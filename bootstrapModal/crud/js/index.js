let api = 'http://jsonplaceholder.typicode.com/posts';

$(document).ready(function () {
    initDataTable();


    getData(api);


    $("#fetch").click(function () {
        getData(api);
    });

    $("#clear").click(function () {
        clear();
    });
    $("#addBtn").on('click', function () {
        document.getElementById("modal-title").innerHTML = "Create a table";
        document.getElementById("modalForm").reset();
        $("#btnsubmit").attr('onclick', 'submitNew("' + api + '");');
        $('#modal').modal('toggle');

    });
});

function initDataTable() {

    columns = [
        { "title": "ID", "data": "id" },
        { "title": "Title", "data": "title" },
        { "title": "Body of post", "data": "body" },

        /*,
        {  "render": function(data, type, row, meta){
            return '<a title="Delete this table" <i class="fa fa-pencil-alt"></i> </a>';
        } },*/
    ];

    let dataTable = $('#dataTable').DataTable({
        "order": [[0, "asc"]],
        "columns": columns
    });

    $('#dataTable tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }
        deselect();
        $(this).addClass('selected');
        var table = $('#dataTable').DataTable();
        var data = table.row(this).data();

        // this function fetches one record and fill the modal with the data and shows the modal for editing
        getSingleRecord(data.id, api);

        $('#modal').modal('toggle');
    });

}

function clear() {
    $("#dataTable").DataTable().clear();
    $("#dataTable").DataTable().columns.adjust().draw();
}

function getData(api) {

    // asynchronous REST GET
    $.get(api, function (data) {

        if (data) {
            $("#dataTable").DataTable().clear();
            $("#dataTable").DataTable().rows.add(data);
            $("#dataTable").DataTable().columns.adjust().draw();
        }
    });
}

function getSingleRecord(id, api) {
    console.log("Single record pre called: " + id);

    apiPath = String(api + "/" + id);
    $.get(apiPath, function (data) {

        if (data) {
            console.log("Single record post called: " + id);
            console.log("with data: : " + data.id);

            fillUpdateDiv(data, api);
        }
    });
}


function submitNew(api) {

    var formData = $("#modalForm").serializeArray().reduce(function (result, object) { result[object.name] = object.value; return result }, {});
    console.log("Formdata");
    console.log(formData);
    //var id = formData.id;
    for (var key in formData) {
        if (formData[key] == "" || formData == null) delete formData[key];
    }

    console.log("as string:" + JSON.stringify(formData));


    $.post({
        url: api,
        data: JSON.stringify(formData),
        dataType: "json",
        success: getData(api),
        error: function (error) {
            console.log(error);
        }
    });

    deselect();
    $('#modal').modal('toggle');
}

// this function perform cleaning up of the table
// 1. remove eventually selected class
// 2. clean the form using the reset method
function deselect() {

    $('#dataTable tr.selected').removeClass('selected');

    document.getElementById("modalForm").reset();
}



function fillUpdateDiv(record, api) {

    console.log(record);
    console.log(api);

    // $("#btndelete").attr('onclick', 'submitDelete(' + record.id +', "' + api +'");');
    $("#btnsubmit").attr('onclick', 'submitEdit(' + record.id + ', "' + api + '");');

    document.getElementById("modal-title").innerHTML = "Edit a table";

    // this function fills the modal
    fillModal(record);

}

function fillModal(record) {

    $("#id").val(record.id);
    $("#title").val(record.title);
    $("#body").val(record.body);

    $("#confirmbutton").css('display', 'inline-block');
    let elem = '<button type="button" class="btn btn-danger" onclick="submitDelete(' + record.id + ', \'' + api + '\');">Confirm delete</button>';
    $('#confirmbutton').popover({
        animation: true,
        content: elem,
        html: true,
        container: modal
    });
}

function submitEdit(id, api) {

    // shortcut for filling the formData as a JavaScript object with the fields in the form
    var formData = $("#modalForm").serializeArray().reduce(function (result, object) { result[object.name] = object.value; return result }, {});
    console.log("Formdata =>");
    console.log(formData);
    var id = formData.id;
    for (var key in formData) {
        if (formData[key] == "" || formData == null) delete formData[key];
    }

    console.log("Updating row with id:" + id)
    $.ajax({
        url: api + "/" + id,
        type: "put",
        data: JSON.stringify(formData),
        dataType: "json",
        success: getData(api),
        error: function (error) {
            console.log(error);
        }
    });

    deselect();
    $('#modal').modal('toggle');
}

function submitDelete(id, api) {
    console.log("About to remove: " + id);
    var formData = $("#modalForm").serializeArray().reduce(function (result, object) { result[object.name] = object.value; return result }, {});
    // rloman dit werkt niet via parameter. Waarom niet???
    id = formData.id;
    console.log(`Deleting row with id: ${id}`);
    $.ajax({
        url: api + "/" + id,
        type: "delete",
        dataType: 'json',
        success: getData(api),
        contentType: "application/json; charset=utf-8"
    });

    $('#modal').modal('toggle');
}