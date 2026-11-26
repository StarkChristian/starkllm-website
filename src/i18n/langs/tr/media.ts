// Uygulama ekran görüntülerinin alternatif metinleri ve videoların başlıkları/altyazıları, medya adına göre (README.md, "Media").
// Dosyalar bu dildeki yayımlanmış 2.6.0 sürümünden gelir: src/assets/media/tr/tr-<ad>.png ve
// public/media/video/tr-<ad>.{webm,mp4,jpg,vtt}. Bir dosya henüz yoksa sayfa bu metinle bir yer tutucu gösterir.
export default {
  shots: {
    '01-home': 'StarkLLM başlangıç sayfası: mektuplarda bulunan yaklaşan son tarihler ve ödeme tarihleri, her biri tutarı ve sayfasıyla, ayrıca en yeni belgeler',
    '02-inbox': 'StarkLLM gelen kutusu: mektuplar her gönderen için bir yazışmada toplanmış, en yakın son tarih en üstte, bir mektup olası dolandırıcılık olarak işaretli',
    '03-chat-sources': 'StarkLLM sohbeti: bir mektupla ilgili soru tutar ve son ödeme tarihiyle yanıtlanıyor, yanıtın altında kaynaklar',
    '04-source-page': 'Kendi sayfasında açılmış bir kaynak; yanıtın dayandığı pasaj işaretli',
    '05-scam-warning': 'Bir yanıtın üstünde kırmızı uyarı: mektup hediye çekiyle ve bir bağlantı üzerinden ödeme istiyor, ayrıca yapay zekâ asistanlarına gizli bir not içeriyor',
    '06-book-summary': 'Bölüm özetlerinden oluşturulmuş, bütün bir kitap hakkında bir yanıt ve kapsadığı sayfalar',
    '07-image-question': 'Yapıştırılmış bir ekran görüntüsü hakkında soru; yanıtı bilgisayardaki bir görme modeli veriyor',
    '08-recording': 'Zaman bilgileriyle yazıya dökülmüş bir toplantı kaydı ve onunla ilgili bir soru',
    '09-web-task': 'StarkLLM tarayıcı penceresinde adres çubuğuyla bir web görevi; adımlar sayfanın yanında listeleniyor',
    '10-terminal': 'Bir proje klasöründe Terminal: bir dosya değişikliği yapılmadan önce gösteriliyor, izin vermek veya vermemek için düğmelerle',
    '11-compare-models': 'Modelleri karşılaştır: aynı soruya iki yerel modelin yan yana verdiği yanıtlar',
    '12-settings-phone': 'Ayarlar, Telefon: “Evden uzaktayken de (aktarıcı üzerinden)” anahtarıyla eşleştirilmiş bir Android telefon',
    '13-privacy-network': 'Ayarlar, Gizlilik ve ağ: zamanı, sunucusu ve amacıyla her bağlantının listesi ve “Tamamen çevrimdışı” anahtarı',
    '14-themes': 'Ayarlar, Görünüm: tema galerisi, bir açık ve bir koyu tema',
    '15-settings-models': 'Ayarlar, Modeller: bu bilgisayardaki sohbet modeli, embedding modeli ve görme modeli',
    'phone-01-chat': 'Android için StarkLLM uygulaması: bilgisayardan gelen bir yanıt ve altında kaynaklar',
  },
  videos: {
    'v1-letter-answer': { title: 'Bir mektup, bir soru, kaynağıyla bir yanıt', caption: 'Bir mektup eklenir. Yanıt tutarı ve tarihi söyler; kaynağa tıklayınca ilgili sayfa açılır.' },
    'v2-web-task': { title: 'Bir web görevi', caption: 'StarkLLM bir siteyi kendi tarayıcı penceresinde açar, sayfalar arasında tıklayarak ilerler ve bağlantıyla birlikte yanıt verir.' },
    'v3-terminal': { title: 'Terminal: kod yardımı', caption: 'Bir değişiklik önce gösterilir, onayınızdan sonra çalışır ve “Dosya değişikliklerini geri al” onu geri getirir.' },
    'v4-inbox': { title: 'Gelen kutusu', caption: 'Mektuplar gönderen başına yazışmalara dönüşür: son tarihler, tutarlar ve her birinin geldiği sayfayla.' },
    'v5-privacy': { title: 'Gizlilik ve ağ', caption: 'Her bağlantı listelenir ve tek bir anahtar StarkLLM’i tamamen çevrimdışı yapar.' },
  },
};
