// get the form into a variable.
var myForm = document.getElementById("myForm");
var titleElement = document.getElementById("title");
var bodyElement = document.getElementById("body");
var responseElement = document.getElementById('response');
var responseTemplate = document.getElementById('responseTemplate').innerHTML;

// Bind the onsubmit event on the form
// please note that don't call the function when using for binding an event
myForm.onsubmit = sendFormData;
// myForm.addEventListener('submit', sendFormData);

function sendFormData(e) {
  // prevent form from being submitted by preventing its default behavior
  e.preventDefault();

  responseElement.innerHTML = "Waiting for response from server...";
  var userTitle = titleElement.value;
  var userBody = bodyElement.value;
  var userId = Math.ceil(Math.random() * 10000);

  // POST adds a random id to the object sent
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: userTitle,
      body: userBody,
      userId: userId
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      displayData(json);
    })
    .catch(function(error){
      responseElement.innerHTML = "Some error occured ->" + error;
    });
  // Same work with "fat arrow" functions (ES6 feature)
  // .then(response => response.json())
  // .then(json => console.log(json));
}

function displayData(data) {
  var newData = responseTemplate.replace('{{ID}}', data.id);
  newData = newData.replace('{{title}}', data.title);
  newData = newData.replace('{{body}}', data.body);
  newData = newData.replace('{{userId}}', data.userId);
  responseElement.innerHTML = newData;
}
