// src/data/featureTabsData.js
import React from "react";

const featureTabsData = [
  {
    id: "skills",
    title: "スキル",
    icon: "💻",
    sections: [
      {
        description: "語学資格",
        items: [
          { label: "英検1級" },
          { label: "TOEFL iBT 98点" },
          { label: "TOEIC 965点" },
        ],
      },
      {
        description: "プログラミングスキル",
        items: [
          { label: "JavaScript" },
          { label: "React" },
          { label: "Java" },
          { label: "Python" },
          { label: "C" },
          { label: "C#" },
          { label: "MySQL" },
        ],
      },
      {
        description: "ソフトウェア",
        items: [
          { label: "Unity" },
          { label: "figma" },
          { label: "ClipStudio" },
          { label: "Procreate" },
          { label: "Canva" },
          { label: "GitHub" },
        ],
      },
      {
        description: "趣味",
        items: [
          { label: "イラスト" },
          { label: "デザイン" },
          { label: "動画制作" },
          { label: "音楽制作" },
          { label: "mixing" },
          { label: "洋裁" },
        ],
      },
    ],
  },
  {
    id: "research",
    title: "研究",
    icon: "📑",
    sections: [
      {
        description: "論文・卒論",
        items: [
          { label: "論文: LoRaWAN におけるハフマン符号化と閾値制御によるデータ通信の効率化", url: "https://sigos.ipsj.or.jp/event/comsys2024/posters/ComSys_2024_poster_10.pdf" },
          { label: "論文:　Study of sensor network construction using LoRaWAN for natural disaster prediction", url: "https://pub.confit.atlas.jp/en/event/compsafe2025/presentation/450401-06-03" },
        ],
      },
      {
        description: "GitHubプロジェクト",
        items: [
          { label: "季節別・重み付けハフマン符号(CCOMPSAFE2025)", url: "https://github.com/poe125/compsafe_2025" },
        ],
      },
    ],
  },
  {
    id: "studyabroad",
    title: "留学",
    icon: "✈️",
    sections: [
      {
        description: "海外留学経験:",
        items: [
          {label: "アメリカ在住経験 (2011年8月~2016年7月)"},
          {label: "カリフォルニア大学 サンタクルーズ校 (2023年9月〜3月)"}
        ],
      },
      {
        description: "受講項目(Githubリポジトリ):",
        items: [
          { label: "C Programming", url: "https://github.com/poe125/UCSC-CSE13S" },
          { label: "Networks(Graduate course)", url: "https://github.com/poe125/UCSC_CSE257_project" },
          { label: "IoT", url: "https://github.com/poe125/UCSC-CSE157-IoT" },
          { label: "Game Technologies", url: "https://github.com/poe125/UCSC-CMPM125-GameTechnologies"},
          { label: "Machine Learning", url: "https://github.com/poe125/UCSC-CSE142-MachineLearning"},
        ],
      },
    ],
  },
  {
    id: "extracurriculars",
    title: "学外活動",
    icon: "🎯",
    sections: [
      {
        description: "活動・成果",
        items: [
          { label: "サークル設立: 女子ITサークル (2024)", url: "https://www.d-live.info/club/registered/1396" },
          { label: "IT情報ブログ設立(2024)", url: "https://doshishaitclub.wordpress.com/" },
          { label: "CruzHacksハッカソン優勝 (2024)", url: "https://devpost.com/software/tuition-shock" },
          { label: "夏インターン: Cisco (2024)" },
          { label: "第19回ショパン国際ピアノコンクールinASIA 大阪地区大会　銀賞 (2017)", url: "https://www.chopin-asia.com/edition/19th/results/result_area25.pdf" },
          { label: "Nebraska MTNA Performance and Composition Competitions Winner (2015)", url: "https://nebmta.org/student-activities/2015-16-student-winners/" },
        ],
      },
    ],
  },
  {
    id: "volunteer",
    title: "ボランティア",
    icon: "🤝",
    sections: [
      {
        description: "学校関連ボランティア",
        items: [
          { label: "SDA室に所属 (2024年秋〜)" },
          { label: "パラアーティスティックスイミングフェスティバル: PC通訳(2024)", url: "https://fukushi.kyoto-np.co.jp/report/syogai/sports-1/"},
          { label: "同志社大学入学式: PC通訳(2025)" },
          { label: "[万博]ホスピタルジュニア: 日英同時通訳・PC通訳(2025)"},
        ],
      },
    ],
  },
];

export default featureTabsData;
