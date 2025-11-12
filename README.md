# Grammar Chat Bot

Exploration into node.js and language model integrations.

### Backend
- node.js
- languagetool server v6.6 (https://languagetool.org/http-api/)

```
curl -X POST http://localhost:3000/api/feedback -H "Content-Type: application/json" -d '{"message": "This is an Tests."}'
```