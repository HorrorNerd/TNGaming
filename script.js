const creators = [
  {
    name: "Sn0wDriven",
    streams: "Ark Survival Ascended • Survival Games • Community Streams",
    categories: ["ark", "variety", "youtube", "twitch"],
    links: {
      YouTube: "https://youtube.com/@sn0wdriven",
      Twitch: "https://www.twitch.tv/snowdrivengaming"
    }
  },
  {
    name: "Noperz",
    streams: "Gaming • Community Content",
    categories: ["variety", "youtube"],
    links: {
      YouTube: "https://youtube.com/@noperzplayz"
    }
  },
  {
    name: "Fat Frog’s Swamp",
    streams: "Ark Survival Ascended • Server Cluster • Survival Content",
    categories: ["ark", "youtube"],
    links: {
      YouTube: "https://youtube.com/@fatfrogsswamp?si=Yja5xPUkYjt6yoEL"
    }
  },
  {
    name: "Brittaneous",
    streams: "Variety • Community Content",
    categories: ["variety", "twitch", "tiktok"],
    links: {
      Twitch: "https://twitch.tv/brittaneous",
      TikTok: "https://www.tiktok.com/@brittaneousr"
    }
  },
  {
    name: "Bram",
    streams: "Gaming • Variety • Community Content",
    categories: ["variety", "youtube", "twitch", "tiktok"],
    links: {
      Twitch: "https://www.twitch.tv/lovealwaysashleybram/",
      YouTube: "https://youtube.com/@lovealwaysashley-bram",
      TikTok: "https://www.tiktok.com/@lovealways.ashleyrussell"
    }
  },
  {
    name: "DiamondBaby",
    streams: "Gaming • Community Streams",
    categories: ["variety", "twitch"],
    links: {
      Twitch: "https://www.twitch.tv/diamondbaby1989"
    }
  },
  {
    name: "Georgiaboyboomer",
    streams: "Gaming • Variety • Community Content",
    categories: ["variety", "youtube", "twitch"],
    links: {
      YouTube: "https://youtube.com/@georgiaboyboomer?si=Y9xzCOzWaCzrKmzL",
      Twitch: "https://www.twitch.tv/georgiaboyboomer"
    }
  },
  {
    name: "Arcadian Nomad",
    streams: "Short-form Gaming • Community Content",
    categories: ["variety", "tiktok"],
    links: {
      TikTok: "https://www.tiktok.com/@arcadiannomad2?_r=1&_t=ZT-95hwTLVcrew"
    }
  },
  {
    name: "WPlayzFN",
    streams: "Fortnite • Community Gaming",
    categories: ["fortnite", "twitch"],
    links: {
      Twitch: "https://www.twitch.tv/wplayzfn?sr=a"
    }
  },
  {
    name: "GreeneBean73",
    streams: "Gaming • Community Streams",
    categories: ["variety", "youtube", "twitch"],
    links: {
      YouTube: "https://youtube.com/@GreeneBean73",
      Twitch: "https://www.twitch.tv/greenebean73"
    }
  },
  {
    name: "FlukiGamer",
    streams: "Ark • Variety Gaming",
    categories: ["ark", "variety", "youtube"],
    links: {
      YouTube: "https://youtube.com/@flukigamer?si=d1ikB3J8aI8YLrLC"
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
