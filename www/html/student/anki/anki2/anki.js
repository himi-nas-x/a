var x = 1;
var y = 0;
var qs2 = [];
var ans2 = [];
var qs3 = [];
var ans3 = [];
var qs,ans;
var randcheck = 0;
var page = 0;
var i;

var ncmbController = {
 APPLICATION_KEY: "YOUR_APPLICATION_KEY",
 CLIENT_KEY: "YOUR_CLIENT_KEY"
}

function add(){

    qs = prompt("追加する単語を選んでください");

    if(qs.replace(/[ 　]/g, "")==""){
        alert("内容を入力してください");
        return;
    }

    ans = prompt("回答を入力してください。");

    if(ans.replace(/[ 　]/g, "")==""){
        alert("内容を入力してください");
        return;
    }

    ans2.push(ans);
    qs2.push(qs);
    

    let new1 = document.createElement("div"); //div要素を作成
    new1.setAttribute("id","div"+x); //divにid付与
    new1.setAttribute("class","divdiv");

    let bd = document.getElementById("divzone");  //bodyを取得

    bd.appendChild(new1); //bodyの最後にdivを配置


    let newp1 = document.createElement("p"); //p要素を追加(question用)
    let newp2 = document.createElement("p"); //p要素を追加(anser用)

    let txtqs = document.createTextNode(qs); //テキストノード作成(question)
    let txtans = document.createTextNode(ans); //テキストノード作成(anser)

    newp1.appendChild(txtqs); //p要素にテキストノードをセット(question)
    newp2.appendChild(txtans); //p要素にテキストノードをセット(anser)

    newp1.setAttribute("id","qp"+x); //p要素にIDを付与(question)
    newp2.setAttribute("id","ap"+x); //p要素にIDを付与(anser)

    newp1.setAttribute("class","qp");
    newp2.setAttribute("class","ap");

    new1.insertBefore(newp1, new1.firstChild); //作成したdivの最初にp要素を配置(question)
    
    new1.insertBefore(newp2, newp1.nextSibling); //作成したdivのquestion用pの次にp要素を配置(anser)

    x = x + 1;
    
}

function valuecheck(){

    if( document.chbox.elements[0].checked ){
        randcheck = 1;
    }else{
        randcheck = 0;
    }
    alert(randcheck);

}


function save(){

    var Score = this.ncmb.DataStore("ScoreClass");

}

function startanki(){
    alert(qs3[0]);
    let h1 = document.getElementById("qsans");
    let ansp = document.getElementById("ansp");

    h1.innerHTML(qs3[page]);
    ansp.innerHTML(ans3[page]);
}

function startanki2(){
    let x = 1;
    for(i=0;i<qs3.length;i++){
        let page = document.createElement("input");
        page.setAttribute("class","page");
        page.setAttribute("value",x);
        page.setAttribute("id","page"+x);
        
        let source = document.getElementById("div"+i);
        let oya = document.getElementById("page");

        oya.insertBefore(page,source.nextSibling);
        x++;
    }
}

function start(){

    const del = document.getElementById("adddiv");
    randcheck = document.getElementById("chbox").checked;
    if(qs2.length==0){
        alert("追加を押して暗記データを入力してください。");
    }else if(qs2.length>0 && randcheck == true){

        let count = qs2.length;
        let ind = [];
        for(let i=0;i<count;i++){
            ind[i] = i;
        }
        ind.sort(()=> Math.random() - 0.5);
        
        for(let i=0;i<=count;i++){
            [qs3[ind[i]] ,ans3[ind[i]]] = [qs2[i],ans2[i]];
        }
        location.href='../anki/anki.html';
    }else if(qs2.length>0 && randcheck == false){
        for(let i=0;i<qs2.length;i++){
            qs3[i] = qs2[i];
        }
        del.remove();
        startanki();
        startanki2();
    }
    /*for(let i=0;i<qs2.length;i++){
        alert(qs3[i] + ',' + ans3[i]);*/
}

function next(){
    if(page>0){
        page++;
        startanki();
    }
}

function prev(){
    if(page<qs3.length){
        page--;
        startanki();
    }
}


