/* Bài 30. Đa giác đều
   Chương IX (Toán 9, Kết nối tri thức, Tập 2) */
MATH9.registerLesson({
  id: "bai-30-da-giac-deu",
  chapter: "Chương IX. Đường tròn ngoại tiếp và đường tròn nội tiếp",
  order: 4,
  title: "Bài 30. Đa giác đều",

  objectives: [
    "Nhận biết đa giác đều và mô tả các tính chất về cạnh, góc của nó.",
    "Tính tổng các góc trong và số đo mỗi góc của một đa giác đều $n$ cạnh.",
    "Nhận biết tính đối xứng và phép quay biến một đa giác đều thành chính nó.",
  ],

  intro: {
    text:
      "Nhìn quanh ta sẽ gặp rất nhiều hình đẹp, cân đối: viên gạch lát hình lục giác, biển báo giao thông " +
      "hình tam giác đều, ô cửa hình vuông... Điểm chung của chúng là <b>tất cả các cạnh bằng nhau</b> và " +
      "<b>tất cả các góc bằng nhau</b>. Những hình như vậy gọi là <b>đa giác đều</b>. Bài này giúp bạn hiểu " +
      "rõ tính chất của chúng và tính được số đo mỗi góc.",
    math: "S = (n-2)\\cdot 180^\\circ",
  },

  theory: [
    {
      heading: "1. Đa giác đều là gì?",
      html:
        "<b>Đa giác đều</b> là đa giác có <b>tất cả các cạnh bằng nhau</b> và <b>tất cả các góc bằng " +
        "nhau</b>.<br>" +
        "Ví dụ quen thuộc: <b>tam giác đều</b> ($3$ cạnh), <b>hình vuông</b> ($4$ cạnh), <b>ngũ giác " +
        "đều</b> ($5$ cạnh), <b>lục giác đều</b> ($6$ cạnh).<br>" +
        "Mỗi đa giác đều luôn có <b>một đường tròn ngoại tiếp</b> (đi qua mọi đỉnh) và <b>một đường tròn " +
        "nội tiếp</b> (tiếp xúc mọi cạnh); hai đường tròn này <b>chung một tâm</b> — gọi là <b>tâm của " +
        "đa giác đều</b>.",
    },
    {
      heading: "2. Tổng các góc trong và số đo mỗi góc",
      html:
        "Một đa giác $n$ cạnh ($n \\ge 3$) chia được thành $n - 2$ tam giác, nên <b>tổng các góc trong</b> " +
        "của nó bằng $(n-2)\\cdot 180^\\circ$.<br>" +
        "Với đa giác <b>đều</b>, $n$ góc bằng nhau nên <b>số đo mỗi góc</b> bằng tổng chia cho $n$. " +
        "Chẳng hạn: tam giác đều $60^\\circ$, hình vuông $90^\\circ$, ngũ giác đều $108^\\circ$, " +
        "lục giác đều $120^\\circ$.",
      formula: "\\alpha = \\dfrac{(n-2)\\cdot 180^\\circ}{n}",
    },
    {
      heading: "3. Tính đối xứng và phép quay",
      html:
        "Đa giác đều $n$ cạnh có tính <b>đối xứng</b> rất cao: nó có $n$ <b>trục đối xứng</b> (mỗi trục đi " +
        "qua tâm).<br>" +
        "Hơn nữa, phép <b>quay quanh tâm</b> một góc $\\dfrac{360^\\circ}{n}$ (hoặc bội của góc này) biến " +
        "đa giác đều thành <b>chính nó</b>. Ví dụ lục giác đều ($n = 6$) quay quanh tâm góc " +
        "$\\dfrac{360^\\circ}{6} = 60^\\circ$ thì trùng khít với hình ban đầu.",
      formula: "\\varphi_{\\min} = \\dfrac{360^\\circ}{n}",
    },
  ],

  examples: [
    {
      title: "Số đo mỗi góc của ngũ giác đều",
      prompt: "Tính số đo mỗi góc trong của một ngũ giác đều.",
      steps: [
        "Ngũ giác đều có $n = 5$ cạnh.",
        "Tổng các góc trong: $(n-2)\\cdot 180^\\circ = (5-2)\\cdot 180^\\circ = 540^\\circ$.",
        "Vì $5$ góc bằng nhau nên mỗi góc bằng $\\dfrac{540^\\circ}{5} = 108^\\circ$.",
        "Vậy mỗi góc của ngũ giác đều bằng $108^\\circ$.",
      ],
    },
    {
      title: "Số đo mỗi góc của bát giác đều",
      prompt: "Tính số đo mỗi góc trong của một bát giác đều (đa giác đều $8$ cạnh).",
      steps: [
        "Bát giác đều có $n = 8$ cạnh.",
        "Tổng các góc trong: $(8-2)\\cdot 180^\\circ = 6 \\cdot 180^\\circ = 1080^\\circ$.",
        "Mỗi góc bằng $\\dfrac{1080^\\circ}{8} = 135^\\circ$.",
        "Vậy mỗi góc của bát giác đều bằng $135^\\circ$.",
      ],
    },
    {
      title: "Tìm số cạnh khi biết mỗi góc",
      prompt: "Một đa giác đều có mỗi góc trong bằng $150^\\circ$. Đa giác đó có bao nhiêu cạnh?",
      steps: [
        "Gọi số cạnh là $n$. Mỗi góc bằng $\\dfrac{(n-2)\\cdot 180^\\circ}{n} = 150^\\circ$.",
        "Suy ra $(n-2)\\cdot 180 = 150 n \\Rightarrow 180 n - 360 = 150 n$.",
        "$\\Rightarrow 30 n = 360 \\Rightarrow n = 12$.",
        "Vậy đa giác đó có $12$ cạnh.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Coi mọi hình có các cạnh bằng nhau là đa giác đều (ví dụ hình thoi).",
      right: "Đa giác đều cần <b>cả hai</b> điều kiện: các cạnh bằng nhau <b>và</b> các góc bằng nhau.",
      note: "Hình thoi có $4$ cạnh bằng nhau nhưng các góc nói chung không bằng nhau nên không đều.",
    },
    {
      wrong: "Dùng công thức $(n-2)\\cdot 180^\\circ$ để tính ngay <b>một góc</b> của đa giác đều.",
      right: "$(n-2)\\cdot 180^\\circ$ là <b>tổng</b> các góc; muốn một góc phải <b>chia cho</b> $n$.",
      note: "Mỗi góc $= \\dfrac{(n-2)\\cdot 180^\\circ}{n}$.",
    },
    {
      wrong: "Nghĩ đường tròn ngoại tiếp và nội tiếp của đa giác đều có tâm khác nhau.",
      right: "Hai đường tròn này <b>chung một tâm</b>, đó là tâm của đa giác đều.",
      note: "Tâm cũng là tâm đối xứng quay của đa giác đều.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt:
        "Trong các hình sau, hình nào là đa giác đều: tam giác đều, hình chữ nhật (không phải hình " +
        "vuông), hình vuông, lục giác đều?",
      hints: ["Đa giác đều cần các cạnh bằng nhau và các góc bằng nhau."],
      solution:
        "Tam giác đều, hình vuông và lục giác đều là đa giác đều. (Hình chữ nhật không vuông có các góc " +
        "bằng nhau nhưng các cạnh không bằng nhau nên không đều.)",
    },
    {
      level: "Nhận biết",
      prompt: "Mỗi góc của một hình vuông bằng bao nhiêu độ?",
      hints: ["Hình vuông là đa giác đều $4$ cạnh."],
      solution: "Mỗi góc $= \\dfrac{(4-2)\\cdot 180^\\circ}{4} = \\dfrac{360^\\circ}{4} = 90^\\circ$.",
    },
    {
      level: "Nhận biết",
      prompt: "Tổng các góc trong của một lục giác (đa giác $6$ cạnh) bằng bao nhiêu độ?",
      hints: ["Dùng công thức tổng các góc trong $(n-2)\\cdot 180^\\circ$."],
      solution: "Tổng $= (6-2)\\cdot 180^\\circ = 4 \\cdot 180^\\circ = 720^\\circ$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tính số đo mỗi góc trong của một lục giác đều.",
      hints: ["Lục giác đều có $n = 6$.", "Lấy tổng các góc chia cho $6$."],
      solution:
        "Tổng các góc $= (6-2)\\cdot 180^\\circ = 720^\\circ$; mỗi góc $= \\dfrac{720^\\circ}{6} = 120^\\circ$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tính số đo mỗi góc trong của một đa giác đều $10$ cạnh (thập giác đều).",
      hints: ["Áp dụng $\\dfrac{(n-2)\\cdot 180^\\circ}{n}$ với $n = 10$."],
      solution:
        "Mỗi góc $= \\dfrac{(10-2)\\cdot 180^\\circ}{10} = \\dfrac{1440^\\circ}{10} = 144^\\circ$.",
    },
    {
      level: "Thông hiểu",
      prompt:
        "Khi quay một lục giác đều quanh tâm của nó, góc quay nhỏ nhất (khác $0$) để hình trùng với " +
        "chính nó là bao nhiêu độ?",
      hints: ["Đa giác đều $n$ cạnh có góc quay nhỏ nhất $\\dfrac{360^\\circ}{n}$."],
      solution: "Với $n = 6$: góc quay nhỏ nhất $= \\dfrac{360^\\circ}{6} = 60^\\circ$.",
    },
    {
      level: "Vận dụng",
      prompt: "Một đa giác đều có mỗi góc trong bằng $140^\\circ$. Hỏi đa giác đó có bao nhiêu cạnh?",
      hints: [
        "Đặt $\\dfrac{(n-2)\\cdot 180^\\circ}{n} = 140^\\circ$.",
        "Quy đồng rồi giải phương trình bậc nhất theo $n$.",
      ],
      solution:
        "$(n-2)\\cdot 180 = 140 n \\Rightarrow 180 n - 360 = 140 n \\Rightarrow 40 n = 360 \\Rightarrow n = 9$. " +
        "Vậy đa giác có $9$ cạnh.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Tổng các góc trong của một đa giác đều bằng $1260^\\circ$. Tính số cạnh và số đo mỗi góc của " +
        "đa giác đó.",
      hints: [
        "Từ $(n-2)\\cdot 180^\\circ = 1260^\\circ$ tìm $n$.",
        "Sau đó chia tổng cho $n$ để được mỗi góc.",
      ],
      solution:
        "$(n-2)\\cdot 180 = 1260 \\Rightarrow n - 2 = 7 \\Rightarrow n = 9$. " +
        "Mỗi góc $= \\dfrac{1260^\\circ}{9} = 140^\\circ$.",
    },
  ],

  quiz: [
    { type: "mc", q: "Hình nào sau đây <b>không</b> phải là đa giác đều?",
      choices: ["Tam giác đều", "Hình vuông", "Hình thoi (không phải hình vuông)", "Lục giác đều"], answer: 2,
      explain: "Hình thoi có các cạnh bằng nhau nhưng các góc nói chung không bằng nhau nên không đều." },
    { type: "fill", q: "Số đo mỗi góc trong của một ngũ giác đều bằng bao nhiêu độ?", answer: 108,
      explain: "$\\dfrac{(5-2)\\cdot 180^\\circ}{5} = \\dfrac{540^\\circ}{5} = 108^\\circ$." },
    { type: "mc", q: "Một đa giác đều có mỗi góc trong bằng $120^\\circ$. Đa giác đó có bao nhiêu cạnh?",
      choices: ["$5$", "$6$", "$8$", "$12$"], answer: 1,
      explain: "$\\dfrac{(n-2)\\cdot 180^\\circ}{n} = 120^\\circ \\Rightarrow 60 n = 360 \\Rightarrow n = 6$." },
  ],
});
