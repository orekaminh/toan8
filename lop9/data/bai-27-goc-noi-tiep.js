/* Bài 27. Góc nội tiếp
   Chương IX (Toán 9, Kết nối tri thức, Tập 2) */
MATH9.registerLesson({
  id: "bai-27-goc-noi-tiep",
  visual: { type: "inscribed", config: {} },
  chapter: "Chương IX. Đường tròn ngoại tiếp và đường tròn nội tiếp",
  order: 1,
  title: "Bài 27. Góc nội tiếp",

  objectives: [
    "Nhận biết góc ở tâm, góc nội tiếp và cung bị chắn của chúng.",
    "Tính số đo góc nội tiếp dựa vào số đo cung bị chắn hoặc góc ở tâm cùng chắn một cung.",
    "Vận dụng hệ quả: các góc nội tiếp cùng chắn một cung thì bằng nhau và góc nội tiếp chắn nửa đường tròn là góc vuông.",
  ],

  intro: {
    text:
      "Quan sát một đường tròn tâm $O$. Khi đỉnh của góc nằm <b>tại tâm</b> $O$ ta có <b>góc ở tâm</b>; " +
      "khi đỉnh của góc nằm <b>trên đường tròn</b> và hai cạnh là hai dây cung ta có <b>góc nội tiếp</b>. " +
      "Điều thú vị là hai loại góc này cùng chắn một cung lại liên hệ với nhau rất gọn: góc nội tiếp luôn " +
      "bằng <b>nửa</b> góc ở tâm cùng chắn cung đó. Nhờ vậy chỉ cần biết một góc, ta suy ra ngay góc kia.",
    math: "\\widehat{BAC} = \\dfrac{1}{2}\\,\\widehat{BOC}",
  },

  theory: [
    {
      heading: "1. Góc ở tâm và số đo cung",
      html:
        "<b>Góc ở tâm</b> là góc có đỉnh trùng với <b>tâm</b> của đường tròn. Mỗi góc ở tâm chắn một cung " +
        "nằm bên trong góc đó.<br>" +
        "<b>Số đo của cung bị chắn bằng số đo của góc ở tâm</b> chắn cung đó. Cả đường tròn ứng với " +
        "$360^\\circ$, nửa đường tròn ứng với $180^\\circ$.",
      formula: "\\overset{\\frown}{BC} = \\widehat{BOC}",
    },
    {
      heading: "2. Góc nội tiếp và định lý",
      html:
        "<b>Góc nội tiếp</b> là góc có đỉnh nằm <b>trên đường tròn</b> và hai cạnh chứa hai dây cung của " +
        "đường tròn đó. Cung nằm bên trong góc gọi là <b>cung bị chắn</b>.<br>" +
        "<b>Định lý:</b> Trong một đường tròn, số đo của góc nội tiếp bằng <b>nửa</b> số đo cung bị chắn. " +
        "Do đó góc nội tiếp cũng bằng nửa góc ở tâm cùng chắn một cung.",
      formula: "\\widehat{BAC} = \\dfrac{1}{2}\\,\\overset{\\frown}{BC} = \\dfrac{1}{2}\\,\\widehat{BOC}",
    },
    {
      heading: "3. Hệ quả",
      html:
        "Trong một đường tròn:<br>" +
        "• Các <b>góc nội tiếp cùng chắn một cung</b> (hoặc chắn các cung bằng nhau) thì <b>bằng nhau</b>.<br>" +
        "• Góc nội tiếp <b>chắn nửa đường tròn</b> (tức cạnh đi qua hai đầu một đường kính) là <b>góc vuông</b> " +
        "$90^\\circ$, vì nửa đường tròn có số đo $180^\\circ$ và $\\dfrac{180^\\circ}{2} = 90^\\circ$.",
      formula: "\\widehat{BAC} = \\dfrac{1}{2}\\cdot 180^\\circ = 90^\\circ",
    },
  ],

  examples: [
    {
      title: "Góc ở tâm suy ra góc nội tiếp",
      prompt:
        "Đường tròn $(O)$ có góc ở tâm $\\widehat{BOC} = 100^\\circ$ chắn cung $BC$. Tính góc nội tiếp " +
        "$\\widehat{BAC}$ cùng chắn cung $BC$.",
      steps: [
        "Số đo cung bị chắn bằng góc ở tâm: $\\overset{\\frown}{BC} = 100^\\circ$.",
        "Góc nội tiếp bằng nửa cung bị chắn: $\\widehat{BAC} = \\dfrac{1}{2}\\cdot 100^\\circ$.",
        "Vậy $\\widehat{BAC} = 50^\\circ$.",
      ],
    },
    {
      title: "Góc nội tiếp suy ra số đo cung",
      prompt:
        "Trong đường tròn $(O)$, góc nội tiếp $\\widehat{BAC} = 35^\\circ$ chắn cung $BC$. Tính số đo " +
        "cung $BC$ và góc ở tâm $\\widehat{BOC}$.",
      steps: [
        "Vì góc nội tiếp bằng nửa cung bị chắn nên cung bị chắn gấp đôi góc nội tiếp.",
        "$\\overset{\\frown}{BC} = 2 \\cdot 35^\\circ = 70^\\circ$.",
        "Góc ở tâm bằng số đo cung: $\\widehat{BOC} = 70^\\circ$.",
      ],
    },
    {
      title: "Góc nội tiếp chắn nửa đường tròn",
      prompt:
        "$BC$ là đường kính của đường tròn $(O)$, điểm $A$ nằm trên đường tròn. Tính góc $\\widehat{BAC}$.",
      steps: [
        "Vì $BC$ là đường kính nên cung $BC$ là nửa đường tròn, $\\overset{\\frown}{BC} = 180^\\circ$.",
        "Góc nội tiếp chắn cung đó: $\\widehat{BAC} = \\dfrac{1}{2}\\cdot 180^\\circ$.",
        "Vậy $\\widehat{BAC} = 90^\\circ$ — tam giác $ABC$ vuông tại $A$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Cho rằng góc nội tiếp <b>bằng</b> số đo cung bị chắn.",
      right: "Góc nội tiếp chỉ bằng <b>nửa</b> số đo cung bị chắn: $\\widehat{BAC} = \\dfrac{1}{2}\\,\\overset{\\frown}{BC}$.",
      note: "Cung bị chắn luôn gấp đôi góc nội tiếp chắn nó.",
    },
    {
      wrong: "Nhân đôi (thay vì chia đôi) khi tính góc nội tiếp từ góc ở tâm.",
      right: "Góc nội tiếp $= \\dfrac{1}{2}$ góc ở tâm cùng chắn một cung; còn từ góc nội tiếp tìm cung thì mới nhân $2$.",
      note: "Nhớ rõ chiều: tâm $\\to$ nội tiếp là chia $2$, nội tiếp $\\to$ cung là nhân $2$.",
    },
    {
      wrong: "Gọi góc có đỉnh ở tâm $O$ là góc nội tiếp.",
      right: "Góc nội tiếp có đỉnh nằm <b>trên đường tròn</b>; đỉnh ở tâm là <b>góc ở tâm</b>.",
      note: "Xác định vị trí đỉnh trước khi áp dụng công thức.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Góc ở tâm $\\widehat{BOC} = 80^\\circ$ chắn cung $BC$. Số đo cung $BC$ bằng bao nhiêu?",
      hints: ["Số đo cung bị chắn bằng số đo góc ở tâm."],
      solution: "$\\overset{\\frown}{BC} = \\widehat{BOC} = 80^\\circ$.",
    },
    {
      level: "Nhận biết",
      prompt: "Một góc nội tiếp chắn cung có số đo $120^\\circ$. Tính số đo góc nội tiếp đó.",
      hints: ["Góc nội tiếp bằng nửa cung bị chắn."],
      solution: "Góc nội tiếp $= \\dfrac{1}{2}\\cdot 120^\\circ = 60^\\circ$.",
    },
    {
      level: "Nhận biết",
      prompt: "Góc nội tiếp chắn nửa đường tròn (chắn đường kính) có số đo bằng bao nhiêu?",
      hints: ["Nửa đường tròn có số đo $180^\\circ$."],
      solution: "Góc nội tiếp $= \\dfrac{1}{2}\\cdot 180^\\circ = 90^\\circ$ (góc vuông).",
    },
    {
      level: "Thông hiểu",
      prompt:
        "Đường tròn $(O)$ có góc ở tâm $\\widehat{BOC} = 100^\\circ$. Tính góc nội tiếp $\\widehat{BAC}$ " +
        "cùng chắn cung $BC$.",
      hints: ["Góc nội tiếp bằng nửa góc ở tâm cùng chắn một cung."],
      solution: "$\\widehat{BAC} = \\dfrac{1}{2}\\,\\widehat{BOC} = \\dfrac{1}{2}\\cdot 100^\\circ = 50^\\circ$.",
    },
    {
      level: "Thông hiểu",
      prompt:
        "Góc nội tiếp $\\widehat{BAC} = 35^\\circ$ chắn cung $BC$ của đường tròn $(O)$. Tính số đo cung " +
        "$BC$ và góc ở tâm $\\widehat{BOC}$.",
      hints: ["Cung bị chắn gấp đôi góc nội tiếp.", "Góc ở tâm bằng số đo cung."],
      solution:
        "$\\overset{\\frown}{BC} = 2 \\cdot 35^\\circ = 70^\\circ$, nên $\\widehat{BOC} = 70^\\circ$.",
    },
    {
      level: "Thông hiểu",
      prompt:
        "Hai góc nội tiếp $\\widehat{BAC}$ và $\\widehat{BDC}$ cùng chắn cung $BC$. Biết $\\widehat{BAC} = 42^\\circ$. " +
        "Tính $\\widehat{BDC}$.",
      hints: ["Các góc nội tiếp cùng chắn một cung thì bằng nhau."],
      solution: "Vì cùng chắn cung $BC$ nên $\\widehat{BDC} = \\widehat{BAC} = 42^\\circ$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Cho đường tròn $(O)$ đường kính $BC$, điểm $A$ nằm trên đường tròn và $\\widehat{ABC} = 30^\\circ$. " +
        "Tính số đo các góc $\\widehat{BAC}$ và $\\widehat{ACB}$ của tam giác $ABC$.",
      hints: ["$BC$ là đường kính nên góc nội tiếp $\\widehat{BAC}$ chắn nửa đường tròn.", "Tổng ba góc trong một tam giác bằng $180^\\circ$."],
      solution:
        "Vì $BC$ là đường kính nên $\\widehat{BAC} = 90^\\circ$. " +
        "Trong tam giác $ABC$: $\\widehat{ACB} = 180^\\circ - 90^\\circ - 30^\\circ = 60^\\circ$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Trên đường tròn $(O)$ lấy ba điểm $A, B, C$ sao cho góc nội tiếp $\\widehat{BAC} = 64^\\circ$ chắn cung " +
        "nhỏ $BC$. Tính số đo cung nhỏ $BC$, số đo cung lớn $BC$ và góc ở tâm $\\widehat{BOC}$.",
      hints: ["Cung nhỏ $BC$ gấp đôi góc nội tiếp $\\widehat{BAC}$.", "Hai cung $BC$ cộng lại bằng cả đường tròn $360^\\circ$."],
      solution:
        "Cung nhỏ $BC = 2 \\cdot 64^\\circ = 128^\\circ$, nên $\\widehat{BOC} = 128^\\circ$. " +
        "Cung lớn $BC = 360^\\circ - 128^\\circ = 232^\\circ$.",
    },
  ],

  quiz: [
    { type: "mc", q: "Góc nội tiếp có quan hệ thế nào với số đo cung bị chắn?",
      choices: [
        "Bằng số đo cung bị chắn",
        "Bằng nửa số đo cung bị chắn",
        "Bằng hai lần số đo cung bị chắn",
        "Bằng $90^\\circ$ với mọi cung",
      ], answer: 1,
      explain: "Theo định lý, góc nội tiếp $= \\dfrac{1}{2}$ số đo cung bị chắn." },
    { type: "fill", q: "Góc ở tâm chắn cung $BC$ bằng $100^\\circ$. Góc nội tiếp cùng chắn cung $BC$ bằng bao nhiêu độ?",
      answer: 50, explain: "Góc nội tiếp $= \\dfrac{1}{2}\\cdot 100^\\circ = 50^\\circ$." },
    { type: "fill", q: "Một góc nội tiếp bằng $35^\\circ$. Số đo cung bị chắn bằng bao nhiêu độ?",
      answer: 70, explain: "Cung bị chắn $= 2 \\cdot 35^\\circ = 70^\\circ$." },
  ],
});
