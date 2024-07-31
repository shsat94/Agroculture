document.getElementById('send-button').addEventListener('click', function () {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    addMessage(userInput, 'user');
    document.getElementById('user-input').value = '';

    fetchOpenAIResponse(userInput);
});

function addMessage(text, sender) {
    const message = document.createElement('div');
    message.classList.add('message');
    message.classList.add(sender);
    message.innerText = text;

    document.getElementById('messages').appendChild(message);
    document.getElementById('chatbox').scrollTop = document.getElementById('chatbox').scrollHeight;
}

async function fetchOpenAIResponse(userInput) {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer sk-proj-rQaCH3hkNQazGWGdGnXmT3BlbkFJ5dwHnx8nPRaJE5CE7QZs`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: 'You are a helpful agricultural assistant.' },
                    { role: 'user', content: userInput }
                ],
                max_tokens: 150,
                n: 1,
                stop: null,
                temperature: 0.5,
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error from OpenAI:', errorData);
            throw new Error(`OpenAI API error: ${errorData.error.message}`);
        }

        const data = await response.json();
        const botMessage = data.choices[0].message.content.trim();

        addMessage(botMessage, 'bot');
    } catch (error) {
        console.error('Fetch error:', error);
        addMessage('Sorry, something went wrong. Please try again.', 'bot');
    }
}
