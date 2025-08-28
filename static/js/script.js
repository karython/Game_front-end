
let faseAtual = 1;
const totalFases = 20;

const fases = [
     {
        titulo: "Fase 1: O Despertar Digital",
        historia: "Você é um Desenvolvedor Cósmico que acabou de chegar ao Planeta HTML-5. A civilização local perdeu toda sua estrutura digital após uma tempestade cósmica. Sua primeira missão é recriar a estrutura básica de uma página web para restaurar a comunicação planetária.",
        desafio: "🎯 Desafio: Crie uma estrutura HTML básica com título h1 'Bem-vindos ao Planeta HTML-5' e um parágrafo explicando sua missão como desenvolvedor cósmico.",
        solucaoEsperada: ["h1", "Bem-vindos ao Planeta HTML-5", "p"],
        dica: "Lembre-se que todo texto precisa estar dentro de tags apropriadas. Para títulos principais, use a tag de cabeçalho de nível 1, e para textos descritivos, use a tag de parágrafo."
    },
    {
        titulo: "Fase 2: Os Elementos Perdidos",
        historia: "Excelente trabalho! Agora os habitantes do planeta conseguem se comunicar novamente. Porém, eles precisam de uma lista de suprimentos essenciais para reconstruir sua sociedade digital. Você deve criar uma lista organizada.",
        desafio: "🎯 Desafio: Crie uma lista não ordenada (ul) com pelo menos 3 itens de suprimentos digitais (como 'Processadores Quânticos', 'Cabos de Fibra Óptica', 'Telas Holográficas').",
        solucaoEsperada: ["ul", "li", "Processadores", "Cabos", "Telas"],
        dica: "Para criar listas em HTML, você precisa de um elemento contenedor principal e elementos filhos para cada item da lista. Pense numa lista de compras!"
    },
    {
        titulo: "Fase 3: O Portal das Conexões",
        historia: "Os suprimentos foram organizados! Agora você precisa criar portais de navegação para conectar diferentes setores do planeta. Estes portais são conhecidos como 'links' no mundo digital.",
        desafio: "🎯 Desafio: Crie 3 links usando a tag <a> com href='#' apontando para 'Setor Residencial', 'Setor Comercial' e 'Setor Industrial'.",
        solucaoEsperada: ["a", "href", "Setor Residencial", "Setor Comercial", "Setor Industrial"],
        dica: "Os links em HTML precisam de um atributo que indica para onde apontar. Como são portais fictícios, use apenas o símbolo de hashtag como destino temporário."
    },
    {
        titulo: "Fase 4: A Galeria das Memórias",
        historia: "Os portais estão funcionando perfeitamente! Agora os habitantes querem preservar suas memórias através de imagens holográficas. Você deve criar uma galeria para exibir essas preciosas lembranças.",
        desafio: "🎯 Desafio: Adicione uma imagem usando <img> com src='https://via.placeholder.com/300x200/667eea/ffffff?text=Memoria+Cosmica' e um texto alternativo descritivo.",
        solucaoEsperada: ["img", "src", "placeholder", "alt"],
        dica: "Para exibir imagens, você precisa de uma tag especial que não possui fechamento. Lembre-se sempre de incluir um texto alternativo para acessibilidade!"
    },
    {
        titulo: "Fase 5: O Primeiro Toque de Estilo",
        historia: "Incrível! As memórias estão sendo preservadas. Mas os habitantes acham que tudo está muito sem vida. Eles ouviram falar de uma antiga arte chamada 'CSS' que pode dar cor e vida aos elementos digitais.",
        desafio: "🎯 Desafio: Adicione uma tag <style> no head e crie uma regra CSS que mude a cor do h1 para azul (#007BFF) e o tamanho da fonte para 2em.",
        solucaoEsperada: ["style", "h1", "color", "#007BFF", "font-size", "2em"],
        dica: "O CSS deve ficar dentro de uma tag especial no cabeçalho da página. Para aplicar estilos, você seleciona o elemento e define suas propriedades como cor e tamanho da fonte."
    },
    {
        titulo: "Fase 6: O Centro do Universo",
        historia: "Fantástico! Agora há cor no planeta. Os habitantes querem que tudo fique bem organizado e centralizado, como o centro de comando de uma nave espacial. É hora de aprender sobre alinhamento.",
        desafio: "🎯 Desafio: Centralize todo o conteúdo da página usando CSS. Adicione text-align: center ao body.",
        solucaoEsperada: ["body", "text-align", "center"],
        dica: "Para alinhar todo o conteúdo da página, você precisa aplicar um estilo ao elemento que contém toda a página. Existe uma propriedade CSS específica para alinhamento de texto."
    },
    {
        titulo: "Fase 7: A Caixa Mágica",
        historia: "Perfeito! Tudo está centralizado como o núcleo de uma estrela. Agora você descobriu um elemento misterioso chamado 'div' - uma caixa mágica que pode conter outros elementos e ser estilizada de formas incríveis.",
        desafio: "🎯 Desafio: Crie uma div com classe 'container' e adicione CSS para dar uma largura de 80%, margem automática, padding de 20px e uma borda de 2px solid azul.",
        solucaoEsperada: ["div", "class", "container", "width", "80%", "margin", "auto", "padding", "20px", "border"],
        dica: "A div é um contêiner versátil. Use classes para identificá-la no CSS. Para centralizar um elemento com largura definida, use margem automática. Não esqueça do espaçamento interno e da borda!"
    },
    {
        titulo: "Fase 8: O Reino das Cores",
        historia: "Magnífico! A caixa mágica está funcionando. Os habitantes querem explorar mais cores para tornar seu mundo mais vibrante. É hora de descobrir o poder dos gradientes e backgrounds.",
        desafio: "🎯 Desafio: Adicione um background gradient linear do azul (#667eea) para o roxo (#764ba2) ao body.",
        solucaoEsperada: ["background", "linear-gradient", "#667eea", "#764ba2"],
        dica: "Para criar fundos com gradiente, use a propriedade background com uma função especial que cria transições lineares entre cores. Defina o ângulo e as cores desejadas."
    },
    {
        titulo: "Fase 9: A Flexibilidade Cósmica",
        historia: "Espetacular! O planeta agora tem um céu colorido. Chegou a hora de aprender a organizar elementos de forma mais inteligente. Os antigos descobriram uma tecnologia chamada 'Flexbox' que permite controlar o layout como nunca antes.",
        desafio: "🎯 Desafio: Crie uma div com display: flex, justify-content: space-around e coloque 3 divs filhas dentro dela, cada uma com um texto diferente.",
        solucaoEsperada: ["display", "flex", "justify-content", "space-around"],
        dica: "O Flexbox é uma ferramenta poderosa de layout. Primeiro, transforme o elemento pai em flex, depois use propriedades para controlar como os filhos se distribuem no espaço disponível."
    },
    {
        titulo: "Fase 10: O Responsive Nebula",
        historia: "Incrível! Os elementos agora dançam em harmonia. Mas alguns habitantes acessam o portal através de dispositivos menores. Você precisa tornar tudo responsivo, adaptável a diferentes tamanhos de tela, como uma nebulosa que se adapta ao espaço.",
        desafio: "🎯 Desafio: Adicione uma media query para telas menores que 768px que mude a direção do flex para column.",
        solucaoEsperada: ["@media", "max-width", "768px", "flex-direction", "column"],
        dica: "As media queries permitem aplicar estilos condicionais baseados no tamanho da tela. Use a regra especial que começa com @ e defina uma largura máxima para ativar os estilos responsivos."
    },
    {
        titulo: "Fase 11: O JavaScript Awakens",
        historia: "Fantástico! Agora a interface se adapta a qualquer dispositivo. Mas os habitantes querem interatividade - eles querem que as coisas respondam ao toque, como mágica. É hora de despertar o poder do JavaScript!",
        desafio: "🎯 Desafio: Crie um botão que, ao ser clicado, exiba um alert com a mensagem 'Bem-vindos à Era Interativa!'.",
        solucaoEsperada: ["button", "onclick", "alert", "Bem-vindos"],
        dica: "Para adicionar interatividade, você precisa de um botão e um evento que responda ao clique. Use uma função JavaScript simples que mostra uma janela de alerta para o usuário."
    },
    {
        titulo: "Fase 12: O Manipulador de DOM",
        historia: "Sensacional! A primeira interação funcionou. Agora você precisa aprender a manipular elementos da página dinamicamente. O DOM (Document Object Model) é como o mapa estelar da página - você pode modificar qualquer elemento.",
        desafio: "🎯 Desafio: Crie um botão que, ao ser clicado, mude o texto de um parágrafo usando getElementById e innerHTML.",
        solucaoEsperada: ["getElementById", "innerHTML", "function"],
        dica: "Para manipular elementos, primeiro você precisa 'encontrá-los' na página usando seu ID, depois modificar seu conteúdo interno. Crie uma função que execute essas ações quando o botão for clicado."
    },
    {
        titulo: "Fase 13: Os Eventos Estelares",
        historia: "Excelente! Você dominou a manipulação básica. Agora deve aprender sobre diferentes tipos de eventos - como quando uma nave pousa (click), quando sensores detectam movimento (hover), ou quando dados são inseridos (input).",
        desafio: "🎯 Desafio: Crie um input que, ao ser digitado (evento oninput), mostre o texto em tempo real em um parágrafo.",
        solucaoEsperada: ["input", "oninput", "this.value"],
        dica: "Existem eventos que respondem à digitação em tempo real. Crie um campo de entrada e use um evento que capture cada tecla digitada. O valor atual do campo pode ser obtido com uma palavra-chave especial."
    },
    {
        titulo: "Fase 14: O Loop do Infinito",
        historia: "Impressionante! Os eventos estão funcionando perfeitamente. Agora você precisa aprender a automatizar tarefas repetitivas. Os antigos criaram estruturas de repetição para não fazer o mesmo trabalho mil vezes.",
        desafio: "🎯 Desafio: Use JavaScript para criar uma lista numerada de 1 a 5 dinamicamente usando um loop for.",
        solucaoEsperada: ["for", "createElement", "appendChild", "textContent"],
        dica: "Para criar elementos repetitivos, use um loop de repetição combinado com funções JavaScript que criam novos elementos no DOM. Cada elemento criado deve ser adicionado à página como filho de outro elemento."
    },
    {
        titulo: "Fase 15: As Condições do Espaço-Tempo",
        historia: "Perfeito! A automação está funcionando. Mas nem sempre queremos que as coisas aconteçam da mesma forma. Às vezes precisamos tomar decisões baseadas em condições - como um piloto que escolhe a rota baseada nas condições do espaço.",
        desafio: "🎯 Desafio: Crie uma função que receba um número e exiba 'Positivo', 'Negativo' ou 'Zero' usando if/else.",
        solucaoEsperada: ["function", "if", "else", "Positivo", "Negativo", "Zero"],
        dica: "As estruturas condicionais permitem que o programa tome decisões. Crie uma função que teste se um número é maior, menor ou igual a zero, exibindo mensagens diferentes para cada situação."
    },
    {
        titulo: "Fase 16: O Array Dimensional",
        historia: "Magnífico! As decisões estão sendo tomadas corretamente. Agora você descobriu estruturas de dados mais complexas - arrays são como hangares que podem guardar múltiplas naves (dados) organizadamente.",
        desafio: "🎯 Desafio: Crie um array com nomes de planetas e use um loop para exibir cada um em uma lista HTML.",
        solucaoEsperada: ["array", "forEach", "push", "planetas"],
        dica: "Arrays são coleções de dados organizados em sequência. Crie um array com vários itens e use um método especial que percorre cada elemento automaticamente, criando elementos HTML para cada um."
    },
    {
        titulo: "Fase 17: O Objeto Quântico",
        historia: "Espetacular! Os arrays estão organizados como uma frota espacial. Agora você deve aprender sobre objetos - estruturas mais complexas que podem guardar propriedades e métodos, como uma nave completa com todas suas características.",
        desafio: "🎯 Desafio: Crie um objeto 'nave' com propriedades nome, energia e um método 'voar()' que exiba uma mensagem.",
        solucaoEsperada: ["object", "propriedades", "metodo", "nave", "energia"],
        dica: "Objetos são estruturas que combinam dados (propriedades) e ações (métodos) em uma única entidade. Defina as características da nave e uma ação que ela pode realizar."
    },
    {
        titulo: "Fase 18: A Animação Temporal",
        historia: "Incrível! Os objetos estão funcionando como naves completas. Agora você vai adicionar movimento e vida às suas criações. As animações CSS são como dar alma aos elementos digitais.",
        desafio: "🎯 Desafio: Crie uma animação CSS que faça um elemento girar 360 graus continuamente.",
        solucaoEsperada: ["@keyframes", "animation", "rotate", "360deg", "infinite"],
        dica: "Para criar animações, defina primeiro os quadros-chave da animação (o que acontece do início ao fim), depois aplique essa animação a um elemento. Use transformações de rotação e configure para repetir infinitamente."
    },
    {
        titulo: "Fase 19: O Grid Galáctico",
        historia: "Fantástico! Os elementos agora têm vida própria. Para sua penúltima missão, você deve dominar o CSS Grid - uma tecnologia que permite criar layouts complexos como uma grade de coordenadas galácticas.",
        desafio: "🎯 Desafio: Crie um container com display: grid, defina 3 colunas e 2 linhas, e coloque 6 divs filhas dentro.",
        solucaoEsperada: ["display", "grid", "grid-template-columns", "grid-template-rows"],
        dica: "O CSS Grid cria layouts bidimensionais organizados em linhas e colunas. Transforme um elemento em grid, depois defina a estrutura das colunas e linhas que deseja criar."
    },
    {
        titulo: "Fase 20: O Grande Final Cósmico",
        historia: "PARABÉNS, Desenvolvedor Cósmico! Você chegou à missão final. Agora deve criar uma página completa que combine todos os conhecimentos adquiridos - HTML semântico, CSS avançado, JavaScript interativo e design responsivo. Esta será sua obra-prima cósmica!",
        desafio: "🎯 DESAFIO FINAL: Crie uma página completa com cabeçalho, navegação, seção principal com flex/grid, cards interativos, animações e responsividade. Mostre todo seu poder de Desenvolvedor Cósmico!",
        solucaoEsperada: ["header", "nav", "main", "section", "flex", "grid", "responsive", "interactive"],
        dica: "Combine tudo que aprendeu: HTML semântico + CSS moderno + JavaScript interativo!"
    }
];

function atualizarInterface() {
    const fase = fases[faseAtual - 1];
    document.getElementById('currentPhase').textContent = faseAtual;
    document.getElementById('phaseTitle').textContent = fase.titulo;
    document.getElementById('storyText').textContent = fase.historia;
    document.getElementById('challengeText').innerHTML = fase.desafio;
    
    const progresso = (faseAtual / totalFases) * 100;
    document.getElementById('progressFill').style.width = progresso + '%';
    
    document.getElementById('nextBtn').classList.remove('enabled');
    document.getElementById('codeEditor').value = '';
    document.getElementById('previewFrame').innerHTML = '';
}

function executarCodigo() {
    const codigo = document.getElementById('codeEditor').value;
    const previewFrame = document.getElementById('previewFrame');
    
    try {
        // Verifica se é HTML completo ou apenas conteúdo
        if (codigo.includes('<!DOCTYPE') || codigo.includes('<html')) {
            previewFrame.innerHTML = codigo;
        } else if (codigo.includes('<script>') || codigo.includes('<style>')) {
            const htmlCompleto = `
                <!DOCTYPE html>
                <html>
                <head><meta charset="UTF-8"></head>
                <body>
                    ${codigo}
                </body>
                </html>
            `;
            previewFrame.srcdoc = htmlCompleto;
        } else {
            previewFrame.innerHTML = codigo;
        }
        
        // Verifica se a solução está correta
        verificarSolucao(codigo);
        
    } catch (error) {
        mostrarFeedback('Erro no código! Verifique a sintaxe.', 'error');
    }
}

function verificarSolucao(codigo) {
    const fase = fases[faseAtual - 1];
    const solucao = fase.solucaoEsperada;
    let acertos = 0;
    
    solucao.forEach(elemento => {
        if (codigo.toLowerCase().includes(elemento.toLowerCase())) {
            acertos++;
        }
    });
    
    const porcentagemAcerto = (acertos / solucao.length) * 100;
    
    if (porcentagemAcerto >= 70) {
        mostrarFeedback('🎉 Excelente trabalho, Desenvolvedor Cósmico! Missão cumprida!', 'success');
        document.getElementById('nextBtn').classList.add('enabled');
        criarParticulas();
    } else {
        mostrarFeedback(`🚀 Continue tentando! Você está no caminho certo. ${fase.dica}`, 'error');
    }
}

function mostrarFeedback(mensagem, tipo) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = mensagem;
    feedback.className = `feedback ${tipo} show`;
    
    setTimeout(() => {
        feedback.classList.remove('show');
    }, 3000);
}

function criarParticulas() {
    const container = document.getElementById('particles');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        container.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 3000);
    }
}

function proximaFase() {
    if (faseAtual < totalFases) {
        faseAtual++;
        atualizarInterface();
        mostrarFeedback('🌟 Nova missão desbloqueada! Prepare-se para o próximo desafio!', 'success');
    } else {
        mostrarFeedback('🏆 PARABÉNS! Você completou todas as missões e se tornou um Mestre Desenvolvedor Cósmico!', 'success');
        criarFogosArtificio();
    }
}

function criarFogosArtificio() {
    const container = document.getElementById('particles');
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = '50vw';
        particle.style.top = '50vh';
        particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`;
        particle.style.width = '8px';
        particle.style.height = '8px';
        
        const angle = (Math.PI * 2 * i) / 50;
        const velocity = 200 + Math.random() * 100;
        const x = Math.cos(angle) * velocity;
        const y = Math.sin(angle) * velocity;
        
        particle.style.animation = `particleExplode 2s ease-out forwards`;
        particle.style.transform = `translate(${x}px, ${y}px)`;
        
        container.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 2000);
    }
}

// Função para dar dicas contextuais
function obterDica() {
    const fase = fases[faseAtual - 1];
    mostrarFeedback(`💡 Dica: ${fase.dica}`, 'success');
}

// Função para resetar a fase atual
function resetarFase() {
    document.getElementById('codeEditor').value = '';
    document.getElementById('previewFrame').innerHTML = '';
    document.getElementById('nextBtn').classList.remove('enabled');
    mostrarFeedback('🔄 Fase resetada! Comece novamente.', 'success');
}

// Eventos de teclado para melhorar a experiência
document.getElementById('codeEditor').addEventListener('keydown', function(e) {
    // Atalho Ctrl+Enter para executar código
    if (e.ctrlKey && e.key === 'Enter') {
        executarCodigo();
    }
    
    // Auto-indentação básica
    if (e.key === 'Enter') {
        const textarea = e.target;
        const cursorPos = textarea.selectionStart;
        const textBeforeCursor = textarea.value.substring(0, cursorPos);
        const lastLine = textBeforeCursor.split('\n').pop();
        const indentation = lastLine.match(/^\s*/)[0];
        
        // Adiciona indentação extra para tags que abrem
        if (lastLine.includes('<') && !lastLine.includes('</') && lastLine.includes('>')) {
            setTimeout(() => {
                const newCursorPos = textarea.selectionStart;
                const newValue = textarea.value.substring(0, newCursorPos) + 
                                '  ' + indentation + 
                                textarea.value.substring(newCursorPos);
                textarea.value = newValue;
                textarea.setSelectionRange(newCursorPos + 2, newCursorPos + 2);
            }, 0);
        }
    }
});

// Função para salvar progresso no localStorage (simulado com variável)
let progressoSalvo = {
    faseAtual: 1,
    dataUltimoAcesso: new Date().toISOString()
};

function salvarProgresso() {
    progressoSalvo.faseAtual = faseAtual;
    progressoSalvo.dataUltimoAcesso = new Date().toISOString();
}

function carregarProgresso() {
    if (progressoSalvo.faseAtual > 1) {
        const continuar = confirm(`Você havia chegado até a fase ${progressoSalvo.faseAtual}. Deseja continuar de onde parou?`);
        if (continuar) {
            faseAtual = progressoSalvo.faseAtual;
            atualizarInterface();
        }
    }
}

// Adiciona estilos CSS para animações extras
const estilosExtras = `
    @keyframes particleExplode {
        0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(var(--x, 0), var(--y, 0)) scale(0);
        }
    }
    
    .code-editor::-webkit-scrollbar {
        width: 8px;
    }
    
    .code-editor::-webkit-scrollbar-track {
        background: rgba(255,255,255,0.1);
        border-radius: 4px;
    }
    
    .code-editor::-webkit-scrollbar-thumb {
        background: rgba(0,245,255,0.5);
        border-radius: 4px;
    }
    
    .code-editor::-webkit-scrollbar-thumb:hover {
        background: rgba(0,245,255,0.8);
    }
    
    .story-section:hover, .code-section:hover, .preview-section:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 40px rgba(0,0,0,0.15);
        transition: all 0.3s ease;
    }
    
    .phase-title {
        background: linear-gradient(45deg, #00f5ff, #00d4ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    
    .btn:active {
        transform: translateY(1px) scale(0.98);
    }
    
    @keyframes pulseGlow {
        0%, 100% { box-shadow: 0 0 20px rgba(0,245,255,0.3); }
        50% { box-shadow: 0 0 30px rgba(0,245,255,0.6); }
    }
    
    .btn-next.enabled {
        animation: pulseGlow 2s infinite;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = estilosExtras;
document.head.appendChild(styleSheet);

// Inicialização do jogo
document.addEventListener('DOMContentLoaded', function() {
    atualizarInterface();
    carregarProgresso();
    
    // Adiciona event listeners para salvar progresso
    window.addEventListener('beforeunload', salvarProgresso);
    
    // Mensagem de boas-vindas
    setTimeout(() => {
        mostrarFeedback('🚀 Bem-vindo, Desenvolvedor Cósmico! Sua jornada épica começa agora!', 'success');
    }, 1000);
});

// Sistema de conquistas (simulado)
const conquistas = {
    primeiroAcerto: false,
    cincoPhasesCompletas: false,
    dezPhasesCompletas: false,
    mestреCósmico: false
};

function verificarConquistas() {
    if (faseAtual === 2 && !conquistas.primeiroAcerto) {
        conquistas.primeiroAcerto = true;
        mostrarFeedback('🏅 Conquista Desbloqueada: Primeiro Passo Cósmico!', 'success');
    }
    
    if (faseAtual === 6 && !conquistas.cincoPhasesCompletas) {
        conquistas.cincoPhasesCompletas = true;
        mostrarFeedback('🏅 Conquista Desbloqueada: Explorador Estelar!', 'success');
    }
    
    if (faseAtual === 11 && !conquistas.dezPhasesCompletas) {
        conquistas.dezPhasesCompletas = true;
        mostrarFeedback('🏅 Conquista Desbloqueada: Navegador Galáctico!', 'success');
    }
    
    if (faseAtual === 21 && !conquistas.mestreCosmico) {
        conquistas.mestreCosmico = true;
        mostrarFeedback('👑 CONQUISTA ÉPICA: Mestre Desenvolvedor Cósmico!', 'success');
    }
}

// Atualiza a função proximaFase para incluir conquistas
const proximaFaseOriginal = proximaFase;
proximaFase = function() {
    proximaFaseOriginal();
    verificarConquistas();
};

// Adiciona botões de ajuda
function adicionarBotoesAjuda() {
    const buttonsDiv = document.querySelector('.buttons');
    
    const btnDica = document.createElement('button');
    btnDica.className = 'btn';
    btnDica.style.background = 'linear-gradient(45deg, #fbbf24, #f59e0b)';
    btnDica.style.color = '#000';
    btnDica.textContent = '💡 Dica';
    btnDica.onclick = obterDica;
    
    const btnReset = document.createElement('button');
    btnReset.className = 'btn';
    btnReset.style.background = 'linear-gradient(45deg, #ef4444, #dc2626)';
    btnReset.style.color = '#fff';
    btnReset.textContent = '🔄 Resetar';
    btnReset.onclick = resetarFase;
    
    buttonsDiv.appendChild(btnDica);
    buttonsDiv.appendChild(btnReset);
}

// Executa após DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    adicionarBotoesAjuda();
});
