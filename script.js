document.querySelector("form").addEventListener("submit",myfunction);
// JSON.parse(localStorage.getItem(allStudents))||[];
let data=JSON.parse(localStorage.getItem("allStudents"))||[];

function myfunction(event){
  event.preventDefault();
  var avatar=document.querySelector("#image").value;
  

  var name =document.querySelector("#name").value;

  var batch=document.querySelector("#batch").value;
  var course = document.querySelector("#course").value;

  var unit = document.querySelector("#unit").value;
  let obj={ 
    avatar,
    name,
    batch,
    course,
    unit
  }
  data.push(obj)
  localStorage.setItem("allStudents",JSON.stringify(data))


 appendData(data)
  
// localStorage.setItem("allStudents" ,JSON.stringify(tr));

// console.log(tr);


}


let tbody=document.getElementById("tbody")
function appendData(data){
   tbody.innerHTML=null;
   data.map(function(elem){

    var tr = document.createElement("tr");
    var td1 =document.createElement("td");
    var student_avatar=document.createElement("img");
    student_avatar.setAttribute("src",elem.avatar)
    td1.append(student_avatar)

    var td2 =document.createElement("td");
    td2.innerText=elem.name;

    var td3=document.createElement("td")
    td3.innerText= elem.batch;

    var td4 = document.createElement("td");
    td4.innerText = elem.course;

    var td5 = document.createElement("td");
    td5.innerText = elem.unit;

    var td6=document.createElement("td")
    var btn= document.createElement("button"); 
    btn.innerText = "DELETE";
    btn.addEventListener("click",function(){
        myCall(elem)
      });

    td6.append(btn)

    tr.append(td1,td2,td3,td4,td5,td6);
    tbody.append(tr);


   })
 }

 appendData(data)

function myCall(elem){
  data = data.filter(function(element){
    return element.name != elem.name
  })

  localStorage.setItem("allStudents", JSON.stringify(data))
  appendData(data)
}