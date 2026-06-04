/* Bài 13. Mở đầu về đường tròn
   Chương V (Toán 9, Kết nối tri thức, Tập 1) */
MATH9.registerLesson({
  id: "bai-13-mo-dau-ve-duong-tron",
  visual: { type: "circle", config: { kind: "point" } },
  chapter: "Chương V. Đường tròn",
  order: 1,
  title: "Bài 13. Mở đầu về đường tròn",

  objectives: [
    "Nhận biết đường tròn $(O; R)$ là tập hợp các điểm cách tâm $O$ một khoảng bằng $R$.",
    "Xác định vị trí của một điểm so với đường tròn dựa vào khoảng cách tới tâm.",
    "Nhận biết dây, đường kính và tính đối xứng của đường tròn.",
  ],

  intro: {
    text:
      "Khi xoay một chiếc compa quanh một điểm $O$ cố định với khoảng mở không đổi, đầu bút chì vạch nên " +
      "một đường cong khép kín — đó là <b>đường tròn</b>. Mọi điểm trên đường cong ấy đều cách $O$ một " +
      "khoảng <b>như nhau</b>, gọi là <b>bán kính</b> $R$. Ta kí hiệu đường tròn tâm $O$ bán kính $R$ là " +
      "$(O; R)$.",
    math: "OM = R",
  },

  theory: [
    {
      heading: "1. Đường tròn",
      html:
        "<b>Đường tròn tâm $O$ bán kính $R$</b> (với $R > 0$), kí hiệu $(O; R)$, là <b>tập hợp tất cả các " +
        "điểm cách điểm $O$ một khoảng bằng $R$</b>.<br>" +
        "Như vậy, điểm $M$ nằm trên đường tròn $(O; R)$ khi và chỉ khi khoảng cách từ $M$ đến tâm bằng " +
        "đúng bán kính.",
      formula: "M \\in (O; R) \\Leftrightarrow OM = R",
    },
    {
      heading: "2. Vị trí của một điểm so với đường tròn",
      html:
        "Cho đường tròn $(O; R)$ và điểm $M$. So sánh $OM$ với $R$ ta có ba trường hợp:<br>" +
        "• Nếu $OM = R$ thì $M$ <b>nằm trên</b> đường tròn.<br>" +
        "• Nếu $OM < R$ thì $M$ <b>nằm trong</b> đường tròn (phần hình tròn).<br>" +
        "• Nếu $OM > R$ thì $M$ <b>nằm ngoài</b> đường tròn.",
      formula: "OM < R,\\quad OM = R,\\quad OM > R",
    },
    {
      heading: "3. Dây, đường kính và tính đối xứng",
      html:
        "Đoạn thẳng nối hai điểm bất kì trên đường tròn gọi là một <b>dây</b> (dây cung). Dây đi qua tâm " +
        "$O$ gọi là <b>đường kính</b>; đường kính có độ dài bằng $2R$ và là <b>dây lớn nhất</b> của đường " +
        "tròn.<br>" +
        "Đường tròn có <b>tâm đối xứng</b> là tâm $O$ và có <b>vô số trục đối xứng</b> — mỗi đường thẳng " +
        "chứa một đường kính đều là một trục đối xứng.",
      formula: "AB = 2R \\text{ (} A, B \\in (O;R),\\ O \\in AB \\text{)}",
    },
  ],

  examples: [
    {
      title: "Xác định vị trí điểm so với đường tròn",
      prompt: "Cho đường tròn $(O; 5\\text{ cm})$. Điểm $A$ có $OA = 5$ cm, điểm $B$ có $OB = 3$ cm, điểm $C$ có $OC = 7$ cm. Hãy cho biết vị trí mỗi điểm.",
      steps: [
        "So sánh khoảng cách tới tâm với bán kính $R = 5$ cm.",
        "$OA = 5 = R$ nên $A$ <b>nằm trên</b> đường tròn.",
        "$OB = 3 < 5 = R$ nên $B$ <b>nằm trong</b> đường tròn.",
        "$OC = 7 > 5 = R$ nên $C$ <b>nằm ngoài</b> đường tròn.",
      ],
    },
    {
      title: "Tính bán kính và đường kính",
      prompt: "Đường tròn $(O; R)$ có một đường kính $AB = 12$ cm. Tính bán kính $R$.",
      steps: [
        "Đường kính bằng hai lần bán kính: $AB = 2R$.",
        "Suy ra $R = \\dfrac{AB}{2} = \\dfrac{12}{2} = 6$ cm.",
        "Vậy bán kính của đường tròn là $R = 6$ cm.",
      ],
    },
    {
      title: "Dây lớn nhất của đường tròn",
      prompt: "Cho đường tròn $(O; 4\\text{ cm})$. Một dây $CD$ có thể dài tối đa bao nhiêu?",
      steps: [
        "Trong một đường tròn, dây lớn nhất chính là <b>đường kính</b>.",
        "Đường kính bằng $2R = 2 \\cdot 4 = 8$ cm.",
        "Vậy dây $CD$ dài tối đa $8$ cm (khi $CD$ đi qua tâm $O$).",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Nghĩ rằng đường tròn gồm cả phần bên trong (hình tròn).",
      right: "<b>Đường tròn</b> chỉ là đường viền — tập các điểm có $OM = R$; phần bên trong gọi là <b>hình tròn</b>.",
      note: "Điểm nằm trong đường tròn có $OM < R$, không thuộc đường tròn.",
    },
    {
      wrong: "Cho rằng bán kính bằng đường kính, hoặc $R = 2 \\cdot$ đường kính.",
      right: "Đường kính bằng <b>hai lần</b> bán kính: $d = 2R$, do đó $R = \\dfrac{d}{2}$.",
      note: "Đường kính là dây dài nhất nên phải lớn hơn (gấp đôi) bán kính.",
    },
    {
      wrong: "Cho rằng đường tròn chỉ có một trục đối xứng.",
      right: "Đường tròn có <b>vô số trục đối xứng</b>: mọi đường thẳng đi qua tâm đều là trục đối xứng.",
      note: "Tâm đối xứng của đường tròn là tâm $O$.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Cho đường tròn $(O; 6\\text{ cm})$ và điểm $M$ có $OM = 6$ cm. Điểm $M$ nằm ở đâu so với đường tròn?",
      hints: ["So sánh $OM$ với bán kính $R = 6$ cm."],
      solution: "Vì $OM = 6 = R$ nên $M$ <b>nằm trên</b> đường tròn $(O; 6)$.",
    },
    {
      level: "Nhận biết",
      prompt: "Đường tròn $(O; R)$ có bán kính $R = 5$ cm. Tính độ dài đường kính của đường tròn.",
      hints: ["Đường kính $= 2R$."],
      solution: "Đường kính $= 2R = 2 \\cdot 5 = 10$ cm.",
    },
    {
      level: "Nhận biết",
      prompt: "Trong một đường tròn, dây nào là dây lớn nhất?",
      hints: ["Dây đi qua tâm có tên gọi riêng."],
      solution: "Dây lớn nhất là <b>đường kính</b> (dây đi qua tâm $O$).",
    },
    {
      level: "Thông hiểu",
      prompt: "Cho đường tròn $(O; 4\\text{ cm})$. Điểm $A$ có $OA = 2{,}5$ cm. Điểm $A$ nằm trong, trên hay ngoài đường tròn?",
      hints: ["So sánh $OA$ với $R = 4$ cm."],
      solution: "Vì $OA = 2{,}5 < 4 = R$ nên $A$ <b>nằm trong</b> đường tròn.",
    },
    {
      level: "Thông hiểu",
      prompt: "Một đường tròn có đường kính $AB = 14$ cm. Tính bán kính $R$ của đường tròn đó.",
      hints: ["Từ $AB = 2R$ rút ra $R$."],
      solution: "$R = \\dfrac{AB}{2} = \\dfrac{14}{2} = 7$ cm.",
    },
    {
      level: "Thông hiểu",
      prompt: "Cho đường tròn $(O; 5\\text{ cm})$ và các điểm $P, Q, S$ với $OP = 5$ cm, $OQ = 4$ cm, $OS = 6$ cm. Sắp xếp vị trí từng điểm.",
      hints: ["Lần lượt so sánh mỗi khoảng cách với $R = 5$ cm."],
      solution:
        "$OP = 5 = R$ nên $P$ nằm trên đường tròn; $OQ = 4 < 5$ nên $Q$ nằm trong; $OS = 6 > 5$ nên $S$ nằm ngoài đường tròn.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Cho đường tròn $(O; R)$ và điểm $M$ nằm trong đường tròn với $OM = 3$ cm. Biết đường kính của đường tròn là $10$ cm. Hãy kiểm tra lại kết luận \"$M$ nằm trong đường tròn\".",
      hints: ["Tính bán kính từ đường kính.", "So sánh $OM$ với bán kính vừa tìm."],
      solution:
        "Bán kính $R = \\dfrac{10}{2} = 5$ cm. Vì $OM = 3 < 5 = R$ nên đúng là $M$ <b>nằm trong</b> đường tròn.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Hai điểm $A$ và $B$ cùng nằm trên đường tròn $(O; 6\\text{ cm})$. Hỏi độ dài đoạn $AB$ có thể nhận giá trị lớn nhất là bao nhiêu? Khi đó $AB$ là gì của đường tròn?",
      hints: ["$AB$ là một dây của đường tròn.", "Dây lớn nhất là đường kính $= 2R$."],
      solution:
        "$AB$ là một dây nên $AB$ lớn nhất khi $AB$ là đường kính: $AB = 2R = 2 \\cdot 6 = 12$ cm. Khi đó $AB$ là <b>đường kính</b> của đường tròn (đi qua tâm $O$).",
    },
  ],

  quiz: [
    { type: "mc", q: "Điểm $M$ nằm trên đường tròn $(O; R)$ khi và chỉ khi:",
      choices: ["$OM < R$", "$OM = R$", "$OM > R$", "$OM = 2R$"], answer: 1,
      explain: "Đường tròn là tập các điểm cách tâm một khoảng đúng bằng $R$, nên $OM = R$." },
    { type: "fill", q: "Đường tròn $(O; R)$ có bán kính $R = 9$ cm. Đường kính của nó dài bao nhiêu cm?",
      answer: 18, explain: "Đường kính $= 2R = 2 \\cdot 9 = 18$ cm." },
    { type: "mc", q: "Phát biểu nào sau đây <b>đúng</b> về tính đối xứng của đường tròn?",
      choices: [
        "Đường tròn chỉ có một trục đối xứng",
        "Đường tròn không có tâm đối xứng",
        "Tâm đối xứng của đường tròn là tâm $O$ và mọi đường kính là trục đối xứng",
        "Đường tròn có đúng hai trục đối xứng",
      ], answer: 2,
      explain: "Đường tròn nhận tâm $O$ làm tâm đối xứng và mọi đường thẳng qua tâm (chứa đường kính) đều là trục đối xứng." },
  ],
});
