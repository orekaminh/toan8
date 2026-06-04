/* Bài 11. Hình thang cân — Chương III. Tứ giác (Kết nối tri thức, Tập 1) */
MATH8.registerLesson({
  id: "bai-11-hinh-thang-can",
  chapter: "Chương III. Tứ giác",
  order: 2,
  title: "Bài 11. Hình thang cân",

  objectives: [
    "Nhận biết hình thang, hình thang cân và các yếu tố: cạnh đáy, cạnh bên, đường chéo.",
    "Biết và vận dụng tính chất hình thang cân: hai cạnh bên bằng nhau, hai đường chéo bằng nhau.",
    "Biết dấu hiệu nhận biết một hình thang là hình thang cân.",
  ],

  intro: {
    text:
      "Mặt cắt của một chiếc thang, mái nhà, hay chiếc loa thường có dạng <b>hình thang cân</b> — " +
      "cân đối, hai bên như soi gương. Hình thang cân có những tính chất đẹp gì về cạnh bên và đường chéo?",
    math: "AB \\parallel CD",
  },

  theory: [
    {
      heading: "1. Hình thang",
      html:
        "<b>Hình thang</b> là tứ giác có <b>hai cạnh đối song song</b>. Hai cạnh song song gọi là hai " +
        "<b>đáy</b>; hai cạnh còn lại là hai <b>cạnh bên</b>.<br>" +
        "Ví dụ hình thang $ABCD$ có $AB \\parallel CD$ thì $AB, CD$ là hai đáy; $AD, BC$ là hai cạnh bên.",
    },
    {
      heading: "2. Hình thang cân",
      html:
        "<b>Hình thang cân</b> là hình thang có <b>hai góc kề một đáy bằng nhau</b>.<br>" +
        "Hình thang $ABCD$ ($AB \\parallel CD$) là hình thang cân khi $\\widehat{C} = \\widehat{D}$ " +
        "(hai góc kề đáy $CD$), khi đó cũng có $\\widehat{A} = \\widehat{B}$.",
    },
    {
      heading: "3. Tính chất hình thang cân",
      html: "Trong hình thang cân: hai <b>cạnh bên bằng nhau</b> và hai <b>đường chéo bằng nhau</b>.",
      formula: "AD = BC \\qquad\\text{và}\\qquad AC = BD",
    },
    {
      heading: "4. Dấu hiệu nhận biết",
      html:
        "Một hình thang là hình thang cân nếu thoả mãn một trong hai điều sau:<br>" +
        "• có <b>hai góc kề một đáy bằng nhau</b>; hoặc<br>" +
        "• có <b>hai đường chéo bằng nhau</b>.",
    },
  ],

  visual: { type: "geometry", config: { kind: "trapezoid" } },

  examples: [
    {
      title: "Tính các góc",
      prompt: "Hình thang cân $ABCD$ ($AB \\parallel CD$) có $\\widehat{D} = 70^\\circ$. Tính ba góc còn lại.",
      steps: [
        "Hai góc kề đáy $CD$ bằng nhau: $\\widehat{C} = \\widehat{D} = 70^\\circ$.",
        "Cạnh bên $AD$ cắt hai đáy song song nên $\\widehat{A} + \\widehat{D} = 180^\\circ$ (hai góc trong cùng phía).",
        "$\\widehat{A} = 180^\\circ - 70^\\circ = 110^\\circ$, và $\\widehat{B} = \\widehat{A} = 110^\\circ$.",
      ],
    },
    {
      title: "Cạnh bên và đường chéo",
      prompt: "Hình thang cân $ABCD$ ($AB \\parallel CD$) có cạnh bên $AD = 5$ cm và đường chéo $AC = 8$ cm. Tính $BC$ và $BD$.",
      steps: [
        "Hai cạnh bên bằng nhau: $BC = AD = 5$ cm.",
        "Hai đường chéo bằng nhau: $BD = AC = 8$ cm.",
      ],
    },
    {
      title: "Nhận biết hình thang cân",
      prompt: "Hình thang $MNPQ$ ($MN \\parallel PQ$) có $\\widehat{P} = \\widehat{Q} = 65^\\circ$. Hỏi $MNPQ$ có là hình thang cân không?",
      steps: [
        "$\\widehat{P}$ và $\\widehat{Q}$ là hai góc kề đáy $PQ$.",
        "Hai góc kề một đáy bằng nhau ($65^\\circ = 65^\\circ$) → theo dấu hiệu, $MNPQ$ là hình thang cân.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Cho rằng hai góc kề một <b>cạnh bên</b> bằng nhau.",
      right: "Hình thang cân có hai góc kề một <b>đáy</b> bằng nhau; hai góc kề một cạnh bên thì bù nhau ($180^\\circ$).",
      note: "Phân biệt 'kề đáy' (bằng nhau) và 'kề cạnh bên' (cộng lại $180^\\circ$).",
    },
    {
      wrong: "Nghĩ mọi hình thang đều có hai cạnh bên bằng nhau.",
      right: "Chỉ hình thang CÂN mới có hai cạnh bên (và hai đường chéo) bằng nhau.",
      note: "Hình thang thường thì hai cạnh bên có thể khác nhau.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Hình thang cân $ABCD$ ($AB \\parallel CD$) có $\\widehat{C} = 75^\\circ$. Tính $\\widehat{D}$.",
      hints: ["Hai góc kề đáy $CD$ bằng nhau."],
      solution: "$\\widehat{D} = \\widehat{C} = 75^\\circ$.",
    },
    {
      level: "Nhận biết",
      prompt: "Hình thang cân có một cạnh bên dài $6$ cm. Cạnh bên còn lại dài bao nhiêu?",
      hints: ["Hai cạnh bên của hình thang cân bằng nhau."],
      solution: "Cạnh bên còn lại cũng dài $6$ cm.",
    },
    {
      level: "Nhận biết",
      prompt: "Hình thang cân $ABCD$ có đường chéo $AC = 7$ cm. Tính đường chéo $BD$.",
      hints: ["Hai đường chéo của hình thang cân bằng nhau."],
      solution: "$BD = AC = 7$ cm.",
    },
    {
      level: "Thông hiểu",
      prompt: "Hình thang cân $ABCD$ ($AB \\parallel CD$) có $\\widehat{A} = 118^\\circ$. Tính ba góc còn lại.",
      hints: ["$\\widehat{B} = \\widehat{A}$ (kề đáy $AB$).", "$\\widehat{D} = 180^\\circ - \\widehat{A}$ (góc trong cùng phía)."],
      solution: "$\\widehat{B} = 118^\\circ$; $\\widehat{D} = 180^\\circ - 118^\\circ = 62^\\circ$; $\\widehat{C} = \\widehat{D} = 62^\\circ$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Hình thang $ABCD$ ($AB \\parallel CD$) có $\\widehat{D} = 80^\\circ$ và $\\widehat{C} = 80^\\circ$. Tứ giác này là hình gì? Vì sao?",
      hints: ["So sánh hai góc kề đáy $CD$.", "Dùng dấu hiệu nhận biết."],
      solution: "$\\widehat{C} = \\widehat{D} = 80^\\circ$ là hai góc kề đáy $CD$ và bằng nhau, nên $ABCD$ là hình thang cân.",
    },
    {
      level: "Thông hiểu",
      prompt: "Hình thang cân $ABCD$ ($AB \\parallel CD$) có $\\widehat{A} = 2\\widehat{D}$. Tính $\\widehat{A}$ và $\\widehat{D}$.",
      hints: ["$\\widehat{A} + \\widehat{D} = 180^\\circ$ (góc trong cùng phía).", "Thay $\\widehat{A} = 2\\widehat{D}$."],
      solution: "$2\\widehat{D} + \\widehat{D} = 180^\\circ \\Rightarrow 3\\widehat{D} = 180^\\circ \\Rightarrow \\widehat{D} = 60^\\circ$, $\\widehat{A} = 120^\\circ$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Mặt cắt một mái nhà có dạng hình thang cân $ABCD$ với đáy lớn $CD$ ở dưới. Biết góc giữa cạnh bên " +
        "và đáy lớn là $\\widehat{D} = 55^\\circ$. Tính góc ở đỉnh mái $\\widehat{A}$.",
      hints: ["$\\widehat{A}$ và $\\widehat{D}$ là hai góc trong cùng phía của cạnh bên $AD$ giữa hai đáy song song.", "$\\widehat{A} + \\widehat{D} = 180^\\circ$."],
      solution: "$\\widehat{A} = 180^\\circ - 55^\\circ = 125^\\circ$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Cho hình thang cân $ABCD$ ($AB \\parallel CD$, $AB < CD$). Gọi $O$ là giao điểm hai đường chéo. " +
        "Chứng minh rằng $OA = OB$.",
      hints: [
        "Dùng tính chất hai đường chéo bằng nhau: $AC = BD$.",
        "Xét hai tam giác $ACD$ và $BDC$ (chung đáy $CD$) để suy ra tam giác $OCD$ cân, từ đó $OA = OB$.",
      ],
      solution:
        "Vì $ABCD$ là hình thang cân nên $AC = BD$ và $AD = BC$. Hai tam giác $ACD$ và $BDC$ có " +
        "$CD$ chung, $AD = BC$, $AC = BD$ nên bằng nhau, suy ra $\\widehat{ACD} = \\widehat{BDC}$. " +
        "Do đó tam giác $OCD$ cân tại $O$, tức $OC = OD$. Kết hợp $AC = BD$ ta được " +
        "$OA = AC - OC = BD - OD = OB$. Vậy $OA = OB$.",
    },
  ],

  quiz: [
    { type: "mc", q: "Hình thang cân có hai góc kề một đáy như thế nào?", choices: ["Bằng nhau", "Bù nhau", "Phụ nhau", "Đều vuông"], answer: 0, explain: "Đó chính là định nghĩa hình thang cân." },
    { type: "mc", q: "Trong hình thang cân, hai đường chéo:", choices: ["Bằng nhau", "Vuông góc", "Song song", "Cắt nhau tại trung điểm"], answer: 0, explain: "Tính chất hình thang cân: hai đường chéo bằng nhau." },
    { type: "fill", q: "Hình thang cân $ABCD$ ($AB \\parallel CD$) có $\\widehat{D} = 70^\\circ$. Số đo $\\widehat{A}$ (độ)?", answer: 110, explain: "$\\widehat{A} + \\widehat{D} = 180^\\circ$ (hai góc trong cùng phía)." },
  ],
});
