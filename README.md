# Monst Smm — Nuxt landing

Лендинг SMM-сервиса Monst Smm, страницы входа и регистрации и серверный адаптер авторизации для Gateway. Продуктовый концепт объединяет аналитику соцсетей, автопостинг и нейросети для контента.

## Запуск

```bash
cp .env.example .env
npm install
npm run dev
```

Nuxt слушает `0.0.0.0`, поэтому приложение доступно в live preview и локальной сети.

## Gateway

Браузер обращается только к относительным `/api/auth/*` маршрутам Nuxt. Nitro проксирует запросы к Gateway с сервера, а access token хранится в `HttpOnly` cookie и не попадает в клиентский JavaScript.

Глобальный route middleware проверяет сессию через `me` при каждой серверной загрузке страницы и при клиентской навигации. Во время гидратации SSR-состояния повторный запрос пропускается. Если сессия активна, шапка, hero, CTA и футер показывают переход в рабочее пространство и данные пользователя; для гостя остаются вход и регистрация.

Настройки задаются переменными окружения:

| Переменная | По умолчанию | Назначение |
| --- | --- | --- |
| `NUXT_GATEWAY_BASE_URL` | `http://localhost:8080` | базовый URL Gateway, доступный из процесса Nuxt |
| `NUXT_GATEWAY_LOGIN_PATH` | `/api/v1/auth/login` | REST-ручка входа |
| `NUXT_GATEWAY_REGISTER_PATH` | `/api/v1/auth/register` | REST-ручка регистрации |
| `NUXT_GATEWAY_ME_PATH` | `/api/v1/auth/me` | защищённая REST-ручка профиля |

Пути вынесены в конфигурацию: репозиторий Gateway не был доступен в этой рабочей копии, поэтому значения по умолчанию — типовой вариант. Укажите фактические пути из Gateway в `.env`/окружении перед подключением к нему. Адаптер принимает как camelCase, так и snake_case поля из protobuf JSON (`accessToken`/`access_token`, `loginData`/`login_data`, `userId`/`user_id`).

### Контракт, который ожидает UI

- `POST login` и `POST register`: `{ "email": "...", "password": "..." }`;
- успешный login/register возвращает access token (для регистрации также поддерживается `loginData.accessToken`); допускается `ok: false` + `message` при ошибке;
- `GET me` вызывается с `Authorization: Bearer <token>` и возвращает профиль пользователя.

Если Gateway использует другой формат, его можно нормализовать в `server/utils/gateway.ts`, не меняя компоненты и composables. Logout удаляет локальную cookie; отдельная серверная revoke-ручка не предполагается, так как в доступном контракте Core её нет.
