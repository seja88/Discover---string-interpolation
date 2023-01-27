// const product_name = 'MacBook Pro 14" M1 PRO'
// const product_price = '2410'
// const currency = 'EUR';
// const body = document.body;

// const product_html = `<div class="product product--highlighted">
//     <div class="product__name">${product_name}</div>
//     <div class="product__price">${product_price} ${currency}</div>
// </div>`;

// const elementFromHTML = (html) => {
//     const div = document.createElement('div');
//     div.innerHTML = html;
//     return div.firstChild;
// }

// const div = elementFromHTML(product_html)
// body.appendChild(div);

const body = document.body;
const employee = {
    first_name: 'Alfred',
    last_name: 'Pennyworth',
    age: 67,
    occupation: 'butler',
    place_of_residence: 'Gotham',
    photo_url: 'https://classes.codingbootcamp.cz/assets/classes/1177/alfred.jpg'
}

const employee_html = `<div class="employee">
<div class="employee__photo">
    <img src="${employee.photo_url}" alt="${employee.first_name} ${employee.last_name}">
</div>
<div class="employee_info">
    <div class="employee__full-name">Full-name: ${employee.first_name} ${employee.last_name}</div>
    <div class="employee__occupation">Occupation: ${employee.occupation}</div>
    <div class="employee__residence">Last known place of residence: ${employee.place_of_residence}</div>
    <div class="employee__age">Age: ${employee.age} years old</div>
</div>
</div>`;

const elementFromHTML = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div;
}

const div = elementFromHTML(employee_html)
div.className = 'employees'
body.appendChild(div);
