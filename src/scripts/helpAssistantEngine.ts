type Lang = 'de' | 'ru' | 'en';
type Priority = 'normal' | 'heavy' | 'conditional';
type Stage = 'categories' | 'issues' | 'details';
type Result = 'none' | 'helped' | 'escalate';

interface Issue {
  id: string;
  title: string;
  priority: Priority;
  quick: string;
  steps: string[];
  warning?: string;
  conditionalAlert?: string;
}

interface Category {
  id: string;
  title: string;
  issues: Issue[];
}

interface UiText {
  trigger: string;
  panelTitle: string;
  panelSubtitle: string;
  chooseCategory: string;
  chooseIssue: string;
  quickLabel: string;
  stepsLabel: string;
  cautionLabel: string;
  helped: string;
  notHelped: string;
  contact: string;
  back: string;
  reset: string;
  otherIssue: string;
  successTitle: string;
  successText: string;
  escalateTitle: string;
  escalateText: string;
  heavyTitle: string;
  heavyText: string;
  conditionalLabel: string;
}

interface Dictionary {
  ui: UiText;
  categories: Category[];
}

const DICTIONARY: Record<Lang, Dictionary> = {
  ru: {
    ui: {
      trigger: 'Быстрая помощь',
      panelTitle: 'Мини-помощник',
      panelSubtitle: 'Выберите устройство и проблему',
      chooseCategory: 'Категории',
      chooseIssue: 'Типовые проблемы',
      quickLabel: 'Что сделать быстро',
      stepsLabel: 'Пошагово',
      cautionLabel: 'Важно',
      helped: 'Помогло',
      notHelped: 'Не помогло',
      contact: 'Связаться',
      back: 'Назад',
      reset: 'В начало',
      otherIssue: 'Другая проблема',
      successTitle: 'Отлично',
      successText: 'Рад, что помогло. Если проблема повторится, лучше написать нам сразу.',
      escalateTitle: 'Подключаем мастера',
      escalateText: 'Если не помогло, откройте контакт и отправьте заявку. Подключимся быстро.',
      heavyTitle: 'Сложный случай',
      heavyText: 'Тут лучше сразу связаться, чтобы не потерять время и данные.',
      conditionalLabel: 'Если нет питания'
    },
    categories: [
      {
        id: 'computer',
        title: 'Компьютер / ноутбук',
        issues: [
          {
            id: 'pc_slow',
            title: 'Медленно работает',
            priority: 'normal',
            quick: 'Освободите место на диске и перезагрузите устройство.',
            steps: [
              'Закройте лишние программы и вкладки браузера.',
              'Проверьте свободное место на системном диске, оставьте минимум 20%.',
              'Отключите лишние программы из автозагрузки.',
              'Установите обновления системы и драйверов.',
              'Запустите проверку на вирусы.'
            ]
          },
          {
            id: 'pc_no_boot',
            title: 'Не включается / чёрный экран',
            priority: 'heavy',
            quick: 'Проверьте питание, кабель и индикаторы на корпусе.',
            steps: ['Если индикаторы не горят или экран остаётся чёрным, нужна диагностика.'],
            warning: 'Не разбирайте устройство самостоятельно, чтобы не усугубить поломку.'
          },
          {
            id: 'pc_internet',
            title: 'Интернет не работает',
            priority: 'normal',
            quick: 'Перезагрузите роутер и устройство.',
            steps: [
              'Отключите роутер от питания на 20 секунд и включите снова.',
              'Проверьте, подключено ли устройство к нужной сети.',
              'Попробуйте открыть сайт с другого устройства в той же сети.',
              'Забудьте сеть Wi-Fi и подключитесь заново.',
              'Если проблемы только на одном устройстве, сбросьте сетевые настройки.'
            ]
          },
          {
            id: 'pc_virus',
            title: 'Вирусы / навязчивая реклама',
            priority: 'heavy',
            quick: 'Сразу отключите подозрительные автозапуски и не вводите пароли.',
            steps: ['Для безопасной очистки и проверки данных лучше подключить специалиста.'],
            warning: 'Не удаляйте системные файлы вручную и не устанавливайте случайные “чистильщики”.'
          },
          {
            id: 'pc_install_error',
            title: 'Не устанавливается программа / ошибки',
            priority: 'normal',
            quick: 'Проверьте совместимость и права администратора.',
            steps: [
              'Скачайте установщик только с официального сайта.',
              'Запустите установку от имени администратора.',
              'Проверьте, хватает ли места на диске.',
              'Временно отключите антивирус только на время установки.',
              'Удалите старую версию программы и установите заново.'
            ]
          },
          {
            id: 'pc_devices',
            title: 'Принтер / звук / камера не работают',
            priority: 'normal',
            quick: 'Проверьте подключение и устройство по умолчанию.',
            steps: [
              'Проверьте кабель/USB или Bluetooth-подключение.',
              'Откройте настройки устройства и выберите правильное устройство по умолчанию.',
              'Перезапустите службу печати или аудио.',
              'Переустановите драйвер устройства.',
              'Проверьте разрешения камеры/микрофона в системе.'
            ]
          },
          {
            id: 'pc_data_loss',
            title: 'Данные пропали / восстановление',
            priority: 'heavy',
            quick: 'Немедленно прекратите запись новых файлов на диск.',
            steps: ['Чем меньше действий на диске, тем выше шанс восстановления.'],
            warning: 'Не делайте сброс и не форматируйте диск, если важны файлы.'
          }
        ]
      },
      {
        id: 'smartphone',
        title: 'Смартфон',
        issues: [
          {
            id: 'sp_battery',
            title: 'Быстро разряжается',
            priority: 'normal',
            quick: 'Снизьте яркость и проверьте фоновые приложения.',
            steps: [
              'Отключите Bluetooth/GPS, если не используете.',
              'Ограничьте фоновую активность тяжёлых приложений.',
              'Обновите систему до актуальной версии.',
              'Проверьте состояние батареи в настройках.',
              'Сделайте перезагрузку устройства.'
            ]
          },
          {
            id: 'sp_no_charge',
            title: 'Не заряжается',
            priority: 'heavy',
            quick: 'Проверьте другой кабель/блок питания и розетку.',
            steps: ['Если реакции нет даже с другим зарядным комплектом, нужен сервисный осмотр.'],
            warning: 'Не используйте поврежденные кабели и не прогревайте устройство.'
          },
          {
            id: 'sp_no_boot',
            title: 'Не включается / завис на логотипе',
            priority: 'heavy',
            quick: 'Сделайте принудительную перезагрузку кнопками.',
            steps: ['Если устройство не выходит из логотипа, лучше сразу обратиться в поддержку.'],
            warning: 'Не делайте сброс без резервной копии, можно потерять фото и чаты.'
          },
          {
            id: 'sp_network',
            title: 'Нет сети / Wi-Fi / Bluetooth',
            priority: 'normal',
            quick: 'Включите и выключите авиарежим на 10 секунд.',
            steps: [
              'Перезагрузите смартфон.',
              'Забудьте Wi-Fi сеть и подключитесь заново.',
              'Проверьте SIM-карту в другом телефоне.',
              'Сбросьте сетевые настройки.',
              'Проверьте, не включен ли VPN/прокси.'
            ]
          },
          {
            id: 'sp_storage',
            title: 'Память заполнена',
            priority: 'normal',
            quick: 'Удалите крупные видео и очистите папку загрузок.',
            steps: [
              'Откройте статистику памяти и найдите самые тяжелые файлы.',
              'Перенесите фото/видео в облако или на ПК.',
              'Удалите неиспользуемые приложения.',
              'Очистите кэш мессенджеров.',
              'Включите автоочистку временных файлов.'
            ]
          },
          {
            id: 'sp_media',
            title: 'Камера / звук / микрофон не работают',
            priority: 'normal',
            quick: 'Проверьте разрешения приложений.',
            steps: [
              'Перезапустите устройство.',
              'Откройте настройки разрешений и включите доступ к камере/микрофону.',
              'Проверьте звук в системном тесте и в наушниках.',
              'Обновите приложение, где проблема проявляется.',
              'Если не помогает, сбросьте настройки приложения.'
            ]
          },
          {
            id: 'sp_malware',
            title: 'Вирусы / реклама / подозрительные приложения',
            priority: 'heavy',
            quick: 'Удалите недавно установленные подозрительные приложения.',
            steps: ['Для безопасной очистки и проверки аккаунтов лучше сразу открыть контакт.'],
            warning: 'Срочно смените пароль почты и банковских приложений с чистого устройства.'
          },
          {
            id: 'sp_transfer',
            title: 'Перенос данных / настройка',
            priority: 'normal',
            quick: 'Подключите старое и новое устройство к Wi-Fi и зарядке.',
            steps: [
              'Включите резервную копию на старом устройстве.',
              'На новом устройстве выберите восстановление из копии.',
              'Дождитесь синхронизации контактов и фото.',
              'Проверьте мессенджеры и двухфакторную авторизацию.',
              'Перенастройте банковские приложения отдельно.'
            ]
          }
        ]
      },
      {
        id: 'tv',
        title: 'Телевизор / Smart TV',
        issues: [
          {
            id: 'tv_no_image',
            title: 'Нет изображения / нет сигнала',
            priority: 'conditional',
            quick: 'Проверьте источник сигнала и HDMI-вход.',
            steps: [
              'Проверьте, горит ли индикатор питания.',
              'Смените HDMI-кабель и порт.',
              'Переключите источник сигнала (Source/Input).',
              'Проверьте приставку или роутер перезагрузкой.'
            ],
            conditionalAlert: 'Если ТВ не подает признаков питания, это тяжелый случай.'
          },
          {
            id: 'tv_no_sound',
            title: 'Нет звука',
            priority: 'normal',
            quick: 'Проверьте громкость и режим “Mute”.',
            steps: [
              'Отключите Bluetooth-наушники/колонку.',
              'Проверьте аудиовыход (TV Speakers / HDMI ARC).',
              'Перезапустите телевизор.',
              'Обновите прошивку Smart TV.'
            ]
          },
          {
            id: 'tv_wifi',
            title: 'Не подключается к Wi-Fi',
            priority: 'normal',
            quick: 'Перезапустите роутер и телевизор.',
            steps: [
              'Убедитесь, что введен правильный пароль Wi-Fi.',
              'Проверьте, видит ли ТВ другие сети.',
              'Удалите сохраненную сеть и подключитесь заново.',
              'Если есть LAN-порт, проверьте подключение кабелем.'
            ]
          },
          {
            id: 'tv_apps',
            title: 'Не открываются приложения',
            priority: 'normal',
            quick: 'Проверьте интернет и обновите приложения.',
            steps: [
              'Очистите кэш приложений в настройках ТВ.',
              'Выйдите из аккаунта и войдите заново.',
              'Проверьте дату и время на ТВ.',
              'Проверьте обновления системы Smart TV.'
            ]
          },
          {
            id: 'tv_lag',
            title: 'Тормозит / зависает',
            priority: 'normal',
            quick: 'Полностью выключите ТВ на 1 минуту.',
            steps: [
              'Удалите лишние приложения.',
              'Очистите кэш системы.',
              'Отключите автозапуск тяжелых приложений.',
              'Обновите прошивку телевизора.'
            ]
          },
          {
            id: 'tv_remote',
            title: 'Пульт не работает',
            priority: 'normal',
            quick: 'Поставьте новые батарейки.',
            steps: [
              'Проверьте, не закрыт ли ИК-приемник на ТВ.',
              'Сделайте повторное сопряжение пульта (для Bluetooth-пультов).',
              'Проверьте работу через мобильное приложение производителя.',
              'Перезапустите телевизор.'
            ]
          },
          {
            id: 'tv_setup',
            title: 'Каналы / HDMI / приставка — настройка',
            priority: 'normal',
            quick: 'Проверьте правильный источник сигнала и автопоиск каналов.',
            steps: [
              'Запустите автопоиск каналов в меню ТВ.',
              'Проверьте подключение антенны или приставки.',
              'Выберите правильный HDMI-вход.',
              'Сохраните пресеты каналов после настройки.'
            ]
          }
        ]
      }
    ]
  },
  de: {
    ui: {
      trigger: 'Schnelle Hilfe',
      panelTitle: 'Mini-Assistent',
      panelSubtitle: 'Gerät und Problem auswählen',
      chooseCategory: 'Kategorien',
      chooseIssue: 'Typische Probleme',
      quickLabel: 'Schneller Check',
      stepsLabel: 'Schritte',
      cautionLabel: 'Wichtig',
      helped: 'Hat geholfen',
      notHelped: 'Nicht geholfen',
      contact: 'Kontakt aufnehmen',
      back: 'Zurück',
      reset: 'Neu starten',
      otherIssue: 'Anderes Problem',
      successTitle: 'Perfekt',
      successText: 'Gut, dass es funktioniert. Wenn das Problem wiederkommt, einfach melden.',
      escalateTitle: 'Wir übernehmen',
      escalateText: 'Wenn es nicht geholfen hat, direkt Kontakt öffnen. Wir kümmern uns schnell.',
      heavyTitle: 'Komplexer Fall',
      heavyText: 'Hier besser direkt Kontakt aufnehmen, um Zeit und Daten zu schützen.',
      conditionalLabel: 'Wenn keine Stromanzeige'
    },
    categories: [
      {
        id: 'computer',
        title: 'Computer / Laptop',
        issues: [
          {
            id: 'pc_slow',
            title: 'Sehr langsam',
            priority: 'normal',
            quick: 'Freien Speicher schaffen und neu starten.',
            steps: [
              'Unnötige Programme und Browser-Tabs schließen.',
              'Mindestens 20% freien Platz auf Laufwerk C sicherstellen.',
              'Autostart-Einträge reduzieren.',
              'System und Treiber aktualisieren.',
              'Malware-Scan durchführen.'
            ]
          },
          {
            id: 'pc_no_boot',
            title: 'Startet nicht / schwarzer Bildschirm',
            priority: 'heavy',
            quick: 'Netzteil, Kabel und Status-LED prüfen.',
            steps: ['Wenn keine Anzeige erscheint, ist eine direkte Diagnose sinnvoll.'],
            warning: 'Gerät nicht selbst öffnen, um Folgeschäden zu vermeiden.'
          },
          {
            id: 'pc_internet',
            title: 'Internet funktioniert nicht',
            priority: 'normal',
            quick: 'Router und Gerät neu starten.',
            steps: [
              'Router 20 Sekunden vom Strom trennen.',
              'Mit dem richtigen WLAN verbunden sein.',
              'Mit zweitem Gerät im selben Netz testen.',
              'WLAN vergessen und neu verbinden.',
              'Falls nur ein Gerät betroffen ist: Netzwerkeinstellungen zurücksetzen.'
            ]
          },
          {
            id: 'pc_virus',
            title: 'Viren / Pop-ups / Werbung',
            priority: 'heavy',
            quick: 'Keine Passwörter eingeben und verdächtige Prozesse stoppen.',
            steps: ['Für sichere Bereinigung und Kontoprüfung besser sofort Kontakt aufnehmen.'],
            warning: 'Keine zufälligen Cleaner installieren und keine Systemdateien manuell löschen.'
          },
          {
            id: 'pc_install_error',
            title: 'Installation schlägt fehl / Fehler',
            priority: 'normal',
            quick: 'Kompatibilität und Adminrechte prüfen.',
            steps: [
              'Installer nur von offizieller Quelle herunterladen.',
              'Als Administrator ausführen.',
              'Freien Speicher prüfen.',
              'Sicherheitssoftware kurzzeitig nur für die Installation pausieren.',
              'Alte Version vollständig entfernen und neu installieren.'
            ]
          },
          {
            id: 'pc_devices',
            title: 'Drucker / Ton / Kamera funktioniert nicht',
            priority: 'normal',
            quick: 'Verbindung und Standardgerät prüfen.',
            steps: [
              'USB/Bluetooth-Verbindung prüfen.',
              'Richtiges Ausgabegerät als Standard setzen.',
              'Treiber aktualisieren oder neu installieren.',
              'Kamera-/Mikrofonrechte in den Systemeinstellungen prüfen.',
              'Gerät und Rechner neu starten.'
            ]
          },
          {
            id: 'pc_data_loss',
            title: 'Daten weg / Wiederherstellung',
            priority: 'heavy',
            quick: 'Keine neuen Dateien auf das Laufwerk schreiben.',
            steps: ['Je weniger Aktionen, desto höher die Chance auf Datenrettung.'],
            warning: 'Keinen Reset oder Formatierung durchführen, wenn Daten wichtig sind.'
          }
        ]
      },
      {
        id: 'smartphone',
        title: 'Smartphone',
        issues: [
          {
            id: 'sp_battery',
            title: 'Akku entlädt sich schnell',
            priority: 'normal',
            quick: 'Helligkeit reduzieren und Hintergrundaktivitäten prüfen.',
            steps: [
              'Bluetooth/GPS nur bei Bedarf aktivieren.',
              'Stromfresser in den Akku-Einstellungen einschränken.',
              'Systemupdates installieren.',
              'Akkuzustand prüfen.',
              'Neustart durchführen.'
            ]
          },
          {
            id: 'sp_no_charge',
            title: 'Lädt nicht',
            priority: 'heavy',
            quick: 'Anderes Kabel, Netzteil und Steckdose testen.',
            steps: ['Wenn weiterhin keine Reaktion kommt, bitte direkt Kontakt aufnehmen.'],
            warning: 'Keine beschädigten Kabel benutzen.'
          },
          {
            id: 'sp_no_boot',
            title: 'Startet nicht / hängt im Logo',
            priority: 'heavy',
            quick: 'Erzwungenen Neustart per Tastenkombi versuchen.',
            steps: ['Wenn es im Logo hängen bleibt, sollte ein Profi übernehmen.'],
            warning: 'Keinen Werksreset ohne Backup durchführen.'
          },
          {
            id: 'sp_network',
            title: 'Kein Mobilfunk / WLAN / Bluetooth',
            priority: 'normal',
            quick: 'Flugmodus 10 Sekunden ein- und ausschalten.',
            steps: [
              'Smartphone neu starten.',
              'WLAN löschen und neu verbinden.',
              'SIM-Karte in einem anderen Gerät testen.',
              'Netzwerkeinstellungen zurücksetzen.',
              'VPN/Proxy testweise deaktivieren.'
            ]
          },
          {
            id: 'sp_storage',
            title: 'Speicher voll',
            priority: 'normal',
            quick: 'Große Videos und Downloads löschen.',
            steps: [
              'Speicheranalyse öffnen und größte Dateien identifizieren.',
              'Fotos/Videos in Cloud oder auf PC auslagern.',
              'Unbenutzte Apps entfernen.',
              'Messenger-Cache leeren.',
              'Temporäre Dateien bereinigen.'
            ]
          },
          {
            id: 'sp_media',
            title: 'Kamera / Ton / Mikrofon geht nicht',
            priority: 'normal',
            quick: 'App-Berechtigungen prüfen.',
            steps: [
              'Gerät neu starten.',
              'Kamera-/Mikrofonrechte für die betroffene App aktivieren.',
              'Mit einer zweiten App gegenprüfen.',
              'App aktualisieren oder neu installieren.',
              'Bei Bedarf App-Einstellungen zurücksetzen.'
            ]
          },
          {
            id: 'sp_malware',
            title: 'Viren / Werbung / verdächtige Apps',
            priority: 'heavy',
            quick: 'Verdächtige Apps sofort entfernen.',
            steps: ['Für sichere Bereinigung und Account-Prüfung direkt Kontakt nutzen.'],
            warning: 'Passwörter von Mail- und Banking-Konten von einem sauberen Gerät ändern.'
          },
          {
            id: 'sp_transfer',
            title: 'Datenübernahme / Einrichtung',
            priority: 'normal',
            quick: 'Beide Geräte an WLAN und Strom anschließen.',
            steps: [
              'Backup auf dem alten Gerät erstellen.',
              'Am neuen Gerät Wiederherstellung auswählen.',
              'Auf Kontakte, Fotos und Chats prüfen.',
              '2FA und Banking-Apps separat neu einrichten.',
              'Synchronisierung vollständig abwarten.'
            ]
          }
        ]
      },
      {
        id: 'tv',
        title: 'Fernseher / Smart TV',
        issues: [
          {
            id: 'tv_no_image',
            title: 'Kein Bild / kein Signal',
            priority: 'conditional',
            quick: 'Signalquelle und HDMI-Eingang prüfen.',
            steps: [
              'Leuchtet die Strom-LED am TV?',
              'HDMI-Kabel und Port wechseln.',
              'Richtigen Eingang (Source/Input) wählen.',
              'Receiver/Box neu starten.'
            ],
            conditionalAlert: 'Wenn der TV gar keine Stromanzeige hat, ist es ein schwerer Fall.'
          },
          {
            id: 'tv_no_sound',
            title: 'Kein Ton',
            priority: 'normal',
            quick: 'Lautstärke und Stummschaltung prüfen.',
            steps: [
              'Bluetooth-Geräte testweise trennen.',
              'Audioausgabe (TV-Lautsprecher/ARC) kontrollieren.',
              'TV neu starten.',
              'Firmware aktualisieren.'
            ]
          },
          {
            id: 'tv_wifi',
            title: 'Keine WLAN-Verbindung',
            priority: 'normal',
            quick: 'Router und TV neu starten.',
            steps: [
              'WLAN-Passwort prüfen.',
              'Gespeichertes WLAN löschen und neu verbinden.',
              'Mit LAN-Kabel gegenprüfen.',
              'Netzwerkstatus im TV-Menü testen.'
            ]
          },
          {
            id: 'tv_apps',
            title: 'Apps starten nicht',
            priority: 'normal',
            quick: 'Internetverbindung und App-Updates prüfen.',
            steps: [
              'App-Cache leeren.',
              'Ab- und wieder anmelden.',
              'Datum/Uhrzeit korrekt setzen.',
              'Smart-TV-System aktualisieren.'
            ]
          },
          {
            id: 'tv_lag',
            title: 'Langsam / hängt',
            priority: 'normal',
            quick: 'TV komplett ausschalten und 1 Minute vom Strom trennen.',
            steps: [
              'Unnötige Apps entfernen.',
              'Cache bereinigen.',
              'Autostart-Funktionen reduzieren.',
              'Firmware aktualisieren.'
            ]
          },
          {
            id: 'tv_remote',
            title: 'Fernbedienung funktioniert nicht',
            priority: 'normal',
            quick: 'Batterien tauschen.',
            steps: [
              'Sichtlinie zum IR-Empfänger prüfen.',
              'Bei Bluetooth-Remote neu koppeln.',
              'Test mit Hersteller-App durchführen.',
              'TV neu starten.'
            ]
          },
          {
            id: 'tv_setup',
            title: 'Kanäle / HDMI / Box einrichten',
            priority: 'normal',
            quick: 'Richtige Quelle wählen und Sendersuchlauf starten.',
            steps: [
              'Automatischen Sendersuchlauf starten.',
              'Antenne oder Box-Verkabelung prüfen.',
              'Korrekten HDMI-Eingang wählen.',
              'Senderliste speichern.'
            ]
          }
        ]
      }
    ]
  },
  en: {
    ui: {
      trigger: 'Quick Help',
      panelTitle: 'Mini Assistant',
      panelSubtitle: 'Pick a device and issue',
      chooseCategory: 'Categories',
      chooseIssue: 'Common issues',
      quickLabel: 'Quick fix',
      stepsLabel: 'Steps',
      cautionLabel: 'Important',
      helped: 'Solved',
      notHelped: 'Not solved',
      contact: 'Contact support',
      back: 'Back',
      reset: 'Start over',
      otherIssue: 'Another issue',
      successTitle: 'Great',
      successText: 'Glad it helped. If it returns, contact us right away.',
      escalateTitle: 'Let us handle it',
      escalateText: 'If this did not help, open contact and we will assist quickly.',
      heavyTitle: 'Complex case',
      heavyText: 'This is better handled directly by support to avoid risk.',
      conditionalLabel: 'If there is no power'
    },
    categories: [
      {
        id: 'computer',
        title: 'Computer / Laptop',
        issues: [
          {
            id: 'pc_slow',
            title: 'Running slowly',
            priority: 'normal',
            quick: 'Free disk space and reboot the device.',
            steps: [
              'Close heavy apps and browser tabs.',
              'Keep at least 20% free space on the system drive.',
              'Disable unnecessary startup apps.',
              'Install system and driver updates.',
              'Run a malware scan.'
            ]
          },
          {
            id: 'pc_no_boot',
            title: 'Won’t turn on / black screen',
            priority: 'heavy',
            quick: 'Check power cable, adapter, and status LEDs.',
            steps: ['If there is still no display, direct diagnostics are recommended.'],
            warning: 'Do not open the device yourself.'
          },
          {
            id: 'pc_internet',
            title: 'No internet',
            priority: 'normal',
            quick: 'Restart router and computer.',
            steps: [
              'Unplug router power for 20 seconds.',
              'Verify you are connected to the right Wi-Fi network.',
              'Test internet on another device in the same network.',
              'Forget and reconnect Wi-Fi.',
              'Reset network settings if only one device is affected.'
            ]
          },
          {
            id: 'pc_virus',
            title: 'Viruses / ads / pop-ups',
            priority: 'heavy',
            quick: 'Stop using sensitive accounts and avoid entering passwords.',
            steps: ['For safe cleanup and account checks, contact support directly.'],
            warning: 'Do not install random cleanup tools.'
          },
          {
            id: 'pc_install_error',
            title: 'App install fails / errors',
            priority: 'normal',
            quick: 'Check compatibility and admin rights.',
            steps: [
              'Download installer from the official vendor.',
              'Run installer as administrator.',
              'Check disk space.',
              'Temporarily pause security software during install.',
              'Remove old version and reinstall.'
            ]
          },
          {
            id: 'pc_devices',
            title: 'Printer / sound / camera not working',
            priority: 'normal',
            quick: 'Check connection and default device settings.',
            steps: [
              'Verify USB/Bluetooth connection.',
              'Set the correct default output/input device.',
              'Reinstall or update drivers.',
              'Review camera/microphone permissions.',
              'Restart device and PC.'
            ]
          },
          {
            id: 'pc_data_loss',
            title: 'Data missing / recovery',
            priority: 'heavy',
            quick: 'Stop writing new files to the drive immediately.',
            steps: ['Minimal disk activity increases recovery chances.'],
            warning: 'Do not reset or format if files are important.'
          }
        ]
      },
      {
        id: 'smartphone',
        title: 'Smartphone',
        issues: [
          {
            id: 'sp_battery',
            title: 'Battery drains fast',
            priority: 'normal',
            quick: 'Reduce brightness and background activity.',
            steps: [
              'Disable Bluetooth/GPS when not needed.',
              'Limit high-drain apps.',
              'Install system updates.',
              'Check battery health.',
              'Restart the phone.'
            ]
          },
          {
            id: 'sp_no_charge',
            title: 'Not charging',
            priority: 'heavy',
            quick: 'Test with another cable, adapter, and outlet.',
            steps: ['If there is still no response, contact support directly.'],
            warning: 'Do not use damaged charging accessories.'
          },
          {
            id: 'sp_no_boot',
            title: 'Won’t start / stuck on logo',
            priority: 'heavy',
            quick: 'Try a forced reboot key combination.',
            steps: ['If it stays on the logo, professional help is recommended.'],
            warning: 'Avoid factory reset without backup.'
          },
          {
            id: 'sp_network',
            title: 'No mobile data / Wi-Fi / Bluetooth',
            priority: 'normal',
            quick: 'Toggle airplane mode for 10 seconds.',
            steps: [
              'Restart the phone.',
              'Forget and reconnect Wi-Fi.',
              'Test SIM card in another phone.',
              'Reset network settings.',
              'Disable VPN/proxy for testing.'
            ]
          },
          {
            id: 'sp_storage',
            title: 'Storage full',
            priority: 'normal',
            quick: 'Delete large videos and downloads.',
            steps: [
              'Open storage analyzer and find largest files.',
              'Move photos/videos to cloud or PC.',
              'Remove unused apps.',
              'Clear messenger cache.',
              'Clean temporary files.'
            ]
          },
          {
            id: 'sp_media',
            title: 'Camera / sound / mic not working',
            priority: 'normal',
            quick: 'Review app permissions first.',
            steps: [
              'Restart the phone.',
              'Enable camera/microphone permissions.',
              'Test in another app.',
              'Update or reinstall the affected app.',
              'Reset app settings if needed.'
            ]
          },
          {
            id: 'sp_malware',
            title: 'Malware / ads / suspicious apps',
            priority: 'heavy',
            quick: 'Remove recently installed suspicious apps.',
            steps: ['For secure cleanup and account protection, contact support now.'],
            warning: 'Change email/banking passwords from a clean device.'
          },
          {
            id: 'sp_transfer',
            title: 'Data transfer / setup',
            priority: 'normal',
            quick: 'Keep both phones on power and Wi-Fi.',
            steps: [
              'Create backup on old phone.',
              'Use restore flow on new phone.',
              'Verify contacts, photos, and chats.',
              'Reconfigure 2FA and banking apps.',
              'Wait until sync finishes.'
            ]
          }
        ]
      },
      {
        id: 'tv',
        title: 'TV / Smart TV',
        issues: [
          {
            id: 'tv_no_image',
            title: 'No picture / no signal',
            priority: 'conditional',
            quick: 'Check input source and HDMI port.',
            steps: [
              'Check if the power LED is on.',
              'Try another HDMI cable and port.',
              'Switch Source/Input manually.',
              'Restart set-top box/receiver.'
            ],
            conditionalAlert: 'If there is no power indication at all, this is a heavy case.'
          },
          {
            id: 'tv_no_sound',
            title: 'No sound',
            priority: 'normal',
            quick: 'Check volume and mute status.',
            steps: [
              'Disconnect Bluetooth audio devices.',
              'Verify audio output settings (TV speakers/ARC).',
              'Restart the TV.',
              'Install firmware updates.'
            ]
          },
          {
            id: 'tv_wifi',
            title: 'Wi-Fi does not connect',
            priority: 'normal',
            quick: 'Restart router and TV.',
            steps: [
              'Confirm correct Wi-Fi password.',
              'Forget network and reconnect.',
              'Test with Ethernet cable if available.',
              'Run network diagnostics in TV settings.'
            ]
          },
          {
            id: 'tv_apps',
            title: 'Apps won’t open',
            priority: 'normal',
            quick: 'Check internet and app updates.',
            steps: [
              'Clear app cache.',
              'Sign out and sign back in.',
              'Verify TV date/time.',
              'Update Smart TV software.'
            ]
          },
          {
            id: 'tv_lag',
            title: 'Slow / freezing',
            priority: 'normal',
            quick: 'Power off TV completely for one minute.',
            steps: [
              'Remove unused apps.',
              'Clear system cache.',
              'Reduce heavy auto-start features.',
              'Update TV firmware.'
            ]
          },
          {
            id: 'tv_remote',
            title: 'Remote not working',
            priority: 'normal',
            quick: 'Replace batteries.',
            steps: [
              'Ensure IR receiver is not blocked.',
              'Re-pair Bluetooth remote if needed.',
              'Test with manufacturer mobile app.',
              'Restart TV.'
            ]
          },
          {
            id: 'tv_setup',
            title: 'Channels / HDMI / box setup',
            priority: 'normal',
            quick: 'Select correct source and run channel scan.',
            steps: [
              'Run automatic channel search.',
              'Check antenna/box cables.',
              'Select proper HDMI input.',
              'Save channel list after setup.'
            ]
          }
        ]
      }
    ]
  }
};

interface EngineOptions {
  root: HTMLElement;
  openContacts: () => void;
  lang?: string;
}

interface EngineState {
  lang: Lang;
  stage: Stage;
  categoryId: string | null;
  issueId: string | null;
  result: Result;
}

const normalizeLang = (lang?: string | null): Lang => {
  if (!lang) return 'de';
  if (lang.startsWith('ru')) return 'ru';
  if (lang.startsWith('en')) return 'en';
  return 'de';
};

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

export const getHelpAssistantUi = (lang?: string | null): UiText => DICTIONARY[normalizeLang(lang)].ui;

export const createHelpAssistantEngine = (options: EngineOptions) => {
  const state: EngineState = {
    lang: normalizeLang(options.lang),
    stage: 'categories',
    categoryId: null,
    issueId: null,
    result: 'none'
  };

  const getDictionary = () => DICTIONARY[state.lang];

  const getCategory = () => getDictionary().categories.find((category) => category.id === state.categoryId) || null;

  const getIssue = () => {
    const category = getCategory();
    if (!category) return null;
    return category.issues.find((issue) => issue.id === state.issueId) || null;
  };

  const reset = () => {
    state.stage = 'categories';
    state.categoryId = null;
    state.issueId = null;
    state.result = 'none';
  };

  const renderCategories = () => {
    const dict = getDictionary();
    const categoryButtons = dict.categories
      .map(
        (category) => `
        <button type="button" class="help-assistant-pill" data-action="choose-category" data-id="${escapeHtml(category.id)}">
          ${escapeHtml(category.title)}
        </button>
      `
      )
      .join('');

    options.root.innerHTML = `
      <div class="help-assistant-view">
        <p class="help-assistant-label">${escapeHtml(dict.ui.chooseCategory)}</p>
        <div class="help-assistant-grid">${categoryButtons}</div>
      </div>
    `;
  };

  const renderIssues = () => {
    const dict = getDictionary();
    const category = getCategory();
    if (!category) {
      reset();
      renderCategories();
      return;
    }

    const issueButtons = category.issues
      .map(
        (issue) => `
        <button type="button" class="help-assistant-row" data-action="choose-issue" data-id="${escapeHtml(issue.id)}">
          <span>${escapeHtml(issue.title)}</span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 6l6 6-6 6"/></svg>
        </button>
      `
      )
      .join('');

    options.root.innerHTML = `
      <div class="help-assistant-view">
        <button type="button" class="help-assistant-back" data-action="back-categories">${escapeHtml(dict.ui.back)}</button>
        <p class="help-assistant-label">${escapeHtml(dict.ui.chooseIssue)}</p>
        <div class="help-assistant-stack">${issueButtons}</div>
      </div>
    `;
  };

  const renderDetails = () => {
    const dict = getDictionary();
    const category = getCategory();
    const issue = getIssue();

    if (!category || !issue) {
      reset();
      renderCategories();
      return;
    }

    const steps = issue.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join('');
    const warning = issue.warning
      ? `
        <div class="help-assistant-warning">
          <strong>${escapeHtml(dict.ui.cautionLabel)}:</strong> ${escapeHtml(issue.warning)}
        </div>
      `
      : '';

    const conditionalAlert =
      issue.priority === 'conditional' && issue.conditionalAlert
        ? `
          <div class="help-assistant-warning">
            <strong>${escapeHtml(dict.ui.conditionalLabel)}:</strong> ${escapeHtml(issue.conditionalAlert)}
            <div class="help-assistant-inline-actions">
              <button type="button" class="help-assistant-btn help-assistant-btn-accent" data-action="open-contact">${escapeHtml(dict.ui.contact)}</button>
            </div>
          </div>
        `
        : '';

    const heavyBlock =
      issue.priority === 'heavy'
        ? `
          <div class="help-assistant-status help-assistant-status-escalate">
            <strong>${escapeHtml(dict.ui.heavyTitle)}</strong>
            <p>${escapeHtml(dict.ui.heavyText)}</p>
          </div>
          <div class="help-assistant-actions">
            <button type="button" class="help-assistant-btn help-assistant-btn-accent" data-action="open-contact">${escapeHtml(dict.ui.contact)}</button>
            <button type="button" class="help-assistant-btn help-assistant-btn-muted" data-action="back-issues">${escapeHtml(dict.ui.back)}</button>
          </div>
        `
        : '';

    const resultBlock =
      issue.priority === 'heavy'
        ? ''
        : state.result === 'helped'
          ? `
            <div class="help-assistant-status help-assistant-status-success">
              <strong>${escapeHtml(dict.ui.successTitle)}</strong>
              <p>${escapeHtml(dict.ui.successText)}</p>
            </div>
            <div class="help-assistant-actions">
              <button type="button" class="help-assistant-btn help-assistant-btn-muted" data-action="back-issues">${escapeHtml(dict.ui.otherIssue)}</button>
              <button type="button" class="help-assistant-btn help-assistant-btn-muted" data-action="reset">${escapeHtml(dict.ui.reset)}</button>
            </div>
          `
          : state.result === 'escalate'
            ? `
              <div class="help-assistant-status help-assistant-status-escalate">
                <strong>${escapeHtml(dict.ui.escalateTitle)}</strong>
                <p>${escapeHtml(dict.ui.escalateText)}</p>
              </div>
              <div class="help-assistant-actions">
                <button type="button" class="help-assistant-btn help-assistant-btn-accent" data-action="open-contact">${escapeHtml(dict.ui.contact)}</button>
                <button type="button" class="help-assistant-btn help-assistant-btn-muted" data-action="back-issues">${escapeHtml(dict.ui.otherIssue)}</button>
              </div>
            `
            : `
              <div class="help-assistant-actions">
                <button type="button" class="help-assistant-btn help-assistant-btn-positive" data-action="mark-helped">${escapeHtml(dict.ui.helped)}</button>
                <button type="button" class="help-assistant-btn help-assistant-btn-muted" data-action="mark-not-helped">${escapeHtml(dict.ui.notHelped)}</button>
              </div>
              <div class="help-assistant-inline-actions">
                <button type="button" class="help-assistant-btn help-assistant-btn-accent" data-action="open-contact">${escapeHtml(dict.ui.contact)}</button>
              </div>
            `;

    options.root.innerHTML = `
      <div class="help-assistant-view">
        <button type="button" class="help-assistant-back" data-action="back-issues">${escapeHtml(dict.ui.back)}</button>
        <p class="help-assistant-breadcrumb">${escapeHtml(category.title)} / ${escapeHtml(issue.title)}</p>
        <div class="help-assistant-bubble">
          <p class="help-assistant-label">${escapeHtml(dict.ui.quickLabel)}</p>
          <p>${escapeHtml(issue.quick)}</p>
          <p class="help-assistant-label">${escapeHtml(dict.ui.stepsLabel)}</p>
          <ol class="help-assistant-steps">${steps}</ol>
          ${warning}
          ${conditionalAlert}
        </div>
        ${heavyBlock}
        ${resultBlock}
      </div>
    `;
  };

  const render = () => {
    if (state.stage === 'categories') {
      renderCategories();
      return;
    }
    if (state.stage === 'issues') {
      renderIssues();
      return;
    }
    renderDetails();
  };

  options.root.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const actionEl = target.closest('[data-action]');
    if (!(actionEl instanceof HTMLElement)) return;
    const action = actionEl.dataset.action;
    const id = actionEl.dataset.id || null;

    if (action === 'choose-category' && id) {
      state.stage = 'issues';
      state.categoryId = id;
      state.issueId = null;
      state.result = 'none';
      render();
      return;
    }

    if (action === 'choose-issue' && id) {
      state.stage = 'details';
      state.issueId = id;
      state.result = 'none';
      const issue = getIssue();
      if (issue && issue.priority === 'heavy') state.result = 'escalate';
      render();
      return;
    }

    if (action === 'back-categories') {
      reset();
      render();
      return;
    }

    if (action === 'back-issues') {
      state.stage = 'issues';
      state.issueId = null;
      state.result = 'none';
      render();
      return;
    }

    if (action === 'mark-helped') {
      state.result = 'helped';
      render();
      return;
    }

    if (action === 'mark-not-helped') {
      state.result = 'escalate';
      render();
      return;
    }

    if (action === 'open-contact') {
      options.openContacts();
      return;
    }

    if (action === 'reset') {
      reset();
      render();
    }
  });

  render();

  return {
    setLanguage: (lang: string) => {
      state.lang = normalizeLang(lang);
      render();
    },
    reset
  };
};
