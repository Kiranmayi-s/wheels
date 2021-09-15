function fun(card,img){
    if(document.getElementById(card).style.height === "350px"){
    document.getElementById(card).style.height = "250px"
    document.getElementById(card).style.width = "250px";
    document.getElementById(img).style.height = "150px";
    document.getElementById(img).style.width = "150px";
    document.getElementById(img).style.marginLeft = "50px";
    }else{
    document.getElementById(card).style.height = "350px";
    document.getElementById(card).style.width = "250px";
    document.getElementById(img).style.height = "200px";
    document.getElementById(img).style.width = "200px";
    document.getElementById(img).style.marginLeft = "25px";
    }
}
function slidefun(){
        document.getElementById("img1").src = "wgu.png";
        document.getElementById("img2").src = "wjr.png";
        document.getElementById("img3").src = "wp6.png";
        document.getElementById("content1").innerHTML = "Tires can include natural<b> rubber, synthetic rubber, steel, nylon, silica (derived from sand), polyester, carbon</b> etc."
        document.getElementById("content2").innerHTML = "A modern tire on a passenger car will contain up to <b>25 components and also as many as 12 different</b>."
        document.getElementById("content3").innerHTML = "Steel wire is used in the tire belts and beads, and the<b> plies for truck tires</b>. The belts under the tread serve to <b>stiffen</b>.";
        document.getElementById("revslide").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqQA8DCzSOlHz3KKV7vEB6_-DcAdoAioBnSQju2vwz5B9TutYyKQtOSOVVJwusB6NDgw0&usqp=CAU";
        document.getElementById("revslide").style.height = "30px";
        document.getElementById("revslide").style.width = "35px";
        document.getElementById("slidefront").src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWh2FEvzrQgGsbDLY9YE9HGAj1sBnT2_PUjg&usqp=CAU";
    }
function sliderev(){
        document. location. reload();
    }

