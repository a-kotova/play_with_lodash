module.exports = {
    mainTiles: [
        {
            ruName: "Время делать подарки!",
            path: "/2019/12/02/rozygrysh-5?utm_source=main_tile&utm_medium=rozygrysh5&_ga=2.126731274.686889813.1575486217-1776173241.1573712126",
            isUnique: false,
        },
        {
            ruName: "Термосы, термокружки",
            path: "/thermosbottle?utm_source=main_tile&utm_medium=thermosbottle",
            isUnique: true
        },
        {
            ruName: "Роботы-пылесосы",
            path: "/robotcleaner?utm_source=main_tile&utm_medium=robotcleaner",
            isUnique: true
        },
        {
            ruName: "Зимние шины в Каталоге!",
            path: "/tires?season_tires%5B0%5D=winter&season_tires%5Boperation%5D=union&utm_source=main_tile&utm_medium=tires",
            isUnique: true
        },
        {
            ruName: "Смартфон за честный отзыв!",
            path: "/2019/12/02/rozygrysh-4?utm_source=main_tile&utm_medium=rozygrysh4&_ga=2.127913738.686889813.1575486217-1776173241.1573712126",
            isUnique: false
        },
        {
            ruName: "Купляйце тэлевiзары Samsung",
            path: "/article/131295-poleznye-stati/606699-qled-2019-realnyy-mir-v-razreshenii-8k",
            isUnique: false
        }
    ],
    sections: {
        electronics: {
            id: 1,
            ruName: "Электроника",
            tiles: [
                {
                    ruName: "Домашние колонки с WiFi",
                    path: "/wspeaker?ws_type%5B0%5D=multiroom&ws_type%5Boperation%5D=union&utm_source=el_title&utm_medium=netpl_inetradio",
                    isUnique: true
                },
                {
                    ruName: "Умные часы и браслеты",
                    path: "/smartwatch?utm_source=el_title&utm_medium=smartwatch",
                    isUnique: true
                },
                {
                    ruName: "Умный дом",
                    path: "/smart_home?utm_source=el_title&utm_medium=smart_home",
                    isUnique: true
                },
                {
                    ruName: "Портативные приставки",
                    path: "/console?console_type%5B0%5D=2&console_type%5B1%5D=universal&console_type%5Boperation%5D=union&utm_source=el_title&utm_medium=console",
                    isUnique: true
                },
                {
                    ruName: "Телевизоры с AirPlay",
                    path: "/tv?airplay=1&utm_source=el_title&utm_medium=tv",
                    isUnique: true
                }
            ],
            categories: {
                mobilePhonesAndAccessories: {
                    ruName: "Мобильные телефоны и аксессуары",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        mobilePhones: {
                            ruName: "Мобильные телефоны",
                            subcategoryPageRuHeading: "Мобильные телефоны",
                            path: "/mobile",
                            isUnique: false,
                            position: 0
                        },
                        headphones: {
                            ruName: "Наушники",
                            subcategoryPageRuHeading: "Наушники и гарнитуры",
                            path: "/headphones",
                            isUnique: false,
                            position: 0
                        },
                        smartWatch: {
                            ruName: "Умные часы и фитнес-браслеты",
                            subcategoryPageRuHeading: "Умные часы и браслеты",
                            path: "/smartwatch",
                            isUnique: false,
                            position: 0
                        },
                        portableChargers: {
                            ruName: "Портативные зарядные устройства",
                            subcategoryPageRuHeading: "Портативные зарядные устройства",
                            path: "/portablecharger",
                            isUnique: false,
                            position: 0
                        },
                        memoryCards: {
                            ruName: "Карты памяти",
                            subcategoryPageRuHeading: "Карты памяти",
                            path: "/memcards?typememcards%5B0%5D=microsd&typememcards%5B1%5D=microsdxc&typememcards%5B2%5D=microsdhc&typememcards%5Boperation%5D=union",
                            isUnique: false,
                            position: 1
                        },
                        phoneCases: {
                            ruName: "Чехлы для телефонов",
                            subcategoryPageRuHeading: "Чехлы для телефонов",
                            path: "/phonecase",
                            isUnique: true,
                            position: 0
                        },
                        phoneAccumulators: {
                            ruName: "Аккумуляторы",
                            subcategoryPageRuHeading: "Аккумуляторы для телефонов",
                            path: "/phoneaccum",
                            isUnique: true,
                            position: 0
                        },
                        bluetoothHeadsets: {
                            ruName: "Bluetooth-гарнитуры",
                            subcategoryPageRuHeading: "Bluetooth-гарнитуры",
                            path: "/bt",
                            isUnique: true,
                            position: 0
                        },
                        selfieSticks: {
                            ruName: "Палки для селфи",
                            subcategoryPageRuHeading: "Палки для селфи",
                            path: "/selfiestick",
                            isUnique: true,
                            position: 0
                        },
                        cablesAndAdapters: {
                            ruName: "Кабели, адаптеры",
                            subcategoryPageRuHeading: "Кабели, адаптеры, разветвители",
                            path: "/cable?cable_usage%5B0%5D=phone&cable_usage%5Boperation%5D=union",
                            isUnique: false,
                            position: 0
                        },
                        carHolders: {
                            ruName: "Автомобильные держатели",
                            subcategoryPageRuHeading: "Автомобильные держатели",
                            path: "/carholder",
                            isUnique: false,
                            position: 0
                        },
                        carChargers: {
                            ruName: "Зарядные устройства",
                            subcategoryPageRuHeading: "Зарядные устройства",
                            path: "/chargersmobile?mc_devicetype%5B0%5D=type&mc_devicetype%5Boperation%5D=union&mc_type%5B0%5D=network&mc_type%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        wirelessChargers: {
                            ruName: "Беспроводные зарядные устройства",
                            subcategoryPageRuHeading: "Зарядные устройства",
                            path: "/chargersmobile?mc_type%5B0%5D=wireless&mc_type%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        speakerDocks: {
                            ruName: "Док-станции для смартфонов",
                            subcategoryPageRuHeading: "Док-станции для смартфонов",
                            path: "/speakerdock",
                            isUnique: false,
                            position: 0
                        }
                    }
                },
                televisionAnDVideo: {
                    ruName: "Телевидение и видео",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        tvSets: {
                            ruName: "Телевизоры",
                            subcategoryPageRuHeading: "Телевизоры",
                            path: "/tv",
                            isUnique: true,
                            position: 0
                        },
                        terrestrials: {
                            ruName: "Приемники цифрового ТВ",
                            subcategoryPageRuHeading: "Приемники цифрового ТВ",
                            path: "/terrestrial",
                            isUnique: true,
                            position: 0
                        },
                        satellites: {
                            ruName: "Спутниковые ресиверы",
                            subcategoryPageRuHeading: "Спутниковые ресиверы",
                            path: "/satellite",
                            isUnique: true,
                            position: 0
                        },
                        aerials: {
                            ruName: "ТВ-антенны",
                            subcategoryPageRuHeading: "ТВ-антенны",
                            path: "/aerial",
                            isUnique: true,
                            position: 0
                        },
                        projectors: {
                            ruName: "Проекторы",
                            subcategoryPageRuHeading: "Проекторы",
                            path: "/projector",
                            isUnique: true,
                            position: 0
                        },
                        wallmounts: {
                            ruName: "Кронштейны",
                            subcategoryPageRuHeading: "Кронштейны",
                            path: "/wallmount",
                            isUnique: true,
                            position: 0
                        },
                        mediaPlayers: {
                            ruName: "Медиаплееры",
                            subcategoryPageRuHeading: "Медиаплееры",
                            path: "/media",
                            isUnique: true,
                            position: 0
                        },
                        dvdPlayers: {
                            ruName: "Плееры DVD и Blu-ray",
                            subcategoryPageRuHeading: "Плееры DVD и Blu-ray",
                            path: "/dvd",
                            isUnique: true,
                            position: 0
                        },
                        microPCs: {
                            ruName: "Микро-ПК (HDMI-стики)",
                            subcategoryPageRuHeading: "Микро-ПК",
                            path: "/desktoppc?desktoppc_type%5B0%5D=micro&desktoppc_type%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        soundBars: {
                            ruName: "Саундбары и домашние кинотеатры",
                            subcategoryPageRuHeading: "Саундбары и домашние кинотеатры",
                            path: "/soundbar",
                            isUnique: false,
                            position: 0
                        },
                        tvAccessories: {
                            ruName: "Аксессуары для ТВ",
                            subcategoryPageRuHeading: "Аксессуары для ТВ",
                            path: "/tvaccessory",
                            isUnique: true,
                            position: 0
                        },
                        smartTvKeyboards: {
                            ruName: "Клавиатуры для Smart TV",
                            subcategoryPageRuHeading: "Клавиатуры",
                            path: "/keyboards?mk_designation%5B0%5D=smarttv&mk_designation%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        avCables: {
                            ruName: "Кабели, адаптеры для AV-аппаратуры",
                            subcategoryPageRuHeading: "Кабели, адаптеры, разветвители",
                            path: "/cable?cable_usage%5B0%5D=av&cable_usage%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        remoteControls: {
                            ruName: "Универсальные пульты ДУ",
                            subcategoryPageRuHeading: "Универсальные пульты ДУ",
                            path: "/remote",
                            isUnique: false,
                            position: 0
                        },
                        projectorScreens: {
                            ruName: "Проекционные экраны",
                            subcategoryPageRuHeading: "Проекционные экраны",
                            path: "/projectorscreen",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                tabsAndEbooks: {
                    ruName: "Планшеты, электронные книги",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        tablets: {
                            ruName: "Планшеты",
                            subcategoryPageRuHeading: "Планшеты",
                            path: "/tabletpc",
                            isUnique: false,
                            position: 0
                        },
                        ebooks: {
                            ruName: "Электронные книги",
                            subcategoryPageRuHeading: "Электронные книги",
                            path: "/ebook",
                            isUnique: true,
                            position: 0
                        },
                        tabletCases: {
                            ruName: "Чехлы для планшетов",
                            subcategoryPageRuHeading: "Чехлы для планшетов",
                            path: "/tabletcase",
                            isUnique: true,
                            position: 0
                        },
                        portableChargers: {
                            ruName: "Портативные зарядные устройства",
                            subcategoryPageRuHeading: "Портативные зарядные устройства",
                            path: "/portablecharger",
                            isUnique: false,
                            position: 1
                        },
                        memoryCards: {
                            ruName: "Карты памяти",
                            subcategoryPageRuHeading: "Карты памяти",
                            path: "/memcards?typememcards%5B0%5D=microsd&typememcards%5B1%5D=microsdxc&typememcards%5B2%5D=microsdhc&typememcards%5Boperation%5D=union",
                            isUnique: false,
                            position: 0
                        },
                        cablesAndAdapters: {
                            ruName: "Кабели, адаптеры",
                            subcategoryPageRuHeading: "Кабели для телефонов и планшетов",
                            path: "/cable?cable_usage%5B0%5D=phone&cable_usage%5Boperation%5D=union",
                            isUnique: false,
                            position: 1
                        },
                        chargers: {
                            ruName: "Зарядные устройства",
                            subcategoryPageRuHeading: "Зарядные устройства",
                            path: "/chargersmobile?mc_devicetype%5B0%5D=type3&mc_devicetype%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        wireless4gAnd3gModems: {
                            ruName: "4G и 3G-модемы",
                            subcategoryPageRuHeading: "Беспроводные адаптеры",
                            path: "/wirelessadapter?wa_type%5B0%5D=4g&wa_type%5B1%5D=3g&wa_type%5Boperation%5D=union",
                            isUnique: false,
                            position: 0
                        },
                        ebookCovers: {
                            ruName: "Обложки для электронных книг",
                            subcategoryPageRuHeading: "Обложки для электронных книг",
                            path: "/ebookcover",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                audio: {
                    ruName: "Аудиотехника",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        headphones: {
                            ruName: "Наушники",
                            subcategoryPageRuHeading: "Наушники и гарнитуры",
                            path: "/headphones",
                            isUnique: false,
                            position: 1
                        },
                        multimediaAcoustics: {
                            ruName: "Мультимедиа акустика",
                            subcategoryPageRuHeading: "Мультимедиа акустика",
                            path: "/sound",
                            isUnique: false,
                            position: 0
                        },
                        wirelessSpeakers: {
                            ruName: "Беспроводные и портативные колонки",
                            subcategoryPageRuHeading: "Беспроводные и портативные колонки",
                            path: "/wspeaker",
                            isUnique: true,
                            position: 0
                        },
                        internetRadioStations: {
                            ruName: "Интернет-радиостанции",
                            subcategoryPageRuHeading: "Беспроводные и портативные колонки",
                            path: "/wspeaker?netpl_inetradio=1",
                            isUnique: true,
                            position: 0
                        },
                        mp3players: {
                            ruName: "MP3-плееры",
                            subcategoryPageRuHeading: "MP3-плееры",
                            path: "/player",
                            isUnique: true,
                            position: 0
                        },
                        hifiaudio: {
                            ruName: "Музыкальные центры",
                            subcategoryPageRuHeading: "Музыкальные центры",
                            path: "/hifiaudio",
                            isUnique: true,
                            position: 0
                        },
                        microphones: {
                            ruName: "Микрофоны",
                            subcategoryPageRuHeading: "Микрофоны",
                            path: "/microphones",
                            isUnique: false,
                            position: 0
                        },
                        hifisound: {
                            ruName: "Акустика Hi-Fi и Hi-End",
                            subcategoryPageRuHeading: "Hi-Fi акустика",
                            path: "/hifisound",
                            isUnique: true,
                            position: 0
                        },
                        recievers: {
                            ruName: "AV-ресиверы и усилители",
                            subcategoryPageRuHeading: "AV-ресиверы и усилители",
                            path: "/recievers",
                            isUnique: true,
                            position: 0
                        },
                        vinylRecordPlayers: {
                            ruName: "Виниловые проигрыватели",
                            subcategoryPageRuHeading: "Виниловые проигрыватели",
                            path: "/turntable",
                            isUnique: true,
                            position: 0
                        },
                        phonoStages: {
                            ruName: "Фонокорректоры",
                            subcategoryPageRuHeading: "Фонокорректоры",
                            path: "/phonopreamps",
                            isUnique: true,
                            position: 0
                        },
                        networkPlayers: {
                            ruName: "Сетевые проигрыватели",
                            subcategoryPageRuHeading: "Сетевые проигрыватели",
                            path: "/network_player",
                            isUnique: true,
                            position: 0
                        },
                        radio: {
                            ruName: "Радиоприемники",
                            subcategoryPageRuHeading: "Радиоприемники",
                            path: "/radio",
                            isUnique: false,
                            position: 0
                        },
                        portCarAudio: {
                            ruName: "Магнитолы",
                            subcategoryPageRuHeading: "Магнитолы",
                            path: "/portaudio",
                            isUnique: true,
                            position: 0
                        },
                        soundBars: {
                            ruName: "Саундбары и домашние кинотеатры",
                            subcategoryPageRuHeading: "Саундбары и домашние кинотеатры",
                            path: "/soundbar",
                            isUnique: false,
                            position: 1
                        },
                        clockRadios: {
                            ruName: "Электронные и радиочасы",
                            subcategoryPageRuHeading: "Электронные и радиочасы",
                            path: "/clockradio",
                            isUnique: true,
                            position: 0
                        },
                        voiceRecorders: {
                            ruName: "Диктофоны",
                            subcategoryPageRuHeading: "Диктофоны",
                            path: "/voicerecorder",
                            isUnique: true,
                            position: 0
                        },
                        cables: {
                            ruName: "Кабели",
                            subcategoryPageRuHeading: "Кабели, адаптеры, разветвители",
                            path: "/cable",
                            isUnique: true,
                            position: 0
                        },
                        vinylRecordPlayersAccessories: {
                            ruName: "Звукосниматели, тонармы, иглы",
                            subcategoryPageRuHeading: "Звукосниматели, тонармы, иглы",
                            path: "/turntableaccess",
                            isUnique: true,
                            position: 0
                        },
                        headphoneAmplifiers: {
                            ruName: "Усилители для наушников",
                            subcategoryPageRuHeading: "Усилители для наушников",
                            path: "/portableamp",
                            isUnique: true,
                            position: 0
                        },
                        speakerDocks: {
                            ruName: "Док-станции для смартфонов",
                            subcategoryPageRuHeading: "Док-станции для смартфонов",
                            path: "/speakerdock",
                            isUnique: false,
                            position: 1
                        },
                        remoteControls: {
                            ruName: "Универсальные пульты ДУ",
                            subcategoryPageRuHeading: "Универсальные пульты ДУ",
                            path: "/remote",
                            isUnique: false,
                            position: 1
                        }
                    }
                },
                photoAndVideo: {
                    ruName: "Фото- и видеотехника",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        cameras: {
                            ruName: "Фотоаппараты",
                            subcategoryPageRuHeading: "Фотоаппараты",
                            path: "/photo",
                            isUnique: true,
                            position: 0
                        },
                        lenses: {
                            ruName: "Объективы",
                            subcategoryPageRuHeading: "Объективы",
                            path: "/lens",
                            isUnique: true,
                            position: 0
                        },
                        actionCameras: {
                            ruName: "Экшен-камеры",
                            subcategoryPageRuHeading: "Экшен-камеры",
                            path: "/actioncamera",
                            isUnique: false,
                            position: 0
                        },
                        actionCameraAccessories: {
                            ruName: "Аксессуары и крепления для экшен-камер",
                            subcategoryPageRuHeading: "Аксессуары и крепления для экшен-камер",
                            path: "/actioncamera_acs",
                            isUnique: false,
                            position: 0
                        },
                        videocameras: {
                            ruName: "Видеокамеры",
                            subcategoryPageRuHeading: "Видеокамеры",
                            path: "/video",
                            isUnique: true,
                            position: 0
                        },
                        photoPrinters: {
                            ruName: "Фотопринтеры",
                            subcategoryPageRuHeading: "Фотопринтеры",
                            path: "/printers?type_print[0]=photoprinter&type_print[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        tripods: {
                            ruName: "Штативы",
                            subcategoryPageRuHeading: "Штативы",
                            path: "/tripod",
                            isUnique: true,
                            position: 0
                        },
                        memoryCards: {
                            ruName: "Карты памяти",
                            subcategoryPageRuHeading: "Карты памяти",
                            path: "/memcards",
                            isUnique: false,
                            position: 0
                        },
                        photoFrames: {
                            ruName: "Цифровые фоторамки",
                            subcategoryPageRuHeading: "Цифровые фоторамки",
                            path: "/photoframe",
                            isUnique: true,
                            position: 0
                        },
                        flashes: {
                            ruName: "Вспышки и лампы",
                            subcategoryPageRuHeading: "Вспышки и лампы",
                            path: "/flashes",
                            isUnique: true,
                            position: 0
                        },
                        batteriesAccumulatorsChargers: {
                            ruName: "Батарейки, аккумуляторы, зарядные",
                            subcategoryPageRuHeading: "Батарейки, аккумуляторы, зарядные",
                            path: "/battery",
                            isUnique: true,
                            position: 0
                        },
                        cases: {
                            ruName: "Сумки и рюкзаки для фото/видео",
                            subcategoryPageRuHeading: "Сумки для фото/видеотехники",
                            path: "/case",
                            isUnique: true,
                            position: 0
                        },
                        cardReaders: {
                            ruName: "Карт-ридеры",
                            subcategoryPageRuHeading: "Карт-ридеры",
                            path: "/cardreaders",
                            isUnique: false,
                            position: 0
                        },
                        batteries: {
                            ruName: "Аккумуляторы",
                            subcategoryPageRuHeading: "Аккумуляторы, ЗУ для фото/видеотехники",
                            path: "/batteries",
                            isUnique: true,
                            position: 0
                        },
                        photoFilters: {
                            ruName: "Светофильтры и конвертеры",
                            subcategoryPageRuHeading: "Светофильтры и конвертеры",
                            path: "/photofilter",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                videoGames: {
                    ruName: "Видеоигры",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        consoles: {
                            ruName: "Игровые приставки",
                            subcategoryPageRuHeading: "Игровые приставки",
                            path: "/console",
                            isUnique: true,
                            position: 0
                        },
                        consoleGames: {
                            ruName: "Игры для приставок",
                            subcategoryPageRuHeading: "Игры для приставок",
                            path: "/games",
                            isUnique: false,
                            position: 0
                        },
                        pcGames: {
                            ruName: "Игры для ПК",
                            subcategoryPageRuHeading: "Игры для ПК",
                            path: "/pcgames",
                            isUnique: false,
                            position: 0
                        },
                        virtualReality: {
                            ruName: "Очки виртуальной реальности",
                            subcategoryPageRuHeading: "Очки виртуальной реальности",
                            path: "/virtualreality",
                            isUnique: false,
                            position: 0
                        },
                        controllersAndAccessories: {
                            ruName: "Игровые контроллеры и аксессуары",
                            subcategoryPageRuHeading: "Игровые контроллеры и аксессуары",
                            path: "/controllers",
                            isUnique: false,
                            position: 0
                        },
                        paymentCards: {
                            ruName: "Карты оплаты и подписки",
                            subcategoryPageRuHeading: "Карты оплаты и подписки",
                            path: "/paymentcard",
                            isUnique: false,
                            position: 0
                        }
                    }
                },
                gadgets: {
                    ruName: "Гаджеты",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        subcategory: {
                            ruName: "Умные часы и фитнес-браслеты",
                            subcategoryPageRuHeading: "Умные часы и браслеты",
                            path: "/smartwatch",
                            isUnique: false,
                            position: 1
                        },
                        heartRateMonitorsAndPulseOximeters: {
                            ruName: "Пульсометры, пульсоксиметры",
                            subcategoryPageRuHeading: "Пульсометры, пульсоксиметры",
                            path: "/heart_rate",
                            isUnique: false,
                            position: 0
                        },
                        strapsAndBracelets: {
                            ruName: "Сменные ремешки и браслеты",
                            subcategoryPageRuHeading: "Сменные ремешки и браслеты",
                            path: "/replacementstrap",
                            isUnique: true,
                            position: 0
                        },
                        virtualReality: {
                            ruName: "Очки виртуальной реальности",
                            subcategoryPageRuHeading: "Очки виртуальной реальности",
                            path: "/virtualreality",
                            isUnique: false,
                            position: 1
                        },
                        smartScales: {
                            ruName: "Умные весы",
                            subcategoryPageRuHeading: "Умные весы",
                            path: "/scales?sc_synchronize=1",
                            isUnique: true,
                            position: 0
                        },
                        nitratomersDosimeters: {
                            ruName: "Нитратомеры, дозиметры, экотестеры",
                            subcategoryPageRuHeading: "Нитратомеры, дозиметры, экотестеры",
                            path: "/nitrate",
                            isUnique: false,
                            position: 0
                        },
                        electronicSteamGenerators: {
                            ruName: "Электронные парогенераторы",
                            subcategoryPageRuHeading: "Электронные парогенераторы",
                            path: "/smoke",
                            isUnique: false,
                            position: 0
                        }
                    }
                },
                smarthouseAndSurveillanceVideo: {
                    ruName: "Умный дом и видеонаблюдение",
                    isUnique: false,
                    containsUnique: false,
                    subCategories: {
                        smartHome: {
                            ruName: "Умный дом",
                            subcategoryPageRuHeading: "Умный дом",
                            path: "/smart_home",
                            isUnique: false,
                            position: 0
                        },
                        smartThermostats: {
                            ruName: "Умные терморегуляторы",
                            subcategoryPageRuHeading: "Терморегуляторы",
                            path: "/thermostat?smarthome=1",
                            isUnique: false,
                            position: 0
                        },
                        smartLightBulbs: {
                            ruName: "Умные лампочки",
                            subcategoryPageRuHeading: "Лампочки",
                            path: "/lightbulb?lib_smartlight=1",
                            isUnique: false,
                            position: 0
                        },
                        smartSockets: {
                            ruName: "Умные розетки",
                            subcategoryPageRuHeading: "Розетки, выключатели",
                            path: "/wall_socket?wallsoc_smart=1",
                            isUnique: false,
                            position: 0
                        },
                        ipCameras: {
                            ruName: "IP-камеры",
                            subcategoryPageRuHeading: "IP-камеры",
                            path: "/ipcamera",
                            isUnique: false,
                            position: 0
                        },
                        videoDoorPhones: {
                            ruName: "Видеодомофоны",
                            subcategoryPageRuHeading: "Видеодомофоны",
                            path: "/videodoorphone",
                            isUnique: false,
                            position: 0
                        },
                        cctvCameras: {
                            ruName: "Камеры CCTV",
                            subcategoryPageRuHeading: "Камеры CCTV",
                            path: "/cctvcamera",
                            isUnique: false,
                            position: 0
                        },
                        DVRs: {
                            ruName: "Видеорегистраторы",
                            subcategoryPageRuHeading: "Видеорегистраторы наблюдения",
                            path: "/dvr",
                            isUnique: false,
                            position: 0
                        },
                        cameraTraps: {
                            ruName: "Фотоловушки",
                            subcategoryPageRuHeading: "Фотоловушки",
                            path: "/camera_traps",
                            isUnique: false,
                            position: 0
                        }
                    }
                },
                electricTransport: {
                    ruName: "Электрический транспорт",
                    isUnique: true,
                    containsUnique: false,
                    subCategories: {
                        electricScooters: {
                            ruName: "Электросамокаты и электроскутеры",
                            subcategoryPageRuHeading: "Электросамокаты и электроскутеры",
                            path: "/electric_scooter",
                            isUnique: false,
                            position: 0
                        },
                        segways: {
                            ruName: "Гироциклы",
                            subcategoryPageRuHeading: "Гироциклы",
                            path: "/segway",
                            isUnique: false,
                            position: 0
                        },
                        electrobikes: {
                            ruName: "Электровелосипеды",
                            subcategoryPageRuHeading: "Электровелосипеды",
                            path: "/electrobike",
                            isUnique: false,
                            position: 0
                        }
                    }
                },
                telephonyAndCommunication: {
                    ruName: "Телефония и связь",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        mobilePhones: {
                            ruName: "Мобильные телефоны",
                            subcategoryPageRuHeading: "Мобильные телефоны",
                            path: "/mobile",
                            isUnique: false,
                            position: 1
                        },
                        dectPhones: {
                            ruName: "Радиотелефоны DECT",
                            subcategoryPageRuHeading: "Радиотелефоны DECT",
                            path: "/dect",
                            isUnique: true,
                            position: 0
                        },
                        phones: {
                            ruName: "Проводные телефоны",
                            subcategoryPageRuHeading: "Проводные телефоны",
                            path: "/phone",
                            isUnique: true,
                            position: 0
                        },
                        wireless3gModems: {
                            ruName: "3G-модемы",
                            subcategoryPageRuHeading: "Беспроводные адаптеры",
                            path: "/wirelessadapter?wa_type%5B0%5D=3g&wa_type%5B1%5D=4g&wa_type%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        faxes: {
                            ruName: "Факсы",
                            subcategoryPageRuHeading: "Факсы",
                            path: "/fax",
                            isUnique: false,
                            position: 0
                        },

                        portableRadioStations: {
                            ruName: "Портативные радиостанции",
                            subcategoryPageRuHeading: "Портативные радиостанции",
                            path: "/portableradio",
                            isUnique: false,
                            position: 0
                        }
                    }
                },
                musicEquipment: {
                    ruName: "Музыкальное оборудование",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        synthesizersAndWorkstations: {
                            ruName: "Синтезаторы и рабочие станции",
                            subcategoryPageRuHeading: "Синтезаторы и рабочие станции",
                            path: "/synthandworkst",
                            isUnique: true,
                            position: 0
                        },
                        audioInterfaces: {
                            ruName: "Аудиоинтерфейсы",
                            subcategoryPageRuHeading: "Аудиоинтерфейсы",
                            path: "/audiointerface",
                            isUnique: false,
                            position: 0
                        },
                        concertAcoustics: {
                            ruName: "Концертная акустика",
                            subcategoryPageRuHeading: "Концертная акустика",
                            path: "/concertacoustics",
                            isUnique: true,
                            position: 0
                        },
                        studioMonitors: {
                            ruName: "Студийные мониторы",
                            subcategoryPageRuHeading: "Студийные мониторы",
                            path: "/studio_monitor",
                            isUnique: true,
                            position: 0
                        },
                        guitarAmps: {
                            ruName: "Гитарные комбоусилители",
                            subcategoryPageRuHeading: "Гитарные комбоусилители",
                            path: "/guitarcombo",
                            isUnique: true,
                            position: 0
                        },
                        microphones: {
                            ruName: "Микрофоны",
                            subcategoryPageRuHeading: "Микрофоны",
                            path: "/microphones",
                            isUnique: false,
                            position: 1
                        }
                    }
                },
                opticalAppliances: {
                    ruName: "Оптические приборы",
                    isUnique: true,
                    containsUnique: false,
                    subCategories: {
                        binoculars: {
                            ruName: "Бинокли и подзорные трубы",
                            subcategoryPageRuHeading: "Бинокли и подзорные трубы",
                            path: "/optic",
                            isUnique: false,
                            position: 0
                        },
                        telescopes: {
                            ruName: "Телескопы",
                            subcategoryPageRuHeading: "Телескопы",
                            path: "/telescope",
                            isUnique: false,
                            position: 0
                        }
                    }
                }
            }
        },
        computers: {
            id: 2,
            ruName: "Компьютеры и сети",
            tiles: [
                {
                    ruName: "Планшеты",
                    path: "/tabletpc?utm_source=pc_tile&utm_medium=tabletpc",
                    isUnique: true
                },
                {
                    ruName: "Беспроводные точки доступа",
                    path: "/wirelessap?utm_source=pc_tile&utm_medium=wirelessap",
                    isUnique: true
                },
                {
                    ruName: "Компактные и недорогие ноутбуки",
                    path: "/notebook?price%5Bto%5D=1200.00&diagonalnb%5Bfrom%5D=120&diagonalnb%5Bto%5D=141&utm_source=pc_tile&utm_medium=notebook",
                    isUnique: true
                },
                {
                    ruName: "SSD с поддержкой NVMe",
                    path: "/ssd?utm_source=pc_tile&utm_medium=ssd",
                    isUnique: true
                },
                {
                    ruName: "Мониторы с повышенной частотой обновления кадров",
                    path: "/display?disp_refreshrate%5Bfrom%5D=120hz&utm_source=pc_tile&utm_medium=display",
                    isUnique: true
                }
            ],
            categories: {
                laptopsComputersMonitors: {
                    ruName: "Ноутбуки, компьютеры, мониторы",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        onePieceComputers: {
                            ruName: "Ноутбуки",
                            subcategoryPageRuHeading: "Ноутбуки",
                            path: "/notebook",
                            isUnique: true,
                            position: 0
                        },
                        tablets: {
                            ruName: "Планшетные компьютеры",
                            subcategoryPageRuHeading: "Планшеты",
                            path: "/tabletpc",
                            isUnique: false,
                            position: 1
                        },
                        monoblockPcs: {
                            ruName: "Моноблоки",
                            subcategoryPageRuHeading: "Моноблоки",
                            path: "/monoblock",
                            isUnique: true,
                            position: 0
                        },
                        desktopPcs: {
                            ruName: "Компьютеры",
                            subcategoryPageRuHeading: "Компьютеры",
                            path: "/desktoppc",
                            isUnique: true,
                            position: 0
                        },
                        monitors: {
                            ruName: "Мониторы",
                            subcategoryPageRuHeading: "Мониторы",
                            path: "/display",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                components: {
                    ruName: "Комплектующие",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        videoCards: {
                            ruName: "Видеокарты",
                            subcategoryPageRuHeading: "Видеокарты",
                            path: "/videocard",
                            isUnique: true,
                            position: 0
                        },
                        CPU: {
                            ruName: "Процессоры",
                            subcategoryPageRuHeading: "Процессоры",
                            path: "/cpu",
                            isUnique: true,
                            position: 0
                        },
                        motherboards: {
                            ruName: "Материнские платы",
                            subcategoryPageRuHeading: "Материнские платы",
                            path: "/motherboard",
                            isUnique: true,
                            position: 0
                        },
                        RAM: {
                            ruName: "Оперативная память",
                            subcategoryPageRuHeading: "Оперативная память",
                            path: "/dram",
                            isUnique: true,
                            position: 0
                        },
                        fans: {
                            ruName: "Кулеры",
                            subcategoryPageRuHeading: "Системы охлаждения",
                            path: "/fan",
                            isUnique: true,
                            position: 0
                        },
                        SSD: {
                            ruName: "SSD",
                            subcategoryPageRuHeading: "SSD",
                            path: "/ssd",
                            isUnique: false,
                            position: 0
                        },
                        HDD: {
                            ruName: "Жесткие диски",
                            subcategoryPageRuHeading: "Жесткие диски",
                            path: "/hdd",
                            isUnique: true,
                            position: 0
                        },
                        computerCases: {
                            ruName: "Корпуса",
                            subcategoryPageRuHeading: "Корпуса",
                            path: "/chassis",
                            isUnique: true,
                            position: 0
                        },
                        powerSupplies: {
                            ruName: "Блоки питания",
                            subcategoryPageRuHeading: "Блоки питания",
                            path: "/powersupply",
                            isUnique: true,
                            position: 0
                        },
                        soundCards: {
                            ruName: "Звуковые карты",
                            subcategoryPageRuHeading: "Звуковые карты",
                            path: "/soundcard?type_soundcard%5B0%5D=internal&type_soundcard%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        networkAdapters: {
                            ruName: "Сетевые адаптеры",
                            subcategoryPageRuHeading: "Сетевые адаптеры",
                            path: "/networkadapter",
                            isUnique: false,
                            position: 0
                        },
                        opticalDrives: {
                            ruName: "Оптические приводы",
                            subcategoryPageRuHeading: "Оптические приводы",
                            path: "/optical",
                            isUnique: false,
                            position: 0
                        },
                        tvTuners: {
                            ruName: "ТВ-тюнеры",
                            subcategoryPageRuHeading: "ТВ-тюнеры",
                            path: "/tvtuner?execution_tvtune%5B0%5D=in&execution_tvtune%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                forPrintingAndDesign: {
                    ruName: "Техника для печати и дизайна",
                    isUnique: false,
                    containsUnique: true,
                    subCategories: {
                        printers: {
                            ruName: "Принтеры и МФУ",
                            subcategoryPageRuHeading: "Принтеры и МФУ",
                            path: "/printers",
                            isUnique: false,
                            position: 0
                        },
                        scanners: {
                            ruName: "Сканеры",
                            subcategoryPageRuHeading: "Сканеры",
                            path: "/scanner",
                            isUnique: false,
                            position: 0
                        },
                        accessoriesForOfficeEquipment: {
                            ruName: "Аксессуары для оргтехники",
                            subcategoryPageRuHeading: "Аксессуары для оргтехники",
                            path: "/officeequip_acs",
                            isUnique: true,
                            position: 0
                        },
                        graphicTablets: {
                            ruName: "Графические планшеты",
                            subcategoryPageRuHeading: "Графические планшеты",
                            path: "/tablets",
                            isUnique: false,
                            position: 0
                        },
                        cartridges: {
                            ruName: "Картриджи",
                            subcategoryPageRuHeading: "Картриджи для принтеров и МФУ",
                            path: "/cartridges",
                            isUnique: false,
                            position: 0
                        },
                        photoPaper: {
                            ruName: "Бумага и материалы для печати",
                            subcategoryPageRuHeading: "Бумага и материалы для печати",
                            path: "/photopaper",
                            isUnique: false,
                            position: 0
                        },
                        laminators: {
                            ruName: "Ламинаторы",
                            subcategoryPageRuHeading: "Ламинаторы",
                            path: "/laminator",
                            isUnique: false,
                            position: 0
                        },
                        bookletMakers: {
                            ruName: "Брошюровщики",
                            subcategoryPageRuHeading: "Брошюровщики",
                            path: "/bindingmachines",
                            isUnique: false,
                            position: 0
                        },
                        matrixPrinters: {
                            ruName: "Матричные принтеры",
                            subcategoryPageRuHeading: "Матричные принтеры",
                            path: "/matrixprinter",
                            isUnique: false,
                            position: 0
                        },
                        printers3d: {
                            ruName: "3D-принтеры",
                            subcategoryPageRuHeading: "3D-принтеры",
                            path: "/3dprinter",
                            isUnique: false,
                            position: 0
                        },
                        pens3d: {
                            ruName: "3D-ручки",
                            subcategoryPageRuHeading: "3D-ручки",
                            path: "/3d_pen",
                            isUnique: false,
                            position: 0
                        },
                        suppliesFor3dPrinting: {
                            ruName: "Расходные материалы для 3D-печати",
                            subcategoryPageRuHeading: "Расходные материалы для 3D-печати",
                            path: "/3d_filament",
                            isUnique: false,
                            position: 0
                        }
                    }
                },
                devicesForInputting: {
                    ruName: "Манипуляторы и устройства ввода",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        mouses: {
                            ruName: "Мыши",
                            subcategoryPageRuHeading: "Мыши",
                            path: "/mouse",
                            isUnique: true,
                            position: 0
                        },
                        keyboards: {
                            ruName: "Клавиатуры",
                            subcategoryPageRuHeading: "Клавиатуры",
                            path: "/keyboards",
                            isUnique: true,
                            position: 0
                        },
                        controllers: {
                            ruName: "Игровые контроллеры и аксессуары",
                            subcategoryPageRuHeading: "Игровые контроллеры и аксессуары",
                            path: "/controllers",
                            isUnique: false,
                            position: 1
                        },
                        graphicTablets: {
                            ruName: "Графические планшеты",
                            subcategoryPageRuHeading: "Графические планшеты",
                            path: "/tablets",
                            isUnique: false,
                            position: 1
                        },
                        peripheralKits: {
                            ruName: "Наборы периферии (клавиатура + мышь)",
                            subcategoryPageRuHeading: "Наборы периферии",
                            path: "/peripheralkits",
                            isUnique: true,
                            position: 0
                        },
                        mousePads: {
                            ruName: "Коврики для мыши",
                            subcategoryPageRuHeading: "Коврики для мыши",
                            path: "/mousepad",
                            isUnique: false,
                            position: 0
                        }
                    }
                },
                dataStorage: {
                    ruName: "Хранение данных",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        SSD: {
                            ruName: "SSD",
                            subcategoryPageRuHeading: "SSD",
                            path: "/ssd",
                            isUnique: false,
                            position: 1
                        },
                        HDD: {
                            ruName: "Жесткие диски",
                            subcategoryPageRuHeading: "HDD",
                            path: "/hdd",
                            isUnique: true,
                            position: 0
                        },
                        externalHdd: {
                            ruName: "Внешние накопители (HDD и SSD)",
                            subcategoryPageRuHeading: "Внешние накопители",
                            path: "/externalhdd",
                            isUnique: true,
                            position: 0
                        },
                        usbFlash: {
                            ruName: "Флешки USB",
                            subcategoryPageRuHeading: "USB Flash",
                            path: "/usbflash",
                            isUnique: true,
                            position: 0
                        },
                        memoryCards: {
                            ruName: "Карты памяти",
                            subcategoryPageRuHeading: "Карты памяти",
                            path: "/memcards",
                            isUnique: false,
                            position: 1
                        },
                        casesForHdd: {
                            ruName: "Боксы для накопителей",
                            subcategoryPageRuHeading: "Боксы для накопителей",
                            path: "/hddbox",
                            isUnique: true,
                            position: 0
                        },
                        NAS: {
                            ruName: "Сетевые накопители (NAS)",
                            subcategoryPageRuHeading: "Сетевые накопители (NAS)",
                            path: "/nas",
                            isUnique: false,
                            position: 0
                        },
                        opticalDrives: {
                            ruName: "Оптические приводы",
                            subcategoryPageRuHeading: "Оптические приводы",
                            path: "/optical",
                            isUnique: false,
                            position: 1
                        },
                        usbHubs: {
                            ruName: "USB-хабы и док-станции",
                            subcategoryPageRuHeading: "USB-хабы и док-станции",
                            path: "/usbhub",
                            isUnique: true,
                            position: 0
                        },
                        cardReaders: {
                            ruName: "Карт-ридеры",
                            subcategoryPageRuHeading: "Карт-ридеры",
                            path: "/cardreaders",
                            isUnique: false,
                            position: 1
                        }
                    }
                },
                multimediaComponents: {
                    ruName: "Мультимедиа периферия",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        pcAcoustics: {
                            ruName: "Компьютерная акустика",
                            subcategoryPageRuHeading: "Мультимедиа акустика",
                            path: "/sound",
                            isUnique: false,
                            position: 1
                        },
                        headphones: {
                            ruName: "Наушники",
                            subcategoryPageRuHeading: "Наушники и гарнитуры",
                            path: "/headphones",
                            isUnique: false,
                            position: 2
                        },
                        webCameras: {
                            ruName: "Веб-камеры",
                            subcategoryPageRuHeading: "Web-камеры",
                            path: "/webcams",
                            isUnique: true,
                            position: 0
                        },
                        ipCameras: {
                            ruName: "IP-камеры",
                            subcategoryPageRuHeading: "IP-камеры",
                            path: "/ipcamera",
                            isUnique: false,
                            position: 1
                        },
                        audioInterfaces: {
                            ruName: "Аудиоинтерфейсы",
                            subcategoryPageRuHeading: "Аудиоинтерфейсы",
                            path: "/audiointerface",
                            isUnique: false,
                            position: 1
                        }
                    }
                },
                networkHardware: {
                    ruName: "Сетевое оборудование",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        wirelessRouters: {
                            ruName: "Беспроводные маршрутизаторы",
                            subcategoryPageRuHeading: "Беспроводные маршрутизаторы",
                            path: "/wrouter",
                            isUnique: true,
                            position: 0
                        },
                        wirelessAdapters: {
                            ruName: "Беспроводные адаптеры",
                            subcategoryPageRuHeading: "Беспроводные адаптеры",
                            path: "/wirelessadapter",
                            isUnique: true,
                            position: 0
                        },
                        switches: {
                            ruName: "Коммутаторы",
                            subcategoryPageRuHeading: "Коммутаторы",
                            path: "/switch",
                            isUnique: true,
                            position: 0
                        },
                        dslModemsAndRouters: {
                            ruName: "DSL-модемы и маршрутизаторы",
                            subcategoryPageRuHeading: "DSL-модемы и маршрутизаторы",
                            path: "/dslmodem",
                            isUnique: true,
                            position: 0
                        },
                        ipCameras: {
                            ruName: "IP-камеры",
                            subcategoryPageRuHeading: "IP-камеры",
                            path: "/ipcamera",
                            isUnique: false,
                            position: 2
                        },
                        NAS: {
                            ruName: "NAS",
                            subcategoryPageRuHeading: "Сетевые накопители (NAS)",
                            path: "/nas",
                            isUnique: false,
                            position: 1
                        },
                        wirelessAccessPoints: {
                            ruName: "Беспроводные точки доступа",
                            subcategoryPageRuHeading: "Беспроводные точки доступа",
                            path: "/wirelessap",
                            isUnique: true,
                            position: 0
                        },
                        modemsFor3gAnd4G: {
                            ruName: "4G и 3G-модемы",
                            subcategoryPageRuHeading: "Беспроводные адаптеры",
                            path: "/wirelessadapter?wa_type%5B0%5D=4g&wa_type%5B1%5D=3g&wa_type%5Boperation%5D=union",
                            isUnique: false,
                            position: 1
                        },
                        networkCables: {
                            ruName: "Сетевые кабели",
                            subcategoryPageRuHeading: "Кабели для сетевого оборудования",
                            path: "/cable?cable_usage%5B0%5D=type4&cable_usage%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        cableCrimpingTools: {
                            ruName: "Инструмент для обжимки кабелей",
                            subcategoryPageRuHeading: "Клещи обжимные",
                            path: "/household_tools?ht_type%5B0%5D=crimpingpliers&ht_type%5Boperation%5D=union&order=date:desc",
                            isUnique: true,
                            position: 0
                        },
                        networkAdapters: {
                            ruName: "Сетевые адаптеры",
                            subcategoryPageRuHeading: "Сетевые адаптеры",
                            path: "/networkadapter",
                            isUnique: false,
                            position: 1
                        },
                        powerlines: {
                            ruName: "Сети по электропроводке (Powerline)",
                            subcategoryPageRuHeading: "Сети по электропроводке (Powerline)",
                            path: "/powerline",
                            isUnique: true,
                            position: 0
                        },
                        wirelessAntennas: {
                            ruName: "Антенны беспроводной связи",
                            subcategoryPageRuHeading: "Антенны беспроводной связи",
                            path: "/wantenna",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                laptopAccessories: {
                    ruName: "Аксессуары к ноутбукам и компьютерам",
                    isUnique: false,
                    containsUnique: true,
                    subCategories: {
                        mobilePhones: {
                            laptopBackpacks: "Рюкзаки для ноутбуков",
                            subcategoryPageRuHeading: "Рюкзаки",
                            path: "/backpack?bap_internaldep%5B0%5D=laptoptablet&bap_internaldep%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        laptopBags: {
                            ruName: "Сумки для ноутбуков",
                            subcategoryPageRuHeading: "Сумки для ноутбуков",
                            path: "/notebookcase",
                            isUnique: true,
                            position: 0
                        },
                        coolingCoasters: {
                            ruName: "Охлаждающие подставки",
                            subcategoryPageRuHeading: "Подставки для ноутбуков",
                            path: "/laptopstand",
                            isUnique: true,
                            position: 0
                        },
                        cablesAdaptersSplitters: {
                            ruName: "Кабели, адаптеры, разветвители",
                            subcategoryPageRuHeading: "Кабели, адаптеры для компьютера",
                            path: "/cable?cable_usage%5B0%5D=pc&cable_usage%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        mousepads: {
                            ruName: "Коврики для мыши",
                            subcategoryPageRuHeading: "Коврики для мыши",
                            path: "/mousepad",
                            isUnique: false,
                            position: 1
                        },
                        accumulatorsAndChargers: {
                            ruName: "Аккумуляторы и зарядные устройства",
                            subcategoryPageRuHeading: "Аккумуляторы, ЗУ для ноутбуков",
                            path: "/nbbatteries?mfr%5B0%5D=for_notebook&mfr%5B1%5D=for_notebook_cha",
                            isUnique: true,
                            position: 0
                        },
                        universalChargers: {
                            ruName: "Универсальные зарядные устройства",
                            subcategoryPageRuHeading: "Зарядные устройства для ноутбуков",
                            path: "/chargersmobile?mc_devicetype%5B0%5D=type2&mc_devicetype%5Boperation%5D=union",
                            isUnique: false,
                            position: 0
                        }
                    }
                },
                chargers: {
                    ruName: "Электропитание",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        ups: {
                            ruName: "Источники бесперебойного питания",
                            subcategoryPageRuHeading: "Источники бесперебойного питания",
                            path: "/ups",
                            isUnique: true,
                            position: 0
                        },
                        stabilizersAndSurgeProtectors: {
                            ruName: "Стабилизаторы и сетевые фильтры",
                            subcategoryPageRuHeading: "Стабилизаторы и сетевые фильтры",
                            path: "/voltageregulator",
                            isUnique: true,
                            position: 0
                        },
                        laptopBatteries: {
                            ruName: "Аккумуляторы для ноутбуков",
                            subcategoryPageRuHeading: "Аккумуляторы, ЗУ для ноутбуков",
                            path: "/nbbatteries?mfr%5B0%5D=for_notebook",
                            isUnique: true,
                            position: 0
                        },
                        chargers: {
                            ruName: "Зарядные устройства",
                            subcategoryPageRuHeading: "Зарядные устройства для ноутбуков",
                            path: "/chargersmobile?mc_devicetype%5B0%5D=type2&mc_devicetype%5Boperation%5D=union",
                            isUnique: false,
                            position: 1
                        },
                        cables: {
                            ruName: "Кабели питания",
                            subcategoryPageRuHeading: "Кабели, адаптеры IEC 60320",
                            path: "/cable?conn1%5B0%5D=c5&conn1%5Boperation%5D=intersect",
                            isUnique: true,
                            position: 0
                        },
                        upsBatteries: {
                            ruName: "Аккумуляторы для ИБП",
                            subcategoryPageRuHeading: "Аккумуляторы для ИБП",
                            path: "/ups_battery",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                software: {
                    ruName: "Игры и программное обеспечение",
                    isUnique: false,
                    containsUnique: true,
                    subCategories: {
                        gamesForPc: {
                            ruName: "Видеоигры для ПК",
                            subcategoryPageRuHeading: "Игры для ПК",
                            path: "/pcgames",
                            isUnique: false,
                            position: 1
                        },
                        gamesForConsole: {
                            ruName: "Видеоигры для консолей",
                            subcategoryPageRuHeading: "Игры для приставок",
                            path: "/games",
                            isUnique: false,
                            position: 1
                        },
                        antiviruses: {
                            ruName: "Антивирусы и безопасность",
                            subcategoryPageRuHeading: "Антивирусы и безопасность",
                            path: "/antivirus",
                            isUnique: true,
                            position: 0
                        },
                        paymentCardsAndSubscriptions: {
                            ruName: "Карты оплаты и подписки",
                            subcategoryPageRuHeading: "Карты оплаты и подписки",
                            path: "/paymentcard",
                            isUnique: false,
                            position: 1
                        }
                    }
                }
            }
        },
        houseAppliances: {
            id: 3,
            ruName: "Бытовая техника",
            tiles: [
                {
                    ruName: "Сушильные машины",
                    path: "/washingmachine?type_washm_bi%5B0%5D=dry_m&type_washm_bi%5Boperation%5D=union&utm_source=bt_tile&utm_medium=drym",
                    isUnique: true
                },
                {
                    ruName: "Электрогрили",
                    path: "/electricgrill?utm_source=bt_tile&utm_medium=electricgrill",
                    isUnique: true
                },
                {
                    ruName: "Пароочистители, отпариватели",
                    path: "/steamcleaner?utm_source=bt_tile&utm_medium=steamcleaner",
                    isUnique: true
                },
                {
                    ruName: "Заварочные чайники, кофеварки, френч-прессы",
                    path: "/teapot?utm_source=bt_tile&utm_medium=teapot",
                    isUnique: true
                },
                {
                    ruName: "Фены",
                    path: "/hairdryer?utm_source=bt_tile&utm_medium=hairdryer",
                    isUnique: false
                }
            ],
            categories: {
                bulkyEquipment: {
                    ruName: "Крупногабаритная техника",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        refrigerators: {
                            ruName: "Холодильники",
                            subcategoryPageRuHeading: "Холодильники",
                            path: "/refrigerator",
                            isUnique: true,
                            position: 0
                        },
                        freezers: {
                            ruName: "Морозильники",
                            subcategoryPageRuHeading: "Морозильники",
                            path: "/refrigerator?type_refrigerato%5B0%5D=chestfreezer&type_refrigerato%5B1%5D=freezer&type_refrigerato%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        washingMachines: {
                            ruName: "Стиральные машины",
                            subcategoryPageRuHeading: "Стиральные машины",
                            path: "/washingmachine",
                            isUnique: true,
                            position: 0
                        },
                        tumbleDryers: {
                            ruName: "Сушильные машины",
                            subcategoryPageRuHeading: "Сушильные машины",
                            path: "/washingmachine?type_washm_bi[0]=dry_m&type_washm_bi[1]=dryingcabinet&type_washm_bi[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        hoods: {
                            ruName: "Вытяжки",
                            subcategoryPageRuHeading: "Вытяжки",
                            path: "/hoods",
                            isUnique: false,
                            position: 0
                        },
                        cookers: {
                            ruName: "Кухонные плиты",
                            subcategoryPageRuHeading: "Кухонные плиты",
                            path: "/cooker",
                            isUnique: true,
                            position: 0
                        },
                        dishwashers: {
                            ruName: "Посудомоечные машины",
                            subcategoryPageRuHeading: "Посудомоечные машины",
                            path: "/dishwasher",
                            isUnique: true,
                            position: 0
                        },
                        wineRacks: {
                            ruName: "Винные шкафы",
                            subcategoryPageRuHeading: "Винные шкафы",
                            path: "/wine_cabinets",
                            isUnique: true,
                            position: 0
                        },
                        accessoriesForLargeHouseholdAppliances: {
                            ruName: "Аксессуары для крупной бытовой техники",
                            subcategoryPageRuHeading: "Аксессуары для крупной бытовой и встраиваемой техники",
                            path: "/largehomeapp_acs",
                            isUnique: false,
                            position: 0
                        }
                    }
                },
                builtInAppliances: {
                    ruName: "Встраиваемая техника",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        hobs: {
                            ruName: "Варочные панели",
                            subcategoryPageRuHeading: "Варочные панели",
                            path: "/hob_cooker",
                            isUnique: true,
                            position: 0
                        },
                        ovens: {
                            ruName: "Духовые шкафы",
                            subcategoryPageRuHeading: "Духовые шкафы",
                            path: "/oven_cooker",
                            isUnique: true,
                            position: 0
                        },
                        hoods: {
                            ruName: "Вытяжки",
                            subcategoryPageRuHeading: "Вытяжки",
                            path: "/hoods",
                            isUnique: false,
                            position: 1
                        },
                        dishwashers: {
                            ruName: "Посудомоечные машины",
                            subcategoryPageRuHeading: "Встраиваемые посудомоечные машины",
                            path: "/dishwasher?location[0]=installation&location[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        refrigerators: {
                            ruName: "Холодильники",
                            subcategoryPageRuHeading: "Встраиваемые холодильники",
                            path: "/refrigerator?location[0]=installation&location[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        washingMachines: {
                            ruName: "Стиральные машины",
                            subcategoryPageRuHeading: "Встраиваемые стиральные машины",
                            path: "/washingmachine?location[0]=installation&location[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        microwave: {
                            ruName: "Микроволновые печи",
                            subcategoryPageRuHeading: "Встраиваемые микроволновые печи",
                            path: "/microvawe?location[0]=installation&location[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        coffeeMachines: {
                            ruName: "Кофемашины",
                            subcategoryPageRuHeading: "Встраиваемые кофеварки",
                            path: "/coffee?location[0]=installation&location[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        foodWasteShredders: {
                            ruName: "Измельчители пищевых отходов",
                            subcategoryPageRuHeading: "Измельчители пищевых отходов",
                            path: "/disposer",
                            isUnique: false,
                            position: 0
                        },
                        AccessoriesForBuiltInAppliances: {
                            ruName: "Аксессуары для встраиваемой техники",
                            subcategoryPageRuHeading: "Аксессуары для крупной бытовой и встраиваемой техники",
                            path: "/largehomeapp_acs",
                            isUnique: false,
                            position: 1
                        }
                    }
                },
                cleaning: {
                    ruName: "Уборка",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        vacuumCleaners: {
                            ruName: "Пылесосы",
                            subcategoryPageRuHeading: "Пылесосы",
                            path: "/vacuumcleaner",
                            isUnique: true,
                            position: 0
                        },
                        robotCleaners: {
                            ruName: "Роботы-пылесосы",
                            subcategoryPageRuHeading: "Роботы-пылесосы",
                            path: "/robotcleaner",
                            isUnique: true,
                            position: 0
                        },
                        vacuumCleanersForWindows: {
                            ruName: "Пылесосы для окон",
                            subcategoryPageRuHeading: "Пылесосы для окон",
                            path: "/vacuumcleaner?vc_type%5B0%5D=windowvc&vc_type%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        robotCleanersForWindows: {
                            ruName: "Роботы для мытья окон",
                            subcategoryPageRuHeading: "Роботы для мытья окон",
                            path: "/robotcleaner?robot_type%5B0%5D=1&robot_type%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        steamCleaners: {
                            ruName: "Пароочистители",
                            subcategoryPageRuHeading: "Пароочистители",
                            path: "/steamcleaner?steam_type%5B0%5D=purifier&steam_type%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        sweepers: {
                            ruName: "Электровеники",
                            subcategoryPageRuHeading: "Электровеники",
                            path: "/sweeper",
                            isUnique: true,
                            position: 0
                        },
                        accessoriesForVacuumCleaners: {
                            ruName: "Аксессуары для пылесосов, пароочистителей",
                            subcategoryPageRuHeading: "Аксессуары для пылесосов, пароочистителей",
                            path: "/vacuum_acs",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                clothesCare: {
                    ruName: "Уход за одеждой, пошив",
                    isUnique: false,
                    containsUnique: true,
                    subCategories: {
                        irons: {
                            ruName: "Утюги",
                            subcategoryPageRuHeading: "Утюги",
                            path: "/iron",
                            isUnique: true,
                            position: 0
                        },
                        steamers: {
                            ruName: "Отпариватели",
                            subcategoryPageRuHeading: "Пароочистители и отпариватели",
                            path: "/steamcleaner?steam_type%5B0%5D=steamer&steam_type%5B1%5D=ironing_station&steam_type%5B2%5D=steampress&steam_type%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        ironingStationsAndPresses: {
                            ruName: "Гладильные станции и прессы",
                            subcategoryPageRuHeading: "Пароочистители и отпариватели",
                            path: "/steamcleaner?steam_type%5B0%5D=ironing_station&steam_type%5B1%5D=steampress&steam_type%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        sewingMachines: {
                            ruName: "Швейные машины",
                            subcategoryPageRuHeading: "Швейные машины",
                            path: "/sewingmachines",
                            isUnique: false,
                            position: 0
                        },
                        overlocks: {
                            ruName: "Оверлоки",
                            subcategoryPageRuHeading: "Оверлоки и распошивальные машины",
                            path: "/overlock",
                            isUnique: false,
                            position: 0
                        },
                        embroideryMachines: {
                            ruName: "Вышивальные и швейно-вышивальные машины",
                            subcategoryPageRuHeading: "Вышивальные и швейно-вышивальные машины",
                            path: "/sewingmachines?embroideryunit=1",
                            isUnique: true,
                            position: 0
                        },
                        lintShavers: {
                            ruName: "Машинки для удаления катышков",
                            subcategoryPageRuHeading: "Машинки для удаления катышков",
                            path: "/lintshaver",
                            isUnique: true,
                            position: 0
                        },
                        accessoriesForIrons: {
                            ruName: "Аксессуары для утюгов, гладильных систем",
                            subcategoryPageRuHeading: "Аксессуары для утюгов, увлажнителей и очистителей воздуха",
                            path: "/climate_acs?cla_purpos%5B0%5D=iron&cla_purpos%5B1%5D=gladsystem&cla_purpos%5B2%5D=press&cla_purpos%5Boperation%5D=union",
                            isUnique: false,
                            position: 0
                        }
                    }
                },
                airConditioningEquipment: {
                    ruName: "Климатическая техника",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        conditioners: {
                            ruName: "Кондиционеры",
                            subcategoryPageRuHeading: "Кондиционеры",
                            path: "/conditioners",
                            isUnique: true,
                            position: 0
                        },
                        waterHeater: {
                            ruName: "Водонагреватели",
                            subcategoryPageRuHeading: "Водонагреватели",
                            path: "/waterheater",
                            isUnique: false,
                            position: 0
                        },
                        heaters: {
                            ruName: "Обогреватели",
                            subcategoryPageRuHeading: "Обогреватели",
                            path: "/heater",
                            isUnique: false,
                            position: 0
                        },
                        humidifiers: {
                            ruName: "Увлажнители воздуха",
                            subcategoryPageRuHeading: "Увлажнители воздуха",
                            path: "/humidifier",
                            isUnique: true,
                            position: 0
                        },
                        boilers: {
                            ruName: "Отопительные котлы",
                            subcategoryPageRuHeading: "Отопительные котлы",
                            path: "/boiler",
                            isUnique: false,
                            position: 0
                        },
                        blowers: {
                            ruName: "Вентиляторы",
                            subcategoryPageRuHeading: "Вентиляторы",
                            path: "/blower",
                            isUnique: true,
                            position: 0
                        },
                        airPurifiers: {
                            ruName: "Очистители и мойки воздуха",
                            subcategoryPageRuHeading: "Очистители и мойки воздуха",
                            path: "/airpurifier",
                            isUnique: true,
                            position: 0
                        },
                        supplyAirVents: {
                            ruName: "Приточные проветриватели",
                            subcategoryPageRuHeading: "Вытяжная и приточная вентиляция",
                            path: "/exhaustfan?ef_type%5B0%5D=passprov&ef_type%5B1%5D=recuperator&ef_type%5B2%5D=provbeznagr&ef_type%5B3%5D=provnagr&ef_type%5Boperation%5D=union",
                            isUnique: false,
                            position: 0
                        },
                        meteoStations: {
                            ruName: "Метеостанции",
                            subcategoryPageRuHeading: "Метеостанции",
                            path: "/meteostations",
                            isUnique: false,
                            position: 0
                        },
                        electricFireplaces: {
                            ruName: "Электрокамины",
                            subcategoryPageRuHeading: "Электрокамины и биокамины",
                            path: "/electrofireplace",
                            isUnique: false,
                            position: 0
                        },
                        dehumidifier: {
                            ruName: "Осушители воздуха",
                            subcategoryPageRuHeading: "Осушители воздуха",
                            path: "/dehumidifier",
                            isUnique: true,
                            position: 0
                        },
                        insectKillers: {
                            ruName: "Электронные уничтожители насекомых",
                            subcategoryPageRuHeading: "Уничтожители насекомых, отпугиватели, ловушки",
                            path: "/insect_killer",
                            isUnique: false,
                            position: 0
                        },
                        accessoriesForClimateEquipment: {
                            ruName: "Аксессуары для климатической техники",
                            subcategoryPageRuHeading: "Аксессуары для утюгов, увлажнителей и очистителей воздуха",
                            path: "/climate_acs?cla_purpos%5B0%5D=humid&cla_purpos%5B1%5D=aircleaner&cla_purpos%5B2%5D=condic&cla_purpos%5Boperation%5D=union",
                            isUnique: false,
                            position: 0
                        }
                    }
                },
                cooking: {
                    ruName: "Приготовление пищи",
                    isUnique: false,
                    containsUnique: true,
                    subCategories: {
                        microwaves: {
                            ruName: "Микроволновые печи",
                            subcategoryPageRuHeading: "Микроволновые печи",
                            path: "/microvawe",
                            isUnique: false,
                            position: 0
                        },
                        multicookers: {
                            ruName: "Мультиварки",
                            subcategoryPageRuHeading: "Мультиварки",
                            path: "/multicooker",
                            isUnique: true,
                            position: 0
                        },
                        tabletopCookers: {
                            ruName: "Настольные плиты",
                            subcategoryPageRuHeading: "Настольные плиты",
                            path: "/tabletop_cooker",
                            isUnique: true,
                            position: 0
                        },
                        roasters: {
                            ruName: "Мини-печи",
                            subcategoryPageRuHeading: "Мини-печи (ростеры)",
                            path: "/roaster",
                            isUnique: true,
                            position: 0
                        },
                        toasters: {
                            ruName: "Тостеры",
                            subcategoryPageRuHeading: "Тостеры",
                            path: "/toaster",
                            isUnique: true,
                            position: 0
                        },
                        waffleMakers: {
                            ruName: "Вафельницы",
                            subcategoryPageRuHeading: "Вафельницы",
                            path: "/waffle",
                            isUnique: true,
                            position: 0
                        },
                        sandwichers: {
                            ruName: "Сэндвичницы",
                            subcategoryPageRuHeading: "Сэндвичницы",
                            path: "/sandwichers",
                            isUnique: true,
                            position: 0
                        },
                        aerogrills: {
                            ruName: "Аэрогрили",
                            subcategoryPageRuHeading: "Аэрогрили",
                            path: "/aerogrill",
                            isUnique: true,
                            position: 0
                        },
                        breadMakers: {
                            ruName: "Хлебопечки",
                            subcategoryPageRuHeading: "Хлебопечки",
                            path: "/breadmaker",
                            isUnique: true,
                            position: 0
                        },
                        electricGrills: {
                            ruName: "Электрогрили",
                            subcategoryPageRuHeading: "Электрогрили",
                            path: "/electricgrill",
                            isUnique: true,
                            position: 0
                        },
                        electricSkewers: {
                            ruName: "Электрошашлычницы",
                            subcategoryPageRuHeading: "Электрошашлычницы",
                            path: "/electrobarbecue",
                            isUnique: true,
                            position: 0
                        },
                        steamers: {
                            ruName: "Пароварки",
                            subcategoryPageRuHeading: "Пароварки",
                            path: "/steamers",
                            isUnique: true,
                            position: 0
                        },
                        yogurtMakers: {
                            ruName: "Йогуртницы и мороженицы",
                            subcategoryPageRuHeading: "Йогуртницы",
                            path: "/yogurtmaker",
                            isUnique: true,
                            position: 0
                        },
                        deepFryers: {
                            ruName: "Фритюрницы",
                            subcategoryPageRuHeading: "Фритюрницы",
                            path: "/fryer",
                            isUnique: true,
                            position: 0
                        },
                        crepeMakers: {
                            ruName: "Блинницы",
                            subcategoryPageRuHeading: "Блинницы",
                            path: "/crepemaker",
                            isUnique: true,
                            position: 0
                        },
                        eggMakers: {
                            ruName: "Яйцеварки",
                            subcategoryPageRuHeading: "Яйцеварки",
                            path: "/eggmaker",
                            isUnique: true,
                            position: 0
                        },
                        accessoriesForKitchenEquipment: {
                            ruName: "Аксессуары для кухонной техники",
                            subcategoryPageRuHeading: "Аксессуары для кухонной техники",
                            path: "/kitchen_acs",
                            isUnique: false,
                            position: 0
                        }
                    }
                },
                teaAndCoffeePreparation: {
                    ruName: "Приготовление кофе и чая",
                    isUnique: false,
                    containsUnique: true,
                    subCategories: {
                        coffeeMachines: {
                            ruName: "Кофемашины",
                            subcategoryPageRuHeading: "Кофемашины",
                            path: "/coffee?type_coffee[0]=coffee_machine&type_coffee[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        coffeeMakers: {
                            ruName: "Кофеварки",
                            subcategoryPageRuHeading: "Кофеварки",
                            path: "/coffee?type_coffee[0]=espresso_coffee&type_coffee[1]=dropping_coffee&type_coffee[2]=boiler&type_coffee[3]=turkey&type_coffee[4]=pour_over&type_coffee[5]=geyzernaya_coffe&type_coffee[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        capsuleCoffeeMakersAndCoffeeMachines: {
                            ruName: "Капсульные кофеварки и кофемашины",
                            subcategoryPageRuHeading: "Капсульные кофеварки и кофемашины",
                            path: "/coffee?type_coffee[0]=capsules&type_coffee[1]=capsule_machine&type_coffee[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        electricKettles: {
                            ruName: "Электрочайники и термопоты",
                            subcategoryPageRuHeading: "Чайники и термопоты",
                            path: "/kettle",
                            isUnique: true,
                            position: 0
                        },
                        kettles: {
                            ruName: "Чайники",
                            subcategoryPageRuHeading: "Чайники",
                            path: "/kettles",
                            isUnique: false,
                            position: 0
                        },
                        teapots: {
                            ruName: "Заварочные чайники, кофеварки, френч-прессы",
                            subcategoryPageRuHeading: "Заварочные чайники, кофеварки, френч-прессы",
                            path: "/teapot",
                            isUnique: false,
                            position: 0
                        },
                        coffeeGrinders: {
                            ruName: "Кофемолки",
                            subcategoryPageRuHeading: "Кофемолки",
                            path: "/coffeegrinders",
                            isUnique: true,
                            position: 0
                        },
                        milkFrothers: {
                            ruName: "Вспениватели молока",
                            subcategoryPageRuHeading: "Вспениватели молока",
                            path: "/milkfrother",
                            isUnique: true,
                            position: 0
                        },
                        coffee: {
                            ruName: "Кофе",
                            subcategoryPageRuHeading: "Кофе",
                            path: "/coffeejava",
                            isUnique: false,
                            position: 0
                        },
                        tea: {
                            ruName: "Чай",
                            subcategoryPageRuHeading: "Чай (раздел закрыт)",
                            path: "/tea",
                            isUnique: true,
                            position: 0
                        },
                        accessoriesForCoffeeMachinesAndKettles: {
                            ruName: "Аксессуары для кофемашин, кофеварок, чайников",
                            subcategoryPageRuHeading: "Аксессуары для кухонной техники",
                            path: "/kitchen_acs?ka_purpos%5B0%5D=type4&ka_purpos%5B1%5D=kettletermopot&ka_purpos%5Boperation%5D=union",
                            isUnique: false,
                            position: 0
                        }
                    }
                },
                foodPreparation: {
                    ruName: "Подготовка и обработка продуктов",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        blenders: {
                            ruName: "Блендеры",
                            subcategoryPageRuHeading: "Блендеры",
                            path: "/blender",
                            isUnique: true,
                            position: 0
                        },
                        foodProcessors: {
                            ruName: "Кухонные комбайны",
                            subcategoryPageRuHeading: "Кухонные комбайны",
                            path: "/foodprocessors",
                            isUnique: true,
                            position: 0
                        },
                        meatGrinders: {
                            ruName: "Мясорубки",
                            subcategoryPageRuHeading: "Мясорубки",
                            path: "/meatgrinder",
                            isUnique: true,
                            position: 0
                        },
                        mixers: {
                            ruName: "Миксеры",
                            subcategoryPageRuHeading: "Миксеры",
                            path: "/mixer",
                            isUnique: true,
                            position: 0
                        },
                        juicers: {
                            ruName: "Соковыжималки",
                            subcategoryPageRuHeading: "Соковыжималки",
                            path: "/juicer",
                            isUnique: true,
                            position: 0
                        },
                        foodDehydrators: {
                            ruName: "Сушилки для овощей и фруктов",
                            subcategoryPageRuHeading: "Сушилки для овощей и фруктов",
                            path: "/food_dehydrator",
                            isUnique: true,
                            position: 0
                        },
                        kitchenScales: {
                            ruName: "Кухонные весы",
                            subcategoryPageRuHeading: "Кухонные весы",
                            path: "/kitchenscales",
                            isUnique: true,
                            position: 0
                        },
                        slicers: {
                            ruName: "Ломтерезки",
                            subcategoryPageRuHeading: "Ломтерезки",
                            path: "/slicer",
                            isUnique: true,
                            position: 0
                        },
                        choppers: {
                            ruName: "Измельчители (чопперы)",
                            subcategoryPageRuHeading: "Измельчители (чопперы)",
                            path: "/chopper",
                            isUnique: true,
                            position: 0
                        },
                        vacuumPackers: {
                            ruName: "Вакуумные упаковщики",
                            subcategoryPageRuHeading: "Вакуумные упаковщики",
                            path: "/vacuummachine",
                            isUnique: true,
                            position: 0
                        },
                        marinators: {
                            ruName: "Маринаторы",
                            subcategoryPageRuHeading: "Маринаторы",
                            path: "/marinator",
                            isUnique: true,
                            position: 0
                        },
                        accessoriesForFoodProcessingEquipment: {
                            ruName: "Аксессуары для кухонной техники",
                            subcategoryPageRuHeading: "Аксессуары для кухонной техники",
                            path: "/kitchen_acs",
                            isUnique: false,
                            position: 1
                        }
                    }
                },
                bodyAndHairCare: {
                    ruName: "Уход за волосами и телом",
                    isUnique: false,
                    containsUnique: false,
                    subCategories: {
                        hairClippers: {
                            ruName: "Машинки для стрижки волос",
                            subcategoryPageRuHeading: "Машинки для стрижки волос",
                            path: "/hairclipper",
                            isUnique: false,
                            position: 0
                        },
                        curlingIronsStylers: {
                            ruName: "Плойки, стайлеры, щипцы",
                            subcategoryPageRuHeading: "Стайлеры",
                            path: "/styler",
                            isUnique: false,
                            position: 0
                        },
                        hairDryers: {
                            ruName: "Фены",
                            subcategoryPageRuHeading: "Фены",
                            path: "/hairdryer",
                            isUnique: false,
                            position: 0
                        },
                        toothBrushes: {
                            ruName: "Зубные щетки и ирригаторы",
                            subcategoryPageRuHeading: "Зубные щетки и ирригаторы",
                            path: "/toothbrush",
                            isUnique: false,
                            position: 0
                        },
                        shavers: {
                            ruName: "Мужские электробритвы",
                            subcategoryPageRuHeading: "Электробритвы мужские",
                            path: "/shaver",
                            isUnique: false,
                            position: 0
                        },
                        ladyShavers: {
                            ruName: "Женские электробритвы и эпиляторы",
                            subcategoryPageRuHeading: "Женские электробритвы и эпиляторы",
                            path: "/ladyshaver",
                            isUnique: false,
                            position: 0
                        },
                        scales: {
                            ruName: "Напольные весы",
                            subcategoryPageRuHeading: "Напольные весы",
                            path: "/scales",
                            isUnique: false,
                            position: 0
                        },
                        hydromassageBaths: {
                            ruName: "Гидромассажные ванночки",
                            subcategoryPageRuHeading: "Гидромассажные ванночки для ног",
                            path: "/footbath",
                            isUnique: false,
                            position: 0
                        },
                        manicureAndPedicureSets: {
                            ruName: "Маникюрные и педикюрные наборы",
                            subcategoryPageRuHeading: "Маникюрные и педикюрные наборы",
                            path: "/manicure",
                            isUnique: false,
                            position: 0
                        },
                        accessoriesForBeautyEquipment: {
                            ruName: "Аксессуары к товарам для красоты и здоровья",
                            subcategoryPageRuHeading: "Аксессуары к товарам для красоты и здоровья",
                            path: "/beauty_acs",
                            isUnique: false,
                            position: 0
                        }
                    }
                },
                healthEquipment: {
                    ruName: "Техника для здоровья",
                    isUnique: false,
                    containsUnique: false,
                    subCategories: {
                        inhalers: {
                            ruName: "Ингаляторы",
                            subcategoryPageRuHeading: "Ингаляторы",
                            path: "/inhaler",
                            isUnique: false,
                            position: 0
                        },
                        toothBrushes: {
                            ruName: "Зубные щетки и ирригаторы",
                            subcategoryPageRuHeading: "Зубные щетки и ирригаторы",
                            path: "/toothbrush",
                            isUnique: false,
                            position: 1
                        },
                        tonometers: {
                            ruName: "Тонометры",
                            subcategoryPageRuHeading: "Тонометры",
                            path: "/tonometers",
                            isUnique: false,
                            position: 0
                        },
                        thermometers: {
                            ruName: "Термометры",
                            subcategoryPageRuHeading: "Медицинские термометры",
                            path: "/medthermometer",
                            isUnique: false,
                            position: 0
                        },
                        glucoseMeter: {
                            ruName: "Глюкометры",
                            subcategoryPageRuHeading: "Глюкометры",
                            path: "/glucosemeter",
                            isUnique: false,
                            position: 0
                        },
                        heartRateMonitors: {
                            ruName: "Пульсометры, пульсоксиметры",
                            subcategoryPageRuHeading: "Пульсометры, пульсоксиметры",
                            path: "/heart_rate",
                            isUnique: false,
                            position: 1
                        },
                        contactLenses: {
                            ruName: "Контактные линзы",
                            subcategoryPageRuHeading: "Контактные линзы",
                            path: "/contact_lense",
                            isUnique: false,
                            position: 0
                        },
                        lensSolutions: {
                            ruName: "Растворы для линз",
                            subcategoryPageRuHeading: "Растворы для линз",
                            path: "/solutionlenses",
                            isUnique: false,
                            position: 0
                        },
                        accessoriesForHealthEquipment: {
                            ruName: "Аксессуары к товарам для красоты и здоровья",
                            subcategoryPageRuHeading: "Аксессуары к товарам для красоты и здоровья",
                            path: "/beauty_acs",
                            isUnique: false,
                            position: 1
                        }
                    }
                },
                accessoriesAndPeripheral: {
                    ruName: "Аксессуары и сопутствующие товары",
                    isUnique: false,
                    containsUnique: true,
                    subCategories: {
                        laundryDryers: {
                            ruName: "Сушилки для белья",
                            subcategoryPageRuHeading: "Сушилки для белья",
                            path: "/linendryer",
                            isUnique: false,
                            position: 0
                        },
                        ironinBboards: {
                            ruName: "Гладильные доски",
                            subcategoryPageRuHeading: "Гладильные доски",
                            path: "/ironingboard",
                            isUnique: false,
                            position: 0
                        },
                        washingPowder: {
                            ruName: "Средства для стирки и ухода за бельем",
                            subcategoryPageRuHeading: "Стиральные порошки",
                            path: "/washingpowder",
                            isUnique: false,
                            position: 0
                        },
                        dishwasherTools: {
                            ruName: "Средства для посудомоечных машин",
                            subcategoryPageRuHeading: "Таблетки для посудомоечных машин",
                            path: "/dishwashertablet",
                            isUnique: false,
                            position: 0
                        },
                        accessoriesForCoffeeMachinesAndKettles: {
                            ruName: "Аксессуары для кофемашин, кофеварок, чайников",
                            subcategoryPageRuHeading: "Аксессуары для кухонной техники",
                            path: "/kitchen_acs?ka_purpos%5B0%5D=type4&ka_purpos%5B1%5D=kettletermopot&ka_purpos%5Boperation%5D=union",
                            isUnique: false,
                            position: 1
                        },
                        accessoriesForBlendersGrinders: {
                            ruName: "Аксессуары для блендеров, комбайнов, мясорубок",
                            subcategoryPageRuHeading: "Аксессуары для кухонной техники",
                            path: "/kitchen_acs?ka_purpos%5B0%5D=type3&ka_purpos%5B1%5D=type2&ka_purpos%5B2%5D=type1&ka_purpos%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        accessoriesForVacuumPackers: {
                            ruName: "Аксессуары для вакуумных упаковщиков",
                            subcategoryPageRuHeading: "Аксессуары для кухонной техники",
                            path: "/kitchen_acs?ka_purpos%5B0%5D=vacuumupakov&ka_purpos%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        accessoriesForMultiCookers: {
                            ruName: "Аксессуары для мультиварок, аэрогрилей",
                            subcategoryPageRuHeading: "Аксессуары для кухонной техники",
                            path: "/kitchen_acs?ka_purpos%5B0%5D=type6&ka_purpos%5B1%5D=type12&ka_purpos%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        replaceablePanelsForSandwichMakers: {
                            ruName: "Сменные панели для сэндвичниц",
                            subcategoryPageRuHeading: "Аксессуары для кухонной техники",
                            path: "/kitchen_acs?ka_purpos%5B0%5D=type7&ka_purpos%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        accessoriesForTooyhBrushes: {
                            ruName: "Аксессуары для зубных щеток и ирригаторов",
                            subcategoryPageRuHeading: "Аксессуары к товарам для красоты и здоровья",
                            path: "/beauty_acs?ba_purpos%5B0%5D=type1&ba_purpos%5B1%5D=type2&ba_purpos%5Boperation%5D=union",
                            isUnique: false,
                            position: 0
                        },
                        accessoriesForShavers: {
                            ruName: "Аксессуары для электробритв и машинок",
                            subcategoryPageRuHeading: "Аксессуары к товарам для красоты и здоровья",
                            path: "/beauty_acs?ba_purpos%5B0%5D=type4&ba_purpos%5B1%5D=type7&ba_purpos%5Boperation%5D=union",
                            isUnique: false,
                            position: 0
                        },
                        accessoriesForSkinCareProducts: {
                            ruName: "Аксессуары для приборов по уходу за кожей",
                            subcategoryPageRuHeading: "Аксессуары к товарам для красоты и здоровья",
                            path: "/beauty_acs?ba_purpos%5B0%5D=type3&ba_purpos%5B1%5D=faceclean&ba_purpos%5B2%5D=manicure&ba_purpos%5Boperation%5D=union",
                            isUnique: false,
                            position: 0
                        },
                        replaceableRazorBlades: {
                            ruName: "Сменные лезвия для бритвенных станков",
                            subcategoryPageRuHeading: "Аксессуары к товарам для красоты и здоровья",
                            path: "/beauty_acs?ba_purpos%5B0%5D=britvstanok&ba_purpos%5Boperation%5D=union",
                            isUnique: false,
                            position: 0
                        },
                        accessoriesForVacuumCleaners: {
                            ruName: "Аксессуары для пылесосов",
                            subcategoryPageRuHeading: "Аксессуары для пылесосов, пароочистителей",
                            path: "/vacuum_acs?va_purpos%5B0%5D=vacuumcleaner&va_purpos%5B1%5D=robotcleaner&va_purpos%5B2%5D=floorcleaner&va_purpos%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        accessoriesForSteamCleaners: {
                            ruName: "Аксессуары для пароочистителей",
                            subcategoryPageRuHeading: "Аксессуары для пылесосов, пароочистителей",
                            path: "/vacuum_acs?va_purpos%5B0%5D=steamcleaner&va_purpos%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        accessoriesForLargeHouseholdAndBuiltInAppliances: {
                            ruName: "Аксессуары для крупной бытовой и встраиваемой техники",
                            subcategoryPageRuHeading: "Аксессуары для крупной бытовой и встраиваемой техники",
                            path: "/largehomeapp_acs",
                            isUnique: false,
                            position: 2
                        },
                        accessoriesForIrons: {
                            ruName: "Аксессуары для утюгов, гладильных систем",
                            subcategoryPageRuHeading: "Аксессуары для утюгов, увлажнителей и очистителей воздуха",
                            path: "/climate_acs?cla_purpos%5B0%5D=iron&cla_purpos%5B1%5D=gladsystem&cla_purpos%5B2%5D=press&cla_purpos%5Boperation%5D=union",
                            isUnique: false,
                            position: 1
                        },
                        accessoriesForClimateEquipment: {
                            ruName: "Аксессуары для климатической техники",
                            subcategoryPageRuHeading: "Аксессуары для утюгов, увлажнителей и очистителей воздуха",
                            path: "/climate_acs?cla_purpos%5B0%5D=humid&cla_purpos%5B1%5D=aircleaner&cla_purpos%5B2%5D=condic&cla_purpos%5Boperation%5D=union",
                            isUnique: false,
                            position: 1
                        }
                    }
                }
            }
        },
        constructionAndRepair: {
            id: 4,
            ruName: "Стройка и ремонт",
            tiles: [
                {
                    ruName: "Полотенцесушители",
                    path: "/towelrail?utm_source=sr_tile&utm_medium=towelrail",
                    isUnique: true
                },
                {
                    ruName: "Радиаторы отопления",
                    path: "/radiators?utm_source=sr_tile&utm_medium=radiators",
                    isUnique: true
                },
                {
                    ruName: "Отопительные котлы",
                    path: "/boiler?utm_source=sr_tile&utm_medium=boiler",
                    isUnique: true
                },
                {
                    ruName: "Терморегуляторы",
                    path: "/thermostat?utm_source=sr_tile&utm_medium=thermostat",
                    isUnique: true
                },
                {
                    ruName: "Циркуляционные насосы для отопления",
                    path: "/pump?pump_type%5B0%5D=circulatory&pump_type%5Boperation%5D=union&pump_purpose%5B0%5D=heating&pump_purpose%5Boperation%5D=union&utm_source=sr_tile&utm_medium=pump",
                    isUnique: true
                },
                {
                    ruName: "Электроотвертки и шуруповерты",
                    path: "/screwdriver?utm_source=sr_tile&utm_medium=screwdriver",
                    isUnique: true
                }
            ],
            categories: {
                tools: {
                    ruName: "Инструмент",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        drills: {
                            ruName: "Электродрели и дрели-шуруповерты",
                            subcategoryPageRuHeading: "Электродрели и дрели-шуруповерты",
                            path: "/drills",
                            isUnique: true,
                            position: 0
                        },
                        rotaryhammers: {
                            ruName: "Перфораторы",
                            subcategoryPageRuHeading: "Перфораторы",
                            path: "/rotaryhammers",
                            isUnique: true,
                            position: 0
                        },
                        toolKits: {
                            ruName: "Наборы ручных инструментов",
                            subcategoryPageRuHeading: "Наборы инструментов",
                            path: "/tool_kits",
                            isUnique: false,
                            position: 0
                        },
                        electricScrewdrivers: {
                            ruName: "Электроотвертки",
                            subcategoryPageRuHeading: "Электроотвертки",
                            path: "/screwdriver?typescrewdriver[0]=simplescrewdrive&typescrewdriver[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        screwdrivers: {
                            ruName: "Шуруповерты, винтоверты",
                            subcategoryPageRuHeading: "Шуруповерты, винтоверты",
                            path: "/screwdriver?typescrewdriver[0]=hardscrewdrive&typescrewdriver[1]=vintovert&typescrewdriver[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        toolsAccumulators: {
                            ruName: "Аккумуляторы и зарядные устройства для инструмента",
                            subcategoryPageRuHeading: "Аккумуляторы и зарядные устройства для инструмента",
                            path: "/tools_accum",
                            isUnique: false,
                            position: 0
                        },
                        drillsMixers: {
                            ruName: "Дрели-миксеры",
                            subcategoryPageRuHeading: "Дрели-миксеры",
                            path: "/drills?type_drill[0]=drill_mixer&type_drill[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        angleGrinders: {
                            ruName: "Угловые шлифмашины (болгарки)",
                            subcategoryPageRuHeading: "Угловые шлифмашины (болгарки)",
                            path: "/angle_grinder",
                            isUnique: true,
                            position: 0
                        },
                        grinders: {
                            ruName: "Шлифмашины",
                            subcategoryPageRuHeading: "Шлифмашины",
                            path: "/grinder",
                            isUnique: true,
                            position: 0
                        },
                        polishingMachines: {
                            ruName: "Полировальные машины",
                            subcategoryPageRuHeading: "Полировальные шлифмашины",
                            path: "/grinder?tupe_grinder[0]=polish&tupe_grinder[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        multiTools: {
                            ruName: "Мультитулы",
                            subcategoryPageRuHeading: "Мультифункциональные шлифмашины",
                            path: "/grinder?tupe_grinder[0]=multi_grinder&tupe_grinder[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        circularSaws: {
                            ruName: "Дисковые пилы",
                            subcategoryPageRuHeading: "Дисковые пилы",
                            path: "/electric_saw?type_saw[0]=disk&type_saw[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        reciprocatingSaws: {
                            ruName: "Сабельные пилы",
                            subcategoryPageRuHeading: "Сабельные пилы",
                            path: "/electric_saw?type_saw[0]=saber&type_saw[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        fretSaws: {
                            ruName: "Лобзики",
                            subcategoryPageRuHeading: "Электролобзики",
                            path: "/fretsaw",
                            isUnique: true,
                            position: 0
                        },
                        planes: {
                            ruName: "Рубанки",
                            subcategoryPageRuHeading: "Рубанки",
                            path: "/plane",
                            isUnique: true,
                            position: 0
                        },
                        tools: {
                            ruName: "Строительный, слесарный, монтажный инструмент",
                            subcategoryPageRuHeading: "Строительный, слесарный, монтажный инструмент",
                            path: "/household_tools",
                            isUnique: true,
                            position: 0
                        },
                        toolBoxes: {
                            ruName: "Ящики для инструментов",
                            subcategoryPageRuHeading: "Ящики для инструментов",
                            path: "/toolbox",
                            isUnique: true,
                            position: 0
                        },
                        millingCutters: {
                            ruName: "Фрезеры",
                            subcategoryPageRuHeading: "Фрезеры",
                            path: "/woodrouter",
                            isUnique: true,
                            position: 0
                        },
                        industrialDryers: {
                            ruName: "Промышленные фены",
                            subcategoryPageRuHeading: "Промышленные фены",
                            path: "/industrialdryer",
                            isUnique: true,
                            position: 0
                        },
                        hotGlueGuns: {
                            ruName: "Термоклеевые пистолеты",
                            subcategoryPageRuHeading: "Термоклеевые пистолеты",
                            path: "/hotgluegun",
                            isUnique: true,
                            position: 0
                        },
                        engravers: {
                            ruName: "Граверы",
                            subcategoryPageRuHeading: "Граверы",
                            path: "/engraver",
                            isUnique: true,
                            position: 0
                        },
                        householdVacuumCleaners: {
                            ruName: "Хозяйственные пылесосы",
                            subcategoryPageRuHeading: "Хозяйственные пылесосы",
                            path: "/vacuumcleaner?vc_type%5B0%5D=wetdryvc&vc_type%5Boperation%5D=union",
                            isUnique: false,
                            position: 0
                        },
                        sprayGuns: {
                            ruName: "Краскораспылители",
                            subcategoryPageRuHeading: "Электрические краскораспылители",
                            path: "/electricspraygun",
                            isUnique: false,
                            position: 0
                        },
                        wallChasers: {
                            ruName: "Штроборезы",
                            subcategoryPageRuHeading: "Штроборезы",
                            path: "/wallchaser",
                            isUnique: true,
                            position: 0
                        },
                        tileCutters: {
                            ruName: "Плиткорезы",
                            subcategoryPageRuHeading: "Плиткорезы",
                            path: "/tilecutter",
                            isUnique: true,
                            position: 0
                        },
                        solderingIrons: {
                            ruName: "Паяльники и паяльные лампы",
                            subcategoryPageRuHeading: "Паяльники и паяльные лампы",
                            path: "/solderingiron",
                            isUnique: true,
                            position: 0
                        },
                        pipeWeldingMachines: {
                            ruName: "Аппараты для сварки труб",
                            subcategoryPageRuHeading: "Аппараты для сварки труб",
                            path: "/pipe_welding",
                            isUnique: true,
                            position: 0
                        },
                        electricJackhammers: {
                            ruName: "Электрические отбойные молотки",
                            subcategoryPageRuHeading: "Электрические отбойные молотки",
                            path: "/jackhammer?jh_type[0]=electric&jh_type[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        electricMetalCutters: {
                            ruName: "Электрические ножницы по металлу",
                            subcategoryPageRuHeading: "Электрические ножницы по металлу",
                            path: "/metal_cutter",
                            isUnique: false,
                            position: 0
                        },
                        nailers: {
                            ruName: "Скобозабиватели, гвоздезабиватели, степлеры",
                            subcategoryPageRuHeading: "Скобозабиватели, гвоздезабиватели, степлеры",
                            path: "/nailer",
                            isUnique: false,
                            position: 0
                        },
                        thermalImaging: {
                            ruName: "Диагностические тепловизоры и пирометры",
                            subcategoryPageRuHeading: "Диагностические тепловизоры и пирометры",
                            path: "/thermal_imaging",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                buildingEquipment: {
                    ruName: "Строительное оборудование",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        welders: {
                            ruName: "Сварочные аппараты",
                            subcategoryPageRuHeading: "Сварочные инверторы",
                            path: "/weldinginverter",
                            isUnique: false,
                            position: 0
                        },
                        compressors: {
                            ruName: "Компрессоры",
                            subcategoryPageRuHeading: "Компрессоры",
                            path: "/compressor",
                            isUnique: false,
                            position: 0
                        },
                        laserLevels: {
                            ruName: "Лазерные нивелиры",
                            subcategoryPageRuHeading: "Лазерные нивелиры",
                            path: "/laserlevel",
                            isUnique: true,
                            position: 0
                        },
                        heatGuns: {
                            ruName: "Тепловые пушки",
                            subcategoryPageRuHeading: "Тепловые пушки",
                            path: "/heat_gun",
                            isUnique: false,
                            position: 0
                        },
                        generators: {
                            ruName: "Генераторы",
                            subcategoryPageRuHeading: "Генераторы",
                            path: "/powerstations",
                            isUnique: false,
                            position: 0
                        },
                        concreteMixers: {
                            ruName: "Бетономешалки",
                            subcategoryPageRuHeading: "Бетономешалки",
                            path: "/concrete",
                            isUnique: true,
                            position: 0
                        },
                        weldingMasks: {
                            ruName: "Сварочные маски",
                            subcategoryPageRuHeading: "Сварочные маски",
                            path: "/weldingmask",
                            isUnique: false,
                            position: 0
                        },
                        householdVacuumCleaners: {
                            ruName: "Хозяйственные пылесосы",
                            subcategoryPageRuHeading: "Хозяйственные пылесосы",
                            path: "/vacuumcleaner?vc_type%5B0%5D=wetdryvc&vc_type%5Boperation%5D=union",
                            isUnique: false,
                            position: 1
                        },
                        wheelbarrows: {
                            ruName: "Строительные тачки",
                            subcategoryPageRuHeading: "Садовые и строительные тачки",
                            path: "/barrow",
                            isUnique: false,
                            position: 0
                        },
                        stairsAndLadders: {
                            ruName: "Лестницы и стремянки",
                            subcategoryPageRuHeading: "Лестницы и стремянки",
                            path: "/stairandladder",
                            isUnique: false,
                            position: 0
                        },
                        laserRangefinders: {
                            ruName: "Лазерные дальномеры",
                            subcategoryPageRuHeading: "Лазерные дальномеры",
                            path: "/laserdistmeter",
                            isUnique: true,
                            position: 0
                        },
                        vibratingPlates: {
                            ruName: "Виброплиты",
                            subcategoryPageRuHeading: "Виброплиты",
                            path: "/platecompactor",
                            isUnique: true,
                            position: 0
                        },
                        jackhammers: {
                            ruName: "Отбойные молотки",
                            subcategoryPageRuHeading: "Отбойные молотки",
                            path: "/jackhammer",
                            isUnique: true,
                            position: 0
                        },
                        electricAndGasCutters: {
                            ruName: "Электро- и бензорезы",
                            subcategoryPageRuHeading: "Электро- и бензорезы",
                            path: "/powercutter",
                            isUnique: false,
                            position: 0
                        },
                        motorPumps: {
                            ruName: "Мотопомпы",
                            subcategoryPageRuHeading: "Мотопомпы",
                            path: "/motopump",
                            isUnique: false,
                            position: 0
                        }
                    }
                },
                floorCoverings: {
                    ruName: "Напольные покрытия",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        laminate: {
                            ruName: "Ламинат",
                            subcategoryPageRuHeading: "Ламинат",
                            path: "/laminate",
                            isUnique: true,
                            position: 0
                        },
                        linoleum: {
                            ruName: "Линолеум",
                            subcategoryPageRuHeading: "Линолеум",
                            path: "/linoleum",
                            isUnique: true,
                            position: 0
                        },
                        vinylFloor: {
                            ruName: "Виниловые полы",
                            subcategoryPageRuHeading: "Виниловые полы",
                            path: "/vinyl_floor",
                            isUnique: true,
                            position: 0
                        },
                        tile: {
                            ruName: "Плитка",
                            subcategoryPageRuHeading: "Напольная плитка",
                            path: "/tile?t_kind%5B0%5D=floor&t_kind%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        parquetBoard: {
                            ruName: "Паркетная доска",
                            subcategoryPageRuHeading: "Паркетная доска",
                            path: "/parquetboard",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                plumbing: {
                    ruName: "Сантехника",
                    isUnique: true,
                    containsUnique: false,
                    subCategories: {
                        kitchenSinks: {
                            ruName: "Кухонные мойки",
                            subcategoryPageRuHeading: "Кухонные мойки",
                            path: "/kitchensink",
                            isUnique: false,
                            position: 0
                        },
                        faucets: {
                            ruName: "Смесители",
                            subcategoryPageRuHeading: "Смесители",
                            path: "/faucet",
                            isUnique: false,
                            position: 0
                        },
                        bathtubs: {
                            ruName: "Ванны",
                            subcategoryPageRuHeading: "Ванны",
                            path: "/bathtub",
                            isUnique: false,
                            position: 0
                        },
                        towelWarmers: {
                            ruName: "Полотенцесушители",
                            subcategoryPageRuHeading: "Полотенцесушители",
                            path: "/towelrail",
                            isUnique: false,
                            position: 0
                        },
                        showerCabins: {
                            ruName: "Душевые кабины",
                            subcategoryPageRuHeading: "Душевые кабины",
                            path: "/showerbox",
                            isUnique: false,
                            position: 0
                        },
                        washbasins: {
                            ruName: "Умывальники",
                            subcategoryPageRuHeading: "Умывальники",
                            path: "/washbasin",
                            isUnique: false,
                            position: 0
                        },
                        pedestalForWashbasins: {
                            ruName: "Пьедесталы для умывальников",
                            subcategoryPageRuHeading: "Пьедесталы для умывальников",
                            path: "/pedestal",
                            isUnique: false,
                            position: 0
                        },
                        siphons: {
                            ruName: "Сифоны",
                            subcategoryPageRuHeading: "Сифоны",
                            path: "/siphon",
                            isUnique: false,
                            position: 0
                        },
                        pans: {
                            ruName: "Унитазы",
                            subcategoryPageRuHeading: "Унитазы",
                            path: "/wcpan",
                            isUnique: false,
                            position: 0
                        },
                        bidets: {
                            ruName: "Биде",
                            subcategoryPageRuHeading: "Биде",
                            path: "/bidet",
                            isUnique: false,
                            position: 0
                        },
                        installationsForPansSinksBidets: {
                            ruName: "Инсталляции для унитазов, раковин, биде и писсуаров",
                            subcategoryPageRuHeading: "Инсталляции для унитазов, раковин, биде и писсуаров",
                            path: "/installations",
                            isUnique: false,
                            position: 0
                        },
                        flushingSystems: {
                            ruName: "Клавиши и системы смыва",
                            subcategoryPageRuHeading: "Клавиши и системы смыва",
                            path: "/flushing_system",
                            isUnique: false,
                            position: 0
                        },
                        electronicBidetCovers: {
                            ruName: "Электронные крышки-биде",
                            subcategoryPageRuHeading: "Электронные крышки-биде",
                            path: "/toilet_shower",
                            isUnique: false,
                            position: 0
                        },
                        dryClosets: {
                            ruName: "Биотуалеты",
                            subcategoryPageRuHeading: "Биотуалеты",
                            path: "/biotoilet",
                            isUnique: false,
                            position: 0
                        },
                        showerPanels: {
                            ruName: "Душевые панели и гарнитуры",
                            subcategoryPageRuHeading: "Душевые панели и гарнитуры",
                            path: "/shower",
                            isUnique: false,
                            position: 0
                        },
                        showerTrays: {
                            ruName: "Душевые поддоны",
                            subcategoryPageRuHeading: "Душевые поддоны",
                            path: "/shower_trays",
                            isUnique: false,
                            position: 0
                        },
                        dispensers: {
                            ruName: "Дозаторы, диспенсеры",
                            subcategoryPageRuHeading: "Дозаторы, диспенсеры",
                            path: "/dispenser",
                            isUnique: false,
                            position: 0
                        },
                        handsDryers: {
                            ruName: "Сушилки для рук, волос",
                            subcategoryPageRuHeading: "Сушилки для рук, волос",
                            path: "/handsdryer",
                            isUnique: false,
                            position: 0
                        }
                    }
                },
                waterSupplySewerageVentilation: {
                    ruName: "Водоснабжение, канализация, вентиляция",
                    isUnique: false,
                    containsUnique: true,
                    subCategories: {
                        waterHeaters: {
                            ruName: "Водонагреватели",
                            subcategoryPageRuHeading: "Водонагреватели",
                            path: "/waterheater",
                            isUnique: false,
                            position: 1
                        },
                        pumps: {
                            ruName: "Насосы",
                            subcategoryPageRuHeading: "Насосы",
                            path: "/pump",
                            isUnique: false,
                            position: 0
                        },
                        exhaustFans: {
                            ruName: "Приточные и вытяжные вентиляторы",
                            subcategoryPageRuHeading: "Вытяжная и приточная вентиляция",
                            path: "/exhaustfan",
                            isUnique: true,
                            position: 0
                        },
                        supplyAirVents: {
                            ruName: "Приточные проветриватели",
                            subcategoryPageRuHeading: "Вытяжная и приточная вентиляция",
                            path: "/exhaustfan?ef_type%5B0%5D=passprov&ef_type%5B1%5D=recuperator&ef_type%5B2%5D=provbeznagr&ef_type%5B3%5D=provnagr&ef_type%5Boperation%5D=union",
                            isUnique: false,
                            position: 1
                        },
                        waterAccumulators: {
                            ruName: "Гидроаккумуляторы",
                            subcategoryPageRuHeading: "Гидроаккумуляторы",
                            path: "/hydroaccum?ha_type%5B0%5D=type1&ha_type%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        pipesAndFittings: {
                            ruName: "Трубы, фитинг",
                            subcategoryPageRuHeading: "Трубы, фитинг",
                            path: "/tube_fitting",
                            isUnique: false,
                            position: 0
                        },
                        accessPanels: {
                            ruName: "Сантехнические ревизионные люки",
                            subcategoryPageRuHeading: "Сантехнические ревизионные люки",
                            path: "/access_panel",
                            isUnique: false,
                            position: 0
                        },
                        waterAndGasPipes: {
                            ruName: "Трубы водогазопроводные",
                            subcategoryPageRuHeading: "Водогазопроводные трубы",
                            path: "/metal_pipes?pipe_type_1%5B0%5D=watergas&pipe_type_1%5Boperation%5D=union",
                            isUnique: false,
                            position: 0
                        },
                        boilers: {
                            ruName: "Отопительные котлы",
                            subcategoryPageRuHeading: "Отопительные котлы",
                            path: "/boiler",
                            isUnique: false,
                            position: 1
                        },
                        radiators: {
                            ruName: "Радиаторы отопления",
                            subcategoryPageRuHeading: "Радиаторы отопления",
                            path: "/radiators",
                            isUnique: false,
                            position: 0
                        }
                    }
                },
                powerSupply: {
                    ruName: "Электроснабжение",
                    isUnique: true,
                    containsUnique: false,
                    subCategories: {
                        socketsAndSwitches: {
                            ruName: "Розетки, выключатели",
                            subcategoryPageRuHeading: "Розетки, выключатели",
                            path: "/wall_socket",
                            isUnique: false,
                            position: 0
                        },
                        multimeters: {
                            ruName: "Мультиметры, токовые клещи, индикаторные отвертки",
                            subcategoryPageRuHeading: "Мультиметры, токовые клещи, индикаторные отвертки",
                            path: "/multimeter",
                            isUnique: false,
                            position: 0
                        },
                        chandeliersAndLamps: {
                            ruName: "Люстры и светильники",
                            subcategoryPageRuHeading: "Люстры и светильники",
                            path: "/luster",
                            isUnique: false,
                            position: 0
                        },
                        bulbs: {
                            ruName: "Лампочки",
                            subcategoryPageRuHeading: "Лампочки",
                            path: "/lightbulb",
                            isUnique: false,
                            position: 0
                        },
                        stabilizersAndSurgeProtectors: {
                            ruName: "Стабилизаторы и сетевые фильтры",
                            subcategoryPageRuHeading: "Стабилизаторы и сетевые фильтры",
                            path: "/voltageregulator?voltage_type[0]=stabilizer&voltage_type[operation]=union",
                            isUnique: false,
                            position: 0
                        },
                        generators: {
                            ruName: "Генераторы",
                            subcategoryPageRuHeading: "Генераторы",
                            path: "/powerstations",
                            isUnique: false,
                            position: 1
                        }
                    }
                },
                heating: {
                    ruName: "Отопление, теплоизоляция",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        boilers: {
                            ruName: "Отопительные котлы",
                            subcategoryPageRuHeading: "Отопительные котлы",
                            path: "/boiler",
                            isUnique: false,
                            position: 2
                        },
                        pumpForHeatingSystems: {
                            ruName: "Насосы для систем отопления",
                            subcategoryPageRuHeading: "Циркуляционные насосы для отопления",
                            path: "/pump?pump_purpose%5B0%5D=heating&pump_purpose%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        radiators: {
                            ruName: "Радиаторы отопления",
                            subcategoryPageRuHeading: "Радиаторы отопления",
                            path: "/radiators",
                            isUnique: false,
                            position: 1
                        },
                        thermalInsulation: {
                            ruName: "Теплоизоляция",
                            subcategoryPageRuHeading: "Теплоизоляция",
                            path: "/therminsulation",
                            isUnique: true,
                            position: 0
                        },
                        soundAndVibrationIsolation: {
                            ruName: "Звуко- и виброизоляция помещений",
                            subcategoryPageRuHeading: "Звуко- и виброизоляция помещений",
                            path: "/soundproofing",
                            isUnique: true,
                            position: 0
                        },
                        warmFloor: {
                            ruName: "Теплые полы",
                            subcategoryPageRuHeading: "Теплые полы",
                            path: "/heatedfloor",
                            isUnique: true,
                            position: 0
                        },
                        towelWarmers: {
                            ruName: "Полотенцесушители",
                            subcategoryPageRuHeading: "Полотенцесушители",
                            path: "/towelrail",
                            isUnique: false,
                            position: 1
                        },
                        temperatureControllers: {
                            ruName: "Терморегуляторы",
                            subcategoryPageRuHeading: "Терморегуляторы",
                            path: "/thermostat",
                            isUnique: true,
                            position: 0
                        },
                        fireplaces: {
                            ruName: "Дровяные камины, печи-камины, порталы",
                            subcategoryPageRuHeading: "Дровяные камины, печи-камины, порталы",
                            path: "/stove",
                            isUnique: false,
                            position: 0
                        },
                        expansionTanks: {
                            ruName: "Расширительные баки",
                            subcategoryPageRuHeading: "Расширительные баки",
                            path: "/hydroaccum?ha_type%5B0%5D=type2&ha_type%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        tubesAndFittings: {
                            ruName: "Трубы, фитинг",
                            subcategoryPageRuHeading: "Трубы для отопления",
                            path: "/tube_fitting?tube_use%5B0%5D=3&tube_use%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        waterAndGasPipes: {
                            ruName: "Трубы водогазопроводные",
                            subcategoryPageRuHeading: "Водогазопроводные трубы",
                            path: "/metal_pipes?pipe_type_1%5B0%5D=watergas&pipe_type_1%5Boperation%5D=union",
                            isUnique: false,
                            position: 1
                        }
                    }
                },
                doorsAndWindows: {
                    ruName: "Двери, окна",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        metalDoors: {
                            ruName: "Металлические двери",
                            subcategoryPageRuHeading: "Металлические двери",
                            path: "/steeldoor",
                            isUnique: false,
                            position: 0
                        },
                        interiorDoors: {
                            ruName: "Межкомнатные двери",
                            subcategoryPageRuHeading: "Межкомнатные двери",
                            path: "/interiordoor",
                            isUnique: true,
                            position: 0
                        },
                        pvcWindows: {
                            ruName: "Окна ПВХ",
                            subcategoryPageRuHeading: "Окна ПВХ",
                            path: "/vynilwindows",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                pneumaticTools: {
                    ruName: "Пневмоинструменты",
                    isUnique: true,
                    containsUnique: false,
                    subCategories: {
                        compressors: {
                            ruName: "Компрессоры",
                            subcategoryPageRuHeading: "Компрессоры",
                            path: "/compressor",
                            isUnique: false,
                            position: 1
                        },
                        sprayGuns: {
                            ruName: "Краскопульты",
                            subcategoryPageRuHeading: "Пневматические краскопульты",
                            path: "/spraygun",
                            isUnique: false,
                            position: 0
                        },
                        wrenches: {
                            ruName: "Гайковерты",
                            subcategoryPageRuHeading: "Пневматические гайковерты",
                            path: "/wrench",
                            isUnique: false,
                            position: 0
                        },
                        nailers: {
                            ruName: "Скобозабиватели, гвоздезабиватели, степлеры",
                            subcategoryPageRuHeading: "Скобозабиватели, гвоздезабиватели, степлеры",
                            path: "/nailer",
                            isUnique: false,
                            position: 1
                        },
                        pneumaticGrinders: {
                            ruName: "Пневмошлифмашины",
                            subcategoryPageRuHeading: "Пневмошлифмашины",
                            path: "/pneumogrinder",
                            isUnique: false,
                            position: 0
                        }
                    }
                },
                machines: {
                    ruName: "Станки",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        woodworkingMachinery: {
                            ruName: "Деревообрабатывающие станки",
                            subcategoryPageRuHeading: "Деревообрабатывающие станки",
                            path: "/woodworking",
                            isUnique: false,
                            position: 0
                        },
                        metalworkingMachinery: {
                            ruName: "Металлообрабатывающие станки",
                            subcategoryPageRuHeading: "Металлообрабатывающие станки",
                            path: "/metalworking",
                            isUnique: false,
                            position: 0
                        },
                        tileCutterMachinery: {
                            ruName: "Плиткорезные станки",
                            subcategoryPageRuHeading: "Станки для резки плитки",
                            path: "/tilecutter?tc_type[0]=tool&tc_type[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        sharpeningMachines: {
                            ruName: "Заточные станки (точила)",
                            subcategoryPageRuHeading: "Заточные станки (точила)",
                            path: "/benchgrinder",
                            isUnique: false,
                            position: 0
                        }
                    }
                },
                buildingAndFinishingMaterials: {
                    ruName: "Строительные и отделочные материалы",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        buildingMaterials: {
                            ruName: "Общестроительные материалы",
                            subcategoryPageRuHeading: "Общестроительные материалы",
                            path: "/buildingmaterial",
                            isUnique: false,
                            position: 0
                        },
                        plaster: {
                            ruName: "Штукатурка",
                            subcategoryPageRuHeading: "Штукатурка",
                            path: "/plaster",
                            isUnique: true,
                            position: 0
                        },
                        adhesiveMixtures: {
                            ruName: "Клеевые смеси",
                            subcategoryPageRuHeading: "Клеевые смеси",
                            path: "/adhesivemix",
                            isUnique: true,
                            position: 0
                        },
                        floorMixtures: {
                            ruName: "Смеси для полов",
                            subcategoryPageRuHeading: "Смеси для полов",
                            path: "/floormix",
                            isUnique: true,
                            position: 0
                        },
                        putty: {
                            ruName: "Шпатлевка",
                            subcategoryPageRuHeading: "Шпатлевка",
                            path: "/putty",
                            isUnique: true,
                            position: 0
                        },
                        primer: {
                            ruName: "Грунтовка",
                            subcategoryPageRuHeading: "Грунтовки",
                            path: "/primer",
                            isUnique: true,
                            position: 0
                        },
                        drywall: {
                            ruName: "Гипсокартон",
                            subcategoryPageRuHeading: "Гипсокартон",
                            path: "/drywall",
                            isUnique: true,
                            position: 0
                        },
                        wallPanels: {
                            ruName: "Стеновые панели",
                            subcategoryPageRuHeading: "Стеновые панели",
                            path: "/wall_panels",
                            isUnique: true,
                            position: 0
                        },
                        ceramicTile: {
                            ruName: "Керамическая плитка, керамогранит",
                            subcategoryPageRuHeading: "Плитка",
                            path: "/tile?t_tile%5B0%5D=ceramic&t_tile%5B1%5D=granite&t_tile%5B2%5D=clinker&t_tile%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        decorativeStone: {
                            ruName: "Декоративный камень и кирпич",
                            subcategoryPageRuHeading: "Декоративный камень и кирпич",
                            path: "/decorative_stone",
                            isUnique: true,
                            position: 0
                        },
                        flexibleStone: {
                            ruName: "Гибкий камень",
                            subcategoryPageRuHeading: "Гибкий камень",
                            path: "/decorative_stone?gibkij-kamen",
                            isUnique: true,
                            position: 0
                        },
                        paintsAndEnamels: {
                            ruName: "Краски и эмали",
                            subcategoryPageRuHeading: "Краски и эмали",
                            path: "/paints",
                            isUnique: true,
                            position: 0
                        },
                        lacquer: {
                            ruName: "Лаки, пропитки, антисептики",
                            subcategoryPageRuHeading: "Лаки, пропитки, антисептики",
                            path: "/lacquer",
                            isUnique: true,
                            position: 0
                        },
                        roofingMaterials: {
                            ruName: "Кровельные материалы",
                            subcategoryPageRuHeading: "Кровельные материалы",
                            path: "/roof",
                            isUnique: true,
                            position: 0
                        },
                        bricks: {
                            ruName: "Кирпич",
                            subcategoryPageRuHeading: "Кирпич, строительные блоки",
                            path: "/bricks",
                            isUnique: false,
                            position: 0
                        },
                        cement: {
                            ruName: "Цемент",
                            subcategoryPageRuHeading: "Цемент",
                            path: "/caementum",
                            isUnique: true,
                            position: 0
                        },
                        pavingSlabs: {
                            ruName: "Тротуарная плитка",
                            subcategoryPageRuHeading: "Тротуарная плитка",
                            path: "/pavers",
                            isUnique: false,
                            position: 0
                        },
                        pipeMetalRolling: {
                            ruName: "Трубный металлопрокат",
                            subcategoryPageRuHeading: "Трубный металлопрокат",
                            path: "/metal_pipes",
                            isUnique: false,
                            position: 0
                        },
                        sheetMetalRolling: {
                            ruName: "Листовой металлопрокат",
                            subcategoryPageRuHeading: "Листовой металлопрокат",
                            path: "/sheetmetal",
                            isUnique: false,
                            position: 0
                        },
                        fittings: {
                            ruName: "Арматура",
                            subcategoryPageRuHeading: "Арматура",
                            path: "/armatura",
                            isUnique: false,
                            position: 0
                        },
                        constructionNets: {
                            ruName: "Строительные сетки",
                            subcategoryPageRuHeading: "Строительные сетки",
                            path: "/rabitz",
                            isUnique: false,
                            position: 0
                        }
                    }
                }
            }
        },
        houseAndGarden: {
            id: 5,
            ruName: "Дом и сад",
            tiles: [
                {
                    ruName: "Сушилки для белья",
                    path: "/linendryer?utm_source=ds_tile&utm_medium=linendryer",
                    isUnique: true
                },
                {
                    ruName: "Корма для кошек",
                    path: "/catfood?utm_source=ds_tile&utm_medium=catfood",
                    isUnique: true
                },
                {
                    ruName: "Кастрюли",
                    path: "/saucepan?utm_source=ds_tile&utm_medium=saucepan",
                    isUnique: true
                },
                {
                    ruName: "Матрасы",
                    path: "/mattress?utm_source=ds_tile&utm_medium=mattress",
                    isUnique: true
                },
                {
                    ruName: "Торшеры",
                    path: "/luster?lu_type%5B0%5D=floorlamp&lu_type%5Boperation%5D=union&utm_source=ds_tile&utm_medium=floorlamp",
                    isUnique: true
                }
            ],
            categories: {
                bathroomAndToilet: {
                    ruName: "Ванная комната и туалет",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        faucets: {
                            ruName: "Смесители",
                            subcategoryPageRuHeading: "Смесители",
                            path: "/faucet",
                            isUnique: false,
                            position: 1
                        },
                        bathtubs: {
                            ruName: "Ванны",
                            subcategoryPageRuHeading: "Ванны",
                            path: "/bathtub",
                            isUnique: false,
                            position: 1
                        },
                        waterHeaters: {
                            ruName: "Водонагреватели",
                            subcategoryPageRuHeading: "Водонагреватели",
                            path: "/waterheater",
                            isUnique: false,
                            position: 2
                        },
                        towelWarmers: {
                            ruName: "Полотенцесушители",
                            subcategoryPageRuHeading: "Полотенцесушители",
                            path: "/towelrail",
                            isUnique: false,
                            position: 2
                        },
                        showerCabins: {
                            ruName: "Душевые кабины",
                            subcategoryPageRuHeading: "Душевые кабины",
                            path: "/showerbox",
                            isUnique: false,
                            position: 1
                        },
                        pans: {
                            ruName: "Унитазы",
                            subcategoryPageRuHeading: "Унитазы",
                            path: "/wcpan",
                            isUnique: false,
                            position: 1
                        },
                        washbasins: {
                            ruName: "Умывальники",
                            subcategoryPageRuHeading: "Умывальники",
                            path: "/washbasin",
                            isUnique: false,
                            position: 1
                        },
                        pedestalForWashbasins: {
                            ruName: "Пьедесталы для умывальников",
                            subcategoryPageRuHeading: "Пьедесталы для умывальников",
                            path: "/pedestal",
                            isUnique: false,
                            position: 1
                        },
                        siphons: {
                            ruName: "Сифоны",
                            subcategoryPageRuHeading: "Сифоны",
                            path: "/siphon",
                            isUnique: false,
                            position: 1
                        },
                        tileForBathrooms: {
                            ruName: "Плитка для ванных комнат",
                            subcategoryPageRuHeading: "Плитка для ванной комнаты",
                            path: "/tile?t_appointment[0]=bathroom&t_appointment[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        furnitureForBathrooms: {
                            ruName: "Мебель для ванных комнат",
                            subcategoryPageRuHeading: "Мебель для ванных комнат",
                            path: "/bath_furniture",
                            isUnique: false,
                            position: 0
                        },
                        bidets: {
                            ruName: "Биде",
                            subcategoryPageRuHeading: "Биде",
                            path: "/bidet",
                            isUnique: false,
                            position: 1
                        },
                        installationsForPansSinksBidets: {
                            ruName: "Инсталляции для унитазов, раковин, биде и писсуаров",
                            subcategoryPageRuHeading: "Инсталляции для унитазов, раковин, биде и писсуаров",
                            path: "/installations",
                            isUnique: false,
                            position: 0
                        },
                        flushingSystems: {
                            ruName: "Клавиши и системы смыва",
                            subcategoryPageRuHeading: "Клавиши и системы смыва",
                            path: "/flushing_system",
                            isUnique: false,
                            position: 1
                        },
                        electronicBidetCovers: {
                            ruName: "Электронные крышки-биде",
                            subcategoryPageRuHeading: "Электронные крышки-биде",
                            path: "/toilet_shower",
                            isUnique: false,
                            position: 1
                        },
                        showerPanels: {
                            ruName: "Душевые панели и гарнитуры",
                            subcategoryPageRuHeading: "Душевые панели и гарнитуры",
                            path: "/shower",
                            isUnique: false,
                            position: 1
                        },
                        showerTrays: {
                            ruName: "Душевые поддоны",
                            subcategoryPageRuHeading: "Душевые поддоны",
                            path: "/shower_trays",
                            isUnique: false,
                            position: 1
                        },
                        exhaustFans: {
                            ruName: "Вытяжные вентиляторы",
                            subcategoryPageRuHeading: "Бытовые вытяжные вентиляторы",
                            path: "/exhaustfan?ef_useage[0]=bathroom&ef_useage[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        accessPanels: {
                            ruName: "Сантехнические ревизионные люки",
                            subcategoryPageRuHeading: "Сантехнические ревизионные люки",
                            path: "/access_panel",
                            isUnique: false,
                            position: 1
                        },
                        dryClosets: {
                            ruName: "Биотуалеты",
                            subcategoryPageRuHeading: "Биотуалеты",
                            path: "/biotoilet",
                            isUnique: false,
                            position: 1
                        },
                        laundryBaskets: {
                            ruName: "Корзины для белья",
                            subcategoryPageRuHeading: "Ящики, корзины, органайзеры",
                            path: "/toystorage?ts_const%5B0%5D=basket&ts_const%5Boperation%5D=union&ts_purpos%5B0%5D=underwear&ts_purpos%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                kitchen: {
                    ruName: "Кухня",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        kitchenSinks: {
                            ruName: "Мойки",
                            subcategoryPageRuHeading: "Кухонные мойки",
                            path: "/kitchensink",
                            isUnique: false,
                            position: 1
                        },
                        faucets: {
                            ruName: "Смесители",
                            subcategoryPageRuHeading: "Смесители",
                            path: "/faucet",
                            isUnique: false,
                            position: 2
                        },
                        ceramicTile: {
                            ruName: "Керамическая плитка",
                            subcategoryPageRuHeading: "Плитка для кухни",
                            path: "/tile?t_appointment%5B0%5D=kitchen&t_appointment%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        foodWasteShredders: {
                            ruName: "Измельчители пищевых отходов",
                            subcategoryPageRuHeading: "Измельчители пищевых отходов",
                            path: "/disposer",
                            isUnique: false,
                            position: 1
                        },

                        filtersAndWaterTreatmentSystems: {
                            ruName: "Фильтры и системы очистки воды",
                            subcategoryPageRuHeading: "Фильтры и системы для очистки воды",
                            path: "/waterfilter",
                            isUnique: false,
                            position: 0
                        },
                        exhaustFans: {
                            ruName: "Вытяжные вентиляторы",
                            subcategoryPageRuHeading: "Бытовые вытяжные вентиляторы",
                            path: "/exhaustfan?ef_useage%5B0%5D=bathroom&ef_useage%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                waterSupplyAndHeating: {
                    ruName: "Водоснабжение, отопление",
                    isUnique: false,
                    containsUnique: true,
                    subCategories: {
                        pumps: {
                            ruName: "Насосы",
                            subcategoryPageRuHeading: "Насосы",
                            path: "/pump",
                            isUnique: false,
                            position: 1
                        },
                        waterHeaters: {
                            ruName: "Водонагреватели",
                            subcategoryPageRuHeading: "Водонагреватели",
                            path: "/waterheater",
                            isUnique: false,
                            position: 3
                        },
                        boilers: {
                            ruName: "отопительные котлы",
                            subcategoryPageRuHeading: "Отопительные котлы",
                            path: "/boiler",
                            isUnique: false,
                            position: 3
                        },
                        filtersAndWaterTreatmentSystems: {
                            ruName: "Фильтры и системы очистки воды",
                            subcategoryPageRuHeading: "Фильтры и системы для очистки воды",
                            path: "/waterfilter",
                            isUnique: false,
                            position: 1
                        },
                        radiators: {
                            ruName: "Радиаторы отопления",
                            subcategoryPageRuHeading: "Радиаторы отопления",
                            path: "/radiators",
                            isUnique: false,
                            position: 2
                        },
                        fireplaces: {
                            ruName: "Дровяные камины, печи-камины, порталы",
                            subcategoryPageRuHeading: "Дровяные камины, печи-камины, порталы",
                            path: "/stove",
                            isUnique: false,
                            position: 1
                        },
                        heaters: {
                            ruName: "Обогреватели",
                            subcategoryPageRuHeading: "Обогреватели",
                            path: "/heater",
                            isUnique: false,
                            position: 1
                        },
                        heatGuns: {
                            ruName: "Тепловые пушки",
                            subcategoryPageRuHeading: "Тепловые пушки",
                            path: "/heat_gun",
                            isUnique: false,
                            position: 1
                        },
                        electricFireplaces: {
                            ruName: "электрокамины и биокамины",
                            subcategoryPageRuHeading: "Электрокамины и биокамины",
                            path: "/electrofireplace",
                            isUnique: false,
                            position: 1
                        },
                        waterAccumulators: {
                            ruName: "Гидроаккумуляторы и расширительные баки",
                            subcategoryPageRuHeading: "Гидроаккумуляторы и расширительные баки",
                            path: "/hydroaccum",
                            isUnique: true,
                            position: 0
                        },
                        motorPumps: {
                            ruName: "Мотопомпы",
                            subcategoryPageRuHeading: "Мотопомпы",
                            path: "/motopump",
                            isUnique: false,
                            position: 1
                        },
                        pipesAndFittings: {
                            ruName: "Трубы, фитинг",
                            subcategoryPageRuHeading: "Трубы, фитинг",
                            path: "/tube_fitting",
                            isUnique: false,
                            position: 1
                        },
                        waterAndGasPipes: {
                            ruName: "Трубы водогазопроводные",
                            subcategoryPageRuHeading: "Водогазопроводные трубы",
                            path: "/metal_pipes?pipe_type_1%5B0%5D=watergas&pipe_type_1%5Boperation%5D=union",
                            isUnique: false,
                            position: 2
                        }
                    }
                },
                furniture: {
                    ruName: "Мебель для дома",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        officeArmchairsAndChairs: {
                            ruName: "Офисные кресла и стулья",
                            subcategoryPageRuHeading: "Офисные кресла и стулья",
                            path: "/office_chair?asgmt%5B0%5D=visitor&asgmt%5B1%5D=staff&asgmt%5B2%5D=boss&asgmt%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        gamingChairs: {
                            ruName: "Геймерские кресла",
                            subcategoryPageRuHeading: "Офисные кресла и стулья",
                            path: "/office_chair?asgmt%5B0%5D=game&asgmt%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        sofas: {
                            ruName: "Диваны",
                            subcategoryPageRuHeading: "Диваны",
                            path: "/divan",
                            isUnique: true,
                            position: 0
                        },
                        tables: {
                            ruName: "Столы",
                            subcategoryPageRuHeading: "Столы",
                            path: "/table",
                            isUnique: true,
                            position: 0
                        },
                        chairsForKitchenAndBar: {
                            ruName: "Стулья для кухни и бара",
                            subcategoryPageRuHeading: "Стулья для кухни и бара",
                            path: "/chair",
                            isUnique: true,
                            position: 0
                        },
                        armchairs: {
                            ruName: "Кресла",
                            subcategoryPageRuHeading: "Кресла",
                            path: "/interior_chair",
                            isUnique: true,
                            position: 0
                        },
                        beds: {
                            ruName: "Кровати",
                            subcategoryPageRuHeading: "Кровати",
                            path: "/bed",
                            isUnique: true,
                            position: 0
                        },
                        furnitureForBathrooms: {
                            ruName: "Мебель ля ванных комнат",
                            subcategoryPageRuHeading: "Мебель для ванных комнат",
                            path: "/bath_furniture",
                            isUnique: false,
                            position: 1
                        },
                        cots: {
                            ruName: "Детские кроватки",
                            subcategoryPageRuHeading: "Детские кроватки",
                            path: "/babycotbed",
                            isUnique: false,
                            position: 0
                        },
                        childrenTablesAndSchoolDesks: {
                            ruName: "Детские столы и парты",
                            subcategoryPageRuHeading: "Детские парты, столы, стулья",
                            path: "/kidsdesk",
                            isUnique: false,
                            position: 0
                        },
                        childrenDressers: {
                            ruName: "Детские комоды",
                            subcategoryPageRuHeading: "Детские комоды",
                            path: "/babydresser",
                            isUnique: false,
                            position: 0
                        },
                        boxesBasketsOrganizers: {
                            ruName: "Ящики, корзины, органайзеры",
                            subcategoryPageRuHeading: "Ящики, корзины, органайзеры",
                            path: "/toystorage",
                            isUnique: true,
                            position: 0
                        },
                        inflatableFurniture: {
                            ruName: "Надувная мебель",
                            subcategoryPageRuHeading: "Надувная мебель",
                            path: "/airbed",
                            isUnique: false,
                            position: 0
                        },
                        framelessFurniture: {
                            ruName: "Бескаркасная мебель",
                            subcategoryPageRuHeading: "Бескаркасная мебель",
                            path: "/beanbag",
                            isUnique: true,
                            position: 0
                        },
                        bedBases: {
                            ruName: "Основания для кроватей",
                            subcategoryPageRuHeading: "Ортопедические основания",
                            path: "/orthobase",
                            isUnique: true,
                            position: 0
                        },
                        massagersAndMassageChairs: {
                            ruName: "Массажеры и массажные кресла",
                            subcategoryPageRuHeading: "Массажеры и массажные кресла",
                            path: "/massagechair",
                            isUnique: false,
                            position: 0
                        }
                    }
                },
                bedroom: {
                    ruName: "Товары для спальни и домашний текстиль",
                    isUnique: false,
                    containsUnique: true,
                    subCategories: {
                        mattresses: {
                            ruName: "Матрасы",
                            subcategoryPageRuHeading: "Матрасы",
                            path: "/mattress",
                            isUnique: true,
                            position: 0
                        },
                        orthopedicPillows: {
                            ruName: "Ортопедические подушки",
                            subcategoryPageRuHeading: "Ортопедические подушки",
                            path: "/pillow",
                            isUnique: true,
                            position: 0
                        },
                        classicPillows: {
                            ruName: "Классические подушки для сна",
                            subcategoryPageRuHeading: "Подушки для сна",
                            path: "/pillows?pil_type%5B0%5D=sleep&pil_type%5Boperation%5D=union&order=price:asc",
                            isUnique: true,
                            position: 0
                        },
                        blankets: {
                            ruName: "Одеяла",
                            subcategoryPageRuHeading: "Одеяла и подушки",
                            path: "/pillows?pil_type%5B0%5D=blanket&pil_type%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        plaids: {
                            ruName: "Пледы, покрывала",
                            subcategoryPageRuHeading: "Пледы, покрывала",
                            path: "/plaid",
                            isUnique: true,
                            position: 0
                        },
                        bedlinen: {
                            ruName: "Постельное белье",
                            subcategoryPageRuHeading: "Постельное белье",
                            path: "/bedlinen",
                            isUnique: true,
                            position: 0
                        },
                        mattressPads: {
                            ruName: "Наматрасники",
                            subcategoryPageRuHeading: "Наматрасники",
                            path: "/mattresspad",
                            isUnique: true,
                            position: 0
                        },
                        electricLinen: {
                            ruName: "Электрогрелки, электроодеяла, электропростыни",
                            subcategoryPageRuHeading: "Электрогрелки, электроодеяла, электропростыни",
                            path: "/mobile_heater",
                            isUnique: false,
                            position: 0
                        },
                        maternityPillows: {
                            ruName: "Подушки для беременных",
                            subcategoryPageRuHeading: "Одеяла и подушки",
                            path: "/pillows?pil_type%5B0%5D=forpregnantwom&pil_type%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        decorativePillows: {
                            ruName: "Декоративные подушки",
                            subcategoryPageRuHeading: "Декоративные подушки",
                            path: "/pillows?pil_type%5B0%5D=decor&pil_type%5Boperation%5D=union",
                            isUnique: false,
                            position: 0
                        }
                    }
                },
                gardenToolsAndMachines: {
                    ruName: "Садовая техника и инструменты",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        miniTractors: {
                            ruName: "Мини-тракторы",
                            subcategoryPageRuHeading: "Мини-тракторы",
                            path: "/minitractor",
                            isUnique: false,
                            position: 0
                        },
                        motorBlocks: {
                            ruName: "Мотоблоки и мультикультиваторы",
                            subcategoryPageRuHeading: "Мотоблоки и мотокультиваторы",
                            path: "/motoblock",
                            isUnique: true,
                            position: 0
                        },
                        attachmentsForGardenEquipment: {
                            ruName: "Навесное оборудование для садовой техники",
                            subcategoryPageRuHeading: "Навесное оборудование для садовой техники",
                            path: "/attachmentgarden",
                            isUnique: true,
                            position: 0
                        },
                        engines: {
                            ruName: "Двигатели",
                            subcategoryPageRuHeading: "Двигатели",
                            path: "/engine",
                            isUnique: true,
                            position: 0
                        },
                        trimmers: {
                            ruName: "Триммеры",
                            subcategoryPageRuHeading: "Триммеры",
                            path: "/trimmers",
                            isUnique: true,
                            position: 0
                        },
                        mowers: {
                            ruName: "Газонокосилки",
                            subcategoryPageRuHeading: "Газонокосилки",
                            path: "/mowers",
                            isUnique: true,
                            position: 0
                        },
                        toolsAccumulators: {
                            ruName: "Аккумуляторы и зарядные устройства для инструмента",
                            subcategoryPageRuHeading: "Аккумуляторы и зарядные устройства для инструмента",
                            path: "/tools_accum",
                            isUnique: false,
                            position: 1
                        },
                        aerators: {
                            ruName: "Аэраторы, скарификаторы",
                            subcategoryPageRuHeading: "Газонокосилки",
                            path: "/mowers?type_mowing%5B0%5D=scarifier&type_mowing%5B1%5D=aerator&type_mowing%5B2%5D=scarifieraera&type_mowing%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        chainSaws: {
                            ruName: "Цепные пилы",
                            subcategoryPageRuHeading: "Электро- и бензопилы",
                            path: "/chainsaw",
                            isUnique: true,
                            position: 0
                        },
                        householdVacuumCleaners: {
                            ruName: "Хозяйственные пылесосы",
                            subcategoryPageRuHeading: "Хозяйственные пылесосы",
                            path: "/vacuumcleaner?vc_type%5B0%5D=wetdryvc&vc_type%5Boperation%5D=union",
                            isUnique: false,
                            position: 2
                        },
                        logSplitters: {
                            ruName: "Дровоколы",
                            subcategoryPageRuHeading: "Дровоколы",
                            path: "/logsplitter",
                            isUnique: true,
                            position: 0
                        },
                        pressureWashers: {
                            ruName: "Мойки высокого давления",
                            subcategoryPageRuHeading: "Мойки высокого давления",
                            path: "/washers",
                            isUnique: false,
                            position: 0
                        },
                        hedgeTrimmers: {
                            ruName: "Кусторезы и высоторезы",
                            subcategoryPageRuHeading: "Кусторезы и садовые ножницы",
                            path: "/hedgetrimmers",
                            isUnique: true,
                            position: 0
                        },
                        gardenShredders: {
                            ruName: "Садовые измельчители",
                            subcategoryPageRuHeading: "Садовые измельчители",
                            path: "/gardenshredder",
                            isUnique: true,
                            position: 0
                        },
                        snowBlowers: {
                            ruName: "Снегоуборщики",
                            subcategoryPageRuHeading: "Снегоуборщики",
                            path: "/snowblower",
                            isUnique: true,
                            position: 0
                        },
                        leafBlowers: {
                            ruName: "Воздуходувки",
                            subcategoryPageRuHeading: "Воздуходувки",
                            path: "/leafblower",
                            isUnique: true,
                            position: 0
                        },
                        gardenTools: {
                            ruName: "Садовый инструмент",
                            subcategoryPageRuHeading: "Садовый инструмент",
                            path: "/gardentool",
                            isUnique: false,
                            position: 0
                        },
                        wateringHoses: {
                            ruName: "Поливочные шланги",
                            subcategoryPageRuHeading: "Поливочные шланги",
                            path: "/garden_hose",
                            isUnique: false,
                            position: 0
                        },
                        automaticWateringSystems: {
                            ruName: "Системы автоматического полива, распылители",
                            subcategoryPageRuHeading: "Системы автоматического полива, распылители",
                            path: "/watering_system",
                            isUnique: false,
                            position: 0
                        },
                        gardenBarrows: {
                            ruName: "Садовые тачки",
                            subcategoryPageRuHeading: "Садовые и строительные тачки",
                            path: "/barrow",
                            isUnique: false,
                            position: 1
                        },
                        stairsAndLadders: {
                            ruName: "Лестницы и стремянки",
                            subcategoryPageRuHeading: "Лестницы и стремянки",
                            path: "/stairandladder",
                            isUnique: false,
                            position: 1
                        }
                    }
                },
                dacha: {
                    ruName: "Отдых на даче",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        baths: {
                            ruName: "Бани, купели",
                            subcategoryPageRuHeading: "Бани, купели",
                            path: "/bath",
                            isUnique: true,
                            position: 0
                        },
                        gazeboses: {
                            ruName: "Беседки",
                            subcategoryPageRuHeading: "Беседки",
                            path: "/garden_house",
                            isUnique: false,
                            position: 0
                        },
                        pools: {
                            ruName: "Бассейны",
                            subcategoryPageRuHeading: "Бассейны",
                            path: "/pool",
                            isUnique: false,
                            position: 0
                        },
                        grills: {
                            ruName: "Мангалы, грили, барбекю",
                            subcategoryPageRuHeading: "Мангалы, грили, барбекю",
                            path: "/grill",
                            isUnique: false,
                            position: 0
                        },
                        bbqFacilities: {
                            ruName: "Принадлежности для барбекю, грилей, мангалов",
                            subcategoryPageRuHeading: "Принадлежности для барбекю, грилей, мангалов",
                            path: "/bbq_accessories",
                            isUnique: false,
                            position: 0
                        },
                        bathStoves: {
                            ruName: "Банные печи",
                            subcategoryPageRuHeading: "Банные печи",
                            path: "/bathstove",
                            isUnique: true,
                            position: 0
                        },
                        childrenStreetComplexesAndHills: {
                            ruName: "Детские уличные комплексы и горки",
                            subcategoryPageRuHeading: "Детские уличные комплексы и горки",
                            path: "/kidwallbars?kwb_type[0]=outdoor&kwb_type[operation]=union",
                            isUnique: false,
                            position: 0
                        },
                        gardenSwing: {
                            ruName: "Садовые качели",
                            subcategoryPageRuHeading: "Садовые качели",
                            path: "/gardenswing",
                            isUnique: false,
                            position: 0
                        },
                        trampolines: {
                            ruName: "Батуты",
                            subcategoryPageRuHeading: "Батуты",
                            path: "/trampoline",
                            isUnique: false,
                            position: 0
                        },
                        gardenFurniture: {
                            ruName: "Садовая мебель",
                            subcategoryPageRuHeading: "Садовая мебель",
                            path: "/gardenfurniture",
                            isUnique: true,
                            position: 0
                        },
                        hammocks: {
                            ruName: "Гамаки",
                            subcategoryPageRuHeading: "Гамаки",
                            path: "/hammock",
                            isUnique: true,
                            position: 0
                        },
                        tents: {
                            ruName: "Шатры, тенты",
                            subcategoryPageRuHeading: "Шатры, тенты",
                            path: "/canopy_tents",
                            isUnique: true,
                            position: 0
                        },
                        loungers: {
                            ruName: "Шезлонги",
                            subcategoryPageRuHeading: "Шезлонги",
                            path: "/lounger",
                            isUnique: true,
                            position: 0
                        },
                        streetUmbrellas: {
                            ruName: "Зонты садовые, пляжные",
                            subcategoryPageRuHeading: "Зонты садовые, пляжные",
                            path: "/street_umbrella",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                siteArrangement: {
                    ruName: "Обустройство участка",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        houses: {
                            ruName: "Дома, коттеджи",
                            subcategoryPageRuHeading: "Дома, коттеджи (раздел закрыт)",
                            path: "/house",
                            isUnique: true,
                            position: 0
                        },
                        gazeboses: {
                            ruName: "Беседки",
                            subcategoryPageRuHeading: "Беседки",
                            path: "/garden_house",
                            isUnique: false,
                            position: 1
                        },
                        gardenCabins: {
                            ruName: "Дачные бытовки и хозблоки",
                            subcategoryPageRuHeading: "Дачные бытовки и хозблоки",
                            path: "/garden_cabin",
                            isUnique: true,
                            position: 0
                        },
                        streetLightning: {
                            ruName: "Уличное освещение",
                            subcategoryPageRuHeading: "Люстры и светильники",
                            path: "/luster?lu_arrangement%5B0%5D=street&lu_arrangement%5Boperation%5D=union",
                            isUnique: false,
                            position: 0
                        },
                        streetClothesDryers: {
                            ruName: "Уличные сушки для белья",
                            subcategoryPageRuHeading: "Уличные сушки для белья",
                            path: "/linendryer?dr_mounting[0]=ground&dr_mounting[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        insectKillers: {
                            ruName: "Уничтожители насекомых",
                            subcategoryPageRuHeading: "Уничтожители насекомых, отпугиватели, ловушки",
                            path: "/insect_killer",
                            isUnique: false,
                            position: 1
                        },
                        summerShowers: {
                            ruName: "Летние души",
                            subcategoryPageRuHeading: "Летние души и умывальники для дач",
                            path: "/summer_shower",
                            isUnique: true,
                            position: 0
                        },
                        countryToilets: {
                            ruName: "Дачные туалеты",
                            subcategoryPageRuHeading: "Дачные туалеты",
                            path: "/outdoor_toilet",
                            isUnique: true,
                            position: 0
                        },
                        dryClosets: {
                            ruName: "Биотуалеты",
                            subcategoryPageRuHeading: "Биотуалеты",
                            path: "/biotoilet",
                            isUnique: false,
                            position: 2
                        },
                        meansForDryClosets: {
                            ruName: "Средства для биотуалетов, выгребных ям",
                            subcategoryPageRuHeading: "Средства для биотуалетов, выгребных ям",
                            path: "/wc_liquid",
                            isUnique: true,
                            position: 0
                        },
                        brickTile: {
                            ruName: "Клинкерная плитка",
                            subcategoryPageRuHeading: "Клинкерная плитка",
                            path: "/tile?t_tile%5B0%5D=clinker&t_tile%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        pavingSlabs: {
                            ruName: "Тротуарная плитка",
                            subcategoryPageRuHeading: "Тротуарная плитка",
                            path: "/pavers",
                            isUnique: false,
                            position: 1
                        },
                        plantersAndPotsForPlants: {
                            ruName: "Кашпо, горшки для растений",
                            subcategoryPageRuHeading: "Кашпо, горшки для растений",
                            path: "/flowerpot",
                            isUnique: false,
                            position: 0
                        },
                        rabitz: {
                            ruName: "Сетка-рабица",
                            subcategoryPageRuHeading: "Строительные сетки",
                            path: "/rabitz?mfr[0]=setkarabitza",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                decorAndInterior: {
                    ruName: "Декор и интерьер",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        interiorClocks: {
                            ruName: "Интерьерные часы",
                            subcategoryPageRuHeading: "Интерьерные часы",
                            path: "/interior_clock",
                            isUnique: true,
                            position: 0
                        },
                        nightLights: {
                            ruName: "Ночники",
                            subcategoryPageRuHeading: "Люстры и светильники",
                            path: "/luster?lu_type%5B0%5D=nightlight&lu_type%5Boperation%5D=union",
                            isUnique: false,
                            position: 0
                        },
                        floorLamps: {
                            ruName: "Торшеры",
                            subcategoryPageRuHeading: "Люстры и светильники",
                            path: "/luster?lu_type%5B0%5D=floorlamp&lu_type%5Boperation%5D=union",
                            isUnique: false,
                            position: 0
                        },
                        meteoStations: {
                            ruName: "Метеостанции",
                            subcategoryPageRuHeading: "Метеостанции",
                            path: "/meteostations",
                            isUnique: false,
                            position: 1
                        },
                        electricFireplaces: {
                            ruName: "Электрокамины и биокамины",
                            subcategoryPageRuHeading: "Электрокамины и биокамины",
                            path: "/electrofireplace",
                            isUnique: false,
                            position: 2
                        },
                        decorativePillows: {
                            ruName: "Декоративные подушки",
                            subcategoryPageRuHeading: "Декоративные подушки",
                            path: "/pillows?pil_type%5B0%5D=decor&pil_type%5Boperation%5D=union",
                            isUnique: false,
                            position: 1
                        },
                        houseplants: {
                            ruName: "Комнатные растения, флорариумы",
                            subcategoryPageRuHeading: "Комнатные растения, флорариумы",
                            path: "/houseplant",
                            isUnique: false,
                            position: 0
                        }
                    }
                },
                lightningAndPowerSupply: {
                    ruName: "Освещение и электропитание",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        chandeliersAndLamps: {
                            ruName: "Люстры и светильники",
                            subcategoryPageRuHeading: "Люстры и светильники",
                            path: "/luster",
                            isUnique: false,
                            position: 1
                        },
                        tableLamps: {
                            ruName: "Настольные лампы",
                            subcategoryPageRuHeading: "Люстры и светильники",
                            path: "/luster?lu_type%5B0%5D=light&lu_type%5Boperation%5D=union&lu_arrangement%5B0%5D=table&lu_arrangement%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        floorLamps: {
                            ruName: "Торшеры",
                            subcategoryPageRuHeading: "Люстры и светильники",
                            path: "/luster?lu_type%5B0%5D=floorlamp&lu_type%5Boperation%5D=union",
                            isUnique: false,
                            position: 1
                        },
                        nightLights: {
                            ruName: "Ночники",
                            subcategoryPageRuHeading: "Люстры и светильники",
                            path: "/luster?lu_type%5B0%5D=nightlight&lu_type%5Boperation%5D=union",
                            isUnique: false,
                            position: 1
                        },
                        streetLightning: {
                            ruName: "Уличное освещение",
                            subcategoryPageRuHeading: "Люстры и светильники",
                            path: "/luster?lu_arrangement%5B0%5D=street&lu_arrangement%5Boperation%5D=union",
                            isUnique: false,
                            position: 1
                        },
                        bulbs: {
                            ruName: "Лампочки",
                            subcategoryPageRuHeading: "Лампочки",
                            path: "/lightbulb",
                            isUnique: false,
                            position: 1
                        },
                        socketsAndSwitches: {
                            ruName: "Розетки, выключатели",
                            subcategoryPageRuHeading: "Розетки, выключатели",
                            path: "/wall_socket",
                            isUnique: false,
                            position: 1
                        },
                        stabilizersAndSurgeProtectors: {
                            ruName: "Стабилизаторы напряжения и сетевые фильтры",
                            subcategoryPageRuHeading: "Стабилизаторы и сетевые фильтры",
                            path: "/voltageregulator?voltage_type[0]=stabilizer&voltage_type[operation]=union",
                            isUnique: false,
                            position: 1
                        },
                        generators: {
                            ruName: "Генераторы",
                            subcategoryPageRuHeading: "Генераторы",
                            path: "/powerstations",
                            isUnique: false,
                            position: 2
                        }
                    }
                },
                smartHouseAndSecurity: {
                    ruName: "Умный дом и безопасность",
                    isUnique: false,
                    containsUnique: true,
                    subCategories: {
                        smartHome: {
                            ruName: "Умный дом",
                            subcategoryPageRuHeading: "Умный дом",
                            path: "/smart_home",
                            isUnique: false,
                            position: 0
                        },
                        smartThermostats: {
                            ruName: "Умные терморегуляторы",
                            subcategoryPageRuHeading: "Терморегуляторы",
                            path: "/thermostat?smarthome=1",
                            isUnique: false,
                            position: 1
                        },
                        smartBulbs: {
                            ruName: "Умные лампочки",
                            subcategoryPageRuHeading: "Лампочки",
                            path: "/lightbulb?lib_smartlight=1",
                            isUnique: false,
                            position: 1
                        },
                        smartSockets: {
                            ruName: "Умные розетки",
                            subcategoryPageRuHeading: "Розетки, выключатели",
                            path: "/wall_socket?wallsoc_smart=1",
                            isUnique: false,
                            position: 1
                        },
                        ipCameras: {
                            ruName: "IP-камеры",
                            subcategoryPageRuHeading: "IP-камеры",
                            path: "/ipcamera",
                            isUnique: false,
                            position: 3
                        },
                        videoDoorPhones: {
                            ruName: "Видеодомофоны",
                            subcategoryPageRuHeading: "Видеодомофоны",
                            path: "/videodoorphone",
                            isUnique: false,
                            position: 1
                        },
                        CCTV: {
                            ruName: "Камеры CCTV",
                            subcategoryPageRuHeading: "Камеры CCTV",
                            path: "/cctvcamera",
                            isUnique: false,
                            position: 1
                        },
                        DVRs: {
                            ruName: "Видеорегистраторы",
                            subcategoryPageRuHeading: "Видеорегистраторы наблюдения",
                            path: "/dvr",
                            isUnique: false,
                            position: 1
                        },
                        cameraTraps: {
                            ruName: "Фотоловушки",
                            subcategoryPageRuHeading: "Фотоловушки",
                            path: "/camera_traps",
                            isUnique: false,
                            position: 1
                        },
                        metalDoors: {
                            ruName: "Входные двери",
                            subcategoryPageRuHeading: "Металлические двери",
                            path: "/steeldoor",
                            isUnique: false,
                            position: 1
                        },
                        extinguishers: {
                            ruName: "Огнетушители",
                            subcategoryPageRuHeading: "Огнетушители",
                            path: "/extinguisher",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                clothingCare: {
                    ruName: "Уход за одеждой, стирка",
                    isUnique: false,
                    containsUnique: false,
                    subCategories: {
                        linenDryers: {
                            ruName: "Сушилки для белья",
                            subcategoryPageRuHeading: "Сушилки для белья",
                            path: "/linendryer",
                            isUnique: false,
                            position: 1
                        },
                        ironingBoards: {
                            ruName: "Гладильные доски",
                            subcategoryPageRuHeading: "Гладильные доски",
                            path: "/ironingboard",
                            isUnique: false,
                            position: 1
                        },
                        laundryAndCareProducts: {
                            ruName: "Средства для стирки и ухода за бельем",
                            subcategoryPageRuHeading: "Стиральные порошки",
                            path: "/washingpowder",
                            isUnique: false,
                            position: 1
                        },
                        dishwasherTools: {
                            ruName: "Средства для посудомоечных машин",
                            subcategoryPageRuHeading: "Таблетки для посудомоечных машин",
                            path: "/dishwashertablet",
                            isUnique: false,
                            position: 1
                        }
                    }
                },
                dishes: {
                    ruName: "Посуда и продукты питания",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        pans: {
                            ruName: "Сковороды",
                            subcategoryPageRuHeading: "Сковороды",
                            path: "/pan",
                            isUnique: true,
                            position: 0
                        },
                        stewpans: {
                            ruName: "Сотейники",
                            subcategoryPageRuHeading: "Сотейники",
                            path: "/pan?p_type[0]=saucepan&p_type[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        saucepans: {
                            ruName: "Кастрюли",
                            subcategoryPageRuHeading: "Кастрюли",
                            path: "/saucepan",
                            isUnique: true,
                            position: 0
                        },
                        lids: {
                            ruName: "Крышки для посуды",
                            subcategoryPageRuHeading: "Крышки для посуды",
                            path: "/lids",
                            isUnique: true,
                            position: 0
                        },
                        kettles: {
                            ruName: "Чайники",
                            subcategoryPageRuHeading: "Чайники",
                            path: "/kettles",
                            isUnique: false,
                            position: 1
                        },
                        teapots: {
                            ruName: "Заварочные чайники, кофеварки, френч-прессы",
                            subcategoryPageRuHeading: "Заварочные чайники, кофеварки, френч-прессы",
                            path: "/teapot",
                            isUnique: false,
                            position: 1
                        },
                        dishesSets: {
                            ruName: "Сервизы и наборы столовой посуды",
                            subcategoryPageRuHeading: "Сервизы и наборы столовой посуды",
                            path: "/dishset",
                            isUnique: true,
                            position: 0
                        },
                        cutlery: {
                            ruName: "Столовые приборы",
                            subcategoryPageRuHeading: "Столовые приборы",
                            path: "/cutlery",
                            isUnique: true,
                            position: 0
                        },
                        kitchenKnifesAndScissors: {
                            ruName: "Кухонные ножи и ножницы",
                            subcategoryPageRuHeading: "Кухонные ножи и ножницы",
                            path: "/kitchen_knife",
                            isUnique: true,
                            position: 0
                        },
                        bakingDishesAndBakingSheets: {
                            ruName: "Формы для выпечки, противни",
                            subcategoryPageRuHeading: "Формы для выпечки, противни",
                            path: "/breadpan",
                            isUnique: true,
                            position: 0
                        },
                        barAccessories: {
                            ruName: "Аксессуары для бара",
                            subcategoryPageRuHeading: "Аксессуары для бара",
                            path: "/bar_accessories",
                            isUnique: true,
                            position: 0
                        },
                        thermosesAndThermomugs: {
                            ruName: "Термосы, термокружки",
                            subcategoryPageRuHeading: "Термосы, термокружки",
                            path: "/thermosbottle",
                            isUnique: false,
                            position: 0
                        },
                        coffee: {
                            ruName: "Кофе",
                            subcategoryPageRuHeading: "Кофе",
                            path: "/coffeejava",
                            isUnique: false,
                            position: 1
                        }
                    }
                },
                celebrations: {
                    ruName: "Праздники",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        flowersBouquets: {
                            ruName: "Цветы, букеты",
                            subcategoryPageRuHeading: "Цветы, букеты",
                            path: "/flowersbouquets",
                            isUnique: true,
                            position: 0
                        },
                        stuffedToys: {
                            ruName: "Мягкие игрушки",
                            subcategoryPageRuHeading: "Мягкие игрушки",
                            path: "/stuffedtoys",
                            isUnique: false,
                            position: 0
                        },
                        xmasTrees: {
                            ruName: "Елки",
                            subcategoryPageRuHeading: "Новогодние елки",
                            path: "/tree",
                            isUnique: true,
                            position: 0
                        },
                        xmasLights: {
                            ruName: "Электрические гирлянды",
                            subcategoryPageRuHeading: "Новогодние гирлянды",
                            path: "/xmaslights",
                            isUnique: true,
                            position: 0
                        },
                        xmaslightsTreesAndFigures: {
                            ruName: "Световые деревья, фигуры",
                            subcategoryPageRuHeading: "Световые деревья, фигуры",
                            path: "/xmaslights?xl_type[0]=2d&xl_type[1]=tree&xl_type[2]=3d&xl_type[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        xmasToysAndDecorations: {
                            ruName: "Елочные игрушки, украшения",
                            subcategoryPageRuHeading: "Елочные игрушки и новогодние украшения",
                            path: "/christmasdecor",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                petSupplies: {
                    ruName: "Зоотовары",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        dogFood: {
                            ruName: "Корма для собак",
                            subcategoryPageRuHeading: "Корма для собак",
                            path: "/foodfordog",
                            isUnique: true,
                            position: 0
                        },
                        catFood: {
                            ruName: "Корма для кошек",
                            subcategoryPageRuHeading: "Корма для кошек",
                            path: "/catfood",
                            isUnique: true,
                            position: 0
                        },
                        animalPlates: {
                            ruName: "Миски, поилки, кормушки для животных",
                            subcategoryPageRuHeading: "Миски, поилки, кормушки для животных",
                            path: "/animal_plate",
                            isUnique: true,
                            position: 0
                        },
                        toiletsFillers: {
                            ruName: "Наполнители для туалетов",
                            subcategoryPageRuHeading: "Туалеты, наполнители, подгузники для животных",
                            path: "/catlitter?catlit_typ%5B0%5D=type6&catlit_typ%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        toiletsForAnimals: {
                            ruName: "Туалеты",
                            subcategoryPageRuHeading: "Туалеты, наполнители, подгузники для животных",
                            path: "/catlitter?catlit_typ%5B0%5D=type1&catlit_typ%5B1%5D=type2&catlit_typ%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        bagsForAnimals: {
                            ruName: "Сумки, переноски для животных",
                            subcategoryPageRuHeading: "Сумки, переноски для животных",
                            path: "/pet_carrier",
                            isUnique: true,
                            position: 0
                        },
                        loungersForAnimals: {
                            ruName: "Лежанки, домики, когтеточки для кошек и собак",
                            subcategoryPageRuHeading: "Лежанки, домики, когтеточки для кошек и собак",
                            path: "/pet_house",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                plantGrowing: {
                    ruName: "Растениеводство",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        gardenTools: {
                            ruName: "Садовый инструмент",
                            subcategoryPageRuHeading: "Садовый инструмент",
                            path: "/gardentool",
                            isUnique: false,
                            position: 1
                        },
                        greenhousesAndHotbeds: {
                            ruName: "Теплицы и парники",
                            subcategoryPageRuHeading: "Теплицы и парники",
                            path: "/greenhouse",
                            isUnique: true,
                            position: 0
                        },
                        polycarbonateForGreenhouses: {
                            ruName: "Поликарбонат для теплиц",
                            subcategoryPageRuHeading: "Сотовый поликарбонат",
                            path: "/polycarbonate",
                            isUnique: true,
                            position: 0
                        },
                        coveringMaterials: {
                            ruName: "Укрывной материал",
                            subcategoryPageRuHeading: "Укрывной материал",
                            path: "/coveringmaterial",
                            isUnique: true,
                            position: 0
                        },
                        wateringHoses: {
                            ruName: "Поливочные шланги",
                            subcategoryPageRuHeading: "Поливочные шланги",
                            path: "/garden_hose",
                            isUnique: false,
                            position: 1
                        },
                        automaticWateringSystems: {
                            ruName: "Системы автоматического полива, распылители",
                            subcategoryPageRuHeading: "Системы автоматического полива, распылители",
                            path: "/watering_system",
                            isUnique: false,
                            position: 1
                        },
                        houseplants: {
                            ruName: "Комнатные растения, флорариумы",
                            subcategoryPageRuHeading: "Комнатные растения, флорариумы",
                            path: "/houseplant",
                            isUnique: false,
                            position: 1
                        },
                        plantersAndPotsForPlants: {
                            ruName: "Кашпо, горшки для растений",
                            subcategoryPageRuHeading: "Кашпо, горшки для растений",
                            path: "/flowerpot",
                            isUnique: false,
                            position: 1
                        },
                        grassSeedsAndLawn: {
                            ruName: "Семена трав, газон",
                            subcategoryPageRuHeading: "Семена трав, газон",
                            path: "/lawn",
                            isUnique: true,
                            position: 0
                        },
                        soilForPlants: {
                            ruName: "Грунты для растений",
                            subcategoryPageRuHeading: "Грунты для растений",
                            path: "/soilforplants",
                            isUnique: true,
                            position: 0
                        },
                        fertilizers: {
                            ruName: "Удобрения",
                            subcategoryPageRuHeading: "Удобрения",
                            path: "/fertilizer",
                            isUnique: true,
                            position: 0
                        },
                        saplingsOfFruitTreesAndBushes: {
                            ruName: "Саженцы плодовых деревьев и кустарников",
                            subcategoryPageRuHeading: "Саженцы деревьев и кустарников",
                            path: "/shrubtree?fs_vid%5B0%5D=plod&fs_vid%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        saplingsOfDecorativeBushes: {
                            ruName: "Саженцы декоративных кустарников",
                            subcategoryPageRuHeading: "Саженцы деревьев и кустарников",
                            path: "/shrubtree?fs_type%5B0%5D=shrub&fs_type%5Boperation%5D=union&fs_vid%5B0%5D=dekor&fs_vid%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        saplingsOfConiferousBushes: {
                            ruName: "Саженцы хвойных растений",
                            subcategoryPageRuHeading: "Саженцы хвойных растений",
                            path: "/shrubtree?fs_appearance%5B0%5D=coniferous&fs_appearance%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        flowerSeeds: {
                            ruName: "Семена цветов",
                            subcategoryPageRuHeading: "Семена цветов",
                            path: "/flowersseed?vs_reproduction%5B0%5D=seed&vs_reproduction%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        flowerBulbs: {
                            ruName: "Луковицы цветов",
                            subcategoryPageRuHeading: "Семена цветов",
                            path: "/flowersseed?vs_reproduction%5B0%5D=bulbs&vs_reproduction%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        seedsOfVegetablesHerbsAndBerries: {
                            ruName: "Семена овощей, зелени и ягод",
                            subcategoryPageRuHeading: "Семена овощей, зелени и ягод",
                            path: "/vegetableseed",
                            isUnique: true,
                            position: 0
                        }
                    }
                }
            }
        },
        carsAndMotorcycles: {
            id: 6,
            ruName: "Авто и мото",
            tiles: [
                {
                    ruName: "Динамометрические ключи и отвертки",
                    path: "/torque_wrenches?utm_source=am_tile&utm_medium=torque_wrenches",
                    isUnique: true
                },
                {
                    ruName: "Автомагнитолы",
                    path: "/caraudio?utm_source=am_tile&utm_medium=caraudio",
                    isUnique: true
                },
                {
                    ruName: "Автоакустика",
                    path: "/carspeakers?utm_source=am_tile&utm_medium=carspeakers",
                    isUnique: true
                },
                {
                    ruName: "Автомобильные аккумуляторы",
                    path: "/carbattery?utm_source=am_tile&utm_medium=carbattery",
                    isUnique: true
                },
                {
                    ruName: "Автомобильные диски",
                    path: "/wheel?utm_source=am_tile&utm_medium=wheel",
                    isUnique: true
                },
            ],
            categories: {
                sparePartsAndTechnicalFluids: {
                    ruName: "Запчасти и технические жидкости",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        tires: {
                            ruName: "Шины",
                            subcategoryPageRuHeading: "Автомобильные шины",
                            path: "/tires",
                            isUnique: true,
                            position: 0
                        },
                        motorOil: {
                            ruName: "Моторные масла",
                            subcategoryPageRuHeading: "Моторные масла",
                            path: "/motor_oil",
                            isUnique: true,
                            position: 0
                        },
                        carBatteries: {
                            ruName: "Аккумуляторы",
                            subcategoryPageRuHeading: "Автомобильные аккумуляторы",
                            path: "/carbattery",
                            isUnique: true,
                            position: 0
                        },
                        wheels: {
                            ruName: "Диски",
                            subcategoryPageRuHeading: "Автомобильные диски",
                            path: "/wheel",
                            isUnique: true,
                            position: 0
                        },
                        gearOil: {
                            ruName: "Трансмиссионные масла",
                            subcategoryPageRuHeading: "Трансмиссионные масла",
                            path: "/gearoil",
                            isUnique: true,
                            position: 0
                        },
                        carBulbs: {
                            ruName: "Лампы",
                            subcategoryPageRuHeading: "Автомобильные лампы",
                            path: "/autolamps",
                            isUnique: true,
                            position: 0
                        },
                        coolants: {
                            ruName: "Охлаждающие жидкости",
                            subcategoryPageRuHeading: "Охлаждающие жидкости",
                            path: "/antifreeze",
                            isUnique: true,
                            position: 0
                        },
                        additives: {
                            ruName: "Присадки",
                            subcategoryPageRuHeading: "Присадки для топлива",
                            path: "/additive4fuel",
                            isUnique: true,
                            position: 0
                        },
                        glassWasherFluids: {
                            ruName: "Стеклоомывающие жидкости",
                            subcategoryPageRuHeading: "Стеклоомывающие жидкости",
                            path: "/washerfluid",
                            isUnique: true,
                            position: 0
                        },
                        brakeFluids: {
                            ruName: "Тормозные жидкости",
                            subcategoryPageRuHeading: "Тормозные жидкости",
                            path: "/brakefluid",
                            isUnique: true,
                            position: 0
                        },
                        xenon: {
                            ruName: "Ксенон",
                            subcategoryPageRuHeading: "Комплекты ксенона",
                            path: "/xenon",
                            isUnique: true,
                            position: 0
                        },
                        motorBatteries: {
                            ruName: "Мотоциклетные аккумуляторы",
                            subcategoryPageRuHeading: "Мотоциклетные аккумуляторы",
                            path: "/motobatteries",
                            isUnique: false,
                            position: 0
                        },
                        enginePreheaters: {
                            ruName: "Предпусковые подогреватели двигателя и топливной системы",
                            subcategoryPageRuHeading: "Предпусковые подогреватели двигателя и топливной системы",
                            path: "/dieselfuelheater",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                carElectronics: {
                    ruName: "Автоэлектроника",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        DVRs: {
                            ruName: "Видеорегистраторы",
                            subcategoryPageRuHeading: "Автомобильные видеорегистраторы",
                            path: "/videoregistrator",
                            isUnique: false,
                            position: 0
                        },
                        radioAndHeadSystems: {
                            ruName: "Магнитолы и головные системы",
                            subcategoryPageRuHeading: "Автомагнитолы",
                            path: "/caraudio",
                            isUnique: true,
                            position: 0
                        },
                        carSpeakers: {
                            ruName: "Акустика",
                            subcategoryPageRuHeading: "Автоакустика",
                            path: "/carspeakers",
                            isUnique: true,
                            position: 0
                        },
                        radarDetectors: {
                            ruName: "Радар-детекторы",
                            subcategoryPageRuHeading: "Радар-детекторы",
                            path: "/radar",
                            isUnique: true,
                            position: 0
                        },
                        gpsNavigators: {
                            ruName: "GPS-навигаторы",
                            subcategoryPageRuHeading: "GPS-навигаторы",
                            path: "/gps",
                            isUnique: false,
                            position: 0
                        },
                        carAlarm: {
                            ruName: "Сигнализация",
                            subcategoryPageRuHeading: "Автосигнализации",
                            path: "/caralarm",
                            isUnique: true,
                            position: 0
                        },
                        carAmplifiers: {
                            ruName: "Усилители",
                            subcategoryPageRuHeading: "Автомобильные усилители",
                            path: "/caramps",
                            isUnique: true,
                            position: 0
                        },
                        cbRadioStations: {
                            ruName: "Радиостанции CB",
                            subcategoryPageRuHeading: "Автомобильные радиостанции CB",
                            path: "/car_radio",
                            isUnique: true,
                            position: 0
                        },
                        speakerphones: {
                            ruName: "Громкая связь",
                            subcategoryPageRuHeading: "Громкая связь",
                            path: "/carkit",
                            isUnique: true,
                            position: 0
                        },
                        fmModulators: {
                            ruName: "FM-модуляторы",
                            subcategoryPageRuHeading: "FM-модуляторы",
                            path: "/fmmodulators",
                            isUnique: true,
                            position: 0
                        },
                        carInverters: {
                            ruName: "Автомобильные инверторы",
                            subcategoryPageRuHeading: "Автомобильные инверторы",
                            path: "/car_inverter",
                            isUnique: true,
                            position: 0
                        },
                        parkingRadar: {
                            ruName: "Парковочные радары",
                            subcategoryPageRuHeading: "Парковочные радары",
                            path: "/parkingradar",
                            isUnique: true,
                            position: 0
                        },
                        gpsTrackers: {
                            ruName: "GPS-трекеры",
                            subcategoryPageRuHeading: "GPS-трекеры",
                            path: "/gps_tracker",
                            isUnique: false,
                            position: 0
                        },
                        carAntennas: {
                            ruName: "Автомобильные антенны",
                            subcategoryPageRuHeading: "Автомобильные антенны",
                            path: "/antenforradio",
                            isUnique: true,
                            position: 0
                        },
                        carVideoPlayers: {
                            ruName: "Автомобильные видеоплееры и DVD",
                            subcategoryPageRuHeading: "Портативные DVD-плееры и телевизоры",
                            path: "/portabletvdvd",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                repairAndWashingEquipment: {
                    ruName: "Оборудование для ремонта и мойки",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        welders: {
                            ruName: "Сварочные аппараты",
                            subcategoryPageRuHeading: "Сварочные инверторы",
                            path: "/weldinginverter",
                            isUnique: false,
                            position: 1
                        },
                        toolKits: {
                            ruName: "Наборы инструментов",
                            subcategoryPageRuHeading: "Наборы инструментов",
                            path: "/tool_kits",
                            isUnique: false,
                            position: 1
                        },
                        torqueWrenchesAndScrewdrivers: {
                            ruName: "Динамометрические ключи и отвертки",
                            subcategoryPageRuHeading: "Динамометрические ключи и отвертки",
                            path: "/torque_wrenches",
                            isUnique: true,
                            position: 0
                        },
                        multimeters: {
                            ruName: "Мультиметры, токовые клещи, индикаторные отвертки",
                            subcategoryPageRuHeading: "Мультиметры, токовые клещи, индикаторные отвертки",
                            path: "/multimeter",
                            isUnique: false,
                            position: 0
                        },
                        compressors: {
                            ruName: "Компрессоры",
                            subcategoryPageRuHeading: "Компрессоры",
                            path: "/compressor",
                            isUnique: false,
                            position: 2
                        },
                        pressureWashers: {
                            ruName: "Мойки высокого давления",
                            subcategoryPageRuHeading: "Мойки высокого давления",
                            path: "/washers",
                            isUnique: false,
                            position: 1
                        },
                        pneumaticSprayGuns: {
                            ruName: "Пневматические краскопульты",
                            subcategoryPageRuHeading: "Пневматические краскопульты",
                            path: "/spraygun",
                            isUnique: false,
                            position: 1
                        },
                        carjacks: {
                            ruName: "Домкраты",
                            subcategoryPageRuHeading: "Домкраты",
                            path: "/carjack",
                            isUnique: true,
                            position: 0
                        },
                        weldingMasks: {
                            ruName: "Сварочные маски",
                            subcategoryPageRuHeading: "Сварочные маски",
                            path: "/weldingmask",
                            isUnique: false,
                            position: 1
                        },
                        electricSprayGuns: {
                            ruName: "Электрические краскопульты",
                            subcategoryPageRuHeading: "Электрические краскораспылители",
                            path: "/electricspraygun",
                            isUnique: false,
                            position: 1
                        },
                        pneumaticWrenches: {
                            ruName: "Пневматические гайковерты",
                            subcategoryPageRuHeading: "Пневматические гайковерты",
                            path: "/wrench",
                            isUnique: false,
                            position: 1
                        },
                        grinders: {
                            ruName: "Пневматические шлифмашины",
                            subcategoryPageRuHeading: "Пневмошлифмашины",
                            path: "/pneumogrinder",
                            isUnique: false,
                            position: 1
                        },
                        carLifts: {
                            ruName: "Подъемники",
                            subcategoryPageRuHeading: "Подъемники",
                            path: "/carlift",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                carAccessories: {
                    ruName: "Аксессуары",
                    isUnique: false,
                    containsUnique: true,
                    subCategories: {
                        toolKits: {
                            ruName: "Наборы инструментов",
                            subcategoryPageRuHeading: "Наборы инструментов",
                            path: "/tool_kits",
                            isUnique: false,
                            position: 2
                        },
                        startChargers: {
                            ruName: "Пускозарядные устройства",
                            subcategoryPageRuHeading: "Пуско-зарядные устройства",
                            path: "/start_charge",
                            isUnique: true,
                            position: 0
                        },
                        carRefrigerators: {
                            ruName: "Автохолодильники, термобоксы, термосумки",
                            subcategoryPageRuHeading: "Автохолодильники, термобоксы, термосумки",
                            path: "/arrefrigerator",
                            isUnique: false,
                            position: 0
                        },
                        carCompressors: {
                            ruName: "Автомобильные компрессоры",
                            subcategoryPageRuHeading: "Автомобильные компрессоры",
                            path: "/compressor_auto",
                            isUnique: true,
                            position: 0
                        },
                        carHolders: {
                            ruName: "Держатели для телефонов",
                            subcategoryPageRuHeading: "Автомобильные держатели",
                            path: "/carholder",
                            isUnique: false,
                            position: 1
                        },
                        breathalyzers: {
                            ruName: "Алкотестеры",
                            subcategoryPageRuHeading: "Алкотестеры",
                            path: "/breathalyzer",
                            isUnique: false,
                            position: 0
                        },
                        bicycleRacks: {
                            ruName: "Велобагажники",
                            subcategoryPageRuHeading: "Автомобильные велобагажники",
                            path: "/bicyclerack",
                            isUnique: false,
                            position: 0
                        },
                        carVacuumCleaners: {
                            ruName: "Автомобильные пылесосы",
                            subcategoryPageRuHeading: "Автомобильные пылесосы",
                            path: "/car_vacuum_clean",
                            isUnique: true,
                            position: 0
                        },
                        carRoofRacks: {
                            ruName: "Багажники на крышу",
                            subcategoryPageRuHeading: "Автомобильные багажники",
                            path: "/car_racks",
                            isUnique: true,
                            position: 0
                        },
                        electricChargingStations: {
                            ruName: "Электрические зарядные станции",
                            subcategoryPageRuHeading: "Электрические зарядные станции",
                            path: "/charging_station",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                autoAndMototechnics: {
                    ruName: "Авто и мототехника",
                    isUnique: false,
                    containsUnique: true,
                    subCategories: {
                        cars: {
                            ruName: "Легковые автомобили",
                            subcategoryPageRuHeading: "Автомобили",
                            path: "/car",
                            isUnique: true,
                            position: 0
                        },
                        miniTractors: {
                            ruName: "Тракторы",
                            subcategoryPageRuHeading: "Мини-тракторы",
                            path: "/minitractor",
                            isUnique: false,
                            position: 1
                        },
                        motorcycles: {
                            ruName: "Мотоциклы",
                            subcategoryPageRuHeading: "Мотоциклы",
                            path: "/motorcycle",
                            isUnique: true,
                            position: 0
                        },
                        electricScooters: {
                            ruName: "Электроскутеры",
                            subcategoryPageRuHeading: "Электросамокаты и электроскутеры",
                            path: "/electric_scooter?ks_type%5B0%5D=scooter&ks_type%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        scooters: {
                            ruName: "Скутеры и мопеды",
                            subcategoryPageRuHeading: "Скутеры и мопеды",
                            path: "/scooter",
                            isUnique: true,
                            position: 0
                        },
                        ATVs: {
                            ruName: "Квадроциклы",
                            subcategoryPageRuHeading: "Квадроциклы",
                            path: "/quad",
                            isUnique: true,
                            position: 0
                        },
                        motorHelmets: {
                            ruName: "Мотошлемы",
                            subcategoryPageRuHeading: "Мотошлемы",
                            path: "/motohelmet",
                            isUnique: true,
                            position: 0
                        },
                        motorBatteries: {
                            ruName: "Мотоциклетные аккумуляторы",
                            subcategoryPageRuHeading: "Мотоциклетные аккумуляторы",
                            path: "/motobatteries",
                            isUnique: false,
                            position: 1
                        },
                        motorcycleTires: {
                            ruName: "Мотоциклетные шины",
                            subcategoryPageRuHeading: "Мотоциклетные шины",
                            path: "/moto_tires",
                            isUnique: true,
                            position: 0
                        }
                    }
                }
            }
        },
        beautyAndSport: {
            id: 7,
            ruName: "Красота и спорт",
            tiles: [
                {
                    ruName: "Парфюмерия",
                    path: "/parfume?utm_source=ks_tile&utm_medium=parfume",
                    isUnique: true
                },
                {
                    ruName: "Футзальные мячи",
                    path: "/ball?ball_type%5B0%5D=fotsal&ball_type%5Boperation%5D=intersect&utm_source=ks_tile&utm_medium=ball",
                    isUnique: true
                },
                {
                    ruName: "Сменные лезвия для бритвенных станков",
                    path: "/beauty_acs?ba_purpos%5B0%5D=britvstanok&ba_purpos%5Boperation%5D=union&utm_source=ks_tile&utm_medium=beauty_acs",
                    isUnique: true
                },
                {
                    ruName: "Эллиптические тренажеры",
                    path: "/ellipsoids?utm_source=ks_tile&utm_medium=ellipsoids",
                    isUnique: true
                },
                {
                    ruName: "Наручные часы",
                    path: "/watch?utm_source=ks_tile&utm_medium=watch",
                    isUnique: true
                }
            ],
            categories: {
                bicycleAndAccessories: {
                    ruName: "Велосипеды и аксессуары",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        bikes: {
                            ruName: "Велосипеды",
                            subcategoryPageRuHeading: "Велосипеды",
                            path: "/bike",
                            isUnique: true,
                            position: 0
                        },
                        childrenBicycles: {
                            ruName: "Детские велосипеды",
                            subcategoryPageRuHeading: "Детские велосипеды",
                            path: "/kidsbike",
                            isUnique: true,
                            position: 0
                        },
                        bicycleTires: {
                            ruName: "Велопокрышки, велокамеры",
                            subcategoryPageRuHeading: "Велопокрышки, велокамеры",
                            path: "/bicycle_tires",
                            isUnique: true,
                            position: 0
                        },
                        bicycleHelmets: {
                            ruName: "Велошлемы",
                            subcategoryPageRuHeading: "Шлем для езды на велосипеде",
                            path: "/bikehelmet?bh_sport%5B0%5D=type1&bh_sport%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        bikeComputers: {
                            ruName: "Велокомпьютеры",
                            subcategoryPageRuHeading: "Велокомпьютеры",
                            path: "/bikecomp",
                            isUnique: true,
                            position: 0
                        },
                        bikeLocks: {
                            ruName: "Велозамки",
                            subcategoryPageRuHeading: "Велозамки",
                            path: "/bikelock",
                            isUnique: true,
                            position: 0
                        },
                        babyBikeSeats: {
                            ruName: "Детские велокресла",
                            subcategoryPageRuHeading: "Детские велокресла",
                            path: "/bikeseat",
                            isUnique: false,
                            position: 0
                        },
                        bicycleRacks: {
                            ruName: "Велобагажники",
                            subcategoryPageRuHeading: "Автомобильные велобагажники",
                            path: "/bicyclerack",
                            isUnique: false,
                            position: 1
                        },
                        childrenTrailers: {
                            ruName: "Детские велоприцепы",
                            subcategoryPageRuHeading: "Детские коляски и аксессуары",
                            path: "/pram?pramconstruct%5B0%5D=trailer&pramconstruct%5Boperation%5D=union",
                            isUnique: false,
                            position: 0
                        },
                        actionCameras: {
                            ruName: "Экшен-камеры",
                            subcategoryPageRuHeading: "Экшен-камеры",
                            path: "/actioncamera",
                            isUnique: false,
                            position: 1
                        },
                        actionCamerasAccessories: {
                            ruName: "Аксессуары и крепления для экшен-камер",
                            subcategoryPageRuHeading: "Аксессуары и крепления для экшен-камер",
                            path: "/actioncamera_acs",
                            isUnique: false,
                            position: 1
                        }
                    }
                },
                rollerSkatesSkateboards: {
                    ruName: "Роликовые коньки, скейтборды, самокаты",
                    isUnique: false,
                    containsUnique: true,
                    subCategories: {
                        rollerSkates: {
                            ruName: "Роликовые коньки",
                            subcategoryPageRuHeading: "Роликовые коньки",
                            path: "/rollerskates",
                            isUnique: false,
                            position: 0
                        },
                        skateboards: {
                            ruName: "Скейтборды",
                            subcategoryPageRuHeading: "Скейтборды, лонгборды",
                            path: "/skateboard",
                            isUnique: true,
                            position: 0
                        },
                        kickScooters: {
                            ruName: "Самокаты",
                            subcategoryPageRuHeading: "Самокаты",
                            path: "/kickscooter",
                            isUnique: false,
                            position: 0
                        },
                        sportsProtection: {
                            ruName: "Спортивная защита",
                            subcategoryPageRuHeading: "Спортивная защита",
                            path: "/sportsprotection",
                            isUnique: false,
                            position: 0
                        },
                        actionCameras: {
                            ruName: "Экшен-камеры",
                            subcategoryPageRuHeading: "Экшен-камеры",
                            path: "/actioncamera",
                            isUnique: false,
                            position: 2
                        },
                        actionCameraAccessories: {
                            ruName: "Аксессуары и крепления для экшен-камер",
                            subcategoryPageRuHeading: "Аксессуары и крепления для экшен-камер",
                            path: "/actioncamera_acs",
                            isUnique: false,
                            position: 2
                        }
                    }
                },
                electricTransport: {
                    ruName: "Роликовые коньки, скейтборды, самокаты",
                    isUnique: false,
                    containsUnique: false,
                    subCategories: {
                        electricScooters: {
                            ruName: "Электросамокаты и электроскутеры",
                            subcategoryPageRuHeading: "Электросамокаты и электроскутеры",
                            path: "/electric_scooter",
                            isUnique: false,
                            position: 1
                        },
                        gyrocycles: {
                            ruName: "Гироциклы",
                            subcategoryPageRuHeading: "Гироциклы",
                            path: "/segway",
                            isUnique: false,
                            position: 1
                        },
                        electricBicycles: {
                            ruName: "Электровелосипеды",
                            subcategoryPageRuHeading: "Электровелосипеды",
                            path: "/electrobike",
                            isUnique: false,
                            position: 1
                        }
                    }
                },
                watchBagsAccessories: {
                    ruName: "Часы, сумки и прочие аксессуары",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        watches: {
                            ruName: "Наручные часы",
                            subcategoryPageRuHeading: "Наручные часы",
                            path: "/watch",
                            isUnique: true,
                            position: 0
                        },
                        smartWatches: {
                            ruName: "Умные часы и фитнес-браслеты",
                            subcategoryPageRuHeading: "Умные часы и браслеты",
                            path: "/smartwatch",
                            isUnique: false,
                            position: 2
                        },
                        backpacks: {
                            ruName: "Рюкзаки",
                            subcategoryPageRuHeading: "Рюкзаки",
                            path: "/backpack",
                            isUnique: true,
                            position: 0
                        },
                        suitcases: {
                            ruName: "Чемоданы и дорожные сумки",
                            subcategoryPageRuHeading: "Чемоданы и дорожные сумки",
                            path: "/suitcase",
                            isUnique: true,
                            position: 0
                        },
                        wallets: {
                            ruName: "Кошельки",
                            subcategoryPageRuHeading: "Кошельки",
                            path: "/wallet",
                            isUnique: true,
                            position: 0
                        },
                        businessCardHolders: {
                            ruName: "Визитницы",
                            subcategoryPageRuHeading: "Визитницы",
                            path: "/wallet?wallet_type%5B0%5D=card_holder&wallet_type%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        lighters: {
                            ruName: "Зажигалки",
                            subcategoryPageRuHeading: "Зажигалки",
                            path: "/cigarettelighter",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                cosmeticPerfumeryAccessories: {
                    ruName: "Косметика, парфюмерия, аксессуары",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        perfumery: {
                            ruName: "Парфюмерия",
                            subcategoryPageRuHeading: "Парфюмерия",
                            path: "/parfume",
                            isUnique: true,
                            position: 0
                        },
                        faceMakeup: {
                            ruName: "Декоративная косметика для лица",
                            subcategoryPageRuHeading: "Декоративная косметика для лица",
                            path: "/face_makeup",
                            isUnique: true,
                            position: 0
                        },
                        eyesMakeup: {
                            ruName: "Декоративная косметика для глаз",
                            subcategoryPageRuHeading: "Декоративная косметика для глаз",
                            path: "/eye_makeup",
                            isUnique: true,
                            position: 0
                        },
                        lipsMakeup: {
                            ruName: "Декоративная косметика для губ",
                            subcategoryPageRuHeading: "Декоративная косметика для губ",
                            path: "/lip_makeup",
                            isUnique: true,
                            position: 0
                        },
                        nailsCare: {
                            ruName: "Средства по уходу за ногтями",
                            subcategoryPageRuHeading: "Средства по уходу за ногтями",
                            path: "/nailcare",
                            isUnique: true,
                            position: 0
                        },
                        faceCare: {
                            ruName: "Уход за лицом",
                            subcategoryPageRuHeading: "Косметика по уходу за лицом",
                            path: "/facial_cosmetics",
                            isUnique: true,
                            position: 0
                        },
                        hairCare: {
                            ruName: "Уход за волосами",
                            subcategoryPageRuHeading: "Косметика по уходу за волосами",
                            path: "/haircare",
                            isUnique: true,
                            position: 0
                        },
                        bodyCare: {
                            ruName: "Уход за телом",
                            subcategoryPageRuHeading: "Косметика по уходу за телом",
                            path: "/body_care",
                            isUnique: true,
                            position: 0
                        },
                        hairStyling: {
                            ruName: "Средства для укладки волос",
                            subcategoryPageRuHeading: "Средства для укладки волос",
                            path: "/hair_styling",
                            isUnique: true,
                            position: 0
                        },
                        hairDye: {
                            ruName: "Средства для окрашивания волос",
                            subcategoryPageRuHeading: "Средства для окрашивания волос",
                            path: "/hair_color",
                            isUnique: true,
                            position: 0
                        },
                        cosmeticsAccessories: {
                            ruName: "Аксессуары для косметики",
                            subcategoryPageRuHeading: "Аксессуары для косметики",
                            path: "/cosmetics_access",
                            isUnique: true,
                            position: 0
                        },
                        cosmeticMirrors: {
                            ruName: "Косметические зеркала",
                            subcategoryPageRuHeading: "Косметические зеркала",
                            path: "/cosmetic_mirror",
                            isUnique: false,
                            position: 0
                        }
                    }
                },
                health: {
                    ruName: "Здоровье",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        fitnessBraceletsAndWatches: {
                            ruName: "Фитнес-браслеты и часы",
                            subcategoryPageRuHeading: "Фитнес-браслеты",
                            path: "/smartwatch?sw_type[0]=bracelet&sw_type[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        toothbrushes: {
                            ruName: "Зубные щетки и ирригаторы",
                            subcategoryPageRuHeading: "Зубные щетки и ирригаторы",
                            path: "/toothbrush",
                            isUnique: false,
                            position: 2
                        },
                        massagersAndMassageChairs: {
                            ruName: "Массажеры и массажные кресла",
                            subcategoryPageRuHeading: "Массажеры и массажные кресла",
                            path: "/massagechair",
                            isUnique: false,
                            position: 1
                        },
                        electricLinen: {
                            ruName: "Электрогрелки, электроодеяла, электропростыни",
                            subcategoryPageRuHeading: "Электрогрелки, электроодеяла, электропростыни",
                            path: "/mobile_heater",
                            isUnique: false,
                            position: 1
                        },
                        inhalers: {
                            ruName: "Ингаляторы",
                            subcategoryPageRuHeading: "Ингаляторы",
                            path: "/inhaler",
                            isUnique: false,
                            position: 1
                        },
                        bloodPressureMonitors: {
                            ruName: "Тонометры",
                            subcategoryPageRuHeading: "Тонометры",
                            path: "/tonometers",
                            isUnique: false,
                            position: 1
                        },
                        thermometers: {
                            ruName: "Термометры",
                            subcategoryPageRuHeading: "Медицинские термометры",
                            path: "/medthermometer",
                            isUnique: false,
                            position: 1
                        },
                        bloodGlucoseMeters: {
                            ruName: "Глюкометры",
                            subcategoryPageRuHeading: "Глюкометры",
                            path: "/glucosemeter",
                            isUnique: false,
                            position: 1
                        },
                        heartRateMonitors: {
                            ruName: "Пульсометры, пульсоксиметры",
                            subcategoryPageRuHeading: "Пульсометры, пульсоксиметры",
                            path: "/heart_rate",
                            isUnique: false,
                            position: 2
                        },
                        physicalTherapyDevices: {
                            ruName: "Приборы для физиотерапии",
                            subcategoryPageRuHeading: "Приборы для физиотерапии",
                            path: "/physical_therapy",
                            isUnique: true,
                            position: 0
                        },
                        nitratomersDosimeters: {
                            ruName: "Нитратомеры, дозиметры, экотестеры",
                            subcategoryPageRuHeading: "Нитратомеры, дозиметры, экотестеры",
                            path: "/nitrate",
                            isUnique: false,
                            position: 1
                        },
                        contactLenses: {
                            ruName: "Контактные линзы",
                            subcategoryPageRuHeading: "Контактные линзы",
                            path: "/contact_lense",
                            isUnique: false,
                            position: 1
                        },
                        lensSolutions: {
                            ruName: "Растворы для линз",
                            subcategoryPageRuHeading: "Растворы для линз",
                            path: "/solutionlenses",
                            isUnique: false,
                            position: 1
                        },
                        massageBalls: {
                            ruName: "Массажные мячи",
                            subcategoryPageRuHeading: "Массажные мячи",
                            path: "/ball?ball_type%5B0%5D=massaging&ball_type%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                bodyCareEquipment: {
                    ruName: "Приборы по уходу за телом",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        hairClippers: {
                            ruName: "Машинки для стрижки волос",
                            subcategoryPageRuHeading: "Машинки для стрижки волос",
                            path: "/hairclipper",
                            isUnique: false,
                            position: 1
                        },
                        curlingIronsStylers: {
                            ruName: "Плойки, стайлеры, щипцы",
                            subcategoryPageRuHeading: "Стайлеры",
                            path: "/styler",
                            isUnique: false,
                            position: 1
                        },
                        hairdryers: {
                            ruName: "Фены",
                            subcategoryPageRuHeading: "Фены",
                            path: "/hairdryer",
                            isUnique: false,
                            position: 1
                        },
                        toothbrushes: {
                            ruName: "Зубные щетки и ирригаторы",
                            subcategoryPageRuHeading: "Зубные щетки и ирригаторы",
                            path: "/toothbrush",
                            isUnique: false,
                            position: 3
                        },
                        shavers: {
                            ruName: "Мужские электробритвы",
                            subcategoryPageRuHeading: "Электробритвы мужские",
                            path: "/shaver",
                            isUnique: false,
                            position: 2
                        },
                        ladyShavers: {
                            ruName: "Женские электробритвы и эпиляторы",
                            subcategoryPageRuHeading: "Женские электробритвы и эпиляторы",
                            path: "/ladyshaver",
                            isUnique: false,
                            position: 1
                        },
                        scales: {
                            ruName: "Напольные весы",
                            subcategoryPageRuHeading: "Напольные весы",
                            path: "/scales",
                            isUnique: false,
                            position: 1
                        },
                        hydromassageBaths: {
                            ruName: "Гидромассажные ванночки",
                            subcategoryPageRuHeading: "Гидромассажные ванночки для ног",
                            path: "/footbath",
                            isUnique: false,
                            position: 1
                        },
                        manicureAndPedicureSets: {
                            ruName: "Маникюрные и педикюрные наборы",
                            subcategoryPageRuHeading: "Маникюрные и педикюрные наборы",
                            path: "/manicure",
                            isUnique: false,
                            position: 1
                        },
                        skinCareDevices: {
                            ruName: "Приборы для ухода за кожей",
                            subcategoryPageRuHeading: "Приборы для ухода за кожей",
                            path: "/skin_care_app",
                            isUnique: true,
                            position: 0
                        },
                        cosmeticMirrors: {
                            ruName: "Косметические зеркала",
                            subcategoryPageRuHeading: "Косметические зеркала",
                            path: "/cosmetic_mirror",
                            isUnique: false,
                            position: 1
                        },
                        toothBrushesAccessories: {
                            ruName: "Аксессуары для зубных щеток и ирригаторов",
                            subcategoryPageRuHeading: "Аксессуары к товарам для красоты и здоровья",
                            path: "/beauty_acs?ba_purpos%5B0%5D=type1&ba_purpos%5B1%5D=type2&ba_purpos%5Boperation%5D=union",
                            isUnique: false,
                            position: 1
                        },
                        accessoriesForShavers: {
                            ruName: "Аксессуары для электробритв и машинок",
                            subcategoryPageRuHeading: "Аксессуары к товарам для красоты и здоровья",
                            path: "/beauty_acs?ba_purpos%5B0%5D=type4&ba_purpos%5B1%5D=type7&ba_purpos%5Boperation%5D=union",
                            isUnique: false,
                            position: 1
                        },
                        accessoriesForSkinCareProducts: {
                            ruName: "Аксессуары для приборов по уходу за кожей",
                            subcategoryPageRuHeading: "Аксессуары к товарам для красоты и здоровья",
                            path: "/beauty_acs?ba_purpos%5B0%5D=type3&ba_purpos%5B1%5D=faceclean&ba_purpos%5B2%5D=manicure&ba_purpos%5Boperation%5D=union",
                            isUnique: false,
                            position: 1
                        },
                        replaceableRazorBlades: {
                            ruName: "Сменные лезвия для бритвенных станков",
                            subcategoryPageRuHeading: "Аксессуары к товарам для красоты и здоровья",
                            path: "/beauty_acs?ba_purpos%5B0%5D=britvstanok&ba_purpos%5Boperation%5D=union",
                            isUnique: false,
                            position: 1
                        }
                    }
                },
                hobby: {
                    ruName: "Хобби",
                    isUnique: true,
                    containsUnique: false,
                    subCategories: {
                        electronicSteamGenerators: {
                            ruName: "Электронные парогенераторы",
                            subcategoryPageRuHeading: "Электронные парогенераторы",
                            path: "/smoke",
                            isUnique: false,
                            position: 1
                        },
                        fidgetSpinners: {
                            ruName: "Фиджет спиннеры",
                            subcategoryPageRuHeading: "Фиджет спиннеры",
                            path: "/fidget_spinner",
                            isUnique: false,
                            position: 0
                        },
                        constructors: {
                            ruName: "Конструкторы",
                            subcategoryPageRuHeading: "Конструкторы",
                            path: "/buildingkit",
                            isUnique: false,
                            position: 0
                        },
                        scaleModels: {
                            ruName: "Сборные модели",
                            subcategoryPageRuHeading: "Сборные модели",
                            path: "/scale_model",
                            isUnique: false,
                            position: 0
                        },
                        actionFigures: {
                            ruName: "Экшен-фигурки",
                            subcategoryPageRuHeading: "Куклы, экшен-фигурки",
                            path: "/doll?do_type%5B0%5D=actionfigure&do_type%5Boperation%5D=union",
                            isUnique: false,
                            position: 0
                        },
                        boardGames: {
                            ruName: "Настольные игры",
                            subcategoryPageRuHeading: "Настольные игры",
                            path: "/boardgame",
                            isUnique: false,
                            position: 0
                        },
                        logicPuzzles: {
                            ruName: "Логические игры, головоломки",
                            subcategoryPageRuHeading: "Логические игры, головоломки",
                            path: "/logic_puzzles",
                            isUnique: false,
                            position: 0
                        },
                        rcAircraftModels: {
                            ruName: "Радиоуправляемые авиамодели",
                            subcategoryPageRuHeading: "Радиоуправляемые авиамодели",
                            path: "/radiocontrolair",
                            isUnique: false,
                            position: 0
                        },
                        rcCars: {
                            ruName: "Радиоуправляемые автомодели",
                            subcategoryPageRuHeading: "Радиоуправляемые автомодели",
                            path: "/radioautomodel",
                            isUnique: false,
                            position: 0
                        },
                        rcShipModels: {
                            ruName: "Радиоуправляемые судомодели",
                            subcategoryPageRuHeading: "Радиоуправляемые судомодели",
                            path: "/radiomodelwater",
                            isUnique: false,
                            position: 0
                        },
                        sewingMachines: {
                            ruName: "Швейные машины",
                            subcategoryPageRuHeading: "Швейные машины",
                            path: "/sewingmachines",
                            isUnique: false,
                            position: 1
                        },
                        overlocks: {
                            ruName: "Оверлоки",
                            subcategoryPageRuHeading: "Оверлоки и распошивальные машины",
                            path: "/overlock",
                            isUnique: false,
                            position: 1
                        },
                        radios: {
                            ruName: "Радиоприемники",
                            subcategoryPageRuHeading: "Радиоприемники",
                            path: "/radio",
                            isUnique: false,
                            position: 1
                        },
                        telescopes: {
                            ruName: "Телескопы",
                            subcategoryPageRuHeading: "Телескопы",
                            path: "/telescope",
                            isUnique: false,
                            position: 1
                        },
                        opticalAppliances: {
                            ruName: "Бинокли и подзорные трубы",
                            subcategoryPageRuHeading: "Бинокли и подзорные трубы",
                            path: "/optic",
                            isUnique: false,
                            position: 1
                        }
                    }
                },
                tourismAndCamping: {
                    ruName: "Туризм и кемпинг",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        tents: {
                            ruName: "Палатки",
                            subcategoryPageRuHeading: "Палатки",
                            path: "/tents",
                            isUnique: true,
                            position: 0
                        },
                        travelBackpacks: {
                            ruName: "Туристические рюкзаки",
                            subcategoryPageRuHeading: "Туристические рюкзаки",
                            path: "/backpack?bap_type[0]=tourist&bap_type[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        inflatableFurniture: {
                            ruName: "Надувная мебель",
                            subcategoryPageRuHeading: "Надувная мебель",
                            path: "/airbed",
                            isUnique: false,
                            position: 1
                        },
                        campFurniture: {
                            ruName: "Кемпинговая мебель",
                            subcategoryPageRuHeading: "Кемпинговая мебель",
                            path: "/camp_furniture",
                            isUnique: true,
                            position: 0
                        },
                        sleepingBags: {
                            ruName: "Спальные мешки",
                            subcategoryPageRuHeading: "Спальные мешки",
                            path: "/sleepingbag",
                            isUnique: true,
                            position: 0
                        },
                        travelMats: {
                            ruName: "Туристические коврики",
                            subcategoryPageRuHeading: "Туристические коврики",
                            path: "/travel_mat",
                            isUnique: true,
                            position: 0
                        },
                        lanterns: {
                            ruName: "Фонари",
                            subcategoryPageRuHeading: "Фонари",
                            path: "/lights",
                            isUnique: true,
                            position: 0
                        },
                        touristKnives: {
                            ruName: "Туристические ножи",
                            subcategoryPageRuHeading: "Туристические ножи",
                            path: "/foldingknives",
                            isUnique: true,
                            position: 0
                        },
                        thermosesAndThermomugs: {
                            ruName: "Термосы, термокружки",
                            subcategoryPageRuHeading: "Термосы, термокружки",
                            path: "/thermosbottle",
                            isUnique: false,
                            position: 1
                        },
                        touristBurnersAndStoves: {
                            ruName: "Туристические горелки и плиты",
                            subcategoryPageRuHeading: "Туристические горелки и плиты",
                            path: "/gascylinder",
                            isUnique: true,
                            position: 0
                        },
                        grills: {
                            ruName: "Мангалы, грили, барбекю",
                            subcategoryPageRuHeading: "Мангалы, грили, барбекю",
                            path: "/grill",
                            isUnique: false,
                            position: 1
                        },
                        carRefrigerators: {
                            ruName: "Автохолодильники, термобоксы, термосумки",
                            subcategoryPageRuHeading: "Автохолодильники, термобоксы, термосумки",
                            path: "/arrefrigerator",
                            isUnique: false,
                            position: 1
                        },
                        grillsAccessories: {
                            ruName: "Принадлежности для барбекю, грилей, мангалов",
                            subcategoryPageRuHeading: "Принадлежности для барбекю, грилей, мангалов",
                            path: "/bbq_accessories",
                            isUnique: false,
                            position: 1
                        },
                        portableRadioStations: {
                            ruName: "Портативные радиостанции",
                            subcategoryPageRuHeading: "Портативные радиостанции",
                            path: "/portableradio",
                            isUnique: false,
                            position: 1
                        },
                        radios: {
                            ruName: "Радиоприемники",
                            subcategoryPageRuHeading: "Радиоприемники на батарейках",
                            path: "/radio?pow_porta%5B0%5D=acc&pow_porta%5B1%5D=bat&pow_porta%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        travelNavigators: {
                            ruName: "Туристические навигаторы",
                            subcategoryPageRuHeading: "Туристические навигаторы",
                            path: "/travelgps",
                            isUnique: true,
                            position: 0
                        },
                        opticalAppliances: {
                            ruName: "Бинокли и подзорные трубы",
                            subcategoryPageRuHeading: "Бинокли и подзорные трубы",
                            path: "/optic",
                            isUnique: false,
                            position: 2
                        },
                        telescopes: {
                            ruName: "Телескопы",
                            subcategoryPageRuHeading: "Телескопы",
                            path: "/telescope",
                            isUnique: false,
                            position: 2
                        },
                        cameraTraps: {
                            ruName: "Фотоловушки",
                            subcategoryPageRuHeading: "Фотоловушки",
                            path: "/camera_traps",
                            isUnique: false,
                            position: 2
                        }
                    }
                },
                fishingAndWaterSport: {
                    ruName: "Рыбалка, водный спорт",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        inflatableBoats: {
                            ruName: "Надувные лодки",
                            subcategoryPageRuHeading: "Надувные лодки",
                            path: "/inflatableboat",
                            isUnique: true,
                            position: 0
                        },
                        outboardMotors: {
                            ruName: "Лодочные моторы",
                            subcategoryPageRuHeading: "Лодочные моторы",
                            path: "/outboardmotors",
                            isUnique: true,
                            position: 0
                        },
                        echoSounders: {
                            ruName: "Эхолоты",
                            subcategoryPageRuHeading: "Эхолоты",
                            path: "/sounder",
                            isUnique: true,
                            position: 0
                        },
                        rods: {
                            ruName: "Удочки, спиннинги",
                            subcategoryPageRuHeading: "Удилища",
                            path: "/rod",
                            isUnique: true,
                            position: 0
                        },
                        reels: {
                            ruName: "Рыболовные катушки",
                            subcategoryPageRuHeading: "Рыболовные катушки",
                            path: "/coil",
                            isUnique: true,
                            position: 0
                        },
                        iceDrills: {
                            ruName: "Ледобуры",
                            subcategoryPageRuHeading: "Ледобуры для рыбалки",
                            path: "/icescrew",
                            isUnique: true,
                            position: 0
                        },
                        oilsForOutboardMotors: {
                            ruName: "Масла для лодочных моторов",
                            subcategoryPageRuHeading: "Масла для лодочных моторов",
                            path: "/twostrokeoil",
                            isUnique: true,
                            position: 0
                        },
                        huntingAndFishingClothes: {
                            ruName: "Одежда для охоты, рыбалки",
                            subcategoryPageRuHeading: "Одежда для охоты, рыбалки",
                            path: "/hunter_clothes",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                fitnessEquipment: {
                    ruName: "Тренажеры, фитнес, единоборства",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        weightTrainingEquipment: {
                            ruName: "Силовые тренажеры",
                            subcategoryPageRuHeading: "Силовые тренажеры",
                            path: "/strengthtrain",
                            isUnique: true,
                            position: 0
                        },
                        exerciseBikes: {
                            ruName: "Велотренажеры",
                            subcategoryPageRuHeading: "Велотренажеры",
                            path: "/velosimulator",
                            isUnique: true,
                            position: 0
                        },
                        treadmills: {
                            ruName: "Беговые дорожки",
                            subcategoryPageRuHeading: "Беговые дорожки",
                            path: "/treadmills",
                            isUnique: true,
                            position: 0
                        },
                        ellipticalTrainers: {
                            ruName: "Эллиптические тренажеры",
                            subcategoryPageRuHeading: "Эллиптические тренажеры",
                            path: "/ellipsoids",
                            isUnique: true,
                            position: 0
                        },
                        rowingMachines: {
                            ruName: "Гребные тренажеры",
                            subcategoryPageRuHeading: "Гребные тренажеры",
                            path: "/rowingmachines",
                            isUnique: true,
                            position: 0
                        },
                        steppers: {
                            ruName: "Степперы",
                            subcategoryPageRuHeading: "Степперы",
                            path: "/stepper",
                            isUnique: true,
                            position: 0
                        },
                        freeWeights: {
                            ruName: "Гантели, штанги, гири",
                            subcategoryPageRuHeading: "Гантели, гири, штанги",
                            path: "/freeweights",
                            isUnique: true,
                            position: 0
                        },
                        nordicWalkingSticks: {
                            ruName: "Палки для скандинавской ходьбы",
                            subcategoryPageRuHeading: "Палки для скандинавской ходьбы",
                            path: "/nordic_walking",
                            isUnique: true,
                            position: 0
                        },
                        punchingBags: {
                            ruName: "Груши, мешки, манекены для бокса и единоборств",
                            subcategoryPageRuHeading: "Груши, мешки, манекены для бокса и единоборств",
                            path: "/punching_bags",
                            isUnique: true,
                            position: 0
                        },
                        boxingAndMartialArtsGloves: {
                            ruName: "Перчатки для бокса и единоборств",
                            subcategoryPageRuHeading: "Перчатки для единоборств",
                            path: "/glovesmartialart",
                            isUnique: true,
                            position: 0
                        },
                        sportsProtection: {
                            ruName: "Спортивная защита",
                            subcategoryPageRuHeading: "Спортивная защита",
                            path: "/sportsprotection",
                            isUnique: false,
                            position: 1
                        },
                        trampolines: {
                            ruName: "Батуты",
                            subcategoryPageRuHeading: "Батуты",
                            path: "/trampoline",
                            isUnique: false,
                            position: 1
                        },
                        swedishWalls: {
                            ruName: "Шведские стенки",
                            subcategoryPageRuHeading: "Шведские стенки",
                            path: "/kidwallbars?kwb_wallbars=1",
                            isUnique: false,
                            position: 0
                        },
                        gymBalls: {
                            ruName: "Гимнастические мячи",
                            subcategoryPageRuHeading: "Гимнастические мячи",
                            path: "/ball?ball_type[0]=gymnastic&ball_type[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        yogaMats: {
                            ruName: "Коврики для йоги и фитнеса",
                            subcategoryPageRuHeading: "Коврики для йоги и фитнеса",
                            path: "/yoga_mat",
                            isUnique: true,
                            position: 0
                        },
                        protein: {
                            ruName: "Протеин",
                            subcategoryPageRuHeading: "Протеин",
                            path: "/protein",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                gameSports: {
                    ruName: "Игровые виды спорта",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        sportsBalls: {
                            ruName: "Спортивные мячи",
                            subcategoryPageRuHeading: "Мячи",
                            path: "/ball",
                            isUnique: false,
                            position: 0
                        },
                        tennisTables: {
                            ruName: "Теннисные столы",
                            subcategoryPageRuHeading: "Теннисные столы",
                            path: "/tabletennis",
                            isUnique: true,
                            position: 0
                        },
                        tennisRockets: {
                            ruName: "Теннисные ракетки",
                            subcategoryPageRuHeading: "Ракетки для настольного тенниса",
                            path: "/racktabletennis",
                            isUnique: true,
                            position: 0
                        },
                        poolTables: {
                            ruName: "Бильярдные столы",
                            subcategoryPageRuHeading: "Бильярдные столы",
                            path: "/billiardtable",
                            isUnique: true,
                            position: 0
                        },
                        airHockeyFoosballMiniMilliards: {
                            ruName: "Аэрохоккей, настольный футбол, мини-бильярд",
                            subcategoryPageRuHeading: "Аэрохоккей, настольный футбол, мини-бильярд",
                            path: "/airhockey",
                            isUnique: false,
                            position: 0
                        },
                        chess: {
                            ruName: "Шахматы, шашки, нарды",
                            subcategoryPageRuHeading: "Шахматы, шашки, нарды",
                            path: "/chess",
                            isUnique: true,
                            position: 0
                        },
                        sportShoes: {
                            ruName: "Спортивная обувь",
                            subcategoryPageRuHeading: "Спортивная обувь",
                            path: "/sneakers?sn_designation[0]=sport&sn_designation[operation]=union",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                winterSports: {
                    ruName: "Зимние виды спорта",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        sled: {
                            ruName: "Санки",
                            subcategoryPageRuHeading: "Санки",
                            path: "/sled",
                            isUnique: false,
                            position: 0
                        },
                        skates: {
                            ruName: "Коньки",
                            subcategoryPageRuHeading: "Коньки",
                            path: "/skates",
                            isUnique: true,
                            position: 0
                        },
                        ski: {
                            ruName: "Лыжи",
                            subcategoryPageRuHeading: "Лыжи",
                            path: "/skis",
                            isUnique: true,
                            position: 0
                        },
                        hockeySticks: {
                            ruName: "Хоккейные клюшки",
                            subcategoryPageRuHeading: "Хоккейные клюшки",
                            path: "/hockeystick",
                            isUnique: false,
                            position: 0
                        },
                        sportsProtection: {
                            ruName: "Защита",
                            subcategoryPageRuHeading: "Спортивная защита",
                            path: "/sportsprotection?spp_useage%5B0%5D=hockey&spp_useage%5B1%5D=skate2&spp_useage%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        }
                    }
                }
            }
        },
        childrenAndMamas: {
            id: 8,
            ruName: "Детям и мамам",
            tiles: [
                {
                    ruName: "Детские коляски",
                    path: "/pram?utm_source=dm_tile&utm_medium=pram",
                    isUnique: true
                },
                {
                    ruName: "Детские кроватки",
                    path: "/babycotbed?utm_source=dm_tile&utm_medium=babycotbed",
                    isUnique: true
                },
                {
                    ruName: "Устройства для приготовления детского питания",
                    path: "/babyfoodmaker?utm_source=dm_tile&utm_medium=babyfoodmaker",
                    isUnique: true
                },
                {
                    ruName: "Детские подгузники",
                    path: "/diapers?utm_source=dm_tile&utm_medium=diapers",
                    isUnique: true
                },
                {
                    ruName: "Развивающие игрушки",
                    path: "/edu_toys?utm_source=dm_tile&utm_medium=edu_toys",
                    isUnique: true
                },
                {
                    ruName: "Развивающие коврики",
                    path: "/playmats?utm_source=dm_tile&utm_medium=playmats",
                    isUnique: true
                }
            ],
            categories: {
                walksAndTrips: {
                    ruName: "Прогулки и поездки",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        babyStrollers: {
                            ruName: "Коляски",
                            subcategoryPageRuHeading: "Детские коляски и аксессуары",
                            path: "/pram",
                            isUnique: true,
                            position: 0
                        },
                        childCarSeats: {
                            ruName: "Автокресла",
                            subcategoryPageRuHeading: "Автокресла",
                            path: "/childcarseat",
                            isUnique: true,
                            position: 0
                        },
                        babyCarryingBackpacks: {
                            ruName: "Рюкзаки-переноски (кенгуру)",
                            subcategoryPageRuHeading: "Рюкзаки-переноски (кенгуру)",
                            path: "/babycarrier",
                            isUnique: true,
                            position: 0
                        },
                        babyBikeSeats: {
                            ruName: "Велокресла",
                            subcategoryPageRuHeading: "Детские велокресла",
                            path: "/bikeseat",
                            isUnique: false,
                            position: 1
                        },
                        childrenTrailers: {
                            ruName: "Детские велоприцепы",
                            subcategoryPageRuHeading: "Детские коляски и аксессуары",
                            path: "/pram?pramconstruct%5B0%5D=trailer&pramconstruct%5Boperation%5D=union",
                            isUnique: false,
                            position: 1
                        }
                    }
                },
                childrenTransport: {
                    ruName: "Детский транспорт",
                    isUnique: false,
                    containsUnique: true,
                    subCategories: {
                        childrenKickScooters: {
                            ruName: "Самокаты",
                            subcategoryPageRuHeading: "Самокаты",
                            path: "/kickscooter",
                            isUnique: false,
                            position: 1
                        },
                        childrenPushBicycles: {
                            ruName: "Детские велосипеды-каталки",
                            subcategoryPageRuHeading: "Детские велосипеды-каталки",
                            path: "/kidsbike?kb_seat[0]=withbackrest&kb_seat[1]=withadjbackrest&kb_seat[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        tricycles: {
                            ruName: "Трехколесные велосипеды",
                            subcategoryPageRuHeading: "Детские велосипеды",
                            path: "/kidsbike?num_wheels[0]=3&num_wheels[operation]=union&kb_seat[0]=simple&kb_seat[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        sled: {
                            ruName: "Санки",
                            subcategoryPageRuHeading: "Санки",
                            path: "/sled",
                            isUnique: false,
                            position: 1
                        },
                        balanceBikes: {
                            ruName: "Беговелы",
                            subcategoryPageRuHeading: "Беговелы",
                            path: "/balancebike",
                            isUnique: true,
                            position: 0
                        },
                        babyWalkers: {
                            ruName: "Ходунки, прыгунки",
                            subcategoryPageRuHeading: "Ходунки, прыгунки",
                            path: "/babywalker",
                            isUnique: true,
                            position: 0
                        },
                        childrenElectricCars: {
                            ruName: "Электромобили",
                            subcategoryPageRuHeading: "Детские электромобили",
                            path: "/electricrideon",
                            isUnique: true,
                            position: 0
                        },
                        pedalCars: {
                            ruName: "Каталки, педальные машинки",
                            subcategoryPageRuHeading: "Каталки, педальные машинки",
                            path: "/rideon",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                childrenFurniture: {
                    ruName: "Детская мебель",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        babyCotBeds: {
                            ruName: "Кроватки",
                            subcategoryPageRuHeading: "Детские кроватки",
                            path: "/babycotbed",
                            isUnique: false,
                            position: 1
                        },
                        highChairs: {
                            ruName: "Стульчики для кормления",
                            subcategoryPageRuHeading: "Стульчики для кормления",
                            path: "/highchair",
                            isUnique: true,
                            position: 0
                        },
                        playpens: {
                            ruName: "Манежи",
                            subcategoryPageRuHeading: "Детские манежи",
                            path: "/playpen",
                            isUnique: true,
                            position: 0
                        },
                        cots: {
                            ruName: "Детские кровати",
                            subcategoryPageRuHeading: "Детские кровати",
                            path: "/bed?b_child=1",
                            isUnique: false,
                            position: 0
                        },
                        childrenTablesAndSchoolDesks: {
                            ruName: "Столы и парты",
                            subcategoryPageRuHeading: "Детские парты, столы, стулья",
                            path: "/kidsdesk",
                            isUnique: false,
                            position: 1
                        },
                        babyDressers: {
                            ruName: "Детские комоды",
                            subcategoryPageRuHeading: "Детские комоды",
                            path: "/babydresser",
                            isUnique: false,
                            position: 1
                        },
                        dressersForToys: {
                            ruName: "Комоды для игрушек",
                            subcategoryPageRuHeading: "Ящики, корзины, органайзеры",
                            path: "/toystorage?ts_const%5B0%5D=chest&ts_const%5Boperation%5D=union&ts_purpos%5B0%5D=chlroom&ts_purpos%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        childrenChaiseLoungesAndRockingChairs: {
                            ruName: "Детские шезлонги и качалки",
                            subcategoryPageRuHeading: "Детские шезлонги и качалки",
                            path: "/babyswing",
                            isUnique: true,
                            position: 0
                        },
                        markerAndChalkBoards: {
                            ruName: "Маркерные и меловые доски",
                            subcategoryPageRuHeading: "Офисные доски, флипчарты",
                            path: "/officeboard",
                            isUnique: false,
                            position: 0
                        }
                    }
                },
                babySleep: {
                    ruName: "Детский сон",
                    isUnique: false,
                    containsUnique: true,
                    subCategories: {
                        babyCotBeds: {
                            ruName: "Кроватки",
                            subcategoryPageRuHeading: "Детские кроватки",
                            path: "/babycotbed",
                            isUnique: false,
                            position: 2
                        },
                        cots: {
                            ruName: "Детские кровати",
                            subcategoryPageRuHeading: "Детские кровати",
                            path: "/bed?b_child=1",
                            isUnique: false,
                            position: 1
                        },
                        childrenLinen: {
                            ruName: "Детское постельное белье",
                            subcategoryPageRuHeading: "Детское постельное белье",
                            path: "/bedlinen?bed_type%5B0%5D=kids&bed_type%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        childrenPillows: {
                            ruName: "Подушки",
                            subcategoryPageRuHeading: "Одеяла и подушки",
                            path: "/pillows?pil_type%5B0%5D=sleep&pil_type%5Boperation%5D=union&pil_size%5B0%5D=48x48&pil_size%5B1%5D=50x50&pil_size%5B2%5D=40x40&pil_size%5B3%5D=38x38&pil_size%5B4%5D=35x45&pil_size%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        childrenMattresses: {
                            ruName: "Детские матрасы",
                            subcategoryPageRuHeading: "Детские матрасы",
                            path: "/mattress?mtr_kid=1",
                            isUnique: true,
                            position: 0
                        },
                        babyMonitors: {
                            ruName: "Радионяни и видеоняни",
                            subcategoryPageRuHeading: "Радионяни и видеоняни",
                            path: "/babymonitor",
                            isUnique: false,
                            position: 0
                        }
                    }
                },
                boardAndEducationalGames: {
                    ruName: "Настольные игры и развивающие игрушки",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        boardGames: {
                            ruName: "Настольные игры",
                            subcategoryPageRuHeading: "Настольные игры",
                            path: "/boardgame",
                            isUnique: false,
                            position: 1
                        },
                        constructors: {
                            ruName: "Конструкторы",
                            subcategoryPageRuHeading: "Конструкторы",
                            path: "/buildingkit",
                            isUnique: false,
                            position: 1
                        },
                        educationalToys: {
                            ruName: "Развивающие игрушки",
                            subcategoryPageRuHeading: "Развивающие игрушки",
                            path: "/edu_toys",
                            isUnique: true,
                            position: 0
                        },
                        developmentalMats: {
                            ruName: "Развивающие коврики",
                            subcategoryPageRuHeading: "Развивающие коврики",
                            path: "/playmats",
                            isUnique: true,
                            position: 0
                        },
                        scaleModels: {
                            ruName: "Сборные модели",
                            subcategoryPageRuHeading: "Сборные модели",
                            path: "/scale_model",
                            isUnique: false,
                            position: 1
                        },
                        logicPuzzles: {
                            ruName: "Логические игры, головоломки",
                            subcategoryPageRuHeading: "Логические игры, головоломки",
                            path: "/logic_puzzles",
                            isUnique: false,
                            position: 1
                        },
                        pens3d: {
                            ruName: "3D-ручки",
                            subcategoryPageRuHeading: "3D-ручки",
                            path: "/3d_pen",
                            isUnique: false,
                            position: 1
                        },
                        fidgetSpinners: {
                            ruName: "Фиджет спиннеры",
                            subcategoryPageRuHeading: "Фиджет спиннеры",
                            path: "/fidget_spinner",
                            isUnique: false,
                            position: 1
                        },
                        scienceKits: {
                            ruName: "Игры-опыты, эксперименты",
                            subcategoryPageRuHeading: "Игры-опыты, эксперименты",
                            path: "/science_kits",
                            isUnique: false,
                            position: 0
                        }
                    }
                },
                toysAndGames: {
                    ruName: "Игрушки и игры",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        actionFigures: {
                            ruName: "Экшен-фигурки",
                            subcategoryPageRuHeading: "Куклы, экшен-фигурки",
                            path: "/doll?do_type%5B0%5D=actionfigure&do_type%5Boperation%5D=union",
                            isUnique: false,
                            position: 1
                        },
                        babyDolls: {
                            ruName: "Детские куклы",
                            subcategoryPageRuHeading: "Куклы, экшен-фигурки",
                            path: "/doll?do_type%5B0%5D=doll&do_type%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        dollHouses: {
                            ruName: "Кукольные домики",
                            subcategoryPageRuHeading: "Кукольные домики",
                            path: "/dollhouses",
                            isUnique: true,
                            position: 0
                        },
                        raceTracks: {
                            ruName: "Детские автотреки, трассы",
                            subcategoryPageRuHeading: "Детские автотреки, трассы",
                            path: "/race_track",
                            isUnique: true,
                            position: 0
                        },
                        rcCars: {
                            ruName: "Радиоуправляемые машинки",
                            subcategoryPageRuHeading: "Радиоуправляемые автомодели",
                            path: "/radioautomodel",
                            isUnique: false,
                            position: 1
                        },
                        rcAircraftModels: {
                            ruName: "Радиоуправляемые самолеты и вертолеты",
                            subcategoryPageRuHeading: "Радиоуправляемые авиамодели",
                            path: "/radiocontrolair",
                            isUnique: false,
                            position: 1
                        },
                        kidsRailRoads: {
                            ruName: "Детские железные дороги",
                            subcategoryPageRuHeading: "Детские железные дороги",
                            path: "/kidsrailroad",
                            isUnique: true,
                            position: 0
                        },
                        stuffedToys: {
                            ruName: "Мягкие игрушки",
                            subcategoryPageRuHeading: "Мягкие игрушки",
                            path: "/stuffedtoys",
                            isUnique: false,
                            position: 1
                        },
                        interactiveToys: {
                            ruName: "Интерактивные игрушки и роботы",
                            subcategoryPageRuHeading: "Интерактивные игрушки и роботы",
                            path: "/interactive_toys",
                            isUnique: true,
                            position: 0
                        },
                        rcBoats: {
                            ruName: "Радиоуправляемые катера",
                            subcategoryPageRuHeading: "Радиоуправляемые судомодели",
                            path: "/radiomodelwater",
                            isUnique: false,
                            position: 1
                        },
                        playHouses: {
                            ruName: "Игровые домики и палатки",
                            subcategoryPageRuHeading: "Игровые домики и палатки",
                            path: "/playhouse",
                            isUnique: false,
                            position: 0
                        },
                        airHockeyFoosballMiniMilliards: {
                            ruName: "Аэрохоккей, настольный футбол, мини-бильярд",
                            subcategoryPageRuHeading: "Аэрохоккей, настольный футбол, мини-бильярд",
                            path: "/airhockey",
                            isUnique: false,
                            position: 1
                        }
                    }
                },
                outdoorGamesAndSport: {
                    ruName: "Игры на улице и спорт",
                    isUnique: false,
                    containsUnique: true,
                    subCategories: {
                        pools: {
                            ruName: "Бассейны",
                            subcategoryPageRuHeading: "Бассейны",
                            path: "/pool",
                            isUnique: false,
                            position: 1
                        },
                        swedishWalls: {
                            ruName: "Шведские стенки",
                            subcategoryPageRuHeading: "Шведские стенки",
                            path: "/kidwallbars?kwb_wallbars=1",
                            isUnique: false,
                            position: 1
                        },
                        childrenStreetComplexesAndHills: {
                            ruName: "Уличные комплексы и горки",
                            subcategoryPageRuHeading: "Детские уличные комплексы и горки",
                            path: "/kidwallbars?kwb_type[0]=outdoor&kwb_type[operation]=union",
                            isUnique: false,
                            position: 1
                        },
                        gardenSwings: {
                            ruName: "Садовые качели",
                            subcategoryPageRuHeading: "Садовые качели",
                            path: "/gardenswing",
                            isUnique: false,
                            position: 1
                        },
                        trampolines: {
                            ruName: "Батуты",
                            subcategoryPageRuHeading: "Батуты",
                            path: "/trampoline",
                            isUnique: false,
                            position: 2
                        },
                        balls: {
                            ruName: "Мячи",
                            subcategoryPageRuHeading: "Мячи",
                            path: "/ball",
                            isUnique: false,
                            position: 1
                        },
                        playhouses: {
                            ruName: "Игровые домики и палатки",
                            subcategoryPageRuHeading: "Игровые домики и палатки",
                            path: "/playhouse",
                            isUnique: false,
                            position: 1
                        },
                        childrenSkates: {
                            ruName: "Коньки",
                            subcategoryPageRuHeading: "Коньки",
                            path: "/skates?type_skates%5B0%5D=child_skates&type_skates%5B1%5D=girls_skates&type_skates%5B2%5D=boy_skates&type_skates%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        childrenRollerSkates: {
                            ruName: "Роликовые коньки",
                            subcategoryPageRuHeading: "Роликовые коньки",
                            path: "/rollerskates",
                            isUnique: false,
                            position: 1
                        },
                        childrenKickScooters: {
                            ruName: "Самокаты",
                            subcategoryPageRuHeading: "Самокаты",
                            path: "/kickscooter?ks_targetaudienc%5B0%5D=kid&ks_targetaudienc%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        childrenSki: {
                            ruName: "Лыжи",
                            subcategoryPageRuHeading: "Детские лыжи",
                            path: "/skis?gender_skis%5B0%5D=child_skis&gender_skis%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        hockeySticks: {
                            ruName: "Хоккейные клюшки",
                            subcategoryPageRuHeading: "Хоккейные клюшки",
                            path: "/hockeystick",
                            isUnique: false,
                            position: 1
                        },
                        sportsProtection: {
                            ruName: "Спортивная защита",
                            subcategoryPageRuHeading: "Спортивная защита",
                            path: "/sportsprotection?spp_forwhom%5B0%5D=kids&spp_forwhom%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                newbornCare: {
                    ruName: "Уход за новорожденными",
                    isUnique: false,
                    containsUnique: true,
                    subCategories: {
                        diapers: {
                            ruName: "Подгузники",
                            subcategoryPageRuHeading: "Детские подгузники",
                            path: "/diapers",
                            isUnique: true,
                            position: 0
                        },
                        babyMonitors: {
                            ruName: "Радионяни и видеоняни",
                            subcategoryPageRuHeading: "Радионяни и видеоняни",
                            path: "/babymonitor",
                            isUnique: false,
                            position: 1
                        },
                        babyScales: {
                            ruName: "Весы для новорожденных",
                            subcategoryPageRuHeading: "Детские весы",
                            path: "/babyscales",
                            isUnique: true,
                            position: 0
                        },
                        babyFoodMakers: {
                            ruName: "Устройства для приготовления детского питания",
                            subcategoryPageRuHeading: "Устройства для приготовления детского питания",
                            path: "/babyfoodmaker",
                            isUnique: true,
                            position: 0
                        },
                        bottleWarmersAndSterilizers: {
                            ruName: "Подогреватели и стерилизаторы бутылочек",
                            subcategoryPageRuHeading: "Подогреватели и стерилизаторы",
                            path: "/bottlesterilizer",
                            isUnique: true,
                            position: 0
                        },
                        babyThermometers: {
                            ruName: "Термометры",
                            subcategoryPageRuHeading: "Детские термометры",
                            path: "/medthermometer?baby_medtherm=1",
                            isUnique: true,
                            position: 0
                        },
                        babyWashingPowders: {
                            ruName: "Детские стиральные порошки",
                            subcategoryPageRuHeading: "Детские стиральные порошки",
                            path: "/washingpowder?typeoflinen[0]=washchild&typeoflinen[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        breastPumpsAndAccessories: {
                            ruName: "Молокоотсосы и аксессуары",
                            subcategoryPageRuHeading: "Молокоотсосы и аксессуары",
                            path: "/breast_pump",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                goodsForSchool: {
                    ruName: "Товары для школы",
                    isUnique: false,
                    containsUnique: true,
                    subCategories: {
                        schoolBackpacks: {
                            ruName: "Школьные рюкзаки",
                            subcategoryPageRuHeading: "Школьные рюкзаки",
                            path: "/backpack?bap_type[0]=school&bap_type[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        childrenTablesAndSchoolDesks: {
                            ruName: "Детские парты, столы, стулья",
                            subcategoryPageRuHeading: "Детские парты, столы, стулья",
                            path: "/kidsdesk",
                            isUnique: false,
                            position: 2
                        },
                        childrenSmartWatches: {
                            ruName: "Умные часы для детей",
                            subcategoryPageRuHeading: "Умные часы для детей",
                            path: "/smartwatch?sw_kid=1",
                            isUnique: true,
                            position: 0
                        },
                        markerAndChalkBoards: {
                            ruName: "Маркерные и меловые доски",
                            subcategoryPageRuHeading: "Офисные доски, флипчарты",
                            path: "/officeboard",
                            isUnique: false,
                            position: 1
                        },
                        scienceKits: {
                            ruName: "Игры-опыты, эксперименты",
                            subcategoryPageRuHeading: "Игры-опыты, эксперименты",
                            path: "/science_kits",
                            isUnique: false,
                            position: 1
                        }
                    }
                }
            }
        },
        workAndOffice: {
            id: 9,
            ruName: "Работа и офис",
            tiles: [
                {
                    ruName: "Широкоформатные принтеры",
                    path: "/printers?type_print%5B0%5D=plotter&type_print%5Boperation%5D=union&utm_source=rf_tile&utm_medium=plotter",
                    isUnique: true
                },
                {
                    ruName: "Сканеры штрих-кодов",
                    path: "/barcode?utm_source=rf_tile&utm_medium=barcode",
                    isUnique: true
                },
                {
                    ruName: "Офисные столы",
                    path: "/table?tbl_type%5B0%5D=office&tbl_type%5B1%5D=executive&tbl_type%5B2%5D=conference&tbl_type%5B3%5D=stolstand&tbl_type%5Boperation%5D=union&utm_source=rf_tile&utm_medium=officetable",
                    isUnique: true
                },
                {
                    ruName: "Камеры CCTV",
                    path: "/cctvcamera?utm_source=rf_tile&utm_medium=cctvcamera",
                    isUnique: true
                },
                {
                    ruName: "Ноутбуки для работы",
                    path: "/notebook?notebook_purp%5B0%5D=work&notebook_purp%5Boperation%5D=union&utm_source=rf_tile&utm_medium=laptopforwork",
                    isUnique: true
                },
                {
                    ruName: "Термопринтеры",
                    path: "/thermal?utm_source=rf_tile&utm_medium=thermal",
                    isUnique: true
                }
            ],
            categories: {
                officeEquipment: {
                    ruName: "Офисная техника и расходные материалы",
                    isUnique: false,
                    containsUnique: true,
                    subCategories: {
                        printers: {
                            ruName: "Принтеры и МФУ",
                            subcategoryPageRuHeading: "Принтеры и МФУ",
                            path: "/printers",
                            isUnique: false,
                            position: 1
                        },
                        faxes: {
                            ruName: "Факсы",
                            subcategoryPageRuHeading: "Факсы",
                            path: "/fax",
                            isUnique: false,
                            position: 1
                        },
                        scanners: {
                            ruName: "Сканеры",
                            subcategoryPageRuHeading: "Сканеры",
                            path: "/scanner",
                            isUnique: false,
                            position: 1
                        },
                        cartridges: {
                            ruName: "Картриджи для принтеров",
                            subcategoryPageRuHeading: "Картриджи для принтеров и МФУ",
                            path: "/cartridges",
                            isUnique: false,
                            position: 1
                        },
                        shredders: {
                            ruName: "Уничтожители бумаг (шредеры)",
                            subcategoryPageRuHeading: "Шредеры",
                            path: "/shredder",
                            isUnique: true,
                            position: 0
                        },
                        photoPaper: {
                            ruName: "Бумага и материалы для печати",
                            subcategoryPageRuHeading: "Бумага и материалы для печати",
                            path: "/photopaper",
                            isUnique: false,
                            position: 1
                        },
                        paperCutters: {
                            ruName: "Резаки для бумаги",
                            subcategoryPageRuHeading: "Резаки для бумаги",
                            path: "/papercutter",
                            isUnique: true,
                            position: 0
                        },
                        bookletMakers: {
                            ruName: "Брошюровщики",
                            subcategoryPageRuHeading: "Брошюровщики",
                            path: "/bindingmachines",
                            isUnique: false,
                            position: 1
                        },
                        printers3d: {
                            ruName: "3D-принтеры",
                            subcategoryPageRuHeading: "3D-принтеры",
                            path: "/3dprinter",
                            isUnique: false,
                            position: 1
                        },
                        suppliesFor3dPrinting: {
                            ruName: "Расходные материалы для 3D-печати",
                            subcategoryPageRuHeading: "Расходные материалы для 3D-печати",
                            path: "/3d_filament",
                            isUnique: false,
                            position: 1
                        },
                        surgeProtectors: {
                            ruName: "Сетевые фильтры-удлинители",
                            subcategoryPageRuHeading: "Сетевые фильтры",
                            path: "/voltageregulator?voltage_type[0]=surge&voltage_type[operation]=union",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                officeFurniture: {
                    ruName: "Офисная мебель",
                    isUnique: false,
                    containsUnique: true,
                    subCategories: {
                        officeChairs: {
                            ruName: "Офисные кресла, стулья",
                            subcategoryPageRuHeading: "Офисные кресла и стулья",
                            path: "/office_chair",
                            isUnique: true,
                            position: 0
                        },
                        officeTables: {
                            ruName: "Офисные столы",
                            subcategoryPageRuHeading: "Столы",
                            path: "/table?tbl_type%5B0%5D=executive&tbl_type%5B1%5D=conference&tbl_type%5B2%5D=office&tbl_type%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        officeSofas: {
                            ruName: "Офисные диваны",
                            subcategoryPageRuHeading: "Офисные диваны",
                            path: "/divan?di_office=1",
                            isUnique: true,
                            position: 0
                        },
                        officeSafes: {
                            ruName: "Сейфы",
                            subcategoryPageRuHeading: "Сейфы",
                            path: "/furnituresafes",
                            isUnique: true,
                            position: 0
                        },
                        officeBoards: {
                            ruName: "Офисные доски, флипчарты",
                            subcategoryPageRuHeading: "Офисные доски, флипчарты",
                            path: "/officeboard",
                            isUnique: false,
                            position: 2
                        }
                    }
                },
                tradeAndFinance: {
                    ruName: "Торговля и финансы",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        cashRegisters: {
                            ruName: "Кассовые аппараты",
                            subcategoryPageRuHeading: "Кассовые аппараты",
                            path: "/cashregister",
                            isUnique: true,
                            position: 0
                        },
                        banknoteAndCoinCounters: {
                            ruName: "Счетчики банкнот и монет",
                            subcategoryPageRuHeading: "Счетчики банкнот и монет",
                            path: "/counters",
                            isUnique: true,
                            position: 0
                        },
                        barcodeScanners: {
                            ruName: "Сканеры штрих-кодов",
                            subcategoryPageRuHeading: "Сканеры штрих-кодов",
                            path: "/barcode",
                            isUnique: true,
                            position: 0
                        },
                        currencyDetectors: {
                            ruName: "Детекторы валют",
                            subcategoryPageRuHeading: "Детекторы валют",
                            path: "/currencydetector",
                            isUnique: true,
                            position: 0
                        },
                        matrixPrinters: {
                            ruName: "Матричные принтеры",
                            subcategoryPageRuHeading: "Матричные принтеры",
                            path: "/matrixprinter",
                            isUnique: false,
                            position: 1
                        },
                        printersOnLabelsAndReceipts: {
                            ruName: "Принтеры на этикетках и чеках",
                            subcategoryPageRuHeading: "Термопринтеры",
                            path: "/thermal",
                            isUnique: true,
                            position: 0
                        },
                        dashboards: {
                            ruName: "Информационные панели",
                            subcategoryPageRuHeading: "Информационные панели",
                            path: "/digitalsignage",
                            isUnique: true,
                            position: 0
                        },
                        commercialRefrigerators: {
                            ruName: "Торговые холодильники",
                            subcategoryPageRuHeading: "Торговые холодильники",
                            path: "/commfrige",
                            isUnique: true,
                            position: 0
                        },
                        commercialTents: {
                            ruName: "Шатры, тенты для торговли",
                            subcategoryPageRuHeading: "Шатры для торговли",
                            path: "/canopy_tents?ct_use%5B0%5D=2&ct_use%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        thermalCurtains: {
                            ruName: "Тепловые завесы",
                            subcategoryPageRuHeading: "Тепловые завесы",
                            path: "/aircurtain",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                publishingAndPrinting: {
                    ruName: "Издательство и печать",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        printers: {
                            ruName: "Принтеры и МФУ",
                            subcategoryPageRuHeading: "Принтеры и МФУ",
                            path: "/printers",
                            isUnique: false,
                            position: 2
                        },
                        laminators: {
                            ruName: "Ламинаторы",
                            subcategoryPageRuHeading: "Ламинаторы",
                            path: "/laminator",
                            isUnique: false,
                            position: 1
                        },
                        bookletMakers: {
                            ruName: "Брошюровщики",
                            subcategoryPageRuHeading: "Брошюровщики",
                            path: "/bindingmachines",
                            isUnique: false,
                            position: 2
                        },
                        graphicTablets: {
                            ruName: "Графические планшеты",
                            subcategoryPageRuHeading: "Графические планшеты",
                            path: "/tablets",
                            isUnique: false,
                            position: 2
                        },
                        officePaper: {
                            ruName: "Офисная бумага",
                            subcategoryPageRuHeading: "Бумага и материалы для печати",
                            path: "/photopaper?pp_type%5B0%5D=officepap&pp_type%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        },
                        selfAdhesivePaper: {
                            ruName: "Самоклеящаяся бумага",
                            subcategoryPageRuHeading: "Самоклеящаяся бумага",
                            path: "/photopaper?pp_type[0]=selfadhesive&pp_type[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        thermalTransferPaper: {
                            ruName: "Термотрансферная бумага",
                            subcategoryPageRuHeading: "Термотрансферная бумага",
                            path: "/photopaper?pp_type[0]=thermaltransfer&pp_type[operation]=union",
                            isUnique: true,
                            position: 0
                        },
                        photoPaper: {
                            ruName: "Фотобумага",
                            subcategoryPageRuHeading: "Бумага и материалы для печати",
                            path: "/photopaper?pp_type%5B0%5D=paper&pp_type%5Boperation%5D=union",
                            isUnique: true,
                            position: 0
                        }
                    }
                },
                hygieneAndNutrition: {
                    ruName: "Гигиена и питание",
                    isUnique: true,
                    containsUnique: true,
                    subCategories: {
                        dispensers: {
                            ruName: "Дозаторы, диспенсеры",
                            subcategoryPageRuHeading: "Дозаторы, диспенсеры",
                            path: "/dispenser",
                            isUnique: false,
                            position: 1
                        },
                        handDryers: {
                            ruName: "Сушилки для рук, волос",
                            subcategoryPageRuHeading: "Сушилки для рук, волос",
                            path: "/handsdryer",
                            isUnique: false,
                            position: 1
                        },
                        waterCoolers: {
                            ruName: "Кулеры для воды",
                            subcategoryPageRuHeading: "Кулеры для воды",
                            path: "/water_cooler",
                            isUnique: true,
                            position: 0
                        },
                        coffeeMachinesAndCoffeeMakers: {
                            ruName: "Кофемашины и кофеварки",
                            subcategoryPageRuHeading: "Кофеварки и кофемашины",
                            path: "/coffee",
                            isUnique: true,
                            position: 0
                        },
                        coffee: {
                            ruName: "Кофе",
                            subcategoryPageRuHeading: "Кофе",
                            path: "/coffeejava",
                            isUnique: false,
                            position: 2
                        },
                        refrigerators: {
                            ruName: "Холодильники",
                            subcategoryPageRuHeading: "Холодильные камеры",
                            path: "/refrigerator?type_refrigerato[0]=iceroom&type_refrigerato[operation]=union&type_freezer[0]=none&type_freezer[operation]=union&ref_usefulcap[to]=124",
                            isUnique: true,
                            position: 0
                        },
                        microwaves: {
                            ruName: "Микроволновые печи",
                            subcategoryPageRuHeading: "Микроволновые печи",
                            path: "/microvawe",
                            isUnique: false,
                            position: 1
                        }
                    }
                },
                CCTV: {
                    ruName: "Видеонаблюдение",
                    isUnique: true,
                    containsUnique: false,
                    subCategories: {
                        ipCameras: {
                            ruName: "IP-камеры",
                            subcategoryPageRuHeading: "IP-камеры",
                            path: "/ipcamera",
                            isUnique: false,
                            position: 4
                        },
                        CCTV: {
                            ruName: "Камеры CCTV",
                            subcategoryPageRuHeading: "Камеры CCTV",
                            path: "/cctvcamera",
                            isUnique: false,
                            position: 2
                        },
                        DVRs: {
                            ruName: "Видеорегистраторы",
                            subcategoryPageRuHeading: "Видеорегистраторы наблюдения",
                            path: "/dvr",
                            isUnique: false,
                            position: 2
                        },
                        videoDoorPhones: {
                            ruName: "Видеодомофоны",
                            subcategoryPageRuHeading: "Видеодомофоны",
                            path: "/videodoorphone",
                            isUnique: false,
                            position: 2
                        }
                    }
                },
                transportAndTransportation: {
                    ruName: "Транспорт и перевозки",
                    isUnique: true,
                    containsUnique: false,
                    subCategories: {
                        gpsTrackers: {
                            ruName: "GPS-трекеры",
                            subcategoryPageRuHeading: "GPS-трекеры",
                            path: "/gps_tracker",
                            isUnique: false,
                            position: 1
                        },
                        DVRs: {
                            ruName: "Видеорегистраторы",
                            subcategoryPageRuHeading: "Автомобильные видеорегистраторы",
                            path: "/videoregistrator",
                            isUnique: false,
                            position: 1
                        },
                        gpsNavigators: {
                            ruName: "GPS-навигаторы",
                            subcategoryPageRuHeading: "GPS-навигаторы",
                            path: "/gps",
                            isUnique: false,
                            position: 1
                        },
                        breathAnalyzers: {
                            ruName: "Алкотестеры",
                            subcategoryPageRuHeading: "Алкотестеры",
                            path: "/breathalyzer",
                            isUnique: false,
                            position: 1
                        }
                    }
                },
                industryAndConstruction: {
                    ruName: "Промышленность и строительство",
                    isUnique: true,
                    containsUnique: false,
                    subCategories: {
                        woodworkingMachinery: {
                            ruName: "Деревообрабатывающие станки",
                            subcategoryPageRuHeading: "Деревообрабатывающие станки",
                            path: "/woodworking",
                            isUnique: false,
                            position: 1
                        },
                        metalworkingMachinery: {
                            ruName: "Металлообрабатывающие станки",
                            subcategoryPageRuHeading: "Металлообрабатывающие станки",
                            path: "/metalworking",
                            isUnique: false,
                            position: 1
                        },
                        electricMetalCutters: {
                            ruName: "Электрические ножницы по металлу",
                            subcategoryPageRuHeading: "Электрические ножницы по металлу",
                            path: "/metal_cutter",
                            isUnique: false,
                            position: 1
                        },
                        sharpeningMachines: {
                            ruName: "Заточные станки (точила)",
                            subcategoryPageRuHeading: "Заточные станки (точила)",
                            path: "/benchgrinder",
                            isUnique: false,
                            position: 1
                        },
                        electricAndGasCutters: {
                            ruName: "Электро- и бензорезы",
                            subcategoryPageRuHeading: "Электро- и бензорезы",
                            path: "/powercutter",
                            isUnique: false,
                            position: 1
                        },
                        pipeMetalRolling: {
                            ruName: "Трубный металлопрокат",
                            subcategoryPageRuHeading: "Трубный металлопрокат",
                            path: "/metal_pipes",
                            isUnique: false,
                            position: 1
                        },
                        sheetMetalRolling: {
                            ruName: "Листовой металлопрокат",
                            subcategoryPageRuHeading: "Листовой металлопрокат",
                            path: "/sheetmetal",
                            isUnique: false,
                            position: 1
                        },
                        fittings: {
                            ruName: "Арматура",
                            subcategoryPageRuHeading: "Арматура",
                            path: "/armatura",
                            isUnique: false,
                            position: 1
                        },
                        rabitz: {
                            ruName: "Строительные сетки",
                            subcategoryPageRuHeading: "Строительные сетки",
                            path: "/rabitz",
                            isUnique: false,
                            position: 1
                        },
                        buildingMaterials: {
                            ruName: "Общестроительные материалы",
                            subcategoryPageRuHeading: "Общестроительные материалы",
                            path: "/buildingmaterial",
                            isUnique: false,
                            position: 1
                        },
                        bricks: {
                            ruName: "Кирпич",
                            subcategoryPageRuHeading: "Кирпич, строительные блоки",
                            path: "/bricks",
                            isUnique: false,
                            position: 1
                        },
                        pavingSlabs: {
                            ruName: "Тротуарная плитка",
                            subcategoryPageRuHeading: "Тротуарная плитка",
                            path: "/pavers",
                            isUnique: false,
                            position: 2
                        }
                    }
                }
            }
        }
    }
}
