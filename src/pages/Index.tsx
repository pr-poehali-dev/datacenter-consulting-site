import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-gray-900">
                DataCenter Expert
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-gray-900 transition-colors">
                Главная
              </a>
              <a href="#expertise" className="text-gray-600 hover:text-gray-900 transition-colors">
                Экспертиза и консалтинг
              </a>
              <a href="#economics" className="text-gray-600 hover:text-gray-900 transition-colors">
                Экономика ЦОД
              </a>
              <a href="#marketing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Маркетинговое сопровождение
              </a>
            </div>
            <Button className="bg-gray-900 hover:bg-gray-800">
              Связаться с нами
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Экспертиза и консалтинг
              <br />
              <span className="text-gray-600">центров обработки данных</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Профессиональные решения для инвесторов, директоров и ИТ-руководителей. 
              Комплексный подход к анализу и оптимизации ЦОД.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
                Заказать консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300">
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Экспертиза и консалтинг
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Предоставляем профессиональные услуги экспертизы для всех аспектов работы ЦОД
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Briefcase" size={24} className="text-gray-600" />
                </div>
                <CardTitle className="text-xl">Экспертиза проектных решений</CardTitle>
                <CardDescription>
                  Комплексная оценка архитектурных и технических решений ЦОД
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" size={24} className="text-gray-600" />
                </div>
                <CardTitle className="text-xl">Экспертиза инвестиционных решений</CardTitle>
                <CardDescription>
                  Анализ экономической эффективности и ROI проектов ЦОД
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-gray-600" />
                </div>
                <CardTitle className="text-xl">Независимый аудит ЦОД</CardTitle>
                <CardDescription>
                  Объективная оценка текущего состояния и соответствия стандартам
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MapPin" size={24} className="text-gray-600" />
                </div>
                <CardTitle className="text-xl">Земельно-правовая экспертиза</CardTitle>
                <CardDescription>
                  Анализ правовых аспектов размещения и эксплуатации ЦОД
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Target" size={24} className="text-gray-600" />
                </div>
                <CardTitle className="text-xl">Экспертиза маркетинговых стратегий</CardTitle>
                <CardDescription>
                  Оценка и разработка стратегий продвижения услуг ЦОД
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Economics Section */}
      <section id="economics" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Экономика ЦОД
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Комплексный анализ экономических показателей и оптимизация затрат
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Ключевые показатели эффективности
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">CAPEX Анализ</h4>
                    <p className="text-gray-600">Оценка капитальных затрат на строительство и оборудование</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">OPEX Оптимизация</h4>
                    <p className="text-gray-600">Снижение операционных расходов и повышение эффективности</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">ROI Прогнозирование</h4>
                    <p className="text-gray-600">Расчет окупаемости инвестиций и финансовое моделирование</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Структура затрат ЦОД</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Энергопотребление</span>
                    <span className="text-sm text-gray-500">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gray-900 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Персонал</span>
                    <span className="text-sm text-gray-500">25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gray-700 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Оборудование</span>
                    <span className="text-sm text-gray-500">20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gray-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Прочие расходы</span>
                    <span className="text-sm text-gray-500">10%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gray-400 h-2 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Section */}
      <section id="marketing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Маркетинговое сопровождение
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Стратегическое планирование и продвижение услуг ЦОД на рынке
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Наши услуги
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                  <span className="text-gray-700">Анализ рынка и конкурентов</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                  <span className="text-gray-700">Разработка маркетинговой стратегии</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                  <span className="text-gray-700">Позиционирование и брендинг</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                  <span className="text-gray-700">Цифровой маркетинг</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                  <span className="text-gray-700">PR и медиа-сопровождение</span>
                </div>
              </div>
            </div>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle>Получить консультацию</CardTitle>
                <CardDescription>
                  Оставьте заявку и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="company">Компания</Label>
                    <Input id="company" placeholder="Название компании" />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea id="message" placeholder="Расскажите о ваших потребностях" />
                  </div>
                  <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">DataCenter Expert</h3>
              <p className="text-gray-400">
                Профессиональная экспертиза и консалтинг центров обработки данных
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Экспертиза проектов</li>
                <li>Инвестиционный анализ</li>
                <li>Независимый аудит</li>
                <li>Маркетинг</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Команда</li>
                <li>Карьера</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@datacenter-expert.ru</p>
                <p>Москва, Россия</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DataCenter Expert. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}