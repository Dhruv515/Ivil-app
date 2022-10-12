function validateForm() {
    let x = document.getElementById("number").value;
    if (x.length != 10 && x.length!=0) {
        document.getElementById('number').value="";
        document.getElementById('num').innerHTML="***Number must have 10 digits";
        return false;
    }

}


function logSubmit(event) {
    log.textContent = `Sumbitted sucessfully :)`;
    event.preventDefault();
}

function Time()
{
    log.textContent=``;
    
}



  
  

  const form = document.getElementById('form');
  const log = document.getElementById('log');
  form.addEventListener('submit', logSubmit);
  setInterval(Time,3000);
  