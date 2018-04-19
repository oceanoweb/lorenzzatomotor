(function IIFE() {
  // Send request
  function sendRequest(params, callback) {
    var http = new XMLHttpRequest();
    http.open('POST', '../send.php', true);

    http.onreadystatechange = function send() {
      if (http.readyState === 4 && http.status === 200) {
        callback(JSON.parse(http.responseText));
      }
    };

    http.send(JSON.stringify(params));
  }

  // successRequest
  function successRequest(response) {
    console.log(response);
  }

  // on Post
  function postData(e) {
    e.preventDefault();

    var params = {
      name: contato.name.value,
      email: contato.email.value,
      message: contato.message.value
    };

    sendRequest(params, successRequest);
  }

  var formButton = document.querySelector('[type="submit"]');
  formButton.addEventListener('click', postData);
})();
