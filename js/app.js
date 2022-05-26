console.log('Welcome to app.js');

let submit = document.getElementById('submitButton')
submit.addEventListener('click', inputFields);

function addLink(){
    let userName = document.getElementById('userName').value;
    let siteName = document.getElementById('siteName').value;
    let siteLink = document.getElementById('siteLink').value;
    // console.log(userName,siteName,siteLink);
    let links = document.getElementById('links');
    links.innerHTML += `<div class="containers">
    <span id="site">${siteName}</span> <a href="${siteLink}" id="link" target="_blank">${siteLink}</a>
    <h6 id="submittedBy">Submitted by ${userName}</h6>
  </div>`;
    
}

function inputFields(){
    let content = document.getElementById('content');
    content.innerHTML = `<form action="#" id="form">
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Name: </span>
      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" id="userName" required>
    </div>
    <div class="input-group mb-5">
      <span class="input-group-text" id="basic-addon1">Site Name:</span>
      <input type="text" class="form-control" placeholder="Site Name" aria-label="Username" aria-describedby="basic-addon1" id="siteName" required>
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Link</span>
      <input type="text" class="form-control" placeholder="Site Link" aria-label="Username" aria-describedby="basic-addon1" id="siteLink" required>
    </div>
    <button type="button" class="btn btn-primary" id="addBtn">Add Link</button>
  </form>`;
  let addBtn = document.getElementById('addBtn');
  addBtn.addEventListener('click', addLink);
}