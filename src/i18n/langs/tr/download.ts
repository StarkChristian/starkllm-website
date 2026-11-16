// Türkçe indirme sayfası metni (yapay zekâ destekli taslak, ana dili Türkçe olan biri tarafından gözden geçirilmeli).
import { V, RELEASE } from '../../../data/release';

// Boyutlar sürümün kendisinden gelir, bu yüzden eskimezler.
const mb = (b: number, locale: string) => (b / 1_000_000).toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const bytes = (b: number, locale: string) => b.toLocaleString(locale);
const SETUP = RELEASE.setup.size, PORTABLE = RELEASE.portable?.size ?? 0;

export default {
  meta: { title: 'İndir | StarkLLM' },
  hero: { eyebrow: 'İndir', h1: 'StarkLLM’i indirin', lede: 'Windows Research Beta ile başlayın.' },
  helpCallout: { h: 'Kurulum çalışmıyor mu?', text: 'StarkLLM, bilgisayarınızda Docker Desktop ve Ollama gerektirir; v2.0.1’den beri uygulama ikisini de, ayrıca kendi motorunu da kendisi başlatır. Yardım sayfasında her adım için bir testin yer aldığı bir kontrol listesi ve en sık görülen 24 sorunun çözümü bulunur.', link: 'Yardım ve sorun gidermeyi açın' },
  release: {
    h2: 'Sürüm paketi',
    facts: [
      ['Sürüm', `v${V} (yerel masaüstü, kendi motorunu kendisi başlatır)`],
      ['Lisans', 'Apache 2.0 (açık kaynak)'],
      ['Yükleyici boyutu', `${mb(SETUP, 'tr-TR')} MB (${bytes(SETUP, 'tr-TR')} bayt)`],
      ...(PORTABLE ? [['Taşınabilir uygulama boyutu', `${mb(PORTABLE, 'tr-TR')} MB (${bytes(PORTABLE, 'tr-TR')} bayt)`]] : []),
    ],
    installer: `v${V} yükleyicisini indir (.exe)`,
    portable: 'Taşınabilir (.exe)',
    github: 'GitHub',
    shaH: 'SHA-256 sağlama toplamları',
    shaLede: 'Çalıştırmadan önce dosyanın bütünlüğünü doğrulamak için indirdiğiniz dosyanın SHA-256 özetini aşağıdakiyle karşılaştırın:',
    setupLabel: `StarkLLM-v${V}-Setup.exe (Windows yükleyicisi)`,
    portableLabel: `StarkLLM-v${V}-Portable.exe (taşınabilir çalıştırılabilir dosya)`,
    verify: 'PowerShell’de doğrulayın:',
  },
  setup: {
    h2: 'Kurulum adımları',
    intro: 'İki program bir kez kurulur, gerisini StarkLLM yapar. İlk başlatma, motoru ve henüz sahip olmadığınız yapay zekâ modellerini indirir (birkaç GB, yaklaşık 10 ila 20 dakika); sonraki başlatmalar saniyeler sürer.',
    steps: [
      { t: 'Docker Desktop’ı kurun', v: 'docker.com adresinden Docker Desktop’ı (WSL2 ile birlikte) kurun, bir kez başlatın ve kurulumunu bitirin. Bilgisayarı yeniden başlatmanızı isteyebilir.' },
      { t: 'Ollama’yı kurun', v: 'ollama.com adresinden Ollama’yı kurun. Modelleri elle çekmeniz gerekmez: StarkLLM ilk başlatmada qwen2.5:7b ve nomic-embed-text modellerini indirir.' },
      { t: 'StarkLLM yükleyicisini çalıştırın', v: `StarkLLM-v${V}-Setup.exe dosyasını indirin ve çalıştırın. Yükleyici masaüstü kısayolları oluşturur.` },
      { t: 'StarkLLM’i başlatın ve ilk başlatmayı bekleyin', v: 'StarkLLM kısayoluna tıklayın. Uygulama Docker Desktop’ı ve Ollama’yı başlatır, modelleri indirir, motorunu derler ve ilerlemeyi gösterir; ardından StarkLLM’i kendi penceresinde açar. Bir şey eksikse pencere neyin eksik olduğunu ve nasıl giderileceğini söyler (günlük: %APPDATA%\\StarkLLM\\engine.log).' },
      { t: 'Hesabınızı oluşturun', v: 'İlk hesabı kaydedin; bu hesap, bu kurulumun yöneticisidir (yedekleme ve geri yükleme). Ardından bir workspace oluşturun ve bir belge yükleyin.' },
    ],
  },
  prereq: {
    h2: 'Ön koşullar kontrol listesi',
    lede: 'StarkLLM’i başlatmadan önce aşağıdakilerin hepsinin hazır olduğundan emin olun:',
    items: [
      ['İşletim sistemi', 'WSL2 etkinleştirilmiş Windows 10 veya 11.'],
      ['Docker Desktop', 'Bir kez kurulur (StarkLLM onu başlatır). Onsuz motor çalışamaz.'],
      ['Ollama', 'Windows’a yerel olarak kurulur (StarkLLM onu başlatır). ollama.com adresinden indirin.'],
      ['Modeller ve disk', 'İlk başlatmada otomatik olarak indirilir (yaklaşık 5 GB). En az 15 GB boş disk alanı bırakın.'],
      ['Donanım', 'En az 8 GB RAM (3B modeller için), 16 GB önerilir (7B modeller için). 8 GB+ VRAM’li bir NVIDIA GPU şiddetle önerilir. Kılavuzda donanım kademeleriyle ilgili öneriler bulunur.'],
      ['Desteklenen biçimler', 'PDF, DOCX (tablolarla), TXT, Markdown, CSV, XLSX, JSON, XML, günlükler, HTML ve görüntüler (OCR’lı PNG, JPG).'],
    ],
  },
  smart: {
    h2: 'Kod imzalama: Yükleyiciyi nasıl kontrol edersiniz?',
    text: 'v2.1.0’dan itibaren yükleyici, StarkLLM.exe ve kaldırma programı, Certum’un “Open Source Developer Christian Stark” adına verdiği bir kod imzalama sertifikasıyla, zaman damgalı olarak imzalanmıştır. İmza, Windows’un yayımcıyı doğrulamasını sağlar ve dosyaların imzalandıktan sonra değiştirilmediğini gösterir. Yerleşik güncelleyici yalnızca bu adla imzalanmış güncellemeleri yükler.',
    checkH: 'İmzayı kendiniz kontrol edin',
    check: [
      `İndirdiğiniz yükleyiciye (StarkLLM-v${V}-Setup.exe) sağ tıklayın ve Özellikler’i (Properties) seçin.`,
      'Dijital İmzalar (Digital Signatures) sekmesini açın. İmzalayan olarak “Open Source Developer Christian Stark” görünmelidir.',
      'İmzayı seçin ve Ayrıntılar’a (Details) tıklayın. Windows, dijital imzanın geçerli olduğunu bildirmelidir (İngilizce Windows’ta: “This digital signature is OK”).',
    ],
    dlls: 'Uygulamanın içindeki bazı üçüncü taraf Electron bileşenleri (DLL dosyaları) bizim tarafımızdan imzalanmaz. Bu bilinçli bir tercihtir: Yükleyici, StarkLLM.exe ve kaldırma programı imzalıdır.',
    warnH: 'Windows yine de uyarı mı gösteriyor (SmartScreen veya Smart App Control)?',
    warn: 'İmza, Windows’un yayımcıyı doğrulamasını sağlar; ancak Windows henüz az gördüğü bir dosya için yine de uyarı gösterebilir. Yayımcı adını yukarıda anlatıldığı gibi kontrol edin ve SHA-256 sağlama toplamını karşılaştırın. İkisi de eşleşiyorsa devam edebilirsiniz (SmartScreen’de: Daha fazla bilgi (More info), ardından Yine de çalıştır (Run anyway)). Ad farklıysa, Dijital İmzalar sekmesi yoksa veya sağlama toplamı eşleşmiyorsa dosyayı çalıştırmayın: Dosyayı bu sayfadan yeniden indirin ve info@starkllm.com adresinden bize yazın. StarkLLM’i yüklemek için Smart App Control’ü (Akıllı Uygulama Denetimi), SmartScreen’i veya başka bir güvenlik ayarını kapatmayın.',
  },
  notes: { h: 'Önemli notlar', items: ['StarkLLM ücretsiz ve açık kaynaklıdır (Apache 2.0).', 'Apache 2.0 lisanslıdır; kişisel, araştırma ve ticari kullanım için ücretsizdir.', 'Hiçbir türde garanti veya sorumluluk olmaksızın, “olduğu gibi” sunulur.'] },
  walk: {
    h2: 'Uygulamaya genel bakış',
    lede: 'StarkLLM’i makinenizde çalıştırdığınızda sizi nelerin beklediğine adım adım bir bakış.',
    steps: [
      { t: 'Adım 1: Knowledge Base ve workspace’ler', v: 'Belgeleri kalıcı bir Knowledge Base (bilgi tabanı) katmanına dizinlemek için yerel klasörleri bağlayın.', kind: 'kb', alt: 'StarkLLM bilgi tabanı yapılandırması (arayüz İngilizce)' },
      { t: 'Adım 2: Belgeye dayalı sohbet', v: 'Dizinlenmiş belgelere dayanan sorular sorun; kaynak dosya göstergeleriyle birlikte.', kind: 'chat', alt: 'StarkLLM belgeye dayalı sohbet (arayüz İngilizce)' },
      { t: 'Adım 3: Kontrol edebileceğiniz kaynaklar', v: 'Bir yanıtın altındaki kaynağa tıklayarak dayandığı pasajları kelimesi kelimesine okuyun ve belgeyi o sayfada açın.', kind: 'sources', alt: 'Bir yanıtın dayandığı pasajlar kelimesi kelimesine ve sayfaya bağlantıyla gösteriliyor (arayüz İngilizce)' },
      { t: 'Adım 4: Güvenli yerel araçlar', v: 'Süreç içi model aracı çağrılarını doğrudan sohbette inceleyin, düzenleyin ve onaylayın.', kind: 'tool' },
      { t: 'Adım 5: On üç tema', v: 'OLED Pitch Black, Cyberpunk Rose, Liquid Glass ve daha fazlası arasında anında geçiş yapın.', kind: 'appearance', alt: 'StarkLLM ayarları ve tema galerisi (arayüz İngilizce)' },
    ],
  },
  faq: {
    h2: 'Sık sorulan sorular',
    items: [
      ['Verilerim bilgisayarımdan çıkıyor mu?', 'StarkLLM, verilerinizi makinenizde tutacak şekilde tasarlanmıştır. Belgeler yerel bir ChromaDB kapsayıcısında saklanır ve yapay zekâ çıkarımı ana bilgisayarınızda Ollama ile çalışır. Web araması, bir bulut model sağlayıcısı veya güncelleme denetimi gibi isteğe bağlı bir çevrimiçi özelliği siz açmadığınız sürece hiçbir şey bilgisayarınızdan çıkmaz.'],
      ['StarkLLM ücretsiz mi?', 'Evet. Kişisel, araştırma ve ticari kullanım için Apache 2.0 altında ücretsiz ve açık kaynaklıdır. Abonelik, telemetri veya gizli kademe yoktur. Garanti verilmeksizin “olduğu gibi” sunulur.'],
      ['Yanıtlar neden yavaş olabilir?', 'Hız donanımınıza bağlıdır. Ayrı bir GPU yoksa Ollama CPU çıkarımına geçer; bu çok daha yavaştır. 8 GB+ VRAM’li ayrı bir NVIDIA GPU çok daha hızlı üretir.'],
      ['Yükleyici imzalı mı? SmartScreen veya Smart App Control uyarı verirse ne yapmalıyım?', 'Evet. v2.1.0’dan itibaren yükleyici, StarkLLM.exe ve kaldırma programı “Open Source Developer Christian Stark” tarafından imzalanmıştır; böylece Windows yayımcıyı doğrulayabilir. Windows yine de uyarırsa yayımcı adını kontrol edin (yükleyiciye sağ tıklayın, Özellikler, Dijital İmzalar) ve bu sayfadaki SHA-256 sağlama toplamını karşılaştırın. Dosyayı yalnızca ikisi de eşleşiyorsa çalıştırın. Smart App Control’ü veya başka bir güvenlik ayarını kapatmayın.'],
      ['Nasıl bir donanıma ihtiyacım var?', '3B modeller için en az 8 GB RAM, 7B modeller için 16 GB RAM. İleri düzey modeller (14B ila 32B) için 24 GB VRAM veya 64 GB sistem RAM’i önerilir.'],
      ['Normal sohbet ile belge sohbeti arasındaki fark nedir?', 'Normal sohbet yalnızca modelin önceden eğitilmiş bilgisine dayanır. Belge sohbeti RAG kullanır: önce yüklediğiniz belgelerde arama yapar, ilgili parçaları modele verir ve doğrulanabilir kaynaklarla yanıt verir.'],
      ['Workspace belgeleri ile Knowledge Base arasındaki fark nedir?', 'Workspace belgeleri tek bir projeye yalıtılmıştır. Knowledge Base ise makinenizde, her sohbetin başvurabileceği kalıcı, genel bir klasördür.'],
      ['Pencere “StarkLLM could not start” diyor. Şimdi ne yapmalı?', 'v2.0.1’den beri uygulama Docker Desktop’ı, Ollama’yı ve motorunu kendisi başlatır. Bir adım başarısız olduğunda pencere neyin eksik olduğunu listeler (örneğin Docker Desktop kurulu değil, meşgul bir port ya da son günlük satırlarıyla bir motor hatası) ve bir “Retry” (Yeniden dene) düğmesi sunar. Günlüğün tamamı %APPDATA%\\StarkLLM\\engine.log dosyasındadır. v2.0.0’da pencere yalnızca “Connecting to local engine…” ekranında bekliyordu; lütfen v2.0.1’i kurun.'],
      ['Uygulama açılıyor ama sohbet bağlanmıyorsa ne olur?', 'Sohbet Ollama’ya ihtiyaç duyar. Pencere “StarkLLM is running without its AI runtime” dediyse Ollama’yı kurun veya başlatın ve “Retry” (Yeniden dene) düğmesine basın; StarkLLM ardından modelleri (qwen2.5:7b ve nomic-embed-text) indirir. Motor, bilgisayarınızdaki Ollama ile host.docker.internal:11434 üzerinden konuşur.'],
      ['Kaynak kodunu inceleyebilir miyim?', 'Evet. StarkLLM, GitHub’da StarkChristian/StarkLLM adresinde Apache 2.0 lisansıyla tamamen açık kaynaklıdır.'],
      ['Geri bildirimi nereye gönderebilirim veya nasıl katkıda bulunabilirim?', 'Geri bildirimden memnuniyet duyarız. info@starkllm.com adresine e-posta gönderin veya GitHub deposunda bir issue açın.'],
    ],
  },
  contribute: { h2: 'Katkıda bulunun ve iyileştirme önerin', text: 'StarkLLM açık ve sürekli gelişen bir projedir. Bir hata bulduysanız, bir özellik fikriniz varsa ya da kaynak kodu incelemek istiyorsanız:', repo: 'Kaynak koda göz atın ve issue açın.', mail: 'E-posta' },
};
