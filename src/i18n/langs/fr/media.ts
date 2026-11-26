// Textes alternatifs des captures d’écran et titres/sous-titres des vidéos, par nom de média (voir « Media » dans README.md).
export default {
  shots: {
    '01-home': 'Page d’accueil de StarkLLM : les prochaines échéances et dates de paiement trouvées dans les courriers, chacune avec son montant et sa page, et les documents les plus récents',
    '02-inbox': 'Boîte de réception de StarkLLM : les courriers regroupés en un dossier par expéditeur, l’échéance la plus proche en premier, un courrier signalé comme arnaque possible',
    '03-chat-sources': 'Conversation dans StarkLLM : une question sur un courrier reçoit une réponse avec le montant et la date d’échéance, et les sources sous la réponse',
    '04-source-page': 'Une source ouverte à sa page, avec le passage sur lequel s’appuie la réponse mis en évidence',
    '05-scam-warning': 'Un avertissement rouge au-dessus d’une réponse : le courrier demande un paiement par bon d’achat et via un lien, et contient une note cachée destinée aux assistants IA',
    '06-book-summary': 'Une réponse sur un livre entier, construite à partir des résumés des chapitres, avec les pages concernées',
    '07-image-question': 'Une question sur une capture d’écran collée, à laquelle répond un modèle de vision sur le PC',
    '08-recording': 'L’enregistrement d’une réunion transcrit en document horodaté, et une question à son sujet',
    '09-web-task': 'Une tâche web dans la fenêtre de navigateur de StarkLLM avec sa barre d’adresse, les étapes listées à côté de la page',
    '10-terminal': 'Terminal dans un dossier de projet : une modification de fichier affichée avant d’être faite, avec des boutons pour l’autoriser ou non',
    '11-compare-models': 'Comparer des modèles : la même question, avec les réponses de deux modèles locaux côte à côte',
    '12-settings-phone': 'Paramètres, Téléphone : un téléphone Android associé, avec l’interrupteur « Aussi hors de chez vous (via le relais) »',
    '13-privacy-network': 'Paramètres, Confidentialité et réseau : la liste de toutes les connexions avec l’heure, l’hôte et le but, et l’interrupteur « Entièrement hors ligne »',
    '14-themes': 'Paramètres, Apparence : la galerie des thèmes, un thème clair et un thème sombre',
    '15-settings-models': 'Paramètres, modèles : le modèle de conversation, le modèle d’embedding et le modèle de vision de ce PC',
    'phone-01-chat': 'L’application StarkLLM pour Android : une réponse du PC avec ses sources',
  },
  videos: {
    'v1-letter-answer': { title: 'Un courrier, une question, une réponse avec sa source', caption: 'Un courrier est ajouté. La réponse indique le montant et la date, et un clic sur la source ouvre la page.' },
    'v2-web-task': { title: 'Une tâche web', caption: 'StarkLLM ouvre un site dans sa propre fenêtre de navigateur, le parcourt et répond avec le lien.' },
    'v3-terminal': { title: 'Terminal : de l’aide pour le code', caption: 'Une modification est d’abord affichée, s’exécute après un oui, et « Annuler les modifications des fichiers » la défait.' },
    'v4-inbox': { title: 'La boîte de réception', caption: 'Les courriers deviennent des dossiers par expéditeur, avec les échéances, les montants et la page d’où vient chacun.' },
    'v5-privacy': { title: 'Confidentialité et réseau', caption: 'Chaque connexion est listée, et un seul interrupteur met StarkLLM entièrement hors ligne.' },
  },
};
