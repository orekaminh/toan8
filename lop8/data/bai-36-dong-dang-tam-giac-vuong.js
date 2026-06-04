/* Bài 36. Các trường hợp đồng dạng của hai tam giác vuông — Chương IX (KNTT, Tập 2) */
MATH8.registerLesson({
  id: "bai-36-dong-dang-tam-giac-vuong",
  chapter: "Chương IX. Tam giác đồng dạng",
  order: 4,
  title: "Bài 36. Các trường hợp đồng dạng của hai tam giác vuông",

  objectives: [
    "Nhận biết hai tam giác vuông đồng dạng qua một cặp góc nhọn bằng nhau.",
    "Nhận biết đồng dạng khi hai cạnh góc vuông tỉ lệ.",
    "Nhận biết đồng dạng theo cạnh huyền – cạnh góc vuông.",
  ],

  intro: {
    text:
      "Hai tam giác vuông đã sẵn có một cặp góc bằng nhau (góc vuông $90^\\circ$), nên việc kiểm tra " +
      "đồng dạng còn <b>nhẹ nhàng hơn</b> tam giác thường. Chỉ cần thêm một điều kiện phù hợp.",
    math: "\\triangle A'B'C' \\backsim \\triangle ABC \\ (\\widehat{A} = \\widehat{A'} = 90^\\circ)",
  },

  theory: [
    {
      heading: "1. Một cặp góc nhọn bằng nhau (g.g)",
      html:
        "Hai tam giác vuông đã có một cặp góc vuông bằng nhau. Nếu thêm <b>một cặp góc nhọn bằng nhau</b> " +
        "thì hai tam giác vuông đồng dạng.",
    },
    {
      heading: "2. Hai cạnh góc vuông tỉ lệ (c.g.c)",
      html: "Nếu hai cạnh góc vuông của tam giác vuông này tỉ lệ với hai cạnh góc vuông của tam giác vuông kia thì hai tam giác đồng dạng.",
      formula: "\\dfrac{A'B'}{AB} = \\dfrac{A'C'}{AC} \\ \\Rightarrow\\ \\triangle A'B'C' \\backsim \\triangle ABC",
    },
    {
      heading: "3. Cạnh huyền – cạnh góc vuông",
      html:
        "Nếu cạnh huyền và một cạnh góc vuông của tam giác vuông này tỉ lệ với cạnh huyền và một cạnh góc " +
        "vuông của tam giác vuông kia thì hai tam giác vuông đó đồng dạng.",
      formula: "\\dfrac{B'C'}{BC} = \\dfrac{A'B'}{AB} \\ \\Rightarrow\\ \\triangle A'B'C' \\backsim \\triangle ABC",
    },
  ],

  visual: { type: "similar", config: { kind: "similar-triangles", hint: "Với hai tam giác vuông, chỉ cần thêm một cặp góc nhọn bằng nhau (hoặc các cạnh tương ứng tỉ lệ) là đồng dạng. Trượt $k$ để xem cặp tam giác vuông đồng dạng." } },

  examples: [
    {
      title: "Một góc nhọn bằng nhau",
      prompt: "Hai tam giác vuông $ABC$ (vuông tại $A$) và $DEF$ (vuông tại $D$) có $\\widehat{B} = \\widehat{E} = 35^\\circ$. Chứng tỏ chúng đồng dạng.",
      steps: [
        "Cả hai cùng có một góc vuông: $\\widehat{A} = \\widehat{D} = 90^\\circ$.",
        "Thêm cặp góc nhọn $\\widehat{B} = \\widehat{E}$.",
        "Có hai cặp góc bằng nhau nên $\\triangle ABC \\backsim \\triangle DEF$ (g.g).",
      ],
    },
    {
      title: "Hai cạnh góc vuông tỉ lệ",
      prompt: "Tam giác $ABC$ vuông tại $A$ có $AB = 3$, $AC = 4$. Tam giác $DEF$ vuông tại $D$ có $DE = 6$, $DF = 8$. Chúng có đồng dạng không?",
      steps: [
        "Xét tỉ số hai cạnh góc vuông: $\\dfrac{DE}{AB} = \\dfrac{6}{3} = 2$ và $\\dfrac{DF}{AC} = \\dfrac{8}{4} = 2$.",
        "Hai cạnh góc vuông tỉ lệ và góc vuông bằng nhau nên đồng dạng (c.g.c).",
      ],
    },
    {
      title: "Tính cạnh nhờ đồng dạng",
      prompt: "$\\triangle ABC \\backsim \\triangle DEF$ (đều vuông), tỉ số $k = \\dfrac{DE}{AB} = 2$. Biết $BC = 5$. Tính $EF$.",
      steps: [
        "$EF$ là cạnh huyền tương ứng với $BC$.",
        "$EF = BC \\cdot k = 5 \\cdot 2 = 10$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Nghĩ rằng cứ là hai tam giác vuông thì đồng dạng.",
      right: "Cần thêm một điều kiện (góc nhọn bằng nhau, hoặc cạnh tương ứng tỉ lệ).",
      note: "Góc vuông chung là chưa đủ.",
    },
    {
      wrong: "Lập tỉ lệ cạnh huyền với cạnh góc vuông (khác loại).",
      right: "Phải lập tỉ lệ giữa các cạnh <b>tương ứng</b> (huyền ↔ huyền, góc vuông ↔ góc vuông).",
      note: "Ghép đúng loại cạnh khi lập tỉ số.",
    },
  ],

  exercises: [
    { level: "Nhận biết", prompt: "Hai tam giác vuông cần thêm điều kiện gì để đồng dạng theo g.g?",
      hints: ["Đã có một cặp góc vuông."],
      solution: "Thêm một cặp góc nhọn bằng nhau." },
    { level: "Nhận biết", prompt: "Tam giác vuông $ABC$ ($AB=2, AC=3$) và $DEF$ ($DE=4, DF=6$). Tỉ số hai cạnh góc vuông có bằng nhau không?",
      hints: ["So $\\dfrac{4}{2}$ và $\\dfrac{6}{3}$."],
      solution: "$\\dfrac{4}{2} = \\dfrac{6}{3} = 2$ — bằng nhau, nên hai tam giác đồng dạng (c.g.c)." },
    { level: "Nhận biết", prompt: "Hai tam giác vuông có cạnh huyền tỉ lệ và một cạnh góc vuông tỉ lệ (cùng tỉ số). Chúng đồng dạng theo trường hợp nào?",
      hints: ["Cạnh huyền và một cạnh góc vuông."],
      solution: "Theo trường hợp cạnh huyền – cạnh góc vuông." },
    { level: "Thông hiểu", prompt: "$\\triangle ABC \\backsim \\triangle DEF$ (đều vuông) tỉ số $k = 3$, $AB = 2$. Tính $DE$.",
      hints: ["$DE = AB \\cdot k$."],
      solution: "$DE = 2 \\cdot 3 = 6$." },
    { level: "Thông hiểu", prompt: "Tam giác vuông $ABC$ ($AB=3, AC=4$, huyền $BC=5$) và tam giác vuông $MNP$ huyền $NP=15$, một cạnh góc vuông $MN=9$. Hai tam giác có đồng dạng không?",
      hints: ["So tỉ số huyền $\\dfrac{NP}{BC}$ và cạnh góc vuông $\\dfrac{MN}{AB}$."],
      solution: "$\\dfrac{15}{5} = 3$ và $\\dfrac{9}{3} = 3$ — cạnh huyền và cạnh góc vuông tỉ lệ, nên đồng dạng." },
    { level: "Thông hiểu", prompt: "Tam giác vuông có một góc nhọn $40^\\circ$. Tam giác vuông kia có một góc nhọn $50^\\circ$. Chúng có chắc chắn đồng dạng không?",
      hints: ["Tính góc nhọn còn lại của mỗi tam giác.", "Góc nhọn còn lại của tam giác đầu là $50^\\circ$."],
      solution: "Tam giác đầu có các góc nhọn $40^\\circ, 50^\\circ$; tam giác kia cũng có $50^\\circ$ (và $40^\\circ$). Có cặp góc nhọn bằng nhau nên đồng dạng (g.g)." },
    { level: "Vận dụng", prompt:
        "Một cây cột cao $AB$ tạo bóng $AC = 2$ m. Cùng lúc, một cọc cao $1{,}5$ m tạo bóng $1$ m. Hai tam giác " +
        "(cột–bóng) đồng dạng. Tính chiều cao $AB$ của cột.",
      hints: ["Hai tam giác vuông đồng dạng (cùng góc nắng) → các cạnh tương ứng tỉ lệ.", "$\\dfrac{AB}{1{,}5} = \\dfrac{AC}{1} = \\dfrac{2}{1}$."],
      solution: "$\\dfrac{AB}{1{,}5} = \\dfrac{2}{1} \\Rightarrow AB = 1{,}5 \\cdot 2 = 3$ m." },
    { level: "Vận dụng", prompt:
        "Tam giác $ABC$ vuông tại $A$, đường cao $AH$. Chứng tỏ $\\triangle HBA \\backsim \\triangle ABC$.",
      hints: ["Hai tam giác đều vuông ($\\widehat{H} = \\widehat{A} = 90^\\circ$).", "Chúng có chung góc nhọn $\\widehat{B}$."],
      solution:
        "$\\triangle HBA$ vuông tại $H$, $\\triangle ABC$ vuông tại $A$, và hai tam giác có chung góc nhọn " +
        "$\\widehat{B}$. Có hai cặp góc bằng nhau nên $\\triangle HBA \\backsim \\triangle ABC$ (g.g)." },
  ],

  quiz: [
    { type: "mc", q: "Hai tam giác vuông đồng dạng nếu (chỉ cần):", choices: ["Có một cặp góc nhọn bằng nhau", "Có cạnh huyền bằng nhau", "Đều có góc vuông", "Có chu vi bằng nhau"], answer: 0, explain: "Đã có góc vuông; thêm một cặp góc nhọn bằng nhau là đủ (g.g)." },
    { type: "mc", q: "Tam giác vuông $ABC$ ($AB=3, AC=4$) và $DEF$ ($DE=6, DF=8$), cùng vuông tại $A, D$:", choices: ["Đồng dạng (c.g.c)", "Bằng nhau", "Không đồng dạng", "Vuông cân"], answer: 0, explain: "$\\dfrac{6}{3} = \\dfrac{8}{4} = 2$ → hai cạnh góc vuông tỉ lệ." },
    { type: "fill", q: "$\\triangle ABC \\backsim \\triangle DEF$ (đều vuông), $k = 3$ ($\\dfrac{DE}{AB}$), $AB = 2$. Tính $DE$.", answer: 6, explain: "$DE = 2 \\cdot 3 = 6$." },
  ],
});
