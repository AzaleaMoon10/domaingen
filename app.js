const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon',"camiones"];
const domains = ['com', 'es', 'dev', 'io', 'net'];

let webLinkList = [[],[],[],[],[]];

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
            <div class="row">
                <div class="col card-container"></div>
                <div class="col card-container"></div>
                <div class="col card-container"></div>
                <div class="col card-container"></div>
                <div class="col card-container"></div>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
        <script src="./app.js"></script>`;

function cardGen(cards) {
    for(i in cards){
        cards[i].innerHTML = `<div class="card" style="width: 18rem;">
                                    <div class="card-body">
                                        <h5 class="card-title" id="card-title-${i}" >Card title</h5>
                                        <p class="card-text" id="card-text-${i}"></p>
                                    </div>
                                </div>`;
    }
}

function printCardText(arr) {
    let auxCounter = 0;
    for(i of arr) {
        document.getElementById(`card-title-${auxCounter}`).innerHTML = "Domain: " + i[0].split(".")[1];
        let text ="";
        for(el of i){
            text = text.concat("<br><br>", el);
        }
           document.getElementById(`card-text-${auxCounter}`).innerHTML = text;
        auxCounter++;
    }
}



for(pr of pronoun){
    for(aj of adj){
        for(nn of noun){
            auxCounter = 0;
            for(dom of domains){
                webLinkList[auxCounter].push(pr.concat(aj,nn,".",dom));
                auxCounter++;
            }
        }
    }
}

document.getElementById("body").innerHTML = body;
cards = document.getElementsByClassName("card-container");
cardGen(cards);
printCardText(webLinkList);
