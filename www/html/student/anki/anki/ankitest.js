var qs2 = [];
var ans2 = [];

function add(){

    let qs = prompt("追加する単語を入力してください");

    if(qs.replace(/[ 　]/g, "")==""){
        alert("内容を入力してください");
        return;
    }

    let ans = prompt("追加する回答を入力してください");

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