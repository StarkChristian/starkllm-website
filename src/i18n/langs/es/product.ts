import { V } from '../../../data/release';

export default {
  meta: { title: 'Producto | StarkLLM' },
  hero: { eyebrow: 'Producto', h1: 'Cómo funciona StarkLLM', lede: 'Un flujo local de principio a fin, diseñado pensando en la privacidad de los datos.' },
  lifecycle: {
    h2: 'El ciclo de vida de un documento',
    lede: 'Cuando añades un PDF o un archivo de texto, el procesamiento se queda en tu PC.',
    steps: [
      { k: 'Analizar', v: 'Analizadores locales extraen el texto en bruto. Los PDF escaneados y las imágenes pasan por OCR o visión local antes de dividirse en fragmentos.' },
      { k: 'Fragmentar', v: 'Un algoritmo de fragmentación semántica divide el texto en bloques lógicos que se solapan.' },
      { k: 'Incrustar', v: 'Un modelo de embeddings local convierte cada bloque en un vector, que se guarda en tu contenedor privado de ChromaDB.' },
      { k: 'Responder', v: 'Cuando haces una pregunta, los pasajes más relevantes se insertan en la ventana de contexto del modelo de Ollama que hayas elegido, de modo que la respuesta se apoya en tus fuentes.' },
    ],
  },
  letters: {
    tag: 'Bandeja de documentos',
    h2: 'Cada carta, leída y archivada',
    lede: 'Añade una carta como PDF, escaneo o foto hecha con el móvil. StarkLLM la lee en tu PC y te propone lo que necesitas. Nunca cambia el nombre de tus archivos, ni los mueve, ni los borra.',
    items: [
      { k: 'Qué lee', v: 'El tipo de carta (factura, reclamación de pago, notificación de Hacienda, contrato, multa y más), el remitente, la fecha de la carta, los números de referencia como el de cliente, de contrato o fiscal, los importes, las cuentas bancarias y los plazos, en cartas en inglés y alemán.' },
      { k: 'Cada valor tiene su fuente', v: 'Cada valor se encuentra literalmente en una página. Haz clic en él y la carta se abre en esa página con la línea marcada.' },
      { k: 'Expedientes por remitente', v: 'Las cartas de un mismo remitente se agrupan, con el expediente del plazo más cercano en primer lugar. Se marca cuando una misma carta está como foto y como PDF, y también se marcan una carta sustituida y una posible estafa.' },
      { k: 'Tú decides', v: 'Marca una carta como resuelta o ponle tu propio título. El número de cartas nuevas aparece junto a «Inbox» (la bandeja de entrada).' },
    ],
  },
  deadlines: {
    tag: 'Plazos',
    h2: 'Plazos en la página de inicio',
    lede: 'La página de inicio muestra tus documentos más recientes y los plazos, citas y pagos que se han encontrado en ellos.',
    items: [
      { k: 'Con importe y página', v: 'Cada fecha viene con su frase, con el importe si lo hay y con la página de la que se leyó.' },
      { k: 'Add to calendar', v: '«Add to calendar» (añadir al calendario) guarda las fechas como archivo de calendario cuando lo pides.' },
      { k: 'Hecho con reglas en este PC', v: 'Las fechas, los importes y los remitentes se encuentran con reglas fijas sobre el texto de tus cartas, no los adivina un modelo, así que cada uno consta en el documento. Revisa la carta antes de actuar.' },
      { k: 'Idiomas', v: 'Se entienden las cartas en inglés y alemán. Las fotos y los escaneos se leen como texto en inglés o alemán. Las cartas en otros idiomas se archivan y se pueden buscar, pero sin plazos ni importes. Llegarán con las próximas versiones (en preparación, aún no publicadas): las reglas de cartas para francés, español, italiano y turco, y la interfaz en español, francés, italiano y turco.' },
    ],
  },
  verify: {
    tag: 'Inteligencia verificable',
    h2: 'Respuestas que puedes comprobar',
    lede: 'Los modelos de lenguaje pueden producir afirmaciones sin respaldo cuando responden solo de memoria. StarkLLM lo aborda con la generación aumentada por recuperación (RAG, Retrieval-Augmented Generation).',
    items: [
      { k: 'Respuestas respaldadas por fuentes', v: 'La IA recupera pasajes de texto de tus documentos concretos antes de formular una respuesta.' },
      { k: 'Pasajes que puedes leer', v: 'Las respuestas citan el nombre del archivo de origen y la página o la sección. Haz clic en una fuente bajo una respuesta para ver, palabra por palabra, los pasajes en los que se basó, y abre el documento en esa página.' },
      { k: 'Avisos de cartas falsas', v: 'Aparece un recuadro rojo sobre la respuesta si una carta pide un pago a una cuenta extranjera, con un vale o a través de un enlace, si contiene texto dirigido a asistentes de IA, o si un remitente menciona de repente otra cuenta.' },
    ],
  },
  library: {
    tag: 'Biblioteca permanente',
    h2: 'Una base de conocimiento que se mantiene al día',
    lede: 'Los documentos subidos a un Workspace sirven para proyectos aislados. La Global Knowledge Base (base de conocimiento global) es tu biblioteca de consulta permanente, accesible desde cada chat.',
    items: [
      { k: 'Indexación de carpetas locales', v: 'Vincula cualquier carpeta de tu equipo Windows. StarkLLM indexa de forma recursiva los archivos compatibles en una colección vectorial global.' },
      { k: 'Acceso universal', v: 'Consulta la Knowledge Base desde cualquier chat, sea cual sea el Workspace en el que estés.' },
      { k: 'Sincronización por intervalos', v: 'Más o menos una vez por minuto, la Knowledge Base revisa la carpeta vinculada y vuelve a indexar los archivos nuevos o modificados.' },
    ],
    compareH3: '¿Documentos del Workspace o Knowledge Base?',
    compareLede: 'StarkLLM ofrece dos maneras de dar contexto a la IA. Conocer la diferencia mantiene tu material organizado.',
    cards: [
      { title: 'Documentos del Workspace', points: ['Ligados a un único Workspace.', 'Útiles cuando el trabajo debe permanecer aislado para evitar que se mezcle el contexto.', 'Ideales para conjuntos de documentos temporales o específicos de un proyecto.'], ex: 'Ejemplo', exText: 'Una carpeta de contratos de un caso jurídico o de una auditoría para un cliente.' },
      { title: 'Knowledge Base', points: ['Una capa permanente y global.', 'Útil en todos los chats y Workspaces a la vez.', 'Ideal para material de consulta a largo plazo y archivos personales.'], ex: 'Ejemplo', exText: 'Tu biblioteca de investigación en curso, un manual o los procedimientos de tu empresa.' },
    ],
  },
  control: {
    tag: 'Control local',
    h2: 'Ajústalo a tu hardware',
    lede: 'StarkLLM te da control administrativo sobre tu entorno local de inferencia.',
    items: [
      { k: 'Elección del modelo', v: 'Cambia entre cualquier modelo que hayas descargado con Ollama (por ejemplo Qwen 2.5, Llama 3.2, Mistral) desde la interfaz del chat.' },
      { k: 'Configuración del entorno de ejecución', v: 'Ajusta el tamaño de la ventana de contexto, la temperatura y otros parámetros avanzados para equilibrar la velocidad y la profundidad del razonamiento.' },
      { k: 'Enrutamiento estricto a localhost', v: 'El tráfico interno de la API circula por los puertos de Docker y del host en localhost, de modo que tus datos se quedan en tu equipo.' },
    ],
  },
  tools: {
    tag: 'Host MCP local en el propio proceso',
    h2: 'Herramientas que preguntan antes de actuar',
    lede: 'A diferencia de las herramientas de IA en la nube, que ejecutan comandos de forma remota, StarkLLM ejecuta un host de herramientas dentro de su propio backend FastAPI. Los modelos obtienen acceso verificado y de solo lectura a tu contenido indexado.',
    items: [
      { k: 'Tres herramientas integradas', v: 'list_workspace_files inspecciona los archivos del Workspace activo. search_local_kb ejecuta una búsqueda híbrida vectorial y BM25 en los archivos personales. fetch_cited_chunk obtiene el texto exacto del pasaje.' },
      { k: 'Puerta con intervención humana', v: 'Cada llamada a una herramienta crea una tarjeta en el chat. Revisa los parámetros, cambia valores o cancela.' },
      { k: 'Defensa frente a prompts maliciosos', v: 'A los pasajes recuperados se les quitan los marcadores de llamadas a herramientas antes de que lleguen al contexto del modelo, lo que dificulta la inyección de prompts a través de documentos (ninguna técnica elimina ese riesgo por completo).' },
      { k: 'Puerta de ejecución en el servidor', v: 'Un token de invocación de un solo uso bloquea la ejecución directa y los intentos de repetición.' },
    ],
    card: { title: 'in_process_tool: list_workspace_files', badge: 'Aislamiento local', text: 'Lector de archivos del Workspace con aislamiento por inquilino. El modelo inspecciona los archivos del Workspace activo sin acceso al sistema de archivos del host.', example: 'Ejemplo de salida', foot: 'Protegido por una puerta de ejecución en el servidor y un token de invocación de un solo uso.' },
  },
  themes: {
    tag: 'Estética',
    h2: 'Trece temas',
    lede: 'Pensados para trabajar con concentración con distintas condiciones de luz, con cambio instantáneo.',
    items: [
      { k: 'Paleta de acceso rápido', v: 'Haz clic en el icono de la paleta, en el pie de la barra lateral, para cambiar de tema sin interrumpir tu investigación.' },
      { k: 'Preferencia que se conserva', v: 'Tu tema activo se guarda al recargar y al reiniciar.' },
    ],
  },
  superior: {
    h2: 'En qué se diferencia de los clientes de chat locales básicos',
    lede: 'Muchos clientes de escritorio ofrecen un simple envoltorio de chat o una fragmentación ingenua de los documentos. StarkLLM está construido como una estación de trabajo de precisión.',
    items: [
      { k: 'RAG híbrido con cross-encoder', v: 'La mayoría de las herramientas de RAG de escritorio se apoyan solo en embeddings vectoriales y pueden pasar por alto palabras clave exactas. StarkLLM combina la frecuencia de palabras clave de BM25 con la búsqueda vectorial densa y después reordena los fragmentos con un cross-encoder TinyBERT local.' },
      { k: 'Ventana nativa independiente', v: 'Sin pestañas ni barra de direcciones del navegador. Una aplicación de escritorio independiente con barra de título sin marco, pantalla de inicio, integración con la bandeja del sistema y un instalador NSIS para Windows.' },
      { k: 'Ejecutor de código Python', v: 'Ejecuta cálculos en Python, análisis de datos y trabajo con fórmulas en tu propio equipo, con comprobaciones del código, topes de memoria y límites de tiempo. Son límites de comodidad, no una frontera de seguridad: ejecuta solo código de confianza.' },
      { k: 'API local compatible con OpenAI', v: 'Una pasarela local que expone /v1/chat/completions y /v1/models. Conecta IDE como Cursor, herramientas como Claude Code, complementos de Obsidian o tus propios scripts de Python a tus modelos locales.' },
    ],
  },
  themeTexts: {
    'Midnight Indigo': 'Pizarra oscura clásica con un intenso resplandor índigo y violeta.',
    'Cyberpunk Rose': 'Rosa y rosado neón vibrantes con un cálido brillo ambiental.',
    'OLED Pitch Black': 'Negro puro #000000 de verdad, para el máximo contraste y la mayor duración de la batería.',
    'Liquid Glass': 'Cristal esmerilado translúcido con un resplandor iridiscente de varios colores.',
    'Matrix Emerald': 'Matriz de obsidiana con acentos eléctricos en verde esmeralda.',
    'Sunset Amber': 'Pizarra volcánica con cálidos acentos de ámbar incandescente y llama.',
    'Arctic Frost': 'Azul marino helado con escarcha cristalina en cian y azul.',
    'Daylight Minimal': 'Aspecto limpio de luz diurna, con sombras suaves y un contraste nítido.',
    'Doodle Chat': 'Papel cálido con muñequitas, corazones, cartas y estrellas dibujados al fondo.',
    'Doodle Night': 'Los mismos dibujos sobre un fondo de chat oscuro y tranquilo.',
    'Flower Meadow': 'Pequeñas flores rosas, lilas y melocotón sobre un rubor suave.',
    'Matrix Code': 'Lluvia de código verde sobre negro, con tipografía monoespaciada.',
    'Starry Night': 'Un cielo nocturno tranquilo, lleno de estrellitas, con cálidos acentos dorados.',
  },
  tech: {
    h2: 'Tecnologías clave',
    lede: 'Explora la arquitectura y las capacidades que hay detrás de StarkLLM.',
  },
  cta: { h2: '¿Listo para probar StarkLLM?', text: 'Descarga la Windows Research Beta, gratuita y de código abierto.', installer: `Descargar el instalador v${V}`, all: 'Todas las descargas', manual: 'Leer el manual' },
};
