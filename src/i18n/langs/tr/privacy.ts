// Gizlilik genel bakışı (2026, yeni). Bu web sitesinin yasal gizlilik politikası ayrı kalır (/datenschutz, /privacy-policy).
// Kaynaklar: docs/privacy-network.md (tablo; kodla çeliştiği yerde kod geçerlidir: web araması DuckDuckGo, Startpage,
// Mojeek, Wikipedia), docs/verify-privacy.md, docs/encryption-design.md, docs/code-signing.md,
// .github/workflows/sbom.yml ve uygulama deposunun RELEASE_NOTES.md dosyası, v2.6.0.
export default {
  meta: {
    title: 'Gizlilik: bilgisayarınızda kalanlar | StarkLLM',
    description: 'Bilgisayarınızdan asla çıkmayanlar, StarkLLM’in kurabileceği her bağlantı ve ne zaman kurduğu, diskte koruma, imzalı derlemeler, bir yazılım malzeme listesi ve bunların hepsini kendiniz nasıl kontrol edebileceğiniz.',
  },
  hero: {
    eyebrow: 'Gizlilik',
    h1: 'Baştan gizlilik için tasarlandı. Kendiniz kontrol edebilirsiniz.',
    lede: 'StarkLLM, belgelerinizin hiçbir zaman buluta ihtiyaç duymaması için tasarlandı. Neyin çevrimiçi olacağına siz karar verirsiniz, her bağlantıyı görebilirsiniz ve bizim sözümüze güvenmek zorunda değilsiniz.',
  },
  stays: {
    h2: 'Bilgisayarınızdan asla çıkmayanlar',
    lede: 'Neyi açarsanız açın, bunlar kendi diskinizde ve kendi işlemcinizde veya ekran kartınızda kalır.',
    items: [
      { icon: 'doc', title: 'Belgeleriniz', text: 'Mektuplar, sözleşmeler, kitaplar, taramalar, fotoğraflar ve kayıtlar ile bunlardan okunan metin.' },
      { icon: 'chat', title: 'Sohbetleriniz', text: 'Sorular, yanıtlar ve kaynakları; bir bulut modelini kendiniz seçmediğiniz sürece.' },
      { icon: 'search', title: 'Arama dizini', text: 'Her belgenin pasajları ve vektörleri ile büyük belgelerin özetleri.' },
      { icon: 'pc', title: 'Yapay zekâ modelleri', text: 'Ollama aracılığıyla bilgisayarınızda çalışırlar. İlk indirmeden sonra StarkLLM internetsiz çalışır.' },
      { icon: 'inbox', title: 'Gelen kutusu ve son tarihler', text: 'Göndericiler, tutarlar, hesaplar ve tarihler bilgisayarınızda sabit kurallarla çıkarılır.' },
      { icon: 'eyeoff', title: 'Sizinle ilgili hiçbir şey', text: 'Telemetri yok, çökme raporu yok, kullanım istatistiği yok, reklam yok, bir sunucuda hesap yok.' },
    ],
  },
  online: {
    h2: 'Neler çevrimiçi olur ve ne zaman',
    lede: 'StarkLLM’in kurabileceği her bağlantı, Ayarlar › Gizlilik ve ağ bölümündeki gibi. Her biri siz açana veya başlatana kadar kapalıdır ya da istediğiniz bir indirme için yalnızca bir kez gerçekleşir.',
    cols: ['Bağlantı', 'Nereye gider', 'Ne zaman', 'Yeni kurulumda'],
    rows: [
      { what: 'Güncelleme denetimi', host: 'api.github.com', when: 'Başlangıçta, ilk başlatmada onay verdiyseniz', def: 'Onay verene kadar kapalı' },
      { what: 'Güncelleme indirme', host: 'github.com', when: 'Yalnızca “İndir ve kur”dan sonra', def: 'Kapalı' },
      { what: 'Yapay zekâ modelleri', host: 'registry.ollama.ai (Ollama aracılığıyla)', when: 'İlk başlatmada, eksik modeller için', def: 'Gerektiğinde' },
      { what: 'Ollama yükleyicisi', host: 'ollama.com', when: 'Yalnızca “Ollama’yı benim için kur”dan sonra', def: 'Kapalı' },
      { what: 'Web araması', host: 'DuckDuckGo; yanıt vermezse: Startpage, Mojeek, Wikipedia', when: 'Soru başına, Web Araması düğmesi açıkken', def: 'Kapalı' },
      { what: 'Web görevleri', host: 'Yazdığınız görevin siteleri', when: 'Yalnızca başlattığınız bir web görevi için', def: 'Kapalı' },
      { what: 'Web’den içe aktarmalar', host: 'Girdiğiniz adres, YouTube, GitHub', when: 'Yalnızca “+ Web URL”, “+ YouTube Videosu” veya “+ GitHub Deposu”ndan sonra', def: 'Kapalı' },
      { what: 'Bulut model sağlayıcıları', host: 'Girdiğiniz sağlayıcı (örneğin OpenAI, DeepSeek, OpenRouter, Groq)', when: 'Böyle bir sağlayıcı seçiliyken her sohbette; sohbet bir rozet gösterir', def: 'Kapalı' },
      { what: 'Ollama bulut modelleri', host: 'ollama.com (Ollama aracılığıyla)', when: 'Yalnızca adı “cloud” ile biten bir model seçerseniz', def: 'Kapalı' },
      { what: 'Piyasa fiyatları', host: 'Yahoo Finance, CoinGecko', when: 'Yalnızca bileşeni açtıktan sonra', def: 'Kapalı' },
      { what: 'Konuşma modelleri', host: 'huggingface.co', when: 'Sesli girişin veya bir kaydın ilk kullanımında', def: 'Kullanılana kadar kapalı' },
      { what: 'Metin tanıma dilleri', host: 'github.com', when: 'Yalnızca Ayarlar’da “İndir”den sonra', def: 'Kapalı' },
      { what: 'Evde telefon', host: 'Gelen bağlantı, ev ağınızdaki eşleştirilmiş bir telefondan', when: 'Telefon bağlantısını açıp bir telefon eşleştirdikten sonra', def: 'Kapalı' },
      { what: 'Evden uzakta telefon', host: 'relay.starkllm.com (telefondan bilgisayarınıza kadar şifreli)', when: 'Yalnızca evden uzakta kullanımına izin verdiğiniz telefonlar için', def: 'Kapalı' },
    ],
    note: 'Terminal’de izin verdiğiniz komutlar ve eklediğiniz araç sunucuları sizin kendi programlarınız olarak çalışır: listede yer almazlar ve neye bağlandıkları onlara kalmıştır. Ollama’nın ve Windows’un, StarkLLM’in denetlemediği kendi güncelleme denetimleri vardır.',
  },
  offline: {
    h2: 'Tek anahtar: tamamen çevrimdışı',
    text: 'Ayarlar › Gizlilik ve ağ bölümündeki “Tamamen çevrimdışı” her çevrimiçi özelliği reddeder, telefonunuzla ve aktarıcıyla bağlantıyı kapatır ve hiçbir şey indirmez, bir güncellemeyi bile. Belgeleriniz, gelen kutusu ve yerel modeller çalışmaya devam eder. İlk başlatmada bir kez, çevrimiçi mi kalmak yoksa tamamen çevrimdışına mı geçmek istediğiniz sorulur.',
  },
  atRest: {
    h2: 'Diskte koruma',
    lede: 'İsteğe bağlı, Ayarlar › Koruma bölümünde: kaybolan bir dizüstü bilgisayar, aynı bilgisayardaki başka bir kullanıcı veya bir bulut klasöründeki yedek için.',
    items: [
      { k: 'Diskte şifreli', v: 'Belgeler, sohbetler, adlar ve başlıklar diskte şifrelenir; arama dizini de kilitlenebilir. Anahtar Windows hesabınıza bağlıdır.' },
      { k: 'Başlangıç parolası', v: 'Kurtarma anahtarıyla birlikte isteğe bağlı bir parola. Parola hiçbir zaman saklanmaz.' },
      { k: 'Şifreli yedek', v: 'İstediğiniz yerde, bir bulut klasöründe de saklayabileceğiniz tek bir yedek dosyası; parola olmadan anlamsız verilerden ibarettir. Haftalık otomatik yedekleme birkaç kopya tutar.' },
    ],
    limits: 'StarkLLM açıkken sizin hesabınızla çalışan kötü amaçlı yazılımlara karşı korumaz. BitLocker yine de önerilir: programları ve modelleri de kapsar.',
  },
  signed: {
    h2: 'İmzalı derlemeler',
    text: '2.1.2’den beri yükleyici, StarkLLM.exe, kaldırma programı ve motorun program dosyaları, “Open Source Developer Christian Stark” adına verilmiş bir Certum sertifikasıyla imzalanır. Yerleşik güncelleyici yalnızca bu adla imzalanmış güncellemeleri kurar.',
    link: 'Kod imzalama politikası',
  },
  sbom: {
    h2: 'Her sürüm için bir malzeme listesi',
    text: 'GitHub’daki her sürüm, uygulama ve motor için bir yazılım malzeme listesiyle (SBOM, CycloneDX) gelir: içindeki her kütüphanenin sürümüyle birlikte listesi.',
    link: 'GitHub’daki sürümler',
  },
  check: {
    h2: 'Kendiniz kontrol edin',
    lede: 'StarkLLM’in kendi ekranlarına güvenmek zorunda değilsiniz. “Tamamen çevrimdışı”yı açın, uygulamayı kullanın ve bakın.',
    steps: [
      { t: 'Kaynak İzleyicisi', v: 'Win + R, “resmon”, Ağ sekmesi. Tamamen çevrimdışı açıkken StarkLLM.exe, python.exe ve ollama.exe yalnızca 127.0.0.1 ile konuşmalıdır.' },
      { t: 'PowerShell', v: 'Bu bilgisayara gitmeyen her açık bağlantıyı, onu kuran programla birlikte listeleyin:' },
      { t: 'Wireshark', v: 'En güçlü denetim: ağ bağdaştırıcınızda kayıt alın ve yerel trafiği filtreleyin. Ardından web aramasını açın ve DuckDuckGo’nun belirdiğini görün; böylece denetimin işe yaradığını bilirsiniz.' },
    ],
    code: "Get-NetTCPConnection -State Established |\n  Where-Object { $_.RemoteAddress -notin '127.0.0.1','::1' } |\n  ForEach-Object { $p = Get-Process -Id $_.OwningProcess -ErrorAction SilentlyContinue\n    [pscustomobject]@{ Process = $p.ProcessName; Remote = \"$($_.RemoteAddress):$($_.RemotePort)\" } } |\n  Sort-Object Process, Remote | Format-Table -AutoSize",
    link: 'GitHub’daki tam kılavuz',
  },
  site: {
    h2: 'Peki bu web sitesi?',
    text: 'Çerez yerleştirmez, analiz aracı kullanmaz ve başka sunuculardan yazı tipi, betik veya video yüklemez. Bu sayfalardaki asistan Lucy tarayıcınızda yanıt verir; sorularınız hiçbir yere gönderilmez.',
    link: 'Bu web sitesinin gizlilik politikası',
  },
};
