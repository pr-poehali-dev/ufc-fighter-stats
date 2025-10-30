import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Fighter {
  id: number;
  name: string;
  nickname: string;
  weightClass: string;
  record: string;
  wins: number;
  losses: number;
  draws: number;
  nationality: string;
  rank?: number;
}

interface Event {
  id: number;
  number: number;
  name: string;
  date: string;
  location: string;
  mainEvent: string;
}

const mockFighters: Fighter[] = [
  {
    id: 1,
    name: 'Джон Джонс',
    nickname: 'Bones',
    weightClass: 'Тяжёлый вес',
    record: '28-1-0',
    wins: 28,
    losses: 1,
    draws: 0,
    nationality: '🇺🇸 США',
    rank: 1
  },
  {
    id: 2,
    name: 'Том Аспинолл',
    nickname: 'Honey Badger',
    weightClass: 'Тяжёлый вес',
    record: '15-3-0',
    wins: 15,
    losses: 3,
    draws: 0,
    nationality: '🇬🇧 Великобритания',
    rank: 2
  },
  {
    id: 3,
    name: 'Сирил Ган',
    nickname: 'Bon Gamin',
    weightClass: 'Тяжёлый вес',
    record: '12-2-0',
    wins: 12,
    losses: 2,
    draws: 0,
    nationality: '🇫🇷 Франция',
    rank: 3
  },
  {
    id: 4,
    name: 'Александр Ракич',
    nickname: 'Rocket',
    weightClass: 'Полутяжёлый вес',
    record: '14-4-0',
    wins: 14,
    losses: 4,
    draws: 0,
    nationality: '🇦🇹 Австрия',
    rank: 1
  },
  {
    id: 5,
    name: 'Алекс Перейра',
    nickname: 'Poatan',
    weightClass: 'Полутяжёлый вес',
    record: '12-2-0',
    wins: 12,
    losses: 2,
    draws: 0,
    nationality: '🇧🇷 Бразилия',
    rank: 2
  },
  {
    id: 6,
    name: 'Магомед Анкалаев',
    nickname: '',
    weightClass: 'Полутяжёлый вес',
    record: '19-1-1',
    wins: 19,
    losses: 1,
    draws: 1,
    nationality: '🇷🇺 Россия',
    rank: 3
  },
  {
    id: 7,
    name: 'Дрикус Дю Плесси',
    nickname: 'Stillknocks',
    weightClass: 'Средний вес',
    record: '22-2-0',
    wins: 22,
    losses: 2,
    draws: 0,
    nationality: '🇿🇦 ЮАР',
    rank: 1
  },
  {
    id: 8,
    name: 'Исраэль Адесанья',
    nickname: 'The Last Stylebender',
    weightClass: 'Средний вес',
    record: '24-4-0',
    wins: 24,
    losses: 4,
    draws: 0,
    nationality: '🇳🇿 Новая Зеландия',
    rank: 2
  },
  {
    id: 9,
    name: 'Шон Стрикленд',
    nickname: 'Tarzan',
    weightClass: 'Средний вес',
    record: '29-6-0',
    wins: 29,
    losses: 6,
    draws: 0,
    nationality: '🇺🇸 США',
    rank: 3
  },
  {
    id: 10,
    name: 'Роберт Уиттакер',
    nickname: 'The Reaper',
    weightClass: 'Средний вес',
    record: '26-7-0',
    wins: 26,
    losses: 7,
    draws: 0,
    nationality: '🇦🇺 Австралия',
    rank: 4
  },
  {
    id: 11,
    name: 'Белал Мухаммад',
    nickname: 'Remember the Name',
    weightClass: 'Полусредний вес',
    record: '24-3-0',
    wins: 24,
    losses: 3,
    draws: 0,
    nationality: '🇺🇸 США',
    rank: 1
  },
  {
    id: 12,
    name: 'Леон Эдвардс',
    nickname: 'Rocky',
    weightClass: 'Полусредний вес',
    record: '22-4-0',
    wins: 22,
    losses: 4,
    draws: 0,
    nationality: '🇬🇧 Великобритания',
    rank: 2
  },
  {
    id: 13,
    name: 'Камару Усман',
    nickname: 'The Nigerian Nightmare',
    weightClass: 'Полусредний вес',
    record: '20-4-0',
    wins: 20,
    losses: 4,
    draws: 0,
    nationality: '🇳🇬 Нигерия',
    rank: 3
  },
  {
    id: 14,
    name: 'Шавкат Рахмонов',
    nickname: 'Nomad',
    weightClass: 'Полусредний вес',
    record: '18-0-0',
    wins: 18,
    losses: 0,
    draws: 0,
    nationality: '🇰🇿 Казахстан',
    rank: 4
  },
  {
    id: 15,
    name: 'Ислам Махачев',
    nickname: '',
    weightClass: 'Лёгкий вес',
    record: '26-1-0',
    wins: 26,
    losses: 1,
    draws: 0,
    nationality: '🇷🇺 Россия',
    rank: 1
  },
  {
    id: 16,
    name: 'Армен Царукян',
    nickname: 'Ahalkalakets',
    weightClass: 'Лёгкий вес',
    record: '22-4-0',
    wins: 22,
    losses: 4,
    draws: 0,
    nationality: '🇦🇲 Армения',
    rank: 2
  },
  {
    id: 17,
    name: 'Чарльз Оливейра',
    nickname: 'Do Bronx',
    weightClass: 'Лёгкий вес',
    record: '35-10-0',
    wins: 35,
    losses: 10,
    draws: 0,
    nationality: '🇧🇷 Бразилия',
    rank: 3
  },
  {
    id: 18,
    name: 'Джастин Гейджи',
    nickname: 'The Highlight',
    weightClass: 'Лёгкий вес',
    record: '25-5-0',
    wins: 25,
    losses: 5,
    draws: 0,
    nationality: '🇺🇸 США',
    rank: 4
  },
  {
    id: 19,
    name: 'Конор МакГрегор',
    nickname: 'The Notorious',
    weightClass: 'Лёгкий вес',
    record: '22-6-0',
    wins: 22,
    losses: 6,
    draws: 0,
    nationality: '🇮🇪 Ирландия',
    rank: 8
  },
  {
    id: 20,
    name: 'Илья Топурия',
    nickname: 'El Matador',
    weightClass: 'Полулёгкий вес',
    record: '16-0-0',
    wins: 16,
    losses: 0,
    draws: 0,
    nationality: '🇬🇪 Грузия',
    rank: 1
  },
  {
    id: 21,
    name: 'Александр Волкановский',
    nickname: 'The Great',
    weightClass: 'Полулёгкий вес',
    record: '26-4-0',
    wins: 26,
    losses: 4,
    draws: 0,
    nationality: '🇦🇺 Австралия',
    rank: 2
  },
  {
    id: 22,
    name: 'Макс Холлоуэй',
    nickname: 'Blessed',
    weightClass: 'Полулёгкий вес',
    record: '26-8-0',
    wins: 26,
    losses: 8,
    draws: 0,
    nationality: '🇺🇸 США',
    rank: 3
  },
  {
    id: 23,
    name: 'Брайан Ортега',
    nickname: 'T-City',
    weightClass: 'Полулёгкий вес',
    record: '16-3-0',
    wins: 16,
    losses: 3,
    draws: 0,
    nationality: '🇺🇸 США',
    rank: 4
  },
  {
    id: 24,
    name: 'Мераб Дваладзе',
    nickname: 'The Machine',
    weightClass: 'Легчайший вес',
    record: '18-4-0',
    wins: 18,
    losses: 4,
    draws: 0,
    nationality: '🇬🇪 Грузия',
    rank: 1
  },
  {
    id: 25,
    name: 'Шон О\'Мэлли',
    nickname: 'Sugar',
    weightClass: 'Легчайший вес',
    record: '18-2-0',
    wins: 18,
    losses: 2,
    draws: 0,
    nationality: '🇺🇸 США',
    rank: 2
  },
  {
    id: 26,
    name: 'Умар Нурмагомедов',
    nickname: 'Young Eagle',
    weightClass: 'Легчайший вес',
    record: '18-0-0',
    wins: 18,
    losses: 0,
    draws: 0,
    nationality: '🇷🇺 Россия',
    rank: 3
  },
  {
    id: 27,
    name: 'Кори Сэндхаген',
    nickname: 'The Sandman',
    weightClass: 'Легчайший вес',
    record: '17-5-0',
    wins: 17,
    losses: 5,
    draws: 0,
    nationality: '🇺🇸 США',
    rank: 4
  },
  {
    id: 28,
    name: 'Алекс Перес',
    nickname: '',
    weightClass: 'Наилегчайший вес',
    record: '25-8-0',
    wins: 25,
    losses: 8,
    draws: 0,
    nationality: '🇺🇸 США',
    rank: 1
  },
  {
    id: 29,
    name: 'Валентина Шевченко',
    nickname: 'Bullet',
    weightClass: 'Женский легчайший вес',
    record: '24-4-0',
    wins: 24,
    losses: 4,
    draws: 0,
    nationality: '🇰🇬 Киргизия',
    rank: 1
  },
  {
    id: 30,
    name: 'Аманда Нуньес',
    nickname: 'The Lioness',
    weightClass: 'Женский легчайший вес',
    record: '23-5-0',
    wins: 23,
    losses: 5,
    draws: 0,
    nationality: '🇧🇷 Бразилия',
    rank: 2
  },
  {
    id: 31,
    name: 'Жанг Вейли',
    nickname: 'Magnum',
    weightClass: 'Женский наилегчайший вес',
    record: '25-3-0',
    wins: 25,
    losses: 3,
    draws: 0,
    nationality: '🇨🇳 Китай',
    rank: 1
  },
  {
    id: 32,
    name: 'Роуз Намаюнас',
    nickname: 'Thug',
    weightClass: 'Женский наилегчайший вес',
    record: '13-6-0',
    wins: 13,
    losses: 6,
    draws: 0,
    nationality: '🇺🇸 США',
    rank: 2
  },
  {
    id: 33,
    name: 'Хабиб Нурмагомедов',
    nickname: 'The Eagle',
    weightClass: 'Лёгкий вес',
    record: '29-0-0',
    wins: 29,
    losses: 0,
    draws: 0,
    nationality: '🇷🇺 Россия'
  },
  {
    id: 34,
    name: 'Дастин Порье',
    nickname: 'The Diamond',
    weightClass: 'Лёгкий вес',
    record: '30-9-0',
    wins: 30,
    losses: 9,
    draws: 0,
    nationality: '🇺🇸 США',
    rank: 5
  },
  {
    id: 35,
    name: 'Майкл Чендлер',
    nickname: 'Iron',
    weightClass: 'Лёгкий вес',
    record: '23-8-0',
    wins: 23,
    losses: 8,
    draws: 0,
    nationality: '🇺🇸 США',
    rank: 6
  },
  {
    id: 36,
    name: 'Бенеил Дариуш',
    nickname: 'Benny',
    weightClass: 'Лёгкий вес',
    record: '22-6-1',
    wins: 22,
    losses: 6,
    draws: 1,
    nationality: '🇮🇷 Иран',
    rank: 7
  },
  {
    id: 37,
    name: 'Пол Крэйг',
    nickname: 'Bearjew',
    weightClass: 'Полутяжёлый вес',
    record: '17-8-1',
    wins: 17,
    losses: 8,
    draws: 1,
    nationality: '🇬🇧 Великобритания',
    rank: 8
  },
  {
    id: 38,
    name: 'Хамзат Чимаев',
    nickname: 'Borz',
    weightClass: 'Средний вес',
    record: '13-0-0',
    wins: 13,
    losses: 0,
    draws: 0,
    nationality: '🇸🇪 Швеция',
    rank: 5
  },
  {
    id: 39,
    name: 'Джек Херманссон',
    nickname: 'The Joker',
    weightClass: 'Средний вес',
    record: '24-8-0',
    wins: 24,
    losses: 8,
    draws: 0,
    nationality: '🇸🇪 Швеция',
    rank: 9
  },
  {
    id: 40,
    name: 'Колби Ковингтон',
    nickname: 'Chaos',
    weightClass: 'Полусредний вес',
    record: '17-4-0',
    wins: 17,
    losses: 4,
    draws: 0,
    nationality: '🇺🇸 США',
    rank: 5
  },
  {
    id: 41,
    name: 'Гилберт Бёрнс',
    nickname: 'Durinho',
    weightClass: 'Полусредний вес',
    record: '22-7-0',
    wins: 22,
    losses: 7,
    draws: 0,
    nationality: '🇧🇷 Бразилия',
    rank: 6
  },
  {
    id: 42,
    name: 'Стивен Томпсон',
    nickname: 'Wonderboy',
    weightClass: 'Полусредний вес',
    record: '17-7-1',
    wins: 17,
    losses: 7,
    draws: 1,
    nationality: '🇺🇸 США',
    rank: 10
  },
  {
    id: 43,
    name: 'Рафаэль Дос Аньос',
    nickname: 'RDA',
    weightClass: 'Лёгкий вес',
    record: '32-16-0',
    wins: 32,
    losses: 16,
    draws: 0,
    nationality: '🇧🇷 Бразилия',
    rank: 10
  },
  {
    id: 44,
    name: 'Дэн Хукер',
    nickname: 'The Hangman',
    weightClass: 'Лёгкий вес',
    record: '23-13-0',
    wins: 23,
    losses: 13,
    draws: 0,
    nationality: '🇳🇿 Новая Зеландия',
    rank: 12
  },
  {
    id: 45,
    name: 'Ян Блахович',
    nickname: '',
    weightClass: 'Полутяжёлый вес',
    record: '29-10-1',
    wins: 29,
    losses: 10,
    draws: 1,
    nationality: '🇵🇱 Польша',
    rank: 4
  },
  {
    id: 46,
    name: 'Джири Прохазка',
    nickname: 'BJP',
    weightClass: 'Полутяжёлый вес',
    record: '30-5-1',
    wins: 30,
    losses: 5,
    draws: 1,
    nationality: '🇨🇿 Чехия',
    rank: 5
  },
  {
    id: 47,
    name: 'Сергей Павлович',
    nickname: '',
    weightClass: 'Тяжёлый вес',
    record: '18-3-0',
    wins: 18,
    losses: 3,
    draws: 0,
    nationality: '🇷🇺 Россия',
    rank: 4
  },
  {
    id: 48,
    name: 'Кертис Блейдс',
    nickname: 'Razor',
    weightClass: 'Тяжёлый вес',
    record: '18-5-0',
    wins: 18,
    losses: 5,
    draws: 0,
    nationality: '🇺🇸 США',
    rank: 5
  },
  {
    id: 49,
    name: 'Яир Родригес',
    nickname: 'El Pantera',
    weightClass: 'Полулёгкий вес',
    record: '16-4-0',
    wins: 16,
    losses: 4,
    draws: 0,
    nationality: '🇲🇽 Мексика',
    rank: 5
  },
  {
    id: 50,
    name: 'Арнольд Аллен',
    nickname: 'Almighty',
    weightClass: 'Полулёгкий вес',
    record: '19-3-0',
    wins: 19,
    losses: 3,
    draws: 0,
    nationality: '🇬🇧 Великобритания',
    rank: 6
  }
];

const mockEvents: Event[] = [
  {
    id: 1,
    number: 311,
    name: 'UFC 311: Махачев vs. Царукян 2',
    date: '18 января 2025',
    location: 'Лос-Анджелес, США',
    mainEvent: 'Ислам Махачев vs. Армен Царукян'
  },
  {
    id: 2,
    number: 312,
    name: 'UFC 312: Дю Плесси vs. Стрикленд 2',
    date: '8 февраля 2025',
    location: 'Сидней, Австралия',
    mainEvent: 'Дрикус Дю Плесси vs. Шон Стрикленд'
  },
  {
    id: 3,
    number: 313,
    name: 'UFC 313: Перейра vs. Прохазка 2',
    date: '8 марта 2025',
    location: 'Лас-Вегас, США',
    mainEvent: 'Алекс Перейра vs. Джири Прохазка'
  },
  {
    id: 4,
    number: 314,
    name: 'UFC 314: Джонс vs. Аспинолл',
    date: '19 апреля 2025',
    location: 'Майами, США',
    mainEvent: 'Джон Джонс vs. Том Аспинолл'
  },
  {
    id: 5,
    number: 315,
    name: 'UFC 315: Топурия vs. Волкановский 2',
    date: '17 мая 2025',
    location: 'Париж, Франция',
    mainEvent: 'Илья Топурия vs. Александр Волкановский'
  },
  {
    id: 6,
    number: 316,
    name: 'UFC 316: Нурмагомедов vs. О\'Мэлли',
    date: '14 июня 2025',
    location: 'Лас-Вегас, США',
    mainEvent: 'Умар Нурмагомедов vs. Шон О\'Мэлли'
  },
  {
    id: 7,
    number: 317,
    name: 'UFC 317: Рахмонов vs. Эдвардс',
    date: '5 июля 2025',
    location: 'Лондон, Великобритания',
    mainEvent: 'Шавкат Рахмонов vs. Леон Эдвардс'
  },
  {
    id: 8,
    number: 318,
    name: 'UFC 318: Международная неделя боёв',
    date: '2 августа 2025',
    location: 'Абу-Даби, ОАЭ',
    mainEvent: 'Чимаев vs. Уиттакер'
  },
  {
    id: 9,
    number: 319,
    name: 'UFC 319: Холлоуэй vs. Ортега 2',
    date: '20 сентября 2025',
    location: 'Нью-Йорк, США',
    mainEvent: 'Макс Холлоуэй vs. Брайан Ортега'
  },
  {
    id: 10,
    number: 320,
    name: 'UFC 320: Оливейра vs. Гейджи 2',
    date: '25 октября 2025',
    location: 'Сан-Паулу, Бразилия',
    mainEvent: 'Чарльз Оливейра vs. Джастин Гейджи'
  },
  {
    id: 11,
    number: 309,
    name: 'UFC 309: Джонс vs. Миочич',
    date: '16 ноября 2024',
    location: 'Нью-Йорк, США',
    mainEvent: 'Джон Джонс vs. Стипе Миочич'
  },
  {
    id: 12,
    number: 308,
    name: 'UFC 308: Топурия vs. Холлоуэй',
    date: '26 октября 2024',
    location: 'Абу-Даби, ОАЭ',
    mainEvent: 'Илья Топурия vs. Макс Холлоуэй'
  },
  {
    id: 13,
    number: 307,
    name: 'UFC 307: Перейра vs. Рунтри',
    date: '5 октября 2024',
    location: 'Солт-Лейк-Сити, США',
    mainEvent: 'Алекс Перейра vs. Халил Рунтри'
  },
  {
    id: 14,
    number: 306,
    name: 'UFC 306: О\'Мэлли vs. Дваладзе',
    date: '14 сентября 2024',
    location: 'Лас-Вегас, США',
    mainEvent: 'Шон О\'Мэлли vs. Мераб Дваладзе'
  },
  {
    id: 15,
    number: 305,
    name: 'UFC 305: Дю Плесси vs. Адесанья',
    date: '17 августа 2024',
    location: 'Перт, Австралия',
    mainEvent: 'Дрикус Дю Плесси vs. Исраэль Адесанья'
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState('fighters');

  const filteredFighters = mockFighters.filter(fighter =>
    fighter.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    fighter.nickname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredEvents = mockEvents.filter(event =>
    event.number.toString().includes(searchQuery) ||
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-background border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
              UFC <span className="text-primary">DATABASE</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Полная база данных бойцов, событий и статистики UFC
            </p>
            
            <div className="max-w-2xl mx-auto relative">
              <Icon 
                name="Search" 
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" 
                size={20} 
              />
              <Input
                type="text"
                placeholder="Поиск по имени бойца или номеру события..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-card border-border"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="fighters" className="w-full" onValueChange={setSelectedTab}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="fighters" className="flex items-center gap-2">
              <Icon name="User" size={16} />
              Бойцы
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Icon name="Calendar" size={16} />
              События
            </TabsTrigger>
            <TabsTrigger value="rankings" className="flex items-center gap-2">
              <Icon name="Trophy" size={16} />
              Рейтинги
            </TabsTrigger>
          </TabsList>

          <TabsContent value="fighters" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFighters.map((fighter, index) => (
                <Card 
                  key={fighter.id} 
                  className="hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                          {fighter.name}
                        </CardTitle>
                        <CardDescription className="text-accent font-medium">
                          "{fighter.nickname}"
                        </CardDescription>
                      </div>
                      {fighter.rank && (
                        <Badge variant="default" className="text-lg px-3 py-1">
                          #{fighter.rank}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Flag" size={14} />
                      {fighter.nationality}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Категория:</span>
                        <Badge variant="secondary">{fighter.weightClass}</Badge>
                      </div>
                      
                      <div className="pt-3 border-t border-border">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-green-500">{fighter.wins}</div>
                            <div className="text-xs text-muted-foreground">Победы</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-red-500">{fighter.losses}</div>
                            <div className="text-xs text-muted-foreground">Поражения</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-yellow-500">{fighter.draws}</div>
                            <div className="text-xs text-muted-foreground">Ничьи</div>
                          </div>
                        </div>
                        <div className="mt-3 text-center">
                          <span className="text-lg font-bold text-primary">{fighter.record}</span>
                          <span className="text-muted-foreground text-sm ml-2">общий рекорд</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {filteredEvents.map((event, index) => (
                <Card 
                  key={event.id}
                  className="hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="default" className="text-xl px-4 py-1 font-bold">
                        UFC {event.number}
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        {event.date}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{event.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Icon name="MapPin" size={14} />
                      {event.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                      <div className="text-xs text-muted-foreground mb-1">ГЛАВНЫЙ БОЙ</div>
                      <div className="text-lg font-bold">{event.mainEvent}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rankings" className="animate-fade-in">
            <div className="max-w-4xl mx-auto space-y-6">
              {['Тяжёлый вес', 'Лёгкий вес', 'Средний вес', 'Полулёгкий вес', 'Полусредний вес'].map((weightClass, index) => {
                const fighters = mockFighters.filter(f => f.weightClass === weightClass).sort((a, b) => (a.rank || 999) - (b.rank || 999));
                
                if (fighters.length === 0) return null;
                
                return (
                  <Card key={weightClass} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="Award" className="text-primary" size={24} />
                        {weightClass}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {fighters.map((fighter, idx) => (
                          <div 
                            key={fighter.id}
                            className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-lg">
                                {fighter.rank}
                              </div>
                              <div>
                                <div className="font-bold text-lg">{fighter.name}</div>
                                <div className="text-sm text-muted-foreground">{fighter.nationality}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-primary">{fighter.record}</div>
                              <div className="text-xs text-muted-foreground">
                                {fighter.wins}П-{fighter.losses}Пр
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <footer className="border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>UFC Database — полная статистика и информация о бойцах UFC</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;