"use strict";
var _a;
const $ = (element) => document.querySelector(element);
let cars = [];
const parkingLot = {
    add: (car) => {
        var _a;
        const ROW = document.createElement('tr');
        ROW.setAttribute('data-plate', car.plate);
        ROW.classList.add('row');
        ROW.innerHTML = `
        <td>${car.make.toUpperCase()}</td>
        <td>${car.plate.toUpperCase()}</td>
        <td>${car.hour}</td>
        <button class = "remove-button">x</button>
        `;
        (_a = $('#cars')) === null || _a === void 0 ? void 0 : _a.appendChild(ROW);
        $('#make').value = '';
        $('#license_plate').value = '';
        cars.push({ car });
    }
};
(_a = $('#register')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    var _a, _b;
    const make = (_a = $('#make')) === null || _a === void 0 ? void 0 : _a.value;
    const plate = (_b = $('#license_plate')) === null || _b === void 0 ? void 0 : _b.value;
    if (!make || !plate) {
        alert('Ambos os campos são obrigatórios!');
        return;
    }
    parkingLot.add({ make, plate, hour: new Date() });
});
