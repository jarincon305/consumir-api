(function () {
    const url = `https://fakestoreapi.com/products?limit=13`;

    new Promise((resolve, reject) => {
  
        const api = new XMLHttpRequest();

        api.onreadystatechange = function () {
            if(this.status == 200 && this.readyState == 4){
                let data = JSON.parse(this.responseText);
                resolve(data);
            }
        }
        api.open('GET', url, true);
        api.send(null);

    }).then(data => {
        // response Api
        data.forEach((value, key) => {
            if (key < 1) {
                document.getElementById(`img${key + 1}`).src=`${value.image}`;
                document.getElementById(`title${key + 1}`).innerHTML = `${value.title}`;
                document.getElementById(`text${key + 1}`).innerHTML = `${value.description}`;
            } else if (key > 0 && key < 5){
                let a = convertDollarsToEuros(value.price);
                document.body.addEventListener('change', function (e) {
                    a = convertDollarsToEuros(value.price);
                    document.getElementById(`text${key + 1}`).innerHTML = `${a}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp; ${value.rating.rate} ⭐ (${value.rating.count})`;
                });
                document.getElementById(`img${key + 1}`).src=`${value.image}`;
                document.getElementById(`title${key + 1}`).innerHTML = `${value.title}`;
                document.getElementById(`text${key + 1}`).innerHTML = `${a}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp; ${value.rating.rate} ⭐ (${value.rating.count})`;
            } else if (key > 4 && key < 7) {
                document.getElementById(`img${key + 1}`).src=`${value.image}`;
                document.getElementById(`title${key + 1}`).innerHTML = `${value.title}`;
                document.getElementById(`text${key + 1}`).innerHTML = `${value.description}`;
            } else if (key > 6 && key < 11) {
                let b = convertDollarsToEuros(value.price);
                document.body.addEventListener('change', function (e) {
                    b = convertDollarsToEuros(value.price);
                    document.getElementById(`text${key + 1}`).innerHTML = `${b}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${value.rating.rate} ⭐ (${value.rating.count})`;
                });

                document.getElementById(`img${key + 1}`).src=`${value.image}`;
                document.getElementById(`title${key + 1}`).innerHTML = `${value.title}`;
                document.getElementById(`text${key + 1}`).innerHTML = `${b}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${value.rating.rate} ⭐ (${value.rating.count})`;
                
            } else {
                document.getElementById(`img${key + 1}`).src=`${value.image}`;
                document.getElementById(`title${key + 1}`).innerHTML = `${value.title}`;
                document.getElementById(`text${key + 1}`).innerHTML = `${value.description}`;
            }
        });
    });
}());

    // ========================

    let listTwo = document.getElementById("positionTwo"),
        listThree = document.getElementById("positionThree"), 
        listFour = document.getElementById("positionFour");

    let elementsTwo   = ["Contact", "Shipping", "Returns", "Size Guide", "Help Center", "Dealers"],
        elementsThree = ["About", "Product", "Responsibility", "Career", "Image bank"],
        elementsFour  = ["Terms &", "Conditions", "Privacy Policy", "Cookie Policy"];

    
    elementsTwo.forEach(elemento => {

        const node = document.createElement("LI");
        const textnode = document.createTextNode(elemento);
        node.appendChild(textnode);
        
        listTwo.appendChild(node);
    });
    

    elementsThree.forEach(elemento => {

        const node = document.createElement("LI");
        const textnode = document.createTextNode(elemento);
        node.appendChild(textnode);
        
        listThree.appendChild(node);
    });

    elementsFour.forEach(elemento => {
        const node = document.createElement("LI");
        const textnode = document.createTextNode(elemento);
        node.appendChild(textnode);
        
        listFour.appendChild(node);
    });

    // ===========================================


    function convertDollarsToEuros(parameters) {
        const radios = document.querySelectorAll('input[type="radio"]:checked');
        let value = radios.length > 0 ? radios[0].value : null;
        concat = value == 'option1' ? 'USD $' : '€';

        let result = value == 'option1' ? concat + parameters : concat + Math.round(0.81 * parameters);

        return result;
    }