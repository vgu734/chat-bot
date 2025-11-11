# Grammar Chat Bot

Exploration into node.js and language model integrations.

### Backend
- node.js
- languagetool api (https://languagetool.org/http-api/)
```
curl -X POST http://localhost:3000/api/feedback -H "Content-Type: application/json" -d '{"message": "I are there"}'

{"feedback":"I found 1 issue(s): Did you mean “am” or “ate”?"}
```