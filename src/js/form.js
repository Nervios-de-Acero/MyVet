//Archivo solo para formularios
const validateInputFromForm = (pass,key,value) => {
  const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        nameReg = /^[a-zA-ZÀ-ÿ]{2,20}\s?/,
        passReg = /((?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.,;:!"#$%&'()*\+\-<=>?@[\]/\\^_`{|}])){8,12}/,
        phoneReg = /^\d+$/;

  if(key === 'user_mail' || key === 'contact_email') {
    return emailReg.test(value)
  }
  if(key === 'user_password'){
    return passReg.test(value)
  }
  if(key === 'user_password2'){
    return value === pass
  }
  if(key === 'contact_phone'){
    return phoneReg.test(value)
  }
  if(key === 'contact_subject' || key === 'contact_message'){
    return value.length > 0 
  }
  if(key !== 'contact_species'){
    return nameReg.test(value)
  }
}

const formNod = document.getElementById('contactForm') || document.getElementById('register') 
const submitBtn = document.getElementById('registerSubmit') || document.getElementById('contactSubmit')

submitBtn.addEventListener('click', async function getFormData(e) {
  e.preventDefault()
  const formData = new FormData(formNod),
        userPass = formData.get('user_password'); 

  //Esto ahora sirve para ir validando cada input.
  let count = 0;
  const falseValues = []
  for (const pair of formData.entries()) {
    if(validateInputFromForm(userPass,pair[0],pair[1])){
      count += 1;
    }
    else if(pair[0] !== 'contact_species'){
      falseValues.push(pair[0])
  }}
  if((formNod.id === 'contactForm' && count < 6) || (formNod.id === 'register' && count < 5)){
    for(el of falseValues) {
      document.getElementById(el).className += ' warningBorder';
      //CORREGIR ESTO, NO FUNCIONA EN REGISTER
      if(formNod.id === 'contactForm'){
        let element = document.getElementById(el)
        element.nextElementSibling.className += ' warningMessage';
      }
      else {
        let element = document.getElementById(el)
        let parent = element.closest('.inputSpanCtn');
        let span = parent.querySelector('.warning');
        span.className += ' warningMessage';
      }
    }
  }
  else{ 
    alert("Formulario enviado exitosamente") 

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
  }
})
