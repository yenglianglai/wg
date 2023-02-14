import React from "react";
import "./Slide_4.scss";
const Slide_4 = ({ lang }) => {
  const data = [
    [
      [
        "/img/simzh.gif",
        lang === "zh-TW"
          ? "简体中文"
          : lang === "zh-CN"
          ? "简体中文"
          : "Simplified Chinese",
      ],
      lang === "zh-TW"
        ? "漢藏語系-漢語族"
        : lang === "zh-CN"
        ? "汉藏语系-汉语族"
        : "Sino-Tibetan Language Family - Chinese Family",

      lang === "zh-TW"
        ? "中國大陸、香港、澳門、台灣、新加坡、馬來西亞、蘇里南等國家和地區"
        : lang === "zh-CN"
        ? "中国大陆、香港、澳门、台湾、新加坡、马来西亚、苏里南等国家和地区"
        : "Mainland China, Hong Kong, Macau, Taiwan, Singapore, Malaysia, Suriname and other countries and regions",

      lang === "zh-TW"
        ? "14.5億"
        : lang === "zh-CN"
        ? "14.5亿"
        : "1.45 billion",
    ],

    [
      [
        "/img/eng.gif",
        lang === "zh-TW" ? "英語" : lang === "zh-CN" ? "英语" : "English",
      ],
      lang === "zh-TW"
        ? "印歐語系-日耳曼語族"
        : lang === "zh-CN"
        ? "印欧语系-日耳曼语族"
        : "Indo-European-Germanic languages",

      lang === "zh-TW"
        ? "英國、美國、澳大利亞、巴哈馬、愛爾蘭、巴巴多斯、百慕大、圭亞那、牙買加、新西蘭、聖基茨、尼維斯、特立尼達、多巴哥、加拿大、多米尼克、聖路西亞、聖文森特、格林納丁斯、密克羅尼西亞聯邦、愛爾蘭、香港、利比里亞、南非、新加坡、馬來西亞等全球約110個國家和地區"
        : lang === "zh-CN"
        ? "英国、美国、澳大利亚、巴哈马、爱尔兰、巴巴多斯、百慕大、圭亚那、牙买加、新西兰、圣基茨、尼维斯、特立尼达、多巴哥、加拿大、多米尼克、圣路西亚、圣文森特、格林纳丁斯、密克罗尼西亚联邦、爱尔兰、香港、利比里亚、南非、新加坡、马来西亚等全球约110个国家和地区"
        : "United Kingdom, United States, Australia, Bahamas, Ireland, Barbados, Bermuda, Guyana, Jamaica, New Zealand, St. Kitts, Nevis, Trinidad, Tobago, Canada, Dominica, St. Lucia, St. Vincent, Grenadines Sri Lanka, Federated States of Micronesia, Ireland, Hong Kong, Liberia, South Africa, Singapore, Malaysia and other about 110 countries and regions around the world",

      lang === "zh-TW"
        ? "12.68億"
        : lang === "zh-CN"
        ? "12.68亿"
        : "1.268 billion",
    ],
    [
      [
        "/img/trazh.gif",
        lang === "zh-TW"
          ? "繁體中文"
          : lang === "zh-CN"
          ? "繁体中文"
          : "Traditional Chinese",
      ],
      lang === "zh-TW"
        ? "漢藏語系-漢語族"
        : lang === "zh-CN"
        ? "汉藏语系-汉语族"
        : "Sino-Tibetan Language Family - Chinese Family",

      lang === "zh-TW"
        ? "香港、澳門、台灣、馬來西亞、中國大陸等國家和地區"
        : lang === "zh-CN"
        ? "香港、澳门、台湾、马来西亚、中国大陆等国家和地区"
        : "Hong Kong, Macau, Taiwan, Malaysia, Mainland China and other countries and regions",

      lang === "zh-TW" ? "1億" : lang === "zh-CN" ? "1亿" : "100 million",
    ],
    [
      [
        "/img/hindi.gif",
        lang === "zh-TW" ? "印地語" : lang === "zh-CN" ? "印地语" : "Hindi",
      ],
      lang === "zh-TW"
        ? "印歐語系-印度-雅利安語支"
        : lang === "zh-CN"
        ? "印欧语系-印度-雅利安语支"
        : "Indo-European-Indo-Aryan branch",
      lang === "zh-TW"
        ? "印度、巴基斯坦等國家和地區"
        : lang === "zh-CN"
        ? "印度、巴基斯坦等国家和地区"
        : "India, Pakistan and other countries and regions",
      lang === "zh-TW"
        ? "6.373億"
        : lang === "zh-CN"
        ? "6.373亿"
        : "637.3 million",
    ],
    [
      [
        "/img/spanish.gif",
        lang === "zh-TW"
          ? "西班牙語"
          : lang === "zh-CN"
          ? "西班牙语"
          : "Spanish",
      ],
      lang === "zh-TW"
        ? "印歐語系-羅曼語族"
        : lang === "zh-CN"
        ? "印欧语系-罗曼语族"
        : "Indo-European-Roman languages",
      lang === "zh-TW"
        ? "西班牙、美國南部、赤道幾內亞、中南美洲，除了貝里斯、牙買加、海地、蘇利南、蓋亞那、法屬圭亞那和巴西等國家和地區"
        : lang === "zh-CN"
        ? "西班牙、美国南部、赤道几内亚、中南美洲，除了贝里斯、牙买加、海地、苏利南、盖亚那、法属圭亚那和巴西等国家和地区"
        : "Spain, Southern United States, Equatorial Guinea, Central and South America, except Belize, Jamaica, Haiti, Suriname, Guyana, French Guiana and Brazil and other countries and regions",
      lang === "zh-TW"
        ? "5.379億"
        : lang === "zh-CN"
        ? "5.379亿"
        : "537.9 million",
    ],

    [
      [
        "/img/franch.gif",
        lang === "zh-TW" ? "法語" : lang === "zh-CN" ? "法语" : "French",
      ],
      lang === "zh-TW"
        ? "印歐語系-羅曼語族"
        : lang === "zh-CN"
        ? "印欧语系-罗曼语族"
        : "Indo-European-Roman languages",
      lang === "zh-TW"
        ? "法國、比利時、加拿大、瑞士等國家和地區"
        : lang === "zh-CN"
        ? "法国、比利时、加拿大、瑞士等国家和地区"
        : "France, Belgium, Canada, Switzerland and other countries and regions",
      lang === "zh-TW"
        ? "2.766億"
        : lang === "zh-CN"
        ? "2.766亿"
        : "276.6 million",
    ],

    [
      [
        "/img/arab.gif",
        lang === "zh-TW"
          ? "阿拉伯語"
          : lang === "zh-CN"
          ? "阿拉伯语"
          : "Arabic",
      ],
      lang === "zh-TW"
        ? "亞非語系-閃米特語族"
        : lang === "zh-CN"
        ? "亚非语系-闪米特语族"
        : "Afro-Semitic languages",
      lang === "zh-TW"
        ? "阿拉伯國家聯盟、以色列、厄立特里亞、馬來西亞、尼日利亞、肯尼亞、乍得、塞內加爾、南蘇丹、埃塞俄比亞、伊朗、土耳其、馬達加斯加、坦桑尼亞、莫桑比克等國家和地區"
        : lang === "zh-CN"
        ? "阿拉伯国家联盟、以色列、厄立特里亚、马来西亚、尼日利亚、肯尼亚、乍得、塞内加尔、南苏丹、埃塞俄比亚、伊朗、土耳其、马达加斯加、坦桑尼亚、莫桑比克等国家和地区"
        : "League of Arab States, Israel, Eritrea, Malaysia, Nigeria, Kenya, Chad, Senegal, South Sudan, Ethiopia, Iran, Turkey, Madagascar, Tanzania, Mozambique and other countries and regions",
      lang === "zh-TW" ? "2.74億" : lang === "zh-CN" ? "2.74亿" : "274 million",
    ],

    [
      [
        "/img/russian.gif",
        lang === "zh-TW" ? "俄語" : lang === "zh-CN" ? "俄语" : "Russian",
      ],
      lang === "zh-TW"
        ? "印歐語系-斯拉夫語族"
        : lang === "zh-CN"
        ? "印欧语系-斯拉夫语族"
        : "Indo-European-Slavic languages",
      lang === "zh-TW"
        ? "俄羅斯、白俄羅斯、哈薩克斯坦、吉爾吉斯斯坦、塔吉克斯坦、盧甘斯克人民共和國、頓涅茨克人民共和國、德涅斯特河沿岸等國家和地區"
        : lang === "zh-CN"
        ? "俄罗斯、白俄罗斯、哈萨克斯坦、吉尔吉斯斯坦、塔吉克斯坦、卢甘斯克人民共和国、顿涅茨克人民共和国、德涅斯特河沿岸等国家和地区"
        : "Russia, Belarus, Kazakhstan, Kyrgyzstan, Tajikistan, Luhansk People's Republic, Donetsk People's Republic, Transnistria and other countries and regions",

      lang === "zh-TW" ? "2.58億" : lang === "zh-CN" ? "2.58亿" : "258 million",
    ],

    [
      [
        "/img/port.gif",
        lang === "zh-TW"
          ? "葡萄牙語"
          : lang === "zh-CN"
          ? "葡萄牙语"
          : "Portuguese",
      ],
      lang === "zh-TW"
        ? "印歐語系-羅曼語族"
        : lang === "zh-CN"
        ? "印欧语系-罗曼语族"
        : "Indo-European-Roman languages",
      lang === "zh-TW"
        ? "葡萄牙、巴西、莫桑比克、安哥拉、幾內亞比紹、赤道幾內亞、佛得角、聖多美和普林西比、東帝汶、烏拉圭、澳門等國家和地區"
        : lang === "zh-CN"
        ? "葡萄牙、巴西、莫桑比克、安哥拉、几内亚比绍、赤道几内亚、佛得角、圣多美和普林西比、东帝汶、乌拉圭、澳门等国家和地区"
        : "Portugal, Brazil, Mozambique, Angola, Guinea-Bissau, Equatorial Guinea, Cape Verde, Sao Tome and Principe, Timor-Leste, Uruguay, Macau and other countries and regions",
      lang === "zh-TW"
        ? "2.522億"
        : lang === "zh-CN"
        ? "2.522亿"
        : "252.2 million",
    ],

    [
      [
        "/img/indoe.gif",
        lang === "zh-TW"
          ? "印尼語"
          : lang === "zh-CN"
          ? "印尼语"
          : "Indonesian",
      ],
      lang === "zh-TW"
        ? "南島語系-馬來－波利尼西亞語族"
        : lang === "zh-CN"
        ? "南岛语系-马来－波利尼西亚语族"
        : "Austronesian-Malayo-Polynesian languages",

      lang === "zh-TW"
        ? "印度尼西亞、東南亞國家聯盟等國家和地區"
        : lang === "zh-CN"
        ? "印度尼西亚、东南亚国家联盟等国家和地区"
        : "Indonesia, Association of Southeast Asian Nations and other countries and regions",

      lang === "zh-TW" ? "1.99億" : lang === "zh-CN" ? "1.99亿" : "199 million",
    ],

    [
      [
        "/img/german.gif",
        lang === "zh-TW" ? "德語" : lang === "zh-CN" ? "德语" : "German",
      ],
      lang === "zh-TW"
        ? "印歐語系-日耳曼語族"
        : lang === "zh-CN"
        ? "印欧语系-日耳曼语族"
        : "Indo-European-Germanic languages",
      lang === "zh-TW"
        ? "德國、奧地利、列支敦士登、瑞士、盧森堡、比利時等國家和地區"
        : lang === "zh-CN"
        ? "德国、奥地利、列支敦士登、瑞士、卢森堡、比利时等国家和地区"
        : "Germany, Austria, Liechtenstein, Switzerland, Luxembourg, Belgium and other countries and regions",

      lang === "zh-TW"
        ? "1.316億"
        : lang === "zh-CN"
        ? "1.316亿"
        : "131.6 million",
    ],
    [
      [
        "/img/jap.gif",
        lang === "zh-TW" ? "日語" : lang === "zh-CN" ? "日语" : "Japanese",
      ],
      lang === "zh-TW"
        ? "日本－琉球語系"
        : lang === "zh-CN"
        ? "日本－琉球语系"
        : "Japanese-Ryukyu language family",
      lang === "zh-TW"
        ? "日本、帕勞"
        : lang === "zh-CN"
        ? "日本、帕劳"
        : "Japan, Palau",
      lang === "zh-TW"
        ? "1.264億"
        : lang === "zh-CN"
        ? "1.264亿"
        : "126.4 million",
    ],
    [
      [
        "/img/korean.gif",
        lang === "zh-TW"
          ? "韓語 (朝鮮語)"
          : lang === "zh-CN"
          ? "韩语（朝鲜语)"
          : "Korean (Korean)",
      ],
      lang === "zh-TW"
        ? "孤立語言或朝鮮語系"
        : lang === "zh-CN"
        ? "孤立语言或朝鲜语系"
        : "Isolated language or Korean language family",
      lang === "zh-TW"
        ? "韓國、朝鮮、中國、日本、美國等國家和地區"
        : lang === "zh-CN"
        ? "韩国、朝鲜、中国、日本、美国等国家和地区"
        : "South Korea, North Korea, China, Japan, the United States and other countries and regions",

      lang === "zh-TW"
        ? "7940萬"
        : lang === "zh-CN"
        ? "7940万"
        : "79.4 million",
    ],

    [
      [
        "/img/vietnam.gif",
        lang === "zh-TW"
          ? "越南語"
          : lang === "zh-CN"
          ? "越南语"
          : "Vietnamese",
      ],
      lang === "zh-TW"
        ? "南亞語系"
        : lang === "zh-CN"
        ? "南亚语系"
        : "Austroasiatic languages",
      lang === "zh-TW"
        ? "越南、中國大陸廣西、台灣、美國、加拿大、法國、澳大利亞、捷克等國家和地區"
        : lang === "zh-CN"
        ? "越南、中国大陆广西、台湾、美国、加拿大、法国、澳大利亚、捷克等国家和地区"
        : "Vietnam, Mainland China, Guangxi, Taiwan, the United States, Canada, France, Australia, the Czech Republic and other countries and regions",
      lang === "zh-TW" ? "7700萬" : lang === "zh-CN" ? "7700万" : "77 million",
    ],

    [
      [
        "/img/Italy.gif",
        lang === "zh-TW"
          ? "意大利語"
          : lang === "zh-CN"
          ? "意大利语"
          : "Italian",
      ],
      lang === "zh-TW"
        ? "印歐語系-羅曼語族"
        : lang === "zh-CN"
        ? "印欧语系-罗曼语族"
        : "Zhuang and Dong languages",

      lang === "zh-TW"
        ? "意大利、聖馬力諾、梵蒂岡、瑞士等國家和地區"
        : lang === "zh-CN"
        ? "意大利、圣马力诺、梵蒂冈、瑞士等国家和地区"
        : "Italy, San Marino, Vatican, Switzerland and other countries and regions",

      lang === "zh-TW"
        ? "6770萬"
        : lang === "zh-CN"
        ? "6770万"
        : "67.7 million",
    ],

    [
      [
        "/img/thai.gif",
        lang === "zh-TW" ? "泰語" : lang === "zh-CN" ? "泰语" : "Thai",
      ],
      lang === "zh-TW"
        ? "壯侗語系"
        : lang === "zh-CN"
        ? "壮侗语系"
        : "Zhuang and Dong languages",

      lang === "zh-TW"
        ? "泰國、柬埔寨"
        : lang === "zh-CN"
        ? "泰国、柬埔寨"
        : "Thailand, Cambodia",

      lang === "zh-TW"
        ? "6070萬"
        : lang === "zh-CN"
        ? "6070万"
        : "60.7 million",
    ],
    [
      [
        "/img/myamar.gif",
        lang === "zh-TW" ? "緬甸語" : lang === "zh-CN" ? "缅甸语" : "Burmese",
      ],
      lang === "zh-TW"
        ? "漢藏語系藏緬語族"
        : lang === "zh-CN"
        ? "汉藏语系藏缅语族"
        : "Sino-Tibetan Tibeto-Burman",

      lang === "zh-TW"
        ? "緬甸、孟加拉國、馬來西亞、泰國、美國等國家和地區"
        : lang === "zh-CN"
        ? "缅甸、孟加拉国、马来西亚、泰国、美国等国家和地区"
        : "Myanmar, Bangladesh, Malaysia, Thailand, the United States and other countries and regions",

      lang === "zh-TW" ? "3200萬" : lang === "zh-CN" ? "3200万" : "32 million",
    ],
  ];
  return (
    <div className="slide_4">
      <table className="table">
        <colgroup>
          <col span="1" style={{ width: "15%" }} />
          <col span="1" style={{ width: "25%" }} />
          <col span="1" style={{ width: "50%" }} />
          <col span="1" style={{ width: "10%" }} />
        </colgroup>
        <thead>
          <tr>
            <th>
              {lang === "zh-TW" ? "語言" : lang === "eng" ? "Language" : "语言"}
            </th>
            <th>
              {lang === "zh-TW"
                ? "語系"
                : lang === "eng"
                ? "Language Family"
                : "语系"}
            </th>
            <th>
              {lang === "zh-TW"
                ? "使用國家地區"
                : lang === "eng"
                ? "Country"
                : "使用国家地区"}
            </th>
            <th>
              {lang === "zh-TW"
                ? "分佈人口"
                : lang === "eng"
                ? "Population"
                : "分布人口"}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((arr, i) => (
            <tr key={i}>
              {arr.map((item, id) =>
                id === 0 ? (
                  <td key={id}>
                    <div className="item">
                      <img src={item[0]} alt="" />
                      {item[1]}
                    </div>
                  </td>
                ) : (
                  <td key={id}>{item}</td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Slide_4;
