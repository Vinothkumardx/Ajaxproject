document.addEventListener("DOMContentLoaded", function() {
    var bott = document.getElementById('btn');
    var tablebody = document.getElementById('tablebody');

    bott.addEventListener('click', () => {
        var xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            if (this.status === 200) {
                var objectdata = JSON.parse(this.responseText);
                console.log(objectdata);

                var data = '';
                for (var value in objectdata) {
                    data += `<tr>
                        <td>${objectdata[value].title}</td>
                        <td>${objectdata[value].price}</td>
                        <td><img src='${objectdata[value].image}'></td>
                    </tr>`;
                }
               tablebody.innerHTML=data;
            } else {
                console.log("Something went wrong:", this.statusText);
            }
        }
        xhttp.open("GET", "https://fakestoreapi.com/products", true);
        xhttp.send();
    });
});