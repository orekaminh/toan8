/* Bài 34. Ba trường hợp đồng dạng của hai tam giác — Chương IX (KNTT, Tập 2) */
MATH8.registerLesson({
  id: "bai-34-ba-truong-hop-dong-dang",
  chapter: "Chương IX. Tam giác đồng dạng",
  order: 2,
  title: "Bài 34. Ba trường hợp đồng dạng của hai tam giác",

  objectives: [
    "Nhận biết ba trường hợp đồng dạng của hai tam giác: c.c.c, c.g.c, g.g.",
    "Chọn đúng trường hợp để chứng minh hai tam giác đồng dạng.",
    "Dùng đồng dạng để tính độ dài cạnh chưa biết.",
  ],

  intro: {
    text:
      "Giống như xét hai tam giác bằng nhau, để biết hai tam giác có <b>đồng dạng</b> không, ta không cần " +
      "kiểm tra hết cả góc lẫn cạnh — chỉ cần một trong <b>ba dấu hiệu</b> sau.",
    math: "\\text{c.c.c} \\qquad \\text{c.g.c} \\qquad \\text{g.g}",
  },

  theory: [
    {
      heading: "1. Trường hợp cạnh – cạnh – cạnh (c.c.c)",
      html: "Nếu ba cạnh của tam giác này <b>tỉ lệ</b> với ba cạnh của tam giác kia thì hai tam giác đồng dạng.",
      formula: "\\dfrac{A'B'}{AB} = \\dfrac{B'C'}{BC} = \\dfrac{C'A'}{CA} \\ \\Rightarrow\\ \\triangle A'B'C' \\backsim \\triangle ABC",
    },
    {
      heading: "2. Trường hợp cạnh – góc – cạnh (c.g.c)",
      html: "Nếu hai cạnh của tam giác này tỉ lệ với hai cạnh của tam giác kia và <b>góc xen giữa</b> bằng nhau thì hai tam giác đồng dạng.",
      formula: "\\dfrac{A'B'}{AB} = \\dfrac{A'C'}{AC} \\ \\text{và}\\ \\widehat{A'} = \\widehat{A} \\ \\Rightarrow\\ \\triangle A'B'C' \\backsim \\triangle ABC",
    },
    {
      heading: "3. Trường hợp góc – góc (g.g)",
      html: "Nếu hai góc của tam giác này lần lượt bằng hai góc của tam giác kia thì hai tam giác đồng dạng. (Đây là cách dùng nhiều nhất.)",
      formula: "\\widehat{A'} = \\widehat{A},\\ \\widehat{B'} = \\widehat{B} \\ \\Rightarrow\\ \\triangle A'B'C' \\backsim \\triangle ABC",
    },
  ],

  visual: { type: "similar", config: { kind: "similar-triangles", hint: "Hai tam giác cùng hình dạng (các góc bằng nhau) thì đồng dạng — đó là ý tưởng của trường hợp <b>g.g</b>. Trượt $k$ để thấy cạnh đổi nhưng góc giữ nguyên." } },

  examples: [
    {
      title: "Trường hợp g.g",
      prompt: "Hai tam giác $ABC$ và $DEF$ có $\\widehat{A} = \\widehat{D} = 70^\\circ$ và $\\widehat{B} = \\widehat{E} = 50^\\circ$. Chứng tỏ chúng đồng dạng.",
      steps: [
        "Hai cặp góc tương ứng bằng nhau: $\\widehat{A} = \\widehat{D}$, $\\widehat{B} = \\widehat{E}$.",
        "Theo trường hợp g.g, $\\triangle ABC \\backsim \\triangle DEF$.",
      ],
    },
    {
      title: "Trường hợp c.c.c",
      prompt: "Tam giác $ABC$ có các cạnh $3, 4, 5$; tam giác $MNP$ có các cạnh $6, 8, 10$. Hai tam giác có đồng dạng không?",
      steps: [
        "Lập các tỉ số: $\\dfrac{6}{3} = \\dfrac{8}{4} = \\dfrac{10}{5} = 2$.",
        "Ba cạnh tỉ lệ (cùng tỉ số $2$) nên theo c.c.c, hai tam giác đồng dạng.",
      ],
    },
    {
      title: "Dùng đồng dạng tính cạnh",
      prompt: "Cho $\\triangle ABC \\backsim \\triangle DEF$ với $AB = 6$, $DE = 9$, $BC = 8$. Tính $EF$.",
      steps: [
        "Tỉ số đồng dạng $k = \\dfrac{DE}{AB} = \\dfrac{9}{6} = \\dfrac{3}{2}$.",
        "$EF = BC \\cdot k = 8 \\cdot \\dfrac{3}{2} = 12$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Dùng g.g nhưng chỉ kiểm tra một cặp góc.",
      right: "Cần <b>hai</b> cặp góc bằng nhau (cặp thứ ba tự bằng vì tổng góc $= 180^\\circ$).",
      note: "g.g = hai góc.",
    },
    {
      wrong: "Trong c.g.c lấy góc không xen giữa hai cạnh tỉ lệ.",
      right: "Góc phải là góc <b>xen giữa</b> hai cạnh đang xét tỉ lệ.",
      note: "Sai vị trí góc thì không kết luận được.",
    },
  ],

  exercises: [
    { level: "Nhận biết", prompt: "Nêu ba trường hợp đồng dạng của hai tam giác.",
      hints: ["Nhớ ba dấu hiệu."],
      solution: "c.c.c (ba cạnh tỉ lệ), c.g.c (hai cạnh tỉ lệ và góc xen giữa bằng nhau), g.g (hai góc bằng nhau)." },
    { level: "Nhận biết", prompt: "Hai tam giác có $\\widehat{A} = \\widehat{M}$ và $\\widehat{B} = \\widehat{N}$. Chúng đồng dạng theo trường hợp nào?",
      hints: ["Hai cặp góc bằng nhau."],
      solution: "Theo trường hợp g.g." },
    { level: "Nhận biết", prompt: "Tam giác cạnh $2,3,4$ và tam giác cạnh $4,6,8$ có đồng dạng không?",
      hints: ["So sánh các tỉ số $\\dfrac{4}{2}, \\dfrac{6}{3}, \\dfrac{8}{4}$."],
      solution: "$\\dfrac{4}{2} = \\dfrac{6}{3} = \\dfrac{8}{4} = 2$ nên đồng dạng (c.c.c)." },
    { level: "Thông hiểu", prompt: "$\\triangle ABC \\backsim \\triangle DEF$ với $AB = 4$, $DE = 6$, $AC = 5$. Tính $DF$.",
      hints: ["$k = \\dfrac{DE}{AB} = \\dfrac{3}{2}$, $DF = AC \\cdot k$."],
      solution: "$k = \\dfrac{6}{4} = \\dfrac{3}{2}$; $DF = 5 \\cdot \\dfrac{3}{2} = 7{,}5$." },
    { level: "Thông hiểu", prompt: "Tam giác $ABC$ có $\\widehat{A} = 40^\\circ$, $\\widehat{B} = 70^\\circ$; tam giác $DEF$ có $\\widehat{D} = 40^\\circ$, $\\widehat{F} = 70^\\circ$. Hai tam giác có đồng dạng không?",
      hints: ["Tìm các góc còn lại rồi so các cặp góc.", "$\\widehat{C} = 70^\\circ$; $\\widehat{E} = 70^\\circ$."],
      solution: "$\\widehat{C} = 180^\\circ - 40 - 70 = 70^\\circ$; $\\widehat{E} = 180^\\circ - 40 - 70 = 70^\\circ$. Có hai cặp góc bằng nhau nên đồng dạng (g.g)." },
    { level: "Thông hiểu", prompt: "Hai tam giác có một góc bằng nhau ($60^\\circ$) và hai cạnh kề góc đó tỉ lệ $\\dfrac{2}{1}$. Chúng đồng dạng theo trường hợp nào?",
      hints: ["Góc xen giữa hai cạnh tỉ lệ."],
      solution: "Theo trường hợp c.g.c." },
    { level: "Vận dụng", prompt:
        "Tam giác $ABC$ có $AB = 6$, $AC = 9$. Trên $AB$ lấy $M$ với $AM = 2$, trên $AC$ lấy $N$ với $AN = 3$. " +
        "Chứng tỏ $\\triangle AMN \\backsim \\triangle ABC$.",
      hints: ["Xét tỉ số $\\dfrac{AM}{AB}$ và $\\dfrac{AN}{AC}$.", "Góc $A$ chung."],
      solution: "$\\dfrac{AM}{AB} = \\dfrac{2}{6} = \\dfrac{1}{3}$ và $\\dfrac{AN}{AC} = \\dfrac{3}{9} = \\dfrac{1}{3}$; lại có $\\widehat{A}$ chung. Theo c.g.c, $\\triangle AMN \\backsim \\triangle ABC$." },
    { level: "Vận dụng", prompt:
        "Cho $\\triangle ABC \\backsim \\triangle DEF$ tỉ số $k = \\dfrac{2}{3}$. Biết chu vi $\\triangle DEF = 30$ cm. Tính chu vi $\\triangle ABC$.",
      hints: ["Tỉ số chu vi bằng tỉ số đồng dạng: $\\dfrac{ABC}{DEF} = k$."],
      solution: "Chu vi $\\triangle ABC = 30 \\cdot \\dfrac{2}{3} = 20$ cm." },
  ],

  quiz: [
    { type: "mc", q: "Hai tam giác có hai cặp góc bằng nhau thì đồng dạng theo trường hợp:", choices: ["g.g", "c.c.c", "c.g.c", "c.c"], answer: 0, explain: "Hai góc bằng nhau → trường hợp góc – góc." },
    { type: "mc", q: "Tam giác cạnh $3, 4, 5$ và tam giác cạnh $6, 8, 10$:", choices: ["Đồng dạng (tỉ số $\\tfrac{1}{2}$)", "Bằng nhau", "Không đồng dạng", "Vuông cân"], answer: 0, explain: "$\\dfrac{6}{3} = \\dfrac{8}{4} = \\dfrac{10}{5} = 2$ → c.c.c." },
    { type: "fill", q: "$\\triangle ABC \\backsim \\triangle DEF$ tỉ số $k = 2$ ($\\dfrac{DE}{AB}$), $AB = 5$. Tính $DE$.", answer: 10, explain: "$DE = AB \\cdot k = 5 \\cdot 2 = 10$." },
  ],
});
