export interface Event {
  id: number;
  number: number;
  name: string;
  date: string;
  location: string;
  mainEvent: string;
  fights?: {
    fighter1: string;
    fighter2: string;
    result?: string;
  }[];
}

export const events: Event[] = [
  {
    id: 1,
    number: 311,
    name: 'UFC 311: Махачев vs. Царукян 2',
    date: '18 января 2025',
    location: 'Лос-Анджелес, США',
    mainEvent: 'Ислам Махачев vs. Армен Царукян',
    fights: [
      { fighter1: 'Ислам Махачев', fighter2: 'Армен Царукян' },
      { fighter1: 'Мераб Дваладзе', fighter2: 'Умар Нурмагомедов' }
    ]
  },
  {
    id: 2,
    number: 312,
    name: 'UFC 312: Дю Плесси vs. Стрикленд 2',
    date: '8 февраля 2025',
    location: 'Сидней, Австралия',
    mainEvent: 'Дрикус Дю Плесси vs. Шон Стрикленд',
    fights: [
      { fighter1: 'Дрикус Дю Плесси', fighter2: 'Шон Стрикленд' },
      { fighter1: 'Роберт Уиттакер', fighter2: 'Хамзат Чимаев' }
    ]
  },
  {
    id: 3,
    number: 313,
    name: 'UFC 313: Перейра vs. Прохазка 2',
    date: '8 марта 2025',
    location: 'Лас-Вегас, США',
    mainEvent: 'Алекс Перейра vs. Джири Прохазка',
    fights: [
      { fighter1: 'Алекс Перейра', fighter2: 'Джири Прохазка' }
    ]
  },
  {
    id: 4,
    number: 314,
    name: 'UFC 314: Джонс vs. Аспинолл',
    date: '19 апреля 2025',
    location: 'Майами, США',
    mainEvent: 'Джон Джонс vs. Том Аспинолл',
    fights: [
      { fighter1: 'Джон Джонс', fighter2: 'Том Аспинолл' }
    ]
  },
  {
    id: 5,
    number: 315,
    name: 'UFC 315: Топурия vs. Волкановский 2',
    date: '17 мая 2025',
    location: 'Париж, Франция',
    mainEvent: 'Илья Топурия vs. Александр Волкановский',
    fights: [
      { fighter1: 'Илья Топурия', fighter2: 'Александр Волкановский' },
      { fighter1: 'Сирил Ган', fighter2: 'Сергей Павлович' }
    ]
  },
  {
    id: 6,
    number: 316,
    name: 'UFC 316: Нурмагомедов vs. О\'Мэлли',
    date: '14 июня 2025',
    location: 'Лас-Вегас, США',
    mainEvent: 'Умар Нурмагомедов vs. Шон О\'Мэлли',
    fights: [
      { fighter1: 'Умар Нурмагомедов', fighter2: 'Шон О\'Мэлли' }
    ]
  },
  {
    id: 7,
    number: 317,
    name: 'UFC 317: Рахмонов vs. Эдвардс',
    date: '5 июля 2025',
    location: 'Лондон, Великобритания',
    mainEvent: 'Шавкат Рахмонов vs. Леон Эдвардс',
    fights: [
      { fighter1: 'Шавкат Рахмонов', fighter2: 'Леон Эдвардс' },
      { fighter1: 'Арнольд Аллен', fighter2: 'Брайан Ортега' }
    ]
  },
  {
    id: 8,
    number: 318,
    name: 'UFC 318: Международная неделя боёв',
    date: '2 августа 2025',
    location: 'Абу-Даби, ОАЭ',
    mainEvent: 'Хамзат Чимаев vs. Роберт Уиттакер',
    fights: [
      { fighter1: 'Магомед Анкалаев', fighter2: 'Александр Ракич' }
    ]
  },
  {
    id: 9,
    number: 319,
    name: 'UFC 319: Холлоуэй vs. Ортега 2',
    date: '20 сентября 2025',
    location: 'Нью-Йорк, США',
    mainEvent: 'Макс Холлоуэй vs. Брайан Ортега',
    fights: [
      { fighter1: 'Макс Холлоуэй', fighter2: 'Брайан Ортега' }
    ]
  },
  {
    id: 10,
    number: 320,
    name: 'UFC 320: Оливейра vs. Гейджи 2',
    date: '25 октября 2025',
    location: 'Сан-Паулу, Бразилия',
    mainEvent: 'Чарльз Оливейра vs. Джастин Гейджи',
    fights: [
      { fighter1: 'Чарльз Оливейра', fighter2: 'Джастин Гейджи' }
    ]
  },
  {
    id: 11,
    number: 309,
    name: 'UFC 309: Джонс vs. Миочич',
    date: '16 ноября 2024',
    location: 'Нью-Йорк, США',
    mainEvent: 'Джон Джонс vs. Стипе Миочич',
    fights: [
      { fighter1: 'Джон Джонс', fighter2: 'Стипе Миочич', result: 'Победа Джонса нокаутом' },
      { fighter1: 'Майкл Чендлер', fighter2: 'Чарльз Оливейра', result: 'Победа Оливейры решением' }
    ]
  },
  {
    id: 12,
    number: 308,
    name: 'UFC 308: Топурия vs. Холлоуэй',
    date: '26 октября 2024',
    location: 'Абу-Даби, ОАЭ',
    mainEvent: 'Илья Топурия vs. Макс Холлоуэй',
    fights: [
      { fighter1: 'Илья Топурия', fighter2: 'Макс Холлоуэй', result: 'Победа Топурии нокаутом' },
      { fighter1: 'Роберт Уиттакер', fighter2: 'Хамзат Чимаев', result: 'Победа Чимаева сабмишеном' }
    ]
  },
  {
    id: 13,
    number: 307,
    name: 'UFC 307: Перейра vs. Рунтри',
    date: '5 октября 2024',
    location: 'Солт-Лейк-Сити, США',
    mainEvent: 'Алекс Перейра vs. Халил Рунтри',
    fights: [
      { fighter1: 'Алекс Перейра', fighter2: 'Халил Рунтри', result: 'Победа Перейры нокаутом' }
    ]
  },
  {
    id: 14,
    number: 306,
    name: 'UFC 306: О\'Мэлли vs. Дваладзе',
    date: '14 сентября 2024',
    location: 'Лас-Вегас, США',
    mainEvent: 'Шон О\'Мэлли vs. Мераб Дваладзе',
    fights: [
      { fighter1: 'Шон О\'Мэлли', fighter2: 'Мераб Дваладзе', result: 'Победа Дваладзе решением' }
    ]
  },
  {
    id: 15,
    number: 305,
    name: 'UFC 305: Дю Плесси vs. Адесанья',
    date: '17 августа 2024',
    location: 'Перт, Австралия',
    mainEvent: 'Дрикус Дю Плесси vs. Исраэль Адесанья',
    fights: [
      { fighter1: 'Дрикус Дю Плесси', fighter2: 'Исраэль Адесанья', result: 'Победа Дю Плесси сабмишеном' }
    ]
  }
];
