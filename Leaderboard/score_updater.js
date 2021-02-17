let index = 0;
let leader_num = document.querySelector("#leader_num");

leader_num.addEventListener("change",function(){  
  index = Number(leader_num.value);  
  document.querySelector('#label_name').innerHTML = "Place "+(index)+":";
  document.querySelector('#label_score').innerHTML = "Score "+(index)+":";
});

let leader_name = document.querySelector('#leader_name');
leader_name.addEventListener("change", function(){
  let name = "#name"+(index);  
  document.querySelector(name).innerHTML = leader_name.value;
});

let leader_score = document.querySelector("#leader_score");
leader_score.addEventListener("change", function(){
  let score = "#pts"+(index);
  document.querySelector(score).innerHTML = leader_score.value;
});


