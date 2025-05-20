# REST API на Node.js + Express + MongoDB

Полноценное API-приложение с регистрацией, входом, JWT-аутентификацией и архитектурой контроллеров и сервисов.

## 🚀 Технологии

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT
- bcrypt
- dotenv

## 🔧 Установка и запуск

```bash
git clone https://github.com/your-username/rest-api.git
cd rest-api
npm install
cp .env.example .env
# Отредактируй .env под свою MongoDB
npm run dev

📌 API маршруты
	•	POST /auth/register — регистрация
	•	POST /auth/login — вход
	•	GET /auth/me — защищённый профиль
	•	GET /users — список пользователей
	•	GET /users/:id — один пользователь
	•	DELETE /users/:id — удалить пользователя

🧪 Пример запроса
POST /auth/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "123456"
}

👤 Автор
Kuanysh Baltagatayev
