const infosTr = {

    // Sider
    about:'Hakkımda',
    experience:'Deneyim',
    education:'Eğitim',
    certificates:'Sertifikalar',
    blog:'Makaleler',
    projects:'Projeler',
    stack:'Yığın',

    // About
    title:'Front-end Developer',
    name:'Osman Ordu',
    description_p1:'Performans odaklı çözümler geliştirme konusunda uzmanım. Kullanıcı deneyimini en üst seviyeye taşımayı hedefleyerek, modern arayüzler tasarlıyor ve işlevselliği mükemmel bir estetikle birleştiriyorum. ',
    description_p2:'2021 yılında hobi olarak Python ile programlamaya başladım ve yazılım dünyasına olan ilgim kısa sürede profesyonel bir tutkuya dönüştü. Farklı sektörlerde edindiğim deneyimlerden sonra, kariyerimi yazılım üzerine inşa etmeye karar verdim ve alaylı bir şekilde Frontend Developer olarak işe başladım. 2022 Eylül’de BilgeAdam Akademi’den mezun oldum ve ilk olarak e-ticaret projelerinde görev aldım.',
    description_p3:'Fintech sektörüne duyduğum ilgiyle birlikte kripto para ve canlı veri akışıyla ilgili projelerde çalışarak bu alanda derin bir uzmanlık kazandım. React.js konusunda ileri düzeyde bilgi sahibiyim ve özellikle crypto trading botlarının entegrasyonu, yüksek hızda veri işleme, WebSocket yönetimi ve DevExtreme gibi ileri seviye teknolojiler üzerinde çalıştım.',
    // Experience
    experience_0_title: "CoinO",
    experience_0_title_sub: " 02/2024 - Present",
    experience_0_description_1: "Coino.com.tr sitesi için yeni CDN servislerini entegre etti.",
    experience_0_description_2: "Sorunsuz veri akışı için API uç noktalarını (REST ve WebSocket) uyguladı ve bağladı.",
    experience_0_description_3: "Önemli sorunları gidermek ve proje hedeflerine ulaşmak için ekiple iş birliği yaptı.",
    experience_0_description_4: "Sitenin güvenliğini artırmak için JWT'yi only-http olarak yapılandırarak güvenlik açıklarını minimize etti.",
    experience_0_description_5: 'Manuel JSON dil dosyası yüklemesini ön uç düzenleme arayüzüyle değiştirerek CMS`i düzene soktu.',
    experience_0_description_6: "Ayrı mobil siteyi kullanımdan kaldırarak ve yedekliliği en aza indirerek mobil ve web projesini birleşik bir duyarlı web tasarımında birleştirdi.",

    experience_1_title:'PrimeTech',
    experience_1_title_sub:' 02/2024 - Halen',
    experience_1_description_1:'Gerçek zamanlı ticaret içgörüleri için performans iyileştirmelerine ve verimli ön uç-arka uç iletişimine odaklandı.',
    experience_1_description_2:'Arka uç ekipleriyle yakın işbirliği yaparak, hizmetleri entegre ederek ve tüm ön ucu yöneterek kapsamlı bir ödeme çözümü geliştirdi.',
    experience_1_description_3:'Duyarlı, çok dilli sayfalar oluşturdu ve AWS aracılığıyla e-posta hizmetlerini yönetti.',
    experience_1_description_4:'Gerçek zamanlı veri akışı için API uç noktalarını (REST ve WebSocket) uyguladı ve bağladı.',
    experience_1_description_5:'Hem masaüstü hem de mobil görünümler için uyarlanabilir arayüzler oluşturdu.',
    experience_1_description_6:'Ödeme projesi için tek ön uç geliştiricisi olarak hareket etti ve tutarlı geliştirme için arka uç ekipleriyle işbirliği yaptı.',
    experience_1_description_7:'Kripto para bot operasyonlarını yönetmek için paneller oluşturdu ve geliştirdi.',
    

    experience_2_title:'Segmentify',
    experience_2_title_sub:' 11/2022 - 02/2024',
    experience_2_description_1:'Türkiye`deki büyük e-ticaret markalarına kişiselleştirilmiş e-ticaret hizmeti sağlandı. Örneğin Atasay, Koton, Derimod, Bauhaus, Avansas, Panço, Exporgin, Atom Bilişim, Ayakkabı Dünyası, Saat&Saat, Armağan Oyuncak ve Bayar Gold.',
    experience_2_description_2:'Bir ön uç geliştirici olarak, Segmentify`ın kişiselleştirilmiş alışveriş deneyimini geliştirmek için kullanıcı dostu ve ilgi çekici arayüzler tasarladı.',
    experience_2_description_3:'Segmentify altyapısını kullanarak kullanıcı davranışlarını analiz etti ve makine öğrenme teknolojisini kullanarak site ziyaretçilerinin alışveriş alışkanlıklarına göre önerilerde bulundu. Segmentify´ın gerçek zamanlı öneri motorunu destekleyerek müşteri alışveriş deneyimlerini kişiselleştirdi ve satışların artmasına katkıda bulundu.',
    experience_2_description_4:'Segmentify`ın gerçek zamanlı öneri motorunu destekleyerek, müşteri alışveriş deneyimlerini kişiselleştirdi ve satışların artmasına %30`a kadar katkıda bulundu.',
    experience_2_description_5:'Optimizasyon stratejisi kapsamında, kullanıcılara rastgele farklı varyasyonla göstererek bir A/B testi yaptı.Etkileşim verilerine dayanarak en iyi performans gösteren seçeneği belirleyip uyguladı.Bu yaklaşım satışları %10 oranında artırmada katkı sağladı.',

    experience_3_title:'BilgeAdam Akademi',
    experience_3_title_sub:' 04/2022 - 10/2024',
    experience_3_description_1:'Kodu mühendislik ekibiyle refactor ederek repo kodlarının karmaşıklığı en aza indirdi. İyi bir SEO çalışması yaparak arama motorlarında %60 öne çıkmayı sağladı.',
    experience_3_description_2:'Responsive Web tabanlı uygulamalar geliştirdi. Repoda kodlama standartlarına göre alınan aksiyonları tamamladı.',
    experience_3_description_3:'Yeniden kullanılabilir modüler bileşenler oluşturdu. Hedeflenen süreyi en aza indirerek operasyonu hızlandırdı.',
    experience_3_description_4:'E-ticaret projelerinde ürün listeleme, ürün filtreleme, ürün oluşturma ve API tarafının ön uç kodlaması geliştirildi.',
    experience_3_description_5:'Backend`den gelen endpointleri bağladı ve UI tarafındaki gereksinimleri tamamladı.',


    experience_4_title:'Inditex / Pullandbear',
    experience_4_title_sub:' 11/2017 - 07/2021',
    experience_4_description_1:'Mağaza ekibine görsel pazarlama stratejileri ve uygulamaları konusunda eğitimler verdi ve workshop`larda aktif rol aldı.',
    experience_4_description_2:'Mağaza içi düzenlemelerle müşteri deneyimini arttırdı, alışveriş yapmayı kolaylaştırdı ve satış artışını doğrudan etkileyici aksiyonlar aldı.',
    experience_4_description_3:'Ürünlerin doğru şekilde sergilenmesi ve yenilikçi mağaza düzenlemeleri ile marka imajı gelişimine büyük oranda katkıda bulundu.',


    experience_bussines_state_full:'Tam-zamanlı',
    experience_bussines_state_half:'Yarı-zamanlı',
    experienceTitle : 'Frontend Developer',


    // Education
    university_1_title:'İstanbul Bilgi Üniversitesi',
    university_section_1:'İş sağlığı ve güvenliği',
    university_history_1:'2015 - 2017',

    university_2_title:'İstanbul Üniversitesi',
    university_2_section:'Bilgisayar programlama',
    university_2_history:'2022 - Halen',

    university_3_title:'BilgeAdam Akademi',
    university_3_section:'Front-end Development',
    university_3_history:'03/2022 - 09/2022',

    // Licence and certificates
    certificates_area_title:'Lisanslar ve Sertifikalar',
    linkedin_title:'LinkedIn',
    udemy_title:'Udemy',
    certificate_link_text:'Yeterlilik belgesini göster',

    // UI
    send_button:'GÖNDER!',
    viewCV:"Özgeçmişi incele",
}

export default infosTr;