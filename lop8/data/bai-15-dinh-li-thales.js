/* Bài 15. Định lí Thalès trong tam giác — Chương IV (KNTT, Tập 1) */
MATH8.registerLesson({
  id: "bai-15-dinh-li-thales",
  chapter: "Chương IV. Định lí Thalès",
  order: 1,
  title: "Bài 15. Định lí Thalès trong tam giác",

  objectives: [
    "Hiểu khái niệm đoạn thẳng tỉ lệ.",
    "Phát biểu và vận dụng định lí Thalès (thuận, đảo) và hệ quả để tính độ dài đoạn thẳng.",
    "Nhận biết hai đường thẳng song song nhờ định lí Thalès đảo.",
  ],

  intro: {
    text:
      "Khi một đường thẳng <b>song song</b> với một cạnh của tam giác và cắt hai cạnh kia, nó tạo ra " +
      "những đoạn thẳng <b>tỉ lệ</b> với nhau. Đây là định lí Thalès — công cụ then chốt để đo gián tiếp " +
      "(ví dụ tính chiều cao cây nhờ bóng nắng). Hãy trượt thử đường $DE$ bên dưới.",
    math: "DE \\parallel BC \\ \\Rightarrow\\ \\dfrac{AD}{DB} = \\dfrac{AE}{EC}",
  },

  theory: [
    {
      heading: "1. Đoạn thẳng tỉ lệ",
      html:
        "Hai đoạn thẳng $AB$ và $CD$ gọi là <b>tỉ lệ</b> với hai đoạn $MN$ và $PQ$ nếu có tỉ lệ thức " +
        "$\\dfrac{AB}{CD} = \\dfrac{MN}{PQ}$.",
    },
    {
      heading: "2. Định lí Thalès",
      html:
        "Nếu một đường thẳng <b>song song với một cạnh</b> của tam giác và cắt hai cạnh còn lại thì nó " +
        "định ra trên hai cạnh đó những <b>đoạn thẳng tương ứng tỉ lệ</b>.<br>" +
        "Tam giác $ABC$, $DE \\parallel BC$ ($D \\in AB,\\ E \\in AC$):",
      formula: "\\dfrac{AD}{DB} = \\dfrac{AE}{EC}",
    },
    {
      heading: "3. Định lí Thalès đảo",
      html: "Ngược lại, nếu một đường thẳng cắt hai cạnh và định ra các đoạn tương ứng tỉ lệ thì nó song song với cạnh còn lại:",
      formula: "\\dfrac{AD}{DB} = \\dfrac{AE}{EC} \\ \\Rightarrow\\ DE \\parallel BC",
    },
    {
      heading: "4. Hệ quả",
      html: "Khi $DE \\parallel BC$, ta còn có dãy tỉ số bằng nhau (rất hay dùng để tính $DE$):",
      formula: "\\dfrac{AD}{AB} = \\dfrac{AE}{AC} = \\dfrac{DE}{BC}",
    },
  ],

  visual: { type: "thales", config: { kind: "thales" } },

  examples: [
    {
      title: "Tính đoạn thẳng (định lí thuận)",
      prompt: "Tam giác $ABC$ có $DE \\parallel BC$ ($D \\in AB,\\ E \\in AC$), biết $AD = 2$, $DB = 3$, $AE = 4$. Tính $EC$.",
      steps: [
        "Theo định lí Thalès: $\\dfrac{AD}{DB} = \\dfrac{AE}{EC}$.",
        "Thay số: $\\dfrac{2}{3} = \\dfrac{4}{EC}$.",
        "Nhân chéo: $2 \\cdot EC = 3 \\cdot 4 = 12 \\Rightarrow EC = 6$.",
      ],
    },
    {
      title: "Tính cạnh nhờ hệ quả",
      prompt: "Tam giác $ABC$ có $DE \\parallel BC$, biết $AD = 4$, $AB = 10$, $BC = 15$. Tính $DE$.",
      steps: [
        "Hệ quả: $\\dfrac{AD}{AB} = \\dfrac{DE}{BC}$.",
        "$\\dfrac{4}{10} = \\dfrac{DE}{15}$.",
        "$DE = \\dfrac{4 \\cdot 15}{10} = 6$.",
      ],
    },
    {
      title: "Nhận biết song song (định lí đảo)",
      prompt: "Trên hai cạnh $AB, AC$ lấy $D, E$ với $AD = 3$, $DB = 6$, $AE = 4$, $EC = 8$. Hỏi $DE$ có song song $BC$ không?",
      steps: [
        "Xét $\\dfrac{AD}{DB} = \\dfrac{3}{6} = \\dfrac{1}{2}$ và $\\dfrac{AE}{EC} = \\dfrac{4}{8} = \\dfrac{1}{2}$.",
        "Hai tỉ số bằng nhau nên theo định lí Thalès đảo, $DE \\parallel BC$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Lập tỉ lệ sai vị trí: $\\dfrac{AD}{DB} = \\dfrac{EC}{AE}$.",
      right: "Đúng phải là $\\dfrac{AD}{DB} = \\dfrac{AE}{EC}$ (cùng thứ tự 'phần trên / phần dưới').",
      note: "Giữ đúng thứ tự đoạn trên cùng một cạnh tương ứng với cạnh kia.",
    },
    {
      wrong: "Dùng $\\dfrac{AD}{DB} = \\dfrac{DE}{BC}$ để tính $DE$.",
      right: "Để tính $DE$ phải dùng hệ quả với cả cạnh: $\\dfrac{AD}{AB} = \\dfrac{DE}{BC}$ (mẫu là $AB$, không phải $DB$).",
      note: "Tỉ số có $DE$ và $BC$ đi với $AD/AB$ và $AE/AC$ (cả cạnh).",
    },
  ],

  exercises: [
    { level: "Nhận biết", prompt: "Tam giác $ABC$, $DE \\parallel BC$. Viết tỉ lệ thức theo định lí Thalès cho $AD, DB, AE, EC$.",
      hints: ["Đoạn trên cạnh $AB$ tương ứng đoạn trên cạnh $AC$."],
      solution: "$\\dfrac{AD}{DB} = \\dfrac{AE}{EC}$." },
    { level: "Nhận biết", prompt: "$DE \\parallel BC$ với $AD = 3$, $DB = 6$, $AE = 5$. Tính $EC$.",
      hints: ["$\\dfrac{AD}{DB} = \\dfrac{AE}{EC}$."],
      solution: "$\\dfrac{3}{6} = \\dfrac{5}{EC} \\Rightarrow EC = \\dfrac{6 \\cdot 5}{3} = 10$." },
    { level: "Nhận biết", prompt: "$DE \\parallel BC$ với $AD = 2$, $AB = 6$, $BC = 9$. Tính $DE$.",
      hints: ["Dùng hệ quả $\\dfrac{AD}{AB} = \\dfrac{DE}{BC}$."],
      solution: "$\\dfrac{2}{6} = \\dfrac{DE}{9} \\Rightarrow DE = 3$." },
    { level: "Thông hiểu", prompt: "$DE \\parallel BC$ với $AD = 4$, $DB = 6$, $EC = 9$. Tính $AE$.",
      hints: ["$\\dfrac{AD}{DB} = \\dfrac{AE}{EC}$, ẩn nằm ở tử bên phải."],
      solution: "$\\dfrac{4}{6} = \\dfrac{AE}{9} \\Rightarrow AE = \\dfrac{4 \\cdot 9}{6} = 6$." },
    { level: "Thông hiểu", prompt: "Cho $AD = 2$, $DB = 5$, $AE = 3$, $EC = 7$. Hỏi $DE$ có song song với $BC$ không?",
      hints: ["So sánh $\\dfrac{AD}{DB}$ và $\\dfrac{AE}{EC}$."],
      solution: "$\\dfrac{2}{5} = 0{,}4$ còn $\\dfrac{3}{7} \\approx 0{,}43$. Hai tỉ số khác nhau nên $DE$ KHÔNG song song $BC$." },
    { level: "Thông hiểu", prompt: "$DE \\parallel BC$ với $AD = 6$, $AB = 9$, $DE = 8$. Tính $BC$.",
      hints: ["Hệ quả: $\\dfrac{AD}{AB} = \\dfrac{DE}{BC}$."],
      solution: "$\\dfrac{6}{9} = \\dfrac{8}{BC} \\Rightarrow BC = \\dfrac{9 \\cdot 8}{6} = 12$." },
    { level: "Vận dụng", prompt:
        "Một cây cọc $AD = 1{,}5$ m dựng thẳng đứng tạo bóng. Cùng lúc, một cái cây cao $AE$ (chưa biết) " +
        "đứng cạnh. Mô hình hoá bằng tam giác với $DE \\parallel BC$, biết $AD = 1{,}5$ m, $AB = 2$ m, $AC = 8$ m. " +
        "Tính chiều cao $AE$ của cây.",
      hints: ["Dùng hệ quả $\\dfrac{AD}{AB} = \\dfrac{AE}{AC}$.", "$\\dfrac{1{,}5}{2} = \\dfrac{AE}{8}$."],
      solution: "$\\dfrac{1{,}5}{2} = \\dfrac{AE}{8} \\Rightarrow AE = \\dfrac{1{,}5 \\cdot 8}{2} = 6$ m." },
    { level: "Vận dụng", prompt:
        "Tam giác $ABC$ có $DE \\parallel BC$. Biết $AD = x$, $DB = 4$, $AE = 6$, $EC = 8$. Tìm $x$.",
      hints: ["$\\dfrac{AD}{DB} = \\dfrac{AE}{EC}$ với ẩn $x$ ở tử bên trái.", "$\\dfrac{x}{4} = \\dfrac{6}{8}$."],
      solution: "$\\dfrac{x}{4} = \\dfrac{6}{8} = \\dfrac{3}{4} \\Rightarrow x = 3$." },
  ],

  quiz: [
    { type: "mc", q: "Tam giác $ABC$ có $DE \\parallel BC$. Tỉ lệ thức nào đúng?", choices: ["$\\dfrac{AD}{DB} = \\dfrac{AE}{EC}$", "$\\dfrac{AD}{DB} = \\dfrac{EC}{AE}$", "$\\dfrac{AD}{AE} = \\dfrac{EC}{DB}$", "$\\dfrac{AB}{AD} = \\dfrac{EC}{AC}$"], answer: 0, explain: "Định lí Thalès: các đoạn tương ứng tỉ lệ cùng thứ tự." },
    { type: "fill", q: "$DE \\parallel BC$, biết $AD = 2$, $DB = 3$, $AE = 4$. Tính $EC$.", answer: 6, explain: "$\\dfrac{2}{3} = \\dfrac{4}{EC} \\Rightarrow EC = 6$." },
    { type: "fill", q: "$DE \\parallel BC$, biết $AD = 2$, $AB = 6$, $BC = 9$. Tính $DE$.", answer: 3, explain: "Hệ quả: $\\dfrac{AD}{AB} = \\dfrac{DE}{BC} \\Rightarrow DE = 3$." },
  ],
});
