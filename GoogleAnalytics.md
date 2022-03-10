# Roipublic - ROI driven digital performance agency.

![Logo](https://s3-eu-central-1.amazonaws.com/roipublic.com/wp-content/uploads/2020/03/13230345/Roipublic-Black.png)

#

#  Google Analytics Gelişmiş E-ticaret Kurulumu Dokümantasyonu
 
Bu belgenin amacı, E-Ticaret siteniz için kullanıcı davranışını ve ürün/hizmet satışlarının ve kullanıcı eylemlerinin Google Analytics GA4’e gönderilmesini sağlamak için gerekli kodları entegre etmeye yardımcı olmaktır.
 
 
## 1. Gelişmiş E-ticaret
 
Gelişmiş E-ticaret raporlaması, kullanıcılarınızın alışveriş davranışlarına ilişkin öngörüler sağlar ve en popüler ürünlerinizi ölçmenize ve promosyonların ve ürün yerleştirmenin gelirleri nasıl etkilediğini görmenize olanak tanır.
 
# 1.2 E-ticaret sitesinin Gelişmiş E-ticaret etkinlikleri.


- Etkileşim: Kullanıcı bir sayfa gördüğünde etkileşim olay gönderilir.
- Ürün Listesi Görünümleri: Ürün Kategori sayfasındaki ürün bilgileri ```view_item_list``` event isminde dataLayer’a eklenir.
- Ürün Görüntüleme: Kullanıcı ürün sayfasının detayına geldiğinde ürünle ilgili bilgiler ```view_item``` event isminde dataLayer’a eklenir.
- Tıklama: Yukarıda bahsedilen view_item_list ve view_item olayları tetiklenmeden önce, kategori veya ürüne tıklanınca tıklanan sayfanın bilgileri ```select_item``` event isminde dataLayer’a eklenir.
- Sepete Ekle: Kullanıcı ürünü sepete eklediğinde ürün bilgileri ```add_to_cart``` event isminde dataLayer’a eklenir.
- Sepetten Çıkar: Kullanıcı sepet sayfasında ürünü sepetten çıkardığında çıkarılan ürün bilgileri ```remove_from_cart``` event isminde dataLayer’a eklenir.
- Ödeme: Kullanıcı ödeme adımlarına geldiğinde ürün biligileri ```begin_checkout``` event isminde dataLayer’a eklenir.
- Alışveriş: Satın alma işlemi başarılıyla tamamlandığında, ```purchase``` event isminde dataLayer’a eklenir.
- Promosyonlar: Sayfadaki Slyat veya Banner Performansı ölçmek için içerdiği bilgiler ```view_promotion``` event isminde dataLayer’a eklenir.
 
## 1.3 GA4 Gelişmiş E-ticaret Geliştirici Kılavuzu

### 1.3.1 Etkileşim

Google Tag Manager ile yapılandırılan GA4 etiketinde etkileşim olayı otomatik gönderir. Bunun için herhangi bir kurulum yapmanıza gerek yoktur.
 
### 1.3.2 Ürün Listesi Görünümleri.

Kategori sayfalarında listelenen ürünlerin performansını ölçmek için, dataLayer’a bir ürün listesi gönderin ve bu verileri view_item_list olayında toplayın. ‘items’ içindeki objeler sayfadaki ürün sayısı kadar olacaktır.
Arama ile sonuçlanan ürünlerin listesi de bu olaya dahil edilir ve item_list_name değeri “Search Results” olur.
