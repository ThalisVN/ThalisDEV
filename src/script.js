// --- 1. CONFIGURAÇÕES DE INTERFACE (MENU E TEMA) ---
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.onclick = (e) => { 
    e.stopPropagation(); 
    navLinks.classList.toggle('active'); 
};

document.onclick = (e) => { 
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
    }
};

const alternarTema = () => {
    const temaAtual = document.documentElement.getAttribute('data-theme');
    const novoTema = temaAtual === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', novoTema);
    localStorage.setItem('tema', novoTema);
    
    const botao = document.querySelector('#theme-button');
    if (botao) {
        botao.innerHTML = novoTema === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    }

    // Reinicializa partículas para aplicar cores do novo tema se necessário
    if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom[0].pJS.fn.vendors.destroy();
        window.pJSDom[0].pJS.fn.vendors.init();
    }
};

// --- 2. INICIALIZAÇÃO DAS PARTÍCULAS ---
function carregarParticulas() {
    if (document.getElementById("particles-js")) {
        particlesJS("particles-js", {
            particles: {
                number: { value: 80 },
                shape: { type: "circle" },
                size: { value: 3 },
                move: { speed: 2 },
                opacity: { value: 0.7 },
                color: { value: "#00ffcc" },
                line_linked: { enable: true, color: "#00ffcc" }
            },
            interactivity: {
                events: {
                    onhover: { enable: true, mode: "repulse" }
                }
            }
        });
    }
}

// --- 3. ANIMAÇÃO (EMAIL) ---
const emailText = "Thalisvn2003@gmail.com";
const typedEmail = document.getElementById("typed-email");
let index = 0, typing = true;

function typeEffect() {
    if (!typedEmail) return;
    if (typing) {
        if (index < emailText.length) {
            typedEmail.textContent += emailText.charAt(index++);
            setTimeout(typeEffect, 100);
        } else {
            typing = false;
            setTimeout(typeEffect, 1500);
        }
    } else {
        if (index > 0) {
            typedEmail.textContent = emailText.substring(0, --index);
            setTimeout(typeEffect, 50);
        } else {
            typing = true;
            setTimeout(typeEffect, 500);
        }
    }
}

// --- 4. TRADUÇÃO ---
const translations = {
    'pt': {
        // Menu
        'home': 'Inicio',
        'skills': 'Habilidades',
        'portfolio': 'Portifólio',
        'contact': 'Contato',
        
        // Hero
        'greeting': 'Olá, eu sou o Thalis,<br> desenvolvedor Junior',
        
        // Sobre
        'about': 'Sobre mim',
        'challenges': 'Em busca de novos desafios',
        'description': 'Meu nome é Thalis, sou estudante de Ciência da Computação e desenvolvedor em formação com foco em tecnologias web. Tenho conhecimentos em HTML, CSS e JavaScript; e estou me aprofundando cada vez mais no desenvolvimento Full-Stack. Busco minhas primeiras oportunidades como freelancer para aplicar o que aprendi e, ao mesmo tempo, aprender ainda mais com projetos reais, entregando soluções funcionais e bem elaboradas. Fora da programação, gosto de desafios criativos, resolver problemas e trabalhar em equipe.',
        //skills
        'backend': 'Tenho experiência no desenvolvimento de back-end utilizando Node.js, Python e C#. Trabalho com APIs REST, bancos de dados relacionais e NoSQL, além de implementar autenticação, segurança e lógica de negócios eficiente.',
        'frontend': 'Desenvolvo interfaces modernas e responsivas utilizando HTML, CSS e JavaScript. Tenho experiência na criação de layouts intuitivos e dinâmicos, aplicando boas práticas de acessibilidade e usabilidade',
        'cellphone': 'Crio aplicativos móveis com Flutter, garantindo um design responsivo e fluído para Android e iOS. Utilizo arquitetura limpa e gerenciamento de estado para entregar apps eficientes e escaláveis.',
        
        // Contato
        'idea': 'Transforme a sua ideia em realidade!',
        // Portfolio
        'desktop': 'Projetos Desktop',
        'mobile': 'Projetos Mobile',
        'web': 'Projetos Web'
    },
    'en': {
        // Menu
        'home': 'Home',
        'about': 'About',
        'skills': 'Skills',
        'portfolio': 'Portfolio',
        'contact': 'Contact',
        
        // Hero
        'greeting': 'Hi, I\'m Thalis,<br> Junior Developer',
        
        // Sobre
        'about': 'About me',
        'challenges': 'Seeking new challenges',
        'description': 'My name is Thalis, I am a Computer Science student and a developer in training with a focus on web technologies. I have knowledge of HTML, CSS and JavaScript, and I am increasingly delving into Full-Stack development. I am looking for my first opportunities as a freelancer to apply what I have learned, learn even more from real projects and deliver functional and well-made solutions. Outside of programming, I enjoy creative challenges, solving problems and working in a team.',
        
        //skills
        'frontend': 'I develop modern and responsive interfaces using HTML, CSS and JavaScript. I have experience in creating intuitive and dynamic layouts, applying good accessibility and usability practices.',
        'backend': 'I have experience in back-end development using Node.js, Python and C#. I work with REST APIs, relational and NoSQL databases, as well as implementing authentication, security and efficient business logic.',
        'cellphone': 'I build mobile apps with Flutter, ensuring a responsive and fluid design for Android and iOS. I use clean architecture and state management to deliver efficient and scalable apps.',
        // Contato
        'idea': 'Turn your idea into reality!',
        
        // Portfolio
        'app': 'App',
        'web': 'Web'
    }
};

function changeLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    const switcher = document.querySelector('.language-switcher');
    if (switcher) switcher.textContent = lang.toUpperCase();
    localStorage.setItem('language', lang);
}

function toggleLanguage() {
    const newLang = document.documentElement.lang === 'pt' ? 'en' : 'pt';
    changeLanguage(newLang);
}

// --- 5. GESTÃO DINÂMICA DE PROJETOS E CARROSSEL ---
async function carregarProjetos() {
    try {
        const response = await fetch('projetos.json');
        const dados = await response.json();
        
        renderizarCards(dados.desktop, 'desktop-carousel');
        renderizarCards(dados.web, 'web-carousel');
        
        inicializarCarrosseis();
    } catch (erro) {
        console.error("Erro ao carregar projetos:", erro);
    }
}

function renderizarCards(lista, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = lista.map(p => `
        <div class="project-card">
            <img src="${p.imagem}" alt="${p.titulo}">
            <div class="project-overlay">
                <h3>${p.titulo}</h3>
                <p>${p.descricao}</p>
                <div class="project-links">
                    <a href="${p.linkDemo}" class="demo-link" target="_blank"><i class="fa-solid fa-link"></i></a>
                    <a href="${p.linkGithub}" class="code-link" target="_blank"><i class="fa-brands fa-github"></i></a>
                </div>
            </div>
        </div>
    `).join('');
}

function inicializarCarrosseis() {
    const setups = [
        { id: '#desktop-carousel', l: '.desktop-left', r: '.desktop-right' },
        { id: '#web-carousel', l: '.web-left', r: '.web-right' }
    ];

    setups.forEach(s => {
        const car = document.querySelector(s.id);
        const btnL = document.querySelector(s.l);
        const btnR = document.querySelector(s.r);

        if (car && btnL && btnR) {
            btnL.onclick = () => car.scrollBy({ left: -380, behavior: 'smooth' });
            btnR.onclick = () => car.scrollBy({ left: 380, behavior: 'smooth' });

            let isDown = false, startX, scrollLeft;
            car.onmousedown = (e) => { isDown = true; startX = e.pageX - car.offsetLeft; scrollLeft = car.scrollLeft; };
            car.onmouseleave = () => isDown = false;
            car.onmouseup = () => isDown = false;
            car.onmousemove = (e) => {
                if(!isDown) return;
                e.preventDefault();
                const x = e.pageX - car.offsetLeft;
                car.scrollLeft = scrollLeft - (x - startX) * 2;
            };
        }
    });
}

// --- 6. INICIALIZAÇÃO GERAL ---
document.addEventListener('DOMContentLoaded', () => {
    // Tema
    const temaSalvo = localStorage.getItem('tema') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', temaSalvo);
    
    // Idioma
    changeLanguage(localStorage.getItem('language') || 'pt');
    
    // Animações, Partículas e Dados
    carregarParticulas();
    typeEffect();
    carregarProjetos();
});