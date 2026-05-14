const creators = [
  {
    name: "Sn0wDriven",
    streams: "Ark • Minecraft • Fortnite",
    categories: ["ark", "minecraft", "fortnite", "youtube", "twitch"],
    links: {
      YouTube: "https://youtube.com/@sn0wdriven",
      Twitch: "https://www.twitch.tv/snowdrivengaming"
    }
  },
  {
    name: "Noperz",
    streams: "Ark • Variety",
    categories: ["ark", "variety", "youtube"],
    links: {
      YouTube: "https://youtube.com/@noperzplayz"
    }
  },
  {
    name: "Fat Frog’s Swamp",
    streams: "Ark",
    categories: ["ark", "youtube"],
    links: {
      YouTube: "https://youtube.com/@fatfrogsswamp?si=Yja5xPUkYjt6yoEL"
    }
  },
  {
    name: "GreeneBean73",
    streams: "Ark",
    categories: ["ark", "youtube", "twitch"],
    links: {
      YouTube: "https://youtube.com/@GreeneBean73",
      Twitch: "https://www.twitch.tv/greenebean73"
    }
  },
  {
    name: "FlukiGamer",
    streams: "Ark • Variety",
    categories: ["ark", "variety", "youtube"],
    links: {
      YouTube: "https://youtube.com/@flukigamer?si=d1ikB3J8aI8YLrLC"
    }
  },
  {
    name: "TheRaptorChapter",
    streams: "Ark • Variety",
    categories: ["ark", "variety", "youtube", "twitch"],
    links: {
      YouTube: "https://youtube.com/@theraptorchapter?si=3tqvULclxVMHIsjB",
      Twitch: "https://www.twitch.tv/theraptorchapter"
    }
  },
  {
    name: "GarlicHeadJoe",
    streams: "Ark • GTA RP",
    categories: ["ark", "gta", "roleplay", "youtube"],
    links: {
      YouTube: "https://youtube.com/@garlicheadjoe?si=qtSBb6JJBDs2CZwm"
    }
  },
  {
    name: "GamingWithProdigalSon",
    streams: "Ark • Variety",
    categories: ["ark", "variety", "youtube"],
    links: {
      YouTube: "https://youtube.com/@gamingwithprodigalson?si=lVH3MleWS2_3SGbE"
    }
  },
  {
    name: "Brittaneous",
    streams: "Fortnite",
    categories: ["fortnite", "twitch", "tiktok"],
    links: {
      Twitch: "https://twitch.tv/brittaneous",
      TikTok: "https://www.tiktok.com/@brittaneousr"
    }
  },
  {
    name: "Bram",
    streams: "Fortnite • Variety",
    categories: ["fortnite", "variety", "youtube", "twitch", "tiktok"],
    links: {
      Twitch: "https://www.twitch.tv/lovealwaysashleybram/",
      YouTube: "https://youtube.com/@lovealwaysashley-bram",
      TikTok: "https://www.tiktok.com/@lovealways.ashleyrussell"
    }
  },
  {
    name: "Jay'sHouse30",
    streams: "Fortnite • Variety",
    categories: ["fortnite", "variety", "tiktok"],
    links: {
      TikTok: "https://www.tiktok.com/t/ZT9F39b3NQ8TD-ifvYd/"
    }
  },
  {
    name: "BattleBabesGaming",
    streams: "Fortnite",
    categories: ["fortnite", "youtube", "twitch", "tiktok"],
    links: {
      YouTube: "https://youtube.com/@battlebabesgaming?si=J4V9Xt96HZXaIhQD",
      Twitch: "https://www.twitch.tv/battlebabesgaming",
      TikTok: "https://www.tiktok.com/@battlebabesgaming?_r=1&_t=ZP-96Majd6A9pm"
    }
  },
  {
    name: "DiamondBaby",
    streams: "Fortnite • Variety",
    categories: ["fortnite", "variety", "twitch"],
    links: {
      Twitch: "https://www.twitch.tv/diamondbaby1989"
    }
  },
  {
    name: "Georgiaboyboomer",
    streams: "Fortnite",
    categories: ["fortnite", "youtube", "twitch"],
    links: {
      YouTube: "https://youtube.com/@georgiaboyboomer?si=Y9xzCOzWaCzrKmzL",
      Twitch: "https://www.twitch.tv/georgiaboyboomer"
    }
  },
  {
    name: "Arcadian Nomad",
    streams: "Fortnite • Retro",
    categories: ["fortnite", "retro", "tiktok"],
    links: {
      TikTok: "https://www.tiktok.com/@arcadiannomad2?_r=1&_t=ZT-95hwTLVcrew"
    }
  },
  {
    name: "WPlayzFN",
    streams: "Fortnite",
    categories: ["fortnite", "twitch"],
    links: {
      Twitch: "https://www.twitch.tv/wplayzfn?sr=a"
    }
  },
  {
    name: "Ricardo Rocky Gamer",
    streams: "Minecraft • Variety",
    categories: ["minecraft", "variety", "youtube"],
    links: {
      YouTube: "https://www.youtube.com/@RicardoRockyGamer-ol5vu"
    }
  }
];

const creatorGrid = document.getElementById("creatorGrid");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderCreators(filter = "all") {
  const filteredCreators = filter === "all"
    ? creators
    : creators.filter((creator) => creator.categories.includes(filter));

  creatorGrid.innerHTML = filteredCreators.map((creator) => {
    const links = Object.entries(creator.links)
      .map(([label, url]) => {
        return `<a class="mini-link" href="${url}" target="_blank" rel="noopener">${label}</a>`;
      })
      .join("");

    return `
      <article class="creator-card" data-categories="${creator.categories.join(" ")}">
        <h3>${creator.name}</h3>
        <p class="creator-streams">${creator.streams}</p>
        <div class="creator-links">${links}</div>
      </article>
    `;
  }).join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderCreators(button.dataset.filter);
  });
});

renderCreators();
