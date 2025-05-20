function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
    
    // Opcional: impedir rolagem da página quando o menu está aberto
    document.body.classList.toggle('menu-open');
}

// Fechar o menu quando um link é clicado
document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu-link');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    });
});


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
    const url = 'Felipe Mendes Campos CVP.pdf'; // coloque o nome do seu arquivo aqui

    // Cria um elemento <a> temporário
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Felipe Mendes Campos CVP.pdf'; // nome do arquivo ao baixar
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  // Adicionar indicador visual para projetos clicáveis
document.addEventListener('DOMContentLoaded', function() {
    const projectLinks = document.querySelectorAll('.project-link');
    
    projectLinks.forEach(link => {
        // Criar um elemento de ícone para indicar que é clicável
        const linkIcon = document.createElement('i');
        linkIcon.className = 'bx bx-link-external';
        linkIcon.style.position = 'absolute';
        linkIcon.style.top = '10px';
        linkIcon.style.right = '10px';
        linkIcon.style.fontSize = '24px';
        linkIcon.style.color = 'var(--primaria)';
        linkIcon.style.opacity = '0';
        linkIcon.style.transition = 'opacity 0.3s ease';
        
        // Adicionar o ícone ao container do projeto
        link.style.position = 'relative';
        link.appendChild(linkIcon);
        
        // Mostrar o ícone ao passar o mouse
        link.addEventListener('mouseenter', () => {
            linkIcon.style.opacity = '1';
        });
        
        link.addEventListener('mouseleave', () => {
            linkIcon.style.opacity = '0';
        });
    });
});
