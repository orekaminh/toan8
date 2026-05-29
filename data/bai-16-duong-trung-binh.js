/* Bài 16. Đường trung bình của tam giác — Chương IV (KNTT, Tập 1) */
MATH8.registerLesson({
  id: "bai-16-duong-trung-binh",
  chapter: "Chương IV. Định lí Thalès",
  order: 2,
  title: "Bài 16. Đường trung bình của tam giác",

  objectives: [
    "Nhận biết đường trung bình của tam giác.",
    "Vận dụng định lí: đường trung bình song song với cạnh thứ ba và bằng nửa cạnh ấy.",
    "Tính độ dài đoạn thẳng nhờ tính chất đường trung bình.",
  ],

  intro: {
    text:
      "Nối <b>trung điểm</b> hai cạnh của một tam giác, ta được <b>đường trung bình</b>. Điều thú vị: " +
      "đoạn này luôn <b>song song</b> với cạnh thứ ba và <b>dài đúng một nửa</b> cạnh đó. " +
      "Trượt thử hình bên dưới để thấy điều đó luôn đúng.",
    math: "DE = \\dfrac{1}{2}\\,BC",
  },

  theory: [
    {
      heading: "1. Đường trung bình của tam giác",
      html:
        "<b>Đường trung bình</b> của một tam giác là đoạn thẳng nối <b>trung điểm hai cạnh</b> của tam " +
        "giác đó. Mỗi tam giác có ba đường trung bình.",
    },
    {
      heading: "2. Tính chất đường trung bình",
      html:
        "Nếu $D, E$ lần lượt là trung điểm của $AB, AC$ thì $DE$ là đường trung bình và:<br>" +
        "$DE$ <b>song song</b> với $BC$, đồng thời $DE$ bằng <b>một nửa</b> $BC$.",
      formula: "DE \\parallel BC \\qquad\\text{,}\\qquad DE = \\dfrac{1}{2}\\,BC",
    },
  ],

  visual: { type: "thales", config: { kind: "midsegment" } },

  examples: [
    {
      title: "Tính đường trung bình",
      prompt: "Tam giác $ABC$ có $D, E$ là trung điểm $AB, AC$. Biết $BC = 10$ cm. Tính $DE$.",
      steps: [
        "$DE$ là đường trung bình ứng với cạnh $BC$.",
        "$DE = \\dfrac{1}{2}BC = \\dfrac{1}{2} \\cdot 10 = 5$ cm.",
      ],
    },
    {
      title: "Tính cạnh đáy",
      prompt: "$D, E$ là trung điểm $AB, AC$ và $DE = 7$ cm. Tính $BC$.",
      steps: [
        "Vì $DE = \\dfrac{1}{2}BC$ nên $BC = 2 \\cdot DE$.",
        "$BC = 2 \\cdot 7 = 14$ cm.",
      ],
    },
    {
      title: "Kết hợp song song",
      prompt: "Tam giác $ABC$, $D, E$ là trung điểm $AB, AC$. Vì sao $DE \\parallel BC$?",
      steps: [
        "$D, E$ là trung điểm nên $\\dfrac{AD}{AB} = \\dfrac{AE}{AC} = \\dfrac{1}{2}$.",
        "Theo định lí Thalès đảo, $DE \\parallel BC$ (và là đường trung bình).",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "$DE = BC$ (quên hệ số $\\dfrac{1}{2}$).",
      right: "$DE = \\dfrac{1}{2}BC$.",
      note: "Đường trung bình bằng NỬA cạnh thứ ba.",
    },
    {
      wrong: "Cho rằng đoạn nối hai điểm bất kì trên hai cạnh là đường trung bình.",
      right: "Phải nối đúng hai TRUNG ĐIỂM thì mới là đường trung bình.",
      note: "Sai điểm thì tính chất $\\dfrac{1}{2}$ không còn đúng.",
    },
  ],

  exercises: [
    { level: "Nhận biết", prompt: "$D, E$ là trung điểm $AB, AC$; $BC = 8$ cm. Tính $DE$.",
      hints: ["$DE = \\dfrac{1}{2}BC$."],
      solution: "$DE = \\dfrac{1}{2} \\cdot 8 = 4$ cm." },
    { level: "Nhận biết", prompt: "$DE$ là đường trung bình và $DE = 6$ cm. Tính cạnh đáy $BC$.",
      hints: ["$BC = 2 \\cdot DE$."],
      solution: "$BC = 2 \\cdot 6 = 12$ cm." },
    { level: "Nhận biết", prompt: "Mỗi tam giác có bao nhiêu đường trung bình?",
      hints: ["Mỗi cặp trung điểm của hai cạnh cho một đường."],
      solution: "Có $3$ đường trung bình." },
    { level: "Thông hiểu", prompt: "$D, E$ là trung điểm $AB, AC$; $BC = 13$ cm. Tính $DE$.",
      hints: ["$DE = \\dfrac{1}{2}BC$ (kết quả có thể là số thập phân)."],
      solution: "$DE = \\dfrac{13}{2} = 6{,}5$ cm." },
    { level: "Thông hiểu", prompt: "Tam giác $ABC$ có chu vi $24$ cm. Tam giác $ADE$ (với $D, E$ là trung điểm $AB, AC$) có $DE = 5$ cm, $AD = 3$ cm, $AE = 4$ cm. Tính $BC$.",
      hints: ["$BC = 2 \\cdot DE$."],
      solution: "$BC = 2 \\cdot 5 = 10$ cm." },
    { level: "Thông hiểu", prompt: "$D, E, F$ là trung điểm các cạnh của tam giác $ABC$ có $BC = 12$, $CA = 16$, $AB = 20$. Tính độ dài ba đường trung bình.",
      hints: ["Mỗi đường trung bình bằng nửa cạnh nó song song."],
      solution: "Ba đường trung bình dài $\\dfrac{12}{2}=6$, $\\dfrac{16}{2}=8$, $\\dfrac{20}{2}=10$ (cm)." },
    { level: "Vận dụng", prompt:
        "Để đo khoảng cách $BC$ qua một cái hồ, người ta chọn điểm $A$, lấy $D, E$ là trung điểm $AB, AC$ " +
        "rồi đo được $DE = 35$ m. Tính khoảng cách $BC$.",
      hints: ["$DE$ là đường trung bình → $BC = 2 \\cdot DE$."],
      solution: "$BC = 2 \\cdot 35 = 70$ m." },
    { level: "Vận dụng", prompt:
        "Tam giác $ABC$ có $D, E$ là trung điểm $AB, AC$. Trên tia $DE$ lấy điểm $F$ sao cho $E$ là trung " +
        "điểm $DF$. Biết $BC = 10$ cm, tính $DF$.",
      hints: ["$DE = \\dfrac{1}{2}BC = 5$.", "$E$ là trung điểm $DF$ nên $DF = 2 \\cdot DE$."],
      solution: "$DE = \\dfrac{1}{2} \\cdot 10 = 5$ cm; $DF = 2 \\cdot DE = 10$ cm." },
  ],

  quiz: [
    { type: "mc", q: "Đường trung bình của tam giác có tính chất:", choices: ["Song song và bằng nửa cạnh thứ ba", "Bằng cạnh thứ ba", "Vuông góc với cạnh thứ ba", "Bằng nửa chu vi tam giác"], answer: 0, explain: "$DE \\parallel BC$ và $DE = \\tfrac{1}{2}BC$." },
    { type: "fill", q: "$D, E$ là trung điểm $AB, AC$; biết $BC = 10$. Tính $DE$.", answer: 5, explain: "$DE = \\tfrac{1}{2}BC = 5$." },
    { type: "fill", q: "$DE$ là đường trung bình và $DE = 7$. Tính $BC$.", answer: 14, explain: "$BC = 2 \\cdot DE = 14$." },
  ],
});
