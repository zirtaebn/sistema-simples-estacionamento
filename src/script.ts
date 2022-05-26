const $ = (element: string): HTMLInputElement | null => document.querySelector(element);

interface ICar {

    make: string,
    plate: string,
    hour: Date
}

let cars: object[] = [];

const parkingLot =  {

    add: (car: ICar) => {

        const ROW = document.createElement('tr');
        ROW.setAttribute('data-plate', car.plate);
        ROW.classList.add('row');

        ROW.innerHTML = `
        <td>${car.make.toUpperCase()}</td>
        <td>${car.plate.toUpperCase()}</td>
        <td>${car.hour}</td>
        `
        // ROW.querySelector('.remove-button')?.addEventListener('click', (element) => {

        //     console.log(element.target);
    
        // })

        $('#cars')?.appendChild(ROW);

        $('#make')!.value = '';
        $('#license_plate')!.value = '';

        cars.push({car});  
    }  
}

$('#register')?.addEventListener('click', ()  => {

    const make = $('#make')?.value;
    const plate = $('#license_plate')?.value;

    if (!make || !plate) {

        alert('Ambos os campos são obrigatórios!');
        return;
    }

    parkingLot.add({ make, plate, hour: new Date() });

  
 
})