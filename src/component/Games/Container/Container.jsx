import Card from "../Card/Card";
import React from "react";
import { RwdContext } from "../../../App";
import { useContext } from "react";
import "./Container.scss";

const Container = ({ lang }) => {
  const data = [
    [
      {
        imgUrl: "/img/game_1.png",
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
        imgUrl: "/img/game_2.png",
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
        imgUrl: "/img/game_3.png",
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
        imgUrl: "/img/game_4.png",
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
        imgUrl: "/img/game_5.png",
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
        imgUrl: "/img/game_6.png",
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
        imgUrl: "/img/game_7.png",
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
        imgUrl: "/img/game_8.png",
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
        imgUrl: "/img/game_9.png",
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
        imgUrl: "/img/game_10.png",
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
        imgUrl: "/img/game_11.png",
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
        imgUrl: "/img/game_12.png",
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
        imgUrl: "/img/game_13.png",
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
        imgUrl: "/img/game_14.png",
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
        imgUrl: "/img/game_15.png",
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
        imgUrl: "/img/game_16.png",
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
        imgUrl: "/img/game_17.png",
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
        imgUrl: "/img/game_18.png",
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
        imgUrl: "/img/game_19.png",
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
        imgUrl: "/img/game_20.png",
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
        imgUrl: "/img/game_21.png",
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
        imgUrl: "/img/game_22.png",
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
        imgUrl: "/img/game_1.png",
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
        imgUrl: "/img/game_2.png",
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
        imgUrl: "/img/game_3.png",
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
        imgUrl: "/img/game_4.png",
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
        imgUrl: "/img/game_5.png",
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
        imgUrl: "/img/game_6.png",
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
        imgUrl: "/img/game_7.png",
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
        imgUrl: "/img/game_8.png",
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
        imgUrl: "/img/game_9.png",
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
        imgUrl: "/img/game_14.png",
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
        imgUrl: "/img/game_15.png",
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
        imgUrl: "/img/game_16.png",
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
        imgUrl: "/img/game_17.png",
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
        imgUrl: "/img/game_18.png",
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
        imgUrl: "/img/game_19.png",
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
        imgUrl: "/img/game_22.png",
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
  ];
  const { activeGame } = useContext(RwdContext);

  return (
    <div className="container">
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
