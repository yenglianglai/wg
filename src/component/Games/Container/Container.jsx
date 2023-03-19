import Card from "../Card/Card";
import React from "react";
import { RwdContext } from "../../../App";
import { useContext, useEffect, useState, useCallback } from "react";
import "./Container.scss";

const Container = ({ lang, containerRender }) => {
  const data = [
    [
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_1.png"
            : lang === "zh-CN"
            ? "/img/game_1_sim.png"
            : "/img/game_1_eng.png",
        name:
          lang === "zh-TW"
            ? "通比牛牛"
            : lang === "zh-CN"
            ? "通比牛牛"
            : "Bull Bull Brawl",
        size: "10.8",
        rtp: "97.50",
        iconUrl: "/img/game_1_i.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_2.png"
            : lang === "zh-CN"
            ? "/img/game_2_sim.png"
            : "/img/game_2_eng.png",
        name:
          lang === "zh-TW"
            ? "百家樂"
            : lang === "zh-CN"
            ? "百家乐"
            : "Baccarat",
        size: "10.7",
        rtp: "97.50",
        iconUrl: "/img/game_2_i.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_3.png"
            : lang === "zh-CN"
            ? "/img/game_3_sim.png"
            : "/img/game_3_eng.png",
        name:
          lang === "zh-TW"
            ? "德州撲克"
            : lang === "zh-CN"
            ? "德州扑克"
            : "Texas Hold'em",
        size: "10.4",
        rtp: "97.50",
        iconUrl: "/img/game_3.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_4.png"
            : lang === "zh-CN"
            ? "/img/game_4_sim.png"
            : "/img/game_4_eng.png",
        name:
          lang === "zh-TW"
            ? "掃雷紅包"
            : lang === "zh-CN"
            ? "扫雷红包"
            : "Boom Red Packet",
        size: "10.4",
        rtp: "97.50",
        iconUrl: "/img/game_4.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_5.png"
            : lang === "zh-CN"
            ? "/img/game_5_sim.png"
            : "/img/game_5_eng.png",
        name:
          lang === "zh-TW"
            ? "賭大小"
            : lang === "zh-CN"
            ? "赌大小"
            : "Big & Small",
        size: "12.7",
        rtp: "97.50",
        iconUrl: "/img/game_5.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_6.png"
            : lang === "zh-CN"
            ? "/img/game_6_sim.png"
            : "/img/game_6_eng.png",
        name:
          lang === "zh-TW"
            ? "龍虎鬥"
            : lang === "zh-CN"
            ? "龙虎斗"
            : "Dragon Tiger",
        size: "14.7",
        rtp: "97.50",
        iconUrl: "/img/game_6.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_7.png"
            : lang === "zh-CN"
            ? "/img/game_7_sim.png"
            : "/img/game_7_eng.png",
        name:
          lang === "zh-TW"
            ? "看牌搶莊牛牛"
            : lang === "zh-CN"
            ? "看牌抢庄牛牛"
            : "Cards Checker Bull Bull",
        size: "11.4",
        rtp: "97.50",
        iconUrl: "/img/game_7.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_8.png"
            : lang === "zh-CN"
            ? "/img/game_8_sim.png"
            : "/img/game_8_eng.png",
        name:
          lang === "zh-TW"
            ? "搶莊牛牛"
            : lang === "zh-CN"
            ? "抢庄牛牛"
            : "Banker Bull Bull",
        size: "11.6",
        rtp: "97.50",
        iconUrl: "/img/game_8.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_9.png"
            : lang === "zh-CN"
            ? "/img/game_9_sim.png"
            : "/img/game_9_eng.png",
        name:
          lang === "zh-TW"
            ? "炸金花"
            : lang === "zh-CN"
            ? "炸金花"
            : "Win Three Cards",
        size: "12",
        rtp: "97.50",
        iconUrl: "/img/game_9.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_10.png"
            : lang === "zh-CN"
            ? "/img/game_10_sim.png"
            : "/img/game_10_eng.png",
        name:
          lang === "zh-TW"
            ? "飛禽走獸"
            : lang === "zh-CN"
            ? "飞禽走兽"
            : "Birds & Beasts",
        size: "11.1",
        rtp: "97.50",
        iconUrl: "/img/game_10.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_11.png"
            : lang === "zh-CN"
            ? "/img/game_11_sim.png"
            : "/img/game_11_eng.png",
        name:
          lang === "zh-TW"
            ? "百人牛牛"
            : lang === "zh-CN"
            ? "百人牛牛"
            : "Bull Bull for 100",
        size: "10.9",
        rtp: "97.50",
        iconUrl: "/img/game_11.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_12.png"
            : lang === "zh-CN"
            ? "/img/game_12_sim.png"
            : "/img/game_12_eng.png",
        name:
          lang === "zh-TW"
            ? "奔馳寶馬"
            : lang === "zh-CN"
            ? "奔驰宝马"
            : "Mercedes & BMW",
        size: "11.8",
        rtp: "97.50",
        iconUrl: "/img/game_12.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_13.png"
            : lang === "zh-CN"
            ? "/img/game_13_sim.png"
            : "/img/game_13_eng.png",
        name:
          lang === "zh-TW"
            ? "紅黑大戰"
            : lang === "zh-CN"
            ? "红黑大战"
            : "Red VS Black",
        size: "11.1",
        rtp: "97.50",
        iconUrl: "/img/game_13.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_14.png"
            : lang === "zh-CN"
            ? "/img/game_14_sim.png"
            : "/img/game_14_eng.png",
        name:
          lang === "zh-TW"
            ? "超級水果機"
            : lang === "zh-CN"
            ? "超级水果机"
            : "Super Fruits Slot",
        size: "12.2",
        rtp: "96.50",
        iconUrl: "/img/game_14.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_15.png"
            : lang === "zh-CN"
            ? "/img/game_15_sim.png"
            : "/img/game_15_eng.png",
        name:
          lang === "zh-TW"
            ? "水滸傳"
            : lang === "zh-CN"
            ? "水浒传"
            : "Water Margin",
        size: "12.6",
        rtp: "96.50",
        iconUrl: "/img/game_15.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_16.png"
            : lang === "zh-CN"
            ? "/img/game_16_sim.png"
            : "/img/game_16_eng.png",
        name:
          lang === "zh-TW"
            ? "連環奪寶"
            : lang === "zh-CN"
            ? "连环夺宝"
            : "Duo Bao",
        size: "12.1",
        rtp: "96.50",
        iconUrl: "/img/game_16.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_17.png"
            : lang === "zh-CN"
            ? "/img/game_17_sim.png"
            : "/img/game_17_eng.png",
        name:
          lang === "zh-TW"
            ? "糖果派對"
            : lang === "zh-CN"
            ? "糖果派对"
            : "Candy Party",
        size: "12.7",
        rtp: "96.50",
        iconUrl: "/img/game_17.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_18.png"
            : lang === "zh-CN"
            ? "/img/game_18_sim.png"
            : "/img/game_18_eng.png",
        name:
          lang === "zh-TW"
            ? "多福多財"
            : lang === "zh-CN"
            ? "多福多财"
            : "DuoFuDuoCai",
        size: "12.1",
        rtp: "96.50",
        iconUrl: "/img/game_18.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_19.png"
            : lang === "zh-CN"
            ? "/img/game_19_sim.png"
            : "/img/game_19_eng.png",
        name:
          lang === "zh-TW"
            ? "財神捕魚"
            : lang === "zh-CN"
            ? "财神捕鱼"
            : "Fortune Gods Fishing",
        size: "25.3",
        rtp: "96.50",
        iconUrl: "/img/game_19.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_20.png"
            : lang === "zh-CN"
            ? "/img/game_20_sim.png"
            : "/img/game_20_eng.png",
        name:
          lang === "zh-TW"
            ? "十三水"
            : lang === "zh-CN"
            ? "十三水"
            : "Pineapple Poker",
        size: "12.3",
        rtp: "96.50",
        iconUrl: "/img/game_20.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_21.png"
            : lang === "zh-CN"
            ? "/img/game_21_sim.png"
            : "/img/game_21_eng.png",
        name:
          lang === "zh-TW"
            ? "二人麻將"
            : lang === "zh-CN"
            ? "二人麻将"
            : "Mahjong 2P",
        size: "16.7",
        rtp: "96.50",
        iconUrl: "/img/game_21.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_22.png"
            : lang === "zh-CN"
            ? "/img/game_22_sim.png"
            : "/img/game_22_eng.png",
        name:
          lang === "zh-TW"
            ? "捕魚達人"
            : lang === "zh-CN"
            ? "捕鱼达人"
            : "Fishing Joy",
        size: "23.2",
        rtp: "96.50",
        iconUrl: "/img/game_22.png",
      },
    ],
    [
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_1.png"
            : lang === "zh-CN"
            ? "/img/game_1_sim.png"
            : "/img/game_1_eng.png",
        name:
          lang === "zh-TW"
            ? "通比牛牛"
            : lang === "zh-CN"
            ? "通比牛牛"
            : "Bull Bull Brawl",
        size: "10.8",
        rtp: "97.50",
        iconUrl: "/img/game_1_i.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_2.png"
            : lang === "zh-CN"
            ? "/img/game_2_sim.png"
            : "/img/game_2_eng.png",
        name:
          lang === "zh-TW"
            ? "百家樂"
            : lang === "zh-CN"
            ? "百家乐"
            : "Baccarat",
        size: "10.7",
        rtp: "97.50",
        iconUrl: "/img/game_2_i.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_3.png"
            : lang === "zh-CN"
            ? "/img/game_3_sim.png"
            : "/img/game_3_eng.png",
        name:
          lang === "zh-TW"
            ? "德州撲克"
            : lang === "zh-CN"
            ? "德州扑克"
            : "Texas Hold'em",
        size: "10.4",
        rtp: "97.50",
        iconUrl: "/img/game_3.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_4.png"
            : lang === "zh-CN"
            ? "/img/game_4_sim.png"
            : "/img/game_4_eng.png",
        name:
          lang === "zh-TW"
            ? "掃雷紅包"
            : lang === "zh-CN"
            ? "扫雷红包"
            : "Boom Red Packet",
        size: "10.4",
        rtp: "97.50",
        iconUrl: "/img/game_4.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_5.png"
            : lang === "zh-CN"
            ? "/img/game_5_sim.png"
            : "/img/game_5_eng.png",
        name:
          lang === "zh-TW"
            ? "賭大小"
            : lang === "zh-CN"
            ? "赌大小"
            : "Big & Small",
        size: "12.7",
        rtp: "97.50",
        iconUrl: "/img/game_5.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_6.png"
            : lang === "zh-CN"
            ? "/img/game_6_sim.png"
            : "/img/game_6_eng.png",
        name:
          lang === "zh-TW"
            ? "龍虎鬥"
            : lang === "zh-CN"
            ? "龙虎斗"
            : "Dragon Tiger",
        size: "14.7",
        rtp: "97.50",
        iconUrl: "/img/game_6.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_7.png"
            : lang === "zh-CN"
            ? "/img/game_7_sim.png"
            : "/img/game_7_eng.png",
        name:
          lang === "zh-TW"
            ? "看牌搶莊牛牛"
            : lang === "zh-CN"
            ? "看牌抢庄牛牛"
            : "Cards Checker Bull Bull",
        size: "11.4",
        rtp: "97.50",
        iconUrl: "/img/game_7.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_8.png"
            : lang === "zh-CN"
            ? "/img/game_8_sim.png"
            : "/img/game_8_eng.png",
        name:
          lang === "zh-TW"
            ? "搶莊牛牛"
            : lang === "zh-CN"
            ? "抢庄牛牛"
            : "Banker Bull Bull",
        size: "11.6",
        rtp: "97.50",
        iconUrl: "/img/game_8.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_9.png"
            : lang === "zh-CN"
            ? "/img/game_9_sim.png"
            : "/img/game_9_eng.png",
        name:
          lang === "zh-TW"
            ? "炸金花"
            : lang === "zh-CN"
            ? "炸金花"
            : "Win Three Cards",
        size: "12",
        rtp: "97.50",
        iconUrl: "/img/game_9.png",
      },
    ],
    [
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_14.png"
            : lang === "zh-CN"
            ? "/img/game_14_sim.png"
            : "/img/game_14_eng.png",
        name:
          lang === "zh-TW"
            ? "超級水果機"
            : lang === "zh-CN"
            ? "超级水果机"
            : "Super Fruits Slot",
        size: "12.2",
        rtp: "96.50",
        iconUrl: "/img/game_14.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_15.png"
            : lang === "zh-CN"
            ? "/img/game_15_sim.png"
            : "/img/game_15_eng.png",
        name:
          lang === "zh-TW"
            ? "水滸傳"
            : lang === "zh-CN"
            ? "水浒传"
            : "Water Margin",
        size: "12.6",
        rtp: "96.50",
        iconUrl: "/img/game_15.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_16.png"
            : lang === "zh-CN"
            ? "/img/game_16_sim.png"
            : "/img/game_16_eng.png",
        name:
          lang === "zh-TW"
            ? "連環奪寶"
            : lang === "zh-CN"
            ? "连环夺宝"
            : "Duo Bao",
        size: "12.1",
        rtp: "96.50",
        iconUrl: "/img/game_16.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_17.png"
            : lang === "zh-CN"
            ? "/img/game_17_sim.png"
            : "/img/game_17_eng.png",
        name:
          lang === "zh-TW"
            ? "糖果派對"
            : lang === "zh-CN"
            ? "糖果派对"
            : "Candy Party",
        size: "12.7",
        rtp: "96.50",
        iconUrl: "/img/game_17.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_18.png"
            : lang === "zh-CN"
            ? "/img/game_18_sim.png"
            : "/img/game_18_eng.png",
        name:
          lang === "zh-TW"
            ? "多福多財"
            : lang === "zh-CN"
            ? "多福多财"
            : "DuoFuDuoCai",
        size: "12.1",
        rtp: "96.50",
        iconUrl: "/img/game_18.png",
      },
    ],
    [
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_19.png"
            : lang === "zh-CN"
            ? "/img/game_19_sim.png"
            : "/img/game_19_eng.png",
        name:
          lang === "zh-TW"
            ? "財神捕魚"
            : lang === "zh-CN"
            ? "财神捕鱼"
            : "Fortune Gods Fishing",
        size: "25.3",
        rtp: "96.50",
        iconUrl: "/img/game_19.png",
      },
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_22.png"
            : lang === "zh-CN"
            ? "/img/game_22_sim.png"
            : "/img/game_22_eng.png",
        name:
          lang === "zh-TW"
            ? "捕魚達人"
            : lang === "zh-CN"
            ? "捕鱼达人"
            : "Fishing Joy",
        size: "23.2",
        rtp: "96.50",
        iconUrl: "/img/game_22.png",
      },
    ],
    [
      {
        imgUrl:
          lang === "zh-TW"
            ? "/img/game_19.png"
            : lang === "zh-CN"
            ? "/img/game_19_sim.png"
            : "/img/game_19_eng.png",
        name:
          lang === "zh-TW"
            ? "財神捕魚"
            : lang === "zh-CN"
            ? "财神捕鱼"
            : "Fortune Gods Fishing",
        size: "25.3",
        rtp: "96.50",
        iconUrl: "/img/game_19.png",
      },
    ],
  ];
  const { activeGame } = useContext(RwdContext);
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  useEffect(() => {
    forceUpdate();
  }, [containerRender]);

  return (
    <div className="container" key={Math.random()}>
      {data[activeGame].map((game, i) => (
        <Card
          imgUrl={game.imgUrl}
          name={game.name}
          size={game.size}
          rtp={game.rtp}
          iconUrl={game.iconUrl}
          key={i}
          lang={lang}
        />
      ))}
    </div>
  );
};

export default Container;
