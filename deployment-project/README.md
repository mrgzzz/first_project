# Практическая работа №25: Деплой приложения

## Описание проекта

Проект демонстрирует процесс деплоя полноценного веб-приложения с React фронтендом и Express.js бэкендом.

## Используемые технологии и платформы

- **Frontend**: React
- **Backend**: Express.js
- **Платформы для деплоя**:
  - Frontend: Vercel
  - Backend: Railway

## Структура проекта
pr25-project/
├── backend/ # Express.js сервер
│ ├── .env.example
│ ├── package.json
│ └── server.js
├── frontend/ # React приложение
│ ├── public/
│ ├── src/
│ ├── .env.example
│ ├── package.json
│ └── vercel.json
├── README.md
└── answers.md

## Процесс деплоя

### Деплой бэкенда на Railway

1. Создать аккаунт на [railway.app](https://railway.app)
2. Создать новый проект и подключить GitHub репозиторий
3. Выбрать папку `backend` как корневую директорию
4. Добавить environment variables в настройках проекта:
   - `NODE_ENV=production`
   - `PORT=5000`
   - `REACT_APP_API_URL=https://pr25-backend-production.up.railway.app`

### Деплой фронтенда на Vercel

1. Создать аккаунт на [vercel.app](https://vercel.app)
2. Импортировать GitHub репозиторий
3. Выбрать папку `frontend` как корневую директорию
4. Добавить environment variable:
   - `CORS_ORIGIN=https://frontend-k5gmq8v35-mrgzzzs-projects.vercel.app`

## Environment Variables
### Backend (.env)
NODE_ENV=production
PORT=5000
CORS_ORIGIN=https://frontend-k5gmq8v35-mrgzzzs-projects.vercel.app

## Скриншоты работающего приложения
<img width="369" height="242" alt="image" src="https://github.com/user-attachments/assets/69c9f83c-05e9-45d5-8b16-3878b69acfcd" />
Приложение успешно загружается и отображает данные с бэкенда

## Проблемы и их решения
Проблема: CORS ошибки при интеграции фронтенда и бэкенда
Решение: Настройка CORS в бэкенде для разрешения запросов с домена фронтенда

Проблема: Environment variables не подгружаются
Решение: Проверка правильности написания переменных и перезапуск приложения

Проблема: Frontend не находит backend API
Решение: Убедиться, что REACT_APP_API_URL содержит корректный URL бэкенда


## Тестирование после деплоя
Приложение открывается в браузере






