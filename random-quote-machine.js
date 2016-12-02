var colors = [
  "rgb(51, 219, 255)",
  "rgb(255, 87, 51)",
  "rgb(255, 189, 51)",
  "rgb(219, 255, 51)",
  "rgb(117, 255, 51)",
  "rgb(51, 255, 87)",
  "rgb(51, 255, 189)",
];

$(document).ready(function() {
      doIt();
});

function doIt() {

  var num = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
    $('Body').css('background-color', colors[num]);

   var output = $.ajax({
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
      type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
      data: {}, // Additional parameters here
      dataType: 'json',
      success: function(data) {

        document.getElementById("quote").innerHTML = data.quote;
        document.getElementById("author").innerHTML = " - "+ data.author;
        },
        error: function(err) { alert(err); },
        beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", "hgpV4oRigNmshhRlxIK7oVfVeWsBp1qaqpAjsn1uzm9zgt7ApL"); // Enter here your Mashape key
      }
});
}
