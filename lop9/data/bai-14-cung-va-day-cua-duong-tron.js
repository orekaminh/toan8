/* Bài 14. Cung và dây của một đường tròn
   Chương V (Toán 9, Kết nối tri thức, Tập 1) */
MATH9.registerLesson({
  id: "bai-14-cung-va-day-cua-duong-tron",
  chapter: "Chương V. Đường tròn",
  order: 2,
  title: "Bài 14. Cung và dây của một đường tròn",

  objectives: [
    "Nhận biết cung, dây và dây căng cung của một đường tròn.",
    "Vận dụng quan hệ vuông góc giữa đường kính và dây để tìm trung điểm dây hoặc chứng minh vuông góc.",
    "Sử dụng liên hệ giữa dây và khoảng cách từ tâm đến dây để so sánh và tính toán.",
  ],

  intro: {
    text:
      "Hai điểm $A$ và $B$ nằm trên một đường tròn chia đường tròn thành hai phần, mỗi phần là một " +
      "<b>cung</b>; đoạn thẳng $AB$ nối hai đầu mút được gọi là <b>dây</b> căng cung đó. Bài này tìm hiểu " +
      "những mối liên hệ rất đẹp giữa <b>đường kính</b> và <b>dây</b>, giữa các dây <b>bằng nhau</b> và " +
      "<b>khoảng cách</b> từ chúng tới tâm. Chẳng hạn, một dây dài $8$ cm cách tâm $3$ cm thì bán kính là " +
      "$R = \\sqrt{3^2 + 4^2} = 5$ cm.",
    math: "R = \\sqrt{3^2 + 4^2} = 5",
  },

  theory: [
    {
      heading: "1. Cung và dây của một đường tròn",
      html:
        "Cho hai điểm $A, B$ thuộc đường tròn $(O)$. Hai điểm này chia đường tròn thành hai phần, mỗi " +
        "phần gọi là một <b>cung</b> (cung $AB$). Đoạn thẳng $AB$ gọi là <b>dây</b> (hay dây cung) và " +
        "ta nói dây $AB$ <b>căng</b> hai cung $AB$.<br>" +
        "Dây lớn nhất của một đường tròn chính là <b>đường kính</b>: nó đi qua tâm $O$ và có độ dài " +
        "bằng $2R$.",
    },
    {
      heading: "2. Quan hệ giữa đường kính và dây",
      html:
        "<b>Định lý 1.</b> Trong một đường tròn, đường kính <b>vuông góc</b> với một dây thì đi qua " +
        "<b>trung điểm</b> của dây ấy.<br>" +
        "<b>Định lý 2.</b> Trong một đường tròn, đường kính đi qua <b>trung điểm</b> của một dây <b>không " +
        "đi qua tâm</b> thì <b>vuông góc</b> với dây ấy.<br>" +
        "Lưu ý điều kiện “không đi qua tâm” ở Định lý 2: nếu dây là một đường kính thì trung điểm của nó " +
        "chính là tâm và mọi đường kính khác đều đi qua đó mà không nhất thiết vuông góc.",
      formula: "OH \\perp AB \\Rightarrow HA = HB",
    },
    {
      heading: "3. Liên hệ giữa dây và khoảng cách tới tâm",
      html:
        "Gọi $OH$ là khoảng cách từ tâm $O$ đến dây $AB$ (với $H$ là chân đường vuông góc, cũng là " +
        "trung điểm của $AB$). Áp dụng định lý Pythagore cho tam giác vuông $OHA$ ta có $R^2 = OH^2 + " +
        "HA^2$.<br>" +
        "<b>Định lý.</b> Trong một đường tròn: hai dây <b>bằng nhau</b> thì <b>cách đều</b> tâm; ngược " +
        "lại, hai dây cách đều tâm thì bằng nhau. Hơn nữa, dây nào <b>lớn hơn</b> thì <b>gần</b> tâm hơn.",
      formula: "R^2 = OH^2 + \\left(\\dfrac{AB}{2}\\right)^2",
    },
  ],

  examples: [
    {
      title: "Tính bán kính khi biết dây và khoảng cách",
      prompt:
        "Đường tròn $(O)$ có dây $AB = 8$ cm và khoảng cách từ tâm $O$ đến $AB$ bằng $3$ cm. Tính bán " +
        "kính $R$.",
      steps: [
        "Kẻ $OH \\perp AB$ tại $H$. Theo Định lý 1, $H$ là trung điểm của $AB$ nên $HA = \\dfrac{AB}{2} = 4$ cm.",
        "Khoảng cách từ tâm tới dây là $OH = 3$ cm.",
        "Tam giác $OHA$ vuông tại $H$, theo Pythagore: $R^2 = OH^2 + HA^2 = 3^2 + 4^2 = 25$.",
        "Vậy $R = \\sqrt{25} = 5$ cm.",
      ],
    },
    {
      title: "Tính độ dài dây khi biết bán kính và khoảng cách",
      prompt:
        "Đường tròn $(O)$ bán kính $R = 13$ cm. Dây $CD$ cách tâm $5$ cm. Tính độ dài dây $CD$.",
      steps: [
        "Kẻ $OK \\perp CD$ tại $K$ thì $K$ là trung điểm của $CD$ và $OK = 5$ cm.",
        "Tam giác $OKC$ vuông tại $K$: $KC^2 = OC^2 - OK^2 = 13^2 - 5^2 = 169 - 25 = 144$.",
        "Suy ra $KC = \\sqrt{144} = 12$ cm.",
        "Vậy $CD = 2 \\cdot KC = 24$ cm.",
      ],
    },
    {
      title: "So sánh hai dây qua khoảng cách tới tâm",
      prompt:
        "Trong đường tròn $(O)$, dây $AB$ cách tâm $4$ cm, dây $CD$ cách tâm $6$ cm. Hãy so sánh độ " +
        "dài hai dây.",
      steps: [
        "Dây nào gần tâm hơn (khoảng cách nhỏ hơn) thì dài hơn.",
        "Ta có $OH_{AB} = 4 < 6 = OH_{CD}$ nên $AB$ gần tâm hơn $CD$.",
        "Vậy $AB > CD$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Lấy luôn nửa độ dài dây bằng cách lấy dây trừ khoảng cách, ví dụ $HA = 8 - 3 = 5$.",
      right: "Nửa dây là $HA = \\dfrac{AB}{2}$; bán kính tính bằng Pythagore $R^2 = OH^2 + HA^2$.",
      note: "Khoảng cách $OH$, nửa dây $HA$ và bán kính $R$ lập thành một tam giác vuông.",
    },
    {
      wrong: "Bỏ điều kiện “dây không đi qua tâm” khi dùng Định lý 2.",
      right: "Đường kính đi qua trung điểm của một dây <b>không qua tâm</b> mới chắc chắn vuông góc với dây.",
      note: "Nếu dây là một đường kính thì trung điểm của nó chính là tâm $O$.",
    },
    {
      wrong: "Cho rằng dây càng dài thì càng xa tâm.",
      right: "Ngược lại: dây càng <b>lớn</b> thì càng <b>gần</b> tâm; dây bằng nhau thì cách đều tâm.",
      note: "Đường kính là dây lớn nhất và có khoảng cách tới tâm bằng $0$.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Trong một đường tròn, dây lớn nhất là dây nào và có độ dài bằng bao nhiêu theo bán kính $R$?",
      hints: ["Dây lớn nhất luôn đi qua tâm."],
      solution: "Dây lớn nhất là <b>đường kính</b>; nó đi qua tâm và có độ dài bằng $2R$.",
    },
    {
      level: "Nhận biết",
      prompt:
        "Đường tròn $(O)$ có đường kính vuông góc với dây $AB$ tại $H$, biết $AB = 10$ cm. Tính $HA$.",
      hints: ["Đường kính vuông góc với dây thì đi qua trung điểm dây."],
      solution: "$H$ là trung điểm $AB$ nên $HA = \\dfrac{AB}{2} = \\dfrac{10}{2} = 5$ cm.",
    },
    {
      level: "Nhận biết",
      prompt:
        "Hai dây $AB$ và $CD$ của đường tròn $(O)$ cách đều tâm. Hỏi $AB$ và $CD$ có quan hệ gì?",
      hints: ["Hai dây cách đều tâm thì bằng nhau."],
      solution: "Vì cách đều tâm nên $AB = CD$.",
    },
    {
      level: "Thông hiểu",
      prompt:
        "Đường tròn $(O)$ bán kính $R = 5$ cm có dây $AB$ cách tâm $3$ cm. Tính độ dài dây $AB$.",
      hints: ["Kẻ $OH \\perp AB$ tại trung điểm $H$.", "Dùng Pythagore: $HA^2 = R^2 - OH^2$."],
      solution:
        "$HA^2 = R^2 - OH^2 = 5^2 - 3^2 = 16 \\Rightarrow HA = 4$ cm. Vậy $AB = 2 \\cdot HA = 8$ cm.",
    },
    {
      level: "Thông hiểu",
      prompt:
        "Đường tròn $(O)$ có dây $MN = 12$ cm và bán kính $R = 10$ cm. Tính khoảng cách từ tâm $O$ đến " +
        "dây $MN$.",
      hints: ["Khoảng cách $OH$ đi qua trung điểm của dây.", "Nửa dây bằng $\\dfrac{MN}{2} = 6$ cm."],
      solution:
        "$OH^2 = R^2 - \\left(\\dfrac{MN}{2}\\right)^2 = 10^2 - 6^2 = 64 \\Rightarrow OH = 8$ cm.",
    },
    {
      level: "Thông hiểu",
      prompt:
        "Cho đường tròn $(O)$, dây $AB$ không đi qua tâm. Đường kính $CD$ đi qua trung điểm $M$ của " +
        "$AB$. Chứng minh $CD \\perp AB$.",
      hints: ["Áp dụng định lý về đường kính đi qua trung điểm của một dây không qua tâm."],
      solution:
        "Vì $AB$ là dây không đi qua tâm và đường kính $CD$ đi qua trung điểm $M$ của $AB$, theo Định " +
        "lý 2 ta có $CD \\perp AB$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Đường tròn $(O)$ bán kính $R = 13$ cm có hai dây song song $AB = 24$ cm và $CD = 10$ cm nằm " +
        "ở hai phía của tâm. Tính khoảng cách giữa hai dây.",
      hints: [
        "Tính khoảng cách từ tâm đến mỗi dây bằng Pythagore.",
        "Hai dây ở hai phía tâm nên cộng hai khoảng cách lại.",
      ],
      solution:
        "Khoảng cách từ $O$ đến $AB$: $\\sqrt{13^2 - 12^2} = \\sqrt{25} = 5$ cm. Khoảng cách từ $O$ đến " +
        "$CD$: $\\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$ cm. Hai dây ở hai phía tâm nên khoảng cách giữa " +
        "chúng là $5 + 12 = 17$ cm.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Đường tròn $(O)$ bán kính $R = 5$ cm có hai dây $AB$ và $CD$ bằng nhau, mỗi dây dài $6$ cm. " +
        "Chứng minh hai dây cách đều tâm và tính khoảng cách đó.",
      hints: [
        "Hai dây bằng nhau thì cách đều tâm.",
        "Tính khoảng cách bằng Pythagore với nửa dây bằng $3$ cm.",
      ],
      solution:
        "Vì $AB = CD$ nên theo định lý, hai dây cách đều tâm $O$. Khoảng cách đó là " +
        "$\\sqrt{R^2 - \\left(\\dfrac{6}{2}\\right)^2} = \\sqrt{5^2 - 3^2} = \\sqrt{16} = 4$ cm.",
    },
  ],

  quiz: [
    {
      type: "mc",
      q: "Trong một đường tròn, đường kính vuông góc với một dây thì:",
      choices: [
        "đi qua trung điểm của dây ấy",
        "song song với dây ấy",
        "có độ dài bằng dây ấy",
        "cắt dây ấy tại một đầu mút",
      ],
      answer: 0,
      explain: "Theo Định lý 1: đường kính vuông góc với một dây thì đi qua trung điểm của dây đó.",
    },
    {
      type: "fill",
      q: "Đường tròn $(O)$ bán kính $R = 5$ cm có dây cách tâm $3$ cm. Độ dài dây bằng bao nhiêu cm?",
      answer: 8,
      explain: "Nửa dây $= \\sqrt{5^2 - 3^2} = 4$ cm, nên dây $= 2 \\cdot 4 = 8$ cm.",
    },
    {
      type: "mc",
      q: "Hai dây của một đường tròn bằng nhau thì:",
      choices: [
        "dây nào cũng đi qua tâm",
        "cách đều tâm",
        "vuông góc với nhau",
        "có khoảng cách tới tâm khác nhau",
      ],
      answer: 1,
      explain: "Trong một đường tròn, hai dây bằng nhau thì cách đều tâm và ngược lại.",
    },
  ],
});
