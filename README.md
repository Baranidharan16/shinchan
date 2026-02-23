# AdGen AI

Full-stack ad creative generator with:
- React frontend (`client`)
- Express backend (`server`)
- OpenAI-ready prompt service

## Run in VS Code

1. Open folder `adgen-ai` (this repo root) in VS Code.
2. Open two terminals.

### Terminal 1 (backend)
```bash
cd server
npm install
cp .env.example .env
# set OPENAI_API_KEY in .env
npm start
```

### Terminal 2 (frontend)
```bash
cd client
npm install
npm start
```

Frontend runs at `http://localhost:3000` and backend at `http://localhost:5000`.
