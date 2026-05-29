/* Bài 33. Hai tam giác đồng dạng — Chương IX (KNTT, Tập 2) */
MATH8.registerLesson({
  id: "bai-33-hai-tam-giac-dong-dang",
  chapter: "Chương IX. Tam giác đồng dạng",
  order: 1,
  title: "Bài 33. Hai tam giác đồng dạng",

  objectives: [
    "Nhận biết hai tam giác đồng dạng: các góc tương ứng bằng nhau, các cạnh tương ứng tỉ lệ.",
    "Hiểu và dùng tỉ số đồng dạng $k$; viết đúng kí hiệu đồng dạng theo thứ tự đỉnh.",
    "Vận dụng định lí: đường thẳng song song với một cạnh tạo ra tam giác đồng dạng.",
  ],

  intro: {
    text:
      "Phóng to một bức ảnh, mọi chi tiết giữ nguyên hình dạng — chỉ lớn hơn. Hai tam giác cũng vậy: " +
      "nếu cùng hình dạng (góc như nhau) và các cạnh cùng gấp một số lần thì chúng <b>đồng dạng</b>. " +
      "Trượt thử tỉ số $k$ ở dưới.",
    math: "\\triangle A'B'C' \\backsim \\triangle ABC",
  },

  theory: [
    {
      heading: "1. Định nghĩa hai tam giác đồng dạng",
      html:
        "$\\triangle A'B'C'$ đồng dạng với $\\triangle ABC$ nếu các góc tương ứng bằng nhau và các cạnh " +
        "tương ứng tỉ lệ:",
      formula: "\\widehat{A'} = \\widehat{A},\\ \\widehat{B'} = \\widehat{B},\\ \\widehat{C'} = \\widehat{C};\\quad \\dfrac{A'B'}{AB} = \\dfrac{B'C'}{BC} = \\dfrac{C'A'}{CA} = k",
    },
    {
      heading: "2. Tỉ số đồng dạng và kí hiệu",
      html:
        "Số $k$ trên gọi là <b>tỉ số đồng dạng</b>. Kí hiệu $\\triangle A'B'C' \\backsim \\triangle ABC$ " +
        "phải viết các đỉnh theo <b>đúng thứ tự tương ứng</b> ($A'$↔$A$, $B'$↔$B$, $C'$↔$C$).",
    },
    {
      heading: "3. Tạo tam giác đồng dạng bằng đường song song",
      html:
        "Nếu một đường thẳng cắt hai cạnh của tam giác và song song với cạnh còn lại thì nó tạo thành một " +
        "tam giác mới <b>đồng dạng</b> với tam giác đã cho. Cụ thể $DE \\parallel BC$ thì:",
      formula: "DE \\parallel BC \\ \\Rightarrow\\ \\triangle ADE \\backsim \\triangle ABC",
    },
  ],

  visual: { type: "similar", config: { kind: "similar-triangles" } },

  examples: [
    {
      title: "Tìm tỉ số và cạnh",
      prompt: "Cho $\\triangle ABC \\backsim \\triangle MNP$ với $AB = 4$, $BC = 6$, $CA = 8$ và $MN = 2$. Tìm tỉ số đồng dạng và các cạnh $NP$, $PM$.",
      steps: [
        "Tỉ số đồng dạng $k = \\dfrac{MN}{AB} = \\dfrac{2}{4} = \\dfrac{1}{2}$.",
        "$NP = BC \\cdot k = 6 \\cdot \\dfrac{1}{2} = 3$.",
        "$PM = CA \\cdot k = 8 \\cdot \\dfrac{1}{2} = 4$.",
      ],
    },
    {
      title: "Dùng đường song song",
      prompt: "Tam giác $ABC$ có $DE \\parallel BC$ ($D \\in AB,\\ E \\in AC$), $AD = 2$, $AB = 6$, $BC = 9$. Tính $DE$.",
      steps: [
        "$DE \\parallel BC \\Rightarrow \\triangle ADE \\backsim \\triangle ABC$, tỉ số $k = \\dfrac{AD}{AB} = \\dfrac{2}{6} = \\dfrac{1}{3}$.",
        "$DE = BC \\cdot k = 9 \\cdot \\dfrac{1}{3} = 3$.",
      ],
    },
    {
      title: "Góc tương ứng",
      prompt: "Cho $\\triangle ABC \\backsim \\triangle DEF$, biết $\\widehat{A} = 50^\\circ$, $\\widehat{B} = 60^\\circ$. Tính $\\widehat{F}$.",
      steps: [
        "$\\widehat{C} = 180^\\circ - 50^\\circ - 60^\\circ = 70^\\circ$.",
        "Vì đồng dạng nên $\\widehat{F} = \\widehat{C} = 70^\\circ$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Viết $\\triangle ABC \\backsim \\triangle MPN$ trong khi $A$↔$M$, $B$↔$N$, $C$↔$P$.",
      right: "Phải viết đúng thứ tự tương ứng: $\\triangle ABC \\backsim \\triangle MNP$.",
      note: "Thứ tự đỉnh quyết định cặp cạnh/góc tương ứng.",
    },
    {
      wrong: "Lấy tỉ số $k = \\dfrac{AB}{MN}$ rồi nhân để tìm cạnh của $\\triangle MNP$.",
      right: "Nếu cần cạnh của $\\triangle MNP$, dùng $k = \\dfrac{MN}{AB}$ (cạnh cần tìm ở tử).",
      note: "Chú ý phân thức nào ở tử để khỏi nhân/chia ngược.",
    },
  ],

  exercises: [
    { level: "Nhận biết", prompt: "Cho $\\triangle ABC \\backsim \\triangle DEF$. Cạnh nào tương ứng với $AB$? Góc nào tương ứng với $\\widehat{C}$?",
      hints: ["Đỉnh tương ứng theo thứ tự: $A$↔$D$, $B$↔$E$, $C$↔$F$."],
      solution: "$AB$ tương ứng $DE$; $\\widehat{C}$ tương ứng $\\widehat{F}$." },
    { level: "Nhận biết", prompt: "$\\triangle ABC \\backsim \\triangle A'B'C'$ với $AB = 3$, $A'B' = 6$. Tìm tỉ số đồng dạng $k = \\dfrac{A'B'}{AB}$.",
      hints: ["$k = \\dfrac{A'B'}{AB}$."],
      solution: "$k = \\dfrac{6}{3} = 2$." },
    { level: "Nhận biết", prompt: "Hai tam giác đồng dạng thì các góc tương ứng như thế nào?",
      hints: ["Nhớ định nghĩa đồng dạng."],
      solution: "Các góc tương ứng bằng nhau." },
    { level: "Thông hiểu", prompt: "$\\triangle ABC \\backsim \\triangle DEF$ tỉ số $k = 3$, biết $DE = 12$. Tính $AB$.",
      hints: ["$k = \\dfrac{DE}{AB} = 3$ nên $AB = \\dfrac{DE}{3}$."],
      solution: "$AB = \\dfrac{12}{3} = 4$." },
    { level: "Thông hiểu", prompt: "$DE \\parallel BC$, $AD = 4$, $AB = 10$, $BC = 15$. Tính $DE$.",
      hints: ["$\\triangle ADE \\backsim \\triangle ABC$, $k = \\dfrac{AD}{AB}$."],
      solution: "$k = \\dfrac{4}{10} = \\dfrac{2}{5}$, $DE = 15 \\cdot \\dfrac{2}{5} = 6$." },
    { level: "Thông hiểu", prompt: "$\\triangle ABC \\backsim \\triangle MNP$ với $AB = 5$, $MN = 10$, $BC = 7$. Tính $NP$.",
      hints: ["$k = \\dfrac{MN}{AB} = 2$, $NP = BC \\cdot k$."],
      solution: "$k = 2$, $NP = 7 \\cdot 2 = 14$." },
    { level: "Vận dụng", prompt:
        "$\\triangle ABC \\backsim \\triangle DEF$ với chu vi $\\triangle ABC = 12$ cm, chu vi $\\triangle DEF = 18$ cm. " +
        "Tìm tỉ số đồng dạng $k = \\dfrac{DEF}{ABC}$ và cho biết tỉ số chu vi.",
      hints: ["Tỉ số chu vi của hai tam giác đồng dạng bằng tỉ số đồng dạng $k$."],
      solution: "$k = \\dfrac{18}{12} = \\dfrac{3}{2}$. Tỉ số chu vi cũng bằng $\\dfrac{3}{2}$." },
    { level: "Vận dụng", prompt:
        "Tam giác $ABC$ có $DE \\parallel BC$, $AD = 3$, $DB = 6$. Tính tỉ số đồng dạng của $\\triangle ADE$ và $\\triangle ABC$.",
      hints: ["$k = \\dfrac{AD}{AB}$ với $AB = AD + DB$."],
      solution: "$AB = 3 + 6 = 9$, $k = \\dfrac{AD}{AB} = \\dfrac{3}{9} = \\dfrac{1}{3}$." },
  ],

  quiz: [
    { type: "mc", q: "Hai tam giác đồng dạng thì:", choices: ["Các góc tương ứng bằng nhau, các cạnh tương ứng tỉ lệ", "Các cạnh tương ứng bằng nhau", "Các góc đều bằng $60^\\circ$", "Diện tích bằng nhau"], answer: 0, explain: "Đó là định nghĩa hai tam giác đồng dạng." },
    { type: "fill", q: "$\\triangle ABC \\backsim \\triangle MNP$ với $AB = 4$, $MN = 8$. Tỉ số đồng dạng $k = \\dfrac{MN}{AB}$ bằng bao nhiêu?", answer: 2, explain: "$\\dfrac{8}{4} = 2$." },
    { type: "fill", q: "$DE \\parallel BC$, $AD = 2$, $AB = 6$, $BC = 9$. Tính $DE$ (vì $\\triangle ADE \\backsim \\triangle ABC$).", answer: 3, explain: "$k = \\dfrac{1}{3}$, $DE = 9 \\cdot \\dfrac{1}{3} = 3$." },
  ],
});
