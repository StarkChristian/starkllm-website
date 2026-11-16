// Page de téléchargement en français (traduction assistée par IA, à relire par un locuteur natif).
import { V, RELEASE } from '../../../data/release';

const mb = (b: number, locale: string) => (b / 1_000_000).toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const bytes = (b: number, locale: string) => b.toLocaleString(locale);
const SETUP = RELEASE.setup.size, PORTABLE = RELEASE.portable?.size ?? 0;

export default {
  meta: { title: 'Téléchargement | StarkLLM', description: `Téléchargez StarkLLM v${V} pour Windows : installeur, sommes de contrôle SHA-256, installation, prérequis et questions fréquentes.` },
  hero: { eyebrow: 'Téléchargement', h1: 'Télécharger StarkLLM', lede: 'Commencez avec la Windows Research Beta.' },
  helpCallout: { h: 'L’installation ne fonctionne pas ?', text: 'StarkLLM a besoin de Docker Desktop et d’Ollama sur votre PC ; depuis la v2.0.1, l’application démarre les deux ainsi que son moteur, sans intervention de votre part. La page d’aide propose une liste de contrôle avec un test pour chaque étape et des solutions aux 24 problèmes les plus courants.', link: 'Ouvrir l’aide et le dépannage' },
  release: {
    h2: 'Paquet de la version',
    facts: [
      ['Version', `v${V} (application de bureau native, qui démarre son propre moteur)`],
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
    intro: 'Deux programmes s’installent une seule fois, puis StarkLLM s’occupe du reste. Le premier démarrage télécharge le moteur et les modèles d’IA que vous n’avez pas encore (plusieurs Go, environ 10 à 20 minutes) ; les démarrages suivants ne prennent que quelques secondes.',
    steps: [
      { t: 'Installer Docker Desktop', v: 'Installez Docker Desktop (avec WSL2) depuis docker.com, lancez-le une fois et terminez sa configuration. Il peut vous demander de redémarrer le PC.' },
      { t: 'Installer Ollama', v: 'Installez Ollama depuis ollama.com. Inutile de récupérer les modèles à la main : StarkLLM télécharge qwen2.5:7b et nomic-embed-text lors de son premier démarrage.' },
      { t: 'Exécuter l’installeur de StarkLLM', v: `Téléchargez et exécutez StarkLLM-v${V}-Setup.exe. L’installeur crée des raccourcis sur le bureau.` },
      { t: 'Lancer StarkLLM et attendre la fin du premier démarrage', v: 'Cliquez sur le raccourci StarkLLM. L’application démarre Docker Desktop et Ollama, télécharge les modèles, construit son moteur et affiche la progression, puis ouvre StarkLLM dans sa propre fenêtre. S’il manque quelque chose, la fenêtre indique quoi et comment y remédier (journal : %APPDATA%\\StarkLLM\\engine.log).' },
      { t: 'Créer votre compte', v: 'Créez le premier compte ; c’est l’administrateur de cette installation (sauvegarde et restauration). Créez ensuite un Workspace (espace de travail) et ajoutez un document.' },
    ],
  },
  prereq: {
    h2: 'Liste de contrôle des prérequis',
    lede: 'Avant de lancer StarkLLM, vérifiez que tout ce qui suit est en place :',
    items: [
      ['Système', 'Windows 10 ou 11 avec WSL2 activé.'],
      ['Docker Desktop', 'Installé une fois (StarkLLM le démarre). Sans lui, le moteur ne peut pas fonctionner.'],
      ['Ollama', 'Installé en natif sous Windows (StarkLLM le démarre). À télécharger sur ollama.com.'],
      ['Modèles et disque', 'Téléchargés automatiquement au premier démarrage (environ 5 Go). Gardez au moins 15 Go d’espace disque libre.'],
      ['Matériel', 'Au minimum 8 Go de RAM (modèles 3B), 16 Go recommandés (modèles 7B). Un GPU NVIDIA avec 8 Go ou plus de VRAM est fortement recommandé. Le manuel donne des repères par niveau de matériel.'],
      ['Formats pris en charge', 'PDF, DOCX (avec tableaux), TXT, Markdown, CSV, XLSX, JSON, XML, journaux, HTML et images (PNG, JPG avec OCR).'],
    ],
  },
  smart: {
    h2: 'Windows SmartScreen et avertissement à l’exécution',
    text: 'Les fichiers téléchargés sur le web portent un indicateur Mark of the Web (MOTW), et l’installeur de StarkLLM n’est pas signé numériquement : Windows SmartScreen peut donc afficher un avertissement quand vous les exécutez. Cliquez sur « Informations complémentaires » (More info), puis sur « Exécuter quand même » (Run anyway). Pour les scripts de lancement, vous pouvez aussi exécuter unblock.ps1 dans PowerShell afin de supprimer l’indicateur localement.',
    optsH: 'Autres façons de lancer l’application',
    optsLede: 'Elles concernent le dossier portable ou l’archive ZIP qui contient les scripts de lancement.',
    opts: [
      { t: 'Option A : exécuter start.exe depuis un terminal', v: 'start.exe est un lanceur autonome. Il vérifie Docker Desktop et Ollama, construit les conteneurs et ouvre votre navigateur.', ol: ['Dans l’Explorateur de fichiers, à l’intérieur du dossier extrait, cliquez dans la barre d’adresse, tapez cmd et appuyez sur Entrée.', 'Tapez start.exe et appuyez sur Entrée. Si SmartScreen affiche un avertissement, cliquez sur « Informations complémentaires » (More info), puis sur « Exécuter quand même » (Run anyway).'] },
      { t: 'Option B : exécuter start.cmd', v: 'Pour exécuter directement un script de commandes, ouvrez un terminal dans le dossier extrait et lancez start.cmd (dans PowerShell : .\\start.cmd).' },
      { t: 'Option C : Docker Compose directement', v: 'Pour utiliser la ligne de commande Docker standard :', code: 'docker compose up --build -d' },
      { t: 'Option D : exécuter unblock.ps1', v: 'Si les stratégies d’exécution bloquent les scripts, ouvrez PowerShell dans le dossier extrait et exécutez :', code: 'powershell -ExecutionPolicy Bypass -File unblock.ps1', after: 'Cela ne retire les indicateurs SmartScreen que des fichiers situés dans le dossier StarkLLM actuel. Vos paramètres de sécurité Windows globaux ne sont pas modifiés. Exécutez ensuite start.exe ou start.cmd.' },
    ],
  },
  notes: { h: 'Remarques importantes', items: ['StarkLLM est gratuit et open source (Apache 2.0).', 'Sous licence Apache 2.0, gratuit pour un usage personnel, de recherche et commercial.', 'Fourni « en l’état », sans garantie ni responsabilité d’aucune sorte.'] },
  walk: {
    h2: 'Visite guidée de l’application',
    lede: 'Un aperçu pas à pas de ce qui vous attend quand vous lancez StarkLLM sur votre ordinateur.',
    steps: [
      { t: 'Étape 1 : le démarrage', v: 'StarkLLM démarre Docker Desktop, Ollama et son moteur, et affiche chaque étape jusqu’à l’ouverture de l’application. Les développeurs peuvent aussi démarrer le moteur depuis le dossier du projet avec start.exe ou start.cmd (illustré ici).', kind: 'console' },
      { t: 'Étape 2 : Knowledge Base et Workspaces', v: 'Reliez des dossiers locaux pour indexer des documents dans une couche Knowledge Base (base de connaissances) durable.', kind: 'kb', alt: 'Configuration de la Knowledge Base de StarkLLM (interface en anglais)' },
      { t: 'Étape 3 : discussion fondée sur vos documents', v: 'Posez des questions fondées sur les documents indexés, avec l’indication des fichiers sources.', kind: 'chat', alt: 'Discussion de StarkLLM fondée sur des documents (interface en anglais)' },
      { t: 'Étape 4 : des sources que vous pouvez vérifier', v: 'Cliquez sur une source sous une réponse pour lire, mot pour mot, les passages sur lesquels elle repose, et ouvrir le document à cette page.', kind: 'sources', alt: 'Les passages sur lesquels repose une réponse, affichés mot pour mot avec un lien vers la page (interface en anglais)' },
      { t: 'Étape 5 : des outils locaux sûrs', v: 'Examinez, modifiez et validez les appels d’outils du modèle directement dans la discussion.', kind: 'tool' },
      { t: 'Étape 6 : treize thèmes', v: 'Passez instantanément d’OLED Pitch Black à Cyberpunk Rose, Liquid Glass et d’autres.', kind: 'appearance', alt: 'Paramètres de StarkLLM et galerie de thèmes (interface en anglais)' },
    ],
  },
  faq: {
    h2: 'Questions fréquentes',
    items: [
      ['Mes données quittent-elles mon ordinateur ?', 'StarkLLM est conçu pour garder vos données sur votre machine. Les documents sont stockés dans un conteneur ChromaDB local, et l’inférence de l’IA passe par Ollama sur votre hôte. En fonctionnement local normal, aucune donnée n’est transmise à l’extérieur.'],
      ['StarkLLM est-il gratuit ?', 'Oui. Il est gratuit et open source sous licence Apache 2.0, pour un usage personnel, de recherche et commercial. Pas d’abonnement, pas de télémétrie, pas d’offre cachée. Fourni « en l’état », sans garantie.'],
      ['Pourquoi les réponses peuvent-elles être lentes ?', 'La vitesse dépend de votre matériel. Sans GPU dédié, Ollama se rabat sur le processeur, ce qui est beaucoup plus lent. Un GPU NVIDIA dédié avec 8 Go ou plus de VRAM génère le texte bien plus vite.'],
      ['Pourquoi Windows SmartScreen met-il en garde contre les lanceurs téléchargés ?', 'Windows ajoute un attribut Mark of the Web aux fichiers téléchargés depuis internet. Quand vous exécutez start.exe, cliquez sur « Informations complémentaires » (More info), puis sur « Exécuter quand même » (Run anyway). Vous pouvez aussi lancer start.cmd depuis un terminal, ou exécuter unblock.ps1 pour retirer l’indicateur localement.'],
      ['De quel matériel ai-je besoin ?', 'Au minimum 8 Go de RAM pour les modèles 3B, 16 Go de RAM pour les modèles 7B. Pour les modèles des utilisateurs avancés (14B à 32B), 24 Go de VRAM ou 64 Go de mémoire système sont recommandés.'],
      ['Quelle différence entre la discussion normale et la discussion avec des documents ?', 'La discussion normale s’appuie uniquement sur les connaissances préentraînées du modèle. La discussion avec des documents utilise le RAG : elle cherche d’abord dans les documents que vous avez ajoutés, transmet les segments pertinents au modèle et répond avec des citations vérifiables.'],
      ['Quelle différence entre les documents d’un Workspace et la Knowledge Base ?', 'Les documents d’un Workspace sont isolés dans un seul projet. La Knowledge Base est un dossier global et durable sur votre ordinateur, que n’importe quelle discussion peut consulter.'],
      ['La fenêtre affiche « StarkLLM could not start ». Que faire ?', 'Depuis la v2.0.1, l’application démarre elle-même Docker Desktop, Ollama et son moteur. Quand une étape échoue, la fenêtre indique ce qui manque (par exemple Docker Desktop non installé, un port occupé, ou une erreur du moteur avec les dernières lignes du journal) et propose un bouton Retry (Réessayer). Le journal complet se trouve dans %APPDATA%\\StarkLLM\\engine.log. Avec la v2.0.0, la fenêtre restait simplement sur « Connecting to local engine… » ; veuillez installer la v2.0.1.'],
      ['Et si l’application s’ouvre mais que la discussion ne se connecte pas ?', 'La discussion a besoin d’Ollama. Si la fenêtre indiquait « StarkLLM is running without its AI runtime », installez ou démarrez Ollama, puis cliquez sur Retry ; StarkLLM télécharge alors les modèles (qwen2.5:7b et nomic-embed-text). Le moteur communique avec Ollama sur votre PC via host.docker.internal:11434.'],
      ['Puis-je consulter le code source ?', 'Oui. StarkLLM est entièrement open source sur GitHub, à l’adresse StarkChristian/StarkLLM, sous licence Apache 2.0.'],
      ['Où envoyer des retours ou contribuer ?', 'Vos retours sont les bienvenus. Écrivez à info@starkllm.com ou ouvrez un ticket (issue) sur le dépôt GitHub.'],
    ],
  },
  contribute: { h2: 'Contribuer et proposer des améliorations', text: 'StarkLLM est un projet ouvert, en constante évolution. Si vous rencontrez un bogue, avez une idée de fonctionnalité ou souhaitez examiner le code source :', repo: 'Parcourir le code source, examiner les lanceurs et ouvrir des tickets.', mail: 'E-mail' },
};
