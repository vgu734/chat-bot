import axios from "axios";

const LOCAL_LT_URL = `http://localhost:${process.env.LANGTOOL_PORT || 8081}/v2/check`;

export async function getFeedback(userInput) {
    const res = await axios.post(
        LOCAL_LT_URL,
        null,
        {
            params: {
                text: userInput,
                language: "en-US",
            },
        }
    );

    const matches = res.data.matches;
    console.log(userInput, matches);
    
    if (matches.length === 0) return { reply: "Looks good!" };

    const correction = matches.map(m => m.message).join("\n");
    return { feedback: `I found ${matches.length} issue(s):\n${correction}` };
}
