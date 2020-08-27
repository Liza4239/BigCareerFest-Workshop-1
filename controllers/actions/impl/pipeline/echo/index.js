const {
    bot,
    Extra
} = require('../../../../../configs/telegram/bot');

const {
    msgQuestion,
    msgAnswerQuestion,

    msgYes,
    msgAnswerYes,

    msgNo,
    msgAnswerNo
} = require('./config')
/*Reply to question message with keyboard*/
bot.hears(msgQuestion, ctx => {
    ctx.reply(msgAnswerQuestion,
        Extra.HTML().markup((m) =>
            m.keyboard([
                [msgYes]
            ]).resize().oneTime()
        ))


})

bot.hears(msgYes, ctx => {
    ctx.reply(msgAnswerYes,
        Extra.markup((m) => m.removeKeyboard()))
})

bot.hears(msgNo, ctx => {
    ctx.reply(msgAnswerNo,
        Extra.markup((m) => m.removeKeyboard()))
})

// Echo all messages, which are not handled above
bot.on('text',
    ctx => {
        /* Echo the message */
        ctx.reply(
            ctx.update.message.text,
            Extra.markup((m) => m.removeKeyboard())
        );
    }
);
