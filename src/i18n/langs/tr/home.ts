// Türkçe ana sayfa metni (yapay zekâ destekli taslak, ana dili Türkçe olan biri tarafından gözden geçirilmeli).
import { V, SIZE_MB } from '../../../data/release';

export default {
  meta: {
    title: 'StarkLLM | Belgeleriniz için özel, yerel öncelikli yapay zekâ (Windows)',
    description:
      'StarkLLM, Windows için ücretsiz, açık kaynaklı, yerel öncelikli bir yapay zekâ asistanıdır. Belgeleriniz ve Knowledge Base’iniz (bilgi tabanı) ile kendi bilgisayarınızda özel olarak sohbet edin.',
  },
  nav: { getBtn: `v${V} indir` },
  hero: {
    eyebrow: 'Windows için yerel öncelikli yapay zekâ · Research Beta',
    h1: ['Dosyalarınıza sorun.', 'Hiçbir şey', 'bilgisayarınızdan çıkmaz.'],
    lede: 'StarkLLM, mektuplarınızı ve belgelerinizi kendi bilgisayarınızda okur, içlerindeki son tarihleri ve tutarları bulur ve sorularınızı, her yanıtın hangi sayfadan geldiğini göstererek yanıtlar. Bunun için kendi çalıştırdığınız Ollama modellerini kullanır.',
    cta1: 'Windows için indir',
    cta2: 'Nasıl çalıştığını görün',
    meta: `v${V} · ${SIZE_MB} MB · Apache 2.0 · ücretsiz`,
  },
  pipeline: [
    { k: 'Dosyalar', v: 'PDF, Word, metin, taramalar, fotoğraflar' },
    { k: 'Parçalar (chunk)', v: 'Uzunluğa göre değil, anlama göre bölünür' },
    { k: 'Hibrit arama', v: 'BM25 + vektör gömmeleri (embedding)' },
    { k: 'Yerel model', v: 'GPU’nuzda Ollama' },
    { k: 'Kaynaklı yanıt', v: 'Kaynak sayfaya doğrudan geçiş' },
  ],
  shot: { alt: 'StarkLLM sohbeti: bir vergi mektubuyla ilgili soru; yanıtta tutar, son ödeme tarihi, kaynak belge ve sayfa yer alıyor', caption: 'StarkLLM masaüstü uygulaması bir mektupla ilgili soruyu yanıtlıyor. Uydurma adlar ve sayılar içeren demo belgeler.' },
  letters: {
    tag: 'Mektuplar',
    h2: 'Mektuplarınız ve belgeleriniz bir bakışta',
    lede: 'Bir PDF, bir tarama veya telefonunuzdan bir fotoğraf ekleyin. StarkLLM bunu bilgisayarınızda okur, aynı göndericinin mektuplarını tek bir dosyada toplar ve her son tarihi ana sayfaya koyar. Her değer, okunduğu sayfaya ve satıra bağlanır.',
    dashCaption: 'Ana sayfa: mektuplarınızda bulunan son tarihler ve ödeme tarihleri, tutar ve sayfa bilgisiyle.',
    inboxCaption: 'Gelen kutusu: her gönderen için bir dosya, en yakın son tarih en üstte, olası bir dolandırıcılık için işaret.',
    note: 'Mektuplar ve arayüz İngilizce ve Almanca çalışır. Fotoğraflar ve taramalar için metin tanıma (OCR) İngilizce ve Almanca okur. Diğer diller sıradan belge olarak kaydedilir; son tarih ve tutar çıkarılmaz. Sonraki sürümlerle gelecekler (çalışmalar sürüyor, henüz yayımlanmadı): Fransızca, İspanyolca, İtalyanca ve Türkçe için mektup kuralları ile İspanyolca, Fransızca, İtalyanca ve Türkçe arayüz. Uydurma adlar ve sayılar içeren demo belgeler.',
  },
  features: {
    h2: 'Belgelerini yükleyemeyenler için tasarlandı.',
    items: [
      { tag: 'Gelen kutusu', title: 'Her gönderen için bir dosya içeren gelen kutusu', text: 'Her mektup için: türü (fatura, ödeme hatırlatması, vergi bildirimi, sözleşme, para cezası ve daha fazlası), gönderen, tarih, referans numaraları, tutarlar, banka hesapları ve son tarihler; hepsi bir sayfada kelimesi kelimesine bulunur. Bir mektupla ilgilendiğinizde onu tamamlandı olarak işaretleyin. Diskinizde hiçbir şeyin adı değiştirilmez, hiçbir şey taşınmaz.', wide: true },
      { tag: 'Son tarihler', title: 'Ana sayfada son tarihler', text: 'Mektuplarınızdaki son tarihler, randevular ve ödeme tarihleri; tutar ve sayfa bilgisiyle. “Takvime ekle” bunları bir takvim dosyası olarak kaydeder.' },
      { tag: 'Taramalar', title: 'Fotoğraflar ve taramalar bilgisayarınızda okunur', text: 'Bir fotoğraf veya taranmış sayfa İngilizce ya da Almanca metin olarak okunur, gerekirse dik konuma getirilir; diğer belgeler gibi aranabilir ve kaynak gösterilebilir.' },
      { tag: 'Güvenlik', title: 'Sahte mektuplara karşı uyarılar', text: 'Bir mektup yurt dışındaki bir hesaba, hediye çeki ile veya bir bağlantı üzerinden ödeme istiyorsa, yapay zekâ asistanlarına hitap eden bir metin içeriyorsa ya da bir gönderen birdenbire farklı bir hesap bildiriyorsa kırmızı bir kutu görünür.' },
      { tag: 'Bilgi', title: 'Workspace’ler ve genel bilgi tabanı', text: 'Windows klasörlerini bağlayın, projeleri birbirinden ayrı tutun ve ortak bilgi tabanını (Knowledge Base) her sohbetten sorgulayın.' },
      { tag: 'Erişim', title: 'Çapraz kodlayıcı (cross-encoder) yeniden sıralayıcılı hibrit RAG', text: 'Anahtar kelime ve anlamsal arama birlikte çalışır; ardından bir TinyBERT çapraz kodlayıcı, soruyu gerçekten yanıtlayan pasajları yeniden sıralar.', wide: true, art: 'bars' },
      { tag: 'Masaüstü', title: 'Gerçek bir uygulama penceresi', text: 'Açılış ekranı ve tepsi menüsü olan kendi penceresi. Tarayıcı sekmesi yok.' },
      { tag: 'Temalar', title: 'Anında değişen on üç tema', text: 'Midnight Indigo ve saf OLED siyahından Daylight Minimal’e kadar; ayrıca Doodle Chat ve Starry Night gibi beş desenli tema.', wide: true, art: 'swatches' },
      { tag: 'Araçlar', title: 'Onay kapılı yerel araçlar', text: 'search_local_kb ve fetch_cited_chunk gibi salt okunur araçlar. Her çağrı sizin onayınızı ve tek kullanımlık bir belirteç gerektirir.' },
      { tag: 'Diğer uygulamalar', title: 'StarkLLM’i diğer programlardan kullanın (varsayılan olarak kapalı)', text: 'VS Code ve Cursor gibi düzenleyiciler, MCP destekli yapay zekâ asistanları ve kendi betikleriniz; bir MCP sunucusu veya OpenAI uyumlu bir API üzerinden belgelerinizde arama yapabilir ve belgeler hakkında soru sorabilir. Yalnızca bu bilgisayarda, yalnızca sizin oluşturduğunuz bir anahtarla çalışır ve hiçbir şeyi değiştiremez ya da silemez.', wide: true },
      { tag: 'Kod', title: 'Yerel Python sandbox’ı', text: 'Sohbetteki Python kod bloklarını kod denetimleri ile süre ve bellek sınırlarıyla çalıştırır. Docker Desktop motoruyla (ileri düzey) kullanılabilir; StarkLLM’in kendi sandbox’ı olana kadar yerleşik motorda kapalıdır. Bir kolaylık sınırıdır, güvenlik sınırı değildir: yalnızca güvendiğiniz kodu çalıştırın.' },
    ],
  },
  compare: {
    h2: 'StarkLLM ve diğer araçlar: karşılaştırma',
    lede: 'StarkLLM’in, diğer popüler açık çözümlerin yanında yerel yapay zekâ ortamındaki yerine dürüst bir bakış.',
    note: 'Ekim 2026 itibarıyla, her aracın herkese açık belgelerine dayanır. Özellikler hızla değişir; lütfen güncel sürümleri kontrol edin. StarkLLM’in yanıtları da küçük bir yerel modelden gelir: önemli olan her şey için gösterilen kaynağı kontrol edin.',
    cols: ['Araç', 'Güçlü yanları ve sınırları', 'En uygun olduğu kullanım'],
    rows: [
      { kind: 'Çıkarım arayüzü', name: 'LM Studio', text: 'Hugging Face’ten GGUF indirmek ve GPU katman aktarımını ayarlamak için çok iyidir. “Chat with Documents” özelliği dosyaları bir konuşmaya ekler (kısa dosyalar bütün olarak yapıştırılır, uzunlar erişim (retrieval) üzerinden geçer); belgelerine ve üçüncü taraf kılavuzlara göre kalıcı workspace’leri veya paylaşılan bilgi tabanları yoktur.', best: 'Modelleri denemek; bir sohbete ara sıra belge eklemek.' },
      { kind: 'Temel RAG uygulaması', name: 'AnythingLLM', text: 'Belgelerinizle workspace’ler içinde sohbet etmek için popüler bir uygulama. Yeniden sıralama gibi erişim seçenekleri, sürüme ve seçtiğiniz vektör veritabanına bağlıdır; bu yüzden kendi belgelerinizle karşılaştırın.', best: 'Hazır bir workspace uygulaması istediğiniz belge sohbetleri.' },
      { kind: 'Minimalist sohbet', name: 'Jan.ai', text: 'Verileri cihazda tutan, hafif, açık kaynaklı, ChatGPT tarzı bir uygulama. Belge erişimi, belgelerinin deneysel olarak nitelendirdiği isteğe bağlı bir ayar olarak bulunur; odak noktası belge iş akışları değil, sohbettir.', best: 'Temiz bir arayüzle basit yerel sohbet.' },
      { kind: 'Bu proje', name: `StarkLLM v${V}`, text: 'Mektuplar için gelen kutusu (son tarihler, tutarlar, gönderen başına dosyalar, sahte mektup uyarıları), TinyBERT çapraz kodlayıcı ile yeniden sıralamalı hibrit RAG, isteğe bağlı yerel MCP sunucusu ve OpenAI uyumlu API (varsayılan olarak kapalı) içeren ve verileri varsayılan olarak yerelde tutan yerel Windows masaüstü uygulaması.', best: 'Mektuplarını ve belgelerini gizli tutmak ve kontrol edebileceği kaynaklarla yanıt almak isteyen herkes: evlerden geliştiricilere ve araştırmacılara kadar.', us: true },
    ],
  },
  setup: {
    h2: 'Üç adımda kurulum',
    intro: 'StarkLLM kendi motorunu beraberinde getirir: Docker Desktop yok, WSL2 yok. İlk başlatma yapay zekâ modellerini (yaklaşık 5 GB) ve izin verirseniz Ollama’yı indirir; sonraki başlatmalar saniyeler sürer.',
    steps: [
      { title: 'StarkLLM’i kurun', text: `StarkLLM-v${V}-Setup.exe dosyasını çalıştırın ve kısayola tıklayın. Yükleyici “Open Source Developer Christian Stark” tarafından imzalanmıştır ve motoru içerir.` },
      { title: 'Ollama’yı StarkLLM’e kurdurun', text: 'Ollama eksikse “Ollama’yı benim için kur” seçeneğini seçin: StarkLLM resmî, imzalı sürümü kurar. Terminal gerekmez.' },
      { title: 'Modelleri bekleyin', text: 'StarkLLM ihtiyaç duyduğu yapay zekâ modellerini indirir, ilerlemeyi gösterir ve ardından kendi penceresinde açılır.' },
      { title: 'Bir şey eksikse', text: 'Pencere neyin eksik olduğunu ve nasıl giderileceğini, bir “Yeniden dene” düğmesiyle birlikte söyler. Yardım sayfasında bir kontrol listesi bulunur.' },
    ],
    notesTitle: 'Önemli notlar',
    notes: [
      { k: 'İlk başlatma', v: 'Yapay zekâ modellerinin (yaklaşık 5 GB) indirilmesi yavaş bir bağlantıda biraz zaman alır. Bir kurulum veya güncellemeden sonraki ilk başlatma da motor başlarken birkaç dakika sürebilir.' },
      { k: 'Windows SmartScreen', v: 'Yükleyici “Open Source Developer Christian Stark” tarafından imzalanmıştır. Windows yine de uyarırsa bu yayımcı adını kontrol edin (yükleyiciye sağ tıklayın, Özellikler, Dijital İmzalar) ve SHA-256 sağlama toplamını indirme sayfasındakiyle karşılaştırın. Yalnızca ikisi de eşleşiyorsa devam edin (Daha fazla bilgi (More info), ardından Yine de çalıştır (Run anyway)) ve SmartScreen’i veya Smart App Control’ü kapatmayın.' },
      { k: 'Donanım önemlidir', v: 'Hız ve yanıt kalitesi, büyük ölçüde güçlü bir GPU’ya bağlıdır (8 GB+ VRAM önerilir).' },
    ],
  },
  privacy: {
    h2: 'Gizliliğin mimarisi',
    lede: 'StarkLLM, bulut tabanlı yapay zekâ hizmetlerine çevrimdışı bir alternatiftir. Belgeleriniz, hukuki dosyalarınız ve araştırmalarınız kendi bilgisayarınızda kalır.',
    items: [
      { title: 'Yerel çıkarım', text: 'Ollama ile çalışan dil modelleri kendi CPU’nuzda veya GPU’nuzda çalışır. Modeller indirildikten sonra tamamen çevrimdışı çalışacak şekilde tasarlanmıştır.' },
      { title: 'Yerel depolama', text: 'Belgeler parçalara ayrılır ve kendi diskinizdeki yerel bir ChromaDB vektör deposuna gömülür.' },
      { title: 'Sıfır telemetri', text: 'Windows uygulamasında telemetri ve analitik SDK’sı yoktur. Bu web sitesi de analitik kullanmaz ve çerez yerleştirmez; gizlilik politikasına bakın.' },
      { title: 'Yalnızca siz seçerseniz çevrimiçi', text: 'Web araması, bulut model sağlayıcıları, YouTube ve GitHub içe aktarma, piyasa fiyatları ve güncelleme denetimi siz açana kadar kapalıdır. Bir istek bilgisayarınızdan çıktığında sohbet bunu gösterir.' },
    ],
  },
  download: {
    h2: 'Bugün kurun.',
    lede: 'Apache 2.0 lisansı altında ücretsiz ve açık kaynaklı.',
    reqTitle: 'İndirmeden önce',
    req: [
      ['İşletim sistemi', 'Windows 10/11 (64 bit), Docker veya WSL2 gerekmez'],
      ['Ollama', 'yapay zekâ modelleri için; StarkLLM onu sizin için kurabilir'],
      ['Disk', 'uygulama, motor ve modeller için en az 15 GB boş alan'],
      ['Donanım', 'En az 8 GB RAM, 16 GB önerilir; 8 GB+ VRAM’li NVIDIA GPU önerilir'],
    ],
    installer: `Yükleyici (.exe) · ${SIZE_MB} MB`,
    portable: 'Taşınabilir',
    all: 'Tüm indirmeler',
    shaTitle: 'SHA-256',
    verify: 'PowerShell ile doğrulayın:',
  },
};
