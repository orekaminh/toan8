/* Bài 39. Hình chóp tứ giác đều — Chương X (KNTT, Tập 2) */
MATH8.registerLesson({
  id: "bai-39-hinh-chop-tu-giac-deu",
  chapter: "Chương X. Một số hình khối trong thực tiễn",
  order: 2,
  title: "Bài 39. Hình chóp tứ giác đều",

  objectives: [
    "Nhận biết hình chóp tứ giác đều (đáy hình vuông) và các yếu tố của nó.",
    "Tính diện tích xung quanh và diện tích toàn phần.",
    "Tính thể tích hình chóp tứ giác đều.",
  ],

  intro: {
    text:
      "Kim tự tháp Ai Cập, chóp nón đèn, nóc tháp… thường là <b>hình chóp tứ giác đều</b>: đáy là hình " +
      "vuông, bốn mặt bên là tam giác cân bằng nhau. Công thức diện tích, thể tích giống hình chóp tam " +
      "giác đều — chỉ khác đáy là hình vuông.",
  },

  theory: [
    {
      heading: "1. Hình chóp tứ giác đều",
      html:
        "<b>Hình chóp tứ giác đều</b> có đáy là <b>hình vuông</b> cạnh $a$; bốn <b>mặt bên</b> là tam giác " +
        "cân bằng nhau, chung đỉnh $S$. <b>Trung đoạn</b> $d$ là chiều cao một mặt bên; <b>chiều cao</b> $h$ " +
        "đi từ $S$ vuông góc xuống tâm hình vuông.",
    },
    {
      heading: "2. Diện tích xung quanh và toàn phần",
      html:
        "Chu vi đáy $C = 4a$. Diện tích xung quanh và toàn phần ($S = a^2$ là diện tích đáy):",
      formula: "S_{xq} = \\dfrac{1}{2} \\cdot C \\cdot d = 2a \\cdot d;\\qquad S_{tp} = S_{xq} + a^2",
    },
    {
      heading: "3. Thể tích",
      html: "Thể tích bằng một phần ba diện tích đáy nhân chiều cao:",
      formula: "V = \\dfrac{1}{3} \\cdot a^2 \\cdot h",
    },
  ],

  visual: { type: "solid", config: { kind: "square" } },

  examples: [
    {
      title: "Diện tích xung quanh",
      prompt: "Hình chóp tứ giác đều có cạnh đáy $6$ cm, trung đoạn $5$ cm. Tính diện tích xung quanh.",
      steps: [
        "Chu vi đáy $C = 4 \\cdot 6 = 24$ cm.",
        "$S_{xq} = \\dfrac{1}{2} \\cdot 24 \\cdot 5 = 60\\ \\text{cm}^2$.",
      ],
    },
    {
      title: "Diện tích toàn phần",
      prompt: "Vẫn hình chóp trên ($a = 6$, $S_{xq} = 60\\ \\text{cm}^2$). Tính diện tích toàn phần.",
      steps: [
        "Diện tích đáy $S = a^2 = 6^2 = 36\\ \\text{cm}^2$.",
        "$S_{tp} = S_{xq} + S = 60 + 36 = 96\\ \\text{cm}^2$.",
      ],
    },
    {
      title: "Thể tích",
      prompt: "Hình chóp tứ giác đều có cạnh đáy $4$ cm, chiều cao $9$ cm. Tính thể tích.",
      steps: [
        "Diện tích đáy $S = 4^2 = 16\\ \\text{cm}^2$.",
        "$V = \\dfrac{1}{3} \\cdot 16 \\cdot 9 = 48\\ \\text{cm}^3$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Tính diện tích đáy bằng $4a$ (nhầm với chu vi).",
      right: "Đáy là hình vuông cạnh $a$ nên diện tích đáy $S = a^2$; còn $4a$ là chu vi.",
      note: "Diện tích vuông $= a^2$, chu vi $= 4a$.",
    },
    {
      wrong: "Dùng trung đoạn $d$ để tính thể tích.",
      right: "Thể tích dùng chiều cao $h$: $V = \\dfrac{1}{3} a^2 h$; $d$ chỉ dùng cho $S_{xq}$.",
      note: "Phân biệt $d$ (mặt bên) và $h$ (chiều cao chóp).",
    },
  ],

  exercises: [
    { level: "Nhận biết", prompt: "Đáy của hình chóp tứ giác đều là hình gì?",
      hints: ["Tên gọi gợi ý."],
      solution: "Là hình vuông." },
    { level: "Nhận biết", prompt: "Hình chóp tứ giác đều có cạnh đáy $5$ cm. Tính chu vi đáy và diện tích đáy.",
      hints: ["Chu vi $= 4a$; diện tích $= a^2$."],
      solution: "Chu vi $= 4 \\cdot 5 = 20$ cm; diện tích đáy $= 5^2 = 25\\ \\text{cm}^2$." },
    { level: "Nhận biết", prompt: "Viết công thức thể tích hình chóp tứ giác đều theo $a$ và $h$.",
      hints: ["Diện tích đáy là $a^2$."],
      solution: "$V = \\dfrac{1}{3} \\cdot a^2 \\cdot h$." },
    { level: "Thông hiểu", prompt: "Hình chóp tứ giác đều có cạnh đáy $8$ cm, trung đoạn $5$ cm. Tính $S_{xq}$.",
      hints: ["$C = 4 \\cdot 8 = 32$; $S_{xq} = \\dfrac{1}{2} C d$."],
      solution: "$S_{xq} = \\dfrac{1}{2} \\cdot 32 \\cdot 5 = 80\\ \\text{cm}^2$." },
    { level: "Thông hiểu", prompt: "Hình chóp tứ giác đều có cạnh đáy $3$ cm, chiều cao $7$ cm. Tính thể tích.",
      hints: ["$S = 3^2 = 9$; $V = \\dfrac{1}{3} S h$."],
      solution: "$V = \\dfrac{1}{3} \\cdot 9 \\cdot 7 = 21\\ \\text{cm}^3$." },
    { level: "Thông hiểu", prompt: "Hình chóp tứ giác đều có cạnh đáy $6$ cm, trung đoạn $5$ cm. Tính diện tích toàn phần.",
      hints: ["$S_{xq} = \\dfrac{1}{2} \\cdot 24 \\cdot 5$; $S = 6^2$; cộng lại."],
      solution: "$S_{xq} = 60$; $S = 36$; $S_{tp} = 60 + 36 = 96\\ \\text{cm}^2$." },
    { level: "Vận dụng", prompt:
        "Một chiếc hộp quà hình chóp tứ giác đều có cạnh đáy $10$ cm, trung đoạn $13$ cm. Tính diện tích " +
        "giấy cần để dán kín bốn mặt bên và mặt đáy (bỏ qua mép dán).",
      hints: ["Cần $S_{tp} = S_{xq} + a^2$.", "$S_{xq} = \\dfrac{1}{2} \\cdot 40 \\cdot 13$; $a^2 = 100$."],
      solution: "$S_{xq} = \\dfrac{1}{2} \\cdot 40 \\cdot 13 = 260$; $S_{tp} = 260 + 100 = 360\\ \\text{cm}^2$ giấy." },
    { level: "Vận dụng", prompt:
        "Một kim tự tháp mô hình hình chóp tứ giác đều có thể tích $V = 75\\ \\text{cm}^3$, chiều cao $h = 9$ cm. " +
        "Tính cạnh đáy $a$.",
      hints: ["$V = \\dfrac{1}{3} a^2 h$ → $a^2 = \\dfrac{3V}{h}$.", "Lấy căn bậc hai để ra $a$."],
      solution: "$a^2 = \\dfrac{3 \\cdot 75}{9} = \\dfrac{225}{9} = 25 \\Rightarrow a = 5$ cm." },
  ],

  quiz: [
    { type: "mc", q: "Đáy của hình chóp tứ giác đều là:", choices: ["Hình vuông", "Tam giác đều", "Hình thoi", "Hình chữ nhật"], answer: 0, explain: "Hình chóp tứ giác đều có đáy là hình vuông." },
    { type: "fill", q: "Chóp tứ giác đều cạnh đáy $6$, trung đoạn $5$. Tính diện tích xung quanh $S_{xq}$.", answer: 60, explain: "$\\dfrac{1}{2}(4 \\cdot 6)(5) = 60$." },
    { type: "fill", q: "Chóp tứ giác đều cạnh đáy $4$, chiều cao $9$. Tính thể tích $V$.", answer: 48, explain: "$V = \\dfrac{1}{3} \\cdot 4^2 \\cdot 9 = 48$." },
  ],
});
