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
    name: 'Хабиб Нурмагомедов',
    nickname: 'The Eagle',
    weightClass: 'Лёгкий вес',
    record: '29-0-0',
    wins: 29,
    losses: 0,
    draws: 0,
    nationality: '🇷🇺 Россия',
    rank: 1
  },
  {
    id: 2,
    name: 'Конор МакГрегор',
    nickname: 'The Notorious',
    weightClass: 'Лёгкий вес',
    record: '22-6-0',
    wins: 22,
    losses: 6,
    draws: 0,
    nationality: '🇮🇪 Ирландия',
    rank: 2
  },
  {
    id: 3,
    name: 'Джон Джонс',
    nickname: 'Bones',
    weightClass: 'Тяжёлый вес',
    record: '27-1-0',
    wins: 27,
    losses: 1,
    draws: 0,
    nationality: '🇺🇸 США',
    rank: 1
  },
  {
    id: 4,
    name: 'Исраэль Адесанья',
    nickname: 'The Last Stylebender',
    weightClass: 'Средний вес',
    record: '24-3-0',
    wins: 24,
    losses: 3,
    draws: 0,
    nationality: '🇳🇿 Новая Зеландия',
    rank: 1
  },
  {
    id: 5,
    name: 'Александр Волкановский',
    nickname: 'The Great',
    weightClass: 'Полулёгкий вес',
    record: '26-3-0',
    wins: 26,
    losses: 3,
    draws: 0,
    nationality: '🇦🇺 Австралия',
    rank: 1
  },
  {
    id: 6,
    name: 'Камару Усман',
    nickname: 'The Nigerian Nightmare',
    weightClass: 'Полусредний вес',
    record: '20-3-0',
    wins: 20,
    losses: 3,
    draws: 0,
    nationality: '🇳🇬 Нигерия',
    rank: 2
  }
];

const mockEvents: Event[] = [
  {
    id: 1,
    number: 308,
    name: 'UFC 308: Топурия vs. Холлоуэй',
    date: '26 октября 2024',
    location: 'Абу-Даби, ОАЭ',
    mainEvent: 'Илья Топурия vs. Макс Холлоуэй'
  },
  {
    id: 2,
    number: 307,
    name: 'UFC 307: Перейра vs. Рунтри',
    date: '5 октября 2024',
    location: 'Солт-Лейк-Сити, США',
    mainEvent: 'Алекс Перейра vs. Халил Рунтри'
  },
  {
    id: 3,
    number: 306,
    name: 'UFC 306: О\'Мэлли vs. Дваладзе',
    date: '14 сентября 2024',
    location: 'Лас-Вегас, США',
    mainEvent: 'Шон О\'Мэлли vs. Мераб Дваладзе'
  },
  {
    id: 4,
    number: 309,
    name: 'UFC 309: Джонс vs. Миочич',
    date: '16 ноября 2024',
    location: 'Нью-Йорк, США',
    mainEvent: 'Джон Джонс vs. Стипе Миочич'
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
