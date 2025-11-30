import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Icon name="Briefcase" className="text-primary" size={28} />
            <span className="text-xl font-bold text-foreground">ИИ в закупках</span>
          </a>
          
          <a href="/">
            <Button variant="outline" size="sm">
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              На главную
            </Button>
          </a>
        </div>
      </header>

      <main className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Политика конфиденциальности</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Общие положения</h2>
              <p>
                Настоящая Политика конфиденциальности персональных данных (далее — Политика) действует в отношении всей информации, 
                которую сайт "ИИ в закупках", расположенный на доменном имени (включая все уровни указанного домена), 
                может получить о Пользователе во время использования им сайта.
              </p>
              <p>
                Использование сайта означает безоговорочное согласие Пользователя с настоящей Политикой и указанными в ней 
                условиями обработки его персональной информации.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Персональная информация пользователей</h2>
              <p>
                В рамках настоящей Политики под «персональной информацией Пользователя» понимаются:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Персональная информация, которую Пользователь предоставляет о себе самостоятельно при заполнении форм 
                  обратной связи, включая персональные данные Пользователя: имя, номер телефона, адрес электронной почты.
                </li>
                <li>
                  Данные, которые автоматически передаются в процессе использования сайта, включая IP-адрес, 
                  информацию из cookies, информацию о браузере Пользователя, технические характеристики оборудования и ПО.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Цели обработки персональной информации</h2>
              <p>
                Сайт собирает и хранит только те персональные данные, которые необходимы для:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Связи с Пользователем для предоставления информации о тренинге</li>
                <li>Направления Пользователю коммерческих предложений и информационных рассылок</li>
                <li>Улучшения качества обслуживания и содержания сайта</li>
                <li>Анализа использования сайта и статистических исследований</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Условия обработки и передачи персональной информации</h2>
              <p>
                Мы обязуемся не разглашать полученную от Пользователя информацию. Вне пределов, указанных в настоящей Политике, 
                информация о Пользователях не будет каким-либо образом использована. Доступ к таким сведениям имеют только 
                лица, специально уполномоченные на выполнение данных работ.
              </p>
              <p>
                Персональная информация Пользователя может быть передана третьим лицам в следующих случаях:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Пользователь выразил свое согласие на такие действия</li>
                <li>Передача необходима в рамках использования Пользователем определенного сервиса</li>
                <li>Передача предусмотрена российским или иным применимым законодательством</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Меры по защите персональной информации</h2>
              <p>
                Мы принимаем необходимые и достаточные организационные и технические меры для защиты персональной информации 
                Пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, 
                распространения, а также от иных неправомерных действий с ней третьих лиц.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Изменение Политики конфиденциальности</h2>
              <p>
                Администрация сайта имеет право вносить изменения в настоящую Политику конфиденциальности без согласия Пользователя. 
                Новая Политика конфиденциальности вступает в силу с момента ее размещения на сайте, если иное не предусмотрено 
                новой редакцией Политики конфиденциальности.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Обратная связь</h2>
              <p>
                Все предложения или вопросы по поводу настоящей Политики следует направлять по адресу:{" "}
                <a href="mailto:email@btbsales.ru" className="text-primary hover:underline">
                  email@btbsales.ru
                </a>
              </p>
            </section>

            <div className="bg-gray-50 border-l-4 border-l-primary p-6 rounded-lg mt-8">
              <p className="text-sm text-muted-foreground">
                <strong>Дата последнего обновления:</strong> 30 ноября 2024 года
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 px-4 bg-[#1A1F2C] text-white mt-16">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center text-white/40 text-sm">
            <p>© 2024 ИИ в закупках. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
