const translations = {
  fr: {
    'nav.services':  'Services',
    'nav.why':       'Pourquoi WeOps',
    'nav.about':     'À propos',
    'nav.contact':   'Contact',
    'hero.label':    'Opérations · Plateformes · Fiabilité',
    'hero.title':    'Vos opérations,<br>maîtrisées.',
    'hero.sub':      'We turn messy operations into efficient systems.',
    'hero.cta':      'Parlons-en',
    'services.title':             'Ce qu\'on fait',
    'services.cloud.title':       'Infrastructure cloud',
    'services.cloud.body':        'AWS, Azure, GCP — des environnements fiables, pensés pour durer.',
    'services.platform.title':    'Plateformes internes',
    'services.platform.body':     'Des outils qui accélèrent vos équipes sans créer de dépendances.',
    'services.cicd.title':        'Pipelines CI/CD',
    'services.cicd.body':         'Des livraisons prévisibles, des déploiements sans friction.',
    'services.reliability.title': 'Fiabilisation des systèmes',
    'services.reliability.body':  'On structure ce qui est fragile. On rend exploitable ce qui est opaque.',
    'why.title':          'Pourquoi WeOps',
    'why.senior.title':   'Expertise terrain',
    'why.senior.body':    'Une équipe senior, pas des juniors. Des intervenants qui ont déjà vu ce que vous traversez.',
    'why.stability.title':'Stabilité sur la durée',
    'why.stability.body': 'On intervient pour que ça tienne, pas pour livrer et partir.',
    'why.simple.title':   'Sans complexité inutile',
    'why.simple.body':    'On structure sans sur-ingénierer. La bonne solution, pas la plus impressionnante.',
    'why.transfer.title': 'Transfert réel',
    'why.transfer.body':  'Vos équipes repartent avec la maîtrise. Pas de dépendance à long terme.',
    'about.title':  'À propos',
    'about.body':   'WeOps, c\'est une expertise terrain forgée depuis des années sur des systèmes critiques. Pas une grande firme. Une équipe ciblée, complémentaire, qui intervient là où la stabilité et la performance ne sont pas négociables.',
    'contact.title':'Parlons de vos systèmes',
    'contact.sub':  'Une conversation sans pression. On évalue ensemble si on peut vous aider.',
    'contact.cta':  'Écrire à info@weops.ca',
    'footer.copy':  '© 2026 WeOps. Tous droits réservés.',
  },
  en: {
    'nav.services':  'Services',
    'nav.why':       'Why WeOps',
    'nav.about':     'About',
    'nav.contact':   'Contact',
    'hero.label':    'Operations · Platforms · Reliability',
    'hero.title':    'Your operations,<br>under control.',
    'hero.sub':      'We turn messy operations into efficient systems.',
    'hero.cta':      'Let\'s talk',
    'services.title':             'What we do',
    'services.cloud.title':       'Cloud infrastructure',
    'services.cloud.body':        'AWS, Azure, GCP — reliable environments built to last.',
    'services.platform.title':    'Internal platforms',
    'services.platform.body':     'Tools that accelerate your teams without creating dependencies.',
    'services.cicd.title':        'CI/CD pipelines',
    'services.cicd.body':         'Predictable deliveries, frictionless deployments.',
    'services.reliability.title': 'System reliability',
    'services.reliability.body':  'We structure what\'s fragile. We make the opaque exploitable.',
    'why.title':          'Why WeOps',
    'why.senior.title':   'Field expertise',
    'why.senior.body':    'A senior team, not juniors. People who\'ve already seen what you\'re going through.',
    'why.stability.title':'Built to last',
    'why.stability.body': 'We intervene so things hold. Not to ship and move on.',
    'why.simple.title':   'No unnecessary complexity',
    'why.simple.body':    'We structure without over-engineering. The right solution, not the most impressive one.',
    'why.transfer.title': 'Real knowledge transfer',
    'why.transfer.body':  'Your teams leave with full ownership. No long-term dependency.',
    'about.title':  'About',
    'about.body':   'WeOps is field expertise built over years on critical systems. Not a big firm. A focused, complementary team that steps in where stability and performance are non-negotiable.',
    'contact.title':'Let\'s talk about your systems',
    'contact.sub':  'A no-pressure conversation. We\'ll figure out together if we can help.',
    'contact.cta':  'Write to info@weops.ca',
    'footer.copy':  '© 2026 WeOps. All rights reserved.',
  }
};

let lang = localStorage.getItem('weops-lang') || 'fr';

function applyLang() {
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.getElementById('langToggle').textContent = lang === 'fr' ? 'EN' : 'FR';
  localStorage.setItem('weops-lang', lang);
}

document.getElementById('langToggle').addEventListener('click', () => {
  lang = lang === 'fr' ? 'en' : 'fr';
  applyLang();
});

// Nav scroll state
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Mobile menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  const open = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', String(!open));
  navLinks.classList.toggle('open', !open);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
  });
});

applyLang();
