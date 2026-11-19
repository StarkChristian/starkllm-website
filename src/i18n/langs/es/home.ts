import { V, SIZE_MB } from '../../../data/release';

export default {
  meta: {
    title: 'StarkLLM | IA privada y local para tus documentos (Windows)',
    description:
      'StarkLLM es un asistente de IA gratuito, de código abierto y local, para Windows. Chatea en privado con tus documentos y con tu Knowledge Base (base de conocimiento) en tu propio equipo.',
  },
  nav: { getBtn: `Descargar v${V}` },
  hero: {
    eyebrow: 'IA local para Windows · Research Beta',
    h1: ['Pregunta a tus archivos.', 'Nada', 'sale de tu PC.'],
    lede: 'StarkLLM lee tus cartas y documentos en tu propio equipo, encuentra en ellos los plazos y los importes y responde a tus preguntas indicando la página de la que sale cada respuesta, con modelos de Ollama que ejecutas tú mismo.',
    cta1: 'Descargar para Windows',
    cta2: 'Ver cómo funciona',
    meta: `v${V} · ${SIZE_MB} MB · Apache 2.0 · gratuito`,
  },
  pipeline: [
    { k: 'Archivos', v: 'PDF, Word, texto, escaneos, fotos' },
    { k: 'Fragmentos', v: 'Divididos por significado, no por longitud' },
    { k: 'Búsqueda híbrida', v: 'BM25 + embeddings vectoriales' },
    { k: 'Modelo local', v: 'Ollama en tu GPU' },
    { k: 'Respuesta con cita', v: 'Salta a la página de origen' },
  ],
  shot: { alt: 'Chat de StarkLLM: una pregunta sobre una carta de Hacienda se responde con el importe, la fecha de vencimiento y el documento y la página de origen', caption: 'La aplicación de escritorio de StarkLLM responde a una pregunta sobre una carta. Documentos de demostración con nombres y cifras inventados.' },
  letters: {
    tag: 'Cartas',
    h2: 'Tus cartas y documentos de un vistazo',
    lede: 'Añade un PDF, un escaneo o una foto hecha con el móvil. StarkLLM lo lee en tu PC, agrupa en un expediente las cartas de un mismo remitente y pone cada plazo en la página de inicio. Cada valor enlaza con la página y la línea de las que se leyó.',
    dashCaption: 'Página de inicio: plazos y fechas de pago encontrados en tus cartas, con el importe y la página.',
    inboxCaption: 'Bandeja de entrada: un expediente por remitente, primero el plazo más cercano, con una marca ante una posible estafa.',
    note: 'Las cartas y la interfaz funcionan en inglés y alemán. El reconocimiento de texto (OCR) de fotos y escaneos lee inglés y alemán. Los demás idiomas se archivan como documentos normales, sin plazos ni importes. Llegarán con las próximas versiones (en preparación, aún no publicadas): las reglas de cartas para francés, español, italiano y turco, y la interfaz en español, francés, italiano y turco. Documentos de demostración con nombres y cifras inventados.',
  },
  features: {
    h2: 'Pensado para quienes no pueden subir sus documentos a ningún sitio.',
    items: [
      { tag: 'Bandeja', title: 'Una bandeja de entrada con un expediente por remitente', text: 'De cada carta: su tipo (factura, reclamación de pago, notificación de Hacienda, contrato, multa y más), remitente, fecha, números de referencia, importes, cuentas bancarias y plazos, cada uno encontrado literalmente en una página. Marca una carta como resuelta cuando te hayas ocupado de ella. En tu disco no se cambia el nombre de nada ni se mueve nada.', wide: true },
      { tag: 'Plazos', title: 'Plazos en la página de inicio', text: 'Plazos, citas y fechas de pago de tus cartas, con el importe y la página. «Add to calendar» (añadir al calendario) los guarda como archivo de calendario.' },
      { tag: 'Escaneos', title: 'Las fotos y los escaneos se leen en tu PC', text: 'Una foto o una página escaneada se lee como texto en inglés o alemán, se endereza si hace falta y se puede buscar y citar como cualquier otro documento.' },
      { tag: 'Seguridad', title: 'Avisos de cartas falsas', text: 'Aparece un recuadro rojo si una carta pide un pago a una cuenta extranjera, con un vale o a través de un enlace, si contiene texto dirigido a asistentes de IA, o si un remitente menciona de repente otra cuenta.' },
      { tag: 'Conocimiento', title: 'Workspaces y una base de conocimiento global', text: 'Vincula carpetas de Windows, mantén los proyectos aislados y consulta la base de conocimiento compartida desde cualquier chat.' },
      { tag: 'Recuperación', title: 'RAG híbrido con reordenador cross-encoder', text: 'La búsqueda por palabras clave y la búsqueda semántica se ejecutan juntas; después, un cross-encoder TinyBERT reordena los pasajes que de verdad responden a la pregunta.', wide: true, art: 'bars' },
      { tag: 'Escritorio', title: 'Una ventana de aplicación de verdad', text: 'Ventana propia con pantalla de inicio y menú en la bandeja del sistema. Sin pestaña del navegador.' },
      { tag: 'Temas', title: 'Trece temas, que se cambian al instante', text: 'Desde Midnight Indigo y el negro puro OLED hasta Daylight Minimal, más cinco temas con motivos como Doodle Chat y Starry Night.', wide: true, art: 'swatches' },
      { tag: 'Herramientas', title: 'Herramientas locales con puerta de confirmación', text: 'Herramientas de solo lectura como search_local_kb y fetch_cited_chunk. Cada llamada necesita tu confirmación y un token de un solo uso.' },
      { tag: 'Otras aplicaciones', title: 'Usa StarkLLM desde otros programas (desactivado por defecto)', text: 'Editores como VS Code y Cursor, asistentes de IA compatibles con MCP y tus propios scripts pueden buscar en tus documentos y hacerles preguntas a través de un servidor MCP o de una API compatible con OpenAI. Solo en este PC, solo con una clave que crees tú, y no pueden modificar ni borrar nada.', wide: true },
      { tag: 'Código', title: 'Sandbox local de Python', text: 'Ejecuta los bloques de código Python del chat, con comprobaciones del código y límites de tiempo y de memoria. Disponible con el motor de Docker Desktop (avanzado); desactivado en el motor integrado hasta que StarkLLM tenga su propio sandbox. Es un límite de comodidad, no una frontera de seguridad: ejecuta solo código de confianza.' },
    ],
  },
  compare: {
    h2: 'Cómo se compara StarkLLM',
    lede: 'Una mirada honesta a cómo encaja StarkLLM en el panorama de la IA local, junto a otras soluciones abiertas muy conocidas.',
    note: 'A octubre de 2026, según la documentación pública de cada herramienta. Las funciones cambian deprisa, así que consulta las versiones actuales. Las respuestas de StarkLLM también proceden de un modelo local pequeño: comprueba la fuente citada en todo lo importante.',
    cols: ['Herramienta', 'Puntos fuertes y límites', 'Ideal para'],
    rows: [
      { kind: 'Interfaz de inferencia', name: 'LM Studio', text: 'Excelente para descargar GGUF de Hugging Face y ajustar la descarga de capas a la GPU. Su «Chat with Documents» adjunta archivos a una conversación (los archivos cortos se pegan enteros y los largos pasan por recuperación); según su documentación y guías de terceros, no tiene workspaces persistentes ni bases de conocimiento compartidas.', best: 'Probar modelos, con algún documento adjunto de vez en cuando a un chat.' },
      { kind: 'App de RAG básica', name: 'AnythingLLM', text: 'Una aplicación popular para chatear con tus documentos en workspaces. Las opciones de recuperación, como el reordenamiento, dependen de la versión y de la base de datos vectorial que elijas, así que compárala con tus propios documentos.', best: 'Chats con documentos, si quieres una aplicación de workspaces ya preparada.' },
      { kind: 'Chat minimalista', name: 'Jan.ai', text: 'Una aplicación ligera y de código abierto, al estilo de ChatGPT, que conserva los datos en el dispositivo. La recuperación de documentos existe como ajuste opcional que su documentación califica de experimental; el foco está en el chat más que en los flujos de trabajo con documentos.', best: 'Un chat local sencillo con una interfaz limpia.' },
      { kind: 'Este proyecto', name: `StarkLLM v${V}`, text: 'Aplicación nativa de escritorio para Windows con una bandeja de entrada para cartas (plazos, importes, expedientes por remitente, avisos de cartas falsas), RAG híbrido con reordenamiento cross-encoder TinyBERT, un servidor MCP local opcional y una API compatible con OpenAI (desactivados por defecto) y privacidad local por defecto.', best: 'Cualquiera que quiera mantener privadas sus cartas y documentos y obtener respuestas con fuentes que pueda comprobar, desde hogares hasta desarrolladores e investigadores.', us: true },
    ],
  },
  setup: {
    h2: 'Instalación en tres pasos',
    intro: 'StarkLLM trae su propio motor: sin Docker Desktop ni WSL2. El primer arranque descarga los modelos de IA (unos 5 GB) y, si lo permites, Ollama; los siguientes arranques tardan segundos.',
    steps: [
      { title: 'Instala StarkLLM', text: `Ejecuta StarkLLM-v${V}-Setup.exe y haz clic en el acceso directo. El instalador está firmado por «Open Source Developer Christian Stark» y contiene el motor.` },
      { title: 'Deja que configure Ollama', text: 'Si falta Ollama, elige «Instalar Ollama por mí»: StarkLLM instala la versión oficial y firmada. No hace falta terminal.' },
      { title: 'Espera a los modelos', text: 'StarkLLM descarga los modelos de IA que necesita, muestra el progreso y después se abre en su propia ventana.' },
      { title: 'Si falta algo', text: 'La ventana indica qué falta y cómo solucionarlo, con un botón «Reintentar». La página de ayuda tiene una lista de comprobación.' },
    ],
    notesTitle: 'Notas importantes',
    notes: [
      { k: 'Primer arranque', v: 'Descargar los modelos de IA (unos 5 GB) lleva un rato con una conexión lenta. El primer arranque después de una instalación o una actualización también puede tardar unos minutos mientras se inicia el motor.' },
      { k: 'Windows SmartScreen', v: 'El instalador está firmado por «Open Source Developer Christian Stark». Si Windows sigue avisando, comprueba ese nombre del editor (clic derecho en el instalador, Propiedades, Firmas digitales) y compara la suma de comprobación SHA-256 de la página de descarga. Continúa (More info (Más información) y después Run anyway (Ejecutar de todas formas)) solo si ambos coinciden, y no desactives SmartScreen ni Smart App Control.' },
      { k: 'El hardware importa', v: 'La velocidad y la calidad de las respuestas dependen mucho de una GPU potente (se recomiendan 8 GB o más de VRAM).' },
    ],
  },
  privacy: {
    h2: 'La arquitectura de la privacidad',
    lede: 'StarkLLM es una alternativa sin conexión a los servicios de IA en la nube. Tus documentos, escritos jurídicos e investigaciones se quedan en tu equipo.',
    items: [
      { title: 'Inferencia local', text: 'Con Ollama, los modelos de lenguaje se ejecutan en tu propia CPU o GPU. Diseñado para funcionar totalmente sin conexión una vez descargados los modelos.' },
      { title: 'Almacenamiento local', text: 'Los documentos se dividen en fragmentos y se incrustan en un almacén vectorial ChromaDB local, en tu propio disco.' },
      { title: 'Cero telemetría', text: 'La aplicación de Windows no tiene telemetría ni ningún SDK de analítica. Este sitio web tampoco usa analítica ni cookies; consulta la política de privacidad.' },
      { title: 'Conexión solo cuando tú lo eliges', text: 'La búsqueda web, los proveedores de modelos en la nube, la importación de YouTube y GitHub, las cotizaciones de mercado y la comprobación de actualizaciones están desactivados hasta que los actives. El chat muestra cuándo una petición sale de tu PC.' },
    ],
  },
  download: {
    h2: 'Instálalo hoy.',
    lede: 'Gratuito y de código abierto, con licencia Apache 2.0.',
    reqTitle: 'Antes de descargar',
    req: [
      ['Sistema operativo', 'Windows 10/11 (64 bits), sin necesidad de Docker ni WSL2'],
      ['Ollama', 'para los modelos de IA; StarkLLM puede instalarlo por ti'],
      ['Disco', 'al menos 15 GB libres para la aplicación, el motor y los modelos'],
      ['Hardware', 'mínimo 8 GB de RAM, recomendados 16 GB, GPU NVIDIA con 8 GB o más de VRAM recomendada'],
    ],
    installer: `Instalador (.exe) · ${SIZE_MB} MB`,
    portable: 'Portable',
    all: 'Todas las descargas',
    shaTitle: 'SHA-256',
    verify: 'Comprueba con PowerShell:',
  },
};
