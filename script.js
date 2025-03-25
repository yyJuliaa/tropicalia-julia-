
document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiuFonteBotao= document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

    });

    diminuiuFonteBotao.addEventListener('click', function(){
           tamanhoAtualFonte -= 0.1;
           document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
   
       });
});

