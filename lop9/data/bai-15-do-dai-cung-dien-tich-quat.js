/* Bài 15. Độ dài của cung tròn. Diện tích hình quạt tròn và hình vành khuyên
   Chương V (Toán 9, Kết nối tri thức, Tập 1) */
MATH9.registerLesson({
  id: "bai-15-do-dai-cung-dien-tich-quat",
  visual: { type: "sector", config: {} },
  chapter: "Chương V. Đường tròn",
  order: 3,
  title: "Bài 15. Độ dài của cung tròn. Diện tích hình quạt tròn và hình vành khuyên",

  objectives: [
    "Tính được chu vi, diện tích hình tròn và độ dài cung tròn ứng với số đo cho trước.",
    "Tính được diện tích hình quạt tròn theo số đo cung hoặc theo độ dài cung.",
    "Nhận biết và tính được diện tích hình vành khuyên giữa hai đường tròn đồng tâm.",
  ],

  intro: {
    text:
      "Khi cắt một chiếc bánh pizza hình tròn thành các miếng, mỗi miếng là một <b>hình quạt tròn</b>. " +
      "Phần viền cong của miếng bánh là một <b>cung tròn</b>. Trong bài này ta sẽ học cách tính " +
      "<b>độ dài cung</b>, <b>diện tích hình quạt</b> và <b>diện tích hình vành khuyên</b> (phần nằm giữa " +
      "hai đường tròn đồng tâm). Khởi đầu là hai công thức quen thuộc: chu vi $C = 2\\pi R$ và diện tích " +
      "hình tròn $S = \\pi R^2$.",
    math: "C = 2\\pi R, \\quad S = \\pi R^2",
  },

  theory: [
    {
      heading: "1. Chu vi và diện tích hình tròn",
      html:
        "Với hình tròn bán kính $R$ (đường kính $d = 2R$):<br>" +
        "<b>Chu vi:</b> $C = 2\\pi R = \\pi d$.<br>" +
        "<b>Diện tích:</b> $S = \\pi R^2$.<br>" +
        "Số $\\pi \\approx 3{,}14$ là một hằng số, dùng chung cho mọi hình tròn.",
      formula: "C = 2\\pi R = \\pi d, \\qquad S = \\pi R^2",
    },
    {
      heading: "2. Độ dài cung tròn",
      html:
        "Cả đường tròn ứng với cung $360^\\circ$ và có độ dài $2\\pi R$. Một cung có số đo $n^\\circ$ chỉ " +
        "chiếm phần $\\dfrac{n}{360}$ của cả đường tròn, nên độ dài của nó là:<br>" +
        "$l = 2\\pi R \\cdot \\dfrac{n}{360} = \\dfrac{\\pi R n}{180}$.",
      formula: "l = \\dfrac{\\pi R n}{180}",
    },
    {
      heading: "3. Diện tích hình quạt tròn và hình vành khuyên",
      html:
        "<b>Hình quạt tròn</b> bán kính $R$, cung $n^\\circ$ chiếm phần $\\dfrac{n}{360}$ của hình tròn nên " +
        "có diện tích $S = \\pi R^2 \\cdot \\dfrac{n}{360} = \\dfrac{\\pi R^2 n}{360} = \\dfrac{l R}{2}$ " +
        "(với $l$ là độ dài cung).<br>" +
        "<b>Hình vành khuyên</b> là phần nằm giữa hai đường tròn đồng tâm bán kính $R$ và $r$ $(R > r)$. " +
        "Diện tích của nó bằng hiệu hai hình tròn: $S = \\pi R^2 - \\pi r^2 = \\pi (R^2 - r^2)$.",
      formula: "S_{\\text{quat}} = \\dfrac{\\pi R^2 n}{360} = \\dfrac{l R}{2}, \\qquad S_{\\text{vanh khuyen}} = \\pi (R^2 - r^2)",
    },
  ],

  examples: [
    {
      title: "Độ dài cung tròn",
      prompt: "Tính độ dài cung $60^\\circ$ của đường tròn bán kính $R = 6$ (cm).",
      steps: [
        "Áp dụng công thức $l = \\dfrac{\\pi R n}{180}$ với $R = 6,\\ n = 60$.",
        "$l = \\dfrac{\\pi \\cdot 6 \\cdot 60}{180} = \\dfrac{360\\pi}{180} = 2\\pi$.",
        "Vậy độ dài cung là $l = 2\\pi \\approx 6{,}28$ (cm).",
      ],
    },
    {
      title: "Diện tích hình quạt tròn",
      prompt: "Tính diện tích hình quạt tròn cung $120^\\circ$, bán kính $R = 3$ (cm).",
      steps: [
        "Áp dụng $S = \\dfrac{\\pi R^2 n}{360}$ với $R = 3,\\ n = 120$.",
        "$S = \\dfrac{\\pi \\cdot 3^2 \\cdot 120}{360} = \\dfrac{1080\\pi}{360} = 3\\pi$.",
        "Vậy diện tích hình quạt là $S = 3\\pi \\approx 9{,}42$ (cm$^2$).",
      ],
    },
    {
      title: "Diện tích hình vành khuyên",
      prompt: "Hai đường tròn đồng tâm có bán kính $R = 5$ (cm) và $r = 3$ (cm). Tính diện tích hình vành khuyên.",
      steps: [
        "Áp dụng $S = \\pi (R^2 - r^2)$ với $R = 5,\\ r = 3$.",
        "$S = \\pi (5^2 - 3^2) = \\pi (25 - 9) = 16\\pi$.",
        "Vậy diện tích hình vành khuyên là $S = 16\\pi \\approx 50{,}24$ (cm$^2$).",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Dùng $l = \\dfrac{\\pi R n}{360}$ khi tính độ dài cung.",
      right: "Độ dài cung là $l = \\dfrac{\\pi R n}{180}$ (mẫu số $180$); chỉ có diện tích quạt mới dùng $360$.",
      note: "Nhớ: độ dài cung tỉ lệ với chu vi $2\\pi R$, còn diện tích quạt tỉ lệ với $\\pi R^2$.",
    },
    {
      wrong: "Tính diện tích quạt mà thay $R$ chứ không phải $R^2$, ví dụ $S = \\dfrac{\\pi R n}{360}$.",
      right: "Diện tích quạt là $S = \\dfrac{\\pi R^2 n}{360}$ — bán kính phải bình phương.",
      note: "Diện tích luôn gắn với $R^2$ (đơn vị là cm$^2$, m$^2$, ...).",
    },
    {
      wrong: "Tính vành khuyên là $S = \\pi (R - r)^2$.",
      right: "Diện tích vành khuyên là hiệu hai hình tròn: $S = \\pi R^2 - \\pi r^2 = \\pi (R^2 - r^2)$.",
      note: "$\\pi (R^2 - r^2)$ khác $\\pi (R - r)^2$; đừng nhầm hằng đẳng thức.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Tính chu vi và diện tích hình tròn bán kính $R = 4$ (cm).",
      hints: ["Dùng $C = 2\\pi R$ và $S = \\pi R^2$."],
      solution: "$C = 2\\pi \\cdot 4 = 8\\pi$ (cm); $S = \\pi \\cdot 4^2 = 16\\pi$ (cm$^2$).",
    },
    {
      level: "Nhận biết",
      prompt: "Tính độ dài cung $90^\\circ$ của đường tròn bán kính $R = 4$ (cm).",
      hints: ["Áp dụng $l = \\dfrac{\\pi R n}{180}$ với $n = 90$."],
      solution: "$l = \\dfrac{\\pi \\cdot 4 \\cdot 90}{180} = \\dfrac{360\\pi}{180} = 2\\pi$ (cm).",
    },
    {
      level: "Nhận biết",
      prompt: "Tính diện tích hình quạt tròn cung $90^\\circ$, bán kính $R = 2$ (cm).",
      hints: ["Áp dụng $S = \\dfrac{\\pi R^2 n}{360}$ với $n = 90$."],
      solution: "$S = \\dfrac{\\pi \\cdot 2^2 \\cdot 90}{360} = \\dfrac{360\\pi}{360} = \\pi$ (cm$^2$).",
    },
    {
      level: "Thông hiểu",
      prompt: "Tính độ dài cung $120^\\circ$ của đường tròn bán kính $R = 9$ (cm).",
      hints: ["Thay $R = 9,\\ n = 120$ vào $l = \\dfrac{\\pi R n}{180}$."],
      solution: "$l = \\dfrac{\\pi \\cdot 9 \\cdot 120}{180} = \\dfrac{1080\\pi}{180} = 6\\pi$ (cm).",
    },
    {
      level: "Thông hiểu",
      prompt: "Cho hình quạt tròn bán kính $R = 6$ (cm) có độ dài cung $l = 4\\pi$ (cm). Tính diện tích hình quạt.",
      hints: ["Dùng công thức $S = \\dfrac{l R}{2}$."],
      solution: "$S = \\dfrac{l R}{2} = \\dfrac{4\\pi \\cdot 6}{2} = 12\\pi$ (cm$^2$).",
    },
    {
      level: "Thông hiểu",
      prompt: "Tính diện tích hình vành khuyên giữa hai đường tròn đồng tâm bán kính $R = 7$ (cm) và $r = 5$ (cm).",
      hints: ["Áp dụng $S = \\pi (R^2 - r^2)$."],
      solution: "$S = \\pi (7^2 - 5^2) = \\pi (49 - 25) = 24\\pi$ (cm$^2$).",
    },
    {
      level: "Vận dụng",
      prompt:
        "Một hình quạt tròn cung $n^\\circ$, bán kính $R = 6$ (cm) có diện tích $S = 6\\pi$ (cm$^2$). " +
        "Tìm số đo $n$ của cung.",
      hints: ["Thay vào $S = \\dfrac{\\pi R^2 n}{360}$ rồi giải tìm $n$.", "Lưu ý $R^2 = 36$."],
      solution:
        "$6\\pi = \\dfrac{\\pi \\cdot 36 \\cdot n}{360} = \\dfrac{n\\pi}{10} \\Rightarrow n = 60$. Vậy cung có số đo $60^\\circ$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Một chiếc đồng hồ có kim phút dài $10$ (cm). Hỏi đầu kim phút đi được quãng đường bao nhiêu khi " +
        "kim quay từ vị trí số $12$ đến số $3$?",
      hints: [
        "Từ số $12$ đến số $3$ kim quét một cung $\\dfrac{1}{4}$ vòng, tức $90^\\circ$.",
        "Quãng đường là độ dài cung $l = \\dfrac{\\pi R n}{180}$ với $R = 10$.",
      ],
      solution:
        "$l = \\dfrac{\\pi \\cdot 10 \\cdot 90}{180} = \\dfrac{900\\pi}{180} = 5\\pi \\approx 15{,}7$ (cm).",
    },
  ],

  quiz: [
    { type: "mc", q: "Độ dài cung $n^\\circ$ của đường tròn bán kính $R$ được tính bằng công thức nào?",
      choices: ["$l = \\dfrac{\\pi R n}{360}$", "$l = \\dfrac{\\pi R n}{180}$", "$l = \\dfrac{\\pi R^2 n}{180}$", "$l = 2\\pi R n$"], answer: 1,
      explain: "Cung $n^\\circ$ chiếm $\\dfrac{n}{360}$ của chu vi $2\\pi R$, cho $l = \\dfrac{\\pi R n}{180}$." },
    { type: "fill", q: "Tính độ dài cung $60^\\circ$ của đường tròn bán kính $R = 6$. Hệ số đứng trước $\\pi$ trong kết quả là bao nhiêu?",
      answer: 2, explain: "$l = \\dfrac{\\pi \\cdot 6 \\cdot 60}{180} = 2\\pi$, nên hệ số là $2$." },
    { type: "fill", q: "Tính diện tích hình vành khuyên với $R = 5$ và $r = 3$. Hệ số đứng trước $\\pi$ trong kết quả là bao nhiêu?",
      answer: 16, explain: "$S = \\pi (5^2 - 3^2) = \\pi (25 - 9) = 16\\pi$, nên hệ số là $16$." },
  ],
});
