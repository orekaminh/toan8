/* Bài 12. Hình bình hành — Chương III. Tứ giác (Kết nối tri thức, Tập 1) */
MATH8.registerLesson({
  id: "bai-12-hinh-binh-hanh",
  chapter: "Chương III. Tứ giác",
  order: 3,
  title: "Bài 12. Hình bình hành",

  objectives: [
    "Nhận biết hình bình hành.",
    "Vận dụng tính chất: các cạnh đối bằng nhau, các góc đối bằng nhau, hai đường chéo cắt nhau tại trung điểm mỗi đường.",
    "Sử dụng các dấu hiệu nhận biết hình bình hành.",
  ],

  intro: {
    text:
      "Bậc cầu thang, song cửa kéo, hay khung xe đạp gấp… có nhiều hình <b>bình hành</b>. " +
      "Hình bình hành là tứ giác có hai cặp cạnh đối song song và mang nhiều tính chất rất hữu ích.",
    math: "AB \\parallel CD,\\quad AD \\parallel BC",
  },

  theory: [
    {
      heading: "1. Định nghĩa",
      html:
        "<b>Hình bình hành</b> là tứ giác có <b>các cạnh đối song song</b>.<br>" +
        "Hình bình hành $ABCD$ có $AB \\parallel CD$ và $AD \\parallel BC$.",
    },
    {
      heading: "2. Tính chất",
      html:
        "Trong hình bình hành:<br>" +
        "• các <b>cạnh đối bằng nhau</b>;<br>" +
        "• các <b>góc đối bằng nhau</b>;<br>" +
        "• hai <b>đường chéo cắt nhau tại trung điểm</b> của mỗi đường.",
      formula: "AB = CD,\\ AD = BC;\\quad \\widehat{A} = \\widehat{C},\\ \\widehat{B} = \\widehat{D};\\quad OA = OC,\\ OB = OD",
    },
    {
      heading: "3. Dấu hiệu nhận biết",
      html:
        "Một tứ giác là hình bình hành nếu có một trong các dấu hiệu:<br>" +
        "1) các cạnh đối song song;<br>" +
        "2) các cạnh đối bằng nhau;<br>" +
        "3) một cặp cạnh đối <b>vừa song song vừa bằng nhau</b>;<br>" +
        "4) các góc đối bằng nhau;<br>" +
        "5) hai đường chéo cắt nhau tại trung điểm mỗi đường.",
    },
  ],

  visual: { type: "geometry", config: { kind: "parallelogram" } },

  examples: [
    {
      title: "Cạnh và chu vi",
      prompt: "Hình bình hành $ABCD$ có $AB = 6$ cm, $BC = 4$ cm. Tính $CD$, $AD$ và chu vi.",
      steps: [
        "Các cạnh đối bằng nhau: $CD = AB = 6$ cm; $AD = BC = 4$ cm.",
        "Chu vi $= 2(AB + BC) = 2(6 + 4) = 20$ cm.",
      ],
    },
    {
      title: "Các góc",
      prompt: "Hình bình hành $ABCD$ có $\\widehat{A} = 110^\\circ$. Tính các góc còn lại.",
      steps: [
        "Góc đối bằng nhau: $\\widehat{C} = \\widehat{A} = 110^\\circ$.",
        "Hai góc kề một cạnh thì bù nhau: $\\widehat{A} + \\widehat{B} = 180^\\circ$, nên $\\widehat{B} = 70^\\circ$.",
        "$\\widehat{D} = \\widehat{B} = 70^\\circ$.",
      ],
    },
    {
      title: "Đường chéo",
      prompt: "Hình bình hành $ABCD$ có hai đường chéo cắt nhau tại $O$. Biết $OA = 3$ cm, $OB = 5$ cm. Tính $AC$ và $BD$.",
      steps: [
        "$O$ là trung điểm của mỗi đường chéo.",
        "$AC = 2 \\cdot OA = 2 \\cdot 3 = 6$ cm.",
        "$BD = 2 \\cdot OB = 2 \\cdot 5 = 10$ cm.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Cho rằng hai đường chéo hình bình hành bằng nhau.",
      right: "Đường chéo hình bình hành chỉ cắt nhau tại trung điểm; chúng bằng nhau chỉ khi là <b>hình chữ nhật</b>.",
      note: "Đừng nhầm tính chất riêng của hình chữ nhật cho hình bình hành.",
    },
    {
      wrong: "Lấy hai góc kề bằng nhau ($\\widehat{A} = \\widehat{B}$).",
      right: "Trong hình bình hành, góc ĐỐI bằng nhau ($\\widehat{A} = \\widehat{C}$); hai góc KỀ thì bù nhau ($180^\\circ$).",
      note: "Phân biệt góc đối (bằng nhau) và góc kề (cộng lại $180^\\circ$).",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Hình bình hành $ABCD$ có $AB = 8$ cm. Tính $CD$.",
      hints: ["Các cạnh đối của hình bình hành bằng nhau."],
      solution: "$CD = AB = 8$ cm.",
    },
    {
      level: "Nhận biết",
      prompt: "Hình bình hành $ABCD$ có $\\widehat{B} = 65^\\circ$. Tính $\\widehat{D}$.",
      hints: ["Hai góc đối bằng nhau."],
      solution: "$\\widehat{D} = \\widehat{B} = 65^\\circ$.",
    },
    {
      level: "Nhận biết",
      prompt: "Hình bình hành $ABCD$ có hai đường chéo cắt nhau tại $O$, $AC = 12$ cm. Tính $OA$.",
      hints: ["$O$ là trung điểm của $AC$."],
      solution: "$OA = AC : 2 = 12 : 2 = 6$ cm.",
    },
    {
      level: "Thông hiểu",
      prompt: "Hình bình hành $ABCD$ có $AB = 7$ cm và chu vi bằng $24$ cm. Tính $BC$.",
      hints: ["Chu vi $= 2(AB + BC)$.", "Suy ra $AB + BC = 12$."],
      solution: "$AB + BC = 24 : 2 = 12$ cm, nên $BC = 12 - 7 = 5$ cm.",
    },
    {
      level: "Thông hiểu",
      prompt: "Hình bình hành $ABCD$ có $\\widehat{A} - \\widehat{B} = 40^\\circ$. Tính $\\widehat{A}$ và $\\widehat{B}$.",
      hints: ["$\\widehat{A} + \\widehat{B} = 180^\\circ$ (hai góc kề một cạnh).", "Kết hợp với $\\widehat{A} - \\widehat{B} = 40^\\circ$."],
      solution: "Từ $\\widehat{A} + \\widehat{B} = 180^\\circ$ và $\\widehat{A} - \\widehat{B} = 40^\\circ$ suy ra $\\widehat{A} = 110^\\circ$, $\\widehat{B} = 70^\\circ$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tứ giác $ABCD$ có $AB \\parallel CD$ và $AB = CD = 5$ cm. Hỏi $ABCD$ là hình gì? Vì sao?",
      hints: ["Xét một cặp cạnh đối: chúng vừa song song vừa bằng nhau.", "Dùng dấu hiệu nhận biết số 3."],
      solution: "Cặp cạnh $AB$ và $CD$ vừa song song vừa bằng nhau, nên theo dấu hiệu, $ABCD$ là hình bình hành.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Cho hình bình hành $ABCD$. Trên cạnh $AB$ lấy điểm $E$, trên cạnh $CD$ lấy điểm $F$ sao cho " +
        "$AE = CF$. Chứng minh rằng tứ giác $AECF$ là hình bình hành.",
      hints: [
        "Vì $ABCD$ là hình bình hành nên $AB \\parallel CD$, suy ra $AE \\parallel CF$.",
        "Cặp cạnh $AE$ và $CF$ vừa song song vừa bằng nhau → dùng dấu hiệu 3.",
      ],
      solution:
        "Do $AB \\parallel CD$ nên $AE \\parallel CF$. Lại có $AE = CF$ (giả thiết). " +
        "Tứ giác $AECF$ có một cặp cạnh đối ($AE$ và $CF$) vừa song song vừa bằng nhau, " +
        "nên $AECF$ là hình bình hành.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Cho hình bình hành $ABCD$ có hai đường chéo cắt nhau tại $O$. Một đường thẳng qua $O$ cắt $AB$ " +
        "tại $M$ và cắt $CD$ tại $N$. Chứng minh $O$ là trung điểm của $MN$.",
      hints: [
        "$O$ là trung điểm của $AC$ nên $OA = OC$; lại có $AB \\parallel CD$.",
        "Xét hai tam giác $OAM$ và $OCN$ (đối đỉnh tại $O$, so le trong) để chứng minh chúng bằng nhau.",
      ],
      solution:
        "Vì $AB \\parallel CD$ nên $\\widehat{OAM} = \\widehat{OCN}$ (so le trong) và $\\widehat{AOM} = \\widehat{CON}$ " +
        "(đối đỉnh). Hai tam giác $OAM$ và $OCN$ có $OA = OC$ và hai góc kề bằng nhau nên bằng nhau (g.c.g), " +
        "suy ra $OM = ON$. Vậy $O$ là trung điểm của $MN$.",
    },
  ],

  quiz: [
    { type: "mc", q: "Trong hình bình hành, các góc đối:", choices: ["Bằng nhau", "Bù nhau", "Phụ nhau", "Đều vuông"], answer: 0, explain: "Tính chất hình bình hành: các góc đối bằng nhau." },
    { type: "fill", q: "Hình bình hành $ABCD$ có $\\widehat{A} = 110^\\circ$. Số đo $\\widehat{B}$ (độ)?", answer: 70, explain: "Hai góc kề bù: $180 - 110 = 70$." },
    { type: "mc", q: "Hai đường chéo của hình bình hành:", choices: ["Cắt nhau tại trung điểm mỗi đường", "Bằng nhau", "Vuông góc", "Là phân giác các góc"], answer: 0, explain: "Bằng nhau là của hình chữ nhật; vuông góc là của hình thoi." },
  ],
});
