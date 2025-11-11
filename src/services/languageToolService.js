import axios from "axios";

export async function getFeedback(userInput) {
    const res = await axios.post("https://api.languagetool.org/v2/check", null, {
        params: { text: userInput, language: "en-US" }
    });

    const matches = res.data.matches;
    if (matches.length === 0) return { reply: "Looks good!" };
    console.log(matches);

    const correction = matches.map(m => m.message).join("\n");
    return { feedback: `I found ${matches.length} issue(s):\n${correction}` };
}