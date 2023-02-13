import Card from "../Card/Card";
import React from "react";
import { RwdContext } from "../../../App";
import { useContext } from "react";
import "./Container.scss";

const data = [
  [
    {
      imgUrl: "/img/game_1.png",
      name: "通比牛牛",
      size: "10.8",
      rtp: "97.50",
      iconUrl: "/img/game_1_i.png",
    },
    {
      imgUrl: "/img/game_2.png",
      name: "百家樂",
      size: "10.7",
      rtp: "97.50",
      iconUrl: "/img/game_2_i.png",
    },
    {
      imgUrl: "/img/game_3.png",
      name: "德州撲克",
      size: "10.4",
      rtp: "97.50",
      iconUrl: "/img/game_3.png",
    },
    {
      imgUrl: "/img/game_4.png",
      name: "掃雷紅包",
      size: "10.4",
      rtp: "97.50",
      iconUrl: "/img/game_4.png",
    },
    {
      imgUrl: "/img/game_5.png",
      name: "賭大小",
      size: "12.7",
      rtp: "97.50",
      iconUrl: "/img/game_5.png",
    },
    {
      imgUrl: "/img/game_6.png",
      name: "龍虎鬥",
      size: "14.7",
      rtp: "97.50",
      iconUrl: "/img/game_6.png",
    },
    {
      imgUrl: "/img/game_7.png",
      name: "看牌搶莊牛牛",
      size: "11.4",
      rtp: "97.50",
      iconUrl: "/img/game_7.png",
    },
    {
      imgUrl: "/img/game_8.png",
      name: "搶莊牛牛",
      size: "11.6",
      rtp: "97.50",
      iconUrl: "/img/game_8.png",
    },
    {
      imgUrl: "/img/game_9.png",
      name: "炸金花",
      size: "12",
      rtp: "97.50",
      iconUrl: "/img/game_9.png",
    },
    {
      imgUrl: "/img/game_10.png",
      name: "飛禽走獸",
      size: "11.1",
      rtp: "97.50",
      iconUrl: "/img/game_10.png",
    },
    {
      imgUrl: "/img/game_11.png",
      name: "百人牛牛",
      size: "10.9",
      rtp: "97.50",
      iconUrl: "/img/game_11.png",
    },
    {
      imgUrl: "/img/game_12.png",
      name: "奔馳寶馬",
      size: "11.8",
      rtp: "97.50",
      iconUrl: "/img/game_12.png",
    },
    {
      imgUrl: "/img/game_13.png",
      name: "紅黑大戰",
      size: "11.1",
      rtp: "97.50",
      iconUrl: "/img/game_13.png",
    },
    {
      imgUrl: "/img/game_14.png",
      name: "超級水果機",
      size: "12.2",
      rtp: "96.50",
      iconUrl: "/img/game_14.png",
    },
    {
      imgUrl: "/img/game_15.png",
      name: "水滸傳",
      size: "12.6",
      rtp: "96.50",
      iconUrl: "/img/game_15.png",
    },
    {
      imgUrl: "/img/game_16.png",
      name: "連環奪寶",
      size: "12.1",
      rtp: "96.50",
      iconUrl: "/img/game_16.png",
    },
    {
      imgUrl: "/img/game_17.png",
      name: "糖果派對",
      size: "12.7",
      rtp: "96.50",
      iconUrl: "/img/game_17.png",
    },
    {
      imgUrl: "/img/game_18.png",
      name: "多福多財",
      size: "12.1",
      rtp: "96.50",
      iconUrl: "/img/game_18.png",
    },
    {
      imgUrl: "/img/game_19.png",
      name: "財神捕魚",
      size: "25.3",
      rtp: "96.50",
      iconUrl: "/img/game_19.png",
    },
    {
      imgUrl: "/img/game_20.png",
      name: "十三水",
      size: "12.3",
      rtp: "96.50",
      iconUrl: "/img/game_20.png",
    },
    {
      imgUrl: "/img/game_21.png",
      name: "二人麻將",
      size: "16.7",
      rtp: "96.50",
      iconUrl: "/img/game_21.png",
    },
    {
      imgUrl: "/img/game_22.png",
      name: "捕魚達人",
      size: "23.2",
      rtp: "96.50",
      iconUrl: "/img/game_22.png",
    },
  ],
  [
    {
      imgUrl: "/img/game_1.png",
      name: "通比牛牛",
      size: "10.8",
      rtp: "97.50",
      iconUrl: "/img/game_1_i.png",
    },
    {
      imgUrl: "/img/game_2.png",
      name: "百家樂",
      size: "10.7",
      rtp: "97.50",
      iconUrl: "/img/game_2_i.png",
    },
    {
      imgUrl: "/img/game_3.png",
      name: "德州撲克",
      size: "10.4",
      rtp: "97.50",
      iconUrl: "/img/game_3.png",
    },
    {
      imgUrl: "/img/game_4.png",
      name: "掃雷紅包",
      size: "10.4",
      rtp: "97.50",
      iconUrl: "/img/game_4.png",
    },
    {
      imgUrl: "/img/game_5.png",
      name: "賭大小",
      size: "12.7",
      rtp: "97.50",
      iconUrl: "/img/game_5.png",
    },
    {
      imgUrl: "/img/game_6.png",
      name: "龍虎鬥",
      size: "14.7",
      rtp: "97.50",
      iconUrl: "/img/game_6.png",
    },
    {
      imgUrl: "/img/game_7.png",
      name: "看牌搶莊牛牛",
      size: "11.4",
      rtp: "97.50",
      iconUrl: "/img/game_7.png",
    },
    {
      imgUrl: "/img/game_8.png",
      name: "搶莊牛牛",
      size: "11.6",
      rtp: "97.50",
      iconUrl: "/img/game_8.png",
    },
    {
      imgUrl: "/img/game_9.png",
      name: "炸金花",
      size: "12",
      rtp: "97.50",
      iconUrl: "/img/game_9.png",
    },
  ],
  [
    {
      imgUrl: "/img/game_14.png",
      name: "超級水果機",
      size: "12.2",
      rtp: "96.50",
      iconUrl: "/img/game_14.png",
    },
    {
      imgUrl: "/img/game_15.png",
      name: "水滸傳",
      size: "12.6",
      rtp: "96.50",
      iconUrl: "/img/game_15.png",
    },
    {
      imgUrl: "/img/game_16.png",
      name: "連環奪寶",
      size: "12.1",
      rtp: "96.50",
      iconUrl: "/img/game_16.png",
    },
    {
      imgUrl: "/img/game_17.png",
      name: "糖果派對",
      size: "12.7",
      rtp: "96.50",
      iconUrl: "/img/game_17.png",
    },
    {
      imgUrl: "/img/game_18.png",
      name: "多福多財",
      size: "12.1",
      rtp: "96.50",
      iconUrl: "/img/game_18.png",
    },
  ],
  [
    {
      imgUrl: "/img/game_19.png",
      name: "財神捕魚",
      size: "25.3",
      rtp: "96.50",
      iconUrl: "/img/game_19.png",
    },
    {
      imgUrl: "/img/game_22.png",
      name: "捕魚達人",
      size: "23.2",
      rtp: "96.50",
      iconUrl: "/img/game_22.png",
    },
  ],
];

const Container = () => {
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
        />
      ))}
    </div>
  );
};

export default Container;
