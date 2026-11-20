// Türkçe Android sayfası (src/i18n/android.ts içindeki İngilizce nesneyle aynı yapı).
export default {
  meta: { title: 'Android için StarkLLM (önizleme) | StarkLLM', description: 'Android için StarkLLM ile belgelerinizi telefonunuzdan sorarsınız; belgeler Windows bilgisayarınızda kalır: yalnızca ev ağında, şifreli, hesap ve bulut olmadan. Google Play’de kapalı testte.' },
  hero: { eyebrow: 'Android · Önizleme', h1: 'Android için StarkLLM', lede: 'Belgelerinizi telefonunuzdan sorun. Telefon sorar, bilgisayarınız yanıtlar: belgeler, arama dizini ve yapay zekâ modeli Windows bilgisayarınızda kalır.' },
  status: {
    h2: 'Durum: kapalı testte, henüz yayımlanmadı',
    text: 'Uygulama, herkes indirebilmeden önce Google Play’de kapalı testte.',
    howH: 'Nasıl katılırsınız',
    how: [
      'Telefonunuzdaki Google hesabının e-posta adresini yazarak info@starkllm.com adresine e-posta gönderin.',
      'Google Play’deki testin bağlantısını alırsınız.',
      'Bilgisayarınızda StarkLLM 2.4.0 veya üstü gerekir. Bu sürüm yakında geliyor; indirme sayfasında her zaman güncel sürüm vardır.',
    ],
    mail: 'info@starkllm.com adresine yazın',
    download: 'İndirme sayfası',
    iosH: 'iPhone',
    ios: 'iPhone (iOS) için henüz bir StarkLLM uygulaması yok; yalnızca Android uygulaması kapalı testte.',
  },
  how: {
    h2: 'Nasıl çalışır',
    items: [
      { t: 'Bilgisayarda açın', v: 'Windows bilgisayarınızdaki StarkLLM’de Ayarlar > Telefon’u açın ve telefon bağlantısını etkinleştirin. Varsayılan olarak kapalıdır.' },
      { t: 'QR koduyla eşleştirin', v: 'Bilgisayarda “QR kodunu göster”i seçin ve uygulamayla bir kez tarayın. Birden çok bilgisayarı eşleştirebilirsiniz, örneğin evdekini ve ofistekini.' },
      { t: 'Yalnızca ev ağında', v: 'Telefon bilgisayara yalnızca ev ağınızda ulaşır. Bağlantı, telefonun sabitlediği bilgisayarın kendi sertifikasıyla şifrelenir; böylece ağdaki başka biri bilgisayarınız gibi davranamaz.' },
    ],
  },
  features: {
    h2: 'Uygulama neler yapar',
    items: [
      { t: 'Belgeleriniz hakkında sorular', v: 'Sorular bilgisayarınızdaki StarkLLM’e gider; yanıt, kullandığı belgelerle birlikte akarak gelir.' },
      { t: 'Mektup ve dosya gönderme', v: 'Bir mektubun fotoğrafını çekin, fotoğraf ya da dosya seçin (PDF, EPUB, Word, PowerPoint, metin, görseller) veya diğer uygulamalarda “Paylaş”ı kullanın. Bilgisayar bunları, fotoğraflardaki metinle birlikte okur; fotoğraflar gönderildikten sonra telefondan silinir.' },
      { t: 'Dikte', v: 'Mikrofon düğmesini basılı tutun. Sesi metne bir çevrimiçi hizmet değil, bilgisayarınızdaki konuşma modeli çevirir.' },
      { t: 'Son tarihler', v: 'Bilgisayardaki gibi gecikmiş, bugün, bu hafta ve daha sonra. İsteğe bağlı hatırlatıcılar telefon evdeyken bilgisayarı yoklar, ana ekrandaki bir widget sonraki üç tarihi gösterir.' },
      { t: 'Telefon başına üç düzey', v: 'Her telefonun ne yapabileceğini bilgisayarda seçersiniz: yalnızca sormak; belge de göndermek; ayrıca hemen yedek almak ve StarkLLM’i tamamen çevrimdışı yapmak; her biri telefondaki parmak izinizle onaylanır.' },
      { t: 'Kilit, temalar, diller', v: 'Parmak iziyle uygulama kilidi, 13 tema ve StarkLLM’in altı dili: İngilizce, Almanca, İspanyolca, Fransızca, İtalyanca ve Türkçe.' },
    ],
  },
  privacy: {
    h2: 'Belgeleriniz bilgisayarınızda kalır',
    items: [
      'Belgeler, arama dizini ve yapay zekâ modeli bilgisayarda kalır. Telefon yalnızca gösterdiğini (sohbet listesi, açık sohbet, yaklaşan son tarihler) ve kendi ayarlarını saklar.',
      'Hesap yok, bulut yok, anlık bildirim hizmeti yok, analiz yok.',
      'Telefondan sorulan bir soru asla internete çıkmaz: web araması da bulut modeli de yok.',
    ],
  },
  req: {
    h2: 'Gereksinimler',
    items: [
      ['Telefon', 'Android 10 veya üstü'],
      ['Bilgisayar', 'Windows 10 veya 11’de StarkLLM 2.4.0 veya üstü'],
      ['Ağ', 'Telefon ve bilgisayar aynı ev ağında'],
    ],
    not: 'Bu ilk sürümde henüz yok: evin dışından erişim, iPhone uygulaması ve bilgisayardaki StarkLLM’de birden çok hesap varken telefondan oturum açma.',
  },
  cta: { h2: 'Erkenden deneyin', text: 'Kapalı teste katılmak için bize yazın. O zamana kadar Windows için StarkLLM’i ücretsiz indirebilirsiniz.', mail: 'Teste katılın', download: 'Windows için StarkLLM', product: 'Ürüne dön' },
  privacyPolicy: {
    h2: 'Uygulamanın gizlilik politikası',
    intro: 'Bu, “Android için StarkLLM” uygulamasının gizlilik politikasıdır (20 Kasım 2026 itibarıyla). Hukuken bağlayıcı olan Almanca sürümdür; diğer diller bilgi amaçlı çevirilerdir.',
    sections: [
      { h: 'Veri sorumlusu', p: 'Christian Stark, Maxstr. 14, 52070 Aachen, Almanya. E-posta: info@starkllm.com. Diğer bilgiler yasal bildirimdedir (Impressum).' },
      { h: 'Bize hiçbir veri gelmez', p: 'Uygulama ne bize ne de başka şirketlere veri gönderir. Bizde hesap yok, analiz yok, reklam yok, çökme raporu yok ve veri aktaran üçüncü taraf kütüphane yok (Google Play hizmetleri ve Firebase yok).' },
      { h: 'Yalnızca kendi bilgisayarınız', p: 'Uygulama yalnızca kendi eşleştirdiğiniz bilgisayarlardaki StarkLLM’e ve yalnızca ev ağınızda (özel ağ adresleri) bağlanır. Bağlantı, uygulamanın eşleştirmede sabitlediği bilgisayarın kendi sertifikasıyla TLS üzerinden şifrelenir. Sorularınız, seçtiğiniz fotoğraf ve belgeler ve dikte kayıtlarınız yalnızca o bilgisayara gider ve orada işlenir. Biz hiçbirini almayız.' },
      { h: 'Telefonda saklananlar', p: 'Eşleştirilen her bilgisayar için: adı, ağ adresleri, bağlantı noktası, sertifikasının parmak izi ve Android Keystore’daki bir anahtarla şifrelenmiş bir cihaz belirteci. Ayrıca ayarlarınız (örneğin tema, uygulama kilidi, hatırlatıcılar, seçilen çalışma alanı ve model) ve widget ile hatırlatıcılar için yaklaşan son tarihlerin kısa bir kopyası. Fotoğraflar ve dikte kayıtları yalnızca uygulamanın geçici belleğinde tutulur ve gönderildikten sonra silinir. Uygulama verileri Android yedeklerinin ve yeni cihaza aktarımın dışında tutulur.' },
      { h: 'İzinler ve nedenleri', p: 'Kamera: bilgisayarınızın QR kodunu taramak ve mektupları fotoğraflamak için, yalnızca siz dokunduktan sonra. Mikrofon: dikte için, yalnızca düğmeyi basılı tuttuğunuz sürece; kayıt bilgisayarınızda metne çevrilir. Bildirimler: isteğe bağlı son tarih hatırlatıcıları ve bir yanıt gelirken. Biyometri: isteğe bağlı uygulama kilidi ve bilgisayardaki işlemleri onaylamak için; parmak izinizi Android denetler, uygulama onu asla almaz. İnternet ve ağ: ev ağındaki bilgisayarınıza ulaşmak için.' },
      { h: 'Silme', p: 'Uygulamayı kaldırmak tüm verilerini telefondan siler. “Bu telefonun eşlemesini kaldır”, o bilgisayarla eşleşmeyi telefondan siler; telefonu bilgisayarda da Ayarlar > Telefon altında kaldırın.' },
      { h: 'Bilgisayarınızdaki veriler', p: 'StarkLLM’in bilgisayarınızda sakladıkları ve yaptıkları StarkLLM masaüstü uygulamasına tabidir; aşağıdaki “StarkLLM gizliliğinizi nasıl korur” bölümüne bakın.' },
      { h: 'Google Play', p: 'Uygulamayı Google Play’den kurarsanız Google bunun için verileri kendi gizlilik politikasına göre işler. Google bize özet istatistikler verebilir (örneğin kurulum sayısı ve Android’de buna izin veren kullanıcılardan çökme raporları); bunlardan kim olduğunuzu öğrenmeyiz.' },
      { h: 'Haklarınız', p: 'Uygulama aracılığıyla sizinle ilgili hiçbir kişisel veriyi kendimiz işlemeyiz. Bize yazarsanız bu web sitesinin gizlilik politikası geçerlidir; orada GDPR kapsamındaki haklarınız da açıklanır (erişim, düzeltme, silme, kısıtlama, itiraz, taşınabilirlik ve bir denetim makamına şikâyet).' },
    ],
    links: { tech: 'StarkLLM gizliliğinizi nasıl korur', site: 'Bu web sitesinin gizlilik politikası', imprint: 'Yasal bildirim (Impressum)' },
  },
  productLink: { text: 'Yeni: Android için StarkLLM ile belgelerinizi ev ağınızda telefonunuzdan sorarsınız. Uygulama Google Play’de kapalı testte.', link: 'Android uygulaması hakkında' },
};
