/* Bài 28. Đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác
   Chương IX (Toán 9, Kết nối tri thức) */
MATH9.registerLesson({
  id: "bai-28-duong-tron-ngoai-tiep-noi-tiep-tam-giac",
  chapter: "Chương IX. Đường tròn ngoại tiếp và đường tròn nội tiếp",
  order: 2,
  title: "Bài 28. Đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác",

  objectives: [
    "Nhận biết đường tròn ngoại tiếp tam giác và xác định tâm, bán kính của nó.",
    "Nhận biết đường tròn nội tiếp tam giác và xác định tâm, bán kính của nó.",
    "Vận dụng tính bán kính đường tròn ngoại tiếp, nội tiếp của tam giác vuông và tam giác đều.",
  ],

  intro: {
    text:
      "Cho một tam giác bất kì, ta luôn vẽ được <b>một đường tròn đi qua cả ba đỉnh</b> của nó — gọi là " +
      "<b>đường tròn ngoại tiếp</b>. Ngược lại, ta cũng luôn vẽ được <b>một đường tròn tiếp xúc với cả ba " +
      "cạnh</b> nằm bên trong tam giác — gọi là <b>đường tròn nội tiếp</b>. Bài học này giúp bạn xác định " +
      "tâm, bán kính của hai đường tròn đặc biệt đó.",
    math: "R = \\dfrac{a}{\\sqrt{3}}, \\quad r = \\dfrac{a}{2\\sqrt{3}}",
  },

  theory: [
    {
      heading: "1. Đường tròn ngoại tiếp tam giác",
      html:
        "<b>Đường tròn ngoại tiếp</b> của một tam giác là đường tròn <b>đi qua ba đỉnh</b> của tam giác đó.<br>" +
        "Tâm $O$ của đường tròn ngoại tiếp là <b>giao điểm của ba đường trung trực</b> của ba cạnh; điểm " +
        "này <b>cách đều ba đỉnh</b>, và khoảng cách chung đó chính là bán kính $R$.<br>" +
        "Mỗi tam giác có <b>đúng một</b> đường tròn ngoại tiếp.",
      formula: "OA = OB = OC = R",
    },
    {
      heading: "2. Đường tròn nội tiếp tam giác",
      html:
        "<b>Đường tròn nội tiếp</b> của một tam giác là đường tròn nằm trong tam giác và <b>tiếp xúc với " +
        "cả ba cạnh</b>.<br>" +
        "Tâm $I$ của đường tròn nội tiếp là <b>giao điểm của ba đường phân giác trong</b> của tam giác; điểm " +
        "này <b>cách đều ba cạnh</b>, khoảng cách chung đó là bán kính $r$.<br>" +
        "Mỗi tam giác cũng có <b>đúng một</b> đường tròn nội tiếp.",
      formula: "I \\text{ : } d(I, AB) = d(I, BC) = d(I, CA) = r",
    },
    {
      heading: "3. Hai trường hợp đặc biệt",
      html:
        "<b>Tam giác vuông:</b> tâm đường tròn ngoại tiếp là <b>trung điểm cạnh huyền</b>, nên bán kính bằng " +
        "<b>nửa cạnh huyền</b>.<br>" +
        "<b>Tam giác đều cạnh $a$:</b> tâm đường tròn ngoại tiếp và tâm đường tròn nội tiếp <b>trùng nhau</b>; " +
        "khi đó $R = \\dfrac{a}{\\sqrt{3}}$ và $r = \\dfrac{a}{2\\sqrt{3}}$ (chú ý $R = 2r$).",
      formula: "R_{vuong} = \\dfrac{\\text{huyen}}{2}; \\quad R_{deu} = \\dfrac{a}{\\sqrt{3}}, \\ r_{deu} = \\dfrac{a}{2\\sqrt{3}}",
    },
  ],

  examples: [
    {
      title: "Đường tròn ngoại tiếp tam giác vuông",
      prompt: "Tam giác $ABC$ vuông tại $A$ có $AB = 6$, $AC = 8$. Tính bán kính $R$ của đường tròn ngoại tiếp.",
      steps: [
        "Cạnh huyền là $BC$. Theo định lí Pythagore: $BC = \\sqrt{AB^2 + AC^2} = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$.",
        "Với tam giác vuông, bán kính ngoại tiếp bằng nửa cạnh huyền.",
        "$R = \\dfrac{BC}{2} = \\dfrac{10}{2} = 5$.",
        "Vậy $R = 5$ (tâm là trung điểm của $BC$).",
      ],
    },
    {
      title: "Bán kính ngoại tiếp tam giác đều",
      prompt: "Tính bán kính $R$ của đường tròn ngoại tiếp tam giác đều cạnh $a = 6$.",
      steps: [
        "Với tam giác đều cạnh $a$, ta có $R = \\dfrac{a}{\\sqrt{3}}$.",
        "Thay $a = 6$: $R = \\dfrac{6}{\\sqrt{3}} = \\dfrac{6\\sqrt{3}}{3} = 2\\sqrt{3}$.",
        "Vậy $R = 2\\sqrt{3} \\approx 3{,}46$.",
      ],
    },
    {
      title: "Bán kính nội tiếp tam giác đều",
      prompt: "Tính bán kính $r$ của đường tròn nội tiếp tam giác đều cạnh $a = 6$.",
      steps: [
        "Với tam giác đều cạnh $a$, ta có $r = \\dfrac{a}{2\\sqrt{3}}$.",
        "Thay $a = 6$: $r = \\dfrac{6}{2\\sqrt{3}} = \\dfrac{3}{\\sqrt{3}} = \\sqrt{3}$.",
        "Vậy $r = \\sqrt{3} \\approx 1{,}73$. (Đúng với nhận xét $R = 2r$ vì $2\\sqrt{3} = 2 \\cdot \\sqrt{3}$.)",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Cho rằng tâm đường tròn ngoại tiếp là giao điểm ba đường phân giác.",
      right: "Tâm đường tròn <b>ngoại tiếp</b> là giao điểm ba <b>đường trung trực</b> (cách đều ba đỉnh).",
      note: "Giao ba đường phân giác là tâm đường tròn <b>nội tiếp</b>.",
    },
    {
      wrong: "Với tam giác vuông, lấy bán kính ngoại tiếp bằng cả cạnh huyền.",
      right: "Bán kính ngoại tiếp bằng <b>nửa</b> cạnh huyền: $R = \\dfrac{\\text{huyen}}{2}$.",
      note: "Tâm chính là trung điểm cạnh huyền, nên $R$ là nửa cạnh huyền.",
    },
    {
      wrong: "Nhầm công thức tam giác đều thành $R = \\dfrac{a}{2\\sqrt{3}}$ và $r = \\dfrac{a}{\\sqrt{3}}$.",
      right: "Đúng phải là $R = \\dfrac{a}{\\sqrt{3}}$ (lớn hơn) và $r = \\dfrac{a}{2\\sqrt{3}}$ (nhỏ hơn).",
      note: "Bán kính ngoại tiếp luôn lớn hơn bán kính nội tiếp; nhớ $R = 2r$.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Tâm của đường tròn ngoại tiếp một tam giác là giao điểm của ba đường nào?",
      hints: ["Tâm cách đều ba đỉnh của tam giác."],
      solution: "Là giao điểm của <b>ba đường trung trực</b> của ba cạnh tam giác.",
    },
    {
      level: "Nhận biết",
      prompt: "Tâm của đường tròn nội tiếp một tam giác là giao điểm của ba đường nào?",
      hints: ["Tâm cách đều ba cạnh của tam giác."],
      solution: "Là giao điểm của <b>ba đường phân giác trong</b> của tam giác.",
    },
    {
      level: "Nhận biết",
      prompt: "Tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 12$. Bán kính đường tròn ngoại tiếp bằng bao nhiêu?",
      hints: ["Bán kính ngoại tiếp tam giác vuông bằng nửa cạnh huyền."],
      solution: "$R = \\dfrac{BC}{2} = \\dfrac{12}{2} = 6$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tam giác $ABC$ vuông tại $A$ có $AB = 3$, $AC = 4$. Tính bán kính đường tròn ngoại tiếp.",
      hints: ["Tính cạnh huyền $BC$ bằng định lí Pythagore.", "Bán kính ngoại tiếp bằng nửa cạnh huyền."],
      solution:
        "$BC = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$; do đó $R = \\dfrac{BC}{2} = \\dfrac{5}{2} = 2{,}5$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tính bán kính đường tròn ngoại tiếp tam giác đều cạnh $a = 3$.",
      hints: ["Dùng công thức $R = \\dfrac{a}{\\sqrt{3}}$."],
      solution: "$R = \\dfrac{3}{\\sqrt{3}} = \\dfrac{3\\sqrt{3}}{3} = \\sqrt{3} \\approx 1{,}73$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tính bán kính đường tròn nội tiếp tam giác đều cạnh $a = 4$.",
      hints: ["Dùng công thức $r = \\dfrac{a}{2\\sqrt{3}}$."],
      solution:
        "$r = \\dfrac{4}{2\\sqrt{3}} = \\dfrac{2}{\\sqrt{3}} = \\dfrac{2\\sqrt{3}}{3} \\approx 1{,}15$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Tam giác đều có bán kính đường tròn nội tiếp $r = 2\\sqrt{3}$. Tính bán kính đường tròn ngoại tiếp $R$ và cạnh $a$.",
      hints: ["Nhớ quan hệ $R = 2r$ trong tam giác đều.", "Từ $r = \\dfrac{a}{2\\sqrt{3}}$ suy ra $a$."],
      solution:
        "$R = 2r = 2 \\cdot 2\\sqrt{3} = 4\\sqrt{3}$. Từ $r = \\dfrac{a}{2\\sqrt{3}}$ ta có " +
        "$a = 2\\sqrt{3} \\cdot r = 2\\sqrt{3} \\cdot 2\\sqrt{3} = 4 \\cdot 3 = 12$. Vậy $R = 4\\sqrt{3}$ và $a = 12$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Một mảnh đất hình tam giác vuông có hai cạnh góc vuông dài $9\\,\\text{m}$ và $12\\,\\text{m}$. " +
        "Người ta muốn đặt một cột đèn ở vị trí cách đều ba đỉnh của mảnh đất. Hỏi khoảng cách từ cột đèn " +
        "đến mỗi đỉnh bằng bao nhiêu mét?",
      hints: ["Vị trí cách đều ba đỉnh là tâm đường tròn ngoại tiếp.", "Tính cạnh huyền rồi lấy nửa."],
      solution:
        "Cạnh huyền $= \\sqrt{9^2 + 12^2} = \\sqrt{225} = 15\\,\\text{m}$. Tâm ngoại tiếp là trung điểm cạnh " +
        "huyền nên khoảng cách cần tìm là $R = \\dfrac{15}{2} = 7{,}5\\,\\text{m}$.",
    },
  ],

  quiz: [
    { type: "mc", q: "Tâm đường tròn ngoại tiếp tam giác là giao điểm của ba đường nào?",
      choices: ["Ba đường phân giác", "Ba đường trung trực", "Ba đường cao", "Ba đường trung tuyến"], answer: 1,
      explain: "Tâm ngoại tiếp cách đều ba đỉnh nên là giao của ba đường trung trực." },
    { type: "fill", q: "Tam giác vuông có cạnh huyền bằng $10$. Bán kính đường tròn ngoại tiếp bằng bao nhiêu?",
      answer: 5, explain: "Bán kính bằng nửa cạnh huyền: $R = \\dfrac{10}{2} = 5$." },
    { type: "mc", q: "Bán kính đường tròn ngoại tiếp tam giác đều cạnh $a = 6$ bằng:",
      choices: ["$\\sqrt{3}$", "$2\\sqrt{3}$", "$3\\sqrt{3}$", "$6\\sqrt{3}$"], answer: 1,
      explain: "$R = \\dfrac{a}{\\sqrt{3}} = \\dfrac{6}{\\sqrt{3}} = 2\\sqrt{3}$." },
  ],
});
