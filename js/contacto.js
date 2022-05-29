const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

document.querySelector('.input[name="txtnombre"]').addEventListener("keypress",function(event)
{
    /* validar ingreso de datos solo texto */
    var ascii=event.keyCode || event.wich;
    if((ascii>=48 && ascii<=57) || (ascii==46) || (ascii==64))
    {
        window.event.preventDefault();
        return;
    }
});

document.querySelector('.input[name="txtfono"]').addEventListener("keypress",function(event)
{
    var longitud=document.querySelector('input[name="txtfono"]').value.length;
    if(longitud>=9)
    {
        window.event.preventDefault();
        return;
    }
    /* validar el ingreso de datos solo numeros en dni*/
    var ascii=event.keyCode || event.wich;
    if(ascii<48 || ascii>57) 
    {
        window.event.preventDefault();
        return;        
    }
});

function nuevo(frm){
  test=/^\s*$/;
  if(test.test(frm.txtnombre.value))
  {
      window.event.preventDefault()
      alert("Ingrese Nombre");
      return;
  }

  test=/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/
    if(!test.test(frm.txtemail.value))
    {
        window.event.preventDefault();
        alert("Ingrese un email valido");
       return;
    }
    test=/^\d{9}$/;

if(!test.test(frm.txtfono.value))
{
    window.event.preventDefault();
    alert("Ingrese numero de celular valido");
    return;
}
  alert("Gracias, nos pondremos en contacto los antes posible");
}