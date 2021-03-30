//alert("Hello")
console.log("Hi.");
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(resp => {
        console.log(resp)
        for (let i in resp) {
            const d = resp[i]
            //console.log(d)
            document.querySelector('#data_field').innerHTML += '<p>' + d.name + ' from ' + d.address.city + '</p>'
        }

    })