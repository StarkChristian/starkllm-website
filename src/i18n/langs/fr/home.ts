// Page d'accueil en français (traduction assistée par IA, à relire par un locuteur natif).
import { V, SIZE_MB } from '../../../data/release';

export default {
  meta: {
    title: 'StarkLLM | IA privée et locale pour vos documents (Windows)',
    description:
      'StarkLLM est un assistant IA gratuit, open source et local pour Windows. Discutez en privé avec vos documents et votre Knowledge Base (base de connaissances) sur votre propre ordinateur.',
  },
  nav: { getBtn: `Obtenir la v${V}` },
  hero: {
    eyebrow: 'IA locale pour Windows · Research Beta',
    h1: ['Interrogez vos fichiers.', 'Rien', 'ne quitte votre PC.'],
    lede: 'StarkLLM lit vos courriers et vos documents sur votre propre ordinateur, y trouve les échéances et les montants et répond à vos questions en indiquant la page d’où provient chaque réponse, avec des modèles Ollama que vous exécutez vous-même.',
    cta1: 'Télécharger pour Windows',
    cta2: 'Voir comment ça marche',
    meta: `v${V} · ${SIZE_MB} Mo · Apache 2.0 · gratuit`,
  },
  pipeline: [
    { k: 'Fichiers', v: 'PDF, Word, PowerPoint, EPUB, scans, photos, enregistrements' },
    { k: 'Segments', v: 'Découpés par sens, pas par longueur' },
    { k: 'Recherche hybride', v: 'BM25 + embeddings vectoriels' },
    { k: 'Modèle local', v: 'Ollama sur votre GPU' },
    { k: 'Réponse sourcée', v: 'Accès direct à la page source' },
  ],
  shot: { alt: 'Discussion dans StarkLLM : la réponse à une question sur un avis d’imposition indique le montant, la date d’échéance, le document source et la page', caption: 'L’application de bureau StarkLLM répond à une question sur un courrier. Documents de démonstration avec des noms et des chiffres inventés.' },
  letters: {
    tag: 'Courriers',
    h2: 'Vos courriers et documents en un coup d’œil',
    lede: 'Ajoutez un PDF, un scan ou une photo prise avec votre téléphone. StarkLLM le lit sur votre PC, regroupe les courriers d’un même expéditeur en un dossier et affiche chaque échéance sur la page d’accueil. Chaque valeur renvoie à la page et à la ligne où elle a été lue.',
    dashCaption: 'Page d’accueil : les échéances et les dates de paiement trouvées dans vos courriers, avec le montant et la page.',
    inboxCaption: 'Boîte de réception : un dossier par expéditeur, l’échéance la plus proche en premier, une alerte en cas d’arnaque possible.',
    note: 'Les courriers sont lus en anglais, allemand, français, espagnol, italien et turc, avec leurs échéances et montants, et l’interface parle ces mêmes six langues. La reconnaissance de texte (OCR) des photos et des scans lit l’anglais et l’allemand d’origine ; d’autres langues peuvent être ajoutées dans les Paramètres. Les courriers dans d’autres langues sont classés comme des documents ordinaires, sans échéances ni montants. Documents de démonstration avec des noms et des chiffres inventés.',
  },
  features: {
    h2: 'Conçu pour ceux qui ne peuvent pas envoyer leurs documents en ligne.',
    items: [
      { tag: 'Boîte de réception', title: 'Une boîte de réception avec un dossier par expéditeur', text: 'Pour chaque courrier : son type (facture, rappel, avis d’imposition, contrat, amende et autres), l’expéditeur, la date, les numéros de référence, les montants, les comptes bancaires et les échéances, chacun retrouvé mot pour mot sur une page. Marquez un courrier comme traité quand vous vous en êtes occupé. Rien n’est renommé ni déplacé sur votre disque.', wide: true },
      { tag: 'Échéances', title: 'Les échéances sur la page d’accueil', text: 'Échéances, rendez-vous et dates de paiement tirés de vos courriers, avec le montant et la page. « Ajouter au calendrier » les enregistre dans un fichier de calendrier.' },
      { tag: 'Scans', title: 'Photos et scans sont lus sur votre PC', text: 'Une photo ou une page numérisée est lue comme du texte anglais ou allemand, redressée si besoin, et peut être recherchée et citée comme n’importe quel autre document.' },
      { tag: 'Sécurité', title: 'Des alertes contre les faux courriers', text: 'Un encadré rouge apparaît si un courrier demande un paiement vers un compte étranger, par bon d’achat ou via un lien, s’il contient du texte destiné aux assistants IA, ou si un expéditeur indique soudain un autre compte.' },
      { tag: 'Connaissances', title: 'Des Workspaces et une Knowledge Base globale', text: 'Reliez des dossiers Windows, gardez vos projets cloisonnés et interrogez la base de connaissances commune depuis n’importe quelle discussion.' },
      { tag: 'Recherche', title: 'RAG hybride avec reclassement par cross-encoder', text: 'La recherche par mots-clés et la recherche sémantique s’exécutent ensemble, puis un cross-encoder TinyBERT reclasse les passages qui répondent réellement à la question.', wide: true, art: 'bars' },
      { tag: 'Bureau', title: 'Une vraie fenêtre d’application', text: 'Sa propre fenêtre, avec écran de démarrage et menu dans la zone de notification. Pas d’onglet de navigateur.' },
      { tag: 'Thèmes', title: 'Treize thèmes, changés instantanément', text: 'De Midnight Indigo et du noir OLED pur à Daylight Minimal, plus cinq thèmes à motifs comme Doodle Chat et Starry Night.', wide: true, art: 'swatches' },
      { tag: 'Outils', title: 'Des outils locaux avec une étape de confirmation', text: 'Des outils en lecture seule, comme search_local_kb et fetch_cited_chunk. Chaque appel nécessite votre confirmation et un jeton à usage unique.' },
      { tag: 'Autres programmes', title: 'Utiliser StarkLLM depuis d’autres programmes (désactivé par défaut)', text: 'Des éditeurs comme VS Code et Cursor, des assistants IA compatibles MCP et vos propres scripts peuvent rechercher dans vos documents et leur poser des questions, via un serveur MCP ou une API compatible OpenAI. Uniquement sur ce PC, uniquement avec une clé que vous créez, et sans pouvoir rien modifier ni supprimer.', wide: true },
      { tag: 'Code', title: 'Bac à sable Python local', text: 'Exécute les blocs de code Python de la discussion, avec des contrôles du code et des limites de temps et de mémoire. Disponible avec le moteur Docker Desktop (avancé) ; désactivé dans le moteur intégré tant que StarkLLM n’a pas son propre bac à sable. Une limite de confort, pas une frontière de sécurité : n’exécutez que du code en lequel vous avez confiance.' },
    ],
  },
  compare: {
    h2: 'StarkLLM face aux autres solutions',
    lede: 'Un regard honnête sur la place de StarkLLM parmi d’autres solutions ouvertes populaires pour l’IA locale.',
    note: 'État en octobre 2026, d’après la documentation publique de chaque outil. Les fonctionnalités évoluent vite : vérifiez les versions actuelles. Les réponses de StarkLLM proviennent elles aussi d’un petit modèle local : pour tout ce qui est important, vérifiez la source citée.',
    cols: ['Outil', 'Points forts et limites', 'Idéal pour'],
    rows: [
      { kind: 'Interface d’inférence', name: 'LM Studio', text: 'Excellent pour télécharger des GGUF depuis Hugging Face et régler finement le déchargement des couches sur le GPU. Sa fonction « Chat with Documents » joint des fichiers à une conversation (les fichiers courts sont collés en entier, les longs passent par une recherche) ; d’après sa documentation et des guides tiers, il n’offre ni espaces de travail persistants ni bases de connaissances partagées.', best: 'Essayer des modèles, avec de temps en temps des documents joints à une discussion.' },
      { kind: 'Application RAG de base', name: 'AnythingLLM', text: 'Une application populaire pour discuter avec ses documents dans des espaces de travail. Les options de recherche, comme le reclassement, dépendent de la version et de la base vectorielle choisie : comparez-la sur vos propres documents.', best: 'Les discussions autour de documents, avec une application d’espaces de travail toute prête.' },
      { kind: 'Chat minimaliste', name: 'Jan.ai', text: 'Une application open source légère, de type ChatGPT, qui garde les données sur l’appareil. La recherche dans les documents existe comme réglage facultatif que sa documentation qualifie d’expérimental ; l’accent est mis sur le chat plutôt que sur le travail sur documents.', best: 'Un chat local simple avec une interface claire.' },
      { kind: 'Ce projet', name: `StarkLLM v${V}`, text: 'Application de bureau native pour Windows, avec une boîte de réception pour les courriers (échéances, montants, dossiers par expéditeur, alertes contre les faux courriers), des tâches web et de l’aide pour le code qui demandent avant chaque étape importante, un RAG hybride avec reclassement par cross-encoder TinyBERT, un serveur MCP local et une API compatible OpenAI facultatifs (désactivés par défaut) et une confidentialité locale par défaut.', best: 'Tous ceux qui veulent garder leurs courriers et leurs documents privés et obtenir des réponses avec des sources vérifiables, des foyers aux développeurs et aux chercheurs.', us: true },
    ],
  },
  setup: {
    h2: 'Installation en quatre étapes',
    intro: 'StarkLLM apporte son propre moteur : ni Docker Desktop, ni WSL2. Le premier démarrage télécharge les modèles d’IA (environ 5 Go) et, si vous l’acceptez, Ollama ; les démarrages suivants ne prennent que quelques secondes.',
    steps: [
      { title: 'Installer StarkLLM', text: `Exécutez StarkLLM-v${V}-Setup.exe et cliquez sur le raccourci. L’installeur est signé par « Open Source Developer Christian Stark » et contient le moteur.` },
      { title: 'Le laisser installer Ollama', text: 'Si Ollama manque, choisissez « Installer Ollama pour moi » : StarkLLM installe la version officielle et signée. Aucun terminal n’est nécessaire.' },
      { title: 'Attendre les modèles', text: 'StarkLLM télécharge les modèles d’IA dont il a besoin, affiche la progression, puis s’ouvre dans sa propre fenêtre.' },
      { title: 'S’il manque quelque chose', text: 'La fenêtre indique ce qui manque et comment y remédier, avec un bouton « Réessayer ». La page d’aide contient une liste de contrôle.' },
    ],
    notesTitle: 'Remarques importantes',
    notes: [
      { k: 'Premier lancement', v: 'Le téléchargement des modèles d’IA (environ 5 Go) prend un moment avec une connexion lente. Le premier démarrage après une installation ou une mise à jour peut aussi prendre quelques minutes, le temps que le moteur démarre.' },
      { k: 'Windows SmartScreen', v: 'L’installeur est signé par « Open Source Developer Christian Stark ». Si Windows affiche quand même un avertissement, vérifiez ce nom d’éditeur (clic droit sur l’installeur, Propriétés, Signatures numériques) et comparez la somme de contrôle SHA-256 indiquée sur la page de téléchargement. Ne continuez (« Informations complémentaires » (More info), puis « Exécuter quand même » (Run anyway)) que si les deux correspondent, et ne désactivez ni SmartScreen ni Smart App Control.' },
      { k: 'Le matériel compte', v: 'La vitesse et la qualité des réponses dépendent beaucoup d’un GPU performant (8 Go ou plus de VRAM recommandés).' },
    ],
  },
  privacy: {
    h2: 'L’architecture de la confidentialité',
    lede: 'StarkLLM est une alternative hors ligne aux services d’IA dans le cloud. Vos documents, vos dossiers juridiques et vos recherches restent sur votre ordinateur.',
    items: [
      { title: 'Inférence locale', text: 'Grâce à Ollama, les modèles de langage s’exécutent sur votre propre processeur ou GPU. Conçu pour fonctionner entièrement hors ligne une fois les modèles téléchargés.' },
      { title: 'Stockage local', text: 'Les documents sont découpés en segments et intégrés dans une base vectorielle ChromaDB locale, sur votre propre disque.' },
      { title: 'Aucune télémétrie', text: 'L’application Windows n’a ni télémétrie ni SDK d’analyse. Ce site n’utilise pas non plus d’outil d’analyse d’audience et ne dépose aucun cookie ; voir la politique de confidentialité.' },
      { title: 'En ligne uniquement si vous le décidez', text: 'La recherche web, les fournisseurs de modèles dans le cloud, l’import depuis YouTube et GitHub, les cours de marché et la vérification des mises à jour sont désactivés tant que vous ne les activez pas. La discussion indique quand une requête quitte votre PC.' },
    ],
  },
  download: {
    h2: 'Installez-le dès aujourd’hui.',
    lede: 'Gratuit et open source, sous licence Apache 2.0.',
    reqTitle: 'Avant de télécharger',
    req: [
      ['Système', 'Windows 10/11 (64 bits), sans Docker ni WSL2'],
      ['Ollama', 'pour les modèles d’IA ; StarkLLM peut l’installer pour vous'],
      ['Disque', 'au moins 15 Go libres pour l’application, le moteur et les modèles'],
      ['Matériel', '8 Go de RAM minimum, 16 Go recommandés, GPU NVIDIA avec 8 Go ou plus de VRAM recommandé'],
    ],
    installer: `Installeur (.exe) · ${SIZE_MB} Mo`,
    portable: 'Portable',
    all: 'Tous les téléchargements',
    shaTitle: 'SHA-256',
    verify: 'Vérifier avec PowerShell :',
  },
};
