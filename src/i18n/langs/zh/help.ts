import { V } from '../../../data/release';

export default {
  meta: { title: '帮助与故障排除 | StarkLLM', description: 'StarkLLM各部分如何协同工作，一份每一步都附有测试的安装检查清单，以及最常见问题的解决方法：Ollama、模型、端口、内存、Windows安全警告、文档和回答质量。' },
  hero: { eyebrow: '帮助', h1: '帮助与故障排除', lede: '如果StarkLLM无法启动，或者某个回答看起来不对，请从这里开始。每一步都有测试，方便您看出缺少的是哪个部分。' },
  honest: '坦诚说明：这些步骤整理自应用每次启动时执行的检查以及真实的测试运行。我们无法在每一台Windows电脑上测试。如果这里的内容与您看到的不一致，请发送邮件至info@starkllm.com告诉我们，我们会修正本页面。',
  how: {
    h2: '各部分如何协同工作',
    lede: 'StarkLLM不是单一的程序。两个部分协同工作，桌面应用会为您启动另一个部分：',
    parts: [
      { t: 'StarkLLM应用（StarkLLM.exe）', v: '包含运行引擎（数据库、检索索引、后端和网页界面），并且自v2.2起直接在Windows上运行它：无需Docker Desktop，也无需WSL2。每次启动时，它会检查Ollama、下载缺少的模型、启动引擎，然后显示StarkLLM。如果缺少某个部分，它会说明是哪一个以及如何解决。当您退出StarkLLM时，引擎也会停止。' },
      { t: 'Ollama', v: '在您自己的电脑上运行语言模型和嵌入模型。您的文档和问题都留在您的电脑上；Ollama本身只在下载模型和检查自身更新时联网。如果缺少Ollama，StarkLLM会提供 “Install Ollama for me”（为我安装Ollama），并安装官方的已签名版本；然后启动Ollama并下载模型。' },
      { t: 'Docker Desktop（可选，高级）', v: '自v2.2起不再需要。如果您更喜欢使用它，可以在托盘菜单中选择 “Use Docker Desktop for the engine (advanced)”（使用Docker Desktop运行引擎（高级））；StarkLLM随后会在Docker Desktop中运行其引擎，数据保持不变。' },
      { t: '从源代码运行（可选）', v: '开发者可以使用docker compose up --build -d，从GitHub上的源代码构建并运行引擎。' },
    ],
    warn: `2.2之前的版本需要Docker Desktop和WSL2，而v2.0.0（2026年10月24日之前）根本无法启动任何内容。请安装v${V}。`,
  },
  steps: {
    h2: '每一步都附有测试的安装检查清单',
    lede: '请按此顺序操作。在某一步的测试通过之前，请不要继续。执行命令时请打开终端（Windows Terminal或PowerShell）。',
    items: [
      { t: '1. Windows与磁盘空间', v: 'StarkLLM可在Windows 10或11（64位）上运行。无需Docker Desktop和WSL2。请为应用、引擎和AI模型至少保留15 GB可用磁盘空间。', code: 'winver', check: '测试：winver显示Windows 10或Windows 11。在文件资源管理器中，您的用户文件夹所在的驱动器（通常是C:）至少有15 GB可用空间。' },
      { t: '2.安装并启动StarkLLM', v: `从下载页面下载StarkLLM-v${V}-Setup.exe，安装后启动StarkLLM。引擎包含在安装程序中。`, check: '测试：StarkLLM窗口打开并显示启动进度。如果显示 “StarkLLM could not start”（StarkLLM无法启动），窗口会列出缺少的内容，并提供 “Retry”（重试）按钮。' },
      { t: '3. Ollama', v: '如果缺少Ollama，窗口会提供 “Install Ollama for me”（为我安装Ollama）：StarkLLM从ollama.com下载官方安装程序（约2 GB），检查其签名并完成安装，无需管理员权限。您也可以自行从ollama.com安装Ollama。', code: 'ollama --version\ncurl http://localhost:11434/api/tags', check: '测试：第二条命令输出JSON（模型列表，可能为空）。' },
      { t: '4.两个模型', v: '首次启动时，StarkLLM会下载一个聊天模型和一个小型嵌入模型（默认为qwen2.5:7b和nomic-embed-text，合计约5 GB），并显示进度。如果Ollama中已有合适的模型，则改用这些模型。', code: 'ollama list', check: '测试：ollama list显示一个聊天模型和一个嵌入模型。如果某个下载失败，窗口会指出是哪个模型：请用该名称运行ollama pull，然后点击 “Retry”。内存不足（8 GB的电脑）？请使用qwen2.5:3b，并在聊天中选择它。' },
      { t: '5.首次测试', v: 'StarkLLM会以这台电脑的用户身份为您登录，无需创建账户。', check: '测试：您可以创建一个工作区并上传一个小文本文件；其状态会变为 “indexed”（已索引）。然后就它提一个问题，检查回答是否提到了该文件。' },
    ],
  },
  problems: {
    h2: '问题与解决方法',
    lede: '点击某个问题，查看可能的原因和解决方法。问题按照用户通常遇到的顺序排列。',
    groups: [
      {
        h: '安装与启动',
        items: [
          { q: '1. Windows显示 “Windows protected your PC”（Windows已保护你的电脑）（SmartScreen），或Smart App Control阻止了安装程序', cause: '自v2.1.2起，安装程序、StarkLLM.exe和卸载程序均由 “Open Source Developer Christian Stark” 签名，因此Windows可以验证发布者。对于不常见的文件，Windows仍可能发出警告。v2.1.2之前的版本没有签名。', fix: ['检查发布者：右键点击安装程序，选择 “Properties”（属性），打开 “Digital Signatures”（数字签名）选项卡。签名者必须是 “Open Source Developer Christian Stark”，并且 “Details”（详细信息）中必须显示 “This digital signature is OK”（此数字签名正常）。', '将SHA-256哈希值与下载页面上的值进行比对。', '如果两者都一致，请继续（在SmartScreen中：先点 “More info”（更多信息），再点 “Run anyway”（仍要运行））。如果不一致，请不要运行该文件：请重新下载，并发送邮件至info@starkllm.com告诉我们。', '请勿关闭Smart App Control、SmartScreen或其他安全设置。如果Smart App Control阻止了签名正确的安装程序，请发送邮件至info@starkllm.com告诉我们。'] },
          { q: '2. Smart App Control或安全软件阻止了引擎的某个程序文件', cause: '自v2.2.1起，引擎的每个程序文件（Python包、Tesseract）都由 “Open Source Developer Christian Stark” 签名，因此Smart App Control允许它们运行。其他应用控制规则或安全软件仍可能阻止某个文件，这时引擎就无法启动。', fix: ['启动页面会指出被阻止的文件以及引擎日志（%APPDATA%\\StarkLLM\\engine-native.log）。', '请勿关闭Smart App Control或您的安全软件。请在GitHub上的StarkLLM页面或通过info@starkllm.com报告该文件名。', '在问题解决之前，您可以在托盘菜单中选择 “Use Docker Desktop for the engine (advanced)”（需要带WSL2的Docker Desktop）。'] },
          { q: '3. “Ollama is not installed”（未安装Ollama）或 “Ollama is not running”（Ollama未运行）', cause: 'StarkLLM使用Ollama（免费）运行其AI模型，并期望它位于127.0.0.1:11434。', fix: ['在启动页面点击 “Install Ollama for me”，或自行从ollama.com安装Ollama。', '如果已安装Ollama：从开始菜单启动它，等待其图标出现在托盘中，然后点击 “Retry”。', '在电脑上检查：'], code: 'curl http://localhost:11434/api/tags' },
          { q: '4. “pull model manifest: file does not exist”、“model not found”，或者因为模型过大导致电脑卡死', cause: '该模型名称在Ollama中不存在，或者所选模型需要的内存远超电脑所有（27B模型大约需要17 GB可用内存）。旧版的start-here.txt和.env.example中写的是qwen3.8:27b和qwen3-embedding:0.6b。', fix: ['使用默认设置中的模型：', '或者在模型选择器（左下角的 “AI MODEL”）中选择一个已安装的模型。', '使用其他嵌入模型建立索引的文档必须重新上传（向量的维度不同）。'], code: 'ollama pull qwen2.5:7b\nollama pull nomic-embed-text' },
          { q: '5. “Another StarkLLM engine already uses port 5173”（另一个StarkLLM引擎已在使用端口5173），或者因端口被占用而无法启动引擎', cause: '引擎通过您电脑的5173端口（127.0.0.1）提供应用。另一个程序，或者之前用Docker Desktop安装时留下的StarkLLM容器，已经在使用该端口。StarkLLM会自行停止它自己的旧容器；其他程序它无法停止。', fix: ['找到该程序，然后关闭它：', '或者把StarkLLM改到另一个端口：运行setx STARKLLM_UI_PORT 5174，然后在托盘菜单中退出StarkLLM并重新启动。'], code: 'netstat -ano | findstr :5173\ntasklist /FI "PID eq <number from the last column>"' },
          { q: '6.首次启动耗时很长，或下载失败', cause: '首次启动会下载AI模型（约5 GB），如果您允许，还会下载Ollama（约2 GB）。网速慢、公司代理、VPN、杀毒软件扫描或磁盘几乎已满，都会让速度变慢或使下载中断。', fix: ['至少保留15 GB可用磁盘空间（模型约5 GB，另加Ollama、应用和引擎）。', '窗口会显示每个下载的进度。TLS或连接错误说明网络被拦截；请换一个网络试试。', '排除原因后，点击 “Retry”；已经下载的模型不会再次下载。'] },
          { q: '7.窗口显示 “StarkLLM could not start”（StarkLLM无法启动）', cause: '应用会自行启动Ollama和它的引擎，某一步失败时就会显示这个页面。', fix: ['阅读页面上的红色提示行：它会指出缺少的部分（Ollama、被占用的端口、被Windows拦截的程序文件，或者引擎出错并附有最后几行日志）。', '解决该问题后点击 “Retry”。日志位于%APPDATA%\\StarkLLM：engine.log（应用）和engine-native.log（引擎）。', '在繁忙的电脑上，安装或更新后的首次启动可能需要几分钟；等待期间窗口会说明这一点。'] },
          { q: '8.启动后窗口一直空白或显示错误页面', cause: '引擎仍在启动中，或已经停止。', fix: ['等待一两分钟，然后在托盘菜单中选择 “Reload Application”（重新加载应用）。', '如果仍然空白，请在托盘菜单中退出StarkLLM，然后重新启动。', '错误信息通常在引擎日志的最后20行中（在PowerShell中打开）：'], code: 'notepad "$env:APPDATA\\StarkLLM\\engine-native.log"' },
          { q: '9.我使用Docker Desktop运行引擎（高级），但它无法启动', cause: '在托盘菜单中选择 “Use Docker Desktop for the engine (advanced)” 后，StarkLLM需要带WSL2的Docker Desktop，与2.2之前的版本相同。“error during connect ... dockerDesktopLinuxEngine” 或 “WSL 2 installation is incomplete” 等错误来自Docker Desktop。', fix: ['启动Docker Desktop并等待其引擎运行；docker info必须显示 “Server:” 部分。', '如果缺少WSL2，请在管理员终端中运行wsl --install并重启；必须在BIOS/UEFI中启用虚拟化。', '或者回到内置引擎：在托盘菜单中取消勾选 “Use Docker Desktop for the engine (advanced)”。两种方式下的聊天、文档和设置都相同。'], code: 'docker info\nwsl --status' },
        ],
      },
      {
        h: '使用聊天与模型',
        items: [
          { q: '10. “Model ... not found in Ollama. Please ensure it is pulled”（在Ollama中找不到模型）', cause: '聊天请求的模型没有安装（默认是qwen2.5:7b）。在v2.0.1中，聊天在每次新安装后都会请求llama3.2:3b（“Model \'llama3.2:3b\' not found”）；v2.0.2使用应用下载的模型。', fix: ['更新到最新版本（“Settings → About StarkLLM → Check for updates”（设置 → 关于StarkLLM → 检查更新）），或在模型选择器（左下角的 “AI MODEL”）中选择一个已安装的模型。', '列出已安装的模型，并下载缺少的模型。'], code: 'ollama list\nollama pull qwen2.5:7b' },
          { q: '11. “Not enough free memory to run model ...”、“Error generating response: 500 Server Error ...”，或者一直等不到回答', cause: '模型放不进可用内存，Ollama停止了它。7B模型大约需要5到6 GB可用内存；内存太少时，Windows也会变得非常慢。自v2.0.1起，聊天会用通俗的话说明这一点；v2.0.0显示的是原始的 “500 Server Error”。', fix: ['关闭浏览器、游戏和其他大型程序，然后重试。', '选择较小的模型，例如qwen2.5:3b（约2 GB），并在聊天中选择它。', '检查Ollama加载了哪些模型。'], code: 'ollama pull qwen2.5:3b\nollama ps' },
          { q: '12. “Ollama is offline.”（Ollama离线），或者聊天完全没有回应', cause: 'Ollama没有运行，或者安全软件阻止了与它的连接。StarkLLM通过127.0.0.1:11434访问Ollama（使用Docker Desktop引擎时为host.docker.internal:11434）。', fix: ['启动Ollama，并在电脑上检查：', '在防火墙或安全软件中允许Ollama。', '然后在托盘菜单中选择 “Reload Application”，或者退出StarkLLM后重新启动。'], code: 'curl http://localhost:11434/api/tags' },
          { q: '13.回答非常慢', cause: '没有合适的显卡时，Ollama使用CPU计算。第一个回答还需要先加载模型（在我们的测试中约20秒）。在一台16核台式机上，一个简短的回答大约需要10到40秒；笔记本电脑更慢。', fix: ['在性能较弱的电脑上使用较小的模型（qwen2.5:3b）。', '提出简短、具体的问题；长回答最耗时间。', '配备8 GB或以上显存的NVIDIA独立显卡会快得多。自v2.3起，StarkLLM也允许Ollama使用集成显卡（AMD Radeon、Intel Arc/Iris）；托盘菜单中的 “Use the integrated graphics for AI”（将集成显卡用于AI）可以关闭此功能。', '建立索引也很慢：文档的每个文本片段都要发送给嵌入模型。'] },
          { q: '14.回答一直为空，或者“思考中”的圆点一直不停（qwen3、deepseek-r1和其他思考型模型）', cause: '思考型模型会先用隐藏的文字进行思考。在v2.0.2及之前的版本中，它们可能把全部token上限都用在思考上，结果没有给出回答。v2.0.3会要求Ollama跳过思考步骤直接给出回答，空回答会显示为错误。', fix: ['更新到最新版本（“Settings → About StarkLLM → Check for updates”）。', '如果您希望模型先思考：设置Windows环境变量OLLAMA_THINK=true，在设置中调高 “Max Tokens”，然后重新启动StarkLLM。'] },
        ],
      },
      {
        h: '文档与回答质量',
        items: [
          { q: '15.助手忽略我的文档，而根据一般知识回答（或者编造内容）', cause: '在v2.0.0中，只有当消息中含有document或file等英语触发词时，才会开始检索文档。自v2.0.1起，每个问题都会检索工作区中的文档。如果仍然出现这种情况，通常是问题和文档用了不同的词语或语言。', fix: ['更新到最新版本（“Settings → About StarkLLM → Check for updates”）。', '用文档的语言提问，并使用文档中的词语。', '务必检查回答是否注明了来源文件。没有来源文件，说明没有使用您的文档。'] },
          { q: '16.文件无法上传，或最终状态为 “failed”（失败）', cause: '文件类型不受支持，文件为空或已损坏，或者文件大于100 MB（录音为500 MB）。', fix: ['支持的格式：文档PDF、DOCX、XLSX、PPTX、EPUB、TXT、MD、CSV、JSON、XML、HTML、日志和图片（PNG、JPG、WEBP、TIFF），最大100 MB；录音MP3、M4A、WAV、OGG、FLAC、MP4、MOV和MKV视频中的声音等，最大500 MB。', '先在电脑上打开该文件；损坏的PDF在这里同样会失败。', '扫描的PDF和图片需要文字识别（OCR），速度较慢；如果有原始文本文件，请优先使用。', '只改扩展名的做法（例如把.exe改成.txt）没有帮助。'] },
          { q: '17. CSV、Excel或JSON文件显示 “indexed”（已索引），但其中的内容从来找不到（Word文件中的表格也是如此）', cause: '这是v2.0.0的问题：这些文件被标记为已索引，但索引中什么也没有。自v2.0.1起，CSV、XLSX、JSON、XML、日志、Markdown以及Word文件中的表格都会建立索引（已用每种类型的测试文件验证）。', fix: ['更新到最新版本（“Settings → About StarkLLM → Check for updates”），然后重新上传文件。', '在依赖每个新文件之前，先用一个您知道答案的问题测试一下。'] },
          { q: '18.回答说 “not found in the documents”（文档中未找到），但文档里明明有这项内容', cause: '检索只会挑选少数几个段落。当问题用了其他词语、问题与文档使用不同语言（用英语询问德语合同时常常找不到），或者索引的是没有句子或标点的长文件（例如机器日志）时，就可能漏掉某项事实。', fix: ['用文档的语言提问，并使用文档中出现的确切术语、数字或编号。', '让问题更具体（指明文件、章节或型号）。', '对于很长的日志或表格，请按时间段或主题把文件拆分成较小的文件。', '回答会引用来源文件；请打开它进行核对。'] },
          { q: '19.回答把文档的旧版本和新版本混在一起', cause: '工作区中所有上传的文档会一起被检索。如果没有日期或“已被取代”之类的说明，模型无法知道哪个版本有效。', fix: ['从工作区中删除过时的文档，或者把旧版本放在单独的工作区中。', '在文本中写明有效期（“自……起生效”“已被……取代”）。', '明确地提问：“根据2026年的合同……”。'] },
          { q: '20.名称、数字或相似的零件编号被混淆', cause: '本地运行的7B模型可能会混淆相似的值（例如FT-48和FT-480），或者算错。在我们自己的测试中，同一个问题有时回答正确，有时回答错误。', fix: ['凡是重要的内容，请打开所引用的来源，亲自核对数字。', '一次只问一个问题，并写明确切的型号或零件编号。', '如果您的电脑能够运行，较大的模型（qwen2.5:14b，大约需要10 GB内存）更加可靠。'] },
          { q: '21.摘要遗漏了要点，或者英语和德语以外语言的回答读起来不够好', cause: '小型模型的摘要较为粗略，在英语和德语以外的语言上也较弱。您可以用中文提问，StarkLLM会让模型用提问的语言回答（效果取决于所选的本地模型），但菜单和按钮只有英语、德语、西班牙语、法语、意大利语和土耳其语。', fix: ['指明您需要的要点：“用三点总结：期限、价格、通知期”。', '为这类任务使用较大的模型。', '用文档的语言写问题；回答会跟随您提问的语言。'] },
          { q: '22.文档中含有指令（“忽略之前的所有指令……”）', cause: '文档中的文字可能试图操纵模型（提示注入）。在我们的测试中，模型忽略了这样的句子并回答了真正的问题，但这无法保证。', fix: ['只为您信任的文档建立索引。', '对于来源不明的文档所得出的回答，请谨慎对待。'] },
        ],
      },
      {
        h: '账户、数据与卸载',
        items: [
          { q: '23.我忘记了密码', cause: '在您自己的电脑上，StarkLLM会以这台电脑的用户身份为您登录，无需密码（自v2.0.7起）；此问题只涉及设有密码的账户。StarkLLM目前还没有密码重置功能（只有登录状态下的 “Change Password”（更改密码））。', fix: ['试试您平时常用的密码。', '最后的办法是注册一个新账户。它的工作区是独立的：旧账户的数据仍保存在同一个数据文件夹中，但您无法打开。'] },
          { q: '24.我的数据在哪里？如何备份？', cause: '所有内容都留在您的电脑上。', fix: ['桌面应用：数据库、检索索引和上传的文件位于%APPDATA%\\StarkLLM\\data；您的知识库文件夹是Documents\\StarkLLM Knowledge Base。从源代码运行：项目文件夹中的data\\ 和knowledge_base_data\\。', '设置中有备份和恢复功能。自v2.0.1起，只有第一个账户（管理员）可以使用；备份包含所有账户的数据，因此请妥善保存。', '手动复制这些文件夹之前，请先退出StarkLLM。'] },
          { q: '25.如何停止或卸载StarkLLM？', cause: 'StarkLLM和Ollama是两个独立的程序，需要分别卸载。', fix: ['停止：在托盘菜单中选择 “Quit StarkLLM”（退出StarkLLM）；引擎会随之停止。Ollama会继续在它自己的托盘图标中运行，直到您在那里退出它。', '卸载程序：Windows设置 > 应用 > StarkLLM。您位于%APPDATA%\\StarkLLM\\data中的数据会保留，直到您自己删除该文件夹。', '释放磁盘空间：ollama rm <name> 可以删除一个模型。如果您在2.2之前使用过Docker Desktop引擎，docker image prune -a可以删除其旧镜像。'], code: 'ollama list\nollama rm qwen2.5:7b' },
        ],
      },
      {
        h: '网页任务、终端与手机',
        items: [
          { q: '26.手机无法与电脑配对或连接', cause: '手机连接已关闭，手机不在同一个家庭网络中且未获准在离家时使用，或者Windows防火墙阻止了StarkLLM。如果没有开启 “Also away from home (through the relay)”（离家时也可使用（通过中继）），手机只能在家庭网络中连接电脑。', fix: ['在电脑上打开 “Settings › Phone”（设置 › 手机），开启连接并显示二维码；请在5分钟内用StarkLLM应用扫描（每个二维码只能使用一次）。', '只能在家中配对：手机和电脑必须连接同一个家庭网络（Wi-Fi）。', '通过移动数据或其他Wi-Fi时，只有在 “Settings › Phone” 中为该手机开启了 “Also away from home (through the relay)”、电脑处于开机状态并且StarkLLM正在运行时，手机才能连接电脑。此时手机会显示 “Connected · away from home”（已连接 · 离家）。', '如果Windows询问是否允许在网络上访问StarkLLM，请只允许专用网络。StarkLLM从不自行更改防火墙。', '“Fully offline”（完全离线）会关闭连接；要使用手机，请将其关闭。', '每一次连接尝试都会列在 “Settings › Privacy & network”（设置 › 隐私与网络）中。'] },
          { q: '27.网页任务或终端任务过早停止，或者完成得很少', cause: '网页任务和终端需要一个能够规划多个步骤的模型。小型7B模型会安全地停止，但能完成的任务很少。', fix: ['如果您的电脑内存足够，请为这类任务选择14B或更大的本地模型，例如qwen3:14b。', '用一两句清楚的话描述任务，并指明网站或文件。', '登录、付款和“您是机器人吗”之类的验证始终由您自己完成：请在StarkLLM窗口中完成，然后点击 “Continue”（继续）。'], code: 'ollama list\nollama pull qwen3:14b' },
        ],
      },
    ],
  },
  report: {
    h2: '仍未解决？请把这些发给我们',
    lede: '请在PowerShell中运行这些命令，并把输出连同您所做操作和所见情况的简短说明一起发给我们。最后一条命令会输出引擎日志的末尾部分。发送前请删除任何隐私信息。',
    code: 'winver\nollama --version\nollama list\nollama ps\nGet-Content "$env:APPDATA\\StarkLLM\\engine-native.log" -Tail 100',
    note: '请发送邮件至info@starkllm.com，或在GitHub上提交issue。请告诉我们您的Windows版本、内存大小以及是否有NVIDIA显卡。',
  },
  limits: {
    h2: `v${V}的已知限制`,
    lede: '我们宁愿把这些坦白说清楚：',
    items: [
      ['首次启动耗时较长', '需要下载约5 GB的AI模型（需要联网）；引擎随安装程序提供。Ollama只需安装一次，由StarkLLM或您自己安装。'],
      ['回答可能出错', '默认的7B模型可能混淆相似的值、算错或漏掉某项事实。做重要决定时，请务必核对所引用的来源。'],
      ['用与文档不同的语言提问', '用英语询问德语文档时常常得不到回答，因为嵌入模型在英语上最强。请用文档的语言提问。'],
      ['第一张图片会下载图像模型', '当您添加第一个PNG或JPG（或扫描的PDF页面）时，StarkLLM会一次性下载图像模型llava（约4.4 GB）。完成之前，该文档会显示 “Embedding”。'],
      ['没有标点的长文件', '日志及类似文件可能被索引成非常大的片段，因此其中的单个数值很难找到。'],
      ['旧版本与新版本', '除非文本中写明，否则助手不知道哪个文档版本有效。'],
      ['未在每一台Windows电脑上测试', '我们无法在每一台Windows电脑上测试；如果某一步在您的电脑上失败，请发送邮件至info@starkllm.com告诉我们。'],
      ['后台服务', '当您退出StarkLLM时，其引擎也会停止。Ollama会继续在它自己的托盘图标中运行，直到您退出它。使用Docker Desktop引擎（高级）时，关闭窗口后引擎仍会在Docker中继续运行。'],
      ['在聊天中运行代码', '在StarkLLM拥有自己的沙盒之前，内置引擎中Python代码块的 “Run”（运行）功能处于关闭状态；使用Docker Desktop引擎（高级）时则与以前一样可用。'],
      ['每个安装只有一位管理员', '第一个账户可以备份整个数据库，包括其他账户的文档。请只与您信任的人共用同一个安装。'],
      ['没有密码重置', '请参阅问题23。'],
      ['速度', '只有CPU的电脑速度较慢；请参阅问题13。'],
      ['网页任务和终端需要较大的模型', '它们在14B或更大的本地模型（例如qwen3:14b）上效果最好；小型7B模型会安全地停止，但能完成的任务很少。请参阅问题27。'],
      ['手机应用是预览版', 'Android应用正在Google Play上进行测试。如果您希望从Google Play获取，请将您的电子邮件地址发送至info@starkllm.com，您将收到Google Play的链接。它可以在您的家庭网络中使用；对于您允许的手机，离家时也可以通过StarkLLM中继使用（从手机到电脑全程加密）。请参阅问题26。'],
      ['第一次录音会下载语音模型', '您添加的第一段录音会一次性下载Whisper large-v3-turbo（约1.6 GB）。完全离线时，会使用较小的听写模型。'],
      ['终端命令不在网络列表中', '您在终端中允许的命令（例如npm install或git push）以及您添加的工具服务器，作为您自己的程序运行。它们的连接不会列在 “Settings › Privacy & network” 中；当StarkLLM处于完全离线状态时，需要联网的命令会被拒绝。'],
    ],
  },
  labels: { cause: '可能的原因', fix: '解决方法', jump: '跳转到', toc: ['检查清单', '问题', '获取帮助', '限制'] },
  cta: { h2: '返回指南', manual: '用户手册', download: '下载', contact: '联系我们' },
};
