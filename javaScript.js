
const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
});

let total = 0;

onReady();

function onReady(){
    console.log('JS is working', total);

    // renderMoneyCalculator();
}





function onSubmit(event){
    event.preventDefault();
    // const element = event.target;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const id = document.getElementById('id').value;
    const title = document.getElementById('title').value;
    const annualSalary = document.getElementById('annualSalary').value;
    console.log(annualSalary);
    // const tr = document.getElementById('tr');

    
    const paraElement = document.getElementById('remaining');
    console.log(paraElement);
    total += Number(annualSalary) / 12;
    if(total > 20000){
        paraElement.style.color = "red";
    }
    console.log('what is the total', total);
    // paraElement.innerText = total;
    paraElement.innerText = `$${total} Monthly Total`;
    document.getElementById('tbody').innerHTML += `
    <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${id}</td>
    <td>${title}</td>
    <td>${USDollar.format(annualSalary)}</td>
    <td><button data-salary="${annualSalary}" id="removeButton" onclick="removeButton(event)">❌</button></td>
    </tr>
    `

    document.getElementById('form').reset();
}

function removeButton(event){
    const consent = confirm("Are you sure you want to delete this employee?");
    if(!consent) return;
    const element = event.target;
    element.closest('tr').remove();

    const thisSalary = Number(element.dataset.annualSalary);
    total -= thisSalary;
    console.log('Removed Button');
}



// function moneyCalculator(){
    
// }


// function renderMoneyCalculator(){
//     // const remaining = moneyCalculator();
//     // const h5 = document.getElementById('remaining');
//     console.log('fjjrj');
//     // let total = 0;
//     // const paraElement = document.getElementById('remaining');
//     // console.log(paraElement);
//     // paraElement.innerText = total;
//     // for(const salary of employees){
//     //     total += Number(salary.employees);
//     // }
    
//     // let sum = total / 12;
//     // console.log(sum);
//     // return sum;
// }

function deleteEmployee(event){}
