function rangePrint(x, z, y){
    for (var i = x; i < z; i+=y){
        console.log(i);
    }
}
rangePrint(2, 10, 2);

function rangePrint2(x, z, y){
    if(!z){
        z = x;
        x = 0;
    }
    if(!y){
        y = 1;
    }
    for (var i = x; i < z; i+=y){
        console.log(i);
    }
}
rangePrint2(4, 8);
rangePrint2(4);