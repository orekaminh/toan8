/* Bài 31. Hình trụ và hình nón
   Chương X (Toán 9, Kết nối tri thức, Tập 2) */
MATH9.registerLesson({
  id: "bai-31-hinh-tru-hinh-non",
  visual: { type: "solid9", config: { kinds: ["cylinder", "cone"] } },
  chapter: "Chương X. Một số hình khối trong thực tiễn",
  order: 1,
  title: "Bài 31. Hình trụ và hình nón",

  objectives: [
    "Nhận biết hình trụ, hình nón và các yếu tố: bán kính đáy, chiều cao, đường sinh.",
    "Tính được diện tích xung quanh, diện tích toàn phần của hình trụ và hình nón.",
    "Tính được thể tích của hình trụ và hình nón.",
  ],

  intro: {
    text:
      "Lon nước ngọt có dạng <b>hình trụ</b>, chiếc nón lá hay cái phễu lại có dạng <b>hình nón</b>. " +
      "Đây là hai hình khối rất quen thuộc trong đời sống. Khi quay một hình chữ nhật quanh một cạnh ta " +
      "được hình trụ; khi quay một tam giác vuông quanh một cạnh góc vuông ta được hình nón. Bài này giúp " +
      "bạn tính được <b>diện tích xung quanh</b>, <b>diện tích toàn phần</b> và <b>thể tích</b> của chúng.",
    math: "V_{\\text{tru}} = \\pi r^2 h, \\qquad V_{\\text{non}} = \\dfrac{1}{3}\\pi r^2 h",
  },

  theory: [
    {
      heading: "1. Hình trụ",
      html:
        "<b>Hình trụ</b> có hai đáy là hai hình tròn bằng nhau, bán kính đáy là $r$ và chiều cao là $h$ " +
        "(khoảng cách giữa hai đáy).<br>" +
        "• Diện tích xung quanh: $S_{xq} = 2\\pi r h$.<br>" +
        "• Diện tích toàn phần (cả hai đáy): $S_{tp} = 2\\pi r h + 2\\pi r^2 = 2\\pi r (r + h)$.<br>" +
        "• Thể tích: $V = \\pi r^2 h$ (diện tích đáy nhân chiều cao).",
      formula: "S_{xq} = 2\\pi r h,\\quad S_{tp} = 2\\pi r (r + h),\\quad V = \\pi r^2 h",
    },
    {
      heading: "2. Hình nón",
      html:
        "<b>Hình nón</b> có một đáy là hình tròn bán kính $r$, một đỉnh, chiều cao $h$ và <b>đường sinh</b> " +
        "$l$ (đoạn nối đỉnh với một điểm trên đường tròn đáy).<br>" +
        "• Diện tích xung quanh: $S_{xq} = \\pi r l$.<br>" +
        "• Diện tích toàn phần: $S_{tp} = \\pi r l + \\pi r^2 = \\pi r (r + l)$.<br>" +
        "• Thể tích: $V = \\dfrac{1}{3}\\pi r^2 h$ (bằng một phần ba thể tích hình trụ cùng đáy, cùng chiều cao).",
      formula: "S_{xq} = \\pi r l,\\quad S_{tp} = \\pi r (r + l),\\quad V = \\dfrac{1}{3}\\pi r^2 h",
    },
    {
      heading: "3. Liên hệ giữa $r$, $h$, $l$ trong hình nón",
      html:
        "Trong hình nón, bán kính đáy $r$, chiều cao $h$ và đường sinh $l$ tạo thành một tam giác vuông " +
        "(với $l$ là cạnh huyền). Theo định lí Pythagore:",
      formula: "l^2 = r^2 + h^2 \\;\\Rightarrow\\; l = \\sqrt{r^2 + h^2}",
    },
  ],

  examples: [
    {
      title: "Thể tích hình trụ",
      prompt: "Tính thể tích hình trụ có bán kính đáy $r = 3$ và chiều cao $h = 5$.",
      steps: [
        "Áp dụng công thức $V = \\pi r^2 h$.",
        "$V = \\pi \\cdot 3^2 \\cdot 5 = \\pi \\cdot 9 \\cdot 5 = 45\\pi$.",
        "Vậy thể tích là $V = 45\\pi$ (đơn vị thể tích).",
      ],
    },
    {
      title: "Diện tích xung quanh và toàn phần của hình trụ",
      prompt: "Hình trụ có $r = 3$, $h = 5$. Tính $S_{xq}$ và $S_{tp}$.",
      steps: [
        "$S_{xq} = 2\\pi r h = 2\\pi \\cdot 3 \\cdot 5 = 30\\pi$.",
        "$S_{tp} = 2\\pi r (r + h) = 2\\pi \\cdot 3 \\cdot (3 + 5) = 2\\pi \\cdot 3 \\cdot 8 = 48\\pi$.",
        "Vậy $S_{xq} = 30\\pi$ và $S_{tp} = 48\\pi$.",
      ],
    },
    {
      title: "Hình nón: đường sinh, thể tích, diện tích xung quanh",
      prompt: "Hình nón có bán kính đáy $r = 3$ và chiều cao $h = 4$. Tính đường sinh $l$, thể tích $V$ và $S_{xq}$.",
      steps: [
        "Tính đường sinh: $l = \\sqrt{r^2 + h^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.",
        "Thể tích: $V = \\dfrac{1}{3}\\pi r^2 h = \\dfrac{1}{3}\\pi \\cdot 9 \\cdot 4 = 12\\pi$.",
        "Diện tích xung quanh: $S_{xq} = \\pi r l = \\pi \\cdot 3 \\cdot 5 = 15\\pi$.",
        "Vậy $l = 5$, $V = 12\\pi$, $S_{xq} = 15\\pi$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Dùng công thức thể tích hình trụ $V = \\pi r^2 h$ cho hình nón.",
      right: "Thể tích hình nón có thêm hệ số $\\dfrac{1}{3}$: $V = \\dfrac{1}{3}\\pi r^2 h$.",
      note: "Hình nón chỉ bằng <b>một phần ba</b> hình trụ cùng đáy, cùng chiều cao.",
    },
    {
      wrong: "Nhầm đường sinh $l$ với chiều cao $h$ khi tính diện tích xung quanh hình nón.",
      right: "Diện tích xung quanh hình nón dùng <b>đường sinh</b>: $S_{xq} = \\pi r l$.",
      note: "Khi đề chỉ cho $r$ và $h$, hãy tính $l = \\sqrt{r^2 + h^2}$ trước.",
    },
    {
      wrong: "Tính diện tích toàn phần hình trụ mà quên cộng diện tích hai đáy.",
      right: "$S_{tp} = S_{xq} + 2\\pi r^2 = 2\\pi r (r + h)$ — phải cộng <b>cả hai</b> đáy.",
      note: "Hình trụ có hai đáy, còn hình nón chỉ có một đáy.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Viết công thức tính thể tích hình trụ có bán kính đáy $r$ và chiều cao $h$.",
      hints: ["Thể tích bằng diện tích đáy nhân chiều cao."],
      solution: "$V = \\pi r^2 h$.",
    },
    {
      level: "Nhận biết",
      prompt: "Hình trụ có $r = 2$, $h = 6$. Tính diện tích xung quanh $S_{xq}$.",
      hints: ["Dùng $S_{xq} = 2\\pi r h$."],
      solution: "$S_{xq} = 2\\pi \\cdot 2 \\cdot 6 = 24\\pi$.",
    },
    {
      level: "Nhận biết",
      prompt: "Hình nón có $r = 6$, đường sinh $l = 10$. Tính diện tích xung quanh $S_{xq}$.",
      hints: ["Dùng $S_{xq} = \\pi r l$."],
      solution: "$S_{xq} = \\pi \\cdot 6 \\cdot 10 = 60\\pi$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Hình trụ có $r = 4$, $h = 7$. Tính thể tích $V$ và diện tích toàn phần $S_{tp}$.",
      hints: ["$V = \\pi r^2 h$.", "$S_{tp} = 2\\pi r (r + h)$."],
      solution:
        "$V = \\pi \\cdot 4^2 \\cdot 7 = \\pi \\cdot 16 \\cdot 7 = 112\\pi$. " +
        "$S_{tp} = 2\\pi \\cdot 4 \\cdot (4 + 7) = 8\\pi \\cdot 11 = 88\\pi$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Hình nón có bán kính đáy $r = 3$ và chiều cao $h = 4$. Tính đường sinh $l$ rồi tính thể tích $V$.",
      hints: ["$l = \\sqrt{r^2 + h^2}$.", "$V = \\dfrac{1}{3}\\pi r^2 h$."],
      solution:
        "$l = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$. " +
        "$V = \\dfrac{1}{3}\\pi \\cdot 9 \\cdot 4 = 12\\pi$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Hình nón có bán kính đáy $r = 5$ và đường sinh $l = 13$. Tính chiều cao $h$ và thể tích $V$.",
      hints: ["Từ $l^2 = r^2 + h^2$ suy ra $h = \\sqrt{l^2 - r^2}$.", "Sau đó dùng $V = \\dfrac{1}{3}\\pi r^2 h$."],
      solution:
        "$h = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$. " +
        "$V = \\dfrac{1}{3}\\pi \\cdot 5^2 \\cdot 12 = \\dfrac{1}{3}\\pi \\cdot 25 \\cdot 12 = 100\\pi$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Một thùng chứa hình trụ có bán kính đáy $r = 10\\ \\text{cm}$ và chiều cao $h = 20\\ \\text{cm}$. " +
        "Tính thể tích thùng (theo $\\pi$).",
      hints: ["Áp dụng $V = \\pi r^2 h$ với $r = 10$, $h = 20$."],
      solution:
        "$V = \\pi \\cdot 10^2 \\cdot 20 = \\pi \\cdot 100 \\cdot 20 = 2000\\pi\\ \\text{cm}^3$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Một hình trụ và một hình nón có cùng bán kính đáy $r = 3$ và cùng chiều cao $h = 5$. " +
        "Hỏi thể tích hình trụ gấp mấy lần thể tích hình nón?",
      hints: ["Tính riêng từng thể tích.", "Hình nón có hệ số $\\dfrac{1}{3}$."],
      solution:
        "Hình trụ: $V_1 = \\pi r^2 h = 45\\pi$. Hình nón: $V_2 = \\dfrac{1}{3}\\pi r^2 h = 15\\pi$. " +
        "Tỉ số $\\dfrac{V_1}{V_2} = \\dfrac{45\\pi}{15\\pi} = 3$, nên thể tích hình trụ gấp $3$ lần.",
    },
  ],

  quiz: [
    { type: "mc", q: "Công thức thể tích hình nón bán kính đáy $r$, chiều cao $h$ là?",
      choices: ["$V = \\pi r^2 h$", "$V = \\dfrac{1}{3}\\pi r^2 h$", "$V = 2\\pi r h$", "$V = \\pi r l$"], answer: 1,
      explain: "Thể tích hình nón bằng một phần ba thể tích hình trụ cùng đáy, cùng chiều cao." },
    { type: "fill", q: "Hình nón có $r = 3$, $h = 4$ thì đường sinh $l$ bằng bao nhiêu?", answer: 5,
      explain: "$l = \\sqrt{r^2 + h^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$." },
    { type: "mc", q: "Hình trụ có $r = 3$, $h = 5$. Diện tích xung quanh $S_{xq}$ bằng?",
      choices: ["$15\\pi$", "$30\\pi$", "$45\\pi$", "$48\\pi$"], answer: 1,
      explain: "$S_{xq} = 2\\pi r h = 2\\pi \\cdot 3 \\cdot 5 = 30\\pi$." },
  ],
});
