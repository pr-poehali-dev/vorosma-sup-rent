import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center">
                <Icon name="Waves" className="text-white" size={20} />
              </div>
              <span className="text-xl font-semibold tracking-tight">Vorsma SUP</span>
            </div>
            <div className="hidden md:flex gap-8">
              {['Аренда', 'Маршруты', 'Озёра', 'Контакты'].map((item, idx) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(['rental', 'routes', 'lakes', 'contacts'][idx])} 
                  className="text-sm font-medium text-slate-600 hover:text-primary transition-colors relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://cdn.poehali.dev/projects/6b032f0b-3aa6-47c2-b7e8-a26b07c1bb7c/files/f0d5dda6-716e-4232-9c38-34986cdf3983.jpg" 
            alt="SUP на озере"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/40 to-slate-900/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-sm font-medium tracking-wide">Ворсма, Нижегородская область</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Прогулки<br/>на САП-бордах
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-light text-white/90 max-w-2xl mx-auto">
            Единение с природой на озёрах Ключик и Тосканка
          </p>
          <Button 
            onClick={() => scrollToSection('rental')} 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 text-base px-10 py-7 rounded-full shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105"
          >
            Узнать расценки
          </Button>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/60 rounded-full"></div>
          </div>
        </div>
      </section>

      <section id="rental" className="py-32 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">Аренда</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="group relative overflow-hidden rounded-3xl bg-white p-10 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Icon name="Calendar" className="text-primary" size={24} />
                  </div>
                  <h3 className="text-3xl font-semibold text-slate-800">Будни</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-end justify-between pb-6 border-b border-slate-100">
                    <span className="text-lg text-slate-600">1 час</span>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-primary">350₽</div>
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <span className="text-lg text-slate-600">Целый день</span>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-primary">1000₽</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary to-secondary/90 p-10 shadow-lg hover:shadow-2xl transition-all duration-500 text-white">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Icon name="Sun" className="text-white" size={24} />
                  </div>
                  <h3 className="text-3xl font-semibold">Выходные</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-end justify-between pb-6 border-b border-white/20">
                    <span className="text-lg text-white/90">1 час</span>
                    <div className="text-right">
                      <div className="text-4xl font-bold">500₽</div>
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <span className="text-lg text-white/90">Целый день</span>
                    <div className="text-right">
                      <div className="text-4xl font-bold">1500₽</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-12">
            <h3 className="text-2xl font-semibold text-center mb-10 text-slate-800">Бесплатно в комплекте</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: 'Shield', label: 'Спасательные\nжилеты' },
                { icon: 'Anchor', label: 'Вёсла' },
                { icon: 'Smartphone', label: 'Водонепроницаемые\nчехлы' },
                { icon: 'ShoppingBag', label: 'Водонепроницаемые\nсумки' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                    <Icon name={item.icon as any} className="text-primary" size={28} />
                  </div>
                  <span className="text-sm font-medium text-slate-700 whitespace-pre-line leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="routes" className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">Маршруты</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Выберите свой водный путь</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/6b032f0b-3aa6-47c2-b7e8-a26b07c1bb7c/files/646e8c26-37fb-4d1e-901b-384c829c2e58.jpg"
                  alt="Маршрут по ручью"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-white/90 mb-2">
                    <Icon name="Clock" size={16} />
                    <span className="text-sm font-medium">~1 час</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-slate-800 flex items-center gap-2">
                  <Icon name="MapPin" className="text-primary" size={20} />
                  Ключик → Тосканка
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Живописный маршрут по красивому ручью, соединяющему два озера. 
                  Спокойное течение, тенистые берега и невероятные виды природы.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/6b032f0b-3aa6-47c2-b7e8-a26b07c1bb7c/files/f0d5dda6-716e-4232-9c38-34986cdf3983.jpg"
                  alt="Озеро Тосканка"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-white/90 mb-2">
                    <Icon name="Clock" size={16} />
                    <span className="text-sm font-medium">По желанию</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-slate-800 flex items-center gap-2">
                  <Icon name="Waves" className="text-primary" size={20} />
                  Озеро Тосканка
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Просторное озеро для неспешных прогулок. Идеально подходит для новичков 
                  и семейного отдыха. Чистая вода и живописные берега.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="lakes" className="py-32 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">Озёра</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Чистейшие водоёмы Ворсмы</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-500">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="Droplet" className="text-primary" size={26} />
              </div>
              <h3 className="text-3xl font-semibold mb-6 text-slate-800">Озеро Ключик</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Уютное живописное озеро с кристально чистой водой. 
                Окружено лесом, что создаёт особую атмосферу спокойствия и единения с природой.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Чистая вода', 'Лесные берега', 'Тихое место'].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-500">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="Waves" className="text-primary" size={26} />
              </div>
              <h3 className="text-3xl font-semibold mb-6 text-slate-800">Озеро Тосканка</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Просторное озеро, идеальное для длительных водных прогулок. 
                Отличается спокойной водной гладью и живописными пейзажами.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Большая площадь', 'Спокойная вода', 'Красивые виды'].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-32 px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">Контакты</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-lg text-slate-600">Мы находимся в городе Ворсма</p>
          </div>
          
          <div className="bg-white rounded-3xl p-12 shadow-xl mb-12">
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon name="MapPin" className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-slate-800">Адрес</h3>
                  <p className="text-slate-600 text-lg">г. Ворсма, озеро Ключик</p>
                  <p className="text-sm text-slate-500 mt-2">Из центра Ворсмы двигайтесь в сторону озера Ключик. Прокат находится на берегу озера, есть парковка.</p>
                </div>
              </div>

              <div className="h-px bg-slate-100"></div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Phone" className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3 text-slate-800">Связь</h3>
                  <a href="tel:+79876543210" className="text-primary hover:text-primary/80 text-xl font-medium mb-4 block transition-colors">
                    +7 (987) 654-32-10
                  </a>
                  <div className="flex gap-3">
                    <a 
                      href="tel:+79876543210" 
                      className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors text-sm font-medium text-slate-700"
                    >
                      <Icon name="Phone" size={16} />
                      Звонок
                    </a>
                    <a 
                      href="https://wa.me/79876543210" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-green-50 hover:bg-green-100 text-green-700 rounded-xl transition-colors text-sm font-medium"
                    >
                      <Icon name="MessageCircle" size={16} />
                      WhatsApp
                    </a>
                    <a 
                      href="https://t.me/+79876543210" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl transition-colors text-sm font-medium"
                    >
                      <Icon name="Send" size={16} />
                      Telegram
                    </a>
                  </div>
                </div>
              </div>

              <div className="h-px bg-slate-100"></div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Clock" className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-slate-800">Режим работы</h3>
                  <p className="text-slate-600 text-lg">Ежедневно с 9:00 до 20:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="text-base px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://wa.me/79876543210', '_blank')}
            >
              <Icon name="MessageCircle" className="mr-2" />
              Забронировать САП
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Icon name="Waves" size={20} />
                </div>
                <span className="text-xl font-semibold">Vorsma SUP</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Аренда САП-бордов на озёрах Ворсмы
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
              <div className="space-y-2 text-slate-400">
                <p>г. Ворсма, озеро Ключик</p>
                <p>+7 (987) 654-32-10</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Режим работы</h4>
              <p className="text-slate-400">Ежедневно с 9:00 до 20:00</p>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
            <p>© 2024 Vorsma SUP. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
