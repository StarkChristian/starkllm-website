// Hakkında sayfası (2026). Yol haritası söz değil, plandır: kaynaklar docs/phone-away.md ("next step"),
// docs/roadmap-2026-12.md ve RELEASE_NOTES.md 2.2.1 (kod çalıştırmak için kendi korumalı alanı), uygulama deposu v2.6.0.
export default {
  meta: {
    title: 'Hakkında | StarkLLM',
    description: 'StarkLLM’i kim yapıyor, neden var, hangi lisansla sunuluyor ve sırada ne var.',
  },
  hero: {
    eyebrow: 'Hakkında',
    h1: 'Evde kalması gereken belgeler için yapıldı.',
    lede: 'StarkLLM, Almanya’nın Aachen kentinden Christian Stark’ın ücretsiz, açık kaynaklı bir projesidir.',
  },
  what: {
    h2: 'StarkLLM nedir',
    p: [
      'StarkLLM, Windows için özel, yerel öncelikli bir yapay zekâ asistanıdır. Mektuplarınızı ve belgelerinizi kendi bilgisayarınızda okur, yanıtı bulduğu sayfayla birlikte verir ve web sitelerinde ve bir proje klasöründe sizin için görevler yapar; önemli her adımdan önce size sorarak.',
      'Tüm temel işlevler kendi makinenizde çalışır: belgeler, arama dizini ve yapay zekâ modelleri. İsteğe bağlı bir çevrimiçi özelliği açmadıkça hiçbir şey bilgisayarınızdan çıkmaz ve Ayarlar › Gizlilik ve ağ her bağlantıyı listeler.',
    ],
  },
  why: {
    h2: 'Neden var',
    p: [
      'Çoğu yapay zekâ asistanı, hakkında soru sormak istediğiniz şeyi yüklemenizi ister. Bir vergi bildirimi, bir doktor mektubu veya bir sözleşme söz konusu olduğunda bu küçük bir istek değildir. StarkLLM, belgeler masanızdan hiç ayrılmadan da belgelere dayalı, işe yarar yanıtların mümkün olduğunu gösterir.',
      'Belgelerini yükleyemeyen ya da yüklemek istemeyen insanlar için yapıldı: evrak işi olan haneler, serbest çalışanlar, öğrenciler, araştırmacılar ve küçük ofisler.',
    ],
  },
  who: {
    h2: 'Kim yapıyor',
    p: 'StarkLLM, Christian Stark tarafından tasarlanıp geliştirilmektedir.',
    lines: ['Christian Stark', 'Maxstr. 14, 52070 Aachen, Almanya', 'E-posta: info@starkllm.com'],
    contact: 'İletişim',
  },
  open: {
    h2: 'Açık kaynak',
    p: [
      'StarkLLM, Apache 2.0 lisansı altında açık kaynaklıdır: kişisel, araştırma ve ticari kullanım için ücretsiz. Kaynak kodu, sürüm notları ve gizlilik belgeleri GitHub’dadır.',
      'Bir hata mı buldunuz ya da bir fikriniz mi var? GitHub’da bir issue açın veya bir e-posta yazın.',
    ],
    github: 'GitHub’daki kaynak kodu',
    issues: 'Bir sorun bildirin',
  },
  roadmap: {
    h2: 'Sırada ne var',
    lede: '2026 ve 2027 için planlar, söz değil. Her adım ancak test edildikten sonra yayımlanır.',
    items: [
      { when: 'Sırada', title: 'Telefonunuza doğrudan bir hat', text: 'Telefon ve bilgisayar, mümkün olduğunda doğrudan bağlanacak; aktarıcı yedek yol olarak kalacak. Şifreleme her iki durumda da uçtan uca olacak.' },
      { when: 'Sırada', title: 'Google Play’de Android uygulaması', text: 'Kapalı testten herkese açık bir sürüme.' },
      { when: 'Daha sonra', title: 'Kod için kendi korumalı alanı', text: 'Python kod bloklarındaki “Çalıştır” yeniden Docker olmadan, StarkLLM’in kendi korumalı alanında çalışacak.' },
      { when: 'Sürekli', title: 'Her sayfa her dilde', text: 'Bu web sitesi uygulamanın altı dilinin hepsinde; her dilde uygulamadan alınmış ekran görüntüleri ve videolarla.' },
    ],
  },
  related: {
    h2: 'İlgili proje',
    text: 'StarkLLM, gizliliği koruyan bilişime yönelik daha geniş bir ilginin parçasıdır. Özel verilere kriptografik yaklaşımlar için homomorphicprivacy.com adresine bakın.',
  },
};
