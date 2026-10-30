# Personal Portfolio Website

A beginner-friendly full-stack personal portfolio project.

## Project structure
- `frontend/` — HTML, CSS and JavaScript website
- `backend/` — Node.js + Express API
- `database/portfolio.sql` — MySQL database schema
- `.env.example` — environment variable template

## 1. Preview the frontend first (no Node.js needed)
1. Extract this ZIP.
2. Open the extracted `personal-portfolio` folder in VS Code.
3. Open `frontend/index.html`.
4. Right-click inside the file and choose **Open with Live Server** if Live Server is already installed. Otherwise, double-click `index.html` in File Explorer to open it in your browser.

The frontend works as a standalone portfolio preview. The contact form displays a demo confirmation until the backend is connected.

## 2. Run the backend (requires Node.js)
1. Install the current LTS version of Node.js from https://nodejs.org/ if it is not installed.
2. Open a terminal in VS Code.
3. Go to the backend folder:
   `cd backend`
4. Install packages:
   `npm install`
5. Copy `.env.example` to `backend/.env` (or create `backend/.env` with the example values).
6. Start the API:
   `npm start`
7. Open `http://localhost:5000/api/health` to confirm the API is running.

The contact API stores messages in a local JSON file (`backend/messages.json`) to make setup simple. The supplied SQL file shows a MySQL schema you can use if your evaluator specifically requires MySQL.

## 3. Important notes about the database
The task description asks for a database. This starter project includes a MySQL schema in `database/portfolio.sql`, but the running demo API stores contact messages in a local JSON file to avoid requiring a database server for the first run. If your instructor checks for a live SQL/database integration, set up MySQL and connect the backend before claiming the database integration is complete.

## 4. Submission
1. Test the website in a browser.
2. Take screenshots of the home page and Projects section.
3. If your platform accepts a ZIP, upload this project ZIP.
4. If it asks for a website link, deploy the frontend and submit the live URL.
5. If it asks for a repository link, upload the folder to GitHub and submit the repository URL.
6. Do not say the site is fully deployed or database-connected unless you have actually completed those steps.
