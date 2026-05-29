/* Bài 10. Tứ giác — Chương III. Tứ giác (Kết nối tri thức, Tập 1) */
MATH8.registerLesson({
  id: "bai-10-tu-giac",
  chapter: "Chương III. Tứ giác",
  order: 1,
  title: "Bài 10. Tứ giác",

  objectives: [
    "Nhận biết tứ giác, tứ giác lồi và các yếu tố: đỉnh, cạnh, góc, đường chéo.",
    "Phát biểu và vận dụng được định lí tổng các góc của một tứ giác bằng $360^\\circ$.",
    "Tính được số đo một góc của tứ giác khi biết ba góc còn lại.",
  ],

  intro: {
    text:
      "Con diều, mặt bàn, ô cửa sổ, hay một mảnh đất bốn cạnh… đều có dạng <b>tứ giác</b>. " +
      "Trong tam giác, tổng ba góc luôn bằng $180^\\circ$. Vậy với tứ giác (bốn góc) thì tổng các góc " +
      "bằng bao nhiêu? Hãy kéo thử hình bên dưới để khám phá.",
    math: "\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D} = \\;?",
  },

  theory: [
    {
      heading: "1. Tứ giác và tứ giác lồi",
      html:
        "<b>Tứ giác $ABCD$</b> là hình gồm bốn đoạn thẳng $AB, BC, CD, DA$, trong đó không có hai đoạn " +
        "nào cùng nằm trên một đường thẳng. Bốn điểm $A, B, C, D$ là <b>đỉnh</b>; bốn đoạn là <b>cạnh</b>.<br>" +
        "<b>Tứ giác lồi</b> là tứ giác luôn nằm về một phía của đường thẳng chứa bất kì cạnh nào của nó. " +
        "(Từ nay, nói 'tứ giác' nghĩa là tứ giác lồi.)<br>" +
        "Hai đoạn $AC$ và $BD$ nối hai đỉnh đối nhau gọi là hai <b>đường chéo</b>.",
    },
    {
      heading: "2. Định lí tổng các góc của một tứ giác",
      html:
        "Một đường chéo chia tứ giác thành <b>hai tam giác</b>, mỗi tam giác có tổng ba góc $180^\\circ$, " +
        "nên tổng các góc của tứ giác là $2 \\times 180^\\circ = 360^\\circ$.",
      formula: "\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D} = 360^\\circ",
    },
  ],

  visual: { type: "geometry", config: { kind: "angle-sum" } },

  examples: [
    {
      title: "Tìm góc thứ tư",
      prompt: "Tứ giác $ABCD$ có $\\widehat{A} = 110^\\circ$, $\\widehat{B} = 100^\\circ$, $\\widehat{C} = 75^\\circ$. Tính $\\widehat{D}$.",
      steps: [
        "Tổng bốn góc bằng $360^\\circ$.",
        "$\\widehat{D} = 360^\\circ - (\\widehat{A} + \\widehat{B} + \\widehat{C})$.",
        "$\\widehat{D} = 360^\\circ - (110^\\circ + 100^\\circ + 75^\\circ) = 360^\\circ - 285^\\circ = 75^\\circ$.",
      ],
    },
    {
      title: "Hai góc chưa biết bằng nhau",
      prompt: "Tứ giác $MNPQ$ có $\\widehat{M} = 120^\\circ$, $\\widehat{N} = 80^\\circ$ và $\\widehat{P} = \\widehat{Q}$. Tính $\\widehat{P}$ và $\\widehat{Q}$.",
      steps: [
        "Tổng bốn góc: $\\widehat{P} + \\widehat{Q} = 360^\\circ - (120^\\circ + 80^\\circ) = 160^\\circ$.",
        "Vì $\\widehat{P} = \\widehat{Q}$ nên mỗi góc bằng $160^\\circ : 2 = 80^\\circ$.",
        "Vậy $\\widehat{P} = \\widehat{Q} = 80^\\circ$.",
      ],
    },
    {
      title: "Các góc tỉ lệ",
      prompt: "Bốn góc của một tứ giác lần lượt tỉ lệ với $1 : 2 : 3 : 4$. Tính số đo mỗi góc.",
      steps: [
        "Gọi bốn góc là $x, 2x, 3x, 4x$.",
        "Tổng: $x + 2x + 3x + 4x = 360^\\circ$, tức $10x = 360^\\circ$.",
        "Suy ra $x = 36^\\circ$.",
        "Bốn góc là $36^\\circ,\\ 72^\\circ,\\ 108^\\circ,\\ 144^\\circ$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Dùng tổng các góc bằng $180^\\circ$ (nhầm với tam giác).",
      right: "Tứ giác có tổng bốn góc bằng $360^\\circ$.",
      note: "Tam giác $180^\\circ$, tứ giác $360^\\circ$ (vì ghép từ hai tam giác).",
    },
    {
      wrong: "Khi $\\widehat{P} = \\widehat{Q}$ lại quên chia đôi, lấy luôn $\\widehat{P} = 160^\\circ$.",
      right: "$\\widehat{P} + \\widehat{Q} = 160^\\circ$ nên mỗi góc $= 80^\\circ$.",
      note: "Hai góc bằng nhau thì mỗi góc bằng một nửa tổng của chúng.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Tứ giác $ABCD$ có $\\widehat{A} = 90^\\circ$, $\\widehat{B} = 100^\\circ$, $\\widehat{C} = 80^\\circ$. Tính $\\widehat{D}$.",
      hints: ["Tổng bốn góc bằng $360^\\circ$."],
      solution: "$\\widehat{D} = 360^\\circ - (90^\\circ + 100^\\circ + 80^\\circ) = 360^\\circ - 270^\\circ = 90^\\circ$.",
    },
    {
      level: "Nhận biết",
      prompt: "Kể tên hai đường chéo của tứ giác $ABCD$.",
      hints: ["Đường chéo nối hai đỉnh đối nhau."],
      solution: "Hai đường chéo là $AC$ và $BD$.",
    },
    {
      level: "Nhận biết",
      prompt: "Một tứ giác có ba góc đều bằng $100^\\circ$. Tính góc còn lại.",
      hints: ["Tổng ba góc đã biết $= 3 \\times 100^\\circ$, rồi lấy $360^\\circ$ trừ đi."],
      solution: "Góc còn lại $= 360^\\circ - 3 \\times 100^\\circ = 360^\\circ - 300^\\circ = 60^\\circ$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tứ giác $ABCD$ có $\\widehat{A} = 95^\\circ$, $\\widehat{C} = 85^\\circ$ và $\\widehat{B} = \\widehat{D}$. Tính $\\widehat{B}$, $\\widehat{D}$.",
      hints: ["$\\widehat{B} + \\widehat{D} = 360^\\circ - (\\widehat{A} + \\widehat{C})$.", "Vì $\\widehat{B} = \\widehat{D}$, chia đôi tổng."],
      solution: "$\\widehat{B} + \\widehat{D} = 360^\\circ - (95^\\circ + 85^\\circ) = 180^\\circ$. Mỗi góc $= 90^\\circ$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Bốn góc của tứ giác tỉ lệ với $2 : 3 : 4 : 6$. Tính số đo mỗi góc.",
      hints: ["Gọi các góc là $2x, 3x, 4x, 6x$.", "Tổng bằng $360^\\circ$ để tìm $x$."],
      solution: "$2x + 3x + 4x + 6x = 360^\\circ \\Rightarrow 15x = 360^\\circ \\Rightarrow x = 24^\\circ$. Các góc: $48^\\circ, 72^\\circ, 96^\\circ, 144^\\circ$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tứ giác $ABCD$ có $\\widehat{A} = 80^\\circ$. Góc $\\widehat{B}$ lớn hơn $\\widehat{A}$ là $20^\\circ$, còn $\\widehat{C} = \\widehat{D}$. Tính $\\widehat{C}$.",
      hints: ["$\\widehat{B} = 80^\\circ + 20^\\circ = 100^\\circ$.", "$\\widehat{C} + \\widehat{D} = 360^\\circ - (\\widehat{A} + \\widehat{B})$, rồi chia đôi."],
      solution: "$\\widehat{B} = 100^\\circ$. $\\widehat{C} + \\widehat{D} = 360^\\circ - 180^\\circ = 180^\\circ$, nên $\\widehat{C} = \\widehat{D} = 90^\\circ$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Một mảnh đất hình tứ giác $ABCD$ có $\\widehat{A} = 85^\\circ$, $\\widehat{B} = 95^\\circ$. Hai góc $\\widehat{C}$ và $\\widehat{D}$ hơn kém nhau $20^\\circ$ (với $\\widehat{C} > \\widehat{D}$). Tính $\\widehat{C}$ và $\\widehat{D}$.",
      hints: [
        "$\\widehat{C} + \\widehat{D} = 360^\\circ - (85^\\circ + 95^\\circ) = 180^\\circ$.",
        "Đặt $\\widehat{D} = y$ thì $\\widehat{C} = y + 20^\\circ$; giải $y + (y + 20^\\circ) = 180^\\circ$.",
      ],
      solution: "$\\widehat{C} + \\widehat{D} = 180^\\circ$. Với $\\widehat{C} = \\widehat{D} + 20^\\circ$: $2\\widehat{D} + 20^\\circ = 180^\\circ \\Rightarrow \\widehat{D} = 80^\\circ$, $\\widehat{C} = 100^\\circ$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Tứ giác $ABCD$ có $\\widehat{A} = \\widehat{B}$ và $\\widehat{C} = \\widehat{D}$. Biết $\\widehat{A}$ hơn $\\widehat{C}$ là $40^\\circ$. Tính các góc của tứ giác.",
      hints: [
        "$\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D} = 2\\widehat{A} + 2\\widehat{C} = 360^\\circ$ nên $\\widehat{A} + \\widehat{C} = 180^\\circ$.",
        "Kết hợp $\\widehat{A} - \\widehat{C} = 40^\\circ$ để tìm $\\widehat{A}$ và $\\widehat{C}$.",
      ],
      solution:
        "Từ $\\widehat{A} + \\widehat{C} = 180^\\circ$ và $\\widehat{A} - \\widehat{C} = 40^\\circ$ suy ra $\\widehat{A} = 110^\\circ$, $\\widehat{C} = 70^\\circ$. " +
        "Vậy $\\widehat{A} = \\widehat{B} = 110^\\circ$ và $\\widehat{C} = \\widehat{D} = 70^\\circ$.",
    },
  ],

  quiz: [
    { type: "fill", q: "Tổng bốn góc của một tứ giác bằng bao nhiêu độ? (chỉ điền số)", answer: 360, explain: "Tứ giác ghép từ hai tam giác nên tổng $= 2 \\cdot 180^\\circ$." },
    { type: "fill", q: "Tứ giác $ABCD$ có $\\widehat{A} = 90^\\circ$, $\\widehat{B} = 100^\\circ$, $\\widehat{C} = 80^\\circ$. Số đo $\\widehat{D}$ (độ)?", answer: 90, explain: "$360 - 90 - 100 - 80 = 90$." },
    { type: "mc", q: "Hai đường chéo của tứ giác $ABCD$ là?", choices: ["$AC$ và $BD$", "$AB$ và $CD$", "$AD$ và $BC$", "$AB$ và $BC$"], answer: 0, explain: "Đường chéo nối hai đỉnh đối nhau." },
  ],
});
