import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Waves" className="text-primary" size={28} />
              <span className="text-xl font-bold text-primary">Vorsma SUP</span>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('rental')} className="text-sm font-medium hover:text-primary transition-colors">Аренда</button>
              <button onClick={() => scrollToSection('routes')} className="text-sm font-medium hover:text-primary transition-colors">Маршруты</button>
              <button onClick={() => scrollToSection('lakes')} className="text-sm font-medium hover:text-primary transition-colors">Озёра</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://cdn.poehali.dev/projects/6b032f0b-3aa6-47c2-b7e8-a26b07c1bb7c/files/f0d5dda6-716e-4232-9c38-34986cdf3983.jpg" 
            alt="SUP на озере"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-blue-900/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Аренда САП-бордов в Ворсме</h1>
          <p className="text-xl md:text-2xl mb-8 font-light">Прогулки по живописным озёрам Ключик и Тосканка</p>
          <Button onClick={() => scrollToSection('rental')} size="lg" className="bg-white text-primary hover:bg-blue-50 text-lg px-8 py-6">
            Узнать расценки
          </Button>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-white" size={32} />
        </div>
      </section>

      <section id="rental" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Аренда и расценки</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Выгодные цены на прокат САП-бордов</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
              <CardHeader className="bg-gradient-to-br from-blue-50 to-white">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Calendar" className="text-primary" />
                  Будни
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="text-lg font-medium">Час</span>
                  <span className="text-2xl font-bold text-primary">350 ₽</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="text-lg font-medium">Весь день</span>
                  <span className="text-2xl font-bold text-primary">1000 ₽</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/40 hover:border-secondary/60 transition-all hover:shadow-lg">
              <CardHeader className="bg-gradient-to-br from-yellow-50 to-white">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Sun" className="text-secondary" />
                  Выходные
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg">
                  <span className="text-lg font-medium">Час</span>
                  <span className="text-2xl font-bold text-secondary">500 ₽</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg">
                  <span className="text-lg font-medium">Весь день</span>
                  <span className="text-2xl font-bold text-secondary">1500 ₽</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-blue-50 to-yellow-50 border-none">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Icon name="Gift" className="text-primary" />
                Бесплатно в комплекте
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2">
                    <Icon name="Shield" className="text-primary" size={24} />
                  </div>
                  <span className="text-sm font-medium">Спасательные жилеты</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2">
                    <Icon name="Anchor" className="text-primary" size={24} />
                  </div>
                  <span className="text-sm font-medium">Вёсла</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2">
                    <Icon name="Smartphone" className="text-primary" size={24} />
                  </div>
                  <span className="text-sm font-medium">Водонепроницаемые чехлы</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2">
                    <Icon name="ShoppingBag" className="text-primary" size={24} />
                  </div>
                  <span className="text-sm font-medium">Водонепроницаемые сумки</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="routes" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Маршруты для прогулок</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Выберите свой идеальный водный маршрут</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/6b032f0b-3aa6-47c2-b7e8-a26b07c1bb7c/files/646e8c26-37fb-4d1e-901b-384c829c2e58.jpg"
                  alt="Маршрут по ручью"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" className="text-primary" />
                  Ключик → Тосканка
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-base">
                  <Icon name="Clock" size={16} />
                  ~1 час
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Живописный маршрут по красивому ручью, соединяющему два озера. 
                  Спокойное течение, тенистые берега и невероятные виды природы.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/6b032f0b-3aa6-47c2-b7e8-a26b07c1bb7c/files/f0d5dda6-716e-4232-9c38-34986cdf3983.jpg"
                  alt="Озеро Тосканка"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Waves" className="text-primary" />
                  Озеро Тосканка
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-base">
                  <Icon name="Clock" size={16} />
                  По желанию
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Просторное озеро для неспешных прогулок. Идеально подходит для новичков 
                  и семейного отдыха. Чистая вода и живописные берега.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="lakes" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Озёра Ключик и Тосканка</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Чистейшие водоёмы Ворсмы</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Droplet" className="text-primary" />
                  Озеро Ключик
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Уютное живописное озеро с кристально чистой водой. 
                  Окружено лесом, что создаёт особую атмосферу спокойствия и единения с природой.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm">Чистая вода</span>
                  <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm">Лесные берега</span>
                  <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm">Тихое место</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Waves" className="text-primary" />
                  Озеро Тосканка
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Просторное озеро, идеальное для длительных водных прогулок. 
                  Отличается спокойной водной гладью и живописными пейзажами.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm">Большая площадь</span>
                  <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm">Спокойная вода</span>
                  <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm">Красивые виды</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Контакты и как добраться</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Мы находимся в городе Ворсма</p>
          
          <Card className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100">
            <CardContent className="pt-6 space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="MapPin" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                  <p className="text-muted-foreground">г. Ворсма, озеро Ключик</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Icon name="Phone" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                  <a href="tel:+79876543210" className="text-primary hover:underline text-lg">+7 (987) 654-32-10</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="Clock" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Режим работы</h3>
                  <p className="text-muted-foreground">Ежедневно с 9:00 до 20:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="Navigation" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Как добраться</h3>
                  <p className="text-muted-foreground">
                    Из центра Ворсмы двигайтесь в сторону озера Ключик. 
                    Прокат находится на берегу озера, есть парковка.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <Button size="lg" className="text-lg px-8 py-6">
              <Icon name="MessageCircle" className="mr-2" />
              Забронировать САП
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Waves" size={24} />
                <span className="text-xl font-bold">Vorsma SUP</span>
              </div>
              <p className="text-blue-100">
                Аренда САП-бордов на озёрах Ворсмы
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-blue-100">
                <p>г. Ворсма, озеро Ключик</p>
                <p>+7 (987) 654-32-10</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <p className="text-blue-100">Ежедневно с 9:00 до 20:00</p>
            </div>
          </div>
          
          <div className="border-t border-blue-400 pt-8 text-center text-blue-100">
            <p>© 2024 Vorsma SUP. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
