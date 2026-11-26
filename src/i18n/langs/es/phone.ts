export default {
  meta: {
    title: 'Teléfono: StarkLLM para Android | StarkLLM',
    description: 'La app StarkLLM para Android pregunta a su PC sobre sus documentos, envía fotos de cartas y muestra sus plazos. En casa, directamente; fuera de casa, solo si usted lo permite, con cifrado desde el teléfono hasta su PC.',
  },
  hero: {
    eyebrow: 'Android · vista previa',
    h1: 'Su teléfono pregunta. Su PC responde.',
    lede: 'La app StarkLLM para Android trabaja junto con su PC. Los documentos, el índice y el modelo de IA se quedan en el PC; el teléfono pregunta, envía fotos de cartas y muestra sus plazos.',
  },
  does: {
    h2: 'Qué hace el teléfono',
    items: [
      { icon: 'chat', title: 'Preguntar sobre sus documentos', text: 'Los espacios de trabajo y los chats de su PC, respuestas que van apareciendo con los documentos utilizados como fuentes, y el aviso de citas que no están en sus documentos.' },
      { icon: 'camera', title: 'Enviar cartas', text: 'Haga una foto de una carta o comparta un PDF desde otra app. Su PC la lee, también el texto de las fotos. Las fotos se eliminan del teléfono después de enviarlas.' },
      { icon: 'calendar', title: 'Plazos', text: 'Vencidos, hoy, esta semana, más adelante. «Hecho» marca un plazo en el PC; un widget en la pantalla de inicio muestra los tres siguientes.' },
      { icon: 'mic', title: 'Dictado', text: 'Mantenga pulsado el botón del micrófono y hable. Lo transcribe el modelo de voz de su PC, no un servicio en línea.' },
      { icon: 'pc', title: 'Este PC', text: 'Conexión, versión, modelo de IA, copia de seguridad y protección de un vistazo. Con el nivel adecuado: hacer una copia de seguridad ahora o dejar el PC totalmente sin conexión, siempre tras confirmar con su huella.' },
      { icon: 'lock', title: 'Bloqueo de la app', text: 'Huella al abrir la app. Mientras está activado, no se pueden hacer capturas de pantalla y la app no muestra vista previa en las aplicaciones recientes.' },
    ],
  },
  pair: {
    h2: 'Vinculado en tres pasos, en casa',
    steps: [
      { t: 'Actívelo', v: 'En el PC, abra Ajustes › Teléfono y active la conexión con el teléfono. Está desactivada por defecto.' },
      { t: 'Muestre el código QR', v: 'El código es válido durante 5 minutos y solo funciona una vez.' },
      { t: 'Escanéelo con la app', v: 'El teléfono recuerda el certificado del PC y, a partir de entonces, solo se comunica con ese PC.' },
    ],
    note: 'La vinculación solo funciona en casa, nunca a través del relé. Se pueden vincular varios PC, y Ajustes › Teléfono en el PC enumera cada teléfono con «Quitar».',
  },
  connects: { h2: 'Cómo se conecta', levelsH: 'Para cada teléfono, usted elige qué puede hacer' },
  relay: {
    h2: 'Lo que ve el relé, y lo que no',
    lede: 'Fuera de casa, el teléfono y su PC se encuentran en el relé de StarkLLM. El cifrado va desde el teléfono hasta su PC, así que el relé solo transmite bytes.',
    cols: ['El relé ve', 'El relé nunca ve', 'El relé guarda'],
    sees: ['Para qué PC es una conexión (un identificador aleatorio)', 'Cuándo se establece una conexión', 'Cuántos datos circulan'],
    never: ['Sus preguntas y respuestas', 'Sus documentos y fotos', 'El token del dispositivo ni su cuenta'],
    keeps: ['Un identificador aleatorio por PC', 'Un hash del secreto del PC', 'Ningún contenido ni registro de contenido'],
  },
  limits: {
    h2: 'Conviene saber',
    items: [
      'La app es una vista previa en una prueba cerrada en Google Play. No hay app para iPhone.',
      'Fuera de casa solo funciona mientras el PC está encendido, StarkLLM está en marcha y no está totalmente sin conexión.',
      'Fuera de casa, todos los datos pasan cifrados por el relé. Está prevista una conexión directa entre teléfono y PC, con el relé como alternativa.',
      'Una pregunta desde el teléfono se responde en su PC sin búsqueda web y sin modelos en la nube, también fuera de casa.',
      'Android 10 o posterior. La app no tiene analítica, ni servicio de informes de errores, ni servicios de Google Play.',
    ],
  },
  play: { h2: '¿Quiere probarla?', text: 'La app para Android está en una prueba cerrada en Google Play. Si desea participar, escriba a info@starkllm.com.' },
  shots: { pc: '12-settings-phone', phone: 'phone-01-chat' },
};
