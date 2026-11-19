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
  productLink: { text: 'Yeni: Android için StarkLLM ile belgelerinizi ev ağınızda telefonunuzdan sorarsınız. Uygulama Google Play’de kapalı testte.', link: 'Android uygulaması hakkında' },
};
