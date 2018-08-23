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
        semineu.classList.add("col-xs-6");
        semineu.classList.add("text-center");
        semineu.classList.add("top-padding");
        row.appendChild(semineu);
        var pret = document.createElement("div");
        var node = document.createTextNode('$' + prices[i]);
        pret.appendChild(node);
        pret.classList.add("col-xs-6");
        pret.classList.add("text-center");
        pret.classList.add("top-padding");
        row.appendChild(pret);

        var delete_button = document.createElement("button");
        var node = document.createTextNode("Sterge");
        delete_button.appendChild(node);

        delete_button.onclick = function(){
            
            var sem;
            var pric;

            var j = 0;

            sem = this.parentElement.parentElement.firstChild.textContent;
            pric = this.parentElement.parentElement.lastChild.textContent.split("$")[1].split("Sterge")[0];
            var semin = new Array();
            var pric2 = new Array();

            var seminee2 = JSON.parse(sessionStorage.getItem('seminee'));
            var prices2 = JSON.parse(sessionStorage.getItem('prices'));
            var k2 = JSON.parse(sessionStorage.getItem('k'));

            var not_deleted = 1;

            for (var l = 0; l < k2; l++)
            {
                if (not_deleted == 0)
                {
                    semin[j] = seminee2[l];
                    pric2[j] = prices2[l];
                    j++;
                }
                else
                {
                    if (seminee2[l] != sem){
                        semin[j] = seminee2[l];
                        pric2[j] = prices2[l];
                        
                        j++;
                   }
                   else{
                       not_deleted = 0;
                   }
                }
            }

            sessionStorage.clear();

            sessionStorage.setItem('seminee', JSON.stringify(semin));
            sessionStorage.setItem('prices', JSON.stringify(pric2));
            sessionStorage.setItem('k', JSON.stringify(j));

            document.getElementById(this.parentElement.parentElement.id).remove();

            location.reload();

        };

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
    semineu.classList.add("col-xs-6");
    semineu.classList.add("text-center");
    semineu.classList.add("top-padding");

    row.appendChild(semineu);
    var pret = document.createElement("div");
    var node = document.createTextNode('$' + total);
    pret.appendChild(node);
    pret.classList.add("col-xs-6");
    pret.classList.add("text-center");
    pret.classList.add("top-padding");
    row.appendChild(pret);
}

document.body.onload = function(){
    if (location.pathname.includes("cos.html"))
        populate();
}