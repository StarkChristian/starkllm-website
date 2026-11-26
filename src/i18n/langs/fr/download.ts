// Page de téléchargement en français (traduction assistée par IA, à relire par un locuteur natif).
import { V, RELEASE } from '../../../data/release';

const mb = (b: number, locale: string) => (b / 1_000_000).toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const bytes = (b: number, locale: string) => b.toLocaleString(locale);
const SETUP = RELEASE.setup.size, PORTABLE = RELEASE.portable?.size ?? 0;

export default {
  meta: { title: 'Téléchargement | StarkLLM', description: `Téléchargez StarkLLM v${V} pour Windows : installeur, sommes de contrôle SHA-256, installation, prérequis et questions fréquentes.` },
  hero: { eyebrow: 'Téléchargement', h1: 'Télécharger StarkLLM', lede: 'Commencez avec la Windows Research Beta.' },
  helpCallout: { h: 'L’installation ne fonctionne pas ?', text: 'StarkLLM apporte son propre moteur ; le seul autre programme dont il a besoin est Ollama, pour les modèles d’IA, et il peut l’installer pour vous. La page d’aide propose une liste de contrôle avec un test pour chaque étape et des solutions aux problèmes les plus courants.', link: 'Ouvrir l’aide et le dépannage' },
  release: {
    h2: 'Paquet de la version',
    facts: [
      ['Version', `v${V} (application de bureau native, moteur inclus, sans besoin de Docker)`],
      ['Licence', 'Apache 2.0 (open source)'],
      ['Taille de l’installeur', `${mb(SETUP, 'fr-FR')} Mo (${bytes(SETUP, 'fr-FR')} octets)`],
      ...(PORTABLE ? [['Taille de l’application portable', `${mb(PORTABLE, 'fr-FR')} Mo (${bytes(PORTABLE, 'fr-FR')} octets)`]] : []),
    ],
    installer: `Télécharger l’installeur v${V} (.exe)`,
    portable: 'Portable (.exe)',
    github: 'GitHub',
    shaH: 'Sommes de contrôle SHA-256',
    shaLede: 'Pour vérifier l’intégrité du fichier avant de l’exécuter, comparez le hachage SHA-256 de votre téléchargement :',
    setupLabel: `StarkLLM-v${V}-Setup.exe (installeur Windows)`,
    portableLabel: `StarkLLM-v${V}-Portable.exe (exécutable portable)`,
    verify: 'Vérifier dans PowerShell :',
  },
  setup: {
    h2: 'Étapes d’installation',
    intro: 'StarkLLM apporte son propre moteur ; Docker Desktop et WSL2 ne sont pas nécessaires. Le premier démarrage télécharge les modèles d’IA que vous n’avez pas encore (environ 5 Go) et, si vous l’acceptez, Ollama ; les démarrages suivants ne prennent que quelques secondes. Déjà installé (2.0.7 ou plus récent) ? Paramètres › À propos de StarkLLM › Rechercher des mises à jour › Télécharger et installer.',
    steps: [
      { t: 'Exécuter l’installeur de StarkLLM', v: `Téléchargez et exécutez StarkLLM-v${V}-Setup.exe. L’installeur contient le moteur et crée des raccourcis sur le bureau.` },
      { t: 'Lancer StarkLLM', v: 'Cliquez sur le raccourci StarkLLM. L’application démarre son moteur et vérifie Ollama.' },
      { t: 'Installer Ollama s’il manque', v: 'Si Ollama n’est pas installé, la fenêtre propose « Installer Ollama pour moi » : StarkLLM télécharge l’installeur officiel depuis ollama.com (environ 2 Go), vérifie sa signature et l’installe ; aucun droit d’administrateur n’est nécessaire. Vous pouvez aussi installer Ollama vous-même depuis ollama.com.' },
      { t: 'Attendre la fin du premier démarrage', v: 'StarkLLM télécharge les modèles d’IA (par défaut qwen2.5:7b et nomic-embed-text, environ 5 Go ; les modèles adaptés que vous avez déjà dans Ollama sont utilisés), affiche la progression, puis s’ouvre dans sa propre fenêtre. S’il manque quelque chose, la fenêtre indique quoi et comment y remédier (journaux : %APPDATA%\\StarkLLM\\engine.log et engine-native.log).' },
      { t: 'Créer un espace de travail et ajouter un document', v: 'StarkLLM vous connecte en tant qu’utilisateur de ce PC ; aucun compte n’est à créer. Créez un espace de travail, ajoutez un document et posez une question à son sujet.' },
    ],
  },
  prereq: {
    h2: 'Liste de contrôle des prérequis',
    lede: 'Avant de lancer StarkLLM, vérifiez que tout ce qui suit est en place :',
    items: [
      ['Système', 'Windows 10 ou 11 (64 bits).'],
      ['Logiciels', 'Seulement Ollama, pour les modèles d’IA. StarkLLM peut installer la version officielle pour vous (« Installer Ollama pour moi »), ou vous le téléchargez sur ollama.com. Docker Desktop et WSL2 ne sont plus nécessaires depuis la v2.2.'],
      ['Modèles et disque', 'Téléchargés automatiquement au premier démarrage (environ 5 Go). Gardez au moins 15 Go d’espace disque libre.'],
      ['Matériel', 'Au minimum 8 Go de RAM (modèles 3B), 16 Go recommandés (modèles 7B). Un GPU NVIDIA avec 8 Go ou plus de VRAM est fortement recommandé ; depuis la v2.3, StarkLLM permet aussi à Ollama d’utiliser les cartes graphiques intégrées AMD Radeon et Intel Arc/Iris. Le manuel donne des repères par niveau de matériel.'],
      ['Formats pris en charge', 'Documents : PDF, Word (DOCX, avec tableaux), Excel (XLSX), PowerPoint (PPTX), EPUB, TXT, Markdown, CSV, JSON, XML, HTML, journaux et images (PNG, JPG, WEBP, TIFF, avec OCR), jusqu’à 100 Mo. Enregistrements : MP3, M4A, WAV, OGG, FLAC, le son des vidéos MP4, MOV et MKV et d’autres, jusqu’à 500 Mo.'],
    ],
  },
  smart: {
    h2: 'Signature du code : comment vérifier l’installeur',
    text: 'Depuis la v2.1.2, l’installeur, StarkLLM.exe et le programme de désinstallation sont signés avec un certificat de signature de code Certum délivré à « Open Source Developer Christian Stark », avec horodatage. La signature permet à Windows de vérifier l’éditeur et montre que les fichiers n’ont pas été modifiés après la signature. La fonction de mise à jour intégrée n’installe que des mises à jour signées sous ce nom.',
    checkH: 'Vérifier la signature vous-même',
    check: [
      `Faites un clic droit sur l’installeur téléchargé (StarkLLM-v${V}-Setup.exe) et choisissez « Propriétés » (Properties).`,
      'Ouvrez l’onglet « Signatures numériques » (Digital Signatures). Le signataire doit être « Open Source Developer Christian Stark ».',
      'Sélectionnez la signature et cliquez sur « Détails » (Details). Windows doit indiquer « Cette signature numérique est valide » (This digital signature is OK).',
    ],
    dlls: 'Certains composants Electron tiers inclus dans l’application (fichiers DLL) ne sont pas signés par nous. C’est voulu : l’installeur, StarkLLM.exe et le programme de désinstallation sont signés.',
    warnH: 'Windows affiche quand même un avertissement (SmartScreen ou Smart App Control) ?',
    warn: 'La signature permet à Windows de vérifier l’éditeur, mais Windows peut encore afficher un avertissement pour un fichier qu’il a rarement vu. Vérifiez le nom de l’éditeur comme indiqué ci-dessus et comparez la somme de contrôle SHA-256. Si les deux correspondent, vous pouvez continuer (dans SmartScreen : « Informations complémentaires » (More info), puis « Exécuter quand même » (Run anyway)). Si le nom est différent, si l’onglet « Signatures numériques » est absent ou si la somme de contrôle ne correspond pas, n’exécutez pas le fichier : téléchargez-le de nouveau depuis cette page et écrivez-nous à info@starkllm.com. Ne désactivez pas Smart App Control, SmartScreen ni aucun autre réglage de sécurité pour installer StarkLLM.',
  },
  notes: { h: 'Remarques importantes', items: ['StarkLLM est gratuit et open source (Apache 2.0).', 'Sous licence Apache 2.0, gratuit pour un usage personnel, de recherche et commercial.', 'Fourni « en l’état », sans garantie ni responsabilité d’aucune sorte.'] },
  walk: {
    h2: 'Visite guidée de l’application',
    lede: 'Un aperçu pas à pas de ce qui vous attend quand vous lancez StarkLLM sur votre ordinateur.',
    steps: [
      { t: 'Étape 1 : base de connaissances et espaces de travail', v: 'Reliez des dossiers locaux pour indexer des documents dans une base de connaissances durable.', kind: 'kb', alt: 'Configuration de la base de connaissances de StarkLLM (interface en anglais)' },
      { t: 'Étape 2 : discussion fondée sur vos documents', v: 'Posez des questions fondées sur les documents indexés, avec l’indication des fichiers sources.', kind: 'chat', alt: 'Discussion de StarkLLM fondée sur des documents (interface en anglais)' },
      { t: 'Étape 3 : des sources que vous pouvez vérifier', v: 'Cliquez sur une source sous une réponse pour lire, mot pour mot, les passages sur lesquels elle repose, et ouvrir le document à cette page.', kind: 'sources', alt: 'Les passages sur lesquels repose une réponse, affichés mot pour mot avec un lien vers la page (interface en anglais)' },
      { t: 'Étape 4 : des outils locaux sûrs', v: 'Examinez, modifiez et validez les appels d’outils du modèle directement dans la discussion.', kind: 'tool' },
      { t: 'Étape 5 : treize thèmes', v: 'Passez instantanément d’OLED Pitch Black à Cyberpunk Rose, Liquid Glass et d’autres.', kind: 'appearance', alt: 'Paramètres de StarkLLM et galerie de thèmes (interface en anglais)' },
    ],
  },
  faq: {
    h2: 'Questions fréquentes',
    items: [
      ['Mes données quittent-elles mon ordinateur ?', 'StarkLLM est conçu pour garder vos données sur votre machine. Les documents sont stockés dans une base de données ChromaDB locale sur votre PC, et l’inférence de l’IA passe par Ollama sur votre PC. Rien ne quitte votre PC, sauf si vous activez une fonction en ligne facultative : la recherche web, une tâche web, un fournisseur de modèles dans le cloud, un import depuis le web, les cours du marché, le téléphone hors de chez vous (via le relais StarkLLM) ou la vérification des mises à jour. Paramètres › Confidentialité et réseau liste chaque connexion établie par StarkLLM, et « Entièrement hors ligne » les refuse toutes. Les commandes que vous autorisez dans le Terminal et les serveurs d’outils que vous ajoutez s’exécutent comme vos propres programmes et ne figurent pas dans la liste.'],
      ['StarkLLM est-il gratuit ?', 'Oui. Il est gratuit et open source sous licence Apache 2.0, pour un usage personnel, de recherche et commercial. Pas d’abonnement, pas de télémétrie, pas d’offre cachée. Fourni « en l’état », sans garantie.'],
      ['Pourquoi les réponses peuvent-elles être lentes ?', 'La vitesse dépend de votre matériel. Sans GPU dédié, Ollama se rabat sur le processeur, ce qui est beaucoup plus lent. Un GPU NVIDIA dédié avec 8 Go ou plus de VRAM génère le texte bien plus vite.'],
      ['L’installeur est-il signé ? Que faire si SmartScreen ou Smart App Control affiche un avertissement ?', 'Oui. Depuis la v2.1.2, l’installeur, StarkLLM.exe et le programme de désinstallation sont signés par « Open Source Developer Christian Stark », afin que Windows puisse vérifier l’éditeur. Si Windows affiche quand même un avertissement, vérifiez le nom de l’éditeur (clic droit sur l’installeur, Propriétés, Signatures numériques) et comparez la somme de contrôle SHA-256 indiquée sur cette page. N’exécutez le fichier que si les deux correspondent. Ne désactivez pas Smart App Control ni aucun autre réglage de sécurité.'],
      ['De quel matériel ai-je besoin ?', 'Au minimum 8 Go de RAM pour les modèles 3B, 16 Go de RAM pour les modèles 7B. Pour les modèles des utilisateurs avancés (14B à 32B), 24 Go de VRAM ou 64 Go de mémoire système sont recommandés.'],
      ['Quelle différence entre la discussion normale et la discussion avec des documents ?', 'La discussion normale s’appuie uniquement sur les connaissances préentraînées du modèle. La discussion avec des documents utilise le RAG : elle cherche d’abord dans les documents que vous avez ajoutés, transmet les segments pertinents au modèle et répond avec des citations vérifiables.'],
      ['Quelle différence entre les documents d’un espace de travail et la base de connaissances ?', 'Les documents d’un espace de travail sont isolés dans un seul projet. La base de connaissances est un dossier global et durable sur votre ordinateur, que n’importe quelle discussion peut consulter.'],
      ['La fenêtre affiche « StarkLLM n’a pas pu démarrer ». Que faire ?', 'StarkLLM démarre lui-même son moteur et Ollama. Quand une étape échoue, la fenêtre indique ce qui manque (par exemple Ollama non installé, un port occupé, un fichier de programme bloqué par Windows, ou une erreur du moteur avec les dernières lignes du journal) et propose un bouton « Réessayer ». Les journaux se trouvent dans %APPDATA%\\StarkLLM (engine.log, et engine-native.log pour le moteur). La page d’aide indique les solutions.'],
      ['Et si l’application s’ouvre mais que la discussion ne se connecte pas ?', 'La discussion a besoin d’Ollama. Si la fenêtre indiquait « StarkLLM fonctionne sans son runtime d’IA », installez ou démarrez Ollama, puis cliquez sur « Réessayer » ; StarkLLM télécharge alors les modèles (qwen2.5:7b et nomic-embed-text). Le moteur communique avec Ollama sur votre PC à l’adresse 127.0.0.1:11434.'],
      ['Puis-je consulter le code source ?', 'Oui. StarkLLM est entièrement open source sur GitHub, à l’adresse StarkChristian/StarkLLM, sous licence Apache 2.0.'],
      ['Où envoyer des retours ou contribuer ?', 'Vos retours sont les bienvenus. Écrivez à info@starkllm.com ou ouvrez un ticket (issue) sur le dépôt GitHub.'],
    ],
  },
  contribute: { h2: 'Contribuer et proposer des améliorations', text: 'StarkLLM est un projet ouvert, en constante évolution. Si vous rencontrez un bogue, avez une idée de fonctionnalité ou souhaitez examiner le code source :', repo: 'Parcourir le code source et ouvrir des tickets.', mail: 'E-mail' },
};
