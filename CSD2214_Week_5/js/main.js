// Your code here!
function myFunction(a, b){
    return a+b;
}
function arrays(){
    var pens;
    pens = ["red", "orange", "green", "blue", "purple"];
    console.log(pens);
    console.log(pens[0]);
    for (i = 0; i < pens.length; i++) {
        alert(pens[i]);
    }
    alert("Length of array is :" + pens.length);
    /*
    pens = new Array("red", "orange", "green", "blue", "purple");
    markers = pens;
    console.log(markers);
    console.log(markers[0]);
    var i;
    for (i = 0; i < markers.length; i++) {
        alert(markers[i]);
    }
    alert("Length of array is :", + markers.length);*/
}