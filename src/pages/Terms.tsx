import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Terms = () => {
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
          <h1 className="text-4xl font-bold mb-8 text-foreground">Условия использования</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Общие положения</h2>
              <p>
                Настоящие Условия использования (далее — Условия) регулируют отношения между владельцем сайта 
                "ИИ в закупках" (далее — Администрация) и посетителями сайта (далее — Пользователи).
              </p>
              <p>
                Использование сайта означает безоговорочное согласие Пользователя с настоящими Условиями. 
                Если Пользователь не согласен с Условиями, он должен немедленно прекратить использование сайта.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Предмет соглашения</h2>
              <p>
                Администрация предоставляет Пользователю доступ к информации о тренинге "ИИ в закупках", 
                включая возможность отправки заявки на участие через формы обратной связи.
              </p>
              <p>
                Все существующие на данный момент услуги сайта, а также любое их развитие и/или добавление новых 
                является предметом настоящих Условий.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Права и обязанности Пользователя</h2>
              <p>Пользователь имеет право:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Просматривать информацию, размещенную на сайте</li>
                <li>Отправлять заявки через формы обратной связи</li>
                <li>Получать консультации по вопросам, связанным с тренингом</li>
              </ul>
              
              <p className="mt-4">Пользователь обязуется:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Предоставлять достоверную информацию о себе</li>
                <li>Использовать сайт только в законных целях</li>
                <li>Не нарушать работоспособность сайта</li>
                <li>Не копировать и не распространять контент сайта без согласия Администрации</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Права и обязанности Администрации</h2>
              <p>Администрация имеет право:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Изменять или дополнять настоящие Условия в одностороннем порядке</li>
                <li>Ограничивать доступ к сайту в случае нарушения Пользователем настоящих Условий</li>
                <li>Удалять любую информацию, размещенную Пользователем, если она противоречит законодательству или настоящим Условиям</li>
              </ul>
              
              <p className="mt-4">Администрация обязуется:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Поддерживать работоспособность сайта</li>
                <li>Обеспечивать конфиденциальность персональных данных Пользователей</li>
                <li>Своевременно рассматривать заявки Пользователей</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Интеллектуальная собственность</h2>
              <p>
                Все объекты, доступные при помощи сайта, в том числе элементы дизайна, текст, графические изображения, 
                иллюстрации, видео, программы для ЭВМ, базы данных, музыка, звуки и другие объекты, 
                являются объектами исключительных прав Администрации.
              </p>
              <p>
                Использование контента сайта возможно только с письменного разрешения Администрации.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Ответственность</h2>
              <p>
                Администрация не несет ответственности за:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Временную недоступность сайта по техническим или иным причинам</li>
                <li>Действия Пользователей на сайте</li>
                <li>Достоверность информации, предоставленной Пользователями</li>
                <li>Любые виды убытков, возникшие вследствие использования или невозможности использования сайта</li>
              </ul>
              <p className="mt-4">
                Пользователь несет личную ответственность за любую информацию, которую размещает на сайте, 
                сообщает другим Пользователям, а также за любые взаимодействия с другими Пользователями.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Разрешение споров</h2>
              <p>
                В случае возникновения любых разногласий или споров между Сторонами настоящих Условий обязательным 
                условием до обращения в суд является предъявление претензии (письменного предложения о добровольном 
                урегулировании спора).
              </p>
              <p>
                Получатель претензии в течение 30 календарных дней со дня получения претензии письменно уведомляет 
                заявителя претензии о результатах рассмотрения претензии.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Дополнительные условия</h2>
              <p>
                Администрация вправе в любое время изменять настоящие Условия без предварительного уведомления Пользователя. 
                Новая редакция Условий вступает в силу с момента ее размещения на сайте.
              </p>
              <p>
                Настоящие Условия составлены в соответствии с законодательством Российской Федерации.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Контактная информация</h2>
              <p>
                Все вопросы и предложения по использованию сайта следует направлять по адресу:{" "}
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

export default Terms;
