// Page produit en français (traduction assistée par IA, à relire par un locuteur natif).
import { V } from '../../../data/release';

export default {
  meta: { title: 'Produit | StarkLLM', description: 'Comment fonctionne StarkLLM : traitement local des documents, RAG hybride avec sources citées, Knowledge Base, outils locaux et treize thèmes. Tout se passe sur votre PC Windows.' },
  hero: { eyebrow: 'Produit', h1: 'Comment fonctionne StarkLLM', lede: 'Une chaîne de traitement entièrement locale, conçue dans le souci de la confidentialité des données.' },
  lifecycle: {
    h2: 'Le cycle de vie d’un document',
    lede: 'Quand vous ajoutez un PDF ou un fichier texte, le traitement reste sur votre PC.',
    steps: [
      { k: 'Lecture', v: 'Des analyseurs locaux extraient le texte brut. Les PDF numérisés et les images passent par une reconnaissance de texte (OCR) ou une analyse d’image locale avant le découpage.' },
      { k: 'Découpage', v: 'Un algorithme de découpage sémantique répartit le texte en blocs logiques qui se chevauchent.' },
      { k: 'Vectorisation', v: 'Un modèle d’embedding local transforme chaque bloc en vecteur, stocké dans votre base de données ChromaDB privée sur votre PC.' },
      { k: 'Réponse', v: 'Quand vous posez une question, les passages les plus pertinents sont injectés dans la fenêtre de contexte du modèle Ollama que vous avez choisi : la réponse s’appuie ainsi sur vos sources.' },
    ],
  },
  letters: {
    tag: 'Boîte de réception des documents',
    h2: 'Chaque courrier lu et classé',
    lede: 'Ajoutez un courrier sous forme de PDF, de scan ou de photo prise avec votre téléphone. StarkLLM le lit sur votre PC et vous suggère ce dont vous avez besoin. Il ne renomme, ne déplace et ne supprime jamais vos fichiers.',
    items: [
      { k: 'Ce qui est lu', v: 'Le type de courrier (facture, rappel, avis d’imposition, contrat, amende et autres), l’expéditeur, la date du courrier, les numéros de référence comme le numéro de client, de contrat ou d’impôt, les montants, les comptes bancaires et les échéances, dans les courriers en anglais et en allemand.' },
      { k: 'Chaque valeur a une source', v: 'Chaque valeur est retrouvée mot pour mot sur une page. Cliquez dessus : le courrier s’ouvre à cette page, avec la ligne surlignée.' },
      { k: 'Un dossier par expéditeur', v: 'Les courriers d’un même expéditeur sont regroupés, le dossier dont l’échéance est la plus proche en premier. Le même courrier en photo et en PDF est signalé, tout comme un courrier remplacé et une arnaque possible.' },
      { k: 'Vous décidez', v: 'Marquez un courrier comme traité ou donnez-lui votre propre titre. Le nombre de nouveaux courriers s’affiche à côté de « Inbox » (la boîte de réception).' },
    ],
  },
  deadlines: {
    tag: 'Échéances',
    h2: 'Les échéances sur la page d’accueil',
    lede: 'La page d’accueil affiche vos documents les plus récents ainsi que les échéances, les rendez-vous et les paiements qui s’y trouvent.',
    items: [
      { k: 'Avec le montant et la page', v: 'Chaque date est accompagnée de sa phrase, du montant s’il y en a un et de la page où elle a été lue.' },
      { k: 'Ajouter au calendrier', v: '« Ajouter au calendrier » enregistre les dates dans un fichier de calendrier, à votre demande.' },
      { k: 'Établi par des règles, sur ce PC', v: 'Les dates, les montants et les expéditeurs sont trouvés par des règles fixes appliquées au texte de vos courriers, et non devinés par un modèle : chaque valeur figure donc bien dans le document. Vérifiez le courrier avant d’agir.' },
      { k: 'Langues', v: 'Les courriers en anglais et en allemand sont compris. Les photos et les scans sont lus comme du texte anglais ou allemand. Les courriers dans d’autres langues sont classés et peuvent être recherchés, mais sans échéances ni montants. Prévu pour les prochaines versions (en cours de développement, pas encore publié) : les règles de courrier pour le français, l’espagnol, l’italien et le turc, ainsi que l’interface en espagnol, en français, en italien et en turc.' },
    ],
  },
  verify: {
    tag: 'Une intelligence vérifiable',
    h2: 'Des réponses que vous pouvez vérifier',
    lede: 'Les modèles de langage peuvent avancer des affirmations sans fondement quand ils répondent de mémoire seulement. StarkLLM y répond par la génération augmentée par la recherche (Retrieval-Augmented Generation, RAG).',
    items: [
      { k: 'Des réponses appuyées sur des sources', v: 'L’IA récupère des passages de texte dans vos propres documents avant de formuler une réponse.' },
      { k: 'Des passages à relire', v: 'Les réponses citent le nom du fichier et l’emplacement (page ou section). Cliquez sur une source sous une réponse pour voir, mot pour mot, les passages sur lesquels elle repose, et ouvrir le document à cette page.' },
      { k: 'Des alertes contre les faux courriers', v: 'Un encadré rouge apparaît au-dessus de la réponse si un courrier demande un paiement vers un compte étranger, par bon d’achat ou via un lien, s’il contient du texte destiné aux assistants IA, ou si un expéditeur indique soudain un autre compte.' },
    ],
  },
  library: {
    tag: 'Bibliothèque durable',
    h2: 'Une base de connaissances toujours à jour',
    lede: 'Les fichiers ajoutés à un Workspace conviennent aux projets cloisonnés. La Global Knowledge Base (base de connaissances globale) est votre bibliothèque de référence permanente, accessible depuis toutes les discussions.',
    items: [
      { k: 'Indexation de dossiers locaux', v: 'Reliez n’importe quel dossier de votre ordinateur Windows. StarkLLM indexe de façon récursive les fichiers pris en charge dans une collection vectorielle globale.' },
      { k: 'Accès universel', v: 'Interrogez la Knowledge Base depuis n’importe quelle discussion, quel que soit le Workspace dans lequel vous vous trouvez.' },
      { k: 'Synchronisation à intervalles réguliers', v: 'Environ une fois par minute, la Knowledge Base examine le dossier relié et réindexe les fichiers nouveaux ou modifiés.' },
    ],
    compareH3: 'Documents d’un Workspace ou Knowledge Base ?',
    compareLede: 'StarkLLM propose deux façons de donner du contexte à l’IA. Connaître la différence permet de garder vos documents bien rangés.',
    cards: [
      { title: 'Documents d’un Workspace', points: ['Liés à un seul Workspace.', 'Utile quand le travail doit rester cloisonné, pour éviter de mélanger les contextes.', 'Idéal pour des ensembles de documents temporaires ou propres à un projet.'], ex: 'Exemple', exText: 'Un dossier de contrats pour une affaire juridique ou un audit client précis.' },
      { title: 'Knowledge Base', points: ['Une couche globale et durable.', 'Utilisable dans toutes les discussions et tous les Workspaces à la fois.', 'Idéale pour la documentation de référence à long terme et les archives personnelles.'], ex: 'Exemple', exText: 'Votre bibliothèque de recherche en cours, un manuel ou les procédures internes de votre entreprise.' },
    ],
  },
  control: {
    tag: 'Contrôle local',
    h2: 'Réglez-le selon votre matériel',
    lede: 'StarkLLM vous donne la main sur votre environnement d’inférence local.',
    items: [
      { k: 'Choix du modèle', v: 'Passez de l’un à l’autre des modèles que vous avez téléchargés via Ollama (par exemple Qwen 2.5, Llama 3.2, Mistral) depuis l’interface de discussion.' },
      { k: 'Configuration à l’exécution', v: 'Ajustez la taille de la fenêtre de contexte, la température et d’autres paramètres avancés pour trouver le bon équilibre entre vitesse et profondeur de raisonnement.' },
      { k: 'Acheminement strictement local', v: 'Le trafic interne de l’API passe uniquement par des ports localhost de votre PC (127.0.0.1) : vos données restent sur votre ordinateur.' },
    ],
  },
  tools: {
    tag: 'Hôte MCP local intégré au processus',
    h2: 'Des outils qui demandent avant d’agir',
    lede: 'Contrairement aux outils d’IA dans le cloud, qui exécutent des commandes à distance, StarkLLM fait tourner un hôte d’outils dans son propre backend FastAPI. Les modèles obtiennent un accès vérifié, en lecture seule, à votre contenu indexé.',
    items: [
      { k: 'Trois outils intégrés', v: 'list_workspace_files examine les fichiers du Workspace actif. search_local_kb lance une recherche hybride, vectorielle et BM25, dans les archives personnelles. fetch_cited_chunk récupère le texte exact d’un passage.' },
      { k: 'Validation par l’humain', v: 'Chaque appel d’outil crée une carte dans la discussion. Vous pouvez en examiner les paramètres, modifier des valeurs ou annuler.' },
      { k: 'Défense contre les instructions piégées', v: 'Les marqueurs d’appel d’outil sont retirés des passages récupérés avant qu’ils n’arrivent dans le contexte du modèle, ce qui rend plus difficile l’injection d’instructions (prompt injection) via des documents (aucune technique n’élimine totalement ce risque).' },
      { k: 'Verrou d’exécution côté serveur', v: 'Un jeton d’appel à usage unique bloque l’exécution directe et les tentatives de rejeu.' },
    ],
    card: { title: 'in_process_tool: list_workspace_files', badge: 'Isolation locale', text: 'Lecteur de fichiers de Workspace, isolé par locataire. Le modèle examine les fichiers du Workspace actif sans avoir accès au système de fichiers de l’hôte.', example: 'Exemple de sortie', foot: 'Protégé par un verrou d’exécution côté serveur et un jeton d’appel à usage unique.' },
  },
  themes: {
    tag: 'Esthétique',
    h2: 'Treize thèmes',
    lede: 'Conçus pour travailler en se concentrant, quel que soit l’éclairage, avec un changement instantané.',
    items: [
      { k: 'Palette rapide', v: 'Cliquez sur l’icône de palette en bas de la barre latérale pour changer de thème sans interrompre votre recherche.' },
      { k: 'Préférence conservée', v: 'Votre thème actif est conservé après une actualisation ou un redémarrage.' },
    ],
  },
  superior: {
    h2: 'En quoi il diffère des clients de chat locaux basiques',
    lede: 'Beaucoup de clients de bureau se contentent d’une enveloppe de chat ou d’un découpage naïf des documents. StarkLLM est conçu comme un poste de travail de précision.',
    items: [
      { k: 'RAG hybride avec cross-encoder', v: 'La plupart des outils RAG de bureau s’appuient uniquement sur des embeddings vectoriels et peuvent passer à côté de mots-clés exacts. StarkLLM associe la fréquence des mots-clés (BM25) à une recherche vectorielle dense, puis reclasse les segments avec un cross-encoder TinyBERT local.' },
      { k: 'Fenêtre native et autonome', v: 'Ni onglets de navigateur ni barre d’adresse. Une application de bureau autonome, avec barre de titre sans cadre, écran de démarrage, intégration à la zone de notification et installeur Windows NSIS.' },
      { k: 'Exécuteur de code Python', v: 'Exécutez des calculs Python, des analyses de données et des formules sur votre propre ordinateur, avec des contrôles du code, des plafonds de mémoire et des limites de temps. Ce sont des limites de confort, pas une frontière de sécurité : n’exécutez que du code en lequel vous avez confiance.' },
      { k: 'API locale compatible OpenAI', v: 'Une passerelle locale qui expose /v1/chat/completions et /v1/models. Connectez des IDE comme Cursor, des outils comme Claude Code, des modules Obsidian ou vos propres scripts Python à vos modèles locaux.' },
    ],
  },
  tech: {
    h2: 'Technologies de base',
    lede: 'Découvrez l’architecture et les capacités de StarkLLM.',
  },
  cta: { h2: 'Envie d’essayer StarkLLM ?', text: 'Téléchargez la Windows Research Beta, gratuite et open source.', installer: `Télécharger l’installeur v${V}`, all: 'Tous les téléchargements', manual: 'Lire le manuel' },
  // Descriptions des 13 thèmes, indexées par le nom exact du thème.
  themeTexts: {
    'Midnight Indigo': 'Une ardoise profonde et classique, avec un riche éclat d’indigo et de violet.',
    'Cyberpunk Rose': 'Un rose et un rosé néon éclatants, avec une chaude lueur ambiante.',
    'OLED Pitch Black': 'Un vrai noir pur #000000, pour un contraste maximal et une meilleure autonomie.',
    'Liquid Glass': 'Un verre dépoli translucide, aux reflets irisés multicolores.',
    'Matrix Emerald': 'Une matrice d’obsidienne avec des accents vert émeraude électrique.',
    'Sunset Amber': 'Une ardoise volcanique avec des accents chauds d’ambre rougeoyant et de flammes.',
    'Arctic Frost': 'Un bleu marine glacial avec un cyan cristallin et un bleu givré.',
    'Daylight Minimal': 'Un look épuré de plein jour, avec des ombres douces et un contraste net.',
    'Doodle Chat': 'Un papier chaleureux avec, en fond, de petites poupées, des cœurs, des lettres et des étoiles dessinés.',
    'Doodle Night': 'Les mêmes dessins sur un fond de discussion sombre et apaisant.',
    'Flower Meadow': 'De petites fleurs roses, lilas et pêche sur un rose pâle tout doux.',
    'Matrix Code': 'Une pluie de code vert sur fond noir, dans une police à chasse fixe.',
    'Starry Night': 'Un ciel nocturne paisible plein de petites étoiles, avec de chauds accents dorés.',
  },
};
