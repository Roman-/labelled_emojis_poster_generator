const wordMap = {
  "муравей":["🐜"],  "обезьяна":["🐒"], "рисунок":["🎨"], "топор":["🪓"],
  "сумка":["👜","🛍️"], "летучая мышь":["🦇"], "кровать":["🛌"], "пчела":["🐝"],
  "жук":["🐛"], "автобус":["🚍"], "кепка":["🧢"], "машина":["🚗"],
  "кот":["🐈"], "корова":["🐄"], "собака":["🐕"], "яйцо":["🥚"],
  "веер":["🪭"], "муха":["🪰"], "туман":["🌁"], "лиса":["🦊"],
  "самоцвет":["💎"], "шляпа":["👒"], "лед":["🧊"], "банка":["🫙"],
  "ключ":["🔑"], "бревно":["🪵"], "карта":["🗺"], "сова":["🦉"],
  "ручка":["🖊","✒️"], "пирог":["🥧"], "свинья":["🐖"], "булавка":["📍"],
  "баран":["🐏"], "крыса":["🐀"], "лодка":["🚣"], "пила":["🪚"],
  "солнце":["☀️"], "лыжи":["🎿"], "бирка":["🏷"], "чай":["🍵"],
  "фургон":["🚐"], "паутина":["🕸"], "батат":["🍠"], "банк":["🏦"],
  "ванна":["🛀"], "медведь":["🐻"], "колокол":["🛎"], "птица":["🐦"],
  "болт":["🔩"], "кость":["🦴"], "книга":["📕"], "сапог":["🥾"],
  "миска":["🥣"], "лампочка":["💡"], "торт":["🍰","🎂"],
  "карточка":["💳"], "тележка":["🛒"], "город":["🏙"], "пальто":["🧥"],
  "монета":["🪙"], "расческа":["🪮"], "кукуруза":["🌽"], "краб":["🦀"],
  "дартс":["🎯"], "дата":["📅"], "олень":["🦌"], "кубик":["🎲"],
  "динозавр":["🦖"], "диск":["💽"], "дверь":["🚪"], "голубь":["🕊"],
  "капля":["💧"], "барабан":["🪘","🥁"], "утка":["🦆"],
  "кино":["🎥","🎬"], "огонь":["🔥"], "рыба":["🐟"], "лягушка":["🐸"],
  "подарок":["🎁"], "ворота":["🥅"], "коза":["🐐"], "золото":["🥇"],
  "трава":["🌿"], "дыра":["🕳"], "крюк":["🪝"], "горн":["📯"],
  "воздушный змей":["🪁"], "узел":["🪢"], "лампа":["🪔"], "лист":["🍃"],
  "цепь":["🔗"], "лев":["🦁"], "замок":["🔒"], "почта":["📨"],
  "торговый центр":["🏬"], "мясо":["🍖"], "заметка":["📝"],
  "молоко":["🥛"], "луна":["🌜","🎑"], "гнездо":["🪹"],
  "страница":["📃"], "пальма":["🌴"], "парк":["🏞"], "груша":["🍐"],
  "таблетка":["💊"], "сосна":["🌲"], "вилка":["🔌"], "дождь":["🌧","☔️"],
  "рис":["🍚"], "кольцо":["💍"], "камень":["🪨"], "роза":["🌹"],
  "соль":["🧂"], "сари":["🥻"], "сиденье":["💺"], "корабль":["🚢"],
  "ботинок":["👞"], "санки":["🛷"], "снег":["🌨"], "мыло":["🧼"],
  "газировка":["🥤"], "диван":["🛋"], "звезда":["🌟"], "серфинг":["🏄"],
  "лебедь":["🦢"], "плавание":["🏊"], "тако":["🌮"],
  "такси":["🚕"], "колесо":["🛞"], "трамвай":["🚊"], "дерево":["🌳"],
  "ваза":["🏺"], "жилет":["🦺"], "палочка":["🪄"],
  "волна":["🌊"], "ветер":["🌬"], "крыло":["🪽"],
  "волк":["🐺"], "червь":["🪱"], "нитки":["🧶"], "йога":["🧘"],
  "йо-йо":["🪀"], "будильник":["⏰"], "яблоко":["🍎"], "бекон":["🥓"],
  "бублик":["🥯"], "пляж":["🏖"], "фасоль":["🫘"],
  "бизон":["🦬"], "хлеб":["🍞"], "кирпич":["🧱"], "метла":["🧹"],
  "кисть":["🖌"], "верблюд":["🐫"], "конфета":["🍬"], "стул":["🪑"],
  "цыпленок":["🐤"], "часы":["🕰"], "коралл":["🪸"], "корона":["👑"],
  "дискотека":["🪩"], "куклы":["🎎"], "пончик":["🍩"], "платье":["👗"],
  "орел":["🦅"], "земля":["🌏"], "паром":["⛴"],
  "фри":["🍟"], "топливо":["⛽️"], "шестеренка":["⚙️"], "гусь":["🪿"],
  "бегемот":["🦛"], "мед":["🍯"], "лошадь":["🐎"],
  "сок":["🧃"], "коала":["🐨"], "лимон":["🍋"], "лама":["🦙"],
  "лотос":["🪷"], "манго":["🥭"], "клен":["🍁"], "медаль":["🎖"],
  "дыня":["🍈"], "деньги":["💸"], "лось":["🫎"], "мышь":["🐁"],
  "музыка":["🎼"], "ночь":["🌃"], "оливка":["🫒"], "лук":["🧅"],
  "выдра":["🦦"], "панда":["🐼"], "штаны":["👖"], "бумага":["📄"],
  "вечеринка":["🎉"], "паста":["🍝"], "персик":["🍑"], "телефон":["📞"],
  "пианино":["🎹"], "пицца":["🍕"], "растение":["🪴"], "тарелка":["🍽"],
  "кошелёк":["👝"], "сумочка":["👛"], "радио":["📻"], "бритва":["🪒"],
  "носорог":["🦏"], "таракан":["🪳"], "регби":["🏉"], "линейка":["📏"],
  "салат":["🥗"], "шарф":["🧣"], "акула":["🦈"], "колос":["🌾"],
  "овца":["🐑"], "ракушка":["🐚"], "рубашка":["👔"], "сирена":["🚨"],
  "скунс":["🦨"], "сон":["🛌"], "горка":["🛝"], "ленивец":["🦥"],
  "улитка":["🐌"], "змея":["🐍"], "носки":["🧦"], "ложка":["🥄"],
  "кальмар":["🦑"], "стейк":["🥩"], "магазин":["🏪"], "гроза":["⛈"],
  "солнечно":["🌤"], "суши":["🍣"], "мишка":["🧸"], "палатка":["⛺️"],
  "тигр":["🐅"], "башня":["🗼"],
  "поезд":["🚆"], "мусор":["🗑"], "грузовик":["🚚"], "тюльпан":["🌷"],
  "кит":["🐋"], "яхта":["🛥"], "зебра":["🦓"]
};
