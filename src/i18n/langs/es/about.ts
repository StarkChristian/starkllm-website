export default {
  meta: {
    title: 'Acerca de | StarkLLM',
    description: 'Quién hace StarkLLM, por qué existe, con qué licencia se publica y qué viene después.',
  },
  hero: {
    eyebrow: 'Acerca de',
    h1: 'Hecho para documentos que deben quedarse en casa.',
    lede: 'StarkLLM es un proyecto gratuito y de código abierto de Christian Stark, de Aquisgrán (Alemania).',
  },
  what: {
    h2: 'Qué es StarkLLM',
    p: [
      'StarkLLM es un asistente de IA privado y local para Windows. Lee sus cartas y documentos en su propio PC, responde indicando la página en la que encontró la respuesta y hace tareas por usted en sitios web y en una carpeta de proyecto, preguntando antes de cada paso importante.',
      'Todas las funciones principales se ejecutan en su equipo: los documentos, el índice de búsqueda y los modelos de IA. Nada sale de su PC salvo que usted active una función en línea opcional, y Ajustes › Privacidad y red enumera cada conexión.',
    ],
  },
  why: {
    h2: 'Por qué existe',
    p: [
      'La mayoría de los asistentes de IA le piden que suba aquello sobre lo que quiere preguntar. Con una notificación de Hacienda, un informe médico o un contrato, es mucho pedir. StarkLLM demuestra que es posible obtener respuestas útiles y basadas en los documentos sin que estos salgan nunca de su escritorio.',
      'Está pensado para quienes no pueden o no quieren subir sus documentos: hogares con papeleo, autónomos, estudiantes, investigadores y pequeñas oficinas.',
    ],
  },
  who: {
    h2: 'Quién lo hace',
    p: 'StarkLLM está diseñado y desarrollado por Christian Stark.',
    lines: ['Christian Stark', 'Maxstr. 14, 52070 Aachen, Alemania', 'Correo electrónico: info@starkllm.com'],
    contact: 'Contacto',
  },
  open: {
    h2: 'Código abierto',
    p: [
      'StarkLLM es de código abierto, con licencia Apache 2.0: gratuito para uso personal, de investigación y comercial. El código fuente, las notas de versión y los documentos sobre privacidad están en GitHub.',
      '¿Ha encontrado un error o tiene una idea? Abra una incidencia en GitHub o escriba un correo electrónico.',
    ],
    github: 'Código fuente en GitHub',
    issues: 'Informar de un problema',
  },
  roadmap: {
    h2: 'Qué viene después',
    lede: 'Planes para 2026 y 2027, no promesas. Cada paso se publica solo cuando está probado.',
    items: [
      { when: 'Próximamente', title: 'Una línea directa con su teléfono', text: 'El teléfono y el PC se conectan directamente cuando pueden, con el relé como alternativa. En ambos casos, el cifrado sigue siendo de extremo a extremo.' },
      { when: 'Próximamente', title: 'La app para Android en Google Play', text: 'De la prueba cerrada a una versión pública.' },
      { when: 'Más adelante', title: 'Un sandbox propio para el código', text: '«Ejecutar» en los bloques de código Python vuelve a funcionar sin Docker, dentro de un sandbox propio de StarkLLM.' },
      { when: 'En curso', title: 'Cada página en cada idioma', text: 'Este sitio web en los seis idiomas de la aplicación, con capturas y vídeos de la aplicación en cada idioma.' },
    ],
  },
  related: {
    h2: 'Proyecto relacionado',
    text: 'StarkLLM forma parte de un interés más amplio por la computación que preserva la privacidad. Para enfoques criptográficos de los datos privados, visite homomorphicprivacy.com.',
  },
};
