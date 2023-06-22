 const todoitems = document.getElementsByClassName("to-do-items")[0];
 const input=document.getElementById("input");
 const trashicon=document.getElementById("trash");
 input.addEventListener("keydown", function(event){
  if(event.key === "Enter")
  addItem();  
 })
 function addItem(){
    var divParent=document.createElement("div");
    var divChild = document.createElement("div");
    var checkicon = document.createElement("i"); 
    var trashicon = document.createElement("i"); 
    divParent.className="item";
    divParent.innerHTML='<div>'+input.value+'</div>';
     checkicon.className="fa-sharp fa-solid fa-check";
     checkicon.style.color="lightgray";
     checkicon.addEventListener("click", function(){
        checkicon.style.color="limegreen";
     })
     divChild.appendChild(checkicon);
     trashicon.className="fas fa-trash";
     trashicon.style.color="darkgray";
     trashicon.addEventListener("click", function(){
        divParent.remove();
     })
    divChild.appendChild(trashicon);
    divParent.appendChild(divChild);
    todoitems.appendChild(divParent);
    input.value=''; 
    }