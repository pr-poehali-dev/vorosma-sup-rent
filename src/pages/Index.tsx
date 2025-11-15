import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="text-sm tracking-[0.2em] uppercase text-primary font-medium">
              Vorsma SUP
            </div>
            <div className="hidden md:flex gap-12">
              {['Аренда', 'Маршруты', 'Озёра', 'Контакты'].map((item, idx) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(['rental', 'routes', 'lakes', 'contacts'][idx])} 
                  className="text-sm tracking-wide text-slate-600 hover:text-primary transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://cdn.poehali.dev/projects/6b032f0b-3aa6-47c2-b7e8-a26b07c1bb7c/files/f0d5dda6-716e-4232-9c38-34986cdf3983.jpg" 
            alt="SUP на озере"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/30"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
          <p className="text-sm tracking-[0.3em] uppercase mb-12 opacity-90">Ворсма</p>
          <h1 className="text-7xl md:text-[8rem] leading-[0.95] mb-16 font-normal">
            Прогулки<br/>на воде
          </h1>
          <button 
            onClick={() => scrollToSection('rental')} 
            className="text-sm tracking-[0.2em] uppercase border border-white/30 px-12 py-5 hover:bg-white hover:text-primary transition-all duration-500"
          >
            Подробнее
          </button>
        </div>
      </section>

      <section className="py-40 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-32">
          <p className="text-sm tracking-[0.3em] uppercase text-slate-400 mb-8">О нас</p>
          <h2 className="text-5xl md:text-6xl mb-12 leading-tight">
            Спокойствие и гармония<br/>на озёрах Ворсмы
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Мы предлагаем аренду сап-бордов для прогулок по живописным озёрам Ключик и Тосканка. 
            Насладитесь природой и тишиной вдали от городской суеты.
          </p>
        </div>
      </section>

      <section id="rental" className="py-32 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-32">
            <p className="text-sm tracking-[0.3em] uppercase text-slate-400 mb-8">Тарифы</p>
            <h2 className="text-5xl md:text-6xl">Аренда</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 mb-32">
            <div className="border-t border-slate-200 pt-12">
              <p className="text-sm tracking-[0.2em] uppercase text-slate-500 mb-12">Будни</p>
              <div className="space-y-10">
                <div className="flex justify-between items-baseline border-b border-slate-100 pb-6">
                  <span className="text-slate-600">1 час</span>
                  <span className="text-3xl">350₽</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-slate-600">Целый день</span>
                  <span className="text-3xl">1000₽</span>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-12">
              <p className="text-sm tracking-[0.2em] uppercase text-slate-500 mb-12">Выходные</p>
              <div className="space-y-10">
                <div className="flex justify-between items-baseline border-b border-slate-100 pb-6">
                  <span className="text-slate-600">1 час</span>
                  <span className="text-3xl">500₽</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-slate-600">Целый день</span>
                  <span className="text-3xl">1500₽</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-16">
            <p className="text-sm tracking-[0.2em] uppercase text-slate-500 mb-12 text-center">В стоимость включено</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                'Спасательные жилеты',
                'Вёсла', 
                'Водонепроницаемые чехлы',
                'Водонепроницаемые сумки'
              ].map((item) => (
                <div key={item} className="text-center">
                  <p className="text-sm text-slate-600 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="routes" className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-32">
            <p className="text-sm tracking-[0.3em] uppercase text-slate-400 mb-8">Водные пути</p>
            <h2 className="text-5xl md:text-6xl">Маршруты</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="group">
              <div className="relative h-[500px] overflow-hidden mb-10">
                <img 
                  src="https://cdn.poehali.dev/projects/6b032f0b-3aa6-47c2-b7e8-a26b07c1bb7c/files/646e8c26-37fb-4d1e-901b-384c829c2e58.jpg"
                  alt="Маршрут по ручью"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                />
              </div>
              <div className="border-l border-slate-200 pl-8">
                <p className="text-sm tracking-[0.2em] uppercase text-slate-400 mb-4">~1 час</p>
                <h3 className="text-3xl mb-6">Ключик → Тосканка</h3>
                <p className="text-slate-600 leading-relaxed">
                  Живописный маршрут по красивому ручью, соединяющему два озера. 
                  Спокойное течение и тенистые берега.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="relative h-[500px] overflow-hidden mb-10">
                <img 
                  src="https://cdn.poehali.dev/projects/6b032f0b-3aa6-47c2-b7e8-a26b07c1bb7c/files/f0d5dda6-716e-4232-9c38-34986cdf3983.jpg"
                  alt="Озеро Тосканка"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                />
              </div>
              <div className="border-l border-slate-200 pl-8">
                <p className="text-sm tracking-[0.2em] uppercase text-slate-400 mb-4">По желанию</p>
                <h3 className="text-3xl mb-6">Озеро Тосканка</h3>
                <p className="text-slate-600 leading-relaxed">
                  Просторное озеро для неспешных прогулок. Идеально для новичков 
                  и семейного отдыха.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="lakes" className="py-32 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-32">
            <p className="text-sm tracking-[0.3em] uppercase text-slate-400 mb-8">Природа</p>
            <h2 className="text-5xl md:text-6xl">Озёра</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-20">
            <div className="border-t border-slate-200 pt-12">
              <h3 className="text-3xl mb-8">Озеро Ключик</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Уютное живописное озеро с кристально чистой водой. 
                Окружено лесом, что создаёт особую атмосферу спокойствия.
              </p>
              <div className="flex gap-4 text-sm text-slate-500">
                <span>Чистая вода</span>
                <span>·</span>
                <span>Лесные берега</span>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-12">
              <h3 className="text-3xl mb-8">Озеро Тосканка</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Просторное озеро для длительных водных прогулок. 
                Отличается спокойной водной гладью и живописными пейзажами.
              </p>
              <div className="flex gap-4 text-sm text-slate-500">
                <span>Большая площадь</span>
                <span>·</span>
                <span>Спокойная вода</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-32">
            <p className="text-sm tracking-[0.3em] uppercase text-slate-400 mb-8">Связь</p>
            <h2 className="text-5xl md:text-6xl">Контакты</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div className="border-t border-slate-200 pt-12">
              <p className="text-sm tracking-[0.2em] uppercase text-slate-500 mb-6">Адрес</p>
              <p className="text-lg text-slate-600 mb-4">г. Ворсма, озеро Ключик</p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Из центра Ворсмы двигайтесь в сторону озера Ключик. 
                Прокат на берегу, есть парковка.
              </p>
            </div>

            <div className="border-t border-slate-200 pt-12">
              <p className="text-sm tracking-[0.2em] uppercase text-slate-500 mb-6">Режим работы</p>
              <p className="text-lg text-slate-600">Ежедневно</p>
              <p className="text-lg text-slate-600">9:00 — 20:00</p>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-16 text-center">
            <p className="text-sm tracking-[0.2em] uppercase text-slate-500 mb-8">Для бронирования</p>
            <a href="tel:+79876543210" className="text-3xl mb-12 block hover:text-primary transition-colors">
              +7 987 654-32-10
            </a>
            <div className="flex justify-center gap-6">
              <a 
                href="tel:+79876543210" 
                className="text-sm tracking-wide text-slate-600 hover:text-primary transition-colors pb-1 border-b border-transparent hover:border-primary"
              >
                Звонок
              </a>
              <a 
                href="https://wa.me/79876543210" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tracking-wide text-slate-600 hover:text-primary transition-colors pb-1 border-b border-transparent hover:border-primary"
              >
                WhatsApp
              </a>
              <a 
                href="https://t.me/+79876543210" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tracking-wide text-slate-600 hover:text-primary transition-colors pb-1 border-b border-transparent hover:border-primary"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="text-sm tracking-[0.2em] uppercase text-slate-400">
              Vorsma SUP
            </div>
            <div className="text-sm text-slate-500">
              © 2024 Все права защищены
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
