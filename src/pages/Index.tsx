import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://functions.poehali.dev/edca3b3d-eada-4f34-a2f2-2cbe28f2adea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", phone: "", email: "" });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Briefcase" className="text-primary" size={28} />
            <span className="text-xl font-bold text-foreground">ИИ в закупках</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              О тренинге
            </a>
            <a href="#program" className="text-muted-foreground hover:text-foreground transition-colors">
              Программа
            </a>
            <a href="#contact-form" className="text-muted-foreground hover:text-foreground transition-colors">
              Контакты
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="mailto:email@btbsales.ru" className="text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="Mail" size={20} />
            </a>
            <a href="tel:+79000000000" className="text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="Phone" size={20} />
            </a>
          </div>
        </div>
      </header>
      <section id="about" className="bg-gradient-to-br from-[#1A1F2C] to-[#2A3F5C] text-white py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            ИИ в закупках: сделайте работу байеров быстрее и проще — уже завтра
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl">
            Однодневный практический интенсив для закупщиков и категорийных менеджеров, который помогает автоматизировать до 50% рутины.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-start gap-3">
              <Icon name="FileCheck" className="text-primary shrink-0 mt-1" size={24} />
              <p className="text-lg">Автоматический анализ КП и спецификаций</p>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="Mail" className="text-primary shrink-0 mt-1" size={24} />
              <p className="text-lg">Быстрая подготовка писем и запросов поставщикам</p>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="Search" className="text-primary shrink-0 mt-1" size={24} />
              <p className="text-lg">Поиск альтернативных производителей за минуты</p>
            </div>
          </div>

          <Button size="lg" onClick={scrollToForm} className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg mb-8">
            Получить программу тренинга
          </Button>

          <div className="flex flex-wrap gap-6 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle2" size={18} className="text-accent" />
              <span>Excel / PDF</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle2" size={18} className="text-accent" />
              <span>Переговорные тренажёры</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle2" size={18} className="text-accent" />
              <span>Работа на ваших реальных файлах</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-foreground">
            Проблемы закупщиков, которые ИИ решает за минуты
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-l-4 border-l-destructive">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Icon name="X" className="text-destructive shrink-0 mt-1" size={20} />
                  <p className="text-lg">Ручное сравнение КП в разных форматах — долго и неудобно</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-destructive">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Icon name="X" className="text-destructive shrink-0 mt-1" size={20} />
                  <p className="text-lg">Поиск реальных производителей превращается в хаос</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-destructive">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Icon name="X" className="text-destructive shrink-0 mt-1" size={20} />
                  <p className="text-lg">Письма поставщикам каждый раз пишутся «с нуля»</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-destructive">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Icon name="X" className="text-destructive shrink-0 mt-1" size={20} />
                  <p className="text-lg">Договоры и ТЗ большие — скрытые риски сложно заметить</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/10 border-l-4 border-l-primary p-6 rounded-lg">
            <p className="text-lg font-semibold text-foreground mb-2">
              На рутинные операции уходит 60–80% рабочего времени.
            </p>
            <p className="text-muted-foreground">
              Мы помогаем вернуть это время на аналитику и переговоры.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-foreground">
            Чем этот тренинг отличается от "общих курсов по ChatGPT"
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6 text-muted-foreground flex items-center gap-2">
                <Icon name="X" className="text-destructive" size={24} />
                Не будет:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-destructive text-xl">🚫</span>
                  <span>генерации картинок</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-destructive text-xl">🚫</span>
                  <span>теории о будущем ИИ</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-destructive text-xl">🚫</span>
                  <span>универсальных рекомендаций "для всех специалистов"</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-accent flex items-center gap-2">
                <Icon name="CheckCircle2" className="text-accent" size={24} />
                Будет:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-accent shrink-0 mt-0.5" size={20} />
                  <span>сравнение КП и спецификаций</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-accent shrink-0 mt-0.5" size={20} />
                  <span>анализ договоров</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-accent shrink-0 mt-0.5" size={20} />
                  <span>поиск поставщиков</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-accent shrink-0 mt-0.5" size={20} />
                  <span>нормализация Excel / номенклатуры</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-accent shrink-0 mt-0.5" size={20} />
                  <span>подготовка писем и претензий</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-accent shrink-0 mt-0.5" size={20} />
                  <span>переговорные сценарии</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-16 px-4 bg-gray-50">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
            Программа тренинга (8 часов практики)
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-10">
            Работаем на ваших задачах, документах, КП и Excel.
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="module-1" className="bg-white border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-lg">1</span>
                  </div>
                  <h3 className="text-xl font-bold">Модуль 1. Поиск и проверка поставщиков (Sourcing)</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-16 pt-4">
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <Icon name="Circle" className="shrink-0 mt-1.5" size={8} />
                    <span>Поиск производителей, а не трейдеров</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Circle" className="shrink-0 mt-1.5" size={8} />
                    <span>Быстрая проверка поставщика: мощности, цены, риски</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Circle" className="shrink-0 mt-1.5" size={8} />
                    <span>RFI/RFQ-запросы за 2–3 минуты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Circle" className="shrink-0 mt-1.5" size={8} />
                    <span>«Пульс поставщика» — анализ новостей и репутации</span>
                  </li>
                </ul>
                <div className="bg-accent/10 border-l-4 border-l-accent p-4 rounded">
                  <p className="font-semibold text-accent">
                    Результат: участник умеет быстро находить и проверять поставщиков.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="module-2" className="bg-white border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-lg">2</span>
                  </div>
                  <h3 className="text-xl font-bold">Модуль 2. Сравнение КП и работа с данными</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-16 pt-4">
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <Icon name="Circle" className="shrink-0 mt-1.5" size={8} />
                    <span>Автоматический анализ PDF и Excel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Circle" className="shrink-0 mt-1.5" size={8} />
                    <span>Свести КП в одну таблицу «апплс-ту-апплс» за минуты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Circle" className="shrink-0 mt-1.5" size={8} />
                    <span>Поиск скрытых условий и несоответствий</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Circle" className="shrink-0 mt-1.5" size={8} />
                    <span>Нормализация справочников (коды, типы, размеры)</span>
                  </li>
                </ul>
                <div className="bg-accent/10 border-l-4 border-l-accent p-4 rounded">
                  <p className="font-semibold text-accent">
                    Результат: участник умеет сравнивать сложные КП в 4–10 раз быстрее.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="module-3" className="bg-white border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-lg">3</span>
                  </div>
                  <h3 className="text-xl font-bold">Модуль 3. Коммуникации и переговоры</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-16 pt-4">
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <Icon name="Circle" className="shrink-0 mt-1.5" size={8} />
                    <span>Формула ROCS: быстрые и точные письма</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Circle" className="shrink-0 mt-1.5" size={8} />
                    <span>Претензии, торг, запросы — за 1 минуту</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Circle" className="shrink-0 mt-1.5" size={8} />
                    <span>ИИ-симуляция переговоров: тренировка ответов и аргументов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Circle" className="shrink-0 mt-1.5" size={8} />
                    <span>Как добиться улучшения условий без жёсткого конфликта</span>
                  </li>
                </ul>
                <div className="bg-accent/10 border-l-4 border-l-accent p-4 rounded">
                  <p className="font-semibold text-accent">
                    Результат: байер получает готовые шаблоны писем и переговорных фраз.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="module-4" className="bg-white border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-lg">4</span>
                  </div>
                  <h3 className="text-xl font-bold">Модуль 4. ТЗ, договоры и оптимизация работы</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-16 pt-4">
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <Icon name="Circle" className="shrink-0 mt-1.5" size={8} />
                    <span>Создание ТЗ за 5 минут</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Circle" className="shrink-0 mt-1.5" size={8} />
                    <span>Поиск рисков и штрафов в договоре</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Circle" className="shrink-0 mt-1.5" size={8} />
                    <span>Проверка КП на соответствие ТЗ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Circle" className="shrink-0 mt-1.5" size={8} />
                    <span>Как автоматизировать 30–50% рутинной работы</span>
                  </li>
                </ul>
                <div className="bg-accent/10 border-l-4 border-l-accent p-4 rounded">
                  <p className="font-semibold text-accent">
                    Результат: участник умеет выявлять риски и ускоряет работу с документами.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-foreground">
            Примеры задач, которые решаем на тренинге
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-t-4 border-t-primary hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Кейс 1: Сравнение КП</h3>
                <p className="text-3xl font-bold text-primary mb-2">40 мин → 4 мин</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-accent hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Кейс 2: Поиск производителя</h3>
                <p className="text-muted-foreground">Найден производитель с ценой на 12% ниже рынка.</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-primary hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Кейс 3: Письмо о задержке</h3>
                <p className="text-muted-foreground">ИИ подготовил сильное письмо → поставщик ускорил поставку.</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-accent hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Кейс 4: Проверка договора</h3>
                <p className="text-muted-foreground">Выявлен скрытый штрафной пункт, который мог привести к потерям.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-foreground">
            Безопасная работа с данными
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <Icon name="Shield" className="text-primary mb-3" size={32} />
                <p className="text-lg">Показываем, как маскировать данные перед загрузкой</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Icon name="FileText" className="text-primary mb-3" size={32} />
                <p className="text-lg">Даем шаблон Data Masking</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Icon name="WifiOff" className="text-primary mb-3" size={32} />
                <p className="text-lg">Можно провести тренинг полностью офлайн</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Icon name="Lock" className="text-primary mb-3" size={32} />
                <p className="text-lg">Не сохраняем ваши файлы и не используем их вне тренинга</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/10 border-l-4 border-l-primary p-6 rounded-lg text-center">
            <p className="text-xl font-semibold text-foreground">
              Данные остаются только у вас. Мы обучаем инструменту — не забираем информацию.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-foreground">
            Что команда получит на следующий день
          </h2>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="flex items-start gap-3 bg-accent/5 p-4 rounded-lg">
              <Icon name="CheckCircle2" className="text-accent shrink-0 mt-1" size={24} />
              <p className="text-lg">сравнение КП — быстрее в 4–10 раз</p>
            </div>

            <div className="flex items-start gap-3 bg-accent/5 p-4 rounded-lg">
              <Icon name="CheckCircle2" className="text-accent shrink-0 mt-1" size={24} />
              <p className="text-lg">готовые шаблоны писем и запросов</p>
            </div>

            <div className="flex items-start gap-3 bg-accent/5 p-4 rounded-lg">
              <Icon name="CheckCircle2" className="text-accent shrink-0 mt-1" size={24} />
              <p className="text-lg">сценарии переговоров под реальные кейсы</p>
            </div>

            <div className="flex items-start gap-3 bg-accent/5 p-4 rounded-lg">
              <Icon name="CheckCircle2" className="text-accent shrink-0 mt-1" size={24} />
              <p className="text-lg">чистый нормализованный справочник</p>
            </div>

            <div className="flex items-start gap-3 bg-accent/5 p-4 rounded-lg">
              <Icon name="CheckCircle2" className="text-accent shrink-0 mt-1" size={24} />
              <p className="text-lg">умение быстро находить поставщиков</p>
            </div>

            <div className="flex items-start gap-3 bg-accent/5 p-4 rounded-lg">
              <Icon name="CheckCircle2" className="text-accent shrink-0 mt-1" size={24} />
              <p className="text-lg">навык работы с договорами и ТЗ</p>
            </div>

            <div className="flex items-start gap-3 bg-accent/5 p-4 rounded-lg md:col-span-2">
              <Icon name="CheckCircle2" className="text-accent shrink-0 mt-1" size={24} />
              <p className="text-lg font-bold">экономия времени до 50%</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Автор и ведущий тренинга
          </h2>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="User" className="text-primary" size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Николай Лукша</h3>
              <p className="text-lg text-muted-foreground">
                Эксперт по B2B-коммуникациям.<br />
                Обучаю применять ИИ для экономии времени и улучшения условий поставок.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-foreground">
            Формат участия
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="MapPin" className="text-primary mx-auto mb-3" size={32} />
                <p className="font-semibold">Офлайн — на территории заказчика</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Video" className="text-primary mx-auto mb-3" size={32} />
                <p className="font-semibold">Онлайн интенсив — Zoom / Teams</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Users" className="text-primary mx-auto mb-3" size={32} />
                <p className="font-semibold">Оптимум: 10–15 участников</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Laptop" className="text-primary mx-auto mb-3" size={32} />
                <p className="font-semibold">Требования: ноутбук + интернет</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-16 px-4 bg-gradient-to-br from-[#1A1F2C] to-[#2A3F5C] text-white">
        <div className="container max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Сделайте работу закупщиков проще и быстрее
          </h2>
          <p className="text-xl text-center text-blue-100 mb-10">
            Получите программу и расчёт стоимости для вашего отдела.
          </p>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <Input
                    placeholder="Телефон"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <Input
                    placeholder="Корпоративная почта"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg disabled:opacity-50"
                >
                  {isSubmitting ? 'Отправка...' : 'Получить программу и КП'}
                </Button>

                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 text-accent bg-accent/10 p-4 rounded-lg">
                    <Icon name="CheckCircle2" size={20} />
                    <p>Спасибо! Мы свяжемся с вами в ближайшее время.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 text-destructive bg-destructive/10 p-4 rounded-lg">
                    <Icon name="AlertCircle" size={20} />
                    <p>Ошибка отправки. Попробуйте позже или напишите на email@btbsales.ru</p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-[#1A1F2C] text-white">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Briefcase" className="text-primary" size={24} />
                <span className="text-lg font-bold">ИИ в закупках</span>
              </div>
              <p className="text-white/60 text-sm">
                Практический тренинг для закупщиков по применению искусственного интеллекта в работе.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-white/60">
                <a href="mailto:email@btbsales.ru" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Icon name="Mail" size={16} />
                  email@btbsales.ru
                </a>
                <a href="tel:+79000000000" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Icon name="Phone" size={16} />
                  +7 (900) 000-00-00
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Информация</h3>
              <div className="space-y-2 text-sm">
                <a href="#privacy" className="block text-white/60 hover:text-white transition-colors">
                  Политика конфиденциальности
                </a>
                <a href="#terms" className="block text-white/60 hover:text-white transition-colors">
                  Условия использования
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="text-center text-white/40 text-sm">
              <p className="mb-2">© 2024 ИИ в закупках. Все права защищены.</p>
              <p className="text-xs">
                Используя данный сайт, вы соглашаетесь с политикой конфиденциальности и обработкой персональных данных.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;