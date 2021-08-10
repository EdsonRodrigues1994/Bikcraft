if (window.SimpleSlide){
  new SimpleSlide({
    slide:"quote",
    time: 5000
  });

  new SimpleSlide({
    slide:"portfolio",
    nav: true,
    time: 5000
  });
}

if(window.SimpleAnime){
  new SimpleAnime({
  });
}

if(window.SimpleForm){
  new SimpleForm({
    form: ".formphp",
    button: "#enviar",
    erro: "<div id='form-erro'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente para o email edinho.1994@yahoo.com.br</p></div>",
    sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entrarei em contato com você.</p></div>",
  });
};