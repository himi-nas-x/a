var applicationKey = "c6303cf3b67a87e2634b6f7055ab844e526fdcf8798a6bb4ced647e1b6c515eb";
var clientKey = "6128fb02f2b1fb6396781df6c10fd465202e5442fc4ec6179240dd90bb1720d2";

var ncmb = new NCMB(applicationKey, clientKey);

var appcount = applist.length;

function login(){

    let userclass = ncmb.DataStore('login');
    let user = getElementById("name").value;
    let pass = getElementById("pass").value;
    let item = userclass
      .fetchById(user)
      .then(item => {
        alert('データあり');
      })
      .catch(e => {
        alert('データなし');
      });

}

function login2(){

    var userclass = ncmb.DataStore("login");
    let user = getElementById("name").value;
    let pass = getElementById("pass").value;
    alert(user);
    alert(pass);
//     userclass.equalTo("ID", user)
//         .order("pass",true)
//         .fetchAll()
//         .then(function(results){
//             let pass2 = userclass.get("pass")
//         })
//         .catch(function(err){
//             console.log(err);
//         });

//     alert(pass2);
}

function dellogin(){
    const login = document.getElementById('login'); 
    login.remove();
}

function start(){ //初期動作

    for(i=0;i<appcount;i++){ //追加
        
        let app = document.createElement("input"); //input要素を追加

        app.setAttribute("type","button"); //typeをbuttonに設定
        app.setAttribute("class","app"); //classをappに設定
        app.setAttribute("id","app"+i); //idをapp+iに設定
        app.setAttribute("value",applist[i[0]]); //ボタンに文字を付与
        app.setAttribute("src",applist[i[1]]); //ボタンにリンクを付与

        let appdiv = document.getElementById("main"); //appを追加する親要素を取得
        appdiv.appendChild(app);

    }    

}