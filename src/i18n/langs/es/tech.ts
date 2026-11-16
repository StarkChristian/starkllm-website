type Section = { h: string; p?: string; list?: string[] };

const labels = { what: 'Qué es', why: 'Por qué importa', how: 'Cómo lo hace StarkLLM', example: 'Ejemplo', limits: 'Conviene saber', more: 'Más funciones', cta: 'Descargar StarkLLM', manual: 'Leer el manual' };
type L = typeof labels;
const s = (l: L, what: string, why: string, how: string | Section, example: string, limits?: string): Section[] => [
  { h: l.what, p: what },
  { h: l.why, p: why },
  typeof how === 'string' ? { h: l.how, p: how } : { h: l.how, ...how },
  { h: l.example, p: example },
  ...(limits ? [{ h: l.limits, p: limits }] : []),
];
const es = labels;

const pages = {
  'tech-rag': {
    title: 'Respuestas a partir de tus documentos (RAG) | StarkLLM', eyebrow: 'Generación aumentada por recuperación',
    h1: 'Respuestas a partir de tus documentos', lede: 'StarkLLM lee los pasajes pertinentes de tus archivos antes de responder y te dice dónde están.',
    shot: 'chat', shotAlt: 'StarkLLM respondiendo a una pregunta a partir de un PDF local con fuentes citadas (interfaz en inglés)',
    sections: s(es,
      'La generación aumentada por recuperación (RAG, por sus siglas en inglés) significa que el modelo recibe primero los pasajes de tus documentos que coinciden con tu pregunta y responde a partir de ellos.',
      'Un modelo de lenguaje no sabe nada de tus contratos, informes o notas. Sin tus pasajes, adivina, y una suposición puede sonar convincente.',
      'Tu pregunta se busca en el Workspace (y, si lo activas, en tu Knowledge Base). Los mejores pasajes se reordenan y se entregan al modelo junto con la pregunta. Cada respuesta enumera sus fuentes con el nombre del archivo y la página o la sección.',
      'Preguntas «¿Cuál es el plazo de preaviso del contrato con García?». StarkLLM encuentra la cláusula en el PDF, responde a partir de ella y muestra «Contrato García.pdf, página 4».',
      'El modelo todavía puede interpretar mal un pasaje. Para las decisiones importantes, abre la página citada y compruébala.'),
  },
  'tech-hybrid-search': {
    title: 'Búsqueda híbrida | StarkLLM', eyebrow: 'Búsqueda',
    h1: 'Búsqueda híbrida', lede: 'Busca por significado y por palabras exactas al mismo tiempo.',
    sections: s(es,
      'La búsqueda híbrida combina la búsqueda vectorial, que encuentra pasajes con el mismo significado, con la búsqueda por palabras clave (BM25), que encuentra palabras, nombres y números exactos.',
      'Algunas preguntas necesitan el significado («¿Cómo tratamos una pérdida?»), otras el término exacto («factura 8492-B»). Cada método por separado se deja uno de los dos.',
      'StarkLLM ejecuta ambas búsquedas en tu índice local, fusiona los resultados y los reordena con un modelo local pequeño (el cross-encoder TinyBERT) antes de que el modelo de lenguaje los vea.',
      'Una búsqueda de «presupuesto de la NASA» encuentra un pasaje sobre «financiación de la Administración Nacional de Aeronáutica y del Espacio» y también el pasaje que nombra exactamente «NASA».'),
  },
  'tech-semantic-chunking': {
    title: 'Fragmentación semántica | StarkLLM', eyebrow: 'Indexación',
    h1: 'Fragmentación semántica', lede: 'Los documentos se dividen donde cambia el significado, no tras un número fijo de caracteres.',
    sections: s(es,
      'Antes de que un documento se pueda buscar, se divide en pasajes («fragmentos», chunks). Cada pasaje se guarda con su archivo, su página o su sección.',
      'Un pasaje cortado por la mitad de una frase o de una cláusula pierde su sentido, y entonces la búsqueda devuelve respuestas a medias.',
      'StarkLLM divide el texto en frases y empieza un pasaje nuevo donde cambia el tema, algo que mide con el modelo de embeddings. Si eso no es posible, divide por párrafos y frases con un pequeño solapamiento. Las tablas (CSV, Excel, tablas de Word) se conservan fila por fila con los nombres de sus columnas.',
      'Un contrato se indexa cláusula por cláusula. Una pregunta sobre la «responsabilidad» recupera la cláusula de responsabilidad entera, no dos mitades.',
      'Los archivos largos sin signos de puntuación, como algunos registros, aún pueden convertirse en pasajes grandes en los que resulta más difícil encontrar valores sueltos.'),
  },
  'tech-knowledge-base': {
    title: 'Knowledge Base | StarkLLM', eyebrow: 'Biblioteca',
    h1: 'Knowledge Base', lede: 'Una carpeta de tu PC en la que puede buscar cualquier chat.',
    shot: 'kb', shotAlt: 'La Knowledge Base de StarkLLM con una carpeta indexada (interfaz en inglés)',
    sections: s(es,
      'La Knowledge Base (base de conocimiento) es una carpeta de tu PC (por defecto «StarkLLM Knowledge Base», dentro de Documentos) cuyos archivos StarkLLM indexa y mantiene al día.',
      'El material de consulta, como procedimientos, manuales o notas, hace falta en muchos proyectos. Sin una biblioteca compartida tendrías que subir los mismos archivos a cada Workspace.',
      'StarkLLM revisa las carpetas registradas cada 30 segundos e indexa los archivos nuevos y los modificados; «Sync Now» (sincronizar ahora) lo hace de inmediato. En el chat, el interruptor de la Knowledge Base decide si también se busca en estos archivos. Las fuentes que proceden de ella se marcan como «Personal KB».',
      'Guardas el manual de tu equipo en la carpeta. En un Workspace sobre un proyecto nuevo puedes preguntar por los archivos del proyecto y por el manual en la misma pregunta.'),
  },
  'tech-workspaces': {
    title: 'Workspaces | StarkLLM', eyebrow: 'Organización',
    h1: 'Workspaces', lede: 'Un Workspace por proyecto, con sus propios documentos y chats.',
    sections: s(es,
      'Un Workspace (espacio de trabajo) contiene los documentos y los chats de un proyecto. La Knowledge Base se comparte entre todos los Workspaces.',
      'Si todos los archivos están en un mismo sitio, una pregunta sobre un caso puede recoger pasajes de otro.',
      'Cada Workspace tiene su propio índice. Un chat busca solo en los documentos de su Workspace, más la Knowledge Base cuando la activas.',
      'Cambias de «Declaración de la renta 2025» a «Relanzamiento web». Ahora las respuestas proceden solo de los documentos del sitio web.'),
  },
  'tech-multimodal': {
    title: 'Archivos e imágenes compatibles | StarkLLM', eyebrow: 'Archivos',
    h1: 'Archivos, escaneos e imágenes', lede: '14 tipos de archivo, incluidos PDF escaneados y fotos.',
    sections: s(es,
      'StarkLLM lee archivos PDF, Word (DOCX), Excel (XLSX), CSV, Markdown, de texto, HTML, JSON, XML y de registro, además de imágenes (PNG, JPG). Los añades con el clip o arrastrándolos a la ventana.',
      'Los documentos reales suelen ser escaneos o fotos, no texto que se pueda seleccionar. Un simple extractor de texto no encuentra nada en ellos.',
      { p: 'Cada tipo tiene su propio lector:', list: [
        'Las páginas de PDF con texto se leen directamente; las páginas escaneadas pasan por OCR local (Tesseract) y, si eso encuentra muy poco, por un modelo de imágenes local.',
        'Las imágenes las describe y les lee el texto un modelo de imágenes local. La primera imagen descarga ese modelo una sola vez (llava, unos 4,4 GB).',
        'Las hojas de cálculo y las tablas conservan los nombres de sus columnas, de modo que los valores siguen unidos a su significado.',
      ] },
      'Añades la foto de una señal de aparcamiento. Más tarde preguntas «¿En qué planta está el aparcamiento de visitas?» y obtienes «Planta P2, plazas 40 a 55», con la foto como fuente.',
      'La escritura a mano y el texto pequeño o borroso se leen con menos fiabilidad. El modelo de imágenes lee mejor el texto impreso que las pizarras.'),
  },
  'tech-local-models': {
    title: 'Modelos locales con Ollama | StarkLLM', eyebrow: 'Modelos',
    h1: 'Modelos locales con Ollama', lede: 'El modelo de lenguaje se ejecuta en tu PC, con tu hardware.',
    sections: s(es,
      'Ollama es un programa gratuito que ejecuta modelos de lenguaje abiertos, como Qwen, Llama o Mistral, en tu CPU o tarjeta gráfica. StarkLLM lo usa para el chat, la búsqueda y las imágenes.',
      'Un modelo local no necesita cuenta ni suscripción, sigue funcionando sin internet una vez descargado y tus documentos nunca llegan a un proveedor de modelos.',
      'StarkLLM inicia Ollama si está instalado, descarga los modelos por defecto en el primer arranque (unos 5 GB) y te permite cambiar de modelo en el Model Hub. Los modelos que piensan, como Qwen 3, también funcionan.',
      'En un tren sin wifi añades un PDF y le haces preguntas. Todo se ejecuta en el portátil.',
      'La calidad y la velocidad de las respuestas dependen del modelo y de tu hardware. Un modelo de 7B necesita unos 8 GB de RAM; los modelos más grandes responden mejor, pero necesitan más memoria, idealmente en una tarjeta gráfica.'),
  },
  'tech-privacy': {
    title: 'Privacidad | StarkLLM', eyebrow: 'Privacidad',
    h1: 'Lo que se queda en tu PC', lede: 'Los documentos, el índice, los chats y los modelos se quedan en tu equipo. Algunas funciones opcionales se conectan a internet, y solo cuando las usas.',
    sections: [
      { h: es.what, p: 'StarkLLM ejecuta su base de datos, su índice de búsqueda y su interfaz web en tu PC (en Docker) y el modelo de lenguaje en Ollama, también en tu PC. No tiene telemetría ni una cuenta en ningún servidor.' },
      { h: es.why, p: 'Los contratos, las historias clínicas o los datos de investigación no deberían enviarse a un servicio en la nube solo para hacerles una pregunta.' },
      { h: 'Funciones en línea opcionales', p: 'Estas se conectan a internet solo cuando las activas o las inicias. El chat avisa cuando una pregunta sale de tu PC.', list: [
        'Búsqueda web (interruptor en el chat): tu pregunta va a DuckDuckGo.',
        'Proveedores de modelos en la nube (Settings, p. ej. DeepSeek, OpenRouter, Groq): tu pregunta y los pasajes encontrados van a ese proveedor.',
        'Importación de YouTube y GitHub: la aplicación descarga la transcripción o el repositorio que has indicado.',
        'Cotizaciones de mercado (widget, desactivado por defecto): se obtienen de Yahoo Finance.',
        'Comprobación de actualizaciones (se pregunta una vez en el primer arranque): le pide a GitHub el número de la versión más reciente, nada más.',
      ] },
      { h: 'Descargas puntuales', p: 'Los modelos de IA (de Ollama), el reordenador (en la primera búsqueda), el modelo de voz (en la primera entrada de voz) y el modelo de imágenes (en la primera imagen) se descargan una sola vez. Con ellos no se envía ningún documento, pregunta ni dato de uso.' },
      { h: es.example, p: 'Después del primer arranque puedes apagar el wifi. Añadir documentos, buscar y responder siguen funcionando.' },
    ],
  },
  'tech-local-tools': {
    title: 'Herramientas locales con aprobación | StarkLLM', eyebrow: 'Herramientas',
    h1: 'Herramientas locales, con tu aprobación', lede: 'El modelo puede pedir que se consulte algo. No se ejecuta nada hasta que lo confirmes.',
    sections: s(es,
      'StarkLLM tiene un pequeño host de herramientas integrado (MCP). El modelo puede solicitar tres herramientas de solo lectura: listar los archivos del Workspace, buscar en la Knowledge Base y obtener el texto exacto de un pasaje citado.',
      'Con herramientas, el modelo puede comprobar los datos en lugar de adivinarlos. Sin control, las herramientas podrían hacer cosas que no querías.',
      { p: 'Cada llamada a una herramienta se detiene en una tarjeta del chat:', list: [
        'La tarjeta muestra la herramienta y sus argumentos; puedes editarlos, ejecutar la llamada o cancelarla.',
        'Las herramientas solo leen. No hay shell, ni escritura de archivos, ni acceso a internet.',
        'El servidor solo acepta una llamada a una herramienta con un token de un solo uso procedente de esa tarjeta.',
      ] },
      'El modelo no está seguro de cuál es la versión más reciente de un documento y pide que se listen los archivos del Workspace. Ves la petición, la ejecutas y la respuesta usa la lista real de archivos.'),
  },
  'tech-voice': {
    title: 'Entrada y salida de voz | StarkLLM', eyebrow: 'Voz',
    h1: 'Entrada y salida de voz', lede: 'Pregunta hablando y escucha la respuesta, todo procesado en tu PC.',
    shot: 'settings', shotAlt: 'Ajustes de StarkLLM (interfaz en inglés)',
    sections: s(es,
      'El reconocimiento de voz convierte tu pregunta en texto; la síntesis de voz lee la respuesta en voz alta.',
      'Hablar es más rápido que escribir cuando la pregunta es larga, y escuchar ayuda cuando tienes las manos o los ojos ocupados.',
      'StarkLLM usa Whisper para el reconocimiento de voz y voces de Piper para inglés y alemán, ambos ejecutándose en local. El audio no se envía a ningún servicio.',
      'Mientras lees un documento en papel, haces clic en el micrófono, formulas tu pregunta y escuchas la respuesta.',
      'El modelo de reconocimiento de voz se descarga en la primera entrada de voz.'),
  },
  'tech-themes': {
    title: 'Temas | StarkLLM', eyebrow: 'Apariencia',
    shot: 'appearance', shotAlt: 'Ajustes de StarkLLM, Appearance: la galería de temas (interfaz en inglés)',
    h1: 'Temas', lede: 'Trece temas de color, desde el negro puro para pantallas OLED hasta temas claros y temas con motivos.',
    sections: [
      { h: es.what, p: 'StarkLLM tiene trece temas: Midnight Indigo (el predeterminado), OLED Pitch Black, Liquid Glass, Cyberpunk Rose, Matrix Emerald, Sunset Amber, Arctic Frost y Daylight Minimal, más cinco temas con motivos: Doodle Chat, Doodle Night, Flower Meadow, Matrix Code y Starry Night.' },
      { h: es.why, p: 'Las sesiones largas cansan menos la vista cuando el contraste y el brillo se adaptan a tu pantalla y a tu habitación.' },
      { h: es.how, p: 'Cambia el tema con el botón de la paleta, al final de la barra lateral, o en Settings, Appearance. La elección se guarda y se aplica de inmediato.' },
    ],
  },
};

export default { labels, pages };
