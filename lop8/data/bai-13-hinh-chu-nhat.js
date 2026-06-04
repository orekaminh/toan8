/* Bài 13. Hình chữ nhật — Chương III. Tứ giác (Kết nối tri thức, Tập 1) */
MATH8.registerLesson({
  id: "bai-13-hinh-chu-nhat",
  chapter: "Chương III. Tứ giác",
  order: 4,
  title: "Bài 13. Hình chữ nhật",

  objectives: [
    "Nhận biết hình chữ nhật.",
    "Vận dụng tính chất hình chữ nhật, đặc biệt là hai đường chéo bằng nhau và cắt nhau tại trung điểm.",
    "Biết dấu hiệu nhận biết và ứng dụng: đường trung tuyến ứng với cạnh huyền của tam giác vuông bằng nửa cạnh huyền.",
  ],

  intro: {
    text:
      "Quyển sách, màn hình, viên gạch lát nền… hầu hết là <b>hình chữ nhật</b>. " +
      "Hình chữ nhật là một trường hợp đặc biệt rất quen thuộc của hình bình hành — với bốn góc vuông.",
    math: "\\widehat{A} = \\widehat{B} = \\widehat{C} = \\widehat{D} = 90^\\circ",
  },

  theory: [
    {
      heading: "1. Định nghĩa",
      html:
        "<b>Hình chữ nhật</b> là tứ giác có <b>bốn góc vuông</b>.<br>" +
        "Hình chữ nhật vừa là một hình bình hành, vừa là một hình thang cân.",
    },
    {
      heading: "2. Tính chất",
      html:
        "Hình chữ nhật có <b>tất cả tính chất của hình bình hành</b> (cạnh đối bằng nhau, hai đường chéo " +
        "cắt nhau tại trung điểm mỗi đường). Ngoài ra, hai <b>đường chéo bằng nhau</b>.",
      formula: "AC = BD \\qquad\\text{và}\\qquad OA = OB = OC = OD",
    },
    {
      heading: "3. Dấu hiệu nhận biết",
      html:
        "Một tứ giác là hình chữ nhật nếu:<br>" +
        "1) là tứ giác có <b>ba góc vuông</b>; hoặc<br>" +
        "2) là <b>hình thang cân có một góc vuông</b>; hoặc<br>" +
        "3) là <b>hình bình hành có một góc vuông</b>; hoặc<br>" +
        "4) là <b>hình bình hành có hai đường chéo bằng nhau</b>.",
    },
    {
      heading: "4. Một ứng dụng (đường trung tuyến cạnh huyền)",
      html:
        "Trong một tam giác vuông, <b>đường trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền</b>. " +
        "Cụ thể: nếu $\\triangle ABC$ vuông tại $A$ và $M$ là trung điểm cạnh huyền $BC$ thì:",
      formula: "AM = \\dfrac{1}{2}\\,BC",
    },
  ],

  visual: { type: "geometry", config: { kind: "rectangle" } },

  examples: [
    {
      title: "Đường chéo hình chữ nhật",
      prompt: "Hình chữ nhật $ABCD$ có hai đường chéo cắt nhau tại $O$, biết $AC = 10$ cm. Tính $BD$ và $OA$.",
      steps: [
        "Hai đường chéo bằng nhau: $BD = AC = 10$ cm.",
        "$O$ là trung điểm mỗi đường chéo: $OA = AC : 2 = 5$ cm.",
      ],
    },
    {
      title: "Nhận biết hình chữ nhật",
      prompt: "Hình bình hành $ABCD$ có $\\widehat{A} = 90^\\circ$. Hỏi $ABCD$ là hình gì?",
      steps: [
        "$ABCD$ là hình bình hành và có một góc vuông.",
        "Theo dấu hiệu 3, $ABCD$ là hình chữ nhật.",
      ],
    },
    {
      title: "Trung tuyến ứng với cạnh huyền",
      prompt: "Tam giác $ABC$ vuông tại $A$, có $BC = 12$ cm. Gọi $M$ là trung điểm của $BC$. Tính $AM$.",
      steps: [
        "$BC$ là cạnh huyền, $M$ là trung điểm cạnh huyền.",
        "Đường trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền: $AM = \\tfrac{1}{2}BC$.",
        "$AM = \\tfrac{1}{2} \\cdot 12 = 6$ cm.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Cho rằng mọi hình bình hành đều là hình chữ nhật.",
      right: "Hình bình hành chỉ là hình chữ nhật khi có thêm một góc vuông (hoặc hai đường chéo bằng nhau).",
      note: "Hình chữ nhật là trường hợp ĐẶC BIỆT của hình bình hành.",
    },
    {
      wrong: "Nghĩ rằng đường trung tuyến ứng với cạnh huyền bằng cả cạnh huyền.",
      right: "Nó bằng <b>nửa</b> cạnh huyền: $AM = \\tfrac{1}{2}BC$.",
      note: "Nhớ hệ số $\\tfrac{1}{2}$.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Hình chữ nhật $ABCD$ có đường chéo $AC = 13$ cm. Tính đường chéo $BD$.",
      hints: ["Hai đường chéo hình chữ nhật bằng nhau."],
      solution: "$BD = AC = 13$ cm.",
    },
    {
      level: "Nhận biết",
      prompt: "Hình chữ nhật $ABCD$ có $AB = 5$ cm. Tính $CD$.",
      hints: ["Hình chữ nhật cũng là hình bình hành nên các cạnh đối bằng nhau."],
      solution: "$CD = AB = 5$ cm.",
    },
    {
      level: "Nhận biết",
      prompt: "Tam giác $DEF$ vuông tại $D$, có cạnh huyền $EF = 8$ cm. Gọi $M$ là trung điểm $EF$. Tính $DM$.",
      hints: ["Trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền."],
      solution: "$DM = \\tfrac{1}{2}EF = \\tfrac{1}{2} \\cdot 8 = 4$ cm.",
    },
    {
      level: "Thông hiểu",
      prompt: "Hình chữ nhật $ABCD$ có hai đường chéo cắt nhau tại $O$, biết $OB = 4{,}5$ cm. Tính độ dài hai đường chéo.",
      hints: ["$O$ là trung điểm mỗi đường chéo nên $BD = 2 \\cdot OB$.", "Hai đường chéo bằng nhau."],
      solution: "$BD = 2 \\cdot 4{,}5 = 9$ cm; và $AC = BD = 9$ cm.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tứ giác $ABCD$ có $\\widehat{A} = \\widehat{B} = \\widehat{C} = 90^\\circ$. Tứ giác này là hình gì? Tính $\\widehat{D}$.",
      hints: ["Tổng bốn góc của tứ giác bằng $360^\\circ$ để tìm $\\widehat{D}$.", "Một tứ giác có ba (rồi bốn) góc vuông là hình gì?"],
      solution: "$\\widehat{D} = 360^\\circ - 3 \\cdot 90^\\circ = 90^\\circ$. Tứ giác có bốn góc vuông nên là hình chữ nhật.",
    },
    {
      level: "Thông hiểu",
      prompt: "Hình bình hành $MNPQ$ có hai đường chéo $MP = NQ$. Hỏi $MNPQ$ là hình gì? Vì sao?",
      hints: ["Đây là một dấu hiệu nhận biết hình chữ nhật."],
      solution: "Hình bình hành có hai đường chéo bằng nhau là hình chữ nhật (dấu hiệu 4). Vậy $MNPQ$ là hình chữ nhật.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Một khung ảnh hình chữ nhật $ABCD$ có chiều dài $AB = 30$ cm, chiều rộng $BC = 20$ cm. " +
        "Tính chu vi và diện tích của khung ảnh.",
      hints: ["Chu vi $= 2(AB + BC)$.", "Diện tích $= AB \\cdot BC$."],
      solution: "Chu vi $= 2(30 + 20) = 100$ cm. Diện tích $= 30 \\cdot 20 = 600\\ \\text{cm}^2$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Cho tam giác $ABC$ vuông tại $A$. Gọi $M$ là trung điểm cạnh huyền $BC$. Chứng minh rằng $M$ cách " +
        "đều ba đỉnh $A$, $B$, $C$.",
      hints: [
        "$M$ là trung điểm $BC$ nên $MB = MC = \\tfrac{1}{2}BC$.",
        "Dùng tính chất trung tuyến ứng với cạnh huyền để so sánh $MA$ với $\\tfrac{1}{2}BC$.",
      ],
      solution:
        "Vì $M$ là trung điểm $BC$ nên $MB = MC = \\tfrac{1}{2}BC$. Tam giác $ABC$ vuông tại $A$ có trung " +
        "tuyến $AM$ ứng với cạnh huyền nên $MA = \\tfrac{1}{2}BC$. Do đó $MA = MB = MC$, tức $M$ cách đều ba đỉnh.",
    },
  ],

  quiz: [
    { type: "mc", q: "Hình chữ nhật là tứ giác có:", choices: ["Bốn góc vuông", "Bốn cạnh bằng nhau", "Hai đường chéo vuông góc", "Đúng một góc vuông"], answer: 0, explain: "Định nghĩa: tứ giác có bốn góc vuông." },
    { type: "mc", q: "Hai đường chéo của hình chữ nhật:", choices: ["Bằng nhau và cắt nhau tại trung điểm", "Vuông góc với nhau", "Là phân giác các góc", "Không bằng nhau"], answer: 0, explain: "Tính chất đặc trưng của hình chữ nhật." },
    { type: "fill", q: "Tam giác vuông có cạnh huyền $BC = 12$. Trung tuyến $AM$ ứng với cạnh huyền dài bao nhiêu?", answer: 6, explain: "$AM = \\dfrac{1}{2} BC = 6$." },
  ],
});
