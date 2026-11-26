// Vue d’ensemble de la confidentialité (2026). La politique de confidentialité juridique de ce site reste à part
// (/datenschutz, /privacy-policy). Sources : voir ../en/privacy.ts.
export default {
  meta: {
    title: 'Confidentialité : ce qui reste sur votre PC | StarkLLM',
    description: 'Ce qui ne quitte jamais votre PC, chaque connexion que StarkLLM peut établir et quand, la protection des données au repos, les versions signées, la liste des composants logiciels, et comment tout vérifier vous-même.',
  },
  hero: {
    eyebrow: 'Confidentialité',
    h1: 'Privé par conception. Vérifiable par vous.',
    lede: 'StarkLLM est conçu pour que vos documents n’aient jamais besoin du cloud. Ce qui passe en ligne, c’est vous qui le décidez, vous voyez chaque connexion, et vous n’êtes pas obligé de nous croire sur parole.',
  },
  stays: {
    h2: 'Ce qui ne quitte jamais votre PC',
    lede: 'Tout cela reste sur votre propre disque et votre propre processeur ou carte graphique, quoi que vous activiez.',
    items: [
      { icon: 'doc', title: 'Vos documents', text: 'Courriers, contrats, livres, scans, photos et enregistrements, ainsi que le texte qui en est extrait.' },
      { icon: 'chat', title: 'Vos conversations', text: 'Les questions, les réponses et leurs sources, sauf si vous choisissez vous-même un modèle cloud.' },
      { icon: 'search', title: 'L’index de recherche', text: 'Les passages et les vecteurs de chaque document, et les résumés des grands documents.' },
      { icon: 'pc', title: 'Les modèles d’IA', text: 'Ils tournent sur votre PC grâce à Ollama. Après le premier téléchargement, StarkLLM fonctionne sans internet.' },
      { icon: 'inbox', title: 'Boîte de réception et échéances', text: 'Les expéditeurs, montants, comptes et dates sont trouvés par des règles, sur votre PC.' },
      { icon: 'eyeoff', title: 'Rien sur vous', text: 'Aucune télémétrie, aucun rapport de plantage, aucune statistique d’utilisation, aucune publicité, aucun compte sur un serveur.' },
    ],
  },
  online: {
    h2: 'Ce qui passe en ligne, et quand',
    lede: 'Chaque connexion que StarkLLM peut établir, comme dans Paramètres › Confidentialité et réseau. Chacune reste désactivée jusqu’à ce que vous l’activiez ou la lanciez, ou n’a lieu qu’une fois, pour un téléchargement que vous avez demandé.',
    cols: ['Connexion', 'Destination', 'Quand', 'À l’installation'],
    rows: [
      { what: 'Vérification des mises à jour', host: 'api.github.com', when: 'Au démarrage, si vous l’avez accepté au premier démarrage', def: 'Désactivée tant que vous n’acceptez pas' },
      { what: 'Téléchargement des mises à jour', host: 'github.com', when: 'Seulement après « Télécharger et installer »', def: 'Désactivé' },
      { what: 'Modèles d’IA', host: 'registry.ollama.ai (via Ollama)', when: 'Au premier démarrage, pour les modèles manquants', def: 'Si nécessaire' },
      { what: 'Installeur d’Ollama', host: 'ollama.com', when: 'Seulement après « Installer Ollama pour moi »', def: 'Désactivé' },
      { what: 'Recherche web', host: 'DuckDuckGo ; s’il ne répond pas : Startpage, Mojeek, Wikipedia', when: 'Par question, avec le bouton « Recherche web » activé', def: 'Désactivée' },
      { what: 'Tâches web', host: 'Les sites de la tâche que vous avez saisie', when: 'Seulement pour une tâche web que vous lancez', def: 'Désactivées' },
      { what: 'Imports depuis le web', host: 'L’adresse que vous saisissez, YouTube, GitHub', when: 'Seulement après « + URL web », « + Vidéo YouTube » ou « + Dépôt GitHub »', def: 'Désactivés' },
      { what: 'Fournisseurs de modèles cloud', host: 'Le fournisseur que vous indiquez (par exemple OpenAI, DeepSeek, OpenRouter, Groq)', when: 'À chaque conversation tant qu’un tel fournisseur est sélectionné ; la conversation affiche un badge', def: 'Désactivés' },
      { what: 'Modèles cloud d’Ollama', host: 'ollama.com (via Ollama)', when: 'Seulement si vous choisissez un modèle dont le nom se termine par « cloud »', def: 'Désactivés' },
      { what: 'Cours du marché', host: 'Yahoo Finance, CoinGecko', when: 'Seulement après avoir activé le widget', def: 'Désactivés' },
      { what: 'Modèles vocaux', host: 'huggingface.co', when: 'Première utilisation de la saisie vocale ou d’un enregistrement', def: 'Désactivés jusqu’à la première utilisation' },
      { what: 'Langues de reconnaissance de texte', host: 'github.com', when: 'Seulement après « Télécharger » dans les Paramètres', def: 'Désactivées' },
      { what: 'Téléphone à la maison', host: 'Entrante, depuis un téléphone associé sur votre réseau domestique', when: 'Après avoir activé la liaison avec le téléphone et associé un téléphone', def: 'Désactivé' },
      { what: 'Téléphone hors de chez vous', host: 'relay.starkllm.com (chiffré du téléphone jusqu’à votre PC)', when: 'Seulement pour les téléphones que vous avez autorisés hors de chez vous', def: 'Désactivé' },
    ],
    note: 'Les commandes que vous autorisez dans le Terminal et les serveurs d’outils que vous ajoutez s’exécutent comme vos propres programmes : ils ne figurent pas dans la liste, et ce à quoi ils se connectent ne dépend que d’eux. Ollama et Windows ont leurs propres vérifications de mises à jour, que StarkLLM ne contrôle pas.',
  },
  offline: {
    h2: 'Un seul interrupteur : entièrement hors ligne',
    text: '« Entièrement hors ligne », dans Paramètres › Confidentialité et réseau, refuse toute fonction en ligne, ferme la liaison avec votre téléphone et la connexion au relais, et ne télécharge jamais rien, pas même une mise à jour. Vos documents, la boîte de réception et les modèles locaux continuent de fonctionner. Au premier démarrage, StarkLLM vous demande une fois s’il doit rester en ligne ou passer entièrement hors ligne.',
  },
  atRest: {
    h2: 'Protection des données au repos',
    lede: 'Facultative, dans Paramètres › Protection : pour un portable perdu, un autre utilisateur du même PC, ou une sauvegarde dans un dossier cloud.',
    items: [
      { k: 'Chiffré sur le disque', v: 'Les documents, les conversations, les noms et les titres sont chiffrés sur le disque, et l’index de recherche peut lui aussi être verrouillé. La clé est liée à votre compte Windows.' },
      { k: 'Phrase de passe au démarrage', v: 'Une phrase de passe facultative, avec une clé de récupération. La phrase de passe n’est jamais enregistrée.' },
      { k: 'Sauvegarde chiffrée', v: 'Un seul fichier de sauvegarde que vous pouvez garder n’importe où, même dans un dossier cloud ; sans la phrase de passe, il est illisible. Une sauvegarde automatique hebdomadaire conserve plusieurs copies.' },
    ],
    limits: 'Elle ne protège pas contre un logiciel malveillant qui s’exécute sous votre compte pendant que StarkLLM est ouvert. BitLocker reste recommandé : il protège aussi les programmes et les modèles.',
  },
  signed: {
    h2: 'Des versions signées',
    text: 'Depuis la 2.1.2, l’installeur, StarkLLM.exe, le programme de désinstallation et les fichiers de programme du moteur sont signés avec un certificat Certum délivré à « Open Source Developer Christian Stark ». Le système de mise à jour intégré n’installe que des mises à jour signées à ce nom.',
    link: 'Politique de signature du code',
  },
  sbom: {
    h2: 'La liste des composants de chaque version',
    text: 'Chaque version sur GitHub est accompagnée d’une nomenclature logicielle (SBOM, CycloneDX) pour l’application et pour le moteur : la liste de chaque bibliothèque incluse, avec sa version.',
    link: 'Les versions sur GitHub',
  },
  check: {
    h2: 'Vérifiez par vous-même',
    lede: 'Vous n’avez pas à vous fier aux écrans de StarkLLM. Activez « Entièrement hors ligne », utilisez l’application, et regardez.',
    steps: [
      { t: 'Moniteur de ressources', v: 'Win + R, « resmon », onglet Réseau. Entièrement hors ligne, StarkLLM.exe, python.exe et ollama.exe ne doivent communiquer qu’avec 127.0.0.1.' },
      { t: 'PowerShell', v: 'Listez chaque connexion ouverte qui ne va pas vers ce PC, avec le programme qui l’a établie :' },
      { t: 'Wireshark', v: 'La vérification la plus poussée : capturez le trafic de votre carte réseau et filtrez le trafic local. Activez ensuite la recherche web et regardez DuckDuckGo apparaître : vous savez alors que la vérification fonctionne.' },
    ],
    code: "Get-NetTCPConnection -State Established |\n  Where-Object { $_.RemoteAddress -notin '127.0.0.1','::1' } |\n  ForEach-Object { $p = Get-Process -Id $_.OwningProcess -ErrorAction SilentlyContinue\n    [pscustomobject]@{ Process = $p.ProcessName; Remote = \"$($_.RemoteAddress):$($_.RemotePort)\" } } |\n  Sort-Object Process, Remote | Format-Table -AutoSize",
    link: 'Le guide complet sur GitHub (en anglais)',
  },
  site: {
    h2: 'Et ce site web ?',
    text: 'Il ne dépose aucun cookie, n’utilise aucun outil d’analyse et ne charge ni polices, ni scripts, ni vidéos depuis d’autres serveurs. Lucy, l’assistante de ces pages, répond dans votre navigateur ; vos questions ne sont envoyées nulle part.',
    link: 'Politique de confidentialité de ce site',
  },
};
