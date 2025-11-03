const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon',"camiones"];
const domains = ['com', 'es', 'dev', 'io', 'net'];

//Proyect for class
/* for(pr of pronoun){
    for(aj of adj){
        for(nn of noun){
            for(dom of domains){
                if(dom === nn.slice(-dom.length)){
                    console.log(pr.concat(aj,nn.slice(0,-dom.length),".",dom));
                } else {
                    console.log(pr.concat(aj,nn,".",dom));
                }
            }
        }
    }
} */

//Extra for me
body = `<div class="container-fluid">
            <div class="row" id="card-row">
            </div>
        </div>
        <div class="container-fluid ">
            <div class="btn-group mx-auto p-3" role="group" aria-label="btn-group">
                <button type="button" id="btn-domain" class="btn btn-primary">Domain</button>
                <button type="button" id="btn-pronoun" class="btn btn-primary">Pronoun</button>
                <button type="button" id="btn-adjectives" class="btn btn-primary">Adjective</button>
                <button type="button" id="btn-noun" class="btn btn-primary">Noun</button>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
        <script src="./app.js"></script>`;

function createArrOfWebLinks(){
    let auxArr = []
    for(pr of pronoun){
        for(aj of adj){
            for(nn of noun){
                for(dom of domains){
                    auxArr.push(pr.concat(aj,nn,".",dom));
                }
            }
        }
    }
    return auxArr;
}

function orderArrOfWebLinks(arrWords, arrToOrder){
    let auxArr = [];
    let auxIndexCondition = false;
    let auxIndex = 0;
    if (arrWords.length > 4){
        auxIndexCondition = true;
    }

    for(word of arrWords){
        auxArr.push(arrToOrder.filter((a) => {if(auxIndexCondition) {auxIndex = a.length - 3} return a.includes(word, auxIndex)}));
    }

    return auxArr;
}

function cardColsGen(arr) {
    let auxText = "";
    for(count in arr) {
        auxText = auxText.concat('<div class="col card-container"></div>', " ");
    }
    return auxText;
}

function cardTextGen(cards) {
    for(i in cards){
        cards[i].innerHTML = `<div class="card mx-auto" style="width: 18rem;">
                                    <div class="card-body">
                                        <h5 class="card-title" id="card-title-${i}" >Card title</h5>
                                        <p class="card-text" id="card-text-${i}"></p>
                                    </div>
                                </div>`;
    }
}

function createColsHTML(arr) {
    document.getElementById("card-row").innerHTML = cardColsGen(arr);
}

function printCardText(arr, wordTittle, arrWords) {
    let auxCounter = 0;

    for(el of arr) {
        document.getElementById(`card-title-${auxCounter}`).innerHTML = wordTittle + ": " + arrWords[auxCounter];
        let auxText ="";
        for(word of el){
            auxText = auxText.concat("<br><br>", word);
        }
           document.getElementById(`card-text-${auxCounter}`).innerHTML = auxText;
        auxCounter++;
    }
}

function buttonFunctionality(arrWords, word, arrUnordered) {

    let orderedArray = (orderArrOfWebLinks(arrWords, arrUnordered));
    document.getElementById("body").innerHTML = body;
    createColsHTML(orderedArray);
    cardsHTML = document.getElementsByClassName("card-container");
    cardTextGen(cardsHTML);
    printCardText(orderedArray, word, arrWords);
}

let unorderedWebLinks = createArrOfWebLinks();

buttonFunctionality(domains,"Domain", unorderedWebLinks);

document.getElementById("btn-domain").addEventListener("click", function() {buttonFunctionality(domains, "Domain", unorderedWebLinks)});
document.getElementById("btn-pronoun").addEventListener("click", function() {buttonFunctionality(pronoun, "Pronoun", unorderedWebLinks)});
document.getElementById("btn-adjectives").addEventListener("click", function() {buttonFunctionality(adj, "Adjective", unorderedWebLinks)});
document.getElementById("btn-noun").addEventListener("click", function() {buttonFunctionality(noun, "Noun", unorderedWebLinks)});


