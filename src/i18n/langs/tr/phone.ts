// Telefon sayfası (2026, yeni). Kaynaklar: docs/android-companion.md, docs/phone-away.md, RELEASE_NOTES.md 2.4.0–2.6.0 (uygulama deposu v2.6.0).
// "Nasıl bağlanır" bölümü ve yetki düzeyleri, her dilde bulunan src/i18n/release250.ts dosyasından (product.phone) gelir.
export default {
  meta: {
    title: 'Telefon: Android için StarkLLM | StarkLLM',
    description: 'Android için StarkLLM uygulaması belgeleriniz hakkında bilgisayarınıza soru sorar, mektup fotoğrafları gönderir ve son tarihlerinizi gösterir. Evde doğrudan, evden uzakta yalnızca siz izin verirseniz; telefondan bilgisayarınıza kadar şifreli.',
  },
  hero: {
    eyebrow: 'Android · önizleme',
    h1: 'Telefonunuz sorar. Bilgisayarınız yanıtlar.',
    lede: 'Android için StarkLLM uygulaması bilgisayarınızla birlikte çalışır. Belgeler, dizin ve yapay zekâ modeli bilgisayarda kalır; telefon soru sorar, mektup fotoğrafları gönderir ve son tarihlerinizi gösterir.',
  },
  does: {
    h2: 'Telefon neler yapar',
    items: [
      { icon: 'chat', title: 'Belgeleriniz hakkında soru sorun', text: 'Bilgisayarınızdaki çalışma alanları ve sohbetler; akarak gelen yanıtlar, kullandıkları belgeler etiket olarak altlarında; ayrıca belgelerinizde bulunmayan alıntılar için uyarı.' },
      { icon: 'camera', title: 'Mektup gönderin', text: 'Bir mektubun fotoğrafını çekin veya başka bir uygulamadan bir PDF paylaşın. Bilgisayarınız onu okur, fotoğraflardaki metni de. Fotoğraflar gönderildikten sonra telefondan silinir.' },
      { icon: 'calendar', title: 'Son tarihler', text: 'Gecikmiş, bugün, bu hafta, daha sonra. “Bitti” bir son tarihi bilgisayarda tamamlandı olarak işaretler; ana ekran bileşeni yaklaşan üç tarihi gösterir.' },
      { icon: 'mic', title: 'Dikte', text: 'Mikrofon düğmesini basılı tutun ve konuşun. Yazıya dökme işini çevrimiçi bir hizmet değil, bilgisayarınızdaki konuşma modeli yapar.' },
      { icon: 'pc', title: 'Bu bilgisayar', text: 'Bağlantı, sürüm, yapay zekâ modeli, yedek ve koruma bir bakışta. Uygun yetki düzeyiyle: şimdi yedekleyin veya tamamen çevrimdışına geçin; parmak izinizle onaylayarak.' },
      { icon: 'lock', title: 'Uygulama kilidi', text: 'Uygulama açılırken parmak izi. Kilit açıkken ekran görüntüsü alınamaz ve son uygulamalarda önizleme görünmez.' },
    ],
  },
  pair: {
    h2: 'Evde, üç adımda eşleştirme',
    steps: [
      { t: 'Açın', v: 'Bilgisayarda Ayarlar › Telefon’u açın ve telefon bağlantısını etkinleştirin. Varsayılan olarak kapalıdır.' },
      { t: 'QR kodunu gösterin', v: 'Kod 5 dakika geçerlidir ve yalnızca bir kez kullanılabilir.' },
      { t: 'Uygulamayla tarayın', v: 'Telefon bilgisayarın sertifikasını hatırlar ve bundan sonra yalnızca o bilgisayarla konuşur.' },
    ],
    note: 'Eşleştirme yalnızca evde yapılır, asla aktarıcı üzerinden değil. Birden fazla bilgisayar eşleştirilebilir; bilgisayardaki Ayarlar › Telefon her telefonu “Kaldır” seçeneğiyle listeler.',
  },
  connects: { h2: 'Nasıl bağlanır', levelsH: 'Her telefonun neler yapabileceğini siz seçersiniz' },
  relay: {
    h2: 'Aktarıcının gördükleri ve görmedikleri',
    lede: 'Evden uzakta telefon ve bilgisayarınız StarkLLM aktarıcısında buluşur. Şifreleme telefondan bilgisayarınıza kadar uzanır; bu yüzden aktarıcı yalnızca baytları iletir.',
    cols: ['Aktarıcının gördükleri', 'Aktarıcının asla görmedikleri', 'Aktarıcının sakladıkları'],
    sees: ['Bir bağlantının hangi bilgisayar için olduğu (rastgele bir kimlik)', 'Bir bağlantının ne zaman kurulduğu', 'Ne kadar veri aktığı'],
    never: ['Sorularınız ve yanıtlarınız', 'Belgeleriniz ve fotoğraflarınız', 'Cihaz belirteci veya hesabınız'],
    keeps: ['Her bilgisayar için rastgele bir kimlik', 'Bilgisayarın sırrının bir özeti (hash)', 'Hiçbir içerik ve hiçbir içerik kaydı yok'],
  },
  limits: {
    h2: 'Bilmenizde yarar var',
    items: [
      'Uygulama, Google Play’de kapalı testte olan bir önizlemedir. iPhone uygulaması yoktur.',
      'Evden uzakta kullanım yalnızca bilgisayar açıkken, StarkLLM çalışırken ve tamamen çevrimdışı değilken mümkündür.',
      'Evden uzakta tüm veriler şifreli olarak aktarıcıdan geçer. Telefon ile bilgisayar arasında doğrudan bir bağlantı planlanıyor; aktarıcı o zaman yedek yol olarak kalacak.',
      'Telefondan gelen bir soru bilgisayarınızda web araması ve bulut modelleri olmadan yanıtlanır; evden uzaktayken de.',
      'Android 10 veya daha yenisi. Uygulamada analiz aracı, çökme raporlama hizmeti ve Google Play hizmetleri yoktur.',
    ],
  },
  play: { h2: 'Denemek ister misiniz?', text: 'Android uygulaması Google Play’de kapalı testte. Katılmak isterseniz info@starkllm.com adresine yazın.' },
  shots: { pc: '12-settings-phone', phone: 'phone-01-chat' },
};
