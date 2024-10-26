const meltBtn = document.getElementById('melt');
const messageDiv = document.getElementById('message');

meltBtn.addEventListener('click', async () => {
    const gameName = document.getElementById('gameName').value;
    const gameUrl = document.getElementById('gameUrl').value;

    if (!gameName || !gameUrl) {
        messageDiv.textContent = 'Please fill in both fields.';
        messageDiv.style.color = 'red';
        return;
    }

    const webhookUrl = 'https://discord.com/api/webhooks/1277946667454173247/kblvghILUYBuTkzPMT1ETM2XHe98M3DiYtESxgGq1gXrRjd2IqiPeIMSw5qDA8F27RSn'; // Replace with your Discord webhook URL
    const payload = {
        content: `New Game Suggestion:\n**Game Name:** ${gameName}\n**Game URL:** ${gameUrl}`
    };

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            messageDiv.textContent = 'Suggestion submitted successfully!';
            messageDiv.style.color = 'green';
            document.getElementById('gameName').value = '';
            document.getElementById('gameUrl').value = '';
        } else {
            throw new Error('Failed to send suggestion.');
        }
    } catch (error) {
        messageDiv.textContent = 'Error: ' + error.message;
        messageDiv.style.color = 'red';
    }
});