$(document).ready(function() {
  $("button").click(function() {

    console.log($("tr:first").html());


    console.log($("tr:nth-child(2)").html());


    // select all body tags which are the second child of their parent (in this case the html opening tag
    // is the parent of the body!!!
    console.log($("body:nth-child(2)").html());

    // selects the head since it is the first child of his parent (the htlm tag is the parent)
    console.log($("head:nth-child(1)").html());

    // selects nothing since there is no body tag which is the first child of his parent
    console.log($("body:nth-child(1)").html());

    // now the get (get the third tr element)
    console.log("Third tr follows here:");
    console.log($("tr").eq(2).html());
  });
});
