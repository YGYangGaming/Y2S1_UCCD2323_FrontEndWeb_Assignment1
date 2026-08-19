const playersData = [
  {
    id: "donk",
    rank: 1,
    name: "donk",
    role: "Entry Fragger",
    teamName: "Team Spirit",
    teamUrl: "team.html?id=spirit",
    avatar: "images/players/donk.png",
    rating: 1.34
  },
  {
    id: "m0nesy",
    rank: 2,
    name: "m0NESY",
    role: "Awper",
    teamName: "Team Falcons",
    teamUrl: "team.html?id=falcons",
    avatar: "images/players/m0nesy.png",
    rating: 1.29
  },
  {
    id: "sh1ro",
    rank: 3,
    name: "sh1ro",
    role: "Awper",
    teamName: "Team Spirit",
    teamUrl: "team.html?id=spirit",
    avatar: "images/players/shiro.png",
    rating: 1.22
  },
  {
    id: "xantares",
    rank: 4,
    name: "XANTARES",
    role: "Entry Fragger",
    teamName: "Aurora Gaming",
    teamUrl: "team.html?id=aurora",
    avatar: "images/players/xantares.png",
    rating: 1.20
  },
  {
    id: "kscerato",
    rank: 5,
    name: "KSCERATO",
    role: "Rifler / Lurker",
    teamName: "FURIA Esports",
    teamUrl: "team.html?id=furia",
    avatar: "images/players/kscerato.png",
    rating: 1.19
  },
  {
    id: "niko",
    rank: 6,
    name: "NiKo",
    role: "Rifler",
    teamName: "Team Falcons",
    teamUrl: "team.html?id=falcons",
    avatar: "images/players/niko.png",
    rating: 1.18
  },
  {
    id: "jimpphat",
    rank: 7,
    name: "Jimpphat",
    role: "Lurker",
    teamName: "Aurora Gaming",
    teamUrl: "team.html?id=aurora",
    avatar: "images/players/jimpphat.png",
    rating: 1.15
  },
  {
    id: "frozen",
    rank: 8,
    name: "frozen",
    role: "Rifler / Lurker",
    teamName: "FaZe Clan",
    teamUrl: "team.html?id=faze",
    avatar: "images/players/frozen.png",
    rating: 1.14
  },
  {
    id: "twistzz",
    rank: 9,
    name: "Twistzz",
    role: "IGL / Rifler",
    teamName: "FaZe Clan",
    teamUrl: "team.html?id=faze",
    avatar: "images/players/twistzz.png",
    rating: 1.13
  },
  {
    id: "kyousuke",
    rank: 10,
    name: "kyousuke",
    role: "Entry Fragger",
    teamName: "Team Falcons",
    teamUrl: "team.html?id=falcons",
    avatar: "images/players/kyousuke.png",
    rating: 1.12
  },
  {
    id: "nertz",
    rank: 11,
    name: "NertZ",
    role: "Rifler",
    teamName: "G2 Esports",
    teamUrl: "team.html?id=g2",
    avatar: "images/players/nertz.png",
    rating: 1.12
  },
  {
    id: "yuurih",
    rank: 12,
    name: "yuurih",
    role: "Rifler",
    teamName: "FURIA Esports",
    teamUrl: "team.html?id=furia",
    avatar: "images/players/yuurih.png",
    rating: 1.11
  },
  {
    id: "woxic",
    rank: 13,
    name: "woxic",
    role: "Awper",
    teamName: "Aurora Gaming",
    teamUrl: "team.html?id=aurora",
    avatar: "images/players/woxic.png",
    rating: 1.10
  },
  {
    id: "heavygod",
    rank: 14,
    name: "HeavyGod",
    role: "Anchor",
    teamName: "G2 Esports",
    teamUrl: "team.html?id=g2",
    avatar: "images/players/heavygod.png",
    rating: 1.10
  },
  {
    id: "jabbi",
    rank: 15,
    name: "jabbi",
    role: "Rifler / Lurker",
    teamName: "Astralis",
    teamUrl: "team.html?id=astralis",
    avatar: "images/players/jabbi.png",
    rating: 1.10
  },
  {
    id: "wicadia",
    rank: 16,
    name: "Wicadia",
    role: "Rifler",
    teamName: "Aurora Gaming",
    teamUrl: "team.html?id=aurora",
    avatar: "images/players/wicadia.png",
    rating: 1.09
  },
  {
    id: "r1nkle",
    rank: 17,
    name: "r1nkle",
    role: "Awper",
    teamName: "G2 Esports",
    teamUrl: "team.html?id=g2",
    avatar: "images/players/r1nkle.png",
    rating: 1.09
  },
  {
    id: "zont1x",
    rank: 18,
    name: "zont1x",
    role: "Lurker / Anchor",
    teamName: "Team Spirit",
    teamUrl: "team.html?id=spirit",
    avatar: "images/players/zont1x.png",
    rating: 1.08
  },
  {
    id: "hunter",
    rank: 19,
    name: "huNter-",
    role: "Rifler / IGL",
    teamName: "G2 Esports",
    teamUrl: "team.html?id=g2",
    avatar: "images/players/hunter.png",
    rating: 1.08
  },
  {
    id: "yekindar",
    rank: 20,
    name: "YEKINDAR",
    role: "Entry Fragger",
    teamName: "FURIA Esports",
    teamUrl: "team.html?id=furia",
    avatar: "images/players/yekindar.png",
    rating: 1.07
  },
  {
    id: "teses",
    rank: 21,
    name: "TeSeS",
    role: "Support",
    teamName: "Team Falcons",
    teamUrl: "team.html?id=falcons",
    avatar: "images/players/teses.png",
    rating: 1.06
  },
  {
    id: "matys",
    rank: 22,
    name: "MATYS",
    role: "Entry Fragger",
    teamName: "G2 Esports",
    teamUrl: "team.html?id=g2",
    avatar: "images/players/matys.png",
    rating: 1.06
  },
  {
    id: "phzy",
    rank: 23,
    name: "phzy",
    role: "Awper",
    teamName: "Astralis",
    teamUrl: "team.html?id=astralis",
    avatar: "images/players/phzy.png",
    rating: 1.06
  },
  {
    id: "tn1r",
    rank: 24,
    name: "tN1R",
    role: "Rifler",
    teamName: "Team Spirit",
    teamUrl: "team.html?id=spirit",
    avatar: "images/players/tn1r.png",
    rating: 1.05
  },
  {
    id: "neityu",
    rank: 25,
    name: "Neityu",
    role: "Entry Fragger",
    teamName: "FaZe Clan",
    teamUrl: "team.html?id=faze",
    avatar: "images/players/neityu.png",
    rating: 1.05
  },
  {
    id: "jcobbb",
    rank: 26,
    name: "jcobbb",
    role: "Awper",
    teamName: "FaZe Clan",
    teamUrl: "team.html?id=faze",
    avatar: "images/players/jcobbb.png",
    rating: 1.04
  },
  {
    id: "staehr",
    rank: 27,
    name: "Staehr",
    role: "Support / Anchor",
    teamName: "Astralis",
    teamUrl: "team.html?id=astralis",
    avatar: "images/players/staehr.png",
    rating: 1.04
  },
  {
    id: "molodoy",
    rank: 28,
    name: "molodoy",
    role: "Anchor",
    teamName: "FURIA Esports",
    teamUrl: "team.html?id=furia",
    avatar: "images/players/molodoy.png",
    rating: 1.03
  },
  {
    id: "ryu",
    rank: 29,
    name: "ryu",
    role: "Entry Fragger",
    teamName: "Astralis",
    teamUrl: "team.html?id=astralis",
    avatar: "images/players/ryu.png",
    rating: 1.02
  },
  {
    id: "fallen",
    rank: 30,
    name: "FalleN",
    role: "IGL / Awper",
    teamName: "FURIA Esports",
    teamUrl: "team.html?id=furia",
    avatar: "images/players/fallen.png",
    rating: 1.01
  },
  {
    id: "jboen",
    rank: 31,
    name: "JBOEN",
    role: "Anchor",
    teamName: "FaZe Clan",
    teamUrl: "team.html?id=faze",
    avatar: "images/players/jboen.png",
    rating: 1.01
  },
  {
    id: "magixx",
    rank: 32,
    name: "magixx",
    role: "Support",
    teamName: "Team Spirit",
    teamUrl: "team.html?id=spirit",
    avatar: "images/players/magixx.png",
    rating: 0.99
  },
  {
    id: "karrigan",
    rank: 33,
    name: "karrigan",
    role: "IGL",
    teamName: "Team Falcons",
    teamUrl: "team.html?id=falcons",
    avatar: "images/players/karrigan.png",
    rating: 0.98
  },
  {
    id: "kyxsan",
    rank: 34,
    name: "kyxsan",
    role: "IGL",
    teamName: "Aurora Gaming",
    teamUrl: "team.html?id=aurora",
    avatar: "images/players/kyxsan.png",
    rating: 0.97
  },
  {
    id: "hooxi",
    rank: 35,
    name: "HooXi",
    role: "IGL",
    teamName: "Astralis",
    teamUrl: "team.html?id=astralis",
    avatar: "images/players/hooxi.png",
    rating: 0.92
  }
];