# GameZone API

A RESTful API built using **Express.js** and **SQLite** for managing **games**, **players**, and **tournaments**. This project supports filtering, sorting, and fetching by various parameters. Includes pre-seeded sample data.

---

## 🚀 Features

* Get all games, players, and tournaments
* Filter games by genre, platform, and rating
* Filter players by platform and rating
* View tournaments by game or prize pool
* Lightweight setup using SQLite and Express

---

## 📁 Project Structure

```
├── app.js                # Main Express server
├── database.js           # SQLite database setup and seed data
├── package.json
└── BD4.5A2/              # Folder containing database.sqlite
```

---

## 📦 Installation

1. Clone the repository:

```bash
https://github.com/your-username/GameZone-API.git
cd GameZone-API
```

2. Install dependencies:

```bash
npm install
```

3. Run the database setup:

```bash
node database.js
```

4. Start the server:

```bash
node app.js
```

Server will start at `http://localhost:3000`

---

## 🔗 API Endpoints

### 🎮 Games

* `GET /games` – Get all games
* `GET /games/details/:id` – Get game by ID
* `GET /games/genre/:genre` – Filter games by genre
* `GET /games/platform/:platform` – Filter games by platform
* `GET /games/sort-by-rating` – Sort games by rating

### 👤 Players

* `GET /players` – Get all players
* `GET /players/details/:id` – Get player by ID
* `GET /players/platform/:platform` – Filter players by platform
* `GET /players/sort-by-rating` – Sort players by rating

### 🏆 Tournaments

* `GET /tournaments` – Get all tournaments
* `GET /tournaments/details/:id` – Get tournament by ID
* `GET /tournaments/game/:gameId` – Get tournaments by game
* `GET /tournaments/sort-by-prize-pool` – Sort tournaments by prize pool

---

## 🗃️ Sample Data

Includes 3 sample records each for:

* Games
* Players
* Tournaments

Preloaded via `database.js`. Modify as needed.

---

## 📌 Technologies Used

* Node.js
* Express.js
* SQLite3

---

## 🙋‍♀️ Author

**Indira Koona**
Made with ❤️ by an engineering student passionate about backend development.

---

## 📄 License

This project is licensed under the MIT License.
