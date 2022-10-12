function logSubmit(event) {
    let x = document.forms["myform"]["year"].value;
    if(x%4==0)
    {   alert("entered year is leap year")
    }
    else
    {   alert("entered year is not a leap year")
    }
}



const form = document.getElementById('form');

form.addEventListener('submit', logSubmit);
