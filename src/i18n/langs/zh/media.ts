// 应用截图的替代文字以及视频的标题和说明（按媒体名称）。截图和视频来自英文界面的StarkLLM 2.6.0。
export default {
  shots: {
    '01-home': 'StarkLLM开始页：从信件中找到的下一个截止日期和付款日期，每项都附有金额和页码，以及最新的文档（英文界面）',
    '02-inbox': 'StarkLLM收件箱：信件按寄件人归为一个事项，最近的截止日期排在最前，一封信件被标记为可能的诈骗（英文界面）',
    '03-chat-sources': 'StarkLLM聊天：关于一封信件的问题得到了金额和到期日的回答，回答下方有来源标签（英文界面）',
    '04-source-page': '一个来源在对应页面打开，回答所依据的段落已被标出（英文界面）',
    '05-scam-warning': '回答上方的红色警告：这封信要求用代金券并通过链接付款，并且包含一条写给AI助手的隐藏提示（英文界面）',
    '06-book-summary': '关于整本书的回答，由各章节摘要组成，并注明所涉及的页码（英文界面）',
    '07-image-question': '针对一张粘贴的截图提出的问题，由电脑上的视觉模型回答（英文界面）',
    '08-recording': '一段会议录音被转写成带时间的文档，并针对它提出了一个问题（英文界面）',
    '09-web-task': 'StarkLLM浏览器窗口中的网页任务，带地址栏，页面旁边列出了各个步骤（英文界面）',
    '10-terminal': '项目文件夹中的终端：文件修改在执行之前先显示出来，并有允许或拒绝的按钮（英文界面）',
    '11-compare-models': '比较模型：两个本地模型并排回答同一个问题（英文界面）',
    '12-settings-phone': '“Settings › Phone”（设置 › 手机）：一部已配对的Android手机，以及“Also away from home (through the relay)”（在外也可使用（通过中继））开关（英文界面）',
    '13-privacy-network': '“Settings › Privacy & network”（设置 › 隐私和网络）：列出每个连接的时间、主机和用途，以及“Fully offline”（完全离线）开关（英文界面）',
    '14-themes': '“Settings › Appearance”（设置 › 外观）：主题库，一个浅色主题和一个深色主题（英文界面）',
    '15-settings-models': '“Settings › Models”（设置 › 模型）：这台电脑上的聊天模型、嵌入模型和视觉模型（英文界面）',
    'phone-01-chat': 'StarkLLM Android应用：来自电脑的回答，附有来源标签（英文界面）',
  },
  videos: {
    'v1-letter-answer': { title: '一封信、一个问题、一个附带来源的回答', caption: '添加一封信件。回答给出金额和日期，点击来源即可打开对应页面。' },
    'v2-web-task': { title: '网页任务', caption: 'StarkLLM在自己的浏览器窗口中打开一个网站，逐步点击，然后附上链接作答。' },
    'v3-terminal': { title: '终端：编程帮助', caption: '修改先显示出来，您同意后才执行，“Undo the file changes”（撤销文件修改）可以将其还原。' },
    'v4-inbox': { title: '收件箱', caption: '信件按寄件人归为事项，附有截止日期、金额以及每项信息所在的页面。' },
    'v5-privacy': { title: '隐私和网络', caption: '每个连接都会列出，一个开关即可让StarkLLM完全离线。' },
  },
};
