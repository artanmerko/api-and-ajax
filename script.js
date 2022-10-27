var currentUsername='';
var cardsDiv = document.querySelector('#cards');

function getUsername(e) {
  console.log(e.value);
  currentUsername = e.value;
}

function makeCoderCard(data) {
  var res = `<div class='card'>
                <img src='${data.avatar_url} alt='${data.login}>
                <div class='flex-1'>
                  <h3>${data.name} - ${data.login}</h3>
                  <p>Location: ${data.location}</p>
                  <p>Repositories: ${data.public_repos}</p>
                </div>
              </div>`;
   return res;
}

async function search() {
  var response = await fetch('https://api.github.com/users/'  + currentUsername);
  var coderData = await response.json();
  // console.log(coderData);
  cardsDiv.innerHTML = makeCoderCard(coderData) + cardsDiv.innerHTML;
}