import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };
  const examDates = [
    { date: "4", subject: "Математика (ЕГЭ)", month: "сент" },
    { date: "11", subject: "Русский язык (ЕГЭ)", month: "сент" },
    { date: "18", subject: "Информатика (ЕГЭ)", month: "сент" },
    { date: "25", subject: "Архитектура", month: "сент" }
  ];

  const popularServices = [
    {
      title: "Список экзаменов по специальностям",
      description: "Актуальная информация по конкурсам и проходным баллам",
      action: "Открыть",
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Сроки приёма документов", 
      description: "Календарь важных дат для поступающих",
      action: "Календарь",
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Общежития и стоимость",
      description: "Информация о местах проживания", 
      action: "Смотреть",
      color: "bg-pink-50 border-pink-200"
    },
    {
      title: "Стипендии и гранты",
      description: "Возможности финансовой поддержки",
      action: "Подробнее", 
      color: "bg-green-50 border-green-200"
    }
  ];

  const quickLinks = [
    { title: "Официальный сайт УРФУ", description: "Главная страница университета", action: "Перейти", url: "https://urfu.ru/ru/?main" },
    { title: "Конкурсные списки", description: "Актуальная информация по конкурсам и проходным баллам", action: "Перейти", url: "https://urfu.ru/ru/applicant/lists/" },
    { title: "Памятка абитуриента (Минобрнауки)", description: "Официальный PDF-документ с правилами для поступающих", action: "Скачать", url: "https://urfu.ru/fileadmin/user_upload/urfu.ru/documents/applicant/2025/admission/Pamjatka_celevika_ot_Minobrnauki_RF.pdf" },
    { title: "Памятка от студентов", description: "Советы и помощь от студентов для абитуриентов", action: "Перейти", url: "https://info-urfu.tilda.ws/" },
    { title: "Документы для абитуриентов", description: "Необходимые документы и инструкции по подаче", action: "Перейти", url: "https://urfu.ru/ru/applicant/docs-/" },
    { title: "Документы о поступлении", description: "Правила и регламенты для абитуриентов", action: "Перейти", url: "https://urfu.ru/ru/applicant/docs-abiturient/" },
    { title: "Telegram: ИРИТ-РТФ", description: "Актуальная информация о поступлении в университете", action: "Открыть", url: "https://t.me/iritrtf_urfu" },
    { title: "Telegram-бот URFU Assistant", description: "Бот для ответов на вопросы абитуриентов", action: "Открыть", url: "https://t.me/urfu_assistant_bot" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4 cursor-pointer" onClick={() => window.open('https://urfu.ru/ru/?main', '_blank', 'noopener,noreferrer')}>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                У
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Сервисы УРФУ</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">Всё самое нужное</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              {["Экзамены", "Поступление", "Программы", "Финансы", "Общежития", "Студжизнь", "Контакты"].map((item) => (
                <button key={item} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  {item}
                </button>
              ))}
            </nav>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Icon name={isDark ? "Sun" : "Moon"} size={16} />
              </Button>
              <Button variant="outline" size="sm" className="md:hidden">
                <Icon name="Menu" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 py-12 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                Абитуриентам и студентам УРФУ — просто и по делу
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 transition-colors">
                Экзамены, сроки, программы, общежития и стипендии — в одном месте. 
                Выберите популярный сервис и вперёд.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <Badge variant="outline" className="px-4 py-2">
                  Бакалавриат
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  Магистратура
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  Иностранным гражданам
                </Badge>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white">
                  Проверить даты экзаменов
                </Button>
                <Button size="lg" variant="outline">
                  Как подать документы
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                    <Icon name="Calendar" size={20} className="text-blue-600 dark:text-blue-400" />
                    Популярно сейчас
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {popularServices.map((service, index) => (
                    <div key={index} className={`p-4 rounded-lg ${service.color} flex items-center justify-between`}>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{service.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{service.description}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        {service.action}
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Schedule */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="dark:bg-gray-800 dark:border-gray-700 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 dark:text-white">1. Вступительные экзамены и сроки</CardTitle>
              <CardDescription className="dark:text-gray-300">
                Перечень экзаменов, даты и дополнительные испытания
              </CardDescription>
              <div className="text-sm text-gray-500 dark:text-gray-400">Обновлено: 4 сент. 2025</div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Специальности</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { name: "Прикладная математика и информатика", price: "от 180 000/год", description: "Очная/Заочная/Дистанционная" },
                      { name: "Информатика и вычислительная техника", price: "от 190 000/год" },
                      { name: "Архитектура и градостроительство", price: "от 180 000/год" },
                      { name: "Дизайн", price: "от 180 000/год" },
                      { name: "Экономика", price: "от 180 000/год" }
                    ].map((spec, index) => (
                      <Card key={index} className="p-4 dark:bg-gray-700 dark:border-gray-600 transition-colors">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-medium text-gray-900 dark:text-white">{spec.name}</h5>
                            {spec.description && <p className="text-sm text-gray-600 dark:text-gray-300">{spec.description}</p>}
                            <p className="text-sm text-green-600 dark:text-green-400 font-medium">{spec.price}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Даты экзаменов</h4>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-3">Нажмите на дату для деталей</div>
                    <div className="grid grid-cols-7 gap-2 text-center text-sm">
                      {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day) => (
                        <div key={day} className="p-2 font-medium text-gray-500 dark:text-gray-400">{day}</div>
                      ))}
                      {Array.from({length: 30}, (_, i) => {
                        const date = i + 1;
                        const hasExam = examDates.some(exam => parseInt(exam.date) === date);
                        return (
                          <Button
                            key={date}
                            variant={hasExam ? "default" : "ghost"}
                            size="sm"
                            className={`h-10 w-10 p-0 ${hasExam ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                          >
                            {date}
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Краткая информация</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Здесь отображается список экзаменов по выбранной специальности (ЕГЭ, внутренние вступительные испытания
                      — ВВИ) и информация о дополнительных испытаниях творческой направленности (собеседование, портфолио)
                    </p>
                    
                    <div className="space-y-2">
                      <h5 className="font-medium text-gray-900 dark:text-white">Прикладная математика и информатика</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Экзамены:</p>
                      <ul className="text-sm text-gray-700 dark:text-gray-300 ml-4 space-y-1">
                        <li>• Математика (ЕГЭ)</li>
                        <li>• Русский язык (ЕГЭ)</li>
                        <li>• Информатика (ЕГЭ)</li>
                      </ul>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Очная/Заочная/Дистанционная. Стоимость от 190 000/год</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">Полезные ссылки</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 transition-colors">Быстрый доступ к важной информации</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <Card key={index} className="hover:shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-lg transition-all">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-gray-900 dark:text-white">{link.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 dark:text-gray-300">
                    {link.description}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(link.url, '_blank', 'noopener,noreferrer')}
                  >
                    {link.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;