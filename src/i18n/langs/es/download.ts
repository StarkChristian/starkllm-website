import { V, RELEASE } from '../../../data/release';

// Los tamaños salen de la propia versión publicada, así que no pueden quedarse anticuados.
const mb = (b: number, locale: string) => (b / 1_000_000).toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const bytes = (b: number, locale: string) => b.toLocaleString(locale);
const SETUP = RELEASE.setup.size, PORTABLE = RELEASE.portable?.size ?? 0;
const L = 'es-ES';

export default {
  meta: { title: 'Descarga | StarkLLM' },
  hero: { eyebrow: 'Descarga', h1: 'Descargar StarkLLM', lede: 'Empiece con la Windows Research Beta.' },
  helpCallout: { h: '¿La instalación no funciona?', text: 'StarkLLM trae su propio motor; el único otro programa que necesita es Ollama para los modelos de IA, y también puede instalarlo por usted. La página de ayuda tiene una lista de comprobación con una prueba para cada paso y soluciones para los problemas más habituales.', link: 'Abrir Ayuda y solución de problemas' },
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
    shaLede: 'Para verificar la integridad del archivo antes de ejecutarlo, compare el hash SHA-256 de su descarga:',
    setupLabel: `StarkLLM-v${V}-Setup.exe (instalador de Windows)`,
    portableLabel: `StarkLLM-v${V}-Portable.exe (ejecutable portable)`,
    verify: 'Compruébelo en PowerShell:',
  },
  setup: {
    h2: 'Pasos de instalación',
    intro: 'StarkLLM trae su propio motor; no necesita Docker Desktop ni WSL2. El primer arranque descarga los modelos de IA que aún no tenga (unos 5 GB) y, si usted lo permite, Ollama; los siguientes arranques tardan segundos. ¿Ya lo tiene instalado (2.0.7 o posterior)? Ajustes › Acerca de StarkLLM › Buscar actualizaciones › Descargar e instalar.',
    steps: [
      { t: 'Ejecute el instalador de StarkLLM', v: `Descargue y ejecute StarkLLM-v${V}-Setup.exe. El instalador contiene el motor y crea accesos directos en el escritorio.` },
      { t: 'Abra StarkLLM', v: 'Haga clic en el acceso directo de StarkLLM. La aplicación inicia su motor y comprueba Ollama.' },
      { t: 'Instale Ollama si falta', v: 'Si Ollama no está instalado, la ventana ofrece «Instalar Ollama por mí»: StarkLLM descarga el instalador oficial desde ollama.com (unos 2 GB), comprueba su firma y lo instala; no hacen falta derechos de administrador. También puede instalar Ollama usted mismo desde ollama.com.' },
      { t: 'Espere al primer arranque', v: 'StarkLLM descarga los modelos de IA (por defecto qwen2.5:7b y nomic-embed-text, unos 5 GB; si ya tiene en Ollama modelos adecuados, se usan esos), muestra el progreso y después se abre en su propia ventana. Si falta algo, la ventana indica qué y cómo solucionarlo (registros: %APPDATA%\\StarkLLM\\engine.log y engine-native.log).' },
      { t: 'Cree un espacio de trabajo y añada un documento', v: 'StarkLLM inicia sesión por usted como usuario de este PC; no hace falta crear ninguna cuenta. Cree un espacio de trabajo, añada un documento y hágale una pregunta.' },
    ],
  },
  prereq: {
    h2: 'Lista de requisitos previos',
    lede: 'Antes de abrir StarkLLM, confirme que tiene todo lo siguiente:',
    items: [
      ['Sistema operativo', 'Windows 10 u 11 (64 bits).'],
      ['Software', 'Solo Ollama, para los modelos de IA. StarkLLM puede instalar la versión oficial por usted («Instalar Ollama por mí»), o puede descargarlo desde ollama.com. Desde la v2.2 ya no hacen falta Docker Desktop ni WSL2.'],
      ['Modelos y disco', 'Se descargan automáticamente en el primer arranque (unos 5 GB). Mantenga al menos 15 GB de espacio libre en disco.'],
      ['Hardware', 'Mínimo 8 GB de RAM (modelos de 3B), 16 GB recomendados (modelos de 7B). Se recomienda encarecidamente una GPU NVIDIA con 8 GB o más de VRAM; desde la v2.3, StarkLLM también permite que Ollama use la gráfica integrada AMD Radeon e Intel Arc/Iris. El manual incluye una guía por niveles de hardware.'],
      ['Formatos compatibles', 'Documentos: PDF, Word (DOCX, con tablas), Excel (XLSX), PowerPoint (PPTX), EPUB, TXT, Markdown, CSV, JSON, XML, HTML, registros e imágenes (PNG, JPG, WEBP, TIFF, con OCR), hasta 100 MB. Grabaciones: MP3, M4A, WAV, OGG, FLAC, el sonido de vídeos MP4, MOV y MKV y más, hasta 500 MB.'],
    ],
  },
  smart: {
    h2: 'Firma de código: cómo comprobar el instalador',
    text: 'Desde la v2.1.2, el instalador, StarkLLM.exe y el desinstalador están firmados con un certificado de firma de código de Certum emitido a nombre de «Open Source Developer Christian Stark», con sello de tiempo. La firma permite a Windows verificar el editor y demuestra que los archivos no se han modificado después de firmarlos. El actualizador integrado solo instala actualizaciones firmadas con este nombre.',
    checkH: 'Compruebe usted mismo la firma',
    check: [
      `Haga clic con el botón derecho en el instalador descargado (StarkLLM-v${V}-Setup.exe) y elija Propiedades (Properties).`,
      'Abra la pestaña Firmas digitales (Digital Signatures). El firmante debe ser «Open Source Developer Christian Stark».',
      'Seleccione la firma y haga clic en Detalles (Details). Windows debe indicar que la firma digital es correcta (This digital signature is OK).',
    ],
    dlls: 'Algunos componentes de Electron de terceros incluidos en la app (archivos DLL) no los firmamos nosotros. Es intencionado: el instalador, StarkLLM.exe y el desinstalador sí están firmados.',
    warnH: '¿Windows sigue mostrando un aviso (SmartScreen o Smart App Control)?',
    warn: 'La firma permite a Windows verificar el editor, pero Windows puede seguir avisando de un archivo que todavía ha visto pocas veces. Compruebe el nombre del editor como se explica arriba y compare la suma de comprobación SHA-256. Si ambos coinciden, puede continuar (en SmartScreen: More info (Más información) y después Run anyway (Ejecutar de todas formas)). Si el nombre es otro, falta la pestaña Firmas digitales o la suma de comprobación no coincide, no ejecute el archivo: descárguelo de nuevo desde esta página y escríbanos a info@starkllm.com. No desactive Smart App Control, SmartScreen ni ningún otro ajuste de seguridad para instalar StarkLLM.',
  },
  notes: { h: 'Notas importantes', items: ['StarkLLM es gratuito y de código abierto (Apache 2.0).', 'Con licencia Apache 2.0, gratuito para uso personal, de investigación y comercial.', 'Se ofrece «tal cual», sin garantía ni responsabilidad de ningún tipo.'] },
  walk: {
    h2: 'Recorrido por la aplicación',
    lede: 'Un repaso paso a paso de lo que puede esperar cuando ejecute StarkLLM en su equipo.',
    steps: [
      { t: 'Paso 1: base de conocimiento y espacios de trabajo', v: 'Vincule carpetas locales para indexar documentos en una base de conocimiento permanente.', kind: 'kb', alt: 'Configuración de la base de conocimiento de StarkLLM (interfaz en inglés)' },
      { t: 'Paso 2: chat basado en documentos', v: 'Haga preguntas basadas en los documentos indexados, con indicadores del archivo de origen.', kind: 'chat', alt: 'Chat de StarkLLM basado en documentos (interfaz en inglés)' },
      { t: 'Paso 3: fuentes que puede comprobar', v: 'Haga clic en una fuente bajo una respuesta para leer, palabra por palabra, los pasajes en los que se basó, y abra el documento en esa página.', kind: 'sources', alt: 'Los pasajes en los que se basó una respuesta, mostrados palabra por palabra con un enlace a la página (interfaz en inglés)' },
      { t: 'Paso 4: herramientas locales seguras', v: 'Revise, edite y apruebe las llamadas del modelo a herramientas internas directamente en el chat.', kind: 'tool' },
      { t: 'Paso 5: trece temas', v: 'Cambie al instante entre OLED Pitch Black, Cyberpunk Rose, Liquid Glass y más.', kind: 'appearance', alt: 'Ajustes de StarkLLM y galería de temas (interfaz en inglés)' },
    ],
  },
  faq: {
    h2: 'Preguntas frecuentes',
    items: [
      ['¿Mis datos salen de mi equipo?', 'StarkLLM está diseñado para mantener sus datos en su equipo. Los documentos se guardan en una base de datos local de ChromaDB en su PC y la inferencia de IA se ejecuta con Ollama en su PC. Nada sale de su PC salvo que usted active una función en línea opcional: la búsqueda web, una tarea web, un proveedor de modelos en la nube, una importación desde la web, los precios de mercado, el relé del teléfono o la comprobación de actualizaciones. Ajustes › Privacidad y red enumera cada conexión que hace StarkLLM, y «Totalmente sin conexión» las rechaza todas. Los comandos que usted permite en el Terminal y los servidores de herramientas que añade se ejecutan como sus propios programas y no aparecen en la lista.'],
      ['¿StarkLLM es gratuito?', 'Sí. Es gratuito y de código abierto, con licencia Apache 2.0, para uso personal, de investigación y comercial. Sin suscripciones, sin telemetría y sin niveles ocultos. Se ofrece «tal cual», sin garantía.'],
      ['¿Por qué pueden ser lentas las respuestas?', 'La velocidad depende de su hardware. Sin una GPU dedicada, Ollama recurre a la inferencia con la CPU, que es mucho más lenta. Una GPU NVIDIA dedicada con 8 GB o más de VRAM genera mucho más deprisa.'],
      ['¿El instalador está firmado? ¿Qué hago si SmartScreen o Smart App Control me avisan?', 'Sí. Desde la v2.1.2, el instalador, StarkLLM.exe y el desinstalador están firmados por «Open Source Developer Christian Stark», para que Windows pueda verificar el editor. Si Windows sigue avisando, compruebe el nombre del editor (clic derecho en el instalador, Propiedades, Firmas digitales) y compare la suma de comprobación SHA-256 de esta página. Ejecute el archivo solo si ambos coinciden. No desactive Smart App Control ni ningún otro ajuste de seguridad.'],
      ['¿Qué hardware necesito?', 'Mínimo 8 GB de RAM para modelos de 3B y 16 GB de RAM para modelos de 7B. Para modelos de usuario avanzado (de 14B a 32B) se recomiendan 24 GB de VRAM o 64 GB de RAM del sistema.'],
      ['¿Qué diferencia hay entre el chat normal y el chat con documentos?', 'El chat normal se apoya solo en el conocimiento preentrenado del modelo. El chat con documentos usa RAG: primero busca en los documentos que usted ha subido, pasa los fragmentos relevantes al modelo y responde con citas verificables.'],
      ['¿Qué diferencia hay entre los documentos del espacio de trabajo y la base de conocimiento?', 'Los documentos del espacio de trabajo están aislados en un único proyecto. La base de conocimiento es una carpeta permanente y global de su equipo a la que puede hacer referencia cualquier chat.'],
      ['La ventana dice «StarkLLM no pudo iniciarse». ¿Qué hago?', 'StarkLLM inicia su propio motor y Ollama. Cuando un paso falla, la ventana enumera lo que falta (por ejemplo Ollama sin instalar, un puerto ocupado, un archivo de programa que Windows ha bloqueado o un error del motor con las últimas líneas del registro) y tiene un botón «Reintentar». Los registros están en %APPDATA%\\StarkLLM (engine.log y, para el motor, engine-native.log). La página de ayuda indica las soluciones.'],
      ['¿Y si la aplicación se abre pero el chat no se conecta?', 'El chat necesita Ollama. Si la ventana decía «StarkLLM se está ejecutando sin su entorno de IA», instale o inicie Ollama y pulse «Reintentar»; entonces StarkLLM descarga los modelos (qwen2.5:7b y nomic-embed-text). El motor habla con Ollama en su PC en 127.0.0.1:11434.'],
      ['¿Puedo inspeccionar el código fuente?', 'Sí. StarkLLM es totalmente de código abierto en GitHub, en StarkChristian/StarkLLM, con licencia Apache 2.0.'],
      ['¿Dónde puedo enviar comentarios o colaborar?', 'Agradecemos sus comentarios. Escriba a info@starkllm.com o abra una incidencia (issue) en el repositorio de GitHub.'],
    ],
  },
  contribute: { h2: 'Colabore y sugiera mejoras', text: 'StarkLLM es un proyecto abierto y en evolución. Si encuentra un error, tiene una idea para una función o quiere inspeccionar el código fuente:', repo: 'Explore el código fuente y abra incidencias.', mail: 'Correo electrónico' },
};
