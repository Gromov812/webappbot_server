const telegramBot = require('node-telegram-bot-api'); 
const token = '5813532958:AAFcQ5yewjRH8tqe0vcUMYLqGGGZL1UP0ac';

const bot = new telegramBot(token, {polling: true});



bot.on('message', async msg => {
    const chatId = msg.chat.id;
    let text = msg.text;

    if (text = '/start') {
        await bot.sendMessage(chatId, 'Buttons down:', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Button 1', web_app: {url: 'https://singular-belekoy-103760.netlify.app/'}}]
                ]
            }
        })
    }

})