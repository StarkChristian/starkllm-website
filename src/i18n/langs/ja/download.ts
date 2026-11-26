import { V, RELEASE } from '../../../data/release';

// サイズは公開されたリリースそのものから取るため、古くなることはありません。
const mb = (b: number, locale: string) => (b / 1_000_000).toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const bytes = (b: number, locale: string) => b.toLocaleString(locale);
const SETUP = RELEASE.setup.size, PORTABLE = RELEASE.portable?.size ?? 0;
const L = 'ja-JP';

export default {
  meta: { title: 'ダウンロード | StarkLLM', description: `Windows用StarkLLM v${V} のダウンロード：インストーラー、SHA-256チェックサム、セットアップ、動作要件、よくある質問。` },
  hero: { eyebrow: 'ダウンロード', h1: 'StarkLLMをダウンロード', lede: 'Windows Research Betaから始めましょう。' },
  helpCallout: { h: 'インストールがうまくいきませんか？', text: 'StarkLLMは独自のエンジンを内蔵しています。ほかに必要なプログラムはAIモデル用のOllamaだけで、OllamaもStarkLLMが代わりにインストールできます。ヘルプページには、手順ごとの確認方法を載せたチェックリストと、よくある問題の解決策があります。', link: 'ヘルプとトラブルシューティングを開く' },
  release: {
    h2: 'リリースパッケージ',
    facts: [
      ['バージョン', `v${V}（ネイティブデスクトップ版、エンジン内蔵、Docker不要）`],
      ['ライセンス', 'Apache 2.0（オープンソース）'],
      ['インストーラーのサイズ', `${mb(SETUP, L)} MB（${bytes(SETUP, L)} バイト）`],
      ...(PORTABLE ? [['ポータブル版のサイズ', `${mb(PORTABLE, L)} MB（${bytes(PORTABLE, L)} バイト）`]] : []),
    ],
    installer: `v${V} インストーラーをダウンロード（.exe）`,
    portable: 'ポータブル版（.exe）',
    github: 'GitHub',
    shaH: 'SHA-256チェックサム',
    shaLede: '実行する前にファイルが改ざんされていないことを確かめるには、ダウンロードしたファイルのSHA-256ハッシュを比較してください：',
    setupLabel: `StarkLLM-v${V}-Setup.exe（Windowsインストーラー）`,
    portableLabel: `StarkLLM-v${V}-Portable.exe（ポータブル実行ファイル）`,
    verify: 'PowerShellで確認する：',
  },
  setup: {
    h2: 'セットアップの手順',
    intro: 'StarkLLMは独自のエンジンを内蔵しているため、Docker DesktopやWSL2は必要ありません。初回起動時には、まだお持ちでないAIモデル（約5 GB）と、許可した場合はOllamaをダウンロードします。2回目以降の起動は数秒で終わります。すでにインストール済み（2.0.7以降）ですか？「Settings › About StarkLLM › Check for updates › Download and install」（設定 › StarkLLMについて › 更新を確認 › ダウンロードしてインストール）を選んでください。',
    steps: [
      { t: 'StarkLLMのインストーラーを実行する', v: `StarkLLM-v${V}-Setup.exeをダウンロードして実行します。インストーラーにはエンジンが含まれており、デスクトップにショートカットを作成します。` },
      { t: 'StarkLLMを起動する', v: 'StarkLLMのショートカットをクリックします。アプリがエンジンを起動し、Ollamaを確認します。' },
      { t: 'Ollamaがなければインストールする', v: 'Ollamaがインストールされていない場合、ウィンドウに「Install Ollama for me」（Ollamaをインストールする）が表示されます。StarkLLMがollama.comから公式インストーラー（約2 GB）をダウンロードし、署名を確認してからインストールします。管理者権限は必要ありません。ollama.comからご自身でOllamaをインストールすることもできます。' },
      { t: '初回起動を待つ', v: 'StarkLLMがAIモデル（標準ではqwen2.5:7bとnomic-embed-text、約5 GB。Ollamaにすでに適したモデルがあればそれを使います）をダウンロードし、進行状況を表示してから専用のウィンドウで開きます。何かが足りない場合は、何が足りないのか、どう直せばよいかをウィンドウが表示します（ログ：%APPDATA%\\StarkLLM\\engine.logとengine-native.log）。' },
      { t: 'ワークスペースを作り、ドキュメントを追加する', v: 'StarkLLMはこのPCのユーザーとして自動的にサインインします。アカウントを作る必要はありません。ワークスペースを作り、ドキュメントを追加して、その内容について質問してください。' },
    ],
  },
  prereq: {
    h2: '動作要件チェックリスト',
    lede: 'StarkLLMを起動する前に、次のすべてがそろっていることを確認してください：',
    items: [
      ['OS', 'Windows 10または11（64ビット）。'],
      ['ソフトウェア', 'AIモデル用のOllamaだけです。StarkLLMが公式版をインストールすることもでき（「Install Ollama for me」）、ollama.comから入手することもできます。v2.2以降、Docker DesktopとWSL2は不要です。'],
      ['モデルとディスク', '初回起動時に自動でダウンロードされます（約5 GB）。ディスクの空き容量を15 GB以上確保してください。'],
      ['ハードウェア', 'メモリは最低8 GB（3Bモデル）、推奨16 GB（7Bモデル）。VRAM 8 GB以上のNVIDIA GPUを強く推奨します。v2.3以降は、Ollamaが内蔵のAMD RadeonとIntel Arc/Irisグラフィックスも使えるようになりました。ユーザーマニュアルにハードウェアの段階別の目安があります。'],
      ['対応形式', 'ドキュメント：PDF、Word（DOCX、表を含む）、Excel（XLSX）、PowerPoint（PPTX）、EPUB、TXT、Markdown、CSV、JSON、XML、HTML、ログ、画像（PNG、JPG、WEBP、TIFF、OCR付き）。最大100 MB。録音：MP3、M4A、WAV、OGG、FLAC、MP4・MOV・MKV動画の音声など。最大500 MB。'],
    ],
  },
  smart: {
    h2: 'コード署名：インストーラーの確認方法',
    text: 'v2.1.2以降、インストーラー、StarkLLM.exe、アンインストーラーは、「Open Source Developer Christian Stark」に発行されたCertumのコード署名証明書で、タイムスタンプ付きで署名されています。署名によってWindowsは発行元を確認でき、署名後にファイルが変更されていないことがわかります。内蔵のアップデーターは、この名前で署名された更新だけをインストールします。',
    checkH: '署名をご自身で確認する',
    check: [
      `ダウンロードしたインストーラー（StarkLLM-v${V}-Setup.exe）を右クリックし、「Properties」（プロパティ）を選びます。`,
      '「Digital Signatures」（デジタル署名）タブを開きます。署名者は「Open Source Developer Christian Stark」でなければなりません。',
      '署名を選んで「Details」（詳細）をクリックします。Windowsに「This digital signature is OK」（このデジタル署名は正常です）と表示されなければなりません。',
    ],
    dlls: 'アプリに含まれる他社製のElectronコンポーネント（DLLファイル）の一部は、私たちが署名したものではありません。これは意図どおりです。インストーラー、StarkLLM.exe、アンインストーラーは署名されています。',
    warnH: 'それでもWindowsが警告を表示しますか（SmartScreenまたはSmart App Control）？',
    warn: '署名によってWindowsは発行元を確認できますが、まだあまり見かけないファイルについては警告を出すことがあります。上の説明どおりに発行元の名前を確認し、SHA-256チェックサムを比較してください。両方が一致すれば、続行してかまいません（SmartScreenでは「More info」（詳細情報）、続いて「Run anyway」（実行））。名前が異なる場合、「Digital Signatures」タブがない場合、またはチェックサムが一致しない場合は、ファイルを実行しないでください。このページからもう一度ダウンロードし、info@starkllm.comまでお知らせください。StarkLLMをインストールするために、Smart App Control、SmartScreen、その他のセキュリティ設定をオフにしないでください。',
  },
  notes: { h: '重要な注意事項', items: ['StarkLLMは無料のオープンソースです（Apache 2.0）。', 'Apache 2.0ライセンスで、個人利用、研究、商用利用のいずれにも無料でお使いいただけます。', '「現状のまま」提供され、いかなる保証も責任も負いません。'] },
  walk: {
    h2: 'アプリの紹介',
    lede: 'お使いのパソコンでStarkLLMを実行したときに何が起こるのかを、順を追ってご紹介します。',
    steps: [
      { t: 'ステップ1：ナレッジベースとワークスペース', v: 'ローカルのフォルダーを登録し、ドキュメントを永続的なナレッジベースにインデックス化します。', kind: 'kb', alt: 'StarkLLMのナレッジベースの設定（英語のインターフェース）' },
      { t: 'ステップ2：ドキュメントに基づくチャット', v: 'インデックス化したドキュメントに基づいて質問でき、出典のファイルが表示されます。', kind: 'chat', alt: 'ドキュメントに基づくStarkLLMのチャット（英語のインターフェース）' },
      { t: 'ステップ3：確かめられる出典', v: '回答の下にある出典をクリックすると、回答の根拠となった箇所を一字一句そのまま読め、ドキュメントをそのページで開けます。', kind: 'sources', alt: '回答の根拠となった箇所が一字一句そのまま、ページへのリンク付きで表示されている画面（英語のインターフェース）' },
      { t: 'ステップ4：安全なローカルツール', v: 'モデルによるツールの呼び出しを、チャットの中で直接確認、編集、承認できます。', kind: 'tool' },
      { t: 'ステップ5：13種類のテーマ', v: 'OLED Pitch Black、Cyberpunk Rose、Liquid Glassなどに即座に切り替えられます。', kind: 'appearance', alt: 'StarkLLMの設定とテーマギャラリー（英語のインターフェース）' },
    ],
  },
  faq: {
    h2: 'よくある質問',
    items: [
      ['データがパソコンの外に出ることはありますか？', 'StarkLLMは、データをお使いのパソコンに保つように設計されています。ドキュメントはPC上のローカルなChromaDBデータベースに保存され、AIの推論はPC上のOllamaで実行されます。オプションのオンライン機能をオンにしない限り、何もPCの外に出ません。オンライン機能とは、ウェブ検索、ウェブタスク、クラウドのモデルプロバイダー、ウェブからの取り込み、市場価格、外出先のスマートフォン（StarkLLMリレー経由）、更新の確認です。「Settings › Privacy & network」（設定 › プライバシーとネットワーク）にはStarkLLMが行うすべての接続が一覧表示され、「Fully offline」（完全オフライン）にするとそのすべてが拒否されます。ターミナルで許可したコマンドと、追加したツールサーバーは、お客様ご自身のプログラムとして実行されるため、一覧には表示されません。'],
      ['スマートフォン用のアプリはありますか？', 'はい、Android用がプレビュー版としてあります。PC上のStarkLLMと組み合わせて動作します。Androidアプリはテスト段階としてGoogle Playで提供されています。Google Playから入手したい場合は、メールアドレスをinfo@starkllm.comまでお送りください。Google Playへのリンクをお送りします。'],
      ['StarkLLMは無料ですか？', 'はい。Apache 2.0ライセンスの無料のオープンソースで、個人利用、研究、商用利用にお使いいただけます。サブスクリプション、テレメトリー、隠れた有料プランはありません。「現状のまま」提供され、保証はありません。'],
      ['回答が遅いことがあるのはなぜですか？', '速度はハードウェアによって決まります。専用のGPUがない場合、OllamaはCPUで推論するため、ずっと遅くなります。VRAM 8 GB以上の専用NVIDIA GPUがあれば、はるかに速く生成されます。'],
      ['インストーラーは署名されていますか？SmartScreenやSmart App Controlが警告した場合は？', 'はい。v2.1.2以降、インストーラー、StarkLLM.exe、アンインストーラーは「Open Source Developer Christian Stark」によって署名されているため、Windowsは発行元を確認できます。それでもWindowsが警告する場合は、発行元の名前を確認し（インストーラーを右クリック、「Properties」、「Digital Signatures」）、このページのSHA-256チェックサムと比較してください。両方が一致する場合にだけファイルを実行してください。Smart App Controlやその他のセキュリティ設定はオフにしないでください。'],
      ['どんなハードウェアが必要ですか？', '3Bモデルにはメモリ最低8 GB、7Bモデルには16 GBが必要です。上級者向けのモデル（14B〜32B）には、VRAM 24 GBまたはシステムメモリ64 GBを推奨します。'],
      ['通常のチャットとドキュメントチャットの違いは何ですか？', '通常のチャットは、モデルが事前学習した知識だけに頼ります。ドキュメントチャットはRAGを使います。まずアップロードしたドキュメントを検索し、関連するチャンクをモデルに渡し、確かめられる引用付きで回答します。'],
      ['ワークスペースのドキュメントとナレッジベースの違いは何ですか？', 'ワークスペースのドキュメントは1つのプロジェクトの中だけで使われます。ナレッジベースはパソコン上の永続的で共通のフォルダーで、どのチャットからも参照できます。'],
      ['ウィンドウに「StarkLLM could not start」（StarkLLMを起動できませんでした）と表示されます。どうすればよいですか？', 'StarkLLMは独自のエンジンとOllamaを起動します。ある手順が失敗すると、ウィンドウに足りないものが一覧表示され（たとえばOllamaが未インストール、ポートが使用中、Windowsがブロックしたプログラムファイル、ログの最後の行が付いたエンジンのエラーなど）、「Retry」（再試行）ボタンが表示されます。ログは%APPDATA%\\StarkLLMにあります（engine.log、エンジンについてはengine-native.log）。解決策はヘルプページにあります。'],
      ['アプリは開くのに、チャットが接続しない場合は？', 'チャットにはOllamaが必要です。ウィンドウに「StarkLLM is running without its AI runtime」（StarkLLMはAIランタイムなしで実行中です）と表示された場合は、Ollamaをインストールまたは起動して「Retry」を押してください。するとStarkLLMがモデル（qwen2.5:7bとnomic-embed-text）をダウンロードします。エンジンはPC上の127.0.0.1:11434でOllamaと通信します。'],
      ['ソースコードを確認できますか？', 'はい。StarkLLMはGitHubのStarkChristian/StarkLLMで、Apache 2.0ライセンスの完全なオープンソースとして公開されています。'],
      ['ご意見を送ったり、開発に参加したりするには？', 'ご意見を歓迎します。info@starkllm.comまでメールをお送りいただくか、GitHubリポジトリでIssueを作成してください。'],
    ],
  },
  contribute: { h2: '開発に参加して改善を提案する', text: 'StarkLLMはオープンで、進化を続けるプロジェクトです。不具合を見つけた場合、機能のアイデアがある場合、ソースコードを確認したい場合は：', repo: 'ソースコードを閲覧し、Issueを作成する。', mail: 'メール' },
};
