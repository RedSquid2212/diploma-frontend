import { Theme } from '../models/theme';

export const jsThemes: Theme[] = [
    {
        name: 'intro-js',
        label: 'Введение в JavaScript',
        theory: [
            {
                name: 'what-is-js',
                label: 'Что такое JavaScript?',
                text: '',
            },
            {
                name: 'scripts',
                label: 'Подключение скриптов',
                text: '',
            },
            {
                name: 'ecmascript',
                label: 'Современный стандарт ECMAScript',
                text: '',
            },
        ],
        practice: [],
    },
    {
        name: 'types-and-variables',
        label: 'Типы данных и переменные',
        theory: [
            {
                name: 'primitives',
                label: 'Примитивы',
                text: '',
            },
            {
                name: 'objects',
                label: 'Объекты и их особенности',
                text: '',
            },
            {
                name: 'variables',
                label: 'Объявление переменных',
                text: '',
            },
            {
                name: 'naming',
                label: 'Именование переменных',
                text: '',
            },
        ],
        practice: [],
    },
    {
        name: 'operators',
        label: 'Операторы',
        theory: [
            {
                name: 'arithmetic-operators',
                label: 'Арифметические',
                text: '',
            },
            {
                name: 'comparison',
                label: 'Операторы сравнения',
                text: '',
            },
            {
                name: 'logic-operators',
                label: 'Логические операторы',
                text: '',
            },
            {
                name: 'nullish-operators',
                label: 'Нулевое слияние',
                text: '',
            },
        ],
        practice: [],
    },
    {
        name: 'conditions',
        label: 'Условные конструкции',
        theory: [
            {
                name: 'if-else',
                label: 'if...else, else if',
                text: '',
            },
            {
                name: 'ternary-operator',
                label: 'Тернарный оператор',
                text: '',
            },
            {
                name: 'switch',
                label: 'switch...case',
                text: '',
            },
        ],
        practice: [],
    },
    {
        name: 'cycles',
        label: 'Циклы',
        theory: [
            {
                name: 'for-while',
                label: 'for, while, do...while',
                text: '',
            },
            {
                name: 'break',
                label: 'Директивы break и continue',
                text: '',
            },
            {
                name: 'tags',
                label: 'Метки для циклов',
                text: '',
            },
        ],
        practice: [],
    },
    {
        name: 'functions',
        label: 'Функции',
        theory: [
            {
                name: 'function-declarations',
                label: 'Объявление функций',
                text: '',
            },
            {
                name: 'arrow-functions',
                label: 'Стрелочные функции',
                text: '',
            },
            {
                name: 'params',
                label: 'Параметры и аргументы',
                text: '',
            },
            {
                name: 'return',
                label: 'Возврат значения',
                text: '',
            },
        ],
        practice: [],
    },
    {
        name: 'arrays',
        label: 'Массивы',
        theory: [
            {
                name: 'methods',
                label: 'Создание и методы массивов',
                text: '',
            },
            {
                name: 'iterations',
                label: 'Итерация',
                text: '',
            },
            {
                name: 'multi-dimension',
                label: 'Многомерные массивы',
                text: '',
            },
        ],
        practice: [],
    },
    {
        name: 'objects',
        label: 'Объекты',
        theory: [
            {
                name: 'object-creation',
                label: 'Создание объектов',
                text: '',
            },
            {
                name: 'methods',
                label: 'Свойства и методы',
                text: '',
            },
            {
                name: 'copying',
                label: 'Копирование объектов',
                text: '',
            },
            {
                name: 'keys-values',
                label: 'Методы Object.keys(), Object.values()',
                text: '',
            },
        ],
        practice: [],
    },
    {
        name: 'dates',
        label: 'Работа с датами',
        theory: [
            {
                name: 'date-object',
                label: 'Объект Date',
                text: '',
            },
            {
                name: 'formatting',
                label: 'Форматирование даты и времени',
                text: '',
            },
        ],
        practice: [],
    },
    {
        name: 'scope',
        label: 'Область видимости (Scope)',
        theory: [
            {
                name: 'global-and-local-scope',
                label: 'Глобальная и локальная область',
                text: '',
            },
            {
                name: 'hoisting',
                label: 'Hoisting',
                text: '',
            },
            {
                name: 'closures',
                label: 'Замыкания (closures)',
                text: '',
            },
        ],
        practice: [],
    },
    {
        name: 'context',
        label: 'Контекст выполнения (this)',
        theory: [
            {
                name: 'this',
                label: 'Значение this в функциях',
                text: '',
            },
            {
                name: 'call-bind-apply',
                label: 'Методы call, apply, bind',
                text: '',
            },
        ],
        practice: [],
    },
    {
        name: 'classes-and-oop',
        label: 'Классы и ООП',
        theory: [
            {
                name: 'classes',
                label: 'Классы (class), конструкторы',
                text: '',
            },
            {
                name: 'inheritance',
                label: 'Наследование (extends)',
                text: '',
            },
            {
                name: 'get-set',
                label: 'Геттеры и сеттеры',
                text: '',
            },
            {
                name: 'static-methods',
                label: 'Статические методы',
                text: '',
            },
        ],
        practice: [],
    },
    {
        name: 'asynchronous',
        label: 'Асинхронность',
        theory: [
            {
                name: 'callbacks',
                label: 'Callback-функции',
                text: '',
            },
            {
                name: 'promises',
                label: 'Промисы (Promise)',
                text: '',
            },
            {
                name: 'async-await',
                label: 'async/await',
                text: '',
            },
            {
                name: 'error-handling',
                label: 'Обработка ошибок',
                text: '',
            },
        ],
        practice: [],
    },
    {
        name: 'dom',
        label: 'Работа с DOM',
        theory: [
            {
                name: 'dom-tree',
                label: 'Дерево DOM, узлы',
                text: '',
            },
            {
                name: 'search',
                label: 'Поиск элементов',
                text: '',
            },
            {
                name: 'element-change',
                label: 'Изменение элементов',
                text: '',
            },
            {
                name: 'events',
                label: 'События',
                text: '',
            },
        ],
        practice: [],
    },
    {
        name: 'data-storage',
        label: 'Хранение данных',
        theory: [
            {
                name: 'storages',
                label: 'localStorage, sessionStorage',
                text: '',
            },
            {
                name: 'cookies',
                label: 'Cookies',
                text: '',
            },
        ],
        practice: [],
    },
    {
        name: 'modules',
        label: 'Модули (ES Modules)',
        theory: [
            {
                name: 'import-export',
                label: 'import/export',
                text: '',
            },
        ],
        practice: [],
    },
    {
        name: 'api',
        label: 'Работа с API',
        theory: [
            {
                name: 'fetch',
                label: 'fetch, XMLHttpRequest',
                text: '',
            },
            {
                name: 'json',
                label: 'Формат JSON',
                text: '',
            },
            {
                name: 'http-methods',
                label: 'HTTP-методы',
                text: '',
            },
        ],
        practice: [],
    },
    {
        name: 'regex',
        label: 'Регулярные выражения',
        theory: [
            {
                name: 'regex-syntax',
                label: 'Синтаксис',
                text: '',
            },
            {
                name: 'regex-methods',
                label: 'Методы',
                text: '',
            },
        ],
        practice: [],
    },
    {
        name: 'web-components',
        label: 'Web Components',
        theory: [
            {
                name: 'custom-elements',
                label: 'Создание кастомных элементов',
                text: '',
            },
            {
                name: 'shadow-dom',
                label: 'Shadow DOM',
                text: '',
            },
        ],
        practice: [],
    },
    {
        name: 'optimization',
        label: 'Оптимизация и отладка',
        theory: [
            {
                name: 'devtools',
                label: 'Инструменты DevTools',
                text: '',
            },
            {
                name: 'memory-usage',
                label: 'Профилирование памяти',
                text: '',
            },
            {
                name: 'lazy-loading',
                label: 'Ленивая загрузка (lazy loading)',
                text: '',
            },
        ],
        practice: [],
    },
];