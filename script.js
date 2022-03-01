var li = document.querySelectorAll("li");

function getList(){
//this function determines which list the input goes into based on the dropdown menu 
    var listSel = document.getElementById("list-type").value;
    var listOutputs = document.getElementsByName("list-output");

     if(listSel === "To Do Today"){
         return listOutputs[0].id;
     } else if(listSel === "To Do Tomorrow"){
        return listOutputs[1].id;
     } else {
        return listOutputs[2].id;
     } 
}

 function addItem(){
     //this function adds a new item to a list everytime I press the button 
      var inputVal = document.getElementById("input").value;
      var node = document.createElement("LI"); 
      var textNode = document.createTextNode(inputVal);
     node.appendChild(textNode);
     document.getElementById(getList()).appendChild(node);
     //this is supposed to use the returned list# from the getList function, but it returns null
     document.getElementById("input").value = " ";
     console.log(getList())
     strikeThrough(node); //adds strikethrough property to each new node as it is created
     growBig(node);
     changeBullet(node);
   
 }

 function getListR(){
    //this function determines which list the input goes into based on the dropdown menu 
        var listSel = document.getElementById("list-type-r").value;
        var listOutputs = document.getElementsByName("list-output");
    
         if(listSel === "To Do Today"){
             return listOutputs[0].id;
         } else if(listSel === "To Do Tomorrow"){
            return listOutputs[1].id;
         } else {
            return listOutputs[2].id;
         } 
    }

function strikeThrough(item){
    item.addEventListener("click", function(){
        item.classList.toggle("strike");
    });//this function strikes thorugh an item 
}

 function growBig(item){
     item.classList.toggle("grow-big");
 }

 function changeBullet(item){
     item.classList.toggle("ul");
 }

li.forEach((e) => {growBig(e); });

li.forEach((e) => {strikeThrough(e); });//Applies strikethrough property to each list item

li.forEach((e) => {changeBullet(e); });





 function removeItem(){
    var items = document.getElementById("lists-div");
    var sItems = items.getElementsByClassName("strike");

     while (sItems[0]) {
        sItems[0].parentNode.removeChild(sItems[0]);
      }
 }//Removes all strike through items 

