# Grammar Chat Bot

Exploration into node.js and language model integrations.

### Backend
- node.js
- languagetool server v6.6 (https://languagetool.org/http-api/)

```
curl -X POST "http://localhost:8081/v2/check" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "language=en-US&text=This is an tests."

{"feedback":"I found 1 issue(s): Did you mean “am” or “ate”?"}
```