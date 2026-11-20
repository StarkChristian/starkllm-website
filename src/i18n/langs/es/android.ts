// Página de Android en español (misma forma que el objeto inglés de src/i18n/android.ts).
export default {
  meta: { title: 'StarkLLM para Android (vista previa) | StarkLLM', description: 'Con StarkLLM para Android preguntas a tus documentos desde el móvil mientras siguen en tu PC con Windows: solo en la red de casa, cifrado, sin cuenta y sin nube. En prueba cerrada en Google Play.' },
  hero: { eyebrow: 'Android · Vista previa', h1: 'StarkLLM para Android', lede: 'Pregunta a tus documentos desde el móvil. El móvil pregunta y tu PC responde: los documentos, el índice de búsqueda y el modelo de IA se quedan en tu PC con Windows.' },
  status: {
    h2: 'Estado: en prueba cerrada, aún no publicada',
    text: 'La aplicación está en una prueba cerrada en Google Play antes de que todo el mundo pueda descargarla.',
    howH: 'Cómo participar',
    how: [
      'Escribe a info@starkllm.com con la dirección de correo de la cuenta de Google de tu móvil.',
      'Recibirás el enlace a la prueba en Google Play.',
      'En tu PC necesitas StarkLLM 2.4.0 o posterior. Llegará pronto; la página de descarga siempre tiene la versión actual.',
    ],
    mail: 'Escribir a info@starkllm.com',
    download: 'Página de descarga',
    iosH: 'iPhone',
    ios: 'Todavía no hay una aplicación de StarkLLM para iPhone (iOS); solo la aplicación para Android está en prueba cerrada.',
  },
  how: {
    h2: 'Cómo funciona',
    items: [
      { t: 'Actívalo en el PC', v: 'En StarkLLM en tu PC con Windows, abre Ajustes > Teléfono y activa la conexión con el móvil. Viene desactivada.' },
      { t: 'Empareja con un código QR', v: 'Elige «Mostrar código QR» en el PC y escanéalo una vez con la aplicación. Puedes emparejar varios PC, por ejemplo el de casa y el de la oficina.' },
      { t: 'Solo en la red de casa', v: 'El móvil solo llega al PC dentro de tu red doméstica. La conexión está cifrada con el certificado propio del PC, que el móvil fija, así que nadie más en la red puede hacerse pasar por tu PC.' },
    ],
  },
  features: {
    h2: 'Qué hace la aplicación',
    items: [
      { t: 'Preguntas sobre tus documentos', v: 'Las preguntas van a StarkLLM en tu PC; la respuesta llega poco a poco, con los documentos que ha usado.' },
      { t: 'Enviar cartas y archivos', v: 'Haz una foto de una carta, elige fotos o archivos (PDF, EPUB, Word, PowerPoint, texto, imágenes) o usa «Compartir» en otras aplicaciones. El PC los lee, también el texto de las fotos; las fotos se borran del móvil tras enviarlas.' },
      { t: 'Dictado', v: 'Mantén pulsado el botón del micrófono. El modelo de voz de tu PC lo convierte en texto, no un servicio en línea.' },
      { t: 'Plazos', v: 'Vencidos, hoy, esta semana y más adelante, como en el PC. Los recordatorios opcionales consultan el PC mientras el móvil está en casa, y un widget en la pantalla de inicio muestra los tres próximos.' },
      { t: 'Tres niveles por móvil', v: 'En el PC eliges qué puede hacer cada móvil: solo preguntar; también enviar documentos; también hacer una copia de seguridad ahora y poner StarkLLM totalmente sin conexión, cada vez confirmado con tu huella en el móvil.' },
      { t: 'Bloqueo, temas e idiomas', v: 'Bloqueo de la aplicación con tu huella, 13 temas y los seis idiomas de StarkLLM: inglés, alemán, español, francés, italiano y turco.' },
    ],
  },
  privacy: {
    h2: 'Tus documentos se quedan en tu PC',
    items: [
      'Los documentos, el índice de búsqueda y el modelo de IA se quedan en el PC. El móvil solo guarda lo que muestra (la lista de chats, el chat abierto, los próximos plazos) y sus ajustes.',
      'Sin cuenta, sin nube, sin servicio de notificaciones push, sin analítica.',
      'Una pregunta desde el móvil nunca sale a internet: ni búsqueda web ni modelos en la nube.',
    ],
  },
  req: {
    h2: 'Requisitos',
    items: [
      ['Móvil', 'Android 10 o posterior'],
      ['PC', 'StarkLLM 2.4.0 o posterior en Windows 10 u 11'],
      ['Red', 'El móvil y el PC en la misma red doméstica'],
    ],
    not: 'Aún no en esta primera versión: acceso fuera de casa, una aplicación para iPhone e iniciar sesión desde el móvil cuando StarkLLM en el PC tiene varias cuentas.',
  },
  cta: { h2: 'Pruébala antes', text: 'Escríbenos para unirte a la prueba cerrada. Mientras tanto, StarkLLM para Windows se descarga gratis.', mail: 'Unirme a la prueba', download: 'StarkLLM para Windows', product: 'Volver al producto' },
  privacyPolicy: {
    h2: 'Política de privacidad de la aplicación',
    intro: 'Esta es la política de privacidad de la aplicación «StarkLLM para Android» (versión del 20 de noviembre de 2026). La versión en alemán es la jurídicamente vinculante; las demás lenguas son traducciones informativas.',
    sections: [
      { h: 'Responsable', p: 'Christian Stark, Maxstr. 14, 52070 Aquisgrán, Alemania. Correo electrónico: info@starkllm.com. Más datos en el aviso legal (Impressum).' },
      { h: 'Ningún dato para nosotros', p: 'La aplicación no envía datos ni a nosotros ni a otras empresas. No hay cuenta con nosotros, ni analítica, ni publicidad, ni informes de errores, ni bibliotecas de terceros que transmitan datos (ni servicios de Google Play ni Firebase).' },
      { h: 'Solo tu propio PC', p: 'La aplicación solo se conecta a StarkLLM en los PC que tú mismo has emparejado, y solo en tu red doméstica (direcciones de red privadas). La conexión está cifrada (TLS) con el certificado propio del PC, que la aplicación fija al emparejar. Tus preguntas, las fotos y documentos que eliges y tus grabaciones de dictado van solo a ese PC y se procesan allí. Nosotros no recibimos nada.' },
      { h: 'Lo que se guarda en el móvil', p: 'Para cada PC emparejado: su nombre, sus direcciones de red, el puerto, la huella de su certificado y un token del dispositivo cifrado con una clave del Android Keystore. Además, tus ajustes (por ejemplo tema, bloqueo de la aplicación, recordatorios, espacio de trabajo y modelo elegidos) y una copia breve de los próximos plazos para el widget y los recordatorios. Las fotos y las grabaciones de dictado solo se guardan en el almacenamiento temporal de la aplicación y se borran tras enviarlas. Los datos de la aplicación quedan excluidos de las copias de seguridad de Android y de la transferencia a un dispositivo nuevo.' },
      { h: 'Permisos y para qué', p: 'Cámara: para escanear el código QR de tu PC y fotografiar cartas, solo cuando tocas. Micrófono: para dictar, solo mientras mantienes pulsado el botón; la grabación se convierte en texto en tu PC. Notificaciones: para los recordatorios opcionales de plazos y mientras llega una respuesta. Biometría: para el bloqueo opcional de la aplicación y para confirmar acciones en el PC; Android comprueba tu huella y la aplicación nunca la recibe. Internet y red: para llegar a tu PC en la red doméstica.' },
      { h: 'Borrar', p: 'Al desinstalar la aplicación se borran todos sus datos del móvil. «Desvincular este teléfono» borra del móvil el emparejamiento con ese PC; quita también el móvil en el PC en Ajustes > Teléfono.' },
      { h: 'Datos en tu PC', p: 'Lo que StarkLLM guarda y hace en tu PC se rige por la aplicación de escritorio de StarkLLM; consulta abajo «Cómo protege StarkLLM tu privacidad».' },
      { h: 'Google Play', p: 'Si instalas la aplicación desde Google Play, Google trata datos para ello según su propia política de privacidad. Google puede darnos estadísticas resumidas (por ejemplo el número de instalaciones y, de quienes lo permitieron en Android, informes de errores); con ellas no sabemos quién eres.' },
      { h: 'Tus derechos', p: 'A través de la aplicación no tratamos nosotros ningún dato personal tuyo. Si nos escribes, se aplica la política de privacidad de este sitio web, que también describe tus derechos según el RGPD (acceso, rectificación, supresión, limitación, oposición, portabilidad y reclamación ante una autoridad de control).' },
    ],
    links: { tech: 'Cómo protege StarkLLM tu privacidad', site: 'Política de privacidad de este sitio web', imprint: 'Aviso legal (Impressum)' },
  },
  productLink: { text: 'Novedad: con StarkLLM para Android preguntas a tus documentos desde el móvil, en tu red doméstica. Está en prueba cerrada en Google Play.', link: 'Sobre la aplicación para Android' },
};
