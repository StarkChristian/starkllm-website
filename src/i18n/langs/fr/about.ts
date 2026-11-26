// Page À propos (2026). La feuille de route liste des projets, pas des promesses (sources : voir ../en/about.ts).
export default {
  meta: {
    title: 'À propos | StarkLLM',
    description: 'Qui développe StarkLLM, pourquoi il existe, sous quelle licence il est publié et ce qui vient ensuite.',
  },
  hero: {
    eyebrow: 'À propos',
    h1: 'Conçu pour les documents qui doivent rester chez vous.',
    lede: 'StarkLLM est un projet libre et gratuit de Christian Stark, à Aix-la-Chapelle (Aachen), en Allemagne.',
  },
  what: {
    h2: 'Ce qu’est StarkLLM',
    p: [
      'StarkLLM est un assistant IA privé et local pour Windows. Il lit vos courriers et vos documents sur votre propre PC, répond en indiquant la page où il a trouvé la réponse, et accomplit des tâches pour vous sur des sites web et dans un dossier de projet, en vous demandant avant chaque étape importante.',
      'Tout l’essentiel se passe sur votre machine : les documents, l’index de recherche et les modèles d’IA. Rien ne quitte votre PC tant que vous n’activez pas une fonction en ligne facultative, et Paramètres › Confidentialité et réseau liste chaque connexion.',
    ],
  },
  why: {
    h2: 'Pourquoi il existe',
    p: [
      'La plupart des assistants IA vous demandent d’envoyer en ligne ce sur quoi vous les interrogez. Pour un avis d’imposition, un courrier médical ou un contrat, c’est beaucoup demander. StarkLLM montre que des réponses utiles, fondées sur vos documents, sont possibles sans que ces documents quittent votre bureau.',
      'Il s’adresse à celles et ceux qui ne peuvent pas ou ne veulent pas envoyer leurs documents en ligne : foyers qui croulent sous les papiers, indépendants, étudiants, chercheurs et petits bureaux.',
    ],
  },
  who: {
    h2: 'Qui le développe',
    p: 'StarkLLM est conçu et développé par Christian Stark.',
    lines: ['Christian Stark', 'Maxstr. 14, 52070 Aachen, Allemagne', 'E-mail : info@starkllm.com'],
    contact: 'Contact',
  },
  open: {
    h2: 'Open source',
    p: [
      'StarkLLM est open source sous licence Apache 2.0 : gratuit pour un usage personnel, de recherche et commercial. Le code source, les notes de version et les documents sur la confidentialité sont sur GitHub.',
      'Vous avez trouvé un bug ou vous avez une idée ? Ouvrez un ticket (issue) sur GitHub ou écrivez un e-mail.',
    ],
    github: 'Code source sur GitHub',
    issues: 'Signaler un problème',
  },
  roadmap: {
    h2: 'Ce qui vient ensuite',
    lede: 'Des projets pour 2026 et 2027, pas des promesses. Chaque étape ne sort qu’une fois testée.',
    items: [
      { when: 'Prochainement', title: 'Une ligne directe vers votre téléphone', text: 'Le téléphone et le PC se connectent directement quand c’est possible, avec le relais en solution de repli. Dans les deux cas, le chiffrement reste de bout en bout.' },
      { when: 'Prochainement', title: 'L’application Android sur Google Play', text: 'Du test fermé à une version publique.' },
      { when: 'Plus tard', title: 'Son propre bac à sable pour le code', text: '« Exécuter » sur les blocs de code Python fonctionne de nouveau sans Docker, dans un bac à sable propre à StarkLLM.' },
      { when: 'En continu', title: 'Chaque page dans chaque langue', text: 'Ce site dans les six langues de l’application, avec des captures d’écran et des vidéos de l’application dans chaque langue.' },
    ],
  },
  related: {
    h2: 'Projet associé',
    text: 'StarkLLM s’inscrit dans un intérêt plus large pour l’informatique respectueuse de la vie privée. Pour des approches cryptographiques des données privées, voir homomorphicprivacy.com.',
  },
};
