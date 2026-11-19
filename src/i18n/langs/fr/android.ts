// Page Android en français (même forme que l’objet anglais de src/i18n/android.ts).
export default {
  meta: { title: 'StarkLLM pour Android (aperçu) | StarkLLM', description: 'Avec StarkLLM pour Android, vous interrogez vos documents depuis votre téléphone pendant qu’ils restent sur votre PC Windows : uniquement sur le réseau de la maison, chiffré, sans compte ni cloud. En test fermé sur Google Play.' },
  hero: { eyebrow: 'Android · Aperçu', h1: 'StarkLLM pour Android', lede: 'Interrogez vos documents depuis votre téléphone. Le téléphone pose la question, votre PC répond : les documents, l’index de recherche et le modèle d’IA restent sur votre PC Windows.' },
  status: {
    h2: 'État : en test fermé, pas encore publiée',
    text: 'L’application est en test fermé sur Google Play avant que tout le monde puisse la télécharger.',
    howH: 'Comment participer',
    how: [
      'Écrivez à info@starkllm.com en indiquant l’adresse e-mail du compte Google de votre téléphone.',
      'Vous recevez le lien vers le test sur Google Play.',
      'Sur votre PC, il vous faut StarkLLM 2.4.0 ou plus récent. Cette version arrive bientôt ; la page de téléchargement propose toujours la version actuelle.',
    ],
    mail: 'Écrire à info@starkllm.com',
    download: 'Page de téléchargement',
    iosH: 'iPhone',
    ios: 'Il n’existe pas encore d’application StarkLLM pour iPhone (iOS) ; seule l’application Android est en test fermé.',
  },
  how: {
    h2: 'Comment ça marche',
    items: [
      { t: 'L’activer sur le PC', v: 'Dans StarkLLM sur votre PC Windows, ouvrez Paramètres > Téléphone et activez la liaison avec le téléphone. Elle est désactivée par défaut.' },
      { t: 'Associer avec un code QR', v: 'Choisissez « Afficher le code QR » sur le PC et scannez-le une fois avec l’application. Vous pouvez associer plusieurs PC, par exemple à la maison et au bureau.' },
      { t: 'Réseau de la maison uniquement', v: 'Le téléphone n’atteint le PC que dans votre réseau domestique. La connexion est chiffrée avec le certificat propre du PC, que le téléphone épingle : personne d’autre sur le réseau ne peut se faire passer pour votre PC.' },
    ],
  },
  features: {
    h2: 'Ce que fait l’application',
    items: [
      { t: 'Questions sur vos documents', v: 'Les questions partent vers StarkLLM sur votre PC ; la réponse s’affiche au fur et à mesure, avec les documents utilisés.' },
      { t: 'Envoyer des courriers et des fichiers', v: 'Photographiez un courrier, choisissez des photos ou des fichiers (PDF, EPUB, Word, PowerPoint, texte, images) ou utilisez « Partager » dans d’autres applications. Le PC les lit, y compris le texte des photos ; les photos sont supprimées du téléphone après l’envoi.' },
      { t: 'Dictée', v: 'Maintenez le bouton du micro. Le modèle vocal de votre PC transforme la voix en texte, pas un service en ligne.' },
      { t: 'Échéances', v: 'En retard, aujourd’hui, cette semaine et plus tard, comme sur le PC. Des rappels facultatifs interrogent le PC tant que le téléphone est à la maison, et un widget sur l’écran d’accueil affiche les trois prochaines.' },
      { t: 'Trois niveaux par téléphone', v: 'Sur le PC, vous choisissez ce que chaque téléphone peut faire : seulement poser des questions ; aussi envoyer des documents ; aussi lancer une sauvegarde immédiate et passer StarkLLM entièrement hors ligne, chaque fois confirmé par votre empreinte sur le téléphone.' },
      { t: 'Verrouillage, thèmes, langues', v: 'Verrouillage de l’application par empreinte, 13 thèmes et les six langues de StarkLLM : anglais, allemand, espagnol, français, italien et turc.' },
    ],
  },
  privacy: {
    h2: 'Vos documents restent sur votre PC',
    items: [
      'Les documents, l’index de recherche et le modèle d’IA restent sur le PC. Le téléphone ne garde que ce qu’il affiche (la liste des discussions, la discussion ouverte, les prochaines échéances) et ses réglages.',
      'Pas de compte, pas de cloud, pas de service de notifications push, pas de mesure d’audience.',
      'Une question posée depuis le téléphone ne part jamais sur Internet : ni recherche web ni modèles dans le cloud.',
    ],
  },
  req: {
    h2: 'Configuration requise',
    items: [
      ['Téléphone', 'Android 10 ou plus récent'],
      ['PC', 'StarkLLM 2.4.0 ou plus récent sous Windows 10 ou 11'],
      ['Réseau', 'Le téléphone et le PC sur le même réseau domestique'],
    ],
    not: 'Pas encore dans cette première version : l’accès hors de la maison, une application pour iPhone et la connexion depuis le téléphone quand StarkLLM sur le PC a plusieurs comptes.',
  },
  cta: { h2: 'L’essayer en avant-première', text: 'Écrivez-nous pour rejoindre le test fermé. En attendant, StarkLLM pour Windows se télécharge gratuitement.', mail: 'Rejoindre le test', download: 'StarkLLM pour Windows', product: 'Retour au produit' },
  productLink: { text: 'Nouveau : avec StarkLLM pour Android, vous interrogez vos documents depuis votre téléphone, dans votre réseau domestique. L’application est en test fermé sur Google Play.', link: 'À propos de l’application Android' },
};
