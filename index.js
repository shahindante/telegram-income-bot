const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;

if (!token) {
  console.error("BOT_TOKEN is not set!");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(
    chatId,
    `🎮 به ربات درآمدی خوش آمدی!

از منوی زیر شروع کن 👇`,
    {
      reply_markup: {
        keyboard: [
          ["🎮 بازی و کسب امتیاز"],
          ["💰 موجودی من", "👥 دعوت دوستان"],
          ["📊 قوانین", "💳 برداشت"]
        ],
        resize_keyboard: true
      }
    }
  );
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "🎮 بازی و کسب امتیاز") {
    bot.sendMessage(
      chatId,
      "🎮 بخش بازی به‌زودی فعال می‌شود.\n\nفعلاً امتیاز شما: 0"
    );
  }

  if (text === "💰 موجودی من") {
    bot.sendMessage(
      chatId,
      "💰 موجودی شما: 0 امتیاز"
    );
  }

  if (text === "👥 دعوت دوستان") {
    bot.sendMessage(
      chatId,
      "👥 لینک دعوت شما به‌زودی ساخته می‌شود."
    );
  }

  if (text === "📊 قوانین") {
    bot.sendMessage(
      chatId,
      "📊 قوانین:\n\n1️⃣ امتیاز از فعالیت داخل ربات به دست می‌آید.\n2️⃣ درخواست برداشت پس از رسیدن به حداقل موجودی امکان‌پذیر است.\n3️⃣ هرگونه سوءاستفاده باعث مسدود شدن حساب می‌شود."
    );
  }

  if (text === "💳 برداشت") {
    bot.sendMessage(
      chatId,
      "💳 بخش برداشت هنوز فعال نشده است."
    );
  }
});

console.log("🤖 Bot is running...");
