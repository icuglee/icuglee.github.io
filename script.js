const follow_parallax = document.querySelector("#follow_parallax");
const access_parallax = document.querySelector("#access_parallax");
const menu = document.querySelector(".menu");
const menu_bg = document.querySelector(".menu_bg");
const menu_button = document.querySelector(".menu_button");
const menu_overlay = document. querySelector(".menu_overlay");
const menu_items = document.querySelectorAll(".menu_item");
const container = document.getElementById("schedule_list");


window.addEventListener("scroll", () => {
  // Parallax effect for background
  if (!follow_parallax & !access_parallax) return;
  const rect_follow = follow_parallax.parentElement.getBoundingClientRect();
  const offset_follow = - (window.innerHeight / 2 - rect_follow.top) * 0.1;
  follow_parallax.style.transform = `translateY(${offset_follow}px)`;

  const rect_access = access_parallax.parentElement.getBoundingClientRect();
  const offset_access = - (window.innerHeight / 2 - rect_access.top) * 0.1;
  access_parallax.style.transform = `translateY(${offset_access}px)`;

  // Fix menu after scrolling down
  if (window.scrollY > 45) {
    menu.classList.add("fix");
  } else {
    menu.classList.remove("fix");
  }
});

menu_button.addEventListener("click", () => {
  menu_bg.classList.toggle("pressed");
  menu_overlay.classList.toggle("show");
  menu_items.forEach(item => item.classList.toggle("show"));
  if (menu_button.classList.contains("pressed")) {
    menu_button.classList.remove("pressed");
    menu_button.classList.add("closed");

  } else {
    menu_button.classList.remove("closed");
    menu_button.classList.add("pressed");
  }
});

menu_overlay.addEventListener("click", () => {
  menu_bg.classList.toggle("pressed");
  menu_overlay.classList.toggle("show");
  menu_items.forEach(item => item.classList.toggle("show"));
  if (menu_button.classList.contains("pressed")) {
    menu_button.classList.remove("pressed");
    menu_button.classList.add("closed");

  } else {
    menu_button.classList.remove("closed");
    menu_button.classList.add("pressed");
  }
});

const schedules = [
  {
    month: "4月",
    events: ["入学式での奉唱", "春の定期演奏会", "新歓体験会"]
  },
  {
    month: "5月",
    events: ["C-Week チャペルコンサート"]
  },
  {
    month: "6月",
    events: ["卒業式での奉唱"]
  },
  {
    month: "7月",
    events: ["東京都合唱祭"]
  },
  {
    month: "8月",
    events: ["夏合宿"]
  },
  {
    month: "9月",
    events: ["夏季入学式での奉唱", "秋の定期演奏会"]
  },
  {
    month: "10月",
    events: ["ICU祭"]
  },
  {
    month: "11月",
    events: ["近隣教会での奉唱"]
  },
  {
    month: "12月",
    events: ["教員住宅へのキャロリング"]
  },
  {
    month: "1月",
    events: ["練習"]
  },
  {
    month: "2月",
    events: ["練習"]
  },
  {
    month: "3月",
    events: ["春合宿", "春季卒業式での奉唱", "卒業生のフェアウェル会"]
  },
  
];

schedules.forEach(schedule => {

  const eventsHtml = schedule.events
    .map(event => `<li>${event}</li>`)
    .join("");

  container.innerHTML += `
    <div class="schedule">
      <div class="month">${schedule.month}</div>
      <div class="event">
        <ul>
          ${eventsHtml}
        </ul>
      </div>
    </div>
  `;
});


const sections = document.querySelectorAll(".black_margin");

const images = [
  "assets/images/8th.svg",
  "assets/images/8th2.svg",
  "assets/images/bass.svg",
  "assets/images/treble.svg"
];

sections.forEach(section => {

  const height = section.offsetHeight;
  const gap = 300
  const count = Math.ceil(height / gap);


  for (let i = 0; i < count; i++) {

    const img = document.createElement("img");
    const offset = Math.random() * gap / 4;


    img.classList.add("black_margin_decoration");

    img.src = images[
      Math.floor(Math.random() * images.length)
    ];



    img.style.top = `${i * gap - offset}px`;
    img.style.height = `${Math.random() * 100 + 300}px`;
    img.style.width = "auto"
    img.style.rotate = `${(Math.random() - 0.5) * 60}deg`;

    if (i % 2 === 0) {
      img.style.left = `${Math.random() * 25 + 25}px`;
    } else {
      img.style.right = `${Math.random() * 25 + 25}px`;
    }

    section.appendChild(img);
  }
});


