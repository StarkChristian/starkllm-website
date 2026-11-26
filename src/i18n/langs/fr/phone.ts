// Page Téléphone (2026). Les parties « Comment il se connecte » et les niveaux viennent de src/i18n/release250.ts (product.phone).
export default {
  meta: {
    title: 'Téléphone : StarkLLM pour Android | StarkLLM',
    description: 'L’application StarkLLM pour Android interroge votre PC sur vos documents, envoie des photos de courriers et affiche vos échéances. À la maison en direct, hors de chez vous seulement si vous l’autorisez, chiffré du téléphone jusqu’à votre PC.',
  },
  hero: {
    eyebrow: 'Android · aperçu',
    h1: 'Votre téléphone demande. Votre PC répond.',
    lede: 'L’application StarkLLM pour Android travaille avec votre PC. Les documents, l’index et le modèle d’IA restent sur le PC ; le téléphone pose les questions, envoie des photos de courriers et affiche vos échéances.',
  },
  does: {
    h2: 'Ce que fait le téléphone',
    items: [
      { icon: 'chat', title: 'Interroger vos documents', text: 'Les espaces de travail et les conversations de votre PC, des réponses qui s’affichent au fil de l’eau avec les documents utilisés, et l’avertissement pour les citations qui ne figurent pas dans vos documents.' },
      { icon: 'camera', title: 'Envoyer des courriers', text: 'Photographiez un courrier ou partagez un PDF depuis une autre application. Votre PC le lit, y compris le texte des photos. Les photos sont supprimées du téléphone après l’envoi.' },
      { icon: 'calendar', title: 'Échéances', text: 'En retard, aujourd’hui, cette semaine, plus tard. « Fait » marque une échéance sur le PC ; un widget sur l’écran d’accueil affiche les trois prochaines.' },
      { icon: 'mic', title: 'Dictée', text: 'Maintenez le bouton micro et parlez. C’est le modèle vocal de votre PC qui écrit le texte, pas un service en ligne.' },
      { icon: 'pc', title: 'Ce PC', text: 'Connexion, version, modèle d’IA, sauvegarde et protection en un coup d’œil. Avec le bon niveau : sauvegarder maintenant ou passer entièrement hors ligne, confirmé par votre empreinte digitale.' },
      { icon: 'lock', title: 'Verrouillage de l’app', text: 'Empreinte digitale à l’ouverture de l’application. Tant qu’il est activé : pas de captures d’écran ni d’aperçu dans les applications récentes.' },
    ],
  },
  pair: {
    h2: 'Associé en trois étapes, à la maison',
    steps: [
      { t: 'Activer la liaison', v: 'Sur le PC, ouvrez Paramètres › Téléphone et activez la liaison avec le téléphone. Elle est désactivée par défaut.' },
      { t: 'Afficher le code QR', v: 'Le code est valable 5 minutes et ne sert qu’une fois.' },
      { t: 'Le scanner avec l’application', v: 'Le téléphone mémorise le certificat du PC et ne parle ensuite qu’à ce PC.' },
    ],
    note: 'L’association ne se fait qu’à la maison, jamais via le relais. Vous pouvez associer plusieurs PC, et Paramètres › Téléphone sur le PC liste chaque téléphone avec « Retirer ».',
  },
  connects: { h2: 'Comment il se connecte', levelsH: 'Pour chaque téléphone, vous choisissez ce qu’il peut faire' },
  relay: {
    h2: 'Ce que voit le relais, et ce qu’il ne voit pas',
    lede: 'Hors de chez vous, le téléphone et votre PC se retrouvent sur le relais StarkLLM. Le chiffrement va du téléphone jusqu’à votre PC : le relais ne fait que transmettre des octets.',
    cols: ['Le relais voit', 'Le relais ne voit jamais', 'Le relais conserve'],
    sees: ['À quel PC une connexion est destinée (un identifiant aléatoire)', 'Quand une connexion est établie', 'Quelle quantité de données passe'],
    never: ['Vos questions et vos réponses', 'Vos documents et vos photos', 'Le jeton d’appareil ou votre compte'],
    keeps: ['Un identifiant aléatoire par PC', 'L’empreinte (hash) du secret du PC', 'Aucun contenu et aucun journal de contenu'],
  },
  limits: {
    h2: 'Bon à savoir',
    items: [
      'L’application est un aperçu. Il n’existe pas d’application pour iPhone.',
      'Hors de chez vous, cela ne fonctionne que si le PC est allumé, que StarkLLM tourne et qu’il n’est pas entièrement hors ligne.',
      'Hors de chez vous, toutes les données passent par le relais, chiffrées. Une connexion directe entre le téléphone et le PC est prévue, avec le relais en solution de repli.',
      'Une question posée depuis le téléphone reçoit sa réponse sur votre PC, sans recherche web ni modèles cloud, hors de chez vous également.',
      'Android 10 ou plus récent. L’application n’a ni outil d’analyse, ni service de rapport de plantage, ni services Google Play.',
    ],
  },
  play: { h2: 'Obtenir l’application Android', text: 'L’application Android est sur Google Play en phase de test. Si vous souhaitez l’obtenir sur Google Play, envoyez votre adresse e-mail à info@starkllm.com : vous recevrez le lien vers Google Play.' },
  shots: { pc: '12-settings-phone', phone: 'phone-01-chat' },
};
