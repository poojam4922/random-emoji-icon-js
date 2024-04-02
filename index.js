let emoji =  document.querySelector('.emoji');

const emojis = [
    "😆",
    "😅",
    "🤣",
    "😂",
    "😀",
    "🤑",
    "🤨",
    "🙂",
    "😊",
    "😗",
    "😛",
    "😏",
    "🤥",
    "😴",
    "🥺",
    "😧",
    "😇",
    "😳",
    "🙃",
    "🥴",
    "🧐",
    "🤨",
    "😒",
    "🤔",
    "🤭",
    "🥰",
    "🤐",
    "👀",
    "🤔",
    "🤪",
    "🥲",
    "😃",
    "😁",
    "😬",
  ];

  emoji.addEventListener('mouseover', (event) =>{
    console.log("enter")
    let randomIndex = Math.floor(Math.random() * emojis.length);
    console.log(randomIndex)
    emoji.innerText = emojis[randomIndex];
  })