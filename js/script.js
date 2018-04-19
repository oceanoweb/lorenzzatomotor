(() => {
  const send = document.querySelector('[type="submit"]');

  function postData(e) {
    e.preventDefault();

    const name = encodeURIComponent(document.querySelector('input[name="name"]').value);
    const email = encodeURIComponent(document.querySelector('input[name="email"]').value);
    const message = encodeURIComponent(document.querySelector('textarea[name="message"]').value);

    // Parameters to send to PHP script. The bits in the "quotes" are the POST indexes to be sent to the PHP script.
    const params = 'name=' + name + '&email=' + email + '&message=' + message;

    const http = new XMLHttpRequest();
    http.open('POST', '../send.php', true);

    // Set headers
    http.setRequestHeader('Content-type', 'multipart/form-data');

    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
        document.getElementById('response').innerHTML = http.responseText;
      }
    };

    http.send(params);
  }

  send.addEventListener('click', postData);
})();
