/* Bài 17. Vị trí tương đối của hai đường tròn
   Chương V (Toán 9, Kết nối tri thức, Tập 1) */
MATH9.registerLesson({
  id: "bai-17-vi-tri-tuong-doi-hai-duong-tron",
  visual: { type: "circle", config: { kind: "two" } },
  chapter: "Chương V. Đường tròn",
  order: 5,
  title: "Bài 17. Vị trí tương đối của hai đường tròn",

  objectives: [
    "Nhận biết các vị trí tương đối của hai đường tròn: ở ngoài nhau, tiếp xúc ngoài, cắt nhau, tiếp xúc trong, đựng nhau.",
    "Nắm vững hệ thức liên hệ giữa đoạn nối tâm $d = OO'$ và hai bán kính $R, r$ ứng với mỗi vị trí.",
    "Xác định được vị trí tương đối của hai đường tròn khi biết $R, r, d$.",
  ],

  intro: {
    text:
      "Hai vòng tròn trên mặt nước, hai bánh xe, hai vòng tròn trong logo Olympic… đôi khi rời nhau, đôi " +
      "khi chạm nhau, đôi khi cắt nhau. Để biết <b>hai đường tròn</b> $(O; R)$ và $(O'; r)$ ở vị trí nào " +
      "với nhau, ta chỉ cần so sánh <b>đoạn nối tâm</b> $d = OO'$ với <b>tổng</b> và <b>hiệu</b> của hai " +
      "bán kính.",
    math: "d = OO'",
  },

  theory: [
    {
      heading: "1. Số điểm chung và vị trí tương đối",
      html:
        "Cho hai đường tròn $(O; R)$ và $(O'; r)$ với $R \\ge r$. Đặt $d = OO'$ là <b>đoạn nối tâm</b>. " +
        "Dựa vào <b>số điểm chung</b>, ta có ba trường hợp: hai đường tròn <b>không có điểm chung</b> " +
        "(ở ngoài nhau hoặc đựng nhau), <b>có một điểm chung</b> (tiếp xúc — gồm tiếp xúc ngoài và tiếp " +
        "xúc trong), hoặc <b>có hai điểm chung</b> (cắt nhau).",
    },
    {
      heading: "2. Hệ thức giữa d và hai bán kính",
      html:
        "Với $R \\ge r$ và $d = OO'$, ta có bảng các vị trí tương đối:<br>" +
        "• <b>Ở ngoài nhau</b> (không điểm chung): $d > R + r$.<br>" +
        "• <b>Tiếp xúc ngoài</b> (một điểm chung): $d = R + r$.<br>" +
        "• <b>Cắt nhau</b> (hai điểm chung): $R - r < d < R + r$.<br>" +
        "• <b>Tiếp xúc trong</b> (một điểm chung): $d = R - r$ (với $R > r$).<br>" +
        "• <b>Đựng nhau</b> (không điểm chung): $d < R - r$. Đặc biệt $d = 0$ thì hai đường tròn " +
        "<b>đồng tâm</b>.",
      formula: "d > R + r \\;\\Leftrightarrow\\; \\text{ngoai}; \\quad R - r < d < R + r \\;\\Leftrightarrow\\; \\text{cat nhau}",
    },
    {
      heading: "3. Cách xác định vị trí",
      html:
        "Khi biết $R, r, d$, ta làm theo các bước:<br>" +
        "<b>Bước 1.</b> Tính <b>tổng</b> $R + r$ và <b>hiệu</b> $R - r$ (lấy $R \\ge r$).<br>" +
        "<b>Bước 2.</b> So sánh $d$ với $R + r$ và $R - r$.<br>" +
        "<b>Bước 3.</b> Đối chiếu với bảng để kết luận vị trí tương đối và số điểm chung.",
    },
  ],

  examples: [
    {
      title: "Hai đường tròn ở ngoài nhau",
      prompt: "Cho $(O; R)$ và $(O'; r)$ với $R = 5\\,$cm, $r = 3\\,$cm, $d = OO' = 10\\,$cm. Xác định vị trí tương đối.",
      steps: [
        "Tính tổng và hiệu hai bán kính: $R + r = 5 + 3 = 8$; $R - r = 5 - 3 = 2$.",
        "So sánh: $d = 10 > 8 = R + r$.",
        "Vì $d > R + r$ nên hai đường tròn <b>ở ngoài nhau</b> (không có điểm chung).",
      ],
    },
    {
      title: "Hai đường tròn cắt nhau",
      prompt: "Cho $R = 5\\,$cm, $r = 3\\,$cm, $d = 4\\,$cm. Hai đường tròn ở vị trí nào?",
      steps: [
        "Tính: $R + r = 8$; $R - r = 2$.",
        "So sánh: $2 < 4 < 8$, tức $R - r < d < R + r$.",
        "Vậy hai đường tròn <b>cắt nhau</b> tại hai điểm.",
      ],
    },
    {
      title: "Tiếp xúc trong",
      prompt: "Cho $R = 5\\,$cm, $r = 3\\,$cm, $d = 2\\,$cm. Xác định vị trí tương đối và số điểm chung.",
      steps: [
        "Tính: $R + r = 8$; $R - r = 5 - 3 = 2$.",
        "So sánh: $d = 2 = R - r$.",
        "Vì $d = R - r$ nên hai đường tròn <b>tiếp xúc trong</b>, có <b>một</b> điểm chung.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Chỉ so sánh $d$ với tổng $R + r$ rồi vội kết luận hai đường tròn cắt nhau.",
      right: "Cắt nhau cần <b>cả hai</b> điều kiện: $R - r < d$ <b>và</b> $d < R + r$.",
      note: "Phải so $d$ với cả tổng và hiệu hai bán kính.",
    },
    {
      wrong: "Nhầm $d = R + r$ là tiếp xúc trong.",
      right: "$d = R + r$ là <b>tiếp xúc ngoài</b>; còn $d = R - r$ mới là <b>tiếp xúc trong</b>.",
      note: "Tổng ứng với tiếp xúc ngoài, hiệu ứng với tiếp xúc trong.",
    },
    {
      wrong: "Lấy hiệu hai bán kính ra số âm khi $r > R$ rồi so sánh sai.",
      right: "Luôn lấy $R \\ge r$ để $R - r \\ge 0$, hoặc dùng $|R - r|$ khi so sánh.",
      note: "Đoạn nối tâm $d \\ge 0$ nên cần so với giá trị không âm.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Hai đường tròn có $d > R + r$ thì ở vị trí nào và có mấy điểm chung?",
      hints: ["Đối chiếu trực tiếp với bảng vị trí tương đối."],
      solution: "Khi $d > R + r$, hai đường tròn <b>ở ngoài nhau</b>, <b>không có</b> điểm chung.",
    },
    {
      level: "Nhận biết",
      prompt: "Khi $d = R + r$ thì hai đường tròn ở vị trí nào?",
      hints: ["Tổng hai bán kính ứng với loại tiếp xúc nào?"],
      solution: "Khi $d = R + r$, hai đường tròn <b>tiếp xúc ngoài</b>, có <b>một</b> điểm chung.",
    },
    {
      level: "Nhận biết",
      prompt: "Cho $R = 4\\,$cm, $r = 2\\,$cm, $d = 6\\,$cm. Xác định vị trí tương đối.",
      hints: ["Tính $R + r$ rồi so với $d$."],
      solution: "$R + r = 4 + 2 = 6 = d$. Vậy hai đường tròn <b>tiếp xúc ngoài</b>.",
    },
    {
      level: "Thông hiểu",
      prompt: "Cho $R = 6\\,$cm, $r = 4\\,$cm, $d = 3\\,$cm. Hai đường tròn ở vị trí nào?",
      hints: ["Tính $R + r$ và $R - r$.", "So sánh $d$ với cả hai giá trị đó."],
      solution:
        "$R + r = 10$; $R - r = 6 - 4 = 2$. Vì $2 < 3 < 10$, tức $R - r < d < R + r$, nên hai đường tròn <b>cắt nhau</b> tại hai điểm.",
    },
    {
      level: "Thông hiểu",
      prompt: "Cho $R = 7\\,$cm, $r = 3\\,$cm, $d = 4\\,$cm. Xác định vị trí tương đối và số điểm chung.",
      hints: ["Tính hiệu $R - r$ rồi so với $d$."],
      solution:
        "$R - r = 7 - 3 = 4 = d$. Vì $d = R - r$ nên hai đường tròn <b>tiếp xúc trong</b>, có <b>một</b> điểm chung.",
    },
    {
      level: "Thông hiểu",
      prompt: "Cho $R = 8\\,$cm, $r = 3\\,$cm, $d = 2\\,$cm. Hai đường tròn ở vị trí nào?",
      hints: ["Tính $R - r$ rồi so với $d$.", "Trường hợp $d$ nhỏ hơn hiệu hai bán kính là vị trí gì?"],
      solution:
        "$R - r = 8 - 3 = 5$. Vì $d = 2 < 5 = R - r$ nên đường tròn lớn <b>đựng</b> đường tròn nhỏ, hai đường tròn <b>không có</b> điểm chung.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Cho $(O; 5\\,\\text{cm})$ và $(O'; 3\\,\\text{cm})$ tiếp xúc ngoài tại $A$. Tính độ dài đoạn nối tâm $OO'$.",
      hints: ["Tiếp xúc ngoài ứng với hệ thức nào giữa $d$ và hai bán kính?"],
      solution:
        "Tiếp xúc ngoài nên $OO' = d = R + r = 5 + 3 = 8\\,$cm.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Cho $(O; 6\\,\\text{cm})$ và $(O'; r)$ với $OO' = 10\\,$cm. Tìm điều kiện của $r$ để hai đường tròn <b>cắt nhau</b> (giả sử $r \\le 6$).",
      hints: ["Điều kiện cắt nhau: $R - r < d < R + r$ với $R = 6$.", "Giải hai bất phương trình theo $r$."],
      solution:
        "Cần $R - r < d < R + r$, tức $6 - r < 10 < 6 + r$. Từ $10 < 6 + r$ suy ra $r > 4$. Từ $6 - r < 10$ luôn đúng. Vậy với $r \\le 6$ thì điều kiện là $4 < r \\le 6$.",
    },
  ],

  quiz: [
    { type: "mc", q: "Hai đường tròn $(O; R)$, $(O'; r)$ với $d = OO'$ <b>tiếp xúc ngoài</b> khi nào?",
      choices: ["$d > R + r$", "$d = R + r$", "$d = R - r$", "$d < R - r$"], answer: 1,
      explain: "Tiếp xúc ngoài ứng với đoạn nối tâm bằng tổng hai bán kính: $d = R + r$." },
    { type: "fill", q: "Cho $R = 5\\,$cm, $r = 2\\,$cm. Hai đường tròn tiếp xúc ngoài thì $d = OO'$ bằng mấy cm?",
      answer: 7, explain: "Tiếp xúc ngoài: $d = R + r = 5 + 2 = 7\\,$cm." },
    { type: "mc", q: "Cho $R = 7\\,$cm, $r = 4\\,$cm, $d = 5\\,$cm. Hai đường tròn ở vị trí nào?",
      choices: ["Ở ngoài nhau", "Tiếp xúc ngoài", "Cắt nhau", "Đựng nhau"], answer: 2,
      explain: "$R - r = 3$, $R + r = 11$; vì $3 < 5 < 11$ nên hai đường tròn cắt nhau." },
  ],
});
