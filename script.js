document.getElementById('contact-form').addEventListener('submit',function(event){
    event.preventDefault():
const formulario = neq FormData(this)

emailjs.send().them(response =>
{
    document.getElementById('response-message').innerText = 'Mensagem enviada com Sucesso'
    this.reset();

})
.catch(errr=>{
    document.getElementById('response-message').innerText = 'Erro ao Enviar a mensagem'
    console.error('Erro ao Enviar o e-mail',error)
} 
})

