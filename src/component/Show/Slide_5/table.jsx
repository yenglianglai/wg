const Table = ({ lang }) => {
  return (
    <table>
      <colgroup>
        <col span="1" style={{ width: "25%" }} />
        <col span="1" style={{ width: "20%" }} />
        <col span="1" style={{ width: "35%" }} />
        <col span="1" style={{ width: "20%" }} />
      </colgroup>
      <thead>
        <th>
          <div className="item">
            {lang === "zh-TW"
              ? "遊戲類型"
              : lang === "zh-CN"
              ? "游戏类型"
              : lang === "eng" && "Game type"}
            <img src="/img/filter.gif" alt="" />
          </div>
        </th>
        <th>
          <div className="item">
            {lang === "zh-TW"
              ? "平台名稱"
              : lang === "zh-CN"
              ? "平台名称"
              : lang === "eng" && "Game Brand"}
            <img src="/img/filter.gif" alt="" />
          </div>
        </th>
        <th>
          <div className="item">
            {lang === "zh-TW"
              ? "支持幣種"
              : lang === "zh-CN"
              ? "支持币种"
              : lang === "eng" && "Currency"}
            <img src="/img/filter.gif" alt="" />
          </div>
        </th>
        <th>
          <div className="item">
            {lang === "zh-TW"
              ? "收費比例"
              : lang === "zh-CN"
              ? "收费比例"
              : lang === "eng" && "Charge"}
            <img src="/img/filter.gif" alt="" />
          </div>
        </th>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={86}>
            {lang === "zh-TW"
              ? "棋牌遊戲"
              : lang === "zh-CN"
              ? "收费比例"
              : lang === "eng" && "Live dealer"}
          </td>
          <td rowSpan={2}>
            <div className="item">
              <img src="/img/ag.gif" alt="" />
              AG
            </div>
          </td>
          <td>
            {lang === "zh-TW"
              ? "CNY(人民幣)"
              : lang === "zh-CN"
              ? "CNY(人民币)"
              : lang === "eng" && "CNY"}
          </td>
          <td>9%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "VND(越南盾)"
              : lang === "zh-CN"
              ? "VND(越南盾)"
              : lang === "eng" && "VND"}
          </td>
          <td>9%</td>
        </tr>
        <tr>
          <td rowSpan={6}>
            <div className="item">
              <img src="/img/baison.gif" alt="" />
              Baison
            </div>
          </td>
          <td>
            {lang === "zh-TW"
              ? "BRL(雷亞爾)"
              : lang === "zh-CN"
              ? "BRL(雷亚尔)"
              : lang === "eng" && "BRL"}
          </td>
          <td>7.5%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "CNY(人民幣)"
              : lang === "zh-CN"
              ? "CNY(人民币)"
              : lang === "eng" && "CNY"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "IDR(印尼盾)"
              : lang === "zh-CN"
              ? "IDR(印尼盾)"
              : lang === "eng" && "IDR"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "INR(盧比)"
              : lang === "zh-CN"
              ? "INR(卢比)"
              : lang === "eng" && "INR"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "USD(美元)"
              : lang === "zh-CN"
              ? "USD(美元)"
              : lang === "eng" && "USD"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "VND(越南盾)"
              : lang === "zh-CN"
              ? "VND(越南盾)"
              : lang === "eng" && "VND"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            <div className="item">
              <img src="/img/bbin.gif" alt="" />
              BBIN
            </div>
          </td>
          <td>
            {lang === "zh-TW"
              ? "CNY(人民幣)"
              : lang === "zh-CN"
              ? "CNY(人民币)"
              : lang === "eng" && "CNY"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            <div className="item">
              <img src="/img/bg.gif" alt="" />
              BG
            </div>
          </td>
          <td>
            {lang === "zh-TW"
              ? "CNY(人民幣)"
              : lang === "zh-CN"
              ? "CNY(人民币)"
              : lang === "eng" && "CNY"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td rowSpan={6}>
            <div className="item">
              <img src="/img/cq9.gif" alt="" />
              CQ9
            </div>
          </td>
          <td>
            {lang === "zh-TW"
              ? "BRL(雷亞爾)"
              : lang === "zh-CN"
              ? "BRL(雷亚尔)"
              : lang === "eng" && "BRL"}
          </td>
          <td>7.5%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "CNY(人民幣)"
              : lang === "zh-CN"
              ? "CNY(人民币)"
              : lang === "eng" && "CNY"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "IDR(印尼盾)"
              : lang === "zh-CN"
              ? "IDR(印尼盾)"
              : lang === "eng" && "IDR"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "INR(盧比)"
              : lang === "zh-CN"
              ? "INR(卢比)"
              : lang === "eng" && "INR"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "USD(美元)"
              : lang === "zh-CN"
              ? "USD(美元)"
              : lang === "eng" && "USD"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "VND(越南盾)"
              : lang === "zh-CN"
              ? "VND(越南盾)"
              : lang === "eng" && "VND"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td rowSpan={6}>
            <div className="item">
              <img src="/img/fc.gif" alt="" />
              FC
            </div>
          </td>
          <td>
            {lang === "zh-TW"
              ? "BRL(雷亞爾)"
              : lang === "zh-CN"
              ? "BRL(雷亚尔)"
              : lang === "eng" && "BRL"}
          </td>
          <td>7.5%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "CNY(人民幣)"
              : lang === "zh-CN"
              ? "CNY(人民币)"
              : lang === "eng" && "CNY"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "IDR(印尼盾)"
              : lang === "zh-CN"
              ? "IDR(印尼盾)"
              : lang === "eng" && "IDR"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "INR(盧比)"
              : lang === "zh-CN"
              ? "INR(卢比)"
              : lang === "eng" && "INR"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "USD(美元)"
              : lang === "zh-CN"
              ? "USD(美元)"
              : lang === "eng" && "USD"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "VND(越南盾)"
              : lang === "zh-CN"
              ? "VND(越南盾)"
              : lang === "eng" && "VND"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            <div className="item">
              <img src="/img/fg.gif" alt="" />
              FG
            </div>
          </td>
          <td>
            {lang === "zh-TW"
              ? "CNY(人民幣)"
              : lang === "zh-CN"
              ? "CNY(人民币)"
              : lang === "eng" && "CNY"}
          </td>
          <td>8%</td>
        </tr>
        <tr>
          <td>
            <div className="item">
              <img src="/img/jdb.gif" alt="" />
              JDB
            </div>
          </td>
          <td>
            {lang === "zh-TW"
              ? "CNY(人民幣)"
              : lang === "zh-CN"
              ? "CNY(人民币)"
              : lang === "eng" && "CNY"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td rowSpan={6}>
            <div className="item">
              <img src="img/jili.gif" alt="" />
              JILI
            </div>
          </td>
          <td>
            {lang === "zh-TW"
              ? "BRL(雷亞爾)"
              : lang === "zh-CN"
              ? "BRL(雷亚尔)"
              : lang === "eng" && "BRL"}
          </td>
          <td>9%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "CNY(人民幣)"
              : lang === "zh-CN"
              ? "CNY(人民币)"
              : lang === "eng" && "CNY"}
          </td>
          <td>9%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "IDR(印尼盾)"
              : lang === "zh-CN"
              ? "IDR(印尼盾)"
              : lang === "eng" && "IDR"}
          </td>
          <td>9%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "INR(盧比)"
              : lang === "zh-CN"
              ? "INR(卢比)"
              : lang === "eng" && "INR"}
          </td>
          <td>9%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "USD(美元)"
              : lang === "zh-CN"
              ? "USD(美元)"
              : lang === "eng" && "USD"}
          </td>
          <td>9%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "VND(越南盾)"
              : lang === "zh-CN"
              ? "VND(越南盾)"
              : lang === "eng" && "VND"}
          </td>
          <td>9%</td>
        </tr>
        <tr>
          <td rowSpan={6}>
            <div className="item">
              <img src="img/ka.gif" alt="" />
              KA
            </div>
          </td>
          <td>
            {lang === "zh-TW"
              ? "BRL(雷亞爾)"
              : lang === "zh-CN"
              ? "BRL(雷亚尔)"
              : lang === "eng" && "BRL"}
          </td>
          <td>8%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "CNY(人民幣)"
              : lang === "zh-CN"
              ? "CNY(人民币)"
              : lang === "eng" && "CNY"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "IDR(印尼盾)"
              : lang === "zh-CN"
              ? "IDR(印尼盾)"
              : lang === "eng" && "IDR"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "INR(盧比)"
              : lang === "zh-CN"
              ? "INR(卢比)"
              : lang === "eng" && "INR"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "USD(美元)"
              : lang === "zh-CN"
              ? "USD(美元)"
              : lang === "eng" && "USD"}
          </td>
          <td>8%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "VND(越南盾)"
              : lang === "zh-CN"
              ? "VND(越南盾)"
              : lang === "eng" && "VND"}
          </td>
          <td>8%</td>
        </tr>
        <tr>
          <td>
            <div className="item">
              <img src="/img/ky.gif" alt="" />
              KY
            </div>
          </td>
          <td>
            {lang === "zh-TW"
              ? "CNY(人民幣)"
              : lang === "zh-CN"
              ? "CNY(人民币)"
              : lang === "eng" && "CNY"}
          </td>
          <td>8%</td>
        </tr>
        <tr>
          <td>
            <div className="item">
              <img src="/img/leg.gif" alt="" />
              LEG
            </div>
          </td>
          <td>
            {lang === "zh-TW"
              ? "CNY(人民幣)"
              : lang === "zh-CN"
              ? "CNY(人民币)"
              : lang === "eng" && "CNY"}
          </td>
          <td>8%</td>
        </tr>
        <tr>
          <td rowSpan={7}>
            <div className="item">
              <img src="/img/mg.gif" alt="" />
              MG
            </div>
          </td>
          <td>
            {lang === "zh-TW"
              ? "BRL(雷亞爾)"
              : lang === "zh-CN"
              ? "BRL(雷亚尔)"
              : lang === "eng" && "BRL"}
          </td>
          <td>10.5%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "CNY(人民幣)"
              : lang === "zh-CN"
              ? "CNY(人民币)"
              : lang === "eng" && "CNY"}
          </td>
          <td>10%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "IDR(印尼盾)"
              : lang === "zh-CN"
              ? "IDR(印尼盾)"
              : lang === "eng" && "IDR"}
          </td>
          <td>10%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "INR(盧比)"
              : lang === "zh-CN"
              ? "INR(卢比)"
              : lang === "eng" && "INR"}
          </td>
          <td>10%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "PHP(披索)"
              : lang === "zh-CN"
              ? "PHP(披索)"
              : lang === "eng" && "PHP"}
          </td>
          <td>10%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "USD(美元)"
              : lang === "zh-CN"
              ? "USD(美元)"
              : lang === "eng" && "USD"}
          </td>
          <td>8%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "VND(越南盾)"
              : lang === "zh-CN"
              ? "VND(越南盾)"
              : lang === "eng" && "VND"}
          </td>
          <td>8%</td>
        </tr>
        <tr>
          <td rowSpan={6}>
            <div className="item">
              <img src="/img/mt.gif" alt="" />
              MT
            </div>
          </td>
          <td>
            {lang === "zh-TW"
              ? "BRL(雷亞爾)"
              : lang === "zh-CN"
              ? "BRL(雷亚尔)"
              : lang === "eng" && "BRL"}
          </td>
          <td>8%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "CNY(人民幣)"
              : lang === "zh-CN"
              ? "CNY(人民币)"
              : lang === "eng" && "CNY"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "IDR(印尼盾)"
              : lang === "zh-CN"
              ? "IDR(印尼盾)"
              : lang === "eng" && "IDR"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "INR(盧比)"
              : lang === "zh-CN"
              ? "INR(卢比)"
              : lang === "eng" && "INR"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "USD(美元)"
              : lang === "zh-CN"
              ? "USD(美元)"
              : lang === "eng" && "USD"}
          </td>
          <td>8%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "VND(越南盾)"
              : lang === "zh-CN"
              ? "VND(越南盾)"
              : lang === "eng" && "VND"}
          </td>
          <td>8%</td>
        </tr>
        <tr>
          <td>
            <div className="item">
              <img src="/img/nw.gif" alt="" />
              NW
            </div>
          </td>
          <td>
            {lang === "zh-TW"
              ? "CNY(人民幣)"
              : lang === "zh-CN"
              ? "CNY(人民币)"
              : lang === "eng" && "CNY"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td rowSpan={6}>
            <div className="item">
              <img src="/img/ps.gif" alt="" />
              PS
            </div>
          </td>
          <td>
            {lang === "zh-TW"
              ? "BRL(雷亞爾)"
              : lang === "zh-CN"
              ? "BRL(雷亚尔)"
              : lang === "eng" && "BRL"}
          </td>
          <td>8%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "CNY(人民幣)"
              : lang === "zh-CN"
              ? "CNY(人民币)"
              : lang === "eng" && "CNY"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "IDR(印尼盾)"
              : lang === "zh-CN"
              ? "IDR(印尼盾)"
              : lang === "eng" && "IDR"}
          </td>
          <td>8.5%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "INR(盧比)"
              : lang === "zh-CN"
              ? "INR(卢比)"
              : lang === "eng" && "INR"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "USD(美元)"
              : lang === "zh-CN"
              ? "USD(美元)"
              : lang === "eng" && "USD"}
          </td>
          <td>8%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "VND(越南盾)"
              : lang === "zh-CN"
              ? "VND(越南盾)"
              : lang === "eng" && "VND"}
          </td>
          <td>8%</td>
        </tr>
        <tr>
          <td rowSpan={6}>
            <div className="item">
              <img src="/img/rich88.gif" alt="" />
              RICH88
            </div>
          </td>
          <td>
            {lang === "zh-TW"
              ? "BRL(雷亞爾)"
              : lang === "zh-CN"
              ? "BRL(雷亚尔)"
              : lang === "eng" && "BRL"}
          </td>
          <td>8%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "CNY(人民幣)"
              : lang === "zh-CN"
              ? "CNY(人民币)"
              : lang === "eng" && "CNY"}
          </td>
          <td>7.5%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "IDR(印尼盾)"
              : lang === "zh-CN"
              ? "IDR(印尼盾)"
              : lang === "eng" && "IDR"}
          </td>
          <td>7.5%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "INR(盧比)"
              : lang === "zh-CN"
              ? "INR(卢比)"
              : lang === "eng" && "INR"}
          </td>
          <td>7.5%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "USD(美元)"
              : lang === "zh-CN"
              ? "USD(美元)"
              : lang === "eng" && "USD"}
          </td>
          <td>7.5%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "VND(越南盾)"
              : lang === "zh-CN"
              ? "VND(越南盾)"
              : lang === "eng" && "VND"}
          </td>
          <td>8%</td>
        </tr>
        <tr>
          <td rowSpan={6}>
            <div className="item">
              <img src="/img/sg.gif" alt="" />
              SG
            </div>
          </td>
          <td>
            {lang === "zh-TW"
              ? "BRL(雷亞爾)"
              : lang === "zh-CN"
              ? "BRL(雷亚尔)"
              : lang === "eng" && "BRL"}
          </td>
          <td>9%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "CNY(人民幣)"
              : lang === "zh-CN"
              ? "CNY(人民币)"
              : lang === "eng" && "CNY"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "IDR(印尼盾)"
              : lang === "zh-CN"
              ? "IDR(印尼盾)"
              : lang === "eng" && "IDR"}
          </td>
          <td>7.5%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "INR(盧比)"
              : lang === "zh-CN"
              ? "INR(卢比)"
              : lang === "eng" && "INR"}
          </td>
          <td>7.5%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "USD(美元)"
              : lang === "zh-CN"
              ? "USD(美元)"
              : lang === "eng" && "USD"}
          </td>
          <td>7.5%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "VND(越南盾)"
              : lang === "zh-CN"
              ? "VND(越南盾)"
              : lang === "eng" && "VND"}
          </td>
          <td>7.5%</td>
        </tr>
        <tr>
          <td rowSpan={8}>
            <div className="item">
              <img src="/img/wg.gif" alt="" />
              WG
            </div>
          </td>
          <td>
            {lang === "zh-TW"
              ? "BRL(雷亞爾)"
              : lang === "zh-CN"
              ? "BRL(雷亚尔)"
              : lang === "eng" && "BRL"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "CNY(人民幣)"
              : lang === "zh-CN"
              ? "CNY(人民币)"
              : lang === "eng" && "CNY"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "IDR(印尼盾)"
              : lang === "zh-CN"
              ? "IDR(印尼盾)"
              : lang === "eng" && "IDR"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "INR(盧比)"
              : lang === "zh-CN"
              ? "INR(卢比)"
              : lang === "eng" && "INR"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "PHP(披索)"
              : lang === "zh-CN"
              ? "PHP(披索)"
              : lang === "eng" && "PHP"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "THB(泰銖)"
              : lang === "zh-CN"
              ? "THB(泰铢)"
              : lang === "eng" && "THB"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "USD(美元)"
              : lang === "zh-CN"
              ? "USD(美元)"
              : lang === "eng" && "USD"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "VND(越南盾)"
              : lang === "zh-CN"
              ? "VND(越南盾)"
              : lang === "eng" && "VND"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            <div className="item">
              <img src="/img/wl.gif" alt="" />
              WL
            </div>
          </td>
          <td>
            {lang === "zh-TW"
              ? "CNY(人民幣)"
              : lang === "zh-CN"
              ? "CNY(人民币)"
              : lang === "eng" && "CNY"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td rowSpan={6}>
            <div className="item">
              <img src="/img/ygr.gif" alt="" />
              YGR
            </div>
          </td>
          <td>
            {" "}
            {lang === "zh-TW"
              ? "BRL(雷亞爾)"
              : lang === "zh-CN"
              ? "BRL(雷亚尔)"
              : lang === "eng" && "BRL"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "CNY(人民幣)"
              : lang === "zh-CN"
              ? "CNY(人民币)"
              : lang === "eng" && "CNY"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "IDR(印尼盾)"
              : lang === "zh-CN"
              ? "IDR(印尼盾)"
              : lang === "eng" && "IDR"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "INR(盧比)"
              : lang === "zh-CN"
              ? "INR(卢比)"
              : lang === "eng" && "INR"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "PHP(披索)"
              : lang === "zh-CN"
              ? "PHP(披索)"
              : lang === "eng" && "PHP"}
          </td>
          <td>7%</td>
        </tr>
        <tr>
          <td>
            {lang === "zh-TW"
              ? "USD(美元)"
              : lang === "zh-CN"
              ? "USD(美元)"
              : lang === "eng" && "USD"}
          </td>
          <td>7%</td>
        </tr>
      </tbody>
    </table>
  );
};
export default Table;
