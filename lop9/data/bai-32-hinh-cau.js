/* Bài 32. Hình cầu
   Chương X (Toán 9, Kết nối tri thức, Tập 2) */
MATH9.registerLesson({
  id: "bai-32-hinh-cau",
  visual: { type: "solid9", config: { kinds: ["sphere"] } },
  chapter: "Chương X. Một số hình khối trong thực tiễn",
  order: 2,
  title: "Bài 32. Hình cầu",

  objectives: [
    "Nhận biết hình cầu, mặt cầu, tâm và bán kính của hình cầu.",
    "Tính được diện tích mặt cầu theo công thức $S = 4\\pi R^2$.",
    "Tính được thể tích hình cầu theo công thức $V = \\dfrac{4}{3}\\pi R^3$.",
  ],

  intro: {
    text:
      "Quả bóng đá, quả địa cầu, giọt sương... đều có dạng <b>hình cầu</b>. Khi quay nửa hình tròn " +
      "bán kính $R$ một vòng quanh đường kính, ta được một hình cầu bán kính $R$. Trong bài này ta học " +
      "hai công thức quan trọng: <b>diện tích mặt cầu</b> $S = 4\\pi R^2$ và <b>thể tích hình cầu</b> " +
      "$V = \\dfrac{4}{3}\\pi R^3$.",
    math: "S = 4\\pi R^2, \\quad V = \\dfrac{4}{3}\\pi R^3",
  },

  theory: [
    {
      heading: "1. Hình cầu và mặt cầu",
      html:
        "Khi quay nửa hình tròn tâm $O$ bán kính $R$ một vòng quanh đường kính cố định, ta được một " +
        "<b>hình cầu</b>. Điểm $O$ gọi là <b>tâm</b>, độ dài $R$ gọi là <b>bán kính</b> của hình cầu.<br>" +
        "Nửa đường tròn khi quay tạo nên <b>mặt cầu</b> — đó là toàn bộ bề mặt bao quanh hình cầu. " +
        "Mọi điểm trên mặt cầu đều cách tâm $O$ một khoảng đúng bằng $R$.",
    },
    {
      heading: "2. Mặt cắt của hình cầu",
      html:
        "Khi cắt hình cầu bởi một mặt phẳng, mặt cắt luôn là một <b>hình tròn</b>.<br>" +
        "Đặc biệt, nếu mặt phẳng đi <b>qua tâm</b> $O$ thì mặt cắt là <b>hình tròn lớn</b> có bán kính " +
        "đúng bằng bán kính $R$ của hình cầu.",
    },
    {
      heading: "3. Diện tích mặt cầu và thể tích hình cầu",
      html:
        "Với hình cầu (mặt cầu) bán kính $R$:<br>" +
        "• <b>Diện tích mặt cầu</b>: $S = 4\\pi R^2$.<br>" +
        "• <b>Thể tích hình cầu</b>: $V = \\dfrac{4}{3}\\pi R^3$.<br>" +
        "Nếu biết đường kính $d$ thì bán kính là $R = \\dfrac{d}{2}$ rồi mới thay vào công thức.",
      formula: "S = 4\\pi R^2 \\qquad V = \\dfrac{4}{3}\\pi R^3",
    },
  ],

  examples: [
    {
      title: "Tính diện tích mặt cầu",
      prompt: "Tính diện tích mặt cầu bán kính $R = 2$ cm (theo $\\pi$).",
      steps: [
        "Áp dụng công thức $S = 4\\pi R^2$.",
        "Thay $R = 2$: $S = 4\\pi \\cdot 2^2 = 4\\pi \\cdot 4 = 16\\pi$.",
        "Vậy diện tích mặt cầu là $S = 16\\pi$ cm$^2$.",
      ],
    },
    {
      title: "Tính thể tích và diện tích cùng một hình cầu",
      prompt: "Cho hình cầu bán kính $R = 3$ cm. Tính thể tích $V$ và diện tích mặt cầu $S$ (theo $\\pi$).",
      steps: [
        "Thể tích: $V = \\dfrac{4}{3}\\pi R^3 = \\dfrac{4}{3}\\pi \\cdot 3^3 = \\dfrac{4}{3}\\pi \\cdot 27 = 36\\pi$ cm$^3$.",
        "Diện tích mặt cầu: $S = 4\\pi R^2 = 4\\pi \\cdot 3^2 = 4\\pi \\cdot 9 = 36\\pi$ cm$^2$.",
        "Vậy $V = 36\\pi$ cm$^3$ và $S = 36\\pi$ cm$^2$.",
      ],
    },
    {
      title: "Bài toán quả bóng (cho đường kính)",
      prompt: "Một quả bóng có dạng hình cầu với đường kính $6$ cm. Tính thể tích quả bóng (theo $\\pi$).",
      steps: [
        "Bán kính bằng nửa đường kính: $R = \\dfrac{6}{2} = 3$ cm.",
        "Thể tích: $V = \\dfrac{4}{3}\\pi R^3 = \\dfrac{4}{3}\\pi \\cdot 3^3 = \\dfrac{4}{3}\\pi \\cdot 27 = 36\\pi$.",
        "Vậy thể tích quả bóng là $V = 36\\pi$ cm$^3$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Dùng nhầm công thức diện tích thành $S = \\pi R^2$ (công thức của hình tròn).",
      right: "Diện tích <b>mặt cầu</b> là $S = 4\\pi R^2$ (gấp $4$ lần diện tích hình tròn lớn).",
      note: "Hình tròn là hình phẳng, còn mặt cầu là bề mặt trong không gian.",
    },
    {
      wrong: "Khi tính thể tích lại quên hệ số $\\dfrac{4}{3}$, viết thành $V = \\pi R^3$.",
      right: "Thể tích hình cầu là $V = \\dfrac{4}{3}\\pi R^3$, không được bỏ phân số $\\dfrac{4}{3}$.",
      note: "Hãy nhớ rõ: diện tích có $4$, thể tích có $\\dfrac{4}{3}$.",
    },
    {
      wrong: "Đề cho đường kính nhưng thay luôn đường kính vào chỗ $R$ trong công thức.",
      right: "Phải đổi sang bán kính trước: $R = \\dfrac{d}{2}$ rồi mới thay vào.",
      note: "Nhầm $R$ với $d$ sẽ làm kết quả sai rất nhiều lần.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Viết công thức tính diện tích mặt cầu và thể tích hình cầu bán kính $R$.",
      hints: ["Diện tích có hệ số $4$, thể tích có hệ số $\\dfrac{4}{3}$."],
      solution: "Diện tích mặt cầu $S = 4\\pi R^2$; thể tích hình cầu $V = \\dfrac{4}{3}\\pi R^3$.",
    },
    {
      level: "Nhận biết",
      prompt: "Mặt cắt của hình cầu khi cắt bởi một mặt phẳng đi qua tâm là hình gì? Bán kính bằng bao nhiêu?",
      hints: ["Mọi mặt cắt của hình cầu đều là hình tròn.", "Đi qua tâm cho mặt cắt lớn nhất."],
      solution: "Là <b>hình tròn lớn</b> có bán kính bằng bán kính $R$ của hình cầu.",
    },
    {
      level: "Nhận biết",
      prompt: "Tính diện tích mặt cầu bán kính $R = 1$ cm (theo $\\pi$).",
      hints: ["Thay $R = 1$ vào $S = 4\\pi R^2$."],
      solution: "$S = 4\\pi \\cdot 1^2 = 4\\pi$ cm$^2$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tính thể tích hình cầu bán kính $R = 3$ cm (theo $\\pi$).",
      hints: ["Dùng $V = \\dfrac{4}{3}\\pi R^3$ với $R = 3$.", "Tính $3^3 = 27$ trước."],
      solution: "$V = \\dfrac{4}{3}\\pi \\cdot 3^3 = \\dfrac{4}{3}\\pi \\cdot 27 = 36\\pi$ cm$^3$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Một hình cầu có diện tích mặt cầu $S = 64\\pi$ cm$^2$. Tìm bán kính $R$.",
      hints: ["Từ $S = 4\\pi R^2$ suy ra $R^2 = \\dfrac{S}{4\\pi}$.", "Lấy căn bậc hai để tìm $R$."],
      solution:
        "$4\\pi R^2 = 64\\pi \\Rightarrow R^2 = \\dfrac{64\\pi}{4\\pi} = 16 \\Rightarrow R = \\sqrt{16} = 4$ cm.",
    },
    {
      level: "Thông hiểu",
      prompt: "Một quả bóng hình cầu có đường kính $10$ cm. Tính diện tích mặt cầu của quả bóng (theo $\\pi$).",
      hints: ["Đổi đường kính sang bán kính: $R = \\dfrac{d}{2}$.", "Thay $R$ vào $S = 4\\pi R^2$."],
      solution: "$R = \\dfrac{10}{2} = 5$ cm; $S = 4\\pi \\cdot 5^2 = 4\\pi \\cdot 25 = 100\\pi$ cm$^2$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Một hình cầu có thể tích $V = 36\\pi$ cm$^3$. Tìm bán kính $R$, rồi tính diện tích mặt cầu $S$ (theo $\\pi$).",
      hints: ["Từ $V = \\dfrac{4}{3}\\pi R^3$ suy ra $R^3 = \\dfrac{3V}{4\\pi}$.", "Tìm $R$ rồi thay vào $S = 4\\pi R^2$."],
      solution:
        "$\\dfrac{4}{3}\\pi R^3 = 36\\pi \\Rightarrow R^3 = \\dfrac{3 \\cdot 36\\pi}{4\\pi} = 27 \\Rightarrow R = 3$ cm. " +
        "Khi đó $S = 4\\pi \\cdot 3^2 = 36\\pi$ cm$^2$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Hai hình cầu có bán kính lần lượt là $R_1 = 2$ cm và $R_2 = 4$ cm. So sánh thể tích hai hình cầu đó.",
      hints: ["Tính riêng từng thể tích bằng $V = \\dfrac{4}{3}\\pi R^3$.", "Lập tỉ số hai thể tích."],
      solution:
        "$V_1 = \\dfrac{4}{3}\\pi \\cdot 2^3 = \\dfrac{32}{3}\\pi$; $V_2 = \\dfrac{4}{3}\\pi \\cdot 4^3 = \\dfrac{256}{3}\\pi$. " +
        "Tỉ số $\\dfrac{V_2}{V_1} = \\dfrac{256}{32} = 8$, nên thể tích hình cầu thứ hai gấp $8$ lần hình cầu thứ nhất.",
    },
  ],

  quiz: [
    { type: "mc", q: "Công thức tính diện tích mặt cầu bán kính $R$ là gì?",
      choices: ["$S = \\pi R^2$", "$S = 4\\pi R^2$", "$S = \\dfrac{4}{3}\\pi R^3$", "$S = 2\\pi R$"], answer: 1,
      explain: "Diện tích mặt cầu là $S = 4\\pi R^2$." },
    { type: "fill", q: "Hình cầu bán kính $R = 3$ cm có thể tích bằng bao nhiêu lần $\\pi$ (đơn vị cm$^3$)?",
      answer: 36, explain: "$V = \\dfrac{4}{3}\\pi \\cdot 3^3 = \\dfrac{4}{3}\\pi \\cdot 27 = 36\\pi$, tức $36$ lần $\\pi$." },
    { type: "mc", q: "Mặt cắt đi qua tâm của một hình cầu bán kính $R$ là hình gì?",
      choices: ["Hình tròn bán kính $R$", "Hình tròn bán kính $2R$", "Hình vuông cạnh $R$", "Hình elip"], answer: 0,
      explain: "Mặt cắt qua tâm là hình tròn lớn, có bán kính đúng bằng $R$." },
  ],
});
