/* Bài 14. Hình thoi và hình vuông — Chương III. Tứ giác (Kết nối tri thức, Tập 1) */
MATH8.registerLesson({
  id: "bai-14-hinh-thoi-hinh-vuong",
  chapter: "Chương III. Tứ giác",
  order: 5,
  title: "Bài 14. Hình thoi và hình vuông",

  objectives: [
    "Nhận biết hình thoi và hình vuông.",
    "Vận dụng tính chất hình thoi (hai đường chéo vuông góc, là phân giác các góc) và hình vuông.",
    "Biết dấu hiệu nhận biết hình thoi, hình vuông và mối quan hệ với các tứ giác đã học.",
  ],

  intro: {
    text:
      "Hoa văn gạch lát, cánh diều, biển báo giao thông hình thoi… và ô bàn cờ hình vuông. " +
      "<b>Hình thoi</b> và <b>hình vuông</b> là hai 'ngôi sao' khép lại gia đình tứ giác: " +
      "hình vuông vừa là hình chữ nhật, vừa là hình thoi.",
  },

  theory: [
    {
      heading: "1. Hình thoi",
      html:
        "<b>Hình thoi</b> là tứ giác có <b>bốn cạnh bằng nhau</b>. (Hình thoi cũng là hình bình hành có " +
        "hai cạnh kề bằng nhau.)<br>" +
        "Vì là hình bình hành nên hình thoi có mọi tính chất của hình bình hành.",
    },
    {
      heading: "2. Tính chất riêng của hình thoi",
      html:
        "Trong hình thoi, hai <b>đường chéo vuông góc</b> với nhau và mỗi đường chéo là <b>đường phân " +
        "giác</b> của các góc ở hai đỉnh nó đi qua. (Hai đường chéo vẫn cắt nhau tại trung điểm mỗi đường.)",
      formula: "AC \\perp BD",
    },
    {
      heading: "3. Hình vuông",
      html:
        "<b>Hình vuông</b> là tứ giác có <b>bốn góc vuông và bốn cạnh bằng nhau</b>.<br>" +
        "Hình vuông vừa là hình chữ nhật, vừa là hình thoi, nên nó có <b>tất cả</b> tính chất của cả hai: " +
        "hai đường chéo <b>bằng nhau, vuông góc</b>, cắt nhau tại trung điểm và là phân giác các góc.",
    },
    {
      heading: "4. Dấu hiệu nhận biết",
      html:
        "<b>Hình thoi:</b> tứ giác có bốn cạnh bằng nhau; hoặc hình bình hành có hai cạnh kề bằng nhau, " +
        "hoặc có hai đường chéo vuông góc, hoặc có một đường chéo là phân giác của một góc.<br>" +
        "<b>Hình vuông:</b> hình chữ nhật có hai cạnh kề bằng nhau (hoặc có hai đường chéo vuông góc); " +
        "hoặc hình thoi có một góc vuông (hoặc có hai đường chéo bằng nhau).",
    },
  ],

  visual: { type: "geometry", config: { kind: "rhombus" } },

  examples: [
    {
      title: "Chu vi hình thoi",
      prompt: "Hình thoi $ABCD$ có cạnh bằng $5$ cm. Tính chu vi.",
      steps: [
        "Hình thoi có bốn cạnh bằng nhau.",
        "Chu vi $= 4 \\cdot 5 = 20$ cm.",
      ],
    },
    {
      title: "Đường chéo và diện tích hình thoi",
      prompt: "Hình thoi $ABCD$ có hai đường chéo $AC = 6$ cm, $BD = 8$ cm cắt nhau tại $O$. Tính $OA$, $OB$ và diện tích hình thoi.",
      steps: [
        "Hai đường chéo cắt nhau tại trung điểm: $OA = AC : 2 = 3$ cm; $OB = BD : 2 = 4$ cm.",
        "Diện tích hình thoi bằng nửa tích hai đường chéo: $S = \\tfrac{1}{2} \\cdot AC \\cdot BD$.",
        "$S = \\tfrac{1}{2} \\cdot 6 \\cdot 8 = 24\\ \\text{cm}^2$.",
      ],
    },
    {
      title: "Nhận biết hình vuông",
      prompt: "Hình chữ nhật $ABCD$ có hai cạnh kề bằng nhau ($AB = BC$). Hỏi $ABCD$ là hình gì?",
      steps: [
        "$ABCD$ là hình chữ nhật (bốn góc vuông) và có hai cạnh kề bằng nhau.",
        "Theo dấu hiệu, hình chữ nhật có hai cạnh kề bằng nhau là hình vuông.",
        "Vậy $ABCD$ là hình vuông.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Cho rằng hai đường chéo hình thoi bằng nhau.",
      right: "Hai đường chéo hình thoi <b>vuông góc</b> (và cắt nhau tại trung điểm), nhưng chỉ <b>bằng nhau</b> khi hình thoi đó là hình vuông.",
      note: "Vuông góc ≠ bằng nhau. Bằng nhau + vuông góc → hình vuông.",
    },
    {
      wrong: "Nghĩ hình vuông chỉ là hình thoi (hoặc chỉ là hình chữ nhật).",
      right: "Hình vuông VỪA là hình chữ nhật VỪA là hình thoi.",
      note: "Vì vậy hình vuông có đủ tính chất của cả hai.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Hình thoi có cạnh $7$ cm. Tính chu vi của nó.",
      hints: ["Bốn cạnh hình thoi bằng nhau."],
      solution: "Chu vi $= 4 \\cdot 7 = 28$ cm.",
    },
    {
      level: "Nhận biết",
      prompt: "Hai đường chéo của một hình thoi có vuông góc với nhau không?",
      hints: ["Nhớ tính chất riêng của hình thoi về đường chéo."],
      solution: "Có. Hai đường chéo của hình thoi luôn vuông góc với nhau (và cắt nhau tại trung điểm mỗi đường).",
    },
    {
      level: "Nhận biết",
      prompt: "Hình vuông cạnh $4$ cm có diện tích bằng bao nhiêu?",
      hints: ["Diện tích hình vuông $=$ cạnh $\\times$ cạnh."],
      solution: "$S = 4 \\cdot 4 = 16\\ \\text{cm}^2$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Hình thoi $ABCD$ có hai đường chéo $AC = 10$ cm và $BD = 24$ cm. Tính diện tích hình thoi.",
      hints: ["Diện tích hình thoi $= \\tfrac{1}{2} \\cdot d_1 \\cdot d_2$."],
      solution: "$S = \\tfrac{1}{2} \\cdot 10 \\cdot 24 = 120\\ \\text{cm}^2$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Hình bình hành $ABCD$ có $AB = BC$. Hỏi $ABCD$ là hình gì? Vì sao?",
      hints: ["Hai cạnh kề $AB$ và $BC$ bằng nhau.", "Dùng dấu hiệu nhận biết hình thoi."],
      solution: "Hình bình hành có hai cạnh kề bằng nhau là hình thoi. Vậy $ABCD$ là hình thoi.",
    },
    {
      level: "Thông hiểu",
      prompt: "Hình thoi $ABCD$ có một góc $\\widehat{A} = 90^\\circ$. Hỏi $ABCD$ là hình gì?",
      hints: ["Hình thoi đã có bốn cạnh bằng nhau; nay thêm một góc vuông.", "Dùng dấu hiệu nhận biết hình vuông."],
      solution: "Hình thoi có một góc vuông là hình vuông. Vậy $ABCD$ là hình vuông.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Một viên gạch trang trí hình thoi có hai đường chéo dài $30$ cm và $40$ cm. Người ta lát kín một " +
        "mảng tường bằng $50$ viên gạch như vậy (không chồng lên nhau, không hở). Tính diện tích mảng tường.",
      hints: [
        "Diện tích một viên $= \\tfrac{1}{2} \\cdot 30 \\cdot 40$.",
        "Nhân với số viên gạch.",
      ],
      solution:
        "Diện tích một viên gạch $= \\tfrac{1}{2} \\cdot 30 \\cdot 40 = 600\\ \\text{cm}^2$. " +
        "Diện tích mảng tường $= 600 \\cdot 50 = 30\\,000\\ \\text{cm}^2 = 3\\ \\text{m}^2$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Cho hình chữ nhật $ABCD$. Gọi $M, N, P, Q$ lần lượt là trung điểm các cạnh $AB, BC, CD, DA$. " +
        "Hãy dự đoán tứ giác $MNPQ$ là hình gì (gợi ý: dùng tính chất trung điểm và đường chéo).",
      hints: [
        "Các đoạn $MN, NP, PQ, QM$ nối trung điểm các cạnh — liên hệ với hai đường chéo của hình chữ nhật.",
        "Hai đường chéo hình chữ nhật bằng nhau, nên bốn đoạn này bằng nhau.",
      ],
      solution:
        "Nối các trung điểm, ta được $MN, NP, PQ, QM$ đều bằng nửa đường chéo của hình chữ nhật. " +
        "Vì hai đường chéo hình chữ nhật bằng nhau nên $MN = NP = PQ = QM$. Tứ giác $MNPQ$ có bốn cạnh " +
        "bằng nhau nên là <b>hình thoi</b>.",
    },
  ],

  quiz: [
    { type: "mc", q: "Hai đường chéo của hình thoi:", choices: ["Vuông góc với nhau", "Bằng nhau", "Song song", "Không cắt nhau"], answer: 0, explain: "Tính chất riêng của hình thoi (bằng nhau là của hình vuông)." },
    { type: "fill", q: "Hình thoi có hai đường chéo $6$ cm và $8$ cm. Diện tích bằng bao nhiêu $\\text{cm}^2$?", answer: 24, explain: "$S = \\dfrac{1}{2} d_1 d_2 = \\dfrac{1}{2} \\cdot 6 \\cdot 8 = 24$." },
    { type: "mc", q: "Hình chữ nhật có thêm điều kiện nào thì trở thành hình vuông?", choices: ["Hai cạnh kề bằng nhau", "Hai đường chéo bằng nhau", "Có một góc vuông", "Các cạnh đối song song"], answer: 0, explain: "Hình chữ nhật có hai cạnh kề bằng nhau là hình vuông." },
  ],
});
