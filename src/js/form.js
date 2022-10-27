//Archivo solo para formularios

const form = document.getElementById('contactForm') || document.getElementById('register')
form.addEventListener('submit', async function getFormData(e) {
  e.preventDefault(); 
  const form = document.getElementById(e.target.id),
        formData = new FormData(form);

  //Esto sirve para mostrar por consola los datos que están contenidos en el formulario, después se va a eliminar.
  for (const pair of formData.entries()) {
  console.log(`${pair[0]}, ${pair[1]}`);
  }

  //Código para enviar datos al backend
/* const response = await fetch(e.target.id === 'contactForm'? 'url para contactForm' : 'url para register', {
      method: 'POST',
      body: formData
  });

  if(response.ok){
    let json = await response.json();
    alert(json.message)
  }
  else {
    alert("Error:" + response.status);
  } */
})
