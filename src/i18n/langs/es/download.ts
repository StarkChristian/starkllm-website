import { V, RELEASE } from '../../../data/release';

// Los tamaños salen de la propia versión publicada, así que no pueden quedarse anticuados.
const mb = (b: number, locale: string) => (b / 1_000_000).toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const bytes = (b: number, locale: string) => b.toLocaleString(locale);
const SETUP = RELEASE.setup.size, PORTABLE = RELEASE.portable?.size ?? 0;
const L = 'es-ES';

export default {
  meta: { title: 'Descarga | StarkLLM' },
  hero: { eyebrow: 'Descarga', h1: 'Descargar StarkLLM', lede: 'Empieza con la Windows Research Beta.' },
  helpCallout: { h: '¿La instalación no funciona?', text: 'StarkLLM necesita Docker Desktop y Ollama en tu PC; desde la v2.0.1 la aplicación inicia ambos y su motor por sí sola. La página de ayuda tiene una lista de comprobación con una prueba para cada paso y soluciones para los 24 problemas más habituales.', link: 'Abrir Ayuda y solución de problemas' },
  release: {
    h2: 'Paquete de la versión',
    facts: [
      ['Versión', `v${V} (escritorio nativo, inicia su propio motor)`],
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
    intro: 'Se instalan dos programas una sola vez y después StarkLLM hace el resto. El primer arranque descarga el motor y los modelos de IA que aún no tengas (varios GB, de 10 a 20 minutos); los siguientes arranques tardan segundos.',
    steps: [
      { t: 'Instala Docker Desktop', v: 'Instala Docker Desktop (con WSL2) desde docker.com, ábrelo una vez y termina su configuración. Puede pedirte que reinicies el PC.' },
      { t: 'Instala Ollama', v: 'Instala Ollama desde ollama.com. No necesitas descargar los modelos a mano: StarkLLM descarga qwen2.5:7b y nomic-embed-text en su primer arranque.' },
      { t: 'Ejecuta el instalador de StarkLLM', v: `Descarga y ejecuta StarkLLM-v${V}-Setup.exe. El instalador crea accesos directos en el escritorio.` },
      { t: 'Abre StarkLLM y espera al primer arranque', v: 'Haz clic en el acceso directo de StarkLLM. La aplicación inicia Docker Desktop y Ollama, descarga los modelos, construye su motor y muestra el progreso; después abre StarkLLM en su propia ventana. Si falta algo, la ventana indica qué y cómo solucionarlo (registro: %APPDATA%\\StarkLLM\\engine.log).' },
      { t: 'Crea tu cuenta', v: 'Registra la primera cuenta; es la administradora de esta instalación (copia de seguridad y restauración). Después crea un Workspace y sube un documento.' },
    ],
  },
  prereq: {
    h2: 'Lista de requisitos previos',
    lede: 'Antes de abrir StarkLLM, confirma que tienes todo lo siguiente:',
    items: [
      ['Sistema operativo', 'Windows 10 u 11 con WSL2 activado.'],
      ['Docker Desktop', 'Se instala una sola vez (StarkLLM lo inicia). Sin él, el motor no puede funcionar.'],
      ['Ollama', 'Instalado de forma nativa en Windows (StarkLLM lo inicia). Descárgalo desde ollama.com.'],
      ['Modelos y disco', 'Se descargan automáticamente en el primer arranque (unos 5 GB). Mantén al menos 15 GB de espacio libre en disco.'],
      ['Hardware', 'Mínimo 8 GB de RAM (modelos de 3B), 16 GB recomendados (modelos de 7B). Se recomienda encarecidamente una GPU NVIDIA con 8 GB o más de VRAM. El manual incluye una guía por niveles de hardware.'],
      ['Formatos compatibles', 'PDF, DOCX (con tablas), TXT, Markdown, CSV, XLSX, JSON, XML, registros, HTML e imágenes (PNG, JPG con OCR).'],
    ],
  },
  smart: {
    h2: 'Windows SmartScreen y aviso de ejecución',
    text: 'Los archivos descargados de la web llevan una marca Mark of the Web (MOTW) y el instalador de StarkLLM no está firmado digitalmente, así que Windows SmartScreen puede mostrar un aviso al ejecutarlos. Haz clic en More info (Más información) y después en Run anyway (Ejecutar de todas formas). En el caso de los scripts de arranque, también puedes ejecutar unblock.ps1 en PowerShell para quitar la marca de forma local.',
    optsH: 'Otras formas de iniciarlo',
    optsLede: 'Se aplican a la carpeta portable o al ZIP que incluye los scripts de arranque.',
    opts: [
      { t: 'Opción A: ejecutar start.exe desde un terminal', v: 'start.exe es un lanzador independiente. Comprueba Docker Desktop y Ollama, construye los contenedores y abre tu navegador.', ol: ['En el Explorador de archivos, dentro de la carpeta extraída, haz clic en la barra de direcciones, escribe cmd y pulsa Intro.', 'Escribe start.exe y pulsa Intro. Si SmartScreen muestra un aviso, haz clic en More info (Más información) y después en Run anyway (Ejecutar de todas formas).'] },
      { t: 'Opción B: ejecutar start.cmd', v: 'Para ejecutar directamente un script de comandos, abre un terminal en la carpeta extraída y ejecuta start.cmd (en PowerShell: .\\start.cmd).' },
      { t: 'Opción C: Docker Compose directamente', v: 'Para usar la CLI estándar de Docker:', code: 'docker compose up --build -d' },
      { t: 'Opción D: ejecutar unblock.ps1', v: 'Si las directivas de ejecución bloquean los scripts, abre PowerShell en la carpeta extraída y ejecuta:', code: 'powershell -ExecutionPolicy Bypass -File unblock.ps1', after: 'Esto quita las marcas de SmartScreen solo de los archivos que están dentro de la carpeta actual de StarkLLM. No cambia la configuración de seguridad global de Windows. Después, ejecuta start.exe o start.cmd.' },
    ],
  },
  notes: { h: 'Notas importantes', items: ['StarkLLM es gratuito y de código abierto (Apache 2.0).', 'Con licencia Apache 2.0, gratuito para uso personal, de investigación y comercial.', 'Se ofrece «tal cual», sin garantía ni responsabilidad de ningún tipo.'] },
  walk: {
    h2: 'Recorrido por la aplicación',
    lede: 'Un repaso paso a paso de lo que puedes esperar cuando ejecutes StarkLLM en tu equipo.',
    steps: [
      { t: 'Paso 1: el arranque', v: 'StarkLLM inicia Docker Desktop, Ollama y su motor, y muestra cada paso hasta que se abre la aplicación. Los desarrolladores también pueden iniciar el motor desde la carpeta del proyecto con start.exe o start.cmd (como se ve aquí).', kind: 'console' },
      { t: 'Paso 2: Knowledge Base y Workspaces', v: 'Vincula carpetas locales para indexar documentos en una capa permanente de Knowledge Base (base de conocimiento).', kind: 'kb', alt: 'Configuración de la Knowledge Base de StarkLLM (interfaz en inglés)' },
      { t: 'Paso 3: chat basado en documentos', v: 'Haz preguntas basadas en los documentos indexados, con indicadores del archivo de origen.', kind: 'chat', alt: 'Chat de StarkLLM basado en documentos (interfaz en inglés)' },
      { t: 'Paso 4: fuentes que puedes comprobar', v: 'Haz clic en una fuente bajo una respuesta para leer, palabra por palabra, los pasajes en los que se basó, y abre el documento en esa página.', kind: 'sources', alt: 'Los pasajes en los que se basó una respuesta, mostrados palabra por palabra con un enlace a la página (interfaz en inglés)' },
      { t: 'Paso 5: herramientas locales seguras', v: 'Revisa, edita y aprueba las llamadas del modelo a herramientas internas directamente en el chat.', kind: 'tool' },
      { t: 'Paso 6: trece temas', v: 'Cambia al instante entre OLED Pitch Black, Cyberpunk Rose, Liquid Glass y más.', kind: 'appearance', alt: 'Ajustes de StarkLLM y galería de temas (interfaz en inglés)' },
    ],
  },
  faq: {
    h2: 'Preguntas frecuentes',
    items: [
      ['¿Mis datos salen de mi equipo?', 'StarkLLM está diseñado para mantener tus datos en tu equipo. Los documentos se guardan en un contenedor local de ChromaDB y la inferencia de IA se ejecuta con Ollama en tu host. Durante el funcionamiento local normal no se transmite ningún dato al exterior.'],
      ['¿StarkLLM es gratuito?', 'Sí. Es gratuito y de código abierto, con licencia Apache 2.0, para uso personal, de investigación y comercial. Sin suscripciones, sin telemetría y sin niveles ocultos. Se ofrece «tal cual», sin garantía.'],
      ['¿Por qué pueden ser lentas las respuestas?', 'La velocidad depende de tu hardware. Sin una GPU dedicada, Ollama recurre a la inferencia con la CPU, que es mucho más lenta. Una GPU NVIDIA dedicada con 8 GB o más de VRAM genera mucho más deprisa.'],
      ['¿Por qué Windows SmartScreen avisa de los lanzadores descargados?', 'Windows añade el atributo Mark of the Web a los archivos descargados de internet. Cuando ejecutes start.exe, haz clic en More info (Más información) y después en Run anyway (Ejecutar de todas formas). También puedes ejecutar start.cmd desde un terminal o ejecutar unblock.ps1 para quitar la marca de forma local.'],
      ['¿Qué hardware necesito?', 'Mínimo 8 GB de RAM para modelos de 3B y 16 GB de RAM para modelos de 7B. Para modelos de usuario avanzado (de 14B a 32B) se recomiendan 24 GB de VRAM o 64 GB de RAM del sistema.'],
      ['¿Qué diferencia hay entre el chat normal y el chat con documentos?', 'El chat normal se apoya solo en el conocimiento preentrenado del modelo. El chat con documentos usa RAG: primero busca en los documentos que has subido, pasa los fragmentos relevantes al modelo y responde con citas verificables.'],
      ['¿Qué diferencia hay entre los documentos del Workspace y la Knowledge Base?', 'Los documentos del Workspace están aislados en un único proyecto. La Knowledge Base es una carpeta permanente y global de tu equipo a la que puede hacer referencia cualquier chat.'],
      ['La ventana dice «StarkLLM could not start». ¿Qué hago?', 'Desde la v2.0.1 la aplicación inicia por sí sola Docker Desktop, Ollama y su motor. Cuando un paso falla, la ventana enumera lo que falta (por ejemplo Docker Desktop sin instalar, un puerto ocupado o un error del motor con las últimas líneas del registro) y tiene un botón Retry (reintentar). El registro completo está en %APPDATA%\\StarkLLM\\engine.log. En la v2.0.0 la ventana solo esperaba en «Connecting to local engine…»; instala la v2.0.1.'],
      ['¿Y si la aplicación se abre pero el chat no se conecta?', 'El chat necesita Ollama. Si la ventana decía «StarkLLM is running without its AI runtime», instala o inicia Ollama y pulsa Retry (reintentar); entonces StarkLLM descarga los modelos (qwen2.5:7b y nomic-embed-text). El motor habla con Ollama en tu PC a través de host.docker.internal:11434.'],
      ['¿Puedo inspeccionar el código fuente?', 'Sí. StarkLLM es totalmente de código abierto en GitHub, en StarkChristian/StarkLLM, con licencia Apache 2.0.'],
      ['¿Dónde puedo enviar comentarios o colaborar?', 'Agradecemos tus comentarios. Escribe a info@starkllm.com o abre una incidencia (issue) en el repositorio de GitHub.'],
    ],
  },
  contribute: { h2: 'Colabora y sugiere mejoras', text: 'StarkLLM es un proyecto abierto y en evolución. Si encuentras un error, tienes una idea para una función o quieres inspeccionar el código fuente:', repo: 'Explora el código fuente, inspecciona los lanzadores y abre incidencias.', mail: 'Correo electrónico' },
};
