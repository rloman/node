$(document).ready(function() {
    $('#myTable').DataTable();

    getData('http://jsonplaceholder.typicode.com/users');
});

function getData(api) {
    //if(window.location.pathname == "/addBooking"){return;}
    //var api = "http://localhost:8080/api/tables";
    api = String(api);

    console.log(api);
 
    $.get(api, function(data){
        console.log(data);
        if (data){
            
             $("#dataTable").DataTable().clear();
             $("#dataTable").DataTable().rows.add(data);
             $("#dataTable").DataTable().columns.adjust().draw();
             $("#dataTable").dataTable().api().ajax.reload();
        }
    });
 }