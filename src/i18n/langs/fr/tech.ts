// Pages de fonctionnalités (/fr/tech-*) en français (traduction assistée par IA, à relire par un locuteur natif).
type Section = { h: string; p?: string; list?: string[] };
type Labels = { what: string; why: string; how: string; example: string; limits: string; more: string; cta: string; manual: string };

const labels: Labels = { what: 'De quoi il s’agit', why: 'Pourquoi c’est important', how: 'Comment StarkLLM s’y prend', example: 'Exemple', limits: 'Bon à savoir', more: 'Autres fonctionnalités', cta: 'Télécharger StarkLLM', manual: 'Lire le manuel' };

const s = (l: Labels, what: string, why: string, how: string | Section, example: string, limits?: string): Section[] => [
  { h: l.what, p: what },
  { h: l.why, p: why },
  typeof how === 'string' ? { h: l.how, p: how } : { h: l.how, ...how },
  { h: l.example, p: example },
  ...(limits ? [{ h: l.limits, p: limits }] : []),
];

const fr = labels;

const pages = {
  'tech-rag': {
    title: 'Des réponses tirées de vos documents (RAG) | StarkLLM', eyebrow: 'Génération augmentée par la recherche',
    h1: 'Des réponses tirées de vos documents', lede: 'StarkLLM lit les passages pertinents de vos fichiers avant de répondre, et vous dit où ils se trouvent.',
    shot: 'chat', shotAlt: 'StarkLLM répond à une question à partir d’un PDF local, avec ses sources citées (interface en anglais)',
    sections: s(fr,
      'La génération augmentée par la recherche (Retrieval-Augmented Generation, RAG) signifie que le modèle reçoit d’abord les passages de vos documents qui correspondent à votre question, et répond à partir d’eux.',
      'Un modèle de langage ne sait rien de vos contrats, de vos rapports ni de vos notes. Sans vos passages, il devine, et une supposition peut sembler convaincante.',
      'Votre question est recherchée dans le Workspace (espace de travail) et, si vous l’avez activée, dans votre Knowledge Base (base de connaissances). Les meilleurs passages sont reclassés puis transmis au modèle avec la question. Chaque réponse liste ses sources, avec le nom du fichier et la page ou la section.',
      'Vous demandez : « Quel est le délai de préavis dans le contrat Martin ? » StarkLLM trouve la clause dans le PDF, répond à partir d’elle et affiche « Contrat Martin.pdf, page 4 ».',
      'Le modèle peut quand même mal lire un passage. Pour les décisions importantes, ouvrez la page citée et vérifiez.'),
  },
  'tech-hybrid-search': {
    title: 'Recherche hybride | StarkLLM', eyebrow: 'Recherche',
    h1: 'Recherche hybride', lede: 'Chercher par le sens et par les mots exacts en même temps.',
    sections: s(fr,
      'La recherche hybride associe la recherche vectorielle, qui trouve des passages de même sens, et la recherche par mots-clés (BM25), qui trouve des mots, des noms et des nombres exacts.',
      'Certaines questions demandent le sens (« Comment gérons-nous une perte ? »), d’autres le terme exact (« facture 8492-B »). Chaque méthode seule passe à côté de l’un des deux.',
      'StarkLLM lance les deux recherches sur votre index local, fusionne les résultats et les reclasse avec un petit modèle local (cross-encoder TinyBERT) avant que le modèle de langage ne les voie.',
      'Une recherche sur « budget de la NASA » trouve un passage sur « le financement de l’Administration nationale de l’aéronautique et de l’espace » ainsi que le passage qui nomme exactement « NASA ».'),
  },
  'tech-semantic-chunking': {
    title: 'Découpage sémantique | StarkLLM', eyebrow: 'Indexation',
    h1: 'Découpage sémantique', lede: 'Les documents sont coupés là où le sens change, et non après un nombre fixe de caractères.',
    sections: s(fr,
      'Avant qu’un document puisse être recherché, il est découpé en passages (des « chunks », ou segments). Chaque passage est enregistré avec son fichier, sa page ou sa section.',
      'Un passage coupé au milieu d’une phrase ou d’une clause perd son sens, et la recherche ne renvoie alors que des demi-réponses.',
      'StarkLLM découpe le texte en phrases et commence un nouveau passage là où le sujet change, ce qu’il mesure avec le modèle d’embedding. Quand ce n’est pas possible, il coupe aux paragraphes et aux phrases, avec un léger chevauchement. Les tableaux (CSV, Excel, tableaux Word) sont conservés ligne par ligne, avec le nom de leurs colonnes.',
      'Un contrat est indexé clause par clause. Une question sur la « responsabilité » renvoie la clause de responsabilité entière, et non deux moitiés.',
      'Les longs fichiers sans ponctuation, comme certains journaux, peuvent quand même devenir de grands passages dans lesquels les valeurs isolées sont plus difficiles à retrouver.'),
  },
  'tech-knowledge-base': {
    title: 'Knowledge Base | StarkLLM', eyebrow: 'Bibliothèque',
    h1: 'Knowledge Base (base de connaissances)', lede: 'Un dossier sur votre PC que chaque discussion peut consulter.',
    shot: 'kb', shotAlt: 'La Knowledge Base de StarkLLM avec un dossier indexé (interface en anglais)',
    sections: s(fr,
      'La Knowledge Base est un dossier sur votre PC (par défaut « StarkLLM Knowledge Base », dans vos Documents) dont StarkLLM indexe les fichiers et qu’il maintient à jour.',
      'Les documents de référence, comme des procédures, des manuels ou des notes, servent dans de nombreux projets. Sans bibliothèque commune, vous ajouteriez les mêmes fichiers dans chaque Workspace.',
      'StarkLLM examine les dossiers enregistrés toutes les 30 secondes et indexe les fichiers nouveaux et modifiés ; « Sync Now » (Synchroniser maintenant) le fait immédiatement. Dans la discussion, l’interrupteur Knowledge Base décide si ces fichiers sont eux aussi consultés. Les sources qui en proviennent sont marquées « Personal KB ».',
      'Vous gardez le manuel de votre équipe dans ce dossier. Dans un Workspace consacré à un nouveau projet, vous pouvez interroger les fichiers du projet et le manuel dans la même question.'),
  },
  'tech-workspaces': {
    title: 'Workspaces | StarkLLM', eyebrow: 'Organisation',
    h1: 'Workspaces (espaces de travail)', lede: 'Un Workspace par projet, avec ses propres documents et discussions.',
    sections: s(fr,
      'Un Workspace contient les documents et les discussions d’un projet. La Knowledge Base est partagée entre tous les Workspaces.',
      'Si tous les fichiers sont au même endroit, une question sur un dossier peut ramener des passages d’un autre.',
      'Chaque Workspace a son propre index. Une discussion ne consulte que les documents de son Workspace, plus la Knowledge Base si vous l’activez.',
      'Vous passez de « Déclaration d’impôts 2025 » à « Refonte du site web ». Les réponses ne viennent plus que des documents du site.'),
  },
  'tech-multimodal': {
    title: 'Fichiers et images pris en charge | StarkLLM', eyebrow: 'Fichiers',
    h1: 'Fichiers, scans et images', lede: '14 types de fichiers, y compris les PDF numérisés et les photos.',
    sections: s(fr,
      'StarkLLM lit les fichiers PDF, Word (DOCX), Excel (XLSX), CSV, Markdown, texte, HTML, JSON, XML et les journaux, ainsi que les images (PNG, JPG). Vous les ajoutez avec le trombone ou en les déposant sur la fenêtre.',
      'Les vrais documents sont souvent des scans ou des photos, pas du texte que l’on peut sélectionner. Un simple extracteur de texte n’y trouve rien.',
      { p: 'Chaque type a son propre lecteur :', list: [
        'Les pages de PDF qui contiennent du texte sont lues directement ; les pages numérisées passent par une reconnaissance de texte (OCR) locale (Tesseract) et, si elle trouve trop peu de choses, par un modèle d’image local.',
        'Les images sont décrites et leur texte est lu par un modèle d’image local. La première image télécharge ce modèle une fois (llava, environ 4,4 Go).',
        'Les feuilles de calcul et les tableaux conservent le nom de leurs colonnes, de sorte que les valeurs restent liées à leur signification.',
      ] },
      'Vous ajoutez la photo d’un panneau de parking. Plus tard, vous demandez « À quel niveau se trouve le parking visiteurs ? » et vous obtenez « Niveau P2, places 40 à 55 », avec la photo comme source.',
      'L’écriture manuscrite et les textes petits ou flous sont lus de façon moins fiable. Le modèle d’image lit mieux le texte imprimé que les tableaux blancs.'),
  },
  'tech-local-models': {
    title: 'Modèles locaux avec Ollama | StarkLLM', eyebrow: 'Modèles',
    h1: 'Modèles locaux avec Ollama', lede: 'Le modèle de langage tourne sur votre PC, avec votre matériel.',
    sections: s(fr,
      'Ollama est un programme gratuit qui fait tourner des modèles de langage ouverts, comme Qwen, Llama ou Mistral, sur votre processeur ou votre carte graphique. StarkLLM l’utilise pour la discussion, la recherche et les images.',
      'Un modèle local n’a besoin ni de compte ni d’abonnement, continue de fonctionner sans internet une fois téléchargé, et vos documents ne vont jamais chez un fournisseur de modèles.',
      'StarkLLM démarre Ollama s’il est installé, télécharge les modèles par défaut au premier démarrage (environ 5 Go) et vous laisse changer de modèle dans le Model Hub. Les modèles à réflexion, comme Qwen 3, fonctionnent aussi.',
      'Dans un train sans Wi-Fi, vous ajoutez un PDF et vous lui posez des questions. Tout tourne sur l’ordinateur portable.',
      'La qualité et la vitesse des réponses dépendent du modèle et de votre matériel. Un modèle 7B demande environ 8 Go de RAM ; les modèles plus grands répondent mieux mais exigent plus de mémoire, idéalement sur une carte graphique.'),
  },
  'tech-privacy': {
    title: 'Confidentialité | StarkLLM', eyebrow: 'Confidentialité',
    h1: 'Ce qui reste sur votre PC', lede: 'Les documents, l’index, les discussions et les modèles restent sur votre ordinateur. Quelques fonctions facultatives se connectent à internet, et seulement quand vous les utilisez.',
    sections: [
      { h: fr.what, p: 'StarkLLM fait tourner sa base de données, son index de recherche et son interface web sur votre PC (dans son propre moteur, sans Docker depuis la v2.2), et le modèle de langage dans Ollama, lui aussi sur votre PC. Il n’a ni télémétrie ni compte sur un serveur.' },
      { h: fr.why, p: 'Des contrats, des dossiers de patients ou des données de recherche ne devraient pas être envoyés à un service cloud juste pour poser une question à leur sujet.' },
      { h: 'Fonctions en ligne facultatives', p: 'Elles ne se connectent à internet que lorsque vous les activez ou les lancez. La discussion indique quand une question quitte votre PC.', list: [
        'Recherche web (interrupteur dans la discussion) : votre question est envoyée à DuckDuckGo.',
        'Fournisseurs de modèles dans le cloud (Settings, par exemple DeepSeek, OpenRouter, Groq) : votre question et les passages trouvés sont envoyés à ce fournisseur.',
        'Import depuis YouTube et GitHub : l’application télécharge la transcription ou le dépôt que vous avez indiqué.',
        'Cours de marché (widget, désactivé par défaut) : récupérés sur Yahoo Finance.',
        'Vérification des mises à jour (demandée une fois au premier démarrage) : demande à GitHub le numéro de la version la plus récente, rien d’autre.',
      ] },
      { h: 'Téléchargements ponctuels', p: 'Les modèles d’IA (depuis Ollama), le reclasseur (à la première recherche), le modèle de reconnaissance vocale (à la première saisie vocale) et le modèle d’image (à la première image) sont téléchargés une seule fois. Aucun document, aucune question ni aucune donnée d’usage n’est envoyé avec eux.' },
      { h: fr.example, p: 'Après le premier démarrage, vous pouvez couper le Wi-Fi. L’ajout de documents, la recherche et les réponses continuent de fonctionner.' },
    ],
  },
  'tech-local-tools': {
    title: 'Outils locaux avec validation | StarkLLM', eyebrow: 'Outils',
    h1: 'Des outils locaux, avec votre accord', lede: 'Le modèle peut demander à consulter quelque chose. Rien ne s’exécute tant que vous ne l’avez pas confirmé.',
    sections: s(fr,
      'StarkLLM contient un petit hôte d’outils intégré (MCP). Le modèle peut demander trois outils en lecture seule : lister les fichiers du Workspace, rechercher dans la Knowledge Base et récupérer le texte exact d’un passage cité.',
      'Avec des outils, le modèle peut vérifier des faits au lieu de deviner. Sans contrôle, des outils pourraient faire des choses que vous ne souhaitez pas.',
      { p: 'Chaque appel d’outil s’arrête sur une carte dans la discussion :', list: [
        'La carte montre l’outil et ses arguments ; vous pouvez les modifier, lancer l’appel ou l’annuler.',
        'Les outils ne font que lire. Il n’y a ni interpréteur de commandes, ni écriture de fichiers, ni accès à internet.',
        'Le serveur n’accepte un appel d’outil qu’avec un jeton à usage unique provenant de cette carte.',
      ] },
      'Le modèle ne sait pas quelle version d’un document est la plus récente et demande à lister les fichiers du Workspace. Vous voyez la demande, vous la lancez, et la réponse s’appuie sur la vraie liste de fichiers.'),
  },
  'tech-voice': {
    title: 'Entrée et sortie vocales | StarkLLM', eyebrow: 'Voix',
    h1: 'Entrée et sortie vocales', lede: 'Posez vos questions à voix haute et écoutez la réponse, le tout traité sur votre PC.',
    shot: 'settings', shotAlt: 'Les paramètres de StarkLLM (interface en anglais)',
    sections: s(fr,
      'La reconnaissance vocale transforme votre question en texte ; la synthèse vocale lit la réponse à voix haute.',
      'Parler va plus vite que taper pour de longues questions, et écouter aide quand vos mains ou vos yeux sont occupés.',
      'StarkLLM utilise Whisper pour la reconnaissance vocale et des voix Piper pour l’anglais et l’allemand, les deux fonctionnant en local. Aucun son n’est envoyé à un service.',
      'En lisant un document papier, vous cliquez sur le microphone, posez votre question et écoutez la réponse.',
      'Le modèle de reconnaissance vocale est téléchargé à la première saisie vocale.'),
  },
  'tech-themes': {
    title: 'Thèmes | StarkLLM', eyebrow: 'Apparence',
    shot: 'appearance', shotAlt: 'Les paramètres de StarkLLM, Appearance : la galerie de thèmes (interface en anglais)',
    h1: 'Thèmes', lede: 'Treize thèmes de couleurs, du noir pur pour les écrans OLED aux thèmes clairs et aux thèmes à motifs.',
    sections: [
      { h: fr.what, p: 'StarkLLM propose treize thèmes : Midnight Indigo (par défaut), OLED Pitch Black, Liquid Glass, Cyberpunk Rose, Matrix Emerald, Sunset Amber, Arctic Frost et Daylight Minimal, plus cinq thèmes à motifs : Doodle Chat, Doodle Night, Flower Meadow, Matrix Code et Starry Night.' },
      { h: fr.why, p: 'Les longues séances fatiguent moins les yeux quand le contraste et la luminosité conviennent à votre écran et à votre pièce.' },
      { h: fr.how, p: 'Changez de thème avec le bouton de palette en bas de la barre latérale, ou dans Settings, Appearance (Paramètres, Apparence). Votre choix est enregistré et appliqué immédiatement.' },
    ],
  },
};

export default { labels, pages };
