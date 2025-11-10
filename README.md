\Практическая работа 25: Деплой приложения



\Структура проекта

\- `client/` - React фронтенд приложение

\- `server/` - Express.js бэкенд приложение

https://pr25-deploy-2.onrender.com - ссылка

1.1. Структура проекта
your-project/
-package.json
-index.html
-style.css
-script.js
-README.md

1.2. Настройка package.json
json
{
  "name": "pr25-deploy",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "npx serve -s . -l $PORT"
  },
  "dependencies": {
    "serve": "^14.0.0"
  }
}

2.1. Создание аккаунта
Перейдите на render.com
Зарегистрируйтесь через GitHub
Подтвердите email

2.2. Подключение репозитория
На главной нажмите "New+"
Выберите "Web Service"
Нажмите "Connect account" и авторизуйте GitHub

3.1. Заполнение формы:
Name: your-project-name
Root Directory: (оставить пустым)
Environment: Node
Region: Frankfurt (или ближайший к вам)
Branch: main

3.2. Команды:
Build Command: npm install
Start Command: npx serve -s . -l $PORT

3.3. Тарифный план:
Выберите FREE (бесплатный)

4.1. Добавление переменных:
env
NODE_ENV=production
API_URL=https://your-api.com
Шаг 5: Запуск деплоя
Нажмите "Create Web Service"

Дождитесь завершения процесса (2-5 минут)

Получите URL вашего приложения

Проверка работоспособности
Откройте URL приложения в браузере
Проверьте консоль на ошибки
Протестируйте функционал приложения
Проверьте логи в панели Render

\ Локальный запуск



\Бэкенд:

```bash

cd server

npm install

npm run dev
