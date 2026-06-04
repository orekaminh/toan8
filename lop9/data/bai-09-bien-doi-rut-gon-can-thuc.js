/* Bài 9. Biến đổi đơn giản và rút gọn biểu thức chứa căn thức bậc hai
   Chương III (Toán 9, Kết nối tri thức, Tập 1) */
MATH9.registerLesson({
  id: "bai-09-bien-doi-rut-gon-can-thuc",
  chapter: "Chương III. Căn bậc hai và căn bậc ba",
  order: 3,
  title: "Bài 9. Biến đổi đơn giản và rút gọn biểu thức chứa căn thức bậc hai",

  objectives: [
    "Đưa thừa số ra ngoài (hoặc vào trong) dấu căn để rút gọn biểu thức.",
    "Khử mẫu của biểu thức lấy căn và trục căn thức ở mẫu (kể cả dùng biểu thức liên hợp).",
    "Cộng, trừ các căn thức đồng dạng để rút gọn biểu thức chứa căn bậc hai.",
  ],

  intro: {
    text:
      "Khi tính tổng $\\sqrt{75} + \\sqrt{48} - \\sqrt{27}$, nếu để nguyên các căn thì rất khó cộng. " +
      "Nhưng nếu biết <b>đưa thừa số ra ngoài dấu căn</b> ta được $5\\sqrt{3} + 4\\sqrt{3} - 3\\sqrt{3} = 6\\sqrt{3}$ " +
      "— gọn và đẹp hơn hẳn! Bài này giúp bạn nắm các phép biến đổi đơn giản để <b>rút gọn</b> biểu thức chứa căn.",
    math: "\\sqrt{75} + \\sqrt{48} - \\sqrt{27} = 6\\sqrt{3}",
  },

  theory: [
    {
      heading: "1. Đưa thừa số ra ngoài (vào trong) dấu căn",
      html:
        "Với $a \\ge 0,\\ b \\ge 0$ ta có $\\sqrt{a^2 b} = a\\sqrt{b}$ (đưa thừa số $a$ <b>ra ngoài</b> dấu căn).<br>" +
        "Ngược lại, với $a \\ge 0,\\ b \\ge 0$ thì $a\\sqrt{b} = \\sqrt{a^2 b}$ (đưa thừa số <b>vào trong</b> dấu căn).<br>" +
        "Mẹo: hãy tách số dưới căn thành tích của một <b>số chính phương</b> với phần còn lại, ví dụ " +
        "$\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$.",
      formula: "\\sqrt{a^2 b} = a\\sqrt{b} \\quad (a \\ge 0,\\ b \\ge 0)",
    },
    {
      heading: "2. Khử mẫu của biểu thức lấy căn — Trục căn thức ở mẫu",
      html:
        "<b>Khử mẫu của biểu thức lấy căn:</b> với $a \\ge 0,\\ b > 0$ thì " +
        "$\\sqrt{\\dfrac{a}{b}} = \\dfrac{\\sqrt{ab}}{b}$.<br>" +
        "<b>Trục căn thức ở mẫu</b> là làm cho mẫu không còn dấu căn. Khi mẫu là $\\sqrt{b}$ ta nhân cả tử và " +
        "mẫu với $\\sqrt{b}$: $\\dfrac{a}{\\sqrt{b}} = \\dfrac{a\\sqrt{b}}{b}$ (với $b > 0$).",
      formula: "\\dfrac{a}{\\sqrt{b}} = \\dfrac{a\\sqrt{b}}{b} \\quad (b > 0)",
    },
    {
      heading: "3. Dùng biểu thức liên hợp và cộng trừ căn đồng dạng",
      html:
        "Khi mẫu có dạng $\\sqrt{m} \\pm \\sqrt{n}$, ta nhân cả tử và mẫu với <b>biểu thức liên hợp</b> " +
        "$\\sqrt{m} \\mp \\sqrt{n}$, dựa vào hằng đẳng thức $(\\sqrt{m} - \\sqrt{n})(\\sqrt{m} + \\sqrt{n}) = m - n$.<br>" +
        "Hai căn được gọi là <b>đồng dạng</b> nếu sau khi rút gọn chúng có cùng phần căn (cùng $\\sqrt{b}$). " +
        "Khi đó ta cộng, trừ chúng như các đơn thức đồng dạng, ví dụ $5\\sqrt{3} + 4\\sqrt{3} - 3\\sqrt{3} = 6\\sqrt{3}$.",
      formula: "(\\sqrt{m} - \\sqrt{n})(\\sqrt{m} + \\sqrt{n}) = m - n",
    },
  ],

  examples: [
    {
      title: "Cộng, trừ các căn đồng dạng",
      prompt: "Rút gọn $\\sqrt{75} + \\sqrt{48} - \\sqrt{27}$.",
      steps: [
        "Đưa thừa số ra ngoài: $\\sqrt{75} = \\sqrt{25 \\cdot 3} = 5\\sqrt{3}$.",
        "Tương tự: $\\sqrt{48} = \\sqrt{16 \\cdot 3} = 4\\sqrt{3}$ và $\\sqrt{27} = \\sqrt{9 \\cdot 3} = 3\\sqrt{3}$.",
        "Các căn đều có phần $\\sqrt{3}$ nên cộng trừ được: $5\\sqrt{3} + 4\\sqrt{3} - 3\\sqrt{3} = 6\\sqrt{3}$.",
        "Vậy $\\sqrt{75} + \\sqrt{48} - \\sqrt{27} = 6\\sqrt{3}$.",
      ],
    },
    {
      title: "Trục căn thức ở mẫu (mẫu là một căn)",
      prompt: "Trục căn thức ở mẫu của $\\dfrac{6}{\\sqrt{3}}$.",
      steps: [
        "Nhân cả tử và mẫu với $\\sqrt{3}$: $\\dfrac{6}{\\sqrt{3}} = \\dfrac{6\\sqrt{3}}{\\sqrt{3} \\cdot \\sqrt{3}} = \\dfrac{6\\sqrt{3}}{3}$.",
        "Rút gọn phân số: $\\dfrac{6\\sqrt{3}}{3} = 2\\sqrt{3}$.",
        "Vậy $\\dfrac{6}{\\sqrt{3}} = 2\\sqrt{3}$.",
      ],
    },
    {
      title: "Trục căn thức ở mẫu bằng biểu thức liên hợp",
      prompt: "Trục căn thức ở mẫu của $\\dfrac{2}{\\sqrt{5} - \\sqrt{3}}$.",
      steps: [
        "Mẫu có dạng $\\sqrt{5} - \\sqrt{3}$ nên liên hợp là $\\sqrt{5} + \\sqrt{3}$. Nhân cả tử và mẫu với liên hợp.",
        "Mẫu: $(\\sqrt{5} - \\sqrt{3})(\\sqrt{5} + \\sqrt{3}) = 5 - 3 = 2$.",
        "Do đó $\\dfrac{2}{\\sqrt{5} - \\sqrt{3}} = \\dfrac{2(\\sqrt{5} + \\sqrt{3})}{2} = \\sqrt{5} + \\sqrt{3}$.",
        "Vậy $\\dfrac{2}{\\sqrt{5} - \\sqrt{3}} = \\sqrt{5} + \\sqrt{3}$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Viết $\\sqrt{a + b} = \\sqrt{a} + \\sqrt{b}$, chẳng hạn $\\sqrt{9 + 16} = 3 + 4 = 7$.",
      right: "Căn của một tổng <b>không</b> bằng tổng các căn: $\\sqrt{9 + 16} = \\sqrt{25} = 5 \\ne 7$.",
      note: "Chỉ có $\\sqrt{ab} = \\sqrt{a}\\,\\sqrt{b}$ (với $a, b \\ge 0$), không có quy tắc cho tổng.",
    },
    {
      wrong: "Cộng hai căn không đồng dạng, ví dụ $\\sqrt{2} + \\sqrt{3} = \\sqrt{5}$.",
      right: "$\\sqrt{2}$ và $\\sqrt{3}$ khác phần căn nên <b>không gộp được</b>; để nguyên $\\sqrt{2} + \\sqrt{3}$.",
      note: "Chỉ cộng trừ được các căn <b>đồng dạng</b> (cùng phần căn sau khi rút gọn).",
    },
    {
      wrong: "Trục căn thức ở mẫu nhưng chỉ nhân tử (hoặc chỉ nhân mẫu) với $\\sqrt{b}$.",
      right: "Phải nhân <b>cả tử và mẫu</b> với cùng một biểu thức để giá trị phân thức không đổi.",
      note: "Nhân lệch tử/mẫu sẽ làm sai kết quả.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Đưa thừa số ra ngoài dấu căn: $\\sqrt{50}$.",
      hints: ["Tách $50 = 25 \\cdot 2$ với $25$ là số chính phương."],
      solution: "$\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$.",
    },
    {
      level: "Nhận biết",
      prompt: "Rút gọn $\\sqrt{20} + \\sqrt{45} - \\sqrt{5}$.",
      hints: ["$\\sqrt{20} = 2\\sqrt{5}$, $\\sqrt{45} = 3\\sqrt{5}$."],
      solution: "$2\\sqrt{5} + 3\\sqrt{5} - \\sqrt{5} = 4\\sqrt{5}$.",
    },
    {
      level: "Nhận biết",
      prompt: "Trục căn thức ở mẫu của $\\dfrac{5}{\\sqrt{2}}$.",
      hints: ["Nhân cả tử và mẫu với $\\sqrt{2}$."],
      solution: "$\\dfrac{5}{\\sqrt{2}} = \\dfrac{5\\sqrt{2}}{\\sqrt{2} \\cdot \\sqrt{2}} = \\dfrac{5\\sqrt{2}}{2}$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Rút gọn $3\\sqrt{2} + \\sqrt{18} - \\sqrt{8}$.",
      hints: ["$\\sqrt{18} = 3\\sqrt{2}$, $\\sqrt{8} = 2\\sqrt{2}$.", "Sau đó cộng trừ các căn đồng dạng."],
      solution: "$3\\sqrt{2} + 3\\sqrt{2} - 2\\sqrt{2} = 4\\sqrt{2}$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Khử mẫu của biểu thức lấy căn: $\\sqrt{\\dfrac{2}{3}}$.",
      hints: ["Dùng $\\sqrt{\\dfrac{a}{b}} = \\dfrac{\\sqrt{ab}}{b}$ với $a = 2,\\ b = 3$."],
      solution: "$\\sqrt{\\dfrac{2}{3}} = \\dfrac{\\sqrt{2 \\cdot 3}}{3} = \\dfrac{\\sqrt{6}}{3}$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Trục căn thức ở mẫu của $\\dfrac{1}{\\sqrt{3} + 1}$.",
      hints: ["Liên hợp của $\\sqrt{3} + 1$ là $\\sqrt{3} - 1$.", "$(\\sqrt{3} + 1)(\\sqrt{3} - 1) = 3 - 1 = 2$."],
      solution:
        "$\\dfrac{1}{\\sqrt{3} + 1} = \\dfrac{\\sqrt{3} - 1}{(\\sqrt{3} + 1)(\\sqrt{3} - 1)} = \\dfrac{\\sqrt{3} - 1}{2}$.",
    },
    {
      level: "Vận dụng",
      prompt: "Trục căn thức ở mẫu của $\\dfrac{4}{\\sqrt{7} - \\sqrt{3}}$.",
      hints: ["Nhân cả tử và mẫu với liên hợp $\\sqrt{7} + \\sqrt{3}$.", "$(\\sqrt{7} - \\sqrt{3})(\\sqrt{7} + \\sqrt{3}) = 7 - 3 = 4$."],
      solution:
        "$\\dfrac{4}{\\sqrt{7} - \\sqrt{3}} = \\dfrac{4(\\sqrt{7} + \\sqrt{3})}{7 - 3} = \\dfrac{4(\\sqrt{7} + \\sqrt{3})}{4} = \\sqrt{7} + \\sqrt{3}$.",
    },
    {
      level: "Vận dụng",
      prompt: "Rút gọn $\\dfrac{6}{\\sqrt{3}} + \\sqrt{12} - \\sqrt{27}$.",
      hints: ["$\\dfrac{6}{\\sqrt{3}} = 2\\sqrt{3}$.", "$\\sqrt{12} = 2\\sqrt{3}$, $\\sqrt{27} = 3\\sqrt{3}$."],
      solution: "$2\\sqrt{3} + 2\\sqrt{3} - 3\\sqrt{3} = \\sqrt{3}$.",
    },
  ],

  quiz: [
    { type: "mc", q: "Đưa thừa số ra ngoài dấu căn, $\\sqrt{72}$ bằng?",
      choices: ["$6\\sqrt{2}$", "$2\\sqrt{6}$", "$3\\sqrt{8}$", "$36\\sqrt{2}$"], answer: 0,
      explain: "$\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}$." },
    { type: "fill", q: "Rút gọn $\\sqrt{75} + \\sqrt{48} - \\sqrt{27}$ được $k\\sqrt{3}$. Giá trị của $k$ là bao nhiêu?",
      answer: 6, explain: "$5\\sqrt{3} + 4\\sqrt{3} - 3\\sqrt{3} = 6\\sqrt{3}$, nên $k = 6$." },
    { type: "mc", q: "Trục căn thức ở mẫu, $\\dfrac{2}{\\sqrt{5} - \\sqrt{3}}$ bằng?",
      choices: ["$\\sqrt{5} - \\sqrt{3}$", "$\\sqrt{5} + \\sqrt{3}$", "$2(\\sqrt{5} + \\sqrt{3})$", "$\\dfrac{\\sqrt{5} + \\sqrt{3}}{2}$"], answer: 1,
      explain: "Nhân liên hợp: mẫu $= 5 - 3 = 2$, nên kết quả $= \\dfrac{2(\\sqrt{5} + \\sqrt{3})}{2} = \\sqrt{5} + \\sqrt{3}$." },
  ],
});
