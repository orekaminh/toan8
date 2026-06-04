/* Bài 12. Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng
   Chương IV (Toán 9, Kết nối tri thức, Tập 1) */
MATH9.registerLesson({
  id: "bai-12-he-thuc-canh-goc-tam-giac-vuong",
  chapter: "Chương IV. Hệ thức lượng trong tam giác vuông",
  order: 2,
  title: "Bài 12. Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng",

  objectives: [
    "Phát biểu và vận dụng được các hệ thức giữa cạnh và góc trong tam giác vuông.",
    "Giải được tam giác vuông khi biết một cạnh và một góc nhọn, hoặc biết hai cạnh.",
    "Vận dụng hệ thức cạnh - góc để tính chiều cao, khoảng cách trong thực tế.",
  ],

  intro: {
    text:
      "Muốn đo chiều cao của một cái cây mà không trèo lên, ta chỉ cần đứng cách gốc một khoảng đã biết " +
      "rồi đo <b>góc ngẩng</b> tới ngọn cây. Khi đó tam giác tạo thành là tam giác vuông và ta dùng " +
      "<b>hệ thức giữa cạnh và góc</b> để tính. Ví dụ cây cao $h$, đứng cách gốc $a$, góc ngẩng $\\alpha$ " +
      "thì $h = a \\cdot \\tan\\alpha$. Bài học này giúp bạn tính cạnh chỉ với một góc và một cạnh đã biết.",
    math: "b = a \\cdot \\sin B = a \\cdot \\cos C",
  },

  theory: [
    {
      heading: "1. Hệ thức giữa cạnh và góc trong tam giác vuông",
      html:
        "Xét $\\triangle ABC$ vuông tại $A$, với $a = BC$ là cạnh huyền, $b = AC$ và $c = AB$ là hai cạnh " +
        "góc vuông. Khi đó:<br>" +
        "• Mỗi <b>cạnh góc vuông</b> bằng cạnh huyền nhân với $\\sin$ của góc đối hoặc $\\cos$ của góc kề:<br>" +
        "&nbsp;&nbsp;$b = a\\sin B = a\\cos C$, &nbsp; $c = a\\sin C = a\\cos B$.<br>" +
        "• Mỗi <b>cạnh góc vuông</b> bằng cạnh góc vuông kia nhân với $\\tan$ của góc đối (hoặc $\\cot$ của góc kề):<br>" +
        "&nbsp;&nbsp;$b = c\\tan B = c\\cot C$, &nbsp; $c = b\\tan C = b\\cot B$.",
      formula: "b = a\\sin B = a\\cos C, \\quad b = c\\tan B = c\\cot C",
    },
    {
      heading: "2. Định lí Pythagore",
      html:
        "Trong tam giác vuông, bình phương cạnh huyền bằng tổng bình phương hai cạnh góc vuông. " +
        "Với $\\triangle ABC$ vuông tại $A$ (huyền $a = BC$, hai cạnh góc vuông $b, c$) ta có $b^2 + c^2 = a^2$. " +
        "Đây là công cụ để tìm cạnh thứ ba khi đã biết hai cạnh.",
      formula: "b^2 + c^2 = a^2",
    },
    {
      heading: "3. Giải tam giác vuông",
      html:
        "<b>Giải tam giác vuông</b> là tìm tất cả các cạnh và góc còn lại khi biết hai yếu tố " +
        "(trong đó có ít nhất một cạnh). Ta dùng các hệ thức cạnh - góc, định lí Pythagore và " +
        "tính chất hai góc nhọn phụ nhau $\\widehat{B} + \\widehat{C} = 90^\\circ$ để lần lượt tìm ra " +
        "các yếu tố chưa biết.",
    },
  ],

  visual: {
    type: "similar",
    config: { kind: "pythagore" },
  },

  examples: [
    {
      title: "Tính cạnh góc vuông bằng sin",
      prompt:
        "Cho $\\triangle ABC$ vuông tại $A$, cạnh huyền $BC = 10$ và $\\widehat{B} = 30^\\circ$. Tính $AC$.",
      steps: [
        "$AC$ là cạnh góc vuông <b>đối</b> với góc $B$, $BC$ là cạnh huyền.",
        "Áp dụng hệ thức: $AC = BC \\cdot \\sin B = 10 \\cdot \\sin 30^\\circ$.",
        "Vì $\\sin 30^\\circ = \\dfrac{1}{2}$ nên $AC = 10 \\cdot \\dfrac{1}{2} = 5$.",
        "Vậy $AC = 5$.",
      ],
    },
    {
      title: "Tính cạnh góc vuông bằng tan",
      prompt:
        "Cho $\\triangle ABC$ vuông tại $A$, cạnh góc vuông $AB = 6$ và $\\widehat{B} = 60^\\circ$. Tính $AC$.",
      steps: [
        "$AC$ và $AB$ là hai cạnh góc vuông; $AC$ <b>đối</b> với góc $B$, còn $AB$ <b>kề</b> với góc $B$.",
        "Áp dụng hệ thức: $AC = AB \\cdot \\tan B = 6 \\cdot \\tan 60^\\circ$.",
        "Vì $\\tan 60^\\circ = \\sqrt{3}$ nên $AC = 6\\sqrt{3}$.",
        "Vậy $AC = 6\\sqrt{3} \\approx 10{,}39$.",
      ],
    },
    {
      title: "Giải tam giác vuông",
      prompt:
        "Cho $\\triangle ABC$ vuông tại $A$, $AB = 3$, $AC = 4$. Tính $BC$ và góc $\\widehat{B}$ (làm tròn đến độ).",
      steps: [
        "Theo định lí Pythagore: $BC^2 = AB^2 + AC^2 = 3^2 + 4^2 = 25 \\Rightarrow BC = 5$.",
        "Xét góc $B$: $\\tan B = \\dfrac{AC}{AB} = \\dfrac{4}{3}$.",
        "Suy ra $\\widehat{B} \\approx 53^\\circ$ (dùng máy tính).",
        "Vậy $BC = 5$ và $\\widehat{B} \\approx 53^\\circ$ (khi đó $\\widehat{C} \\approx 37^\\circ$).",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Dùng $\\sin$ với cạnh <b>kề</b> hoặc $\\cos$ với cạnh <b>đối</b>.",
      right: "Cạnh góc vuông $=$ huyền $\\cdot \\sin$(góc <b>đối</b>) $=$ huyền $\\cdot \\cos$(góc <b>kề</b>).",
      note: "Luôn xác định rõ cạnh đang tính đối hay kề với góc đã cho.",
    },
    {
      wrong: "Tính cạnh góc vuông bằng cách lấy huyền nhân $\\tan$ của góc.",
      right: "$\\tan$ liên hệ <b>hai cạnh góc vuông</b>; còn liên hệ với cạnh huyền là $\\sin, \\cos$.",
      note: "Cạnh góc vuông $=$ cạnh góc vuông kia $\\cdot \\tan$(góc đối).",
    },
    {
      wrong: "Trong định lí Pythagore lấy huyền là cạnh nhỏ rồi viết $a^2 + c^2 = b^2$.",
      right: "Cạnh <b>huyền</b> luôn là cạnh dài nhất, đối diện góc vuông: $b^2 + c^2 = a^2$.",
      note: "Xác định đúng cạnh huyền trước khi áp dụng công thức.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt:
        "Cho $\\triangle ABC$ vuông tại $A$, cạnh huyền $BC = 8$, $\\widehat{B} = 30^\\circ$. Tính $AC$.",
      hints: ["$AC$ đối với góc $B$ nên $AC = BC \\cdot \\sin B$.", "$\\sin 30^\\circ = \\dfrac{1}{2}$."],
      solution: "$AC = BC \\cdot \\sin B = 8 \\cdot \\sin 30^\\circ = 8 \\cdot \\dfrac{1}{2} = 4$.",
    },
    {
      level: "Nhận biết",
      prompt:
        "Cho $\\triangle ABC$ vuông tại $A$, cạnh huyền $BC = 12$, $\\widehat{B} = 60^\\circ$. Tính $AB$.",
      hints: ["$AB$ kề với góc $B$ nên $AB = BC \\cdot \\cos B$.", "$\\cos 60^\\circ = \\dfrac{1}{2}$."],
      solution: "$AB = BC \\cdot \\cos B = 12 \\cdot \\cos 60^\\circ = 12 \\cdot \\dfrac{1}{2} = 6$.",
    },
    {
      level: "Nhận biết",
      prompt:
        "Cho $\\triangle ABC$ vuông tại $A$, hai cạnh góc vuông $AB = 6$, $AC = 8$. Tính cạnh huyền $BC$.",
      hints: ["Dùng định lí Pythagore $BC^2 = AB^2 + AC^2$."],
      solution: "$BC^2 = 6^2 + 8^2 = 36 + 64 = 100 \\Rightarrow BC = 10$.",
    },
    {
      level: "Thông hiểu",
      prompt:
        "Cho $\\triangle ABC$ vuông tại $A$, cạnh góc vuông $AB = 5$, $\\widehat{B} = 45^\\circ$. Tính $AC$.",
      hints: ["$AC$ đối với góc $B$, $AB$ kề với góc $B$ nên $AC = AB \\cdot \\tan B$.", "$\\tan 45^\\circ = 1$."],
      solution: "$AC = AB \\cdot \\tan B = 5 \\cdot \\tan 45^\\circ = 5 \\cdot 1 = 5$.",
    },
    {
      level: "Thông hiểu",
      prompt:
        "Cho $\\triangle ABC$ vuông tại $A$, cạnh góc vuông $AB = 4$, $\\widehat{B} = 60^\\circ$. Tính $AC$ (để dạng căn).",
      hints: ["$AC$ đối với $B$ nên $AC = AB \\cdot \\tan B$.", "$\\tan 60^\\circ = \\sqrt{3}$."],
      solution: "$AC = AB \\cdot \\tan B = 4 \\cdot \\tan 60^\\circ = 4\\sqrt{3}$.",
    },
    {
      level: "Thông hiểu",
      prompt:
        "Cho $\\triangle ABC$ vuông tại $A$, cạnh huyền $BC = 10$, cạnh góc vuông $AB = 6$. Tính $AC$.",
      hints: ["Dùng định lí Pythagore: $AC^2 = BC^2 - AB^2$."],
      solution: "$AC^2 = BC^2 - AB^2 = 10^2 - 6^2 = 100 - 36 = 64 \\Rightarrow AC = 8$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Một chiếc thang dài $5\\,$m dựa vào tường, chân thang cách tường, thang tạo với mặt đất góc " +
        "$60^\\circ$. Hỏi thang chạm tường ở độ cao bao nhiêu mét?",
      hints: [
        "Thang là cạnh huyền, chiều cao chạm tường là cạnh góc vuông đối góc $60^\\circ$.",
        "Chiều cao $= 5 \\cdot \\sin 60^\\circ$.",
      ],
      solution:
        "Chiều cao $= 5 \\cdot \\sin 60^\\circ = 5 \\cdot \\dfrac{\\sqrt{3}}{2} = \\dfrac{5\\sqrt{3}}{2} \\approx 4{,}33$ (m).",
    },
    {
      level: "Vận dụng",
      prompt:
        "Đứng cách gốc một cây $20\\,$m và nhìn lên ngọn cây với góc ngẩng $30^\\circ$ (mắt sát mặt đất). " +
        "Tính chiều cao của cây (để dạng căn).",
      hints: [
        "Khoảng cách $20$ m là cạnh kề, chiều cao cây là cạnh đối góc $30^\\circ$.",
        "Chiều cao $= 20 \\cdot \\tan 30^\\circ$.",
      ],
      solution:
        "Chiều cao $= 20 \\cdot \\tan 30^\\circ = 20 \\cdot \\dfrac{\\sqrt{3}}{3} = \\dfrac{20\\sqrt{3}}{3} \\approx 11{,}55$ (m).",
    },
  ],

  quiz: [
    { type: "mc", q: "Cho $\\triangle ABC$ vuông tại $A$, huyền $BC = a$, góc $B$. Khi đó cạnh $AC$ bằng:",
      choices: ["$a\\sin B$", "$a\\cos B$", "$a\\tan B$", "$\\dfrac{a}{\\sin B}$"], answer: 0,
      explain: "$AC$ đối với góc $B$ nên $AC = BC \\cdot \\sin B = a\\sin B$." },
    { type: "fill", q: "Cho $\\triangle ABC$ vuông tại $A$, $BC = 14$, $\\widehat{B} = 30^\\circ$. Tính $AC$.",
      answer: 7, explain: "$AC = BC \\cdot \\sin 30^\\circ = 14 \\cdot \\dfrac{1}{2} = 7$." },
    { type: "mc", q: "Tam giác vuông có hai cạnh góc vuông $5$ và $12$ thì cạnh huyền bằng:",
      choices: ["$13$", "$17$", "$\\sqrt{17}$", "$7$"], answer: 0,
      explain: "Pythagore: $\\sqrt{5^2 + 12^2} = \\sqrt{169} = 13$." },
  ],
});
