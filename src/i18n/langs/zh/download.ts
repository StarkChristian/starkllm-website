import { V, RELEASE } from '../../../data/release';

// 大小直接取自已发布的版本，因此不会过时。
const mb = (b: number, locale: string) => (b / 1_000_000).toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const bytes = (b: number, locale: string) => b.toLocaleString(locale);
const SETUP = RELEASE.setup.size, PORTABLE = RELEASE.portable?.size ?? 0;
const L = 'zh-CN';

export default {
  meta: { title: '下载 | StarkLLM' },
  hero: { eyebrow: '下载', h1: '下载StarkLLM', lede: '从Windows Research Beta开始使用。' },
  helpCallout: { h: '安装不成功？', text: 'StarkLLM自带运行引擎；唯一还需要的程序是用于AI模型的Ollama，而StarkLLM也可以为您安装它。帮助页面提供一份检查清单，每一步都有对应的测试，并列出最常见问题的解决方法。', link: '打开帮助与故障排除' },
  release: {
    h2: '发布包',
    facts: [
      ['版本', `v${V}（原生桌面应用，内含引擎，无需Docker）`],
      ['许可证', 'Apache 2.0（开源）'],
      ['安装程序大小', `${mb(SETUP, L)} MB（${bytes(SETUP, L)}字节）`],
      ...(PORTABLE ? [['便携版大小', `${mb(PORTABLE, L)} MB（${bytes(PORTABLE, L)}字节）`]] : []),
    ],
    installer: `下载v${V}安装程序（.exe）`,
    portable: '便携版（.exe）',
    github: 'GitHub',
    shaH: 'SHA-256校验和',
    shaLede: '运行前如需验证文件完整性，请比对您下载文件的SHA-256哈希值：',
    setupLabel: `StarkLLM-v${V}-Setup.exe（Windows安装程序）`,
    portableLabel: `StarkLLM-v${V}-Portable.exe（便携版可执行文件）`,
    verify: '在PowerShell中验证：',
  },
  setup: {
    h2: '安装步骤',
    intro: 'StarkLLM自带运行引擎，无需Docker Desktop和WSL2。首次启动时会下载您尚未拥有的AI模型（约5 GB），如果您允许，还会下载Ollama；之后的启动只需几秒钟。已经安装了2.0.7或更高版本？请依次打开 “Settings › About StarkLLM › Check for updates › Download and install”（设置 › 关于StarkLLM › 检查更新 › 下载并安装）。',
    steps: [
      { t: '运行StarkLLM安装程序', v: `下载并运行StarkLLM-v${V}-Setup.exe。安装程序包含运行引擎，并会创建桌面快捷方式。` },
      { t: '启动StarkLLM', v: '点击StarkLLM快捷方式。应用会启动其引擎并检查Ollama。' },
      { t: '如缺少Ollama，请安装', v: '如果尚未安装Ollama，窗口会提供 “Install Ollama for me”（为我安装Ollama）：StarkLLM从ollama.com下载官方安装程序（约2 GB），检查其签名并完成安装，无需管理员权限。您也可以自行从ollama.com安装Ollama。' },
      { t: '等待首次启动完成', v: 'StarkLLM会下载AI模型（默认为qwen2.5:7b和nomic-embed-text，约5 GB；如果Ollama中已有合适的模型，则直接使用），显示进度，然后在自己的窗口中打开。如果缺少什么，窗口会说明缺少的内容以及解决方法（日志：%APPDATA%\\StarkLLM\\engine.log和engine-native.log）。' },
      { t: '创建工作区并添加文档', v: 'StarkLLM会以这台电脑的用户身份为您登录，无需创建账户。创建一个工作区，添加一份文档，然后就这份文档提问。' },
    ],
  },
  prereq: {
    h2: '前提条件检查清单',
    lede: '启动StarkLLM之前，请确认以下各项均已具备：',
    items: [
      ['操作系统', 'Windows 10或11（64位）。'],
      ['软件', '只需要Ollama，用于运行AI模型。StarkLLM可以为您安装官方版本（“Install Ollama for me”），您也可以从ollama.com获取。自v2.2起不再需要Docker Desktop和WSL2。'],
      ['模型与磁盘', '首次启动时自动下载（约5 GB）。请至少保留15 GB可用磁盘空间。'],
      ['硬件', '最低8 GB内存（3B模型），推荐16 GB（7B模型）。强烈推荐配备8 GB或以上显存的NVIDIA显卡；自v2.3起，StarkLLM也允许Ollama使用集成的AMD Radeon和Intel Arc/Iris显卡。用户手册中有按硬件档次划分的建议。'],
      ['支持的格式', '文档：PDF、Word（DOCX，含表格）、Excel（XLSX）、PowerPoint（PPTX）、EPUB、TXT、Markdown、CSV、JSON、XML、HTML、日志以及图片（PNG、JPG、WEBP、TIFF，支持OCR），最大100 MB。录音：MP3、M4A、WAV、OGG、FLAC、MP4、MOV和MKV视频中的声音等，最大500 MB。'],
    ],
  },
  smart: {
    h2: '代码签名：如何检查安装程序',
    text: '自v2.1.2起，安装程序、StarkLLM.exe和卸载程序均使用Certum签发给 “Open Source Developer Christian Stark” 的代码签名证书进行签名，并带有时间戳。签名让Windows能够验证发布者，并证明文件在签名后未被更改。内置的更新程序只会安装以此名称签名的更新。',
    checkH: '亲自检查签名',
    check: [
      `右键点击下载的安装程序（StarkLLM-v${V}-Setup.exe），选择 “Properties”（属性）。`,
      '打开 “Digital Signatures”（数字签名）选项卡。签名者必须是 “Open Source Developer Christian Stark”。',
      '选中该签名并点击 “Details”（详细信息）。Windows必须显示 “This digital signature is OK”（此数字签名正常）。',
    ],
    dlls: '应用内部的一些第三方Electron组件（DLL文件）并非由我们签名。这是有意为之：安装程序、StarkLLM.exe和卸载程序都已签名。',
    warnH: 'Windows仍然显示警告（SmartScreen或Smart App Control）？',
    warn: '签名让Windows能够验证发布者，但对于不常见的文件，Windows仍可能发出警告。请按上文所述检查发布者名称，并比对SHA-256校验和。如果两者都一致，您可以继续（在SmartScreen中：先点 “More info”（更多信息），再点 “Run anyway”（仍要运行））。如果名称不同、缺少 “Digital Signatures” 选项卡或校验和不一致，请不要运行该文件：请从本页面重新下载，并发送邮件至info@starkllm.com告知我们。请勿为了安装StarkLLM而关闭Smart App Control、SmartScreen或任何其他安全设置。',
  },
  notes: { h: '重要说明', items: ['StarkLLM免费且开源（Apache 2.0）。', '采用Apache 2.0许可证，可免费用于个人、研究和商业用途。', '按“原样”提供，不附带任何形式的保证或责任。'] },
  walk: {
    h2: '应用导览',
    lede: '逐步了解在您的电脑上运行StarkLLM时会看到什么。',
    steps: [
      { t: '第1步：知识库与工作区', v: '关联本地文件夹，将文档索引到持久保存的知识库中。', kind: 'kb', alt: 'StarkLLM知识库设置（英文界面）' },
      { t: '第2步：基于文档的聊天', v: '根据已索引的文档提问，并显示来源文件标记。', kind: 'chat', alt: 'StarkLLM基于文档的聊天（英文界面）' },
      { t: '第3步：可以核对的来源', v: '点击回答下方的来源，即可逐字阅读回答所依据的段落，并在相应页面打开文档。', kind: 'sources', alt: '回答所依据的段落，逐字显示，并附有指向该页面的链接（英文界面）' },
      { t: '第4步：安全的本地工具', v: '直接在聊天中查看、编辑并批准模型在应用内发起的工具调用。', kind: 'tool' },
      { t: '第5步：十三种主题', v: '在OLED Pitch Black、Cyberpunk Rose、Liquid Glass等主题之间即时切换。', kind: 'appearance', alt: 'StarkLLM设置与主题库（英文界面）' },
    ],
  },
  faq: {
    h2: '常见问题',
    items: [
      ['我的数据会离开我的电脑吗？', 'StarkLLM的设计目标是让您的数据留在您的电脑上。文档保存在您电脑上的本地ChromaDB数据库中，AI推理通过您电脑上的Ollama运行。除非您开启某项可选的联网功能，否则任何数据都不会离开您的电脑：网络搜索、网页任务、云端模型提供商、从网络导入、市场价格、离家时使用手机（通过StarkLLM中继）或检查更新。“Settings › Privacy & network”（设置 › 隐私与网络）列出StarkLLM建立的每一个连接，而 “Fully offline”（完全离线）会拒绝所有这些连接。您在终端中允许的命令以及您添加的工具服务器，作为您自己的程序运行，不会列在其中。'],
      ['有手机应用吗？', '有，适用于Android，目前为预览版。它与您电脑上的StarkLLM配合使用。Android应用正在Google Play上进行测试。如果您希望从Google Play获取，请将您的电子邮件地址发送至info@starkllm.com，您将收到Google Play的链接。'],
      ['StarkLLM免费吗？', '是的。它免费且开源，采用Apache 2.0许可证，可用于个人、研究和商业用途。没有订阅、没有遥测，也没有隐藏的付费等级。按“原样”提供，不附带任何保证。'],
      ['为什么回答可能很慢？', '速度取决于您的硬件。没有独立显卡时，Ollama会改用CPU推理，速度会慢很多。配备8 GB或以上显存的NVIDIA独立显卡生成速度要快得多。'],
      ['安装程序有签名吗？如果SmartScreen或Smart App Control发出警告怎么办？', '有。自v2.1.2起，安装程序、StarkLLM.exe和卸载程序均由 “Open Source Developer Christian Stark” 签名，因此Windows可以验证发布者。如果Windows仍然发出警告，请检查发布者名称（右键点击安装程序，“Properties”，“Digital Signatures”），并比对本页面上的SHA-256校验和。只有两者都一致时才运行该文件。请勿关闭Smart App Control或任何其他安全设置。'],
      ['我需要什么硬件？', '3B模型最低需要8 GB内存，7B模型需要16 GB内存。对于面向高级用户的模型（14B到32B），推荐24 GB显存或64 GB系统内存。'],
      ['普通聊天和文档聊天有什么区别？', '普通聊天只依赖模型预训练时获得的知识。文档聊天使用检索增强生成（RAG）：它先搜索您上传的文档，把相关的文本块交给模型，再给出带有可核对引用的回答。'],
      ['工作区文档和知识库有什么区别？', '工作区文档只属于一个项目，彼此隔离。知识库是您电脑上一个持久的全局文件夹，任何聊天都可以引用。'],
      ['窗口显示 “StarkLLM could not start”（StarkLLM无法启动），怎么办？', 'StarkLLM会启动自己的引擎和Ollama。某一步失败时，窗口会列出缺少的内容（例如未安装Ollama、端口被占用、某个程序文件被Windows拦截，或者引擎出错并附有最后几行日志），并提供 “Retry”（重试）按钮。日志位于%APPDATA%\\StarkLLM（engine.log，以及引擎的engine-native.log）。帮助页面列出了解决方法。'],
      ['应用打开了，但聊天连接不上怎么办？', '聊天需要Ollama。如果窗口显示 “StarkLLM is running without its AI runtime”（StarkLLM正在没有AI运行环境的情况下运行），请安装或启动Ollama，然后点击 “Retry”；StarkLLM随后会下载模型（qwen2.5:7b和nomic-embed-text）。引擎通过您电脑上的127.0.0.1:11434与Ollama通信。'],
      ['我可以查看源代码吗？', '可以。StarkLLM完全开源，代码位于GitHub上的StarkChristian/StarkLLM，采用Apache 2.0许可证。'],
      ['在哪里提交反馈或参与贡献？', '欢迎您提出反馈。请发送邮件至info@starkllm.com，或在GitHub仓库中提交issue。'],
    ],
  },
  contribute: { h2: '参与贡献与提出建议', text: 'StarkLLM是一个开放且不断发展的项目。如果您发现了错误、有新功能的想法，或者想查看源代码：', repo: '浏览源代码并提交issue。', mail: '电子邮件' },
};
