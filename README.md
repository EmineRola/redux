Redux kullanmamızın en önemli sebebi

# State Yönetimi:

uygulama içerisindeki birleşenlerin sahip olduğu özellikler ve bilgiler

# Neden Redux:

kod tekrarını önler.
performansı artırır.
Bileşenler içindeki karışıklığı azaltır
state yönetimi daha kolay bir hal alır.
useReducere kullanyor aynısı ama usereducerin üzerine birşeyler eklemiş

# Redux react projesine Kurmak

kurmak için iki farklı kütüphaneye ihtiyaç vardır.
2 kütüphaneye ihtiyaç var .>
a. redux
b. react-redux

redux sadece reacta ait bir özellik değil, hem genel paketi indiriyor hem reduxun reactla beraber
çalışabilmesi için react-redux paketi indirmem gerekiyor

1. npm i redux react-redux.
2. redux klasörü altında reducer ve store dosyası oluşturma
3. provider ile storeu uygulamaya tanıt> index.js^

# Bilinmesi gerekenler

1.  Store: uygulamann tüm bileşenleri tarafından erişiliben ve değiştirilebilen merkezi state
2.  Action: store u güncellemek için type payload değerlerine sahip objeler.
3.  payload ne örneğin deleteTodo napacak silecek peki birşey getirecekki silsin örneğin id getirir ve siler yanında getirdiği değerdir payload.
4.  Dispatch: Actionları reducara gönderirir.
5.  Reducer: Gönderilen aksiyonları analiz edip typlerine göre store günceller.
6.  Subscribe: Store içerisimdeki verlere erişmek için yöntem
