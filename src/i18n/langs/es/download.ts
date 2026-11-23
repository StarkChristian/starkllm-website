import { V, RELEASE } from '../../../data/release';

// Los tamaños salen de la propia versión publicada, así que no pueden quedarse anticuados.
const mb = (b: number, locale: string) => (b / 1_000_000).toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const bytes = (b: number, locale: string) => b.toLocaleString(locale);
const SETUP = RELEASE.setup.size, PORTABLE = RELEASE.portable?.size ?? 0;
const L = 'es-ES';

export default {
  meta: { title: 'Descarga | StarkLLM' },
  hero: { eyebrow: 'Descarga', h1: 'Descargar StarkLLM', lede: 'Empieza con la Windows Research Beta.' },
  helpCallout: { h: '¿La instalación no funciona?', text: 'StarkLLM trae su propio motor; el único otro programa que necesita es Ollama para los modelos de IA, y también puede instalarlo por ti. La página de ayuda tiene una lista de comprobación con una prueba para cada paso y soluciones para los problemas más habituales.', link: 'Abrir Ayuda y solución de problemas' },
  release: {
    h2: 'Paquete de la versión',
    facts: [
      ['Versión', `v${V} (escritorio nativo, motor incluido, sin necesidad de Docker)`],
      ['Licencia', 'Apache 2.0 (código abierto)'],
      ['Tamaño del instalador', `${mb(SETUP, L)} MB (${bytes(SETUP, L)} bytes)`],
      ...(PORTABLE ? [['Tamaño de la aplicación portable', `${mb(PORTABLE, L)} MB (${bytes(PORTABLE, L)} bytes)`]] : []),
    ],
    installer: `Descargar el instalador v${V} (.exe)`,
    portable: 'Portable (.exe)',
    github: 'GitHub',
    shaH: 'Sumas de comprobación SHA-256',
    shaLede: 'Para verificar la integridad del archivo antes de ejecutarlo, compara el hash SHA-256 de tu descarga:',
    setupLabel: `StarkLLM-v${V}-Setup.exe (instalador de Windows)`,
    portableLabel: `StarkLLM-v${V}-Portable.exe (ejecutable portable)`,
    verify: 'Comprueba en PowerShell:',
  },
  setup: {
    h2: 'Pasos de instalación',
    intro: 'StarkLLM trae su propio motor; no necesitas Docker Desktop ni WSL2. El primer arranque descarga los modelos de IA que aún no tengas (unos 5 GB) y, si lo permites, Ollama; los siguientes arranques tardan segundos. ¿Ya lo tiene instalado (2.0.7 o posterior)? Ajustes › Acerca de StarkLLM › Buscar actualizaciones › Descargar e instalar.',
    steps: [
      { t: 'Ejecuta el instalador de StarkLLM', v: `Descarga y ejecuta StarkLLM-v${V}-Setup.exe. El instalador contiene el motor y crea accesos directos en el escritorio.` },
      { t: 'Abre StarkLLM', v: 'Haz clic en el acceso directo de StarkLLM. La aplicación inicia su motor y comprueba Ollama.' },
      { t: 'Instala Ollama si falta', v: 'Si Ollama no está instalado, la ventana ofrece «Instalar Ollama por mí»: StarkLLM descarga el instalador oficial desde ollama.com (unos 2 GB), comprueba su firma y lo instala; no hacen falta derechos de administrador. También puedes instalar Ollama tú mismo desde ollama.com.' },
      { t: 'Espera al primer arranque', v: 'StarkLLM descarga los modelos de IA (por defecto qwen2.5:7b y nomic-embed-text, unos 5 GB; si ya tienes en Ollama modelos adecuados, se usan esos), muestra el progreso y después se abre en su propia ventana. Si falta algo, la ventana indica qué y cómo solucionarlo (registros: %APPDATA%\\StarkLLM\\engine.log y engine-native.log).' },
      { t: 'Cree un Workspace y añada un documento', v: 'StarkLLM inicia sesión por usted como usuario de este PC; no hace falta crear ninguna cuenta. Cree un Workspace, añada un documento y hágale una pregunta.' },
    ],
  },
  prereq: {
    h2: 'Lista de requisitos previos',
    lede: 'Antes de abrir StarkLLM, confirma que tienes todo lo siguiente:',
    items: [
      ['Sistema operativo', 'Windows 10 u 11 (64 bits).'],
      ['Software', 'Solo Ollama, para los modelos de IA. StarkLLM puede instalar la versión oficial por ti («Instalar Ollama por mí»), o puedes descargarlo desde ollama.com. Desde la v2.2 ya no hacen falta Docker Desktop ni WSL2.'],
      ['Modelos y disco', 'Se descargan automáticamente en el primer arranque (unos 5 GB). Mantén al menos 15 GB de espacio libre en disco.'],
      ['Hardware', 'Mínimo 8 GB de RAM (modelos de 3B), 16 GB recomendados (modelos de 7B). Se recomienda encarecidamente una GPU NVIDIA con 8 GB o más de VRAM; desde la v2.3, StarkLLM también permite que Ollama use la gráfica integrada AMD Radeon e Intel Arc/Iris. El manual incluye una guía por niveles de hardware.'],
      ['Formatos compatibles', 'Documentos: PDF, Word (DOCX, con tablas), Excel (XLSX), PowerPoint (PPTX), EPUB, TXT, Markdown, CSV, JSON, XML, HTML, registros e imágenes (PNG, JPG, WEBP, TIFF, con OCR), hasta 100 MB. Grabaciones: MP3, M4A, WAV, OGG, FLAC, el sonido de vídeos MP4, MOV y MKV y más, hasta 500 MB.'],
    ],
  },
  smart: {
    h2: 'Firma de código: cómo comprobar el instalador',
    text: 'Desde la v2.1.2, el instalador, StarkLLM.exe y el desinstalador están firmados con un certificado de firma de código de Certum emitido a nombre de «Open Source Developer Christian Stark», con sello de tiempo. La firma permite a Windows verificar el editor y demuestra que los archivos no se han modificado después de firmarlos. El actualizador integrado solo instala actualizaciones firmadas con este nombre.',
    checkH: 'Comprueba tú mismo la firma',
    check: [
      `Haz clic con el botón derecho en el instalador descargado (StarkLLM-v${V}-Setup.exe) y elige Propiedades (Properties).`,
      'Abre la pestaña Firmas digitales (Digital Signatures). El firmante debe ser «Open Source Developer Christian Stark».',
      'Selecciona la firma y haz clic en Detalles (Details). Windows debe indicar que la firma digital es correcta (This digital signature is OK).',
    ],
    dlls: 'Algunos componentes de Electron de terceros incluidos en la app (archivos DLL) no los firmamos nosotros. Es intencionado: el instalador, StarkLLM.exe y el desinstalador sí están firmados.',
    warnH: '¿Windows sigue mostrando un aviso (SmartScreen o Smart App Control)?',
    warn: 'La firma permite a Windows verificar el editor, pero Windows puede seguir avisando de un archivo que todavía ha visto pocas veces. Comprueba el nombre del editor como se explica arriba y compara la suma de comprobación SHA-256. Si ambos coinciden, puedes continuar (en SmartScreen: More info (Más información) y después Run anyway (Ejecutar de todas formas)). Si el nombre es otro, falta la pestaña Firmas digitales o la suma de comprobación no coincide, no ejecutes el archivo: descárgalo de nuevo desde esta página y escríbenos a info@starkllm.com. No desactives Smart App Control, SmartScreen ni ningún otro ajuste de seguridad para instalar StarkLLM.',
  },
  notes: { h: 'Notas importantes', items: ['StarkLLM es gratuito y de código abierto (Apache 2.0).', 'Con licencia Apache 2.0, gratuito para uso personal, de investigación y comercial.', 'Se ofrece «tal cual», sin garantía ni responsabilidad de ningún tipo.'] },
  walk: {
    h2: 'Recorrido por la aplicación',
    lede: 'Un repaso paso a paso de lo que puedes esperar cuando ejecutes StarkLLM en tu equipo.',
    steps: [
      { t: 'Paso 1: Knowledge Base y Workspaces', v: 'Vincula carpetas locales para indexar documentos en una capa permanente de Knowledge Base (base de conocimiento).', kind: 'kb', alt: 'Configuración de la Knowledge Base de StarkLLM (interfaz en inglés)' },
      { t: 'Paso 2: chat basado en documentos', v: 'Haz preguntas basadas en los documentos indexados, con indicadores del archivo de origen.', kind: 'chat', alt: 'Chat de StarkLLM basado en documentos (interfaz en inglés)' },
      { t: 'Paso 3: fuentes que puedes comprobar', v: 'Haz clic en una fuente bajo una respuesta para leer, palabra por palabra, los pasajes en los que se basó, y abre el documento en esa página.', kind: 'sources', alt: 'Los pasajes en los que se basó una respuesta, mostrados palabra por palabra con un enlace a la página (interfaz en inglés)' },
      { t: 'Paso 4: herramientas locales seguras', v: 'Revisa, edita y aprueba las llamadas del modelo a herramientas internas directamente en el chat.', kind: 'tool' },
      { t: 'Paso 5: trece temas', v: 'Cambia al instante entre OLED Pitch Black, Cyberpunk Rose, Liquid Glass y más.', kind: 'appearance', alt: 'Ajustes de StarkLLM y galería de temas (interfaz en inglés)' },
    ],
  },
  faq: {
    h2: 'Preguntas frecuentes',
    items: [
      ['¿Mis datos salen de mi equipo?', 'StarkLLM está diseñado para mantener sus datos en su equipo. Los documentos se guardan en una base de datos local de ChromaDB en su PC y la inferencia de IA se ejecuta con Ollama en su PC. Nada sale de su PC salvo que usted active una función en línea opcional: la búsqueda web, una tarea web, un proveedor de modelos en la nube, una importación desde la web, los precios de mercado o la comprobación de actualizaciones. Ajustes › Privacidad y red enumera cada conexión que hace StarkLLM, y «Totalmente sin conexión» las rechaza todas. Los comandos que usted permite en el Terminal y los servidores de herramientas que añade se ejecutan como sus propios programas y no aparecen en la lista.'],
      ['¿StarkLLM es gratuito?', 'Sí. Es gratuito y de código abierto, con licencia Apache 2.0, para uso personal, de investigación y comercial. Sin suscripciones, sin telemetría y sin niveles ocultos. Se ofrece «tal cual», sin garantía.'],
      ['¿Por qué pueden ser lentas las respuestas?', 'La velocidad depende de tu hardware. Sin una GPU dedicada, Ollama recurre a la inferencia con la CPU, que es mucho más lenta. Una GPU NVIDIA dedicada con 8 GB o más de VRAM genera mucho más deprisa.'],
      ['¿El instalador está firmado? ¿Qué hago si SmartScreen o Smart App Control me avisan?', 'Sí. Desde la v2.1.2, el instalador, StarkLLM.exe y el desinstalador están firmados por «Open Source Developer Christian Stark», para que Windows pueda verificar el editor. Si Windows sigue avisando, comprueba el nombre del editor (clic derecho en el instalador, Propiedades, Firmas digitales) y compara la suma de comprobación SHA-256 de esta página. Ejecuta el archivo solo si ambos coinciden. No desactives Smart App Control ni ningún otro ajuste de seguridad.'],
      ['¿Qué hardware necesito?', 'Mínimo 8 GB de RAM para modelos de 3B y 16 GB de RAM para modelos de 7B. Para modelos de usuario avanzado (de 14B a 32B) se recomiendan 24 GB de VRAM o 64 GB de RAM del sistema.'],
      ['¿Qué diferencia hay entre el chat normal y el chat con documentos?', 'El chat normal se apoya solo en el conocimiento preentrenado del modelo. El chat con documentos usa RAG: primero busca en los documentos que has subido, pasa los fragmentos relevantes al modelo y responde con citas verificables.'],
      ['¿Qué diferencia hay entre los documentos del Workspace y la Knowledge Base?', 'Los documentos del Workspace están aislados en un único proyecto. La Knowledge Base es una carpeta permanente y global de tu equipo a la que puede hacer referencia cualquier chat.'],
      ['La ventana dice «StarkLLM no pudo iniciarse». ¿Qué hago?', 'StarkLLM inicia su propio motor y Ollama. Cuando un paso falla, la ventana enumera lo que falta (por ejemplo Ollama sin instalar, un puerto ocupado, un archivo de programa que Windows ha bloqueado o un error del motor con las últimas líneas del registro) y tiene un botón «Reintentar». Los registros están en %APPDATA%\\StarkLLM (engine.log y, para el motor, engine-native.log). La página de ayuda indica las soluciones.'],
      ['¿Y si la aplicación se abre pero el chat no se conecta?', 'El chat necesita Ollama. Si la ventana decía «StarkLLM se está ejecutando sin su entorno de IA», instala o inicia Ollama y pulsa «Reintentar»; entonces StarkLLM descarga los modelos (qwen2.5:7b y nomic-embed-text). El motor habla con Ollama en tu PC en 127.0.0.1:11434.'],
      ['¿Puedo inspeccionar el código fuente?', 'Sí. StarkLLM es totalmente de código abierto en GitHub, en StarkChristian/StarkLLM, con licencia Apache 2.0.'],
      ['¿Dónde puedo enviar comentarios o colaborar?', 'Agradecemos tus comentarios. Escribe a info@starkllm.com o abre una incidencia (issue) en el repositorio de GitHub.'],
    ],
  },
  contribute: { h2: 'Colabora y sugiere mejoras', text: 'StarkLLM es un proyecto abierto y en evolución. Si encuentras un error, tienes una idea para una función o quieres inspeccionar el código fuente:', repo: 'Explora el código fuente y abre incidencias.', mail: 'Correo electrónico' },
};
