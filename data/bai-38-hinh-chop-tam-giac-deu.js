/* Bài 38. Hình chóp tam giác đều — Chương X (KNTT, Tập 2) */
MATH8.registerLesson({
  id: "bai-38-hinh-chop-tam-giac-deu",
  chapter: "Chương X. Một số hình khối trong thực tiễn",
  order: 1,
  title: "Bài 38. Hình chóp tam giác đều",

  objectives: [
    "Nhận biết hình chóp tam giác đều và các yếu tố: đỉnh, cạnh bên, mặt bên, mặt đáy, trung đoạn, chiều cao.",
    "Tính diện tích xung quanh: $S_{xq} = \\dfrac{1}{2} \\cdot C \\cdot d$.",
    "Tính thể tích: $V = \\dfrac{1}{3} \\cdot S \\cdot h$.",
  ],

  intro: {
    text:
      "Kim tự tháp ba mặt, một số mái che, chiếc chặn giấy… có dạng <b>hình chóp tam giác đều</b>: đáy là " +
      "tam giác đều, các mặt bên là tam giác cân bằng nhau chụm tại một đỉnh. Xoay thử mô hình ở dưới và " +
      "trượt thanh để xem diện tích, thể tích.",
  },

  theory: [
    {
      heading: "1. Hình chóp tam giác đều",
      html:
        "<b>Hình chóp tam giác đều</b> có đáy là <b>tam giác đều</b>; các <b>mặt bên</b> là ba tam giác cân " +
        "bằng nhau, chung <b>đỉnh</b> $S$.<br>" +
        "• <b>Chiều cao</b> $h$: đoạn từ đỉnh $S$ vuông góc xuống tâm đáy.<br>" +
        "• <b>Trung đoạn</b> $d$: chiều cao của một mặt bên (từ $S$ tới trung điểm một cạnh đáy).",
    },
    {
      heading: "2. Diện tích xung quanh",
      html:
        "Diện tích xung quanh bằng nửa chu vi đáy nhân với trung đoạn ($C$ là chu vi đáy, $d$ là trung đoạn):",
      formula: "S_{xq} = \\dfrac{1}{2} \\cdot C \\cdot d",
    },
    {
      heading: "3. Diện tích toàn phần và thể tích",
      html:
        "Diện tích toàn phần $= S_{xq} + S$ (với $S$ là diện tích đáy). Thể tích bằng một phần ba diện tích " +
        "đáy nhân chiều cao ($h$ là chiều cao hình chóp):",
      formula: "V = \\dfrac{1}{3} \\cdot S \\cdot h",
    },
  ],

  visual: { type: "solid", config: { kind: "triangle" } },

  examples: [
    {
      title: "Diện tích xung quanh",
      prompt: "Hình chóp tam giác đều có cạnh đáy $4$ cm và trung đoạn $6$ cm. Tính diện tích xung quanh.",
      steps: [
        "Chu vi đáy $C = 3 \\cdot 4 = 12$ cm.",
        "$S_{xq} = \\dfrac{1}{2} \\cdot C \\cdot d = \\dfrac{1}{2} \\cdot 12 \\cdot 6 = 36\\ \\text{cm}^2$.",
      ],
    },
    {
      title: "Thể tích",
      prompt: "Hình chóp tam giác đều có diện tích đáy $S = 10\\ \\text{cm}^2$ và chiều cao $h = 9$ cm. Tính thể tích.",
      steps: [
        "$V = \\dfrac{1}{3} \\cdot S \\cdot h = \\dfrac{1}{3} \\cdot 10 \\cdot 9$.",
        "$V = 30\\ \\text{cm}^3$.",
      ],
    },
    {
      title: "Diện tích toàn phần",
      prompt: "Hình chóp tam giác đều có $S_{xq} = 36\\ \\text{cm}^2$ và diện tích đáy $S = 7\\ \\text{cm}^2$. Tính diện tích toàn phần.",
      steps: [
        "Diện tích toàn phần $= S_{xq} + S$.",
        "$= 36 + 7 = 43\\ \\text{cm}^2$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Quên hệ số $\\dfrac{1}{2}$: tính $S_{xq} = C \\cdot d$.",
      right: "$S_{xq} = \\dfrac{1}{2} \\cdot C \\cdot d$.",
      note: "Diện tích xung quanh có hệ số $\\dfrac{1}{2}$ (tổng các tam giác mặt bên).",
    },
    {
      wrong: "Nhầm trung đoạn $d$ với chiều cao $h$.",
      right: "$h$ đi từ đỉnh xuống TÂM đáy; $d$ đi từ đỉnh xuống TRUNG ĐIỂM một cạnh đáy.",
      note: "Dùng $d$ cho $S_{xq}$, dùng $h$ cho thể tích.",
    },
    {
      wrong: "Quên hệ số $\\dfrac{1}{3}$ khi tính thể tích.",
      right: "$V = \\dfrac{1}{3} \\cdot S \\cdot h$ (thể tích chóp bằng $\\dfrac{1}{3}$ thể tích khối lăng trụ cùng đáy, cùng chiều cao).",
      note: "Chóp có hệ số $\\dfrac{1}{3}$.",
    },
  ],

  exercises: [
    { level: "Nhận biết", prompt: "Đáy của hình chóp tam giác đều là hình gì?",
      hints: ["Tên gọi đã gợi ý."],
      solution: "Là tam giác đều." },
    { level: "Nhận biết", prompt: "Hình chóp tam giác đều có cạnh đáy $5$ cm. Tính chu vi đáy.",
      hints: ["Tam giác đều có ba cạnh bằng nhau."],
      solution: "Chu vi $= 3 \\cdot 5 = 15$ cm." },
    { level: "Nhận biết", prompt: "Viết công thức tính thể tích hình chóp.",
      hints: ["Một phần ba diện tích đáy nhân chiều cao."],
      solution: "$V = \\dfrac{1}{3} \\cdot S \\cdot h$." },
    { level: "Thông hiểu", prompt: "Hình chóp tam giác đều có cạnh đáy $6$ cm, trung đoạn $5$ cm. Tính $S_{xq}$.",
      hints: ["$C = 3 \\cdot 6$; rồi $S_{xq} = \\dfrac{1}{2} C d$."],
      solution: "$C = 18$; $S_{xq} = \\dfrac{1}{2} \\cdot 18 \\cdot 5 = 45\\ \\text{cm}^2$." },
    { level: "Thông hiểu", prompt: "Hình chóp tam giác đều có diện tích đáy $12\\ \\text{cm}^2$, chiều cao $10$ cm. Tính thể tích.",
      hints: ["$V = \\dfrac{1}{3} S h$."],
      solution: "$V = \\dfrac{1}{3} \\cdot 12 \\cdot 10 = 40\\ \\text{cm}^3$." },
    { level: "Thông hiểu", prompt: "Một hình chóp tam giác đều có $S_{xq} = 54\\ \\text{cm}^2$, cạnh đáy $6$ cm. Tính trung đoạn $d$.",
      hints: ["$C = 18$; $S_{xq} = \\dfrac{1}{2} C d$ → giải tìm $d$."],
      solution: "$54 = \\dfrac{1}{2} \\cdot 18 \\cdot d = 9d \\Rightarrow d = 6$ cm." },
    { level: "Vận dụng", prompt:
        "Một chiếc lều hình chóp tam giác đều có cạnh đáy $2$ m, trung đoạn $2{,}5$ m. Tính diện tích vải " +
        "cần để làm ba mặt bên (bỏ qua mép nối).",
      hints: ["Ba mặt bên chính là diện tích xung quanh.", "$C = 3 \\cdot 2$; $S_{xq} = \\dfrac{1}{2} C d$."],
      solution: "$C = 6$ m; $S_{xq} = \\dfrac{1}{2} \\cdot 6 \\cdot 2{,}5 = 7{,}5\\ \\text{m}^2$ vải." },
    { level: "Vận dụng", prompt:
        "Hình chóp tam giác đều có thể tích $V = 60\\ \\text{cm}^3$ và chiều cao $h = 9$ cm. Tính diện tích đáy $S$.",
      hints: ["Từ $V = \\dfrac{1}{3} S h$ suy ra $S = \\dfrac{3V}{h}$."],
      solution: "$S = \\dfrac{3 \\cdot 60}{9} = \\dfrac{180}{9} = 20\\ \\text{cm}^2$." },
  ],

  quiz: [
    { type: "mc", q: "Diện tích xung quanh của hình chóp đều được tính bằng:", choices: ["$\\dfrac{1}{2} \\times$ chu vi đáy $\\times$ trung đoạn", "chu vi đáy $\\times$ trung đoạn", "$\\dfrac{1}{2} \\times$ diện tích đáy $\\times$ chiều cao", "diện tích đáy $\\times$ chiều cao"], answer: 0, explain: "$S_{xq} = \\dfrac{1}{2} C \\cdot d$." },
    { type: "fill", q: "Chóp tam giác đều cạnh đáy $4$, trung đoạn $6$. Tính diện tích xung quanh $S_{xq}$.", answer: 36, explain: "$\\dfrac{1}{2}(3 \\cdot 4)(6) = 36$." },
    { type: "fill", q: "Hình chóp có diện tích đáy $10$, chiều cao $9$. Tính thể tích $V$.", answer: 30, explain: "$V = \\dfrac{1}{3} \\cdot 10 \\cdot 9 = 30$." },
  ],
});
