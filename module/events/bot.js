module.exports.config = {
  name: "goibot",
  prefix: false,
  permission: 0,
  eventType: ["event"],
  version: "1.0.0",
  credits: "Anik",
  description: "Reply to the word 'bot' with a random message"
};

module.exports.handleEvent = ({ api, event }) => {
 
  if (event.body === 'bot' || event.body === "Bot") {
  
   const tl = [
    "বেশি bot Bot করলে leave নিবো কিন্তু😒😒 ",
    "উফ্স বেবী একটা কিস দেও 🥵",
    "এতো ডাকো কেন প্রেম করবা নাকি 😌",
    "এতো ডেকো না,প্রেম এ পরে যাবো তো🙈",
    "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 ",
    "উফ্ বেবি তোমার কচি কচি ঠোঁটে ummmmmmmmmmmmmmmmmmmmmah 💋💋🙈",
    "I love you ",
    "মেয়েরা প্রেম করলে মেসেজ দেও 👉😁  m.me/100001453534533",
    "I love you janu🥰",
    "Bot বলে অসম্মান করছি,😰😿",
    "Bot না , জানু বল জানু 😘 ",
    "বার বার Disturb করছিস কোনো😾,আমার জানুর সাথে ব্যাস্ত আছি😋",
    "বলো কি করতে পারি তোমার জন্য",
    "আমি তো অন্ধ কিছু দেখি না🐸 😎",
    "হুম জান তোমার ওই খানে উম্মহ😑😘",
    "আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘",
    "I love you jan 💝🙈",
    "হুম জান তোমার অইখানে উম্মমাহ😷😘",
    "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি..!🥰",
    "আমি এখন ANIK বস আর সাথে বিজি আছি",
    "what are you asking me to do?",
    "Hmm jan ummah😘😘",
    "jang hanga korba 🙂🖤",
    "iss ato dako keno lojja lage to 🫦🙈",
    "জি তুমি কি আমাকে ডেকেছো 😇🖤🥀"
  ];

  const randomNumber = Math.floor(Math.random() * tl.length);
  
  
    api.sendMessage(tl[randomNumber], event.threadID, event.messageID);
  }
};
