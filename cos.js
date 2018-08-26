var seminee = new Array();
var prices = new Array();
var k = 0;

function add(date_semineu)
{
    if (JSON.parse(sessionStorage.getItem('seminee')) != null){
        seminee = JSON.parse(sessionStorage.getItem('seminee'));
        prices = JSON.parse(sessionStorage.getItem('prices'));
        k = JSON.parse(sessionStorage.getItem('k'));
    }
    prices[k]=date_semineu.split('€')[1].split("Adauga in cos")[0];
    seminee[k]=date_semineu.split('€')[0];
    k++;

    sessionStorage.setItem('seminee', JSON.stringify(seminee));
    sessionStorage.setItem('prices', JSON.stringify(prices));
    sessionStorage.setItem('k', JSON.stringify(k));
}

function add2(nume, pret)
{
    if (JSON.parse(sessionStorage.getItem('seminee')) != null){
        seminee = JSON.parse(sessionStorage.getItem('seminee'));
        prices = JSON.parse(sessionStorage.getItem('prices'));
        k = JSON.parse(sessionStorage.getItem('k'));
    }
    prices[k]=pret;
    seminee[k]=nume;
    k++;

    sessionStorage.setItem('seminee', JSON.stringify(seminee));
    sessionStorage.setItem('prices', JSON.stringify(prices));
    sessionStorage.setItem('k', JSON.stringify(k));
}

function populate()
{
    var total = 0;
    var seminee = JSON.parse(sessionStorage.getItem('seminee'));
    var prices = JSON.parse(sessionStorage.getItem('prices'));
    var k = JSON.parse(sessionStorage.getItem('k'));

    var row = document.createElement("input");
    var element = document.getElementById("fieldset");
    row.classList.add("text-center");
    row.value = "Produse in cos: " + k;
    row.name = "number";
    element.appendChild(row);

    var row6 = document.createElement("div");
    element.appendChild(row6);
    row6.innerHTML = "<br> <br> <br>"; 

    var row2 = document.createElement("div");
    row2.classList.add("container-produse");
    element.appendChild(row2);
    var row3 = document.createElement("div");
    row3.classList.add("row");
    row2.appendChild(row3);
    var row4 = document.createElement("div");
    var row5 = document.createElement("div");
    row4.classList.add("col-xs-5");
    row4.classList.add("top-padding");
    row4.classList.add("text-center");
    row5.classList.add("col-xs-5");
    row5.classList.add("top-padding");
    row5.classList.add("text-center");
    row4.innerHTML = "Produs";
    row5.innerHTML = "Valoare";
    row3.appendChild(row4);
    row3.appendChild(row5);

    for (var i = 0; i < k; i++)
    {
        var row = document.createElement("div");
        var element = document.getElementById("fieldset");
        row.classList.add("row");
        row.classList.add("product-line");
        row.id=i;
        element.appendChild(row);
        var semineu = document.createElement("input");
        semineu.classList.add("col-xs-5");
        semineu.classList.add("text-center");
        semineu.classList.add("top-padding");
        semineu.name = "semineu" + i;
        semineu.value = seminee[i];
        row.appendChild(semineu);
        var pret = document.createElement("input");
        pret.name = "pret" + i;
        pret.value =  "€" +  prices[i];
        pret.classList.add("col-xs-5");
        pret.classList.add("text-center");
        pret.classList.add("top-padding");
        row.appendChild(pret);

        var delete_button = document.createElement("button");
        var node = document.createTextNode("Sterge");
        delete_button.appendChild(node);

        delete_button.onclick = function(){

            var j = 0;

            var semin = new Array();
            var pric2 = new Array();

            var k2 = JSON.parse(sessionStorage.getItem('k'));
            
            for (var g = 0; g < k2; g++)
            {
                if (g != this.parentElement.id){
                    semin[j] = document.getElementById(g).firstChild.value;
                    pric2[j] = document.getElementById(g).childNodes[1].value.split("€")[1].split("Sterge")[0];
                    j++;
                }
            }

            sessionStorage.clear();

            sessionStorage.setItem('seminee', JSON.stringify(semin));
            sessionStorage.setItem('prices', JSON.stringify(pric2));
            sessionStorage.setItem('k', JSON.stringify(j));

            document.getElementById(this.parentElement.id).remove();
            location.reload();

        };

        delete_button.classList.add("col-xs-1");
        delete_button.classList.add("sterge");
        row.appendChild(delete_button);
        total += parseInt(prices[i]);
    }

    var row = document.createElement("div");
    var element = document.getElementById("fieldset");
    row.classList.add("row");
    element.appendChild(row);
    var semineu = document.createElement("div");
    var node = document.createTextNode("Total");
    semineu.appendChild(node);
    semineu.classList.add("col-xs-5");
    semineu.classList.add("text-center");
    semineu.classList.add("top-padding");

    row.appendChild(semineu);
    var pret = document.createElement("div");
    var node = document.createTextNode('€' + total);
    pret.appendChild(node);
    pret.classList.add("col-xs-5");
    pret.classList.add("text-center");
    pret.classList.add("top-padding");
    row.appendChild(pret);

}

document.body.onload = function(){
    if (location.pathname.includes("cos.html"))
        populate();
}