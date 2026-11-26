// 隐私概览（2026，新页面）。本网站的法律隐私政策是单独的页面（/datenschutz、/privacy-policy）。
export default {
  meta: {
    title: '隐私：哪些内容留在您的电脑上 | StarkLLM',
    description: '哪些内容永远不会离开您的电脑，StarkLLM可能建立的每一个连接及其时机，静态数据保护，签名的安装包，软件物料清单，以及如何亲自核查这一切。',
  },
  hero: {
    eyebrow: '隐私',
    h1: '隐私从设计开始，由您亲自核查。',
    lede: 'StarkLLM的设计使您的文档永远不需要云服务。哪些内容上网由您决定，每一个连接您都能看到，而且您不必只听我们怎么说。',
  },
  stays: {
    h2: '永远不会离开您电脑的内容',
    lede: '无论您开启什么功能，这些内容都留在您自己的硬盘以及您自己的处理器或显卡上。',
    items: [
      { icon: 'doc', title: '您的文档', text: '信件、合同、书籍、扫描件、照片和录音，以及从中识别出的文字。' },
      { icon: 'chat', title: '您的聊天', text: '问题、回答及其来源，除非您自己选择了云端模型。' },
      { icon: 'search', title: '搜索索引', text: '每个文档的段落和向量，以及大型文档的摘要。' },
      { icon: 'pc', title: 'AI模型', text: '它们通过Ollama在您的电脑上运行。首次下载之后，StarkLLM无需联网即可工作。' },
      { icon: 'inbox', title: '收件箱和截止日期', text: '寄件人、金额、账户和日期由您电脑上的规则找出。' },
      { icon: 'eyeoff', title: '不收集关于您的任何信息', text: '没有遥测，没有崩溃报告，没有使用统计，没有广告，也不需要在服务器上注册账户。' },
    ],
  },
  online: {
    h2: '哪些内容会上网，以及何时上网',
    lede: 'StarkLLM可能建立的每一个连接，与“Settings › Privacy & network”（设置 › 隐私和网络）中所列相同。每个连接在您开启或启动之前都处于关闭状态，或者只是为了您要求的下载而进行一次。',
    cols: ['连接', '目标', '时机', '新安装时'],
    rows: [
      { what: '检查更新', host: 'api.github.com', when: '启动时，前提是您在首次启动时已同意', def: '在您同意之前关闭' },
      { what: '下载更新', host: 'github.com', when: '只在点击“Download and install”（下载并安装）之后', def: '关闭' },
      { what: 'AI模型', host: 'registry.ollama.ai（通过Ollama）', when: '首次启动时，用于下载缺少的模型', def: '需要时' },
      { what: 'Ollama安装程序', host: 'ollama.com', when: '只在点击“Install Ollama for me”（为我安装Ollama）之后', def: '关闭' },
      { what: '网络搜索', host: 'DuckDuckGo；如果它没有回应：Startpage、Mojeek、Wikipedia', when: '按问题进行，需打开“Web Search”（网络搜索）按钮', def: '关闭' },
      { what: '网页任务', host: '您输入的任务所涉及的网站', when: '只用于您启动的网页任务', def: '关闭' },
      { what: '从网络导入', host: '您输入的地址、YouTube、GitHub', when: '只在点击“+ Web URL”“+ YouTube Video”或“+ GitHub Repo”之后', def: '关闭' },
      { what: '云端模型服务商', host: '您输入的服务商（例如OpenAI、DeepSeek、OpenRouter、Groq）', when: '选择此类服务商期间的每次聊天；聊天会显示一个标记', def: '关闭' },
      { what: 'Ollama云端模型', host: 'ollama.com（通过Ollama）', when: '只在您选择名称以“cloud”结尾的模型时', def: '关闭' },
      { what: '市场价格', host: 'Yahoo Finance、CoinGecko', when: '只在您开启该小组件之后', def: '关闭' },
      { what: '语音模型', host: 'huggingface.co', when: '首次使用语音输入或转写录音时', def: '使用之前关闭' },
      { what: '文字识别语言', host: 'github.com', when: '只在设置中点击“Download”（下载）之后', def: '关闭' },
      { what: '在家使用手机', host: '传入连接，来自您家庭网络中已配对的手机', when: '在您开启手机连接并配对手机之后', def: '关闭' },
      { what: '在外使用手机', host: 'relay.starkllm.com（从手机到您的电脑全程加密）', when: '只用于您允许在外使用的手机', def: '关闭' },
    ],
    note: '您在终端中允许的命令和您添加的工具服务器作为您自己的程序运行：它们不会被列出，它们连接到哪里由它们自己决定。Ollama和Windows有各自的更新检查，StarkLLM无法控制。',
  },
  offline: {
    h2: '一个开关：完全离线',
    text: '“Settings › Privacy & network”（设置 › 隐私和网络）中的“Fully offline”（完全离线）会拒绝所有在线功能，关闭与您手机和中继的连接，并且不下载任何内容，连更新也不下载。您的文档、收件箱和本地模型照常工作。首次启动时会询问一次：保持在线还是完全离线。',
  },
  atRest: {
    h2: '静态数据保护',
    lede: '可选功能，位于“Settings › Protection”（设置 › 保护）：针对笔记本电脑丢失、同一台电脑上的其他用户，或存放在云文件夹中的备份。',
    items: [
      { k: '在硬盘上加密', v: '文档、聊天、名称和标题在硬盘上加密，搜索索引也可以锁定。密钥与您的Windows账户绑定。' },
      { k: '启动口令', v: '可选的口令，附带恢复密钥。口令从不保存。' },
      { k: '加密备份', v: '一个备份文件，您可以存放在任何地方，包括云文件夹；没有口令，它就只是一堆乱码。每周自动备份会保留多个副本。' },
    ],
    limits: '它无法防范在StarkLLM打开期间以您的身份运行的恶意软件。仍然建议使用BitLocker：它还能保护程序和模型。',
  },
  signed: {
    h2: '签名的安装包',
    text: '从2.1.2起，安装程序、StarkLLM.exe、卸载程序和引擎的程序文件均使用颁发给“Open Source Developer Christian Stark”的Certum证书签名。内置的更新程序只安装以此名称签名的更新。',
    link: '代码签名政策（英文）',
  },
  sbom: {
    h2: '每个版本都附带物料清单',
    text: 'GitHub上的每个版本都附带应用和引擎的软件物料清单（SBOM，CycloneDX）：列出其中包含的每个库及其版本。',
    link: 'GitHub上的版本',
  },
  check: {
    h2: '亲自核查',
    lede: '您不必相信StarkLLM自己的界面。打开“Fully offline”（完全离线），使用应用，然后查看。',
    steps: [
      { t: '资源监视器', v: '按Win + R，输入“resmon”，打开“网络”选项卡。开启完全离线后，StarkLLM.exe、python.exe和ollama.exe应该只与127.0.0.1通信。' },
      { t: 'PowerShell', v: '列出所有不指向本机的已建立连接，以及建立连接的程序：' },
      { t: 'Wireshark', v: '最彻底的检查：在您的网络适配器上抓包，并过滤掉本地流量。然后打开网络搜索，看着DuckDuckGo出现，这样您就知道检查是有效的。' },
    ],
    code: "Get-NetTCPConnection -State Established |\n  Where-Object { $_.RemoteAddress -notin '127.0.0.1','::1' } |\n  ForEach-Object { $p = Get-Process -Id $_.OwningProcess -ErrorAction SilentlyContinue\n    [pscustomobject]@{ Process = $p.ProcessName; Remote = \"$($_.RemoteAddress):$($_.RemotePort)\" } } |\n  Sort-Object Process, Remote | Format-Table -AutoSize",
    link: 'GitHub上的完整指南（英文）',
  },
  site: {
    h2: '那么这个网站呢？',
    text: '它不设置Cookie，不使用分析工具，也不从其他服务器加载字体、脚本或视频。本网站上的助手Lucy在您的浏览器中作答；您的问题不会被发送到任何地方。',
    link: '本网站的隐私政策（英文）',
  },
};
