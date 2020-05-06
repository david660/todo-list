window.onload = initAll;

function initAll() {

  let submit=document.querySelector(".btn");

  submit.addEventListener("click", ()=>{
    action();
  });

}

function action(){
  const span=document.createElement("SPAN");
  let spanText=document.createTextNode("\u00D7");
  span.className="close";
  
  const text=document.querySelector(".text");
    const order=document.querySelector(".order");
  const list=document.createElement("LI");
  const values=document.createTextNode(text.value);
  
  if (text.value!==""){
    span.appendChild(spanText);
    
    list.appendChild(values);
    list.appendChild(span);
    list.classList.add("dis");
  order.appendChild(list);
  }
  text.value=""; 

  
  const closeIt=document.querySelectorAll(".close");

  closeIt.forEach((close)=>{
    close.addEventListener("click", ()=>{
      order.removeChild(close.parentElement);
    });
  });    
}