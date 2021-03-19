/* SE os campos de nome && e-mail estiverem preenchidos
      envie os dados
   SENÃO
      peça a usuária que preencha os campos nome e e-mail */
      document.getElementById("btnEnviar").addEventListener("click", validaFormulario)

      function validaFormulario(){

        if(document.getElementById("nome").value != "" &&
           document.getElementById("email").value != "" &&
           document.getElementById("telefone").value != "" ){
      
          alert("Dados preenchidos com sucesso. Aguarde as novidades!")
        }else{
          alert("Por favor, preencha os campos nome e email.")
        }
      }
      