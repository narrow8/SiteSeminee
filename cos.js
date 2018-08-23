var seminee = new Array();
var prices = new Array();
var k = 0;

function add(date_semineu)
{
    /*
    var seminee = JSON.parse(sessionStorage.getItem('seminee'));
    var prices = JSON.parse(sessionStorage.getItem('prices'));
    var k = JSON.parse(sessionStorage.getItem('k'));
    */
    prices[k]=date_semineu.split('$')[1].split("Adauga in cos")[0];
    seminee[k]=date_semineu.split('$')[0];
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

    for (var i = 0; i < k; i++)
    {
        var row = document.createElement("div");
        var element = document.getElementById("produse");
        row.classList.add("row");
        row.classList.add("product-line");
        row.id=i;
        element.appendChild(row);
        var semineu = document.createElement("div");
        var node = document.createTextNode(seminee[i]);
        semineu.appendChild(node);
        semineu.classList.add("col-sm-6");
        semineu.classList.add("text-center");
        semineu.classList.add("top-padding");
        row.appendChild(semineu);
        var pret = document.createElement("div");
        var node = document.createTextNode('$' + prices[i]);
        pret.appendChild(node);
        pret.classList.add("col-sm-6");
        pret.classList.add("text-center");
        pret.classList.add("top-padding");
        row.appendChild(pret);

        var delete_button = document.createElement("button");
        var node = document.createTextNode("Sterge");
        delete_button.appendChild(node);
        delete_button.addEventListener("click", function(){
            document.getElementById(delete_button.parentElement.parentElement.id).remove();
            var sem;
            var pric;

            var j = 0;

            sem = delete_button.parentElement.parentElement.firstChild.textContent;
            pric = delete_button.parentElement.parentElement.lastChild.textContent.split("$")[1].split("Sterge")[0];
            var semin = new Array();
            var pric2 = new Array();

            var seminee2 = JSON.parse(sessionStorage.getItem('seminee'));
            var prices2 = JSON.parse(sessionStorage.getItem('prices'));

            var not_deleted = 1;

            seminee2.forEach(semi => {
                if (not_deleted == 0)
                {
                    semin[j] = semi;
                    pric2[j] = pric;
                    j++;
                }
                else
                {
                    if (semi.textContent == sem.textContent){
                        semin[j] = semi;
                        pric2[j] = pric;
                        j++;
                   }
                   else
                       not_deleted = 0;
                }
            });

            sessionStorage.setItem('seminee', JSON.stringify(semin));
            sessionStorage.setItem('prices', JSON.stringify(pric2));
            sessionStorage.setItem('k', JSON.stringify(j));
        });
        delete_button.classList.add("sterge");
        pret.appendChild(delete_button);
        total += parseInt(prices[i]);
    }

    var row = document.createElement("div");
    var element = document.getElementById("produse");
    row.classList.add("row");
    element.appendChild(row);
    var semineu = document.createElement("div");
    var node = document.createTextNode("Total");
    semineu.appendChild(node);
    semineu.classList.add("col-sm-6");
    semineu.classList.add("text-center");
    semineu.classList.add("top-padding");
    row.appendChild(semineu);
    var pret = document.createElement("div");
    var node = document.createTextNode('$' + total);
    pret.appendChild(node);
    pret.classList.add("col-sm-6");
    pret.classList.add("text-center");
    pret.classList.add("top-padding");
    row.appendChild(pret);
}

document.body.onload = function(){
    populate();
}