// // Event Bubbling
// // Ek mechanism hai.
// // Jab event trigger hota hai (e.g. button click), wo target element se parent → grandparent → document tak propagate karta hai.
// // Ye browser ka default behaviour hai.
// // 👉 Example: Button click → Button → Div → Body → Document

// // Event Delegation
// // Ye ek technique hai jo bubbling ka use karti hai.
// // Instead of har child element pe listener lagane ke, hum parent pe ek hi listener lagate hain aur child events ko handle kar lete hain.
// // Code ko optimize aur clean banane ke liye use hota hai.
// // 👉 Example:<ul> pe listener lagakar saare <li> ke clicks handle karna.

// let btn=document.querySelector("button");
// let ul=document.querySelector("ul");
// let input=document.querySelector("input");


// // craete and add  elemnts
// btn.addEventListener("click",function(){
//     let item=document.createElement("li");
//     item.innerText=input.value;
   

//     let delbut=document.createElement("button");
//     delbut.innerText="delete";
//     delbut.classList.add("delete");
//     item.appendChild(delbut);

//     ul.appendChild(item);
//     console.log(input.value);
//     input.value="";
// });


// // Event Delegation
// //Event Delegation ek technique hai jisme hum har chhote-chhote child elements par alag-alag event listener lagane ke bajaye sirf ek event listener parent element par lagate hain.
// // Jab child element par event (jaise click) hota hai, toh event bubbling ke through wo parent tak pahunchta hai, aur parent usko handle kar leta hai.
// // Event Delegation is a technique in JavaScript where instead of adding event listeners to multiple child elements, you add a single event listener to their parent element.
// // Because of event bubbling, the event naturally propagates up, and the parent can catch events from its children.
 
// ul.addEventListener("click",function(event){
//     console.log(event.target);      //kis chej pr trigger kra hai 
//     console.log("button clicked");
//     console.log(event.target.nodeName);    //node btata ha kisne trgger kiya
     
//     // ese b kr skte ha ahgr value iski button ke equal hp toh delete
//     // if(event.target.nodeName=="BUTTON"){
//     //     console.log("delete");
//     // }
//     // else{
//     //     console.log("dont't delete");
//     // }

// })


// // delete buttons 
// // yeh sirf jo elements hai phle se jese eat sleep inke lie kaam krega jb hum new elements add krege unke lie nhi kaam krega 
// // isslie we do eveent delegtaion in line 26

// let delbtns=document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//        let par=this.parentElement;
//        console.log(par);
//        par.remove();
//     });
// }



let btn = document.querySelector("#addBtn");
let ul = document.querySelector("#taskList");
let input = document.querySelector("#taskInput");

// Add new task
btn.addEventListener("click", function () {
  if (input.value.trim() === "") return; // avoid empty tasks

  let item = document.createElement("li");
  item.innerHTML = `${input.value} <button class="delete">delete</button>`;
  ul.appendChild(item);

  input.value = "";
});

// Event Delegation → delete & complete feature
ul.addEventListener("click", function (event) {
  // Delete button clicked
  if (event.target.classList.contains("delete")) {
    let li = event.target.parentElement;
    li.remove();
  } 
  // Mark task as completed (click on li text, not button)
  else if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
});
