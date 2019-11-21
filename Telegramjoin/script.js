if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
var firestore = firebase.firestore();

function validateform()
{
    console.log("validating")
    getdata()
}

function getdata(){
    var name = document.getElementById("name").value
    var phone_no = document.getElementById("phone").value
    var r_name_1 = document.getElementById("name1").value
    var r_phone_no_1 = document.getElementById("phone1").value
    var r_name_2 = document.getElementById("name2").value
    var r_phone_no_2 = document.getElementById("phone2").value

    var data = {
        "name":name,
        "phone_no":phone_no,
        "r_name_1":r_name_1,
        "r_phone_no_1":r_phone_no_1,
        "r_name_2":r_name_2,
        "r_phone_no_2":r_phone_no_2,
    }
    console.log(data)
    if(data.r_phone_no_1 != data.r_phone_no_2)
    {
        writeData(data)
    }
    else
    {
        console.log("error")
    }
    
    
}


var docRef = firestore.collection("Users");
function writeData(data){
    docRef.add(data).then(function(){
        console.log("sucessfully added")
        window.location.replace("https://t.me/joinchat/G1XdxlLKY22uMPfdKL0VUw");
    }).catch(function(error){
        console.log(error)
    });
    
}



