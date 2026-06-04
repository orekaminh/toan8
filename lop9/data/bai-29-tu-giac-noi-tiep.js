/* Bài 29. Tứ giác nội tiếp
   Chương IX (Toán 9, Kết nối tri thức, Tập 2) */
MATH9.registerLesson({
  id: "bai-29-tu-giac-noi-tiep",
  chapter: "Chương IX. Đường tròn ngoại tiếp và đường tròn nội tiếp",
  order: 3,
  title: "Bài 29. Tứ giác nội tiếp",

  objectives: [
    "Nhận biết tứ giác nội tiếp là tứ giác có bốn đỉnh cùng nằm trên một đường tròn.",
    "Hiểu và vận dụng tính chất: tổng hai góc đối của tứ giác nội tiếp bằng $180^\\circ$.",
    "Dùng dấu hiệu nhận biết để chứng minh một tứ giác là tứ giác nội tiếp.",
  ],

  intro: {
    text:
      "Khi vẽ một đường tròn rồi lấy bốn điểm $A, B, C, D$ trên đó, ta được tứ giác $ABCD$ có cả bốn đỉnh " +
      "nằm trên cùng một đường tròn. Đó là một <b>tứ giác nội tiếp</b>. Điều thú vị là dù bốn điểm ở vị trí " +
      "nào, <b>tổng hai góc đối</b> của tứ giác luôn bằng $180^\\circ$. Tính chất này giúp ta tính nhanh các " +
      "góc còn lại khi đã biết một vài góc.",
    math: "\\widehat{A} + \\widehat{C} = 180^\\circ",
  },

  theory: [
    {
      heading: "1. Khái niệm tứ giác nội tiếp",
      html:
        "<b>Tứ giác nội tiếp</b> là tứ giác có <b>bốn đỉnh</b> cùng nằm trên một đường tròn. Đường tròn đó " +
        "được gọi là <b>đường tròn ngoại tiếp</b> tứ giác.<br>" +
        "Ví dụ, nếu bốn điểm $A, B, C, D$ cùng thuộc một đường tròn thì $ABCD$ là tứ giác nội tiếp.",
    },
    {
      heading: "2. Tính chất (tổng hai góc đối)",
      html:
        "Trong một tứ giác nội tiếp, <b>tổng số đo hai góc đối nhau bằng</b> $180^\\circ$.<br>" +
        "Với tứ giác $ABCD$ nội tiếp, ta có $\\widehat{A} + \\widehat{C} = 180^\\circ$ và " +
        "$\\widehat{B} + \\widehat{D} = 180^\\circ$. Nhờ đó, biết một góc ta suy ngay ra góc đối của nó.",
      formula: "\\widehat{A} + \\widehat{C} = 180^\\circ,\\quad \\widehat{B} + \\widehat{D} = 180^\\circ",
    },
    {
      heading: "3. Dấu hiệu nhận biết",
      html:
        "Nếu một tứ giác có <b>tổng hai góc đối bằng</b> $180^\\circ$ thì tứ giác đó <b>nội tiếp</b> được một " +
        "đường tròn.<br>" +
        "Đây là chiều ngược lại của tính chất trên, thường dùng để <b>chứng minh</b> một tứ giác là tứ giác " +
        "nội tiếp.",
    },
  ],

  examples: [
    {
      title: "Tính góc đối khi biết một góc",
      prompt: "Tứ giác $ABCD$ nội tiếp một đường tròn, biết $\\widehat{A} = 70^\\circ$. Tính $\\widehat{C}$.",
      steps: [
        "Vì $ABCD$ nội tiếp nên $\\widehat{A} + \\widehat{C} = 180^\\circ$.",
        "Suy ra $\\widehat{C} = 180^\\circ - \\widehat{A} = 180^\\circ - 70^\\circ = 110^\\circ$.",
        "Vậy $\\widehat{C} = 110^\\circ$.",
      ],
    },
    {
      title: "Tính hai góc còn lại",
      prompt:
        "Tứ giác $ABCD$ nội tiếp, biết $\\widehat{A} = 70^\\circ$ và $\\widehat{B} = 85^\\circ$. " +
        "Tính $\\widehat{C}$ và $\\widehat{D}$.",
      steps: [
        "$\\widehat{C} = 180^\\circ - \\widehat{A} = 180^\\circ - 70^\\circ = 110^\\circ$.",
        "$\\widehat{D} = 180^\\circ - \\widehat{B} = 180^\\circ - 85^\\circ = 95^\\circ$.",
        "Vậy $\\widehat{C} = 110^\\circ$ và $\\widehat{D} = 95^\\circ$.",
      ],
    },
    {
      title: "Tìm góc khi biết tỉ lệ hai góc đối",
      prompt:
        "Tứ giác $ABCD$ nội tiếp, biết $\\widehat{A} = x$ và $\\widehat{C} = 2x$. Tính $x$ rồi suy ra " +
        "$\\widehat{A},\\ \\widehat{C}$.",
      steps: [
        "Hai góc đối nên $\\widehat{A} + \\widehat{C} = 180^\\circ$, tức $x + 2x = 180^\\circ$.",
        "$3x = 180^\\circ \\Rightarrow x = 60^\\circ$.",
        "Do đó $\\widehat{A} = 60^\\circ$ và $\\widehat{C} = 2 \\cdot 60^\\circ = 120^\\circ$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Lấy tổng <b>hai góc kề</b> (như $\\widehat{A} + \\widehat{B}$) bằng $180^\\circ$.",
      right: "Tính chất áp dụng cho <b>hai góc đối</b>: $\\widehat{A} + \\widehat{C} = 180^\\circ$.",
      note: "Trong $ABCD$, cặp góc đối là $(A; C)$ và $(B; D)$.",
    },
    {
      wrong: "Cho rằng <b>mọi</b> tứ giác đều có tổng hai góc đối bằng $180^\\circ$.",
      right: "Chỉ <b>tứ giác nội tiếp</b> mới có tính chất này.",
      note: "Một tứ giác bất kì chỉ chắc chắn có tổng <b>bốn</b> góc bằng $360^\\circ$.",
    },
    {
      wrong: "Thấy tổng hai góc đối bằng $180^\\circ$ nhưng không dám kết luận tứ giác nội tiếp.",
      right: "Theo <b>dấu hiệu nhận biết</b>, tổng hai góc đối bằng $180^\\circ$ thì tứ giác nội tiếp được.",
      note: "Đây chính là chiều ngược của tính chất.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Tứ giác nội tiếp là tứ giác như thế nào?",
      hints: ["Nhớ vị trí của bốn đỉnh so với một đường tròn."],
      solution: "Là tứ giác có <b>bốn đỉnh cùng nằm trên một đường tròn</b>.",
    },
    {
      level: "Nhận biết",
      prompt: "Tứ giác $ABCD$ nội tiếp, biết $\\widehat{A} = 80^\\circ$. Tính $\\widehat{C}$.",
      hints: ["$\\widehat{A}$ và $\\widehat{C}$ là hai góc đối, có tổng $180^\\circ$."],
      solution: "$\\widehat{C} = 180^\\circ - 80^\\circ = 100^\\circ$.",
    },
    {
      level: "Nhận biết",
      prompt: "Tứ giác $ABCD$ nội tiếp, biết $\\widehat{B} = 110^\\circ$. Tính $\\widehat{D}$.",
      hints: ["$\\widehat{B}$ và $\\widehat{D}$ là hai góc đối."],
      solution: "$\\widehat{D} = 180^\\circ - 110^\\circ = 70^\\circ$.",
    },
    {
      level: "Thông hiểu",
      prompt:
        "Tứ giác $ABCD$ nội tiếp, biết $\\widehat{A} = 95^\\circ$ và $\\widehat{B} = 105^\\circ$. " +
        "Tính $\\widehat{C}$ và $\\widehat{D}$.",
      hints: ["Dùng $\\widehat{A} + \\widehat{C} = 180^\\circ$ và $\\widehat{B} + \\widehat{D} = 180^\\circ$."],
      solution:
        "$\\widehat{C} = 180^\\circ - 95^\\circ = 85^\\circ$; $\\widehat{D} = 180^\\circ - 105^\\circ = 75^\\circ$.",
    },
    {
      level: "Thông hiểu",
      prompt:
        "Tứ giác $ABCD$ nội tiếp, biết $\\widehat{A} = x$ và $\\widehat{C} = 3x$. Tính $x$, " +
        "$\\widehat{A}$ và $\\widehat{C}$.",
      hints: ["Hai góc đối có tổng $180^\\circ$: $x + 3x = 180^\\circ$."],
      solution:
        "$4x = 180^\\circ \\Rightarrow x = 45^\\circ$. Vậy $\\widehat{A} = 45^\\circ$, " +
        "$\\widehat{C} = 3 \\cdot 45^\\circ = 135^\\circ$.",
    },
    {
      level: "Thông hiểu",
      prompt:
        "Một tứ giác có hai góc đối là $90^\\circ$ và $90^\\circ$. Tứ giác đó có nội tiếp được đường tròn " +
        "không? Vì sao?",
      hints: ["Tính tổng hai góc đối rồi đối chiếu với dấu hiệu nhận biết."],
      solution:
        "Tổng hai góc đối $= 90^\\circ + 90^\\circ = 180^\\circ$ nên theo dấu hiệu nhận biết, tứ giác " +
        "<b>nội tiếp</b> được một đường tròn.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Tứ giác $ABCD$ nội tiếp, biết $\\widehat{A} = 2x$ và $\\widehat{C} = 3x$. Tính $x$ rồi suy ra " +
        "$\\widehat{A}$ và $\\widehat{C}$.",
      hints: ["$\\widehat{A} + \\widehat{C} = 180^\\circ$, tức $2x + 3x = 180^\\circ$.", "Giải tìm $x$ rồi thay lại."],
      solution:
        "$5x = 180^\\circ \\Rightarrow x = 36^\\circ$. Vậy $\\widehat{A} = 2 \\cdot 36^\\circ = 72^\\circ$, " +
        "$\\widehat{C} = 3 \\cdot 36^\\circ = 108^\\circ$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Tứ giác $ABCD$ nội tiếp, biết $\\widehat{A} = 80^\\circ$ và $\\widehat{B} = 70^\\circ$. " +
        "Tính tất cả các góc còn lại và kiểm tra tổng bốn góc.",
      hints: ["Tính $\\widehat{C}$, $\\widehat{D}$ bằng tính chất hai góc đối.", "Tổng bốn góc của tứ giác là $360^\\circ$."],
      solution:
        "$\\widehat{C} = 180^\\circ - 80^\\circ = 100^\\circ$; $\\widehat{D} = 180^\\circ - 70^\\circ = 110^\\circ$. " +
        "Kiểm tra: $80^\\circ + 70^\\circ + 100^\\circ + 110^\\circ = 360^\\circ$ (đúng).",
    },
  ],

  quiz: [
    { type: "mc", q: "Tứ giác $ABCD$ nội tiếp, biết $\\widehat{A} = 70^\\circ$. Khi đó $\\widehat{C}$ bằng?",
      choices: ["$70^\\circ$", "$110^\\circ$", "$90^\\circ$", "$130^\\circ$"], answer: 1,
      explain: "Hai góc đối có tổng $180^\\circ$ nên $\\widehat{C} = 180^\\circ - 70^\\circ = 110^\\circ$." },
    { type: "fill", q: "Tứ giác $ABCD$ nội tiếp, biết $\\widehat{B} = 85^\\circ$. Số đo $\\widehat{D}$ (theo độ) là bao nhiêu?",
      answer: 95, explain: "$\\widehat{D} = 180^\\circ - 85^\\circ = 95^\\circ$." },
    { type: "fill", q: "Tứ giác $ABCD$ nội tiếp có $\\widehat{A} = x$, $\\widehat{C} = 2x$. Giá trị của $x$ (theo độ) là bao nhiêu?",
      answer: 60, explain: "$x + 2x = 180^\\circ \\Rightarrow 3x = 180^\\circ \\Rightarrow x = 60^\\circ$." },
  ],
});
