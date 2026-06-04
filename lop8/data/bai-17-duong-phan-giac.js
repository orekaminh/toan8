/* Bài 17. Tính chất đường phân giác của tam giác — Chương IV (KNTT, Tập 1) */
MATH8.registerLesson({
  id: "bai-17-duong-phan-giac",
  chapter: "Chương IV. Định lí Thalès",
  order: 3,
  title: "Bài 17. Tính chất đường phân giác của tam giác",

  objectives: [
    "Phát biểu và vận dụng tính chất đường phân giác trong tam giác.",
    "Lập đúng tỉ lệ thức giữa hai đoạn trên cạnh đáy và hai cạnh kề.",
    "Tính độ dài đoạn thẳng dựa vào tính chất đường phân giác.",
  ],

  intro: {
    text:
      "Tia phân giác của một góc trong tam giác cắt cạnh đối diện tại một điểm, chia cạnh ấy thành hai " +
      "đoạn <b>tỉ lệ với hai cạnh kề</b>. Trượt thử hình bên dưới để thấy tỉ số $\\dfrac{BD}{DC}$ luôn " +
      "bằng $\\dfrac{AB}{AC}$.",
    math: "\\dfrac{DB}{DC} = \\dfrac{AB}{AC}",
  },

  theory: [
    {
      heading: "1. Tính chất đường phân giác",
      html:
        "Trong một tam giác, đường phân giác của một góc chia <b>cạnh đối diện</b> thành hai đoạn thẳng " +
        "<b>tỉ lệ với hai cạnh kề</b> hai đoạn ấy.<br>" +
        "Tam giác $ABC$, $AD$ là phân giác góc $A$ ($D \\in BC$):",
      formula: "\\dfrac{DB}{DC} = \\dfrac{AB}{AC}",
    },
    {
      heading: "2. Cách dùng",
      html:
        "Từ tỉ lệ thức trên, nếu biết ba trong các độ dài $DB, DC, AB, AC$ (hoặc biết $BC = DB + DC$) " +
        "thì tính được đại lượng còn lại bằng cách nhân chéo.",
    },
  ],

  visual: { type: "thales", config: { kind: "bisector" } },

  examples: [
    {
      title: "Chia cạnh đáy",
      prompt: "Tam giác $ABC$ có $AD$ là phân giác góc $A$ ($D \\in BC$). Biết $AB = 6$, $AC = 4$, $BC = 10$. Tính $DB$, $DC$.",
      steps: [
        "Tính chất phân giác: $\\dfrac{DB}{DC} = \\dfrac{AB}{AC} = \\dfrac{6}{4} = \\dfrac{3}{2}$.",
        "Mà $DB + DC = BC = 10$. Coi $DB = 3k$, $DC = 2k$ thì $5k = 10 \\Rightarrow k = 2$.",
        "$DB = 6$, $DC = 4$.",
      ],
    },
    {
      title: "Tìm một đoạn",
      prompt: "$AD$ là phân giác góc $A$, biết $AB = 8$, $AC = 12$, $DB = 4$. Tính $DC$.",
      steps: [
        "$\\dfrac{DB}{DC} = \\dfrac{AB}{AC}$ → $\\dfrac{4}{DC} = \\dfrac{8}{12}$.",
        "Nhân chéo: $8 \\cdot DC = 4 \\cdot 12 = 48 \\Rightarrow DC = 6$.",
      ],
    },
    {
      title: "Tìm cạnh kề",
      prompt: "$AD$ là phân giác góc $A$, biết $DB = 3$, $DC = 5$, $AB = 6$. Tính $AC$.",
      steps: [
        "$\\dfrac{DB}{DC} = \\dfrac{AB}{AC}$ → $\\dfrac{3}{5} = \\dfrac{6}{AC}$.",
        "Nhân chéo: $3 \\cdot AC = 5 \\cdot 6 = 30 \\Rightarrow AC = 10$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Lập tỉ lệ ngược: $\\dfrac{DB}{DC} = \\dfrac{AC}{AB}$.",
      right: "Đúng là $\\dfrac{DB}{DC} = \\dfrac{AB}{AC}$ — đoạn $DB$ (kề đỉnh $B$) ứng với cạnh $AB$.",
      note: "Đoạn nào gần cạnh nào thì tỉ lệ với cạnh đó: $DB \\leftrightarrow AB$, $DC \\leftrightarrow AC$.",
    },
    {
      wrong: "Quên rằng $DB + DC = BC$ khi cần tách $BC$ thành hai đoạn.",
      right: "Dùng đồng thời $\\dfrac{DB}{DC} = \\dfrac{AB}{AC}$ và $DB + DC = BC$.",
      note: "Hai dữ kiện này kết hợp mới tính được từng đoạn.",
    },
  ],

  exercises: [
    { level: "Nhận biết", prompt: "$AD$ là phân giác góc $A$ của tam giác $ABC$. Viết tỉ lệ thức theo tính chất đường phân giác.",
      hints: ["Đoạn trên cạnh đáy tỉ lệ với cạnh kề tương ứng."],
      solution: "$\\dfrac{DB}{DC} = \\dfrac{AB}{AC}$." },
    { level: "Nhận biết", prompt: "$AD$ phân giác, $AB = 6$, $AC = 9$, $DB = 4$. Tính $DC$.",
      hints: ["$\\dfrac{DB}{DC} = \\dfrac{AB}{AC}$."],
      solution: "$\\dfrac{4}{DC} = \\dfrac{6}{9} \\Rightarrow DC = \\dfrac{4 \\cdot 9}{6} = 6$." },
    { level: "Nhận biết", prompt: "$AD$ phân giác, $DB = 5$, $DC = 10$, $AB = 4$. Tính $AC$.",
      hints: ["$\\dfrac{DB}{DC} = \\dfrac{AB}{AC}$."],
      solution: "$\\dfrac{5}{10} = \\dfrac{4}{AC} \\Rightarrow AC = 8$." },
    { level: "Thông hiểu", prompt: "$AD$ phân giác góc $A$, $AB = 5$, $AC = 10$, $BC = 12$. Tính $DB$, $DC$.",
      hints: ["$\\dfrac{DB}{DC} = \\dfrac{5}{10} = \\dfrac{1}{2}$.", "$DB + DC = 12$."],
      solution: "Coi $DB = k$, $DC = 2k$: $3k = 12 \\Rightarrow k = 4$. Vậy $DB = 4$, $DC = 8$." },
    { level: "Thông hiểu", prompt: "$AD$ phân giác, $AB = 7$, $AC = 7$, $BC = 9$. Tính $DB$, $DC$.",
      hints: ["Hai cạnh kề bằng nhau thì tỉ số $= 1$, nên $D$ là trung điểm $BC$."],
      solution: "$\\dfrac{DB}{DC} = \\dfrac{7}{7} = 1$ nên $DB = DC = \\dfrac{9}{2} = 4{,}5$." },
    { level: "Thông hiểu", prompt: "$AD$ phân giác, $AB = 9$, $AC = 6$, $BC = 10$. Tính $DB$.",
      hints: ["$\\dfrac{DB}{DC} = \\dfrac{9}{6} = \\dfrac{3}{2}$ và $DB + DC = 10$."],
      solution: "Coi $DB = 3k$, $DC = 2k$: $5k = 10 \\Rightarrow k = 2$. Vậy $DB = 6$ (và $DC = 4$)." },
    { level: "Vận dụng", prompt:
        "Tam giác $ABC$ có $AB = 8$ cm, $AC = 12$ cm, $BC = 15$ cm. Đường phân giác $AD$ chia $BC$ thành " +
        "$DB$ và $DC$. Tính $DB$ và $DC$.",
      hints: ["$\\dfrac{DB}{DC} = \\dfrac{8}{12} = \\dfrac{2}{3}$ và $DB + DC = 15$."],
      solution: "Coi $DB = 2k$, $DC = 3k$: $5k = 15 \\Rightarrow k = 3$. Vậy $DB = 6$ cm, $DC = 9$ cm." },
    { level: "Vận dụng", prompt:
        "Tam giác $ABC$ có phân giác $AD$. Biết $DB = 2{,}4$ cm, $DC = 3{,}6$ cm và $AB = 4$ cm. Tính $AC$.",
      hints: ["$\\dfrac{DB}{DC} = \\dfrac{AB}{AC}$, thay số rồi nhân chéo."],
      solution: "$\\dfrac{2{,}4}{3{,}6} = \\dfrac{4}{AC} \\Rightarrow AC = \\dfrac{4 \\cdot 3{,}6}{2{,}4} = 6$ cm." },
  ],

  quiz: [
    { type: "mc", q: "$AD$ là phân giác góc $A$ của $\\triangle ABC$ ($D \\in BC$). Tỉ lệ thức đúng là:", choices: ["$\\dfrac{DB}{DC} = \\dfrac{AB}{AC}$", "$\\dfrac{DB}{DC} = \\dfrac{AC}{AB}$", "$\\dfrac{DB}{AB} = \\dfrac{AC}{DC}$", "$\\dfrac{DB}{AC} = \\dfrac{DC}{AB}$"], answer: 0, explain: "Đoạn gần đỉnh nào tỉ lệ với cạnh kề đỉnh đó: $DB \\leftrightarrow AB$." },
    { type: "fill", q: "$AD$ phân giác, $AB = 8$, $AC = 12$, $DB = 4$. Tính $DC$.", answer: 6, explain: "$\\dfrac{4}{DC} = \\dfrac{8}{12} \\Rightarrow DC = 6$." },
    { type: "fill", q: "$AD$ phân giác, $AB = 6$, $AC = 4$, $BC = 10$. Tính $DB$.", answer: 6, explain: "$\\dfrac{DB}{DC} = \\dfrac{3}{2}$, $DB + DC = 10 \\Rightarrow DB = 6$." },
  ],
});
