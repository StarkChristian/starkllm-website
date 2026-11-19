// Türkçe ürün sayfası metni (yapay zekâ destekli taslak, ana dili Türkçe olan biri tarafından gözden geçirilmeli).
import { V } from '../../../data/release';

export default {
  meta: { title: 'Ürün | StarkLLM', description: 'StarkLLM nasıl çalışır: yerel belge işleme, kaynak gösteren hibrit RAG, bilgi tabanı, yerel araçlar ve on üç tema. Hepsi Windows bilgisayarınızda.' },
  hero: { eyebrow: 'Ürün', h1: 'StarkLLM nasıl çalışır?', lede: 'Veri gizliliği düşünülerek tasarlanmış, baştan sona yerel bir işlem hattı.' },
  lifecycle: {
    h2: 'Bir belgenin yolculuğu',
    lede: 'Bir PDF veya metin dosyası eklediğinizde işleme bilgisayarınızda kalır.',
    steps: [
      { k: 'Ayrıştırma', v: 'Yerel ayrıştırıcılar ham metni çıkarır. Taranmış PDF’ler ve görüntüler, parçalara ayrılmadan önce yerel OCR’dan veya görüntü modelinden geçer.' },
      { k: 'Parçalama', v: 'Anlamsal bir parçalama algoritması metni mantıksal, birbiriyle örtüşen bloklara böler.' },
      { k: 'Gömme', v: 'Yerel bir gömme (embedding) modeli her bloğu bir vektöre dönüştürür; vektör, bilgisayarınızdaki size ait ChromaDB veritabanında saklanır.' },
      { k: 'Yanıt', v: 'Bir soru sorduğunuzda en ilgili pasajlar, seçtiğiniz Ollama modelinin bağlam penceresine eklenir; böylece yanıt kaynaklarınıza dayanır.' },
    ],
  },
  letters: {
    tag: 'Belge gelen kutusu',
    h2: 'Her mektup okunur ve dosyalanır',
    lede: 'Bir mektubu PDF, tarama veya telefonunuzdan bir fotoğraf olarak ekleyin. StarkLLM bunu bilgisayarınızda okur ve neye ihtiyacınız olduğunu önerir. Dosyalarınızın adını asla değiştirmez, taşımaz veya silmez.',
    items: [
      { k: 'Neleri okur', v: 'Mektubun türü (fatura, ödeme hatırlatması, vergi bildirimi, sözleşme, para cezası ve daha fazlası), gönderen, mektup tarihi, müşteri, sözleşme veya vergi numarası gibi referans numaraları, tutarlar, banka hesapları ve son tarihler; İngilizce ve Almanca mektuplarda.' },
      { k: 'Her değerin bir kaynağı var', v: 'Her değer bir sayfada kelimesi kelimesine bulunur. Üzerine tıklayın; mektup o sayfada, ilgili satır işaretlenmiş olarak açılır.' },
      { k: 'Gönderen başına dosya', v: 'Aynı göndericinin mektupları bir araya getirilir; en yakın son tarihli dosya en üstte yer alır. Aynı mektubun fotoğraf ve PDF olarak iki kez eklenmesi, değiştirilmiş bir mektup ve olası bir dolandırıcılık da işaretlenir.' },
      { k: 'Karar sizin', v: 'Bir mektubu tamamlandı olarak işaretleyin veya ona kendi başlığınızı verin. Yeni mektupların sayısı “Inbox” (gelen kutusu) yanında gösterilir.' },
    ],
  },
  deadlines: {
    tag: 'Son tarihler',
    h2: 'Ana sayfada son tarihler',
    lede: 'Ana sayfa en yeni belgelerinizi ve içlerinde bulunan son tarihleri, randevuları ve ödemeleri gösterir.',
    items: [
      { k: 'Tutar ve sayfa ile', v: 'Her tarih, cümlesiyle, varsa tutarıyla ve okunduğu sayfayla birlikte gelir.' },
      { k: 'Takvime ekle', v: '“Takvime ekle”, isterseniz tarihleri bir takvim dosyası olarak kaydeder.' },
      { k: 'Bu bilgisayarda kurallarla üretilir', v: 'Tarihler, tutarlar ve göndericiler, mektuplarınızın metni üzerinde sabit kurallarla bulunur; bir model tarafından tahmin edilmez, bu yüzden her biri belgede yer alır. Harekete geçmeden önce mektubu kontrol edin.' },
      { k: 'Diller', v: 'İngilizce ve Almanca mektuplar anlaşılır. Fotoğraflar ve taramalar İngilizce veya Almanca metin olarak okunur. Diğer dillerdeki mektuplar kaydedilir ve aranabilir, ancak son tarih ve tutar çıkarılmaz. Sonraki sürümlerle gelecekler (çalışmalar sürüyor, henüz yayımlanmadı): Fransızca, İspanyolca, İtalyanca ve Türkçe için mektup kuralları ile İspanyolca, Fransızca, İtalyanca ve Türkçe arayüz.' },
    ],
  },
  verify: {
    tag: 'Doğrulanabilir zekâ',
    h2: 'Kontrol edebileceğiniz yanıtlar',
    lede: 'Dil modelleri yalnızca belleklerine dayanarak yanıt verdiklerinde dayanaksız iddialar üretebilir. StarkLLM buna karşı Retrieval-Augmented Generation (RAG, erişimle zenginleştirilmiş üretim) kullanır.',
    items: [
      { k: 'Kaynağa dayalı yanıtlar', v: 'Yapay zekâ, bir yanıt oluşturmadan önce metin pasajlarını doğrudan sizin belgelerinizden getirir.' },
      { k: 'Okuyabileceğiniz pasajlar', v: 'Yanıtlar kaynak dosya adını ve bir sayfa veya bölüm konumunu belirtir. Bir yanıtın altındaki kaynağa tıklayın; dayandığı pasajları kelimesi kelimesine görün ve belgeyi o sayfada açın.' },
      { k: 'Sahte mektuplara karşı uyarılar', v: 'Bir mektup yurt dışındaki bir hesaba, hediye çeki ile veya bir bağlantı üzerinden ödeme istiyorsa, yapay zekâ asistanlarına hitap eden bir metin içeriyorsa ya da bir gönderen birdenbire farklı bir hesap bildiriyorsa yanıtın üstünde kırmızı bir kutu görünür.' },
    ],
  },
  library: {
    tag: 'Kalıcı kütüphane',
    h2: 'Eşzamanlı kalan bir bilgi tabanı',
    lede: 'Workspace yüklemeleri yalıtılmış projelere uygundur. Global Knowledge Base (genel bilgi tabanı) ise her sohbetten erişilebilen kalıcı başvuru kütüphanenizdir.',
    items: [
      { k: 'Yerel klasör dizinleme', v: 'Windows bilgisayarınızdaki herhangi bir klasörü bağlayın. StarkLLM desteklenen dosyaları özyinelemeli olarak genel bir vektör koleksiyonuna dizinler.' },
      { k: 'Her yerden erişim', v: 'Hangi workspace’te olursanız olun, Knowledge Base’i her sohbetten sorgulayın.' },
      { k: 'Aralıklı eşzamanlama', v: 'Knowledge Base yaklaşık dakikada bir bağlanan klasörü denetler ve yeni veya değiştirilmiş dosyaları yeniden dizinler.' },
    ],
    compareH3: 'Workspace belgeleri mi, Knowledge Base mi?',
    compareLede: 'StarkLLM, yapay zekâya bağlam vermenin iki yolunu sunar. Aradaki farkı bilmek materyalinizi düzenli tutar.',
    cards: [
      { title: 'Workspace belgeleri', points: ['Tek bir workspace’e bağlıdır.', 'Bağlam karışmasını önlemek için işin yalıtılmış kalması gerektiğinde işe yarar.', 'Geçici veya projeye özel belge kümeleri için en uygunudur.'], ex: 'Örnek', exText: 'Tek bir dava veya müşteri denetimi için sözleşmelerin bulunduğu klasör.' },
      { title: 'Knowledge Base', points: ['Kalıcı, genel bir katmandır.', 'Tüm sohbetlerde ve workspace’lerde aynı anda işe yarar.', 'Uzun vadeli başvuru materyali ve kişisel arşivler için en uygunudur.'], ex: 'Örnek', exText: 'Süregelen araştırma kütüphaneniz, el kitabınız veya şirketinizin standart çalışma prosedürleri.' },
    ],
  },
  control: {
    tag: 'Yerel denetim',
    h2: 'Donanımınıza göre ayarlayın',
    lede: 'StarkLLM, yerel çıkarım ortamınız üzerinde size yönetici düzeyinde denetim verir.',
    items: [
      { k: 'Model seçimi', v: 'Sohbet arayüzünden, Ollama ile indirdiğiniz herhangi bir model (örneğin Qwen 2.5, Llama 3.2, Mistral) arasında geçiş yapın.' },
      { k: 'Çalışma zamanı yapılandırması', v: 'Hız ile akıl yürütme derinliği arasında denge kurmak için bağlam penceresi boyutunu, sıcaklığı (temperature) ve gelişmiş parametreleri ayarlayın.' },
      { k: 'Kesin localhost yönlendirmesi', v: 'Dahili API trafiği yalnızca bilgisayarınızın localhost portlarında (127.0.0.1) akar; verileriniz makinenizde kalır.' },
    ],
  },
  tools: {
    tag: 'Süreç içi yerel MCP ana bilgisayarı',
    h2: 'Harekete geçmeden önce soran araçlar',
    lede: 'Komutları uzaktan çalıştıran bulut tabanlı yapay zekâ araçlarının aksine StarkLLM, kendi FastAPI arka ucunun içinde bir araç ana bilgisayarı çalıştırır. Modeller, dizinlenmiş içeriğinize doğrulanmış, salt okunur erişim alır.',
    items: [
      { k: 'Yerleşik üç araç', v: 'list_workspace_files, etkin workspace’in dosyalarını inceler. search_local_kb, kişisel arşivlerde hibrit vektör ve BM25 araması yapar. fetch_cited_chunk, pasajın tam metnini getirir.' },
      { k: 'İnsan onay kapısı', v: 'Her araç çağrısı sohbette bir kart oluşturur. Parametreleri inceleyin, değerleri değiştirin veya iptal edin.' },
      { k: 'Düşmanca istemlere karşı savunma', v: 'Getirilen pasajlardaki araç çağrısı işaretleri, model bağlamına ulaşmadan önce ayıklanır; bu, belgeler yoluyla istem enjeksiyonunu zorlaştırır (hiçbir yöntem bu riski tamamen ortadan kaldırmaz).' },
      { k: 'Sunucu tarafı yürütme kapısı', v: 'Tek kullanımlık bir çağrı belirteci, doğrudan yürütmeyi ve yeniden oynatma girişimlerini engeller.' },
    ],
    card: { title: 'in_process_tool: list_workspace_files', badge: 'Yerel yalıtım', text: 'Kiracı yalıtımlı workspace dosya okuyucusu. Model, ana bilgisayarın dosya sistemine erişmeden etkin workspace’in dosyalarını inceler.', example: 'Örnek çıktı', foot: 'Sunucu tarafı yürütme kapısı ve tek kullanımlık çağrı belirteciyle korunur.' },
  },
  themes: {
    tag: 'Görünüm',
    h2: 'On üç tema',
    lede: 'Farklı aydınlatma koşullarında odaklı çalışma için tasarlandı; anında değiştirilebilir.',
    items: [
      { k: 'Hızlı palet açılır penceresi', v: 'Araştırmanızı kesmeden tema değiştirmek için kenar çubuğunun altındaki palet simgesine tıklayın.' },
      { k: 'Kalıcı tercih', v: 'Etkin temanız yenilemelerde ve yeniden başlatmalarda korunur.' },
    ],
  },
  superior: {
    h2: 'Basit yerel sohbet istemcilerinden farkı',
    lede: 'Birçok masaüstü istemci bir sohbet kabuğu veya basit bir belge parçalama sunar. StarkLLM ise hassas bir iş istasyonu olarak geliştirilmiştir.',
    items: [
      { k: 'Çapraz kodlayıcılı hibrit RAG', v: 'Çoğu masaüstü RAG aracı yalnızca vektör gömmelerine dayanır ve tam anahtar kelimeleri kaçırabilir. StarkLLM, BM25 anahtar kelime sıklığını yoğun vektör aramasıyla birleştirir, ardından parçaları yerel bir TinyBERT çapraz kodlayıcıyla yeniden sıralar.' },
      { k: 'Yerel, bağımsız pencere', v: 'Tarayıcı sekmesi ve adres çubuğu yok. Çerçevesiz başlık çubuğu, açılış ekranı, sistem tepsisi entegrasyonu ve Windows NSIS yükleyicisi olan bağımsız bir masaüstü uygulaması.' },
      { k: 'Python kod çalıştırıcı', v: 'Python hesaplamalarını, veri analizini ve formül çalışmalarını kendi makinenizde; kod denetimleri, bellek sınırları ve zaman sınırlarıyla çalıştırın. Bunlar bir kolaylık sınırıdır, güvenlik sınırı değildir: yalnızca güvendiğiniz kodu çalıştırın.' },
      { k: 'Yerel, OpenAI uyumlu API', v: '/v1/chat/completions ve /v1/models uç noktalarını sunan yerel bir ağ geçidi. Cursor gibi IDE’leri, Claude Code gibi araçları, Obsidian eklentilerini veya kendi Python betiklerinizi yerel modellerinize bağlayın.' },
    ],
  },
  tech: {
    h2: 'Temel teknolojiler',
    lede: 'StarkLLM’in arkasındaki mimariyi ve yetenekleri keşfedin.',
  },
  cta: { h2: 'StarkLLM’i denemeye hazır mısınız?', text: 'Ücretsiz, açık kaynaklı Windows Research Beta’yı indirin.', installer: `v${V} yükleyicisini indir`, all: 'Tüm indirmeler', manual: 'Kılavuzu okuyun' },
  // Ek anahtar (İngilizce yapıda yok): ProductPage.astro şu an t[lang] kullanıyor; yeni diller için bu metinler gerekir.
  themeTexts: {
    'Midnight Indigo': 'Zengin çivit ve mor parıltılı klasik koyu arduvaz.',
    'Cyberpunk Rose': 'Sıcak bir ışıltıyla canlı neon pembe ve gül rengi.',
    'OLED Pitch Black': 'Azami kontrast ve pil ömrü için saf #000000 gerçek siyah.',
    'Liquid Glass': 'Sedef yansımalı, çok renkli parıltıya sahip yarı saydam buzlu cam.',
    'Matrix Emerald': 'Elektrik zümrüt yeşili vurgulu obsidyen matris.',
    'Sunset Amber': 'Sıcak, parlayan kehribar ve alev vurgulu volkanik arduvaz.',
    'Arctic Frost': 'Billur gibi camgöbeği ve mavi bir kırağıyla dondurucu lacivert.',
    'Daylight Minimal': 'Yumuşak gölgeler ve net kontrastla sade gün ışığı görünümü.',
    'Doodle Chat': 'Arka planda çizilmiş küçük oyuncak bebekler, kalpler, mektuplar ve yıldızlarla sıcak kâğıt.',
    'Doodle Night': 'Aynı çizimler, sakin ve koyu bir sohbet arka planında.',
    'Flower Meadow': 'Yumuşak pudra pembesi üzerinde küçük pembe, leylak ve şeftali rengi çiçekler.',
    'Matrix Code': 'Siyah üzerinde, sabit genişlikli yazı tipiyle yeşil kod yağmuru.',
    'Starry Night': 'Küçük yıldızlarla dolu sakin bir gece göğü; sıcak altın vurgular.',
  },
};
