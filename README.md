\Практическая работа 25: Деплой приложения



\Структура проекта

\- `client/` - React фронтенд приложение

\- `server/` - Express.js бэкенд приложение - https://pr25-deploy-2.onrender.com - ссылка

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


Скрины работающего приложения
<img width="954" height="221" alt="1 crhby" src="https://github.com/user-attachments/assets/959737b1-ab7f-471b-8ab3-f114c0176dbe" />
<img width="1050" height="1211" alt="2dh" src="https://github.com/user-attachments/assets/86e0b97b-8c08-478b-a94d-95d97c507e05" />
<img width="963" height="258" alt="3rrr" src="https://github.com/user-attachments/assets/e60e8d5f-f342-4857-aff2-67a23f47ff84" />
<img width="963" height="255" alt="4srghdfh" src="https://github.com/user-attachments/assets/c7ee9ac8-8b85-45e1-aaef-fb5f8e642e52" />
<img width="817" height="1162" alt="5dhfg" src="https://github.com/user-attachments/assets/e4d3ae11-f262-4ce3-95fc-ba7ccd595c73" />


