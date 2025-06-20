require('dotenv').config();

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

console.log('TELEGRAM_TOKEN:', TELEGRAM_TOKEN);
console.log('CHAT_ID:', CHAT_ID);

const express = require('express');
const multer = require('multer');
const fetch = require('node-fetch');
const FormData = require('form-data'); // убедитесь, что импорт именно так

const app = express();
const port = 3000;

const storage = multer.memoryStorage();
const upload = multer({ storage });




app.post('/send', upload.single('photo'), async (req, res) => {
    const { caption } = req.body;
    const photoBuffer = req.file.buffer;

    try {
        const formData = new FormData();

        console.log('formData instanceof FormData:', formData instanceof FormData); 
        formData.append('chat_id', CHAT_ID);
        formData.append('caption', caption);
        formData.append('photo', photoBuffer, {
            filename: 'photo.jpg'
        });

        const headers = formData.getHeaders(); // должно работать

        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendPhoto`, {
            method: 'POST',
            body: formData,
            headers: headers
        });

        const data = await response.json();

        if (data.ok) {
            res.json({ success: true });
        } else {
            res.json({ success: false, error: data.description });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Server error' });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
