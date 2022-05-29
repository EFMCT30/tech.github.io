document.querySelector('.controls[name="txtnombre"]').addEventListener("keypress",function(event)
{
    /* validar ingreso de datos solo texto */
    var ascii=event.keyCode || event.wich;
    if((ascii>=48 && ascii<=57) || (ascii==46) || (ascii==64))
    {
        window.event.preventDefault();
        return;
    }
});

document.querySelector('.controls[name="txtapellido"]').addEventListener("keypress",function(event)
{
    /* validar ingreso de datos solo texto */
    var ascii=event.keyCode || event.wich;
    if((ascii>=48 && ascii<=57) || (ascii==46) || (ascii==64))
    {
        window.event.preventDefault();
        return;
    }
});

document.querySelector('.controls[name="txtfono"]').addEventListener("keypress",function(event)
{
    var longitud=document.querySelector('.controls[name="txtfono"]').value.length;
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

document.querySelector('.controls[name="txtdni"]').addEventListener("keypress",function(event)
{
    var longitud=document.querySelector('.controls[name="txtdni"]').value.length;
    if(longitud>=8)
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

	let test=/^\d{8}$/;
if(!test.test(frm.txtdni.value))
{
    window.event.preventDefault()
    alert("Ingrese DNI");
    return; 
}
  test=/^\s*$/;
  if(test.test(frm.txtnombre.value))
  {
      window.event.preventDefault()
      alert("Ingrese Nombre");
      return;
  }
	test=/^\s*$/;
	if(test.test(frm.txtapellido.value))
	{
		window.event.preventDefault()
		alert("Ingrese Apellido");
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
test=/^\s*$/;
if(test.test(frm.txtdireccion.value))
{
    window.event.preventDefault()
    alert("Ingrese su dirección");
    return;
}
  alert("Reclamo registrado correctamente");
}