const disp_hex = document.querySelector('#hex_h2'); 
const button = document.querySelector('button');
const hex_list = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

button.addEventListener("click", ()=>{  
  let hex_code = "#";
  for (let i=0; i<6; i++){
    hex_code += hex_list[Math.floor(Math.random()*hex_list.length)];    
  }
  document.body.style.backgroundColor = hex_code;
  disp_hex.innerHTML = hex_code;
});

