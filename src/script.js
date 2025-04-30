// Toggle do menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
});

// Fechar menu ao clicar fora
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Fechar ao clicar nos links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// 1. Verificar preferência do sistema
  const verificarTemaSistema = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

// 2. Aplicar tema inicial
const aplicarTemaInicial = () => {
    const temaSalvo = localStorage.getItem('tema');
    const temaSistema = verificarTemaSistema() ? 'dark' : 'light';
    
    if (temaSalvo) {
        document.documentElement.setAttribute('data-theme', temaSalvo);
    } else {
        document.documentElement.setAttribute('data-theme', temaSistema);
    }
    atualizarTextoBotao();
};

// 3. Alternar tema manualmente
const alternarTema = () => {
    const temaAtual = document.documentElement.getAttribute('data-theme');
    const novoTema = temaAtual === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', novoTema);
    localStorage.setItem('tema', novoTema);
    atualizarTextoBotao();
};

// 4. Atualizar texto do botão
const atualizarTextoBotao = () => {
  const temaAtual = document.documentElement.getAttribute('data-theme');
  const botao = document.querySelector('#theme-button');
  botao.innerHTML = temaAtual === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
  
  // Forçar redesenho das partículas
  if (window.pJSDom && window.pJSDom.length > 0) {
      window.pJSDom[0].pJS.fn.vendors.destroy();
      window.pJSDom[0].pJS.fn.vendors.init();
  }
};

// 5. Ouvir mudanças no sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('tema')) {
        aplicarTemaInicial();
    }
});

// Inicializar
document.addEventListener('DOMContentLoaded', aplicarTemaInicial);
// animação da barra de rolagem
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

// animação do email
const emailText = "Thalisvn2003@gmail.com";
const typedEmail = document.getElementById("typed-email");
let index = 0;
let typing = true;

function typeEffect() {
  if (typing) {
    if (index < emailText.length) {
      typedEmail.textContent += emailText.charAt(index);
      index++;
      setTimeout(typeEffect, 100);
    } else {
      typing = false;
      setTimeout(typeEffect, 1500); // pausa antes de apagar
    }
  } else {
    if (index > 0) {
      typedEmail.textContent = emailText.substring(0, index - 1);
      index--;
      setTimeout(typeEffect, 50);
    } else {
      typing = true;
      setTimeout(typeEffect, 500); // pausa antes de recomeçar
    }
  }
}


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
        'description': 'Meu nome é Thalis,sou estudante de Ciência da Computação e desenvolvedor em formação com foco em tecnologias web. Tenho conhecimentos em HTML, CSS e JavaScript, e estou me aprofundando cada vez mais no desenvolvimento Full-Stack. Busco minhas primeiras oportunidades como freelancer para aplicar o que aprendeu, aprender ainda mais com projetos reais e entregar soluções funcionais e bem feitas. Fora da programação, gosto de desafios criativos, resolver problemas e trabalhar em equipe.',
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
        'desktop': 'Desktop Projects',
        'mobile': 'Mobile Projects',
        'web': 'Web Projects'
    }
};
// Função para alternar entre idiomas ajustada
function toggleLanguage() {
  const currentLang = document.documentElement.lang;
  const newLang = currentLang === 'pt' ? 'en' : 'pt';
  changeLanguage(newLang);
}

// Restante do código permanece igual
function changeLanguage(lang) {
  document.documentElement.lang = lang;
  const elements = document.querySelectorAll('[data-translate]');
  
  elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      element.innerHTML = translations[lang][key]; // Alterado para innerHTML
  });

  document.querySelector('.language-switcher').textContent = lang.toUpperCase();
  localStorage.setItem('language', lang);
}

const savedLang = localStorage.getItem('language') || 'pt';
changeLanguage(savedLang);

typeEffect();

 // Configuração para cada carrossel
 function setupCarousel(containerClass, leftArrowClass, rightArrowClass) {
  const container = document.querySelector(containerClass);
  const carousel = container.querySelector('.projects-carousel');
  const leftArrow = container.querySelector(leftArrowClass);
  const rightArrow = container.querySelector(rightArrowClass);
  const cardWidth = 300 + 20; // Largura do card + gap

  leftArrow.addEventListener('click', () => {
      carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  });

  rightArrow.addEventListener('click', () => {
      carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
  });
}

// Inicializar todos os carrosséis
setupCarousel('.desktop-carousel', '.desktop-left', '.desktop-right');
setupCarousel('.mobile-carousel', '.mobile-left', '.mobile-right');
setupCarousel('.web-carousel', '.web-left', '.web-right');
// Funcionalidade de arraste (comum a todos)
document.querySelectorAll('.projects-carousel').forEach(carousel => {
  let isDragging = false;
  let startX, scrollLeft;

  carousel.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.pageX;
      scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX;
      const walk = (x - startX) * 2;
      carousel.scrollLeft = scrollLeft - walk;
  });

  document.addEventListener('mouseup', () => {
      isDragging = false;
  });
});