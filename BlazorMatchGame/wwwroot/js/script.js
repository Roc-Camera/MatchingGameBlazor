function ScriptAlert(message) {
    alert(message);
}

  function HelloWorld(){
    console.log('hello world');
}
 function displayRandom(randomIdName){
    console.log(randomIdName);
    var my = document.getElementById(randomIdName);
    my.style.visibility = "visible";
};
function closePreRandom(id)
{
    var you = document.getElementById(id)
    you.style.visibility = "hidden";
}