var tbdans=[],tbdqs=[];
var qs=[],ans=[];
var x = 0;

var toggle = [0,0];

function add(){


    let inputqs = prompt("追加する問題を入力してください");

    if(inputqs.replace(/[ 　]/g, "")==""){
        alert("内容を入力してください");
        return;
    }

    let inputans = prompt("追加する回答を入力してください");

    if(inputans.replace(/[ 　]/g, "")==""){
        alert("内容を入力してください");
        return;
    }

    tbdans.push(inputans);
    tbdqs.push(inputqs);

    let nediv = document.createElement("div");
    nediv.setAttribute("id" , "div" + x);
    nediv.setAttribute("class","addp");

    let pd = document.getElementById("adddiv");

    pd.appendChild(nediv);


    let nepq = document.createElement("p");
    let nepa = document.createElement("p");

    let txtq = document.createTextNode(inputqs);
    let txta = document.createTextNode(inputans);

    nepq.appendChild(txtq);
    nepa.appendChild(txta);

    nepq.setAttribute("id","qp"+x);
    nepa.setAttribute("id","ap"+x);

    nepq.setAttribute("class","qp");
    nepa.setAttribute("class","ap");

    nediv.insertBefore(nepq,nediv.firstChild);
    nediv.insertBefore(nepa,nepq.nextSibling);

    x++;
}

function start(){

    const del = document.getElementById("adddiv");
    randcheck = document.getElementById("rndchbox").checked;
    if(tbdqs.length==0){
        alert("追加を押して暗記データを入力してください。");
    }else if(tbdqs.length>0 && randcheck == true){

        let count = tbdqs.length;
        let ind = [];
        for(let i=0;i<count;i++){
            ind[i] = i;
        }
        ind.sort(()=> Math.random() - 0.5);
        
        for(let i=0;i<=count;i++){
            [qs[ind[i]] ,ans[ind[i]]] = [tbdqs[i],ans[i]];
        }
        location.href='../anki/anki.html';
    }else if(tbdqs.length>0 && randcheck == false){
        for(let i=0;i<tbdqs.length;i++){
            qs[i] = tbdqs[i];
        }
        del.remove();
        startanki();
        startanki2();
    }
    /*for(let i=0;i<qs2.length;i++){
        alert(qs3[i] + ',' + ans3[i]);*/
}

function rndqs(){
    let button = document.getElementById("rndbutton");
    if(toggle[0]==0){
        toggle[0] = 1;
        button.style.background = "red";
    }else if(toggle[0]==1){
        toggle[0]=0;
        button.style.background = "skyblue";
    }
}

function rndqs(){
    let button = document.getElementById("inputbutton");
    if(toggle[1]==0){
        toggle[1] = 1;
        button.style.background = "blue";
    }else if(toggle[1]==1){
        toggle[1]=0;
        button.style.background = "skyblue";
    }
}

