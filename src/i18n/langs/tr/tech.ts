// Türkçe özellik sayfaları (yapay zekâ destekli taslak, ana dili Türkçe olan biri tarafından gözden geçirilmeli).
// Uygulamanın arayüzü henüz İngilizce olduğundan menü ve düğme adları (Model Hub, Sync Now, Personal KB, Settings) İngilizce bırakıldı.
const labels = { what: 'Nedir?', why: 'Neden önemli?', how: 'StarkLLM bunu nasıl yapar?', example: 'Örnek', limits: 'Bilmekte yarar var', more: 'Diğer özellikler', cta: 'StarkLLM’i indirin', manual: 'Kılavuzu okuyun' };

type L = typeof labels;
type Section = { h: string; p?: string; list?: string[] };
const s = (l: L, what: string, why: string, how: string | Section, example: string, limits?: string): Section[] => [
  { h: l.what, p: what },
  { h: l.why, p: why },
  typeof how === 'string' ? { h: l.how, p: how } : { h: l.how, ...how },
  { h: l.example, p: example },
  ...(limits ? [{ h: l.limits, p: limits }] : []),
];
const en = labels;

const pages = {
  'tech-rag': {
    title: 'Belgelerinizden yanıtlar (RAG) | StarkLLM', eyebrow: 'Erişimle zenginleştirilmiş üretim',
    h1: 'Belgelerinizden yanıtlar', lede: 'StarkLLM, yanıt vermeden önce dosyalarınızın ilgili pasajlarını okur ve bunların nerede olduğunu söyler.',
    shot: 'chat', shotAlt: 'StarkLLM, yerel bir PDF’ten bir soruyu kaynak göstererek yanıtlıyor (arayüz İngilizce)',
    sections: s(en,
      'Retrieval-augmented generation (RAG, erişimle zenginleştirilmiş üretim), modelin önce sorunuza uyan belge pasajlarını alması ve yanıtını bunlara dayandırması demektir.',
      'Bir dil modeli sözleşmeleriniz, raporlarınız veya notlarınız hakkında hiçbir şey bilmez. Pasajlarınız olmadan tahmin yürütür ve bir tahmin ikna edici görünebilir.',
      'Sorunuz workspace’te (ve açıksa Knowledge Base’inizde) aranır. En iyi pasajlar yeniden sıralanır ve soruyla birlikte modele verilir. Her yanıt, kaynaklarını dosya adı ve sayfa veya bölümle listeler.',
      '“Yılmaz sözleşmesindeki ihbar süresi nedir?” diye sorarsınız. StarkLLM maddeyi PDF’te bulur, yanıtı ondan verir ve “Yılmaz sözleşmesi.pdf, sayfa 4” bilgisini gösterir.',
      'Model bir pasajı yine de yanlış okuyabilir. Önemli kararlar için alıntılanan sayfayı açın ve kontrol edin.'),
  },
  'tech-hybrid-search': {
    title: 'Hibrit arama | StarkLLM', eyebrow: 'Arama',
    h1: 'Hibrit arama', lede: 'Anlama göre ve tam sözcüklere göre aynı anda arama.',
    sections: s(en,
      'Hibrit arama, aynı anlama gelen pasajları bulan vektör aramasını, tam sözcükleri, adları ve sayıları bulan anahtar kelime aramasıyla (BM25) birleştirir.',
      'Bazı sorular anlama ihtiyaç duyar (“Bir zararı nasıl ele alırız?”), bazıları tam terime (“8492-B numaralı fatura”). Her yöntem tek başına ikisinden birini kaçırır.',
      'StarkLLM her iki aramayı yerel dizininiz üzerinde çalıştırır, sonuçları birleştirir ve dil modeli bunları görmeden önce küçük bir yerel modelle (TinyBERT çapraz kodlayıcı) yeniden sıralar.',
      '“NASA bütçesi” araması, “Ulusal Havacılık ve Uzay Dairesi için ayrılan kaynaklar” ifadesini içeren pasajı da, “NASA” adını tam olarak anan pasajı da bulur.'),
  },
  'tech-semantic-chunking': {
    title: 'Anlamsal parçalama | StarkLLM', eyebrow: 'Dizinleme',
    h1: 'Anlamsal parçalama', lede: 'Belgeler, belirli bir karakter sayısından sonra değil, anlamın değiştiği yerde bölünür.',
    sections: s(en,
      'Bir belge aranabilir hale gelmeden önce pasajlara (“chunk”, parça) bölünür. Her pasaj, dosyasıyla, sayfasıyla veya bölümüyle birlikte saklanır.',
      'Bir cümlenin veya maddenin ortasından kesilen pasaj anlamını yitirir ve arama bu durumda yarım yanıtlar döndürür.',
      'StarkLLM metni cümlelere ayırır ve konunun değiştiği yerde, gömme modeliyle ölçerek yeni bir pasaj başlatır. Bu mümkün değilse paragraflardan ve cümlelerden, küçük bir örtüşmeyle böler. Tablolar (CSV, Excel, Word tabloları) sütun adlarıyla birlikte satır satır tutulur.',
      'Bir sözleşme madde madde dizinlenir. “Sorumluluk” hakkında bir soru, iki yarım parça değil, sorumluluk maddesinin tamamını getirir.',
      'Bazı günlükler gibi noktalama işareti olmayan uzun dosyalar yine de büyük pasajlara dönüşebilir; bunların içindeki tek tek değerleri bulmak daha zordur.'),
  },
  'tech-knowledge-base': {
    title: 'Knowledge Base | StarkLLM', eyebrow: 'Kütüphane',
    h1: 'Knowledge Base (bilgi tabanı)', lede: 'Bilgisayarınızda, her sohbetin arayabildiği bir klasör.',
    shot: 'kb', shotAlt: 'StarkLLM Knowledge Base ve dizinlenmiş bir klasör (arayüz İngilizce)',
    sections: s(en,
      'Knowledge Base, bilgisayarınızdaki bir klasördür (varsayılan olarak Belgeler klasörünüzdeki “StarkLLM Knowledge Base”); StarkLLM bu klasördeki dosyaları dizinler ve güncel tutar.',
      'Prosedürler, kılavuzlar veya notlar gibi başvuru materyallerine birçok projede ihtiyaç duyulur. Ortak bir kütüphane olmadan aynı dosyaları her workspace’e yüklemeniz gerekirdi.',
      'StarkLLM kayıtlı klasörleri her 30 saniyede bir denetler ve yeni ve değişen dosyaları dizinler; “Sync Now” bunu hemen yapar. Sohbette Knowledge Base anahtarı, bu dosyaların da aranıp aranmayacağını belirler. Buradan gelen kaynaklar “Personal KB” olarak işaretlenir.',
      'Ekip el kitabınızı klasörde tutarsınız. Yeni bir projenin workspace’inde, aynı soruda hem proje dosyalarını hem de el kitabını sorabilirsiniz.'),
  },
  'tech-workspaces': {
    title: 'Workspace’ler | StarkLLM', eyebrow: 'Düzen',
    h1: 'Workspace’ler', lede: 'Her proje için kendi belgeleri ve sohbetleri olan bir workspace.',
    sections: s(en,
      'Bir workspace, bir projenin belgelerini ve sohbetlerini barındırır. Knowledge Base ise tüm workspace’ler arasında paylaşılır.',
      'Tüm dosyalar tek bir yerdeyse bir dosya hakkındaki soru başka bir dosyadan pasajlar alabilir.',
      'Her workspace’in kendi dizini vardır. Bir sohbet yalnızca kendi workspace’inin belgelerinde arar; Knowledge Base’i açarsanız onda da arar.',
      '“2025 vergi beyannamesi” workspace’inden “Web sitesi yenileme” workspace’ine geçersiniz. Yanıtlar artık yalnızca web sitesi belgelerinden gelir.'),
  },
  'tech-multimodal': {
    title: 'Desteklenen dosyalar ve görüntüler | StarkLLM', eyebrow: 'Dosyalar',
    h1: 'Dosyalar, taramalar ve görüntüler', lede: 'Taranmış PDF’ler ve fotoğraflar dahil 14 dosya türü.',
    sections: s(en,
      'StarkLLM; PDF, Word (DOCX), Excel (XLSX), CSV, Markdown, metin, HTML, JSON, XML ve günlük dosyalarının yanı sıra görüntüleri (PNG, JPG) de okur. Bunları ataş simgesiyle ya da pencerenin üzerine bırakarak eklersiniz.',
      'Gerçek belgeler çoğu zaman seçilebilir metin değil, tarama veya fotoğraftır. Düz bir metin çıkarıcı bunlarda hiçbir şey bulamaz.',
      { p: 'Her türün kendi okuyucusu vardır:', list: [
        'Metin içeren PDF sayfaları doğrudan okunur; taranmış sayfalar yerel OCR’dan (Tesseract) geçer, bu çok az şey bulursa yerel bir görüntü modelinden geçer.',
        'Görüntüler yerel bir görüntü modeliyle betimlenir ve içlerindeki metin okunur. İlk görüntü bu modeli bir kez indirir (llava, yaklaşık 4,4 GB).',
        'Hesap tabloları ve tablolar sütun adlarını korur; böylece değerler anlamlarıyla bağlı kalır.',
      ] },
      'Bir otopark tabelasının fotoğrafını eklersiniz. Daha sonra “Ziyaretçi otoparkı hangi katta?” diye sorarsınız ve fotoğrafı kaynak göstererek “P2 katı, 40 ila 55 numaralı yerler” yanıtını alırsınız.',
      'El yazısı ile küçük veya bulanık metinler daha az güvenilir okunur. Görüntü modeli basılı metni beyaz tahtalardan daha iyi okur.'),
  },
  'tech-local-models': {
    title: 'Ollama ile yerel modeller | StarkLLM', eyebrow: 'Modeller',
    h1: 'Ollama ile yerel modeller', lede: 'Dil modeli bilgisayarınızda, kendi donanımınızla çalışır.',
    sections: s(en,
      'Ollama, Qwen, Llama veya Mistral gibi açık dil modellerini CPU’nuzda ya da ekran kartınızda çalıştıran ücretsiz bir programdır. StarkLLM onu sohbet, arama ve görüntüler için kullanır.',
      'Yerel bir model hesap ve abonelik gerektirmez, indirildikten sonra internetsiz de çalışmayı sürdürür ve belgeleriniz hiçbir model sağlayıcısına gitmez.',
      'StarkLLM, kuruluysa Ollama’yı başlatır, varsayılan modelleri ilk başlatmada indirir (yaklaşık 5 GB) ve modeller arasında Model Hub’da geçiş yapmanızı sağlar. Qwen 3 gibi düşünen modeller de çalışır.',
      'Wi-Fi olmayan bir trende bir PDF eklersiniz ve onun hakkında sorular sorarsınız. Her şey dizüstü bilgisayarda çalışır.',
      'Yanıt kalitesi ve hız modele ve donanımınıza bağlıdır. 7B boyutundaki bir model yaklaşık 8 GB RAM gerektirir; daha büyük modeller daha iyi yanıt verir ama daha fazla bellek ister, ideal olarak bir ekran kartında.'),
  },
  'tech-privacy': {
    title: 'Gizlilik | StarkLLM', eyebrow: 'Gizlilik',
    h1: 'Bilgisayarınızda ne kalır?', lede: 'Belgeler, dizin, sohbetler ve modeller bilgisayarınızda kalır. İsteğe bağlı birkaç özellik çevrimiçi olur; o da yalnızca onları kullandığınızda.',
    sections: [
      { h: en.what, p: 'StarkLLM veritabanını, arama dizinini ve web arayüzünü bilgisayarınızda (Docker içinde), dil modelini ise yine bilgisayarınızdaki Ollama’da çalıştırır. Telemetrisi yoktur ve bir sunucuda hesabı yoktur.' },
      { h: en.why, p: 'Sözleşmeler, hasta dosyaları veya araştırma verileri, yalnızca onlar hakkında bir soru sormak için bir bulut hizmetine gönderilmemelidir.' },
      { h: 'İsteğe bağlı çevrimiçi özellikler', p: 'Bunlar yalnızca siz açtığınızda veya başlattığınızda internete bağlanır. Bir soru bilgisayarınızdan çıktığında sohbet bunu söyler.', list: [
        'Web araması (sohbetteki anahtar): sorunuz DuckDuckGo’ya gider.',
        'Bulut model sağlayıcıları (Settings, örneğin DeepSeek, OpenRouter, Groq): sorunuz ve bulunan pasajlar o sağlayıcıya gider.',
        'YouTube ve GitHub içe aktarma: uygulama, girdiğiniz transkripti veya depoyu indirir.',
        'Piyasa fiyatları (widget, varsayılan olarak kapalı): Yahoo Finance’tan alınır.',
        'Güncelleme denetimi (ilk başlatmada bir kez sorulur): GitHub’dan yalnızca en yeni sürüm numarasını ister, başka bir şey istemez.',
      ] },
      { h: 'Bir kerelik indirmeler', p: 'Yapay zekâ modelleri (Ollama’dan), yeniden sıralayıcı (ilk aramada), konuşma modeli (ilk sesli girişte) ve görüntü modeli (ilk görüntüde) bir kez indirilir. Bunlarla birlikte belge, soru veya kullanım verisi gönderilmez.' },
      { h: en.example, p: 'İlk başlatmadan sonra Wi-Fi’yi kapatabilirsiniz. Belge ekleme, arama ve yanıtlama çalışmayı sürdürür.' },
    ],
  },
  'tech-local-tools': {
    title: 'Onaylı yerel araçlar | StarkLLM', eyebrow: 'Araçlar',
    h1: 'Yerel araçlar, sizin onayınızla', lede: 'Model bir şeye bakmak isteyebilir. Siz onaylayana kadar hiçbir şey çalışmaz.',
    sections: s(en,
      'StarkLLM’in küçük, yerleşik bir araç ana bilgisayarı (MCP) vardır. Model salt okunur üç araç isteyebilir: workspace’in dosyalarını listelemek, Knowledge Base’de arama yapmak ve alıntılanan bir pasajın tam metnini getirmek.',
      'Araçlarla model tahmin yürütmek yerine olguları kontrol edebilir. Denetim olmadan araçlar, istemediğiniz şeyler yapabilirdi.',
      { p: 'Her araç çağrısı sohbette bir kartta durur:', list: [
        'Kart aracı ve bağımsız değişkenlerini gösterir; bunları düzenleyebilir, çağrıyı çalıştırabilir veya iptal edebilirsiniz.',
        'Araçlar yalnızca okur. Kabuk (shell), dosya yazma ve internet erişimi yoktur.',
        'Sunucu bir araç çağrısını yalnızca o karttaki tek kullanımlık bir belirteçle kabul eder.',
      ] },
      'Model, bir belgenin hangi sürümünün en yeni olduğundan emin değildir ve workspace dosyalarının listelenmesini ister. İsteği görürsünüz, çalıştırırsınız ve yanıt gerçek dosya listesini kullanır.'),
  },
  'tech-voice': {
    title: 'Sesli giriş ve çıkış | StarkLLM', eyebrow: 'Ses',
    h1: 'Sesli giriş ve çıkış', lede: 'Konuşarak sorun ve yanıtı dinleyin; hepsi bilgisayarınızda işlenir.',
    shot: 'settings', shotAlt: 'StarkLLM ayarları (arayüz İngilizce)',
    sections: s(en,
      'Konuşmadan metne dönüştürme sorunuzu metne çevirir; metinden konuşmaya dönüştürme yanıtı sesli okur.',
      'Uzun sorular için konuşmak yazmaktan hızlıdır; elleriniz veya gözleriniz meşgulken dinlemek yardımcı olur.',
      'StarkLLM, konuşma tanıma için Whisper’ı, İngilizce ve Almanca için Piper seslerini kullanır; ikisi de yerel çalışır. Ses hiçbir hizmete gönderilmez.',
      'Basılı bir belgeyi okurken mikrofona tıklarsınız, sorunuzu sorarsınız ve yanıtı dinlersiniz.',
      'Konuşma tanıma modeli ilk sesli girişte indirilir.'),
  },
  'tech-themes': {
    title: 'Temalar | StarkLLM', eyebrow: 'Görünüm',
    shot: 'appearance', shotAlt: 'StarkLLM ayarları, Appearance: tema galerisi (arayüz İngilizce)',
    h1: 'Temalar', lede: 'OLED ekranlar için saf siyahtan açık temalara ve desenli temalara kadar on üç renk teması.',
    sections: [
      { h: en.what, p: 'StarkLLM’in on üç teması vardır: Midnight Indigo (varsayılan), OLED Pitch Black, Liquid Glass, Cyberpunk Rose, Matrix Emerald, Sunset Amber, Arctic Frost ve Daylight Minimal; ayrıca beş desenli tema: Doodle Chat, Doodle Night, Flower Meadow, Matrix Code ve Starry Night.' },
      { h: en.why, p: 'Kontrast ve parlaklık ekranınıza ve odanıza uyduğunda uzun oturumlar gözlere daha az yük bindirir.' },
      { h: en.how, p: 'Temayı kenar çubuğunun altındaki palet düğmesiyle veya Settings, Appearance bölümünden değiştirin. Seçim kaydedilir ve hemen uygulanır.' },
    ],
  },
};

export default { labels, pages };
