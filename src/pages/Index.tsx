import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { fighters, Fighter } from '@/data/fighters';
import { events, Event } from '@/data/events';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState('fighters');
  const [selectedFighter, setSelectedFighter] = useState<Fighter | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const isNumberSearch = /^\d+$/.test(searchQuery.trim());

  const filteredFighters = fighters.filter(fighter =>
    fighter.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    fighter.nickname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    fighter.nationality.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredEvents = events.filter(event => {
    if (isNumberSearch) {
      return event.number.toString().includes(searchQuery);
    }
    return event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.mainEvent.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-red-950 to-slate-950">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-2 flex items-center justify-center gap-3">
            <Icon name="Flame" className="text-red-500" size={48} />
            UFC СТАТИСТИКА
          </h1>
          <p className="text-slate-300 text-lg">Полная база данных бойцов и событий UFC</p>
        </div>

        <div className="mb-6 max-w-2xl mx-auto">
          <div className="relative">
            <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <Input
              type="text"
              placeholder="Введите имя бойца или номер турнира (например: Хабиб или 308)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 h-12 text-lg"
            />
          </div>
          <p className="text-slate-400 text-sm mt-2 text-center">
            {isNumberSearch ? '🔢 Поиск по номеру турнира' : '👤 Поиск по имени бойца'}
          </p>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-slate-900/50 mb-8">
            <TabsTrigger value="fighters" className="data-[state=active]:bg-red-600">
              <Icon name="Users" size={18} className="mr-2" />
              Бойцы ({filteredFighters.length})
            </TabsTrigger>
            <TabsTrigger value="events" className="data-[state=active]:bg-red-600">
              <Icon name="Calendar" size={18} className="mr-2" />
              Турниры ({filteredEvents.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="fighters">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredFighters.map((fighter) => (
                <Card 
                  key={fighter.id} 
                  className="bg-slate-900/80 border-slate-700 hover:border-red-500 transition-all cursor-pointer hover:scale-105"
                  onClick={() => setSelectedFighter(fighter)}
                >
                  <CardHeader className="pb-2">
                    {fighter.image && (
                      <div className="w-full h-48 mb-3 rounded-lg overflow-hidden bg-slate-800">
                        <img 
                          src={fighter.image} 
                          alt={fighter.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-white text-xl">{fighter.name}</CardTitle>
                        {fighter.nickname && (
                          <CardDescription className="text-red-400 italic text-sm mt-1">
                            "{fighter.nickname}"
                          </CardDescription>
                        )}
                      </div>
                      {fighter.rank && (
                        <Badge className="bg-red-600 text-white text-lg px-3 py-1">
                          #{fighter.rank}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Рекорд:</span>
                        <span className="text-white font-bold text-lg">{fighter.record}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Категория:</span>
                        <Badge variant="outline" className="text-slate-300 border-slate-600">
                          {fighter.weightClass}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Страна:</span>
                        <span className="text-white">{fighter.nationality}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-700">
                        <div className="text-center">
                          <div className="text-green-500 font-bold text-lg">{fighter.wins}</div>
                          <div className="text-slate-500 text-xs">Победы</div>
                        </div>
                        <div className="text-center">
                          <div className="text-red-500 font-bold text-lg">{fighter.losses}</div>
                          <div className="text-slate-500 text-xs">Поражения</div>
                        </div>
                        <div className="text-center">
                          <div className="text-slate-400 font-bold text-lg">{fighter.draws}</div>
                          <div className="text-slate-500 text-xs">Ничьи</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredEvents.map((event) => (
                <Card 
                  key={event.id} 
                  className="bg-slate-900/80 border-slate-700 hover:border-red-500 transition-all cursor-pointer"
                  onClick={() => setSelectedEvent(event)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-red-600 text-white text-base px-3 py-1">
                            UFC {event.number}
                          </Badge>
                          <Icon name="Calendar" size={16} className="text-slate-400" />
                          <span className="text-slate-400 text-sm">{event.date}</span>
                        </div>
                        <CardTitle className="text-white text-xl mb-2">{event.name}</CardTitle>
                        <div className="flex items-center gap-2 text-slate-300">
                          <Icon name="MapPin" size={16} className="text-red-500" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-slate-400 text-xs mb-2">ГЛАВНЫЙ БОЙ</div>
                      <div className="text-white font-bold text-lg">{event.mainEvent}</div>
                    </div>
                    {event.fights && event.fights.length > 1 && (
                      <div className="mt-3 text-slate-400 text-sm">
                        + ещё {event.fights.length - 1} бой(ёв)
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Dialog open={!!selectedFighter} onOpenChange={() => setSelectedFighter(null)}>
          <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
            {selectedFighter && (
              <>
                <DialogHeader>
                  {selectedFighter.image && (
                    <div className="w-full h-64 mb-4 rounded-lg overflow-hidden bg-slate-800">
                      <img 
                        src={selectedFighter.image} 
                        alt={selectedFighter.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex items-start justify-between">
                    <div>
                      <DialogTitle className="text-3xl text-white mb-2">
                        {selectedFighter.name}
                      </DialogTitle>
                      {selectedFighter.nickname && (
                        <p className="text-red-400 italic text-xl">"{selectedFighter.nickname}"</p>
                      )}
                    </div>
                    {selectedFighter.rank && (
                      <Badge className="bg-red-600 text-white text-2xl px-4 py-2">
                        #{selectedFighter.rank}
                      </Badge>
                    )}
                  </div>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-slate-400 text-sm mb-1">Рекорд</div>
                      <div className="text-white font-bold text-2xl">{selectedFighter.record}</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-slate-400 text-sm mb-1">Весовая категория</div>
                      <div className="text-white font-bold text-lg">{selectedFighter.weightClass}</div>
                    </div>
                  </div>

                  {selectedFighter.bio && (
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-slate-400 text-sm mb-2">Биография</div>
                      <p className="text-slate-200 leading-relaxed">{selectedFighter.bio}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selectedFighter.age && (
                      <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                        <div className="text-slate-400 text-xs mb-1">Возраст</div>
                        <div className="text-white font-bold">{selectedFighter.age} лет</div>
                      </div>
                    )}
                    {selectedFighter.height && (
                      <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                        <div className="text-slate-400 text-xs mb-1">Рост</div>
                        <div className="text-white font-bold">{selectedFighter.height}</div>
                      </div>
                    )}
                    {selectedFighter.reach && (
                      <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                        <div className="text-slate-400 text-xs mb-1">Размах рук</div>
                        <div className="text-white font-bold">{selectedFighter.reach}</div>
                      </div>
                    )}
                    {selectedFighter.stance && (
                      <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                        <div className="text-slate-400 text-xs mb-1">Стойка</div>
                        <div className="text-white font-bold">{selectedFighter.stance}</div>
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="text-slate-400 text-sm mb-3">Статистика побед</div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-green-900/30 rounded-lg p-4 text-center border border-green-700">
                        <Icon name="Zap" className="mx-auto mb-2 text-green-500" size={24} />
                        <div className="text-green-400 font-bold text-2xl">{selectedFighter.koWins || 0}</div>
                        <div className="text-slate-400 text-xs mt-1">Нокауты</div>
                      </div>
                      <div className="bg-blue-900/30 rounded-lg p-4 text-center border border-blue-700">
                        <Icon name="Shield" className="mx-auto mb-2 text-blue-500" size={24} />
                        <div className="text-blue-400 font-bold text-2xl">{selectedFighter.subWins || 0}</div>
                        <div className="text-slate-400 text-xs mt-1">Сабмишены</div>
                      </div>
                      <div className="bg-purple-900/30 rounded-lg p-4 text-center border border-purple-700">
                        <Icon name="Award" className="mx-auto mb-2 text-purple-500" size={24} />
                        <div className="text-purple-400 font-bold text-2xl">{selectedFighter.decWins || 0}</div>
                        <div className="text-slate-400 text-xs mt-1">Решения</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-slate-800/50 rounded-lg p-4">
                    <span className="text-slate-400">Страна</span>
                    <span className="text-white font-bold text-xl">{selectedFighter.nationality}</span>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
          <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
            {selectedEvent && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-red-600 text-white text-lg px-4 py-2">
                      UFC {selectedEvent.number}
                    </Badge>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Icon name="Calendar" size={18} />
                      <span>{selectedEvent.date}</span>
                    </div>
                  </div>
                  <DialogTitle className="text-2xl text-white">{selectedEvent.name}</DialogTitle>
                  <div className="flex items-center gap-2 text-slate-300 mt-2">
                    <Icon name="MapPin" size={18} className="text-red-500" />
                    <span>{selectedEvent.location}</span>
                  </div>
                </DialogHeader>

                <div className="space-y-4 mt-4">
                  <div className="bg-gradient-to-r from-red-900/50 to-slate-800/50 rounded-lg p-4 border border-red-700">
                    <div className="text-red-400 text-xs mb-2 font-bold">ГЛАВНЫЙ БОЙ</div>
                    <div className="text-white font-bold text-xl">{selectedEvent.mainEvent}</div>
                  </div>

                  {selectedEvent.fights && selectedEvent.fights.length > 0 && (
                    <div>
                      <div className="text-slate-400 text-sm mb-3 font-bold">ВСЕ БОИ КАРДА</div>
                      <div className="space-y-3">
                        {selectedEvent.fights.map((fight, idx) => (
                          <div key={idx} className="bg-slate-800/50 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-white font-semibold">{fight.fighter1}</span>
                              <span className="text-slate-500 mx-2">vs</span>
                              <span className="text-white font-semibold">{fight.fighter2}</span>
                            </div>
                            {fight.result && (
                              <div className="text-green-400 text-sm mt-2 text-center">
                                ✓ {fight.result}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Index;