

function enviarWhats(event){

    event.preventDefault()
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('text').value;
    const telefone = '5511989525014'

    const texto = `Olá, me chamo ${nome}}, ${mensagem}`
    const msgFormatada = encodeURIComponent(texto)

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`

    window.open(url, '_blank')
}

function baixarArquivo() {
    // Caminho para o arquivo (pode ser local ou online)
    const url = 'Felipe Mendes Campos CV.pdf'; // coloque o nome do seu arquivo aqui

    // Cria um elemento <a> temporário
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Felipe Mendes Campos CV.pdf'; // nome do arquivo ao baixar
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }