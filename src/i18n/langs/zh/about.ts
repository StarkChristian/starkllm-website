// 关于页（2026）。路线图列出的是计划，而不是承诺。
export default {
  meta: {
    title: '关于 | StarkLLM',
    description: '谁在开发StarkLLM，它为什么存在，采用什么许可证，以及接下来的计划。',
  },
  hero: {
    eyebrow: '关于',
    h1: '为应该留在家里的文档而做。',
    lede: 'StarkLLM是来自德国亚琛的Christian Stark开发的免费开源项目。',
  },
  what: {
    h2: 'StarkLLM是什么',
    p: [
      'StarkLLM是一款适用于Windows的私密、本地优先的AI助手。它在您自己的电脑上阅读您的信件和文档，在回答时注明答案所在的页面，还能在网站上和项目文件夹中为您完成任务，并在每个重要步骤之前先征求您的同意。',
      '每一项核心工作流程都在您的机器上运行：文档、搜索索引和AI模型。除非您开启某项可选的在线功能，否则不会有任何内容离开您的电脑，而且“Settings › Privacy & network”（设置 › 隐私和网络）会列出每一个连接。',
    ],
  },
  why: {
    h2: '它为什么存在',
    p: [
      '大多数AI助手都要求您上传想要询问的内容。对于税务通知、医疗信件或合同来说，这是一个很高的要求。StarkLLM证明，即使文档从不离开您的书桌，也能得到有用的、以文档为依据的回答。',
      '它是为那些不能或不想上传文档的人而做的：有文书要处理的家庭、自由职业者、学生、研究人员和小型办公室。',
    ],
  },
  who: {
    h2: '谁在开发它',
    p: 'StarkLLM由Christian Stark设计和开发。',
    lines: ['Christian Stark', 'Maxstr. 14, 52070 Aachen, Germany', '电子邮件：info@starkllm.com'],
    contact: '联系',
  },
  open: {
    h2: '开源',
    p: [
      'StarkLLM基于Apache 2.0许可证开源：个人、研究和商业用途均免费。源代码、版本说明和隐私文档都在GitHub上。',
      '发现了错误或有什么想法？请在GitHub上提交issue，或发送电子邮件。',
    ],
    github: 'GitHub上的源代码',
    issues: '报告问题',
  },
  roadmap: {
    h2: '接下来的计划',
    lede: '这是2026年和2027年的计划，而不是承诺。每一步只有在经过测试后才会发布。',
    items: [
      { when: '下一步', title: '与您手机的直接连接', text: '手机和电脑能够直接连接时就直接连接，中继作为备用。无论哪种方式，加密都保持端到端。' },
      { when: '下一步', title: 'Google Play上的Android应用', text: '从封闭测试走向公开发布。' },
      { when: '以后', title: '自己的代码沙箱', text: 'Python代码块的“Run”（运行）将再次无需Docker即可使用，在StarkLLM自己的沙箱中运行。' },
      { when: '持续进行', title: '每个页面都有每种语言', text: '这个网站将提供应用的全部六种语言，并配有每种语言的应用截图和视频。' },
    ],
  },
  related: {
    h2: '相关项目',
    text: 'StarkLLM源于对隐私保护计算的更广泛兴趣。关于保护私人数据的密码学方法，请参阅homomorphicprivacy.com。',
  },
};
