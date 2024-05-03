onReady();

function onReady(){
    console.log('JS is working');
}




function onSubmit(event){
    event.preventDefault();
    let element = event.target;
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const id = document.getElementById('id');
    const title = document.getElementById('title');
    const annualSalary = document.getElementById('annualSalary');
    const tr = document.getElementById('tr');

    document.getElementById('tbody').innerHTML += `
    <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${id}</td>
    <td>${title}</td>
    <td>${annualSalary}</td>
    <td><button id="removeButton">❌</button></td>
    </tr>
    `


    document.getElementById('form').reset();
}