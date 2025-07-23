import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaAws,
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaReact,
  FaShopify,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "スキル",
    info: [
      {
        title: "Web開発",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaWordpress,
          FaShopify,
          FaLaravel,
          FaAws,
          FaReact,
          SiNextdotjs,
          SiFramer,
        ],
      },
      {
        title: "UI/UXデザイン",
        icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
      },
    ],
  },
  {
    title: "賞",
    info: [
      {
        title: "Webby Awards - People's Voice",
        stage: "2021 - 2022",
      },
    ],
  },
  {
    title: "経験",
    info: [
      {
        title: "Webデベロッパー - WebCo（マレーシア）",
        stage: "2020 - 2024",
      },
      {
        title: "フリーランサー",
        stage: "2024 - 現在",
      },
    ],
  },
  {
    title: "資格",
    info: [
      {
        title: "情報科学の学位 - マラヤ大学",
        stage: "2018",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-4xl"
          >
            魅惑的な <span className="text-accent">ストーリー</span>は、心を動かすサイトを生み出す。
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-base"
          >
            7年前、私は「創ること」への純粋な憧れから、Web開発の世界に足を踏み入れました。
            あの頃の私は、ただ夢中でコードを書き、自分の想いを形にすることに喜びを感じていました。
            もちろん、順風満帆だったわけではありません。
            何度も壁にぶつかり、夜を徹して悩んだ日々もありました。

            それでも私は、そのすべてを乗り越えてきました。
            情熱と探究心、そして「良いものを届けたい」という想いを糧に、数多くのプロジェクトに挑み、経験を積んできました。

            今の私は、単に「動くもの」を作るだけではなく、
            「伝わるもの」「残るもの」「感情が動くもの」を創りたいと願っています。

            このポートフォリオは、私の過去と、今、そしてこれからを映す鏡です。
            一つひとつの作品に、私の歩んできた道のりと想いが込められています。
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={7} duration={5} />
                </div>
                <div className="text-sm uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  年の経験
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} />
                </div>
                <div className="text-sm uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  満足した顧客
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={650} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  終了した<br/>プロジェクト。
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={5} />
                </div>
                <div className="text-sm uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  賞
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
