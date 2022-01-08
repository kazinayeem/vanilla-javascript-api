fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(json =>{
    var text =''
    for(var i = 0;i<json.length;i++){
      text+=`<div class="my-2 card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">${json[i].id}</h5>
    <p class="card-text">${json[i].title}</p>
    <button onclick="update(${json[i].id})" class="btn btn-primary">id</button>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>`
    }
    
    
    
    
document.getElementById("h1").innerHTML = text;
    console.log(json)
  })
  
 function update (id){
   var name =    confirm("your id is "+ id)
    if(name=== true){
      console.log("true")
    }else{
      console.log("false")
    }
    }
  
  
  