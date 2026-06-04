/* Bài 16. Vị trí tương đối của đường thẳng và đường tròn
   Chương V (Toán 9, Kết nối tri thức, Tập 1) */
MATH9.registerLesson({
  id: "bai-16-vi-tri-tuong-doi-duong-thang-duong-tron",
  visual: { type: "circle", config: { kind: "line" } },
  chapter: "Chương V. Đường tròn",
  order: 4,
  title: "Bài 16. Vị trí tương đối của đường thẳng và đường tròn",

  objectives: [
    "Xác định vị trí tương đối của đường thẳng và đường tròn dựa vào khoảng cách $d$ từ tâm tới đường thẳng và bán kính $R$.",
    "Nhận biết tiếp tuyến của đường tròn và tính chất vuông góc với bán kính tại tiếp điểm.",
    "Vận dụng tính chất hai tiếp tuyến cắt nhau để tính độ dài và chứng minh.",
  ],

  intro: {
    text:
      "Mặt Trời mọc dần lên ở đường chân trời: lúc đầu đĩa Mặt Trời <b>cắt</b> đường chân trời ở hai điểm, " +
      "rồi có lúc chỉ <b>chạm</b> vào đường chân trời tại một điểm, sau đó <b>tách hẳn</b> khỏi đường chân " +
      "trời. Đó chính là ba vị trí tương đối của một đường thẳng và một đường tròn. Ta sẽ phân biệt ba " +
      "trường hợp đó bằng cách so sánh khoảng cách $d$ từ tâm $O$ đến đường thẳng với bán kính $R$.",
    math: "d < R,\\quad d = R,\\quad d > R",
  },

  theory: [
    {
      heading: "1. Ba vị trí tương đối của đường thẳng và đường tròn",
      html:
        "Cho đường tròn $(O; R)$ và đường thẳng $a$. Gọi $d$ là <b>khoảng cách từ tâm $O$ đến đường thẳng " +
        "$a$</b>. So sánh $d$ với $R$ ta có ba trường hợp:<br>" +
        "<b>•</b> Nếu $d < R$ thì $a$ <b>cắt</b> đường tròn tại <b>hai điểm</b> phân biệt (đường thẳng là " +
        "<b>cát tuyến</b>).<br>" +
        "<b>•</b> Nếu $d = R$ thì $a$ và đường tròn có <b>đúng một điểm chung</b> — ta nói $a$ <b>tiếp xúc</b> " +
        "với đường tròn.<br>" +
        "<b>•</b> Nếu $d > R$ thì $a$ và đường tròn <b>không có điểm chung</b> (không giao nhau).",
      formula: "d < R \\ \\text{(2 chung)}; \\quad d = R \\ \\text{(1 chung)}; \\quad d > R \\ \\text{(0 chung)}",
    },
    {
      heading: "2. Tiếp tuyến của đường tròn",
      html:
        "Khi $d = R$, đường thẳng $a$ được gọi là <b>tiếp tuyến</b> của đường tròn, điểm chung duy nhất gọi " +
        "là <b>tiếp điểm</b>.<br><b>Tính chất:</b> Tiếp tuyến của đường tròn thì <b>vuông góc</b> với bán " +
        "kính đi qua tiếp điểm. Ngược lại, một đường thẳng đi qua một điểm của đường tròn và vuông góc với " +
        "bán kính tại điểm đó thì là tiếp tuyến.",
      formula: "OH \\perp a \\ (H \\ \\text{is the tangent point}),\\quad OH = R",
    },
    {
      heading: "3. Tính chất hai tiếp tuyến cắt nhau",
      html:
        "Nếu hai tiếp tuyến của đường tròn $(O)$ cắt nhau tại điểm $M$ (với hai tiếp điểm là $A$ và $B$) thì:" +
        "<br><b>•</b> $MA = MB$ (hai đoạn tiếp tuyến bằng nhau).<br>" +
        "<b>•</b> Tia $MO$ là tia <b>phân giác</b> của góc $\\widehat{AMB}$.<br>" +
        "<b>•</b> Tia $OM$ là tia phân giác của góc $\\widehat{AOB}$.",
      formula: "MA = MB",
    },
  ],

  examples: [
    {
      title: "Xác định vị trí khi biết $d$ và $R$",
      prompt: "Cho đường tròn $(O; 5\\text{ cm})$ và đường thẳng $a$ cách $O$ một khoảng $d = 3$ cm. Xác định vị trí của $a$ với đường tròn.",
      steps: [
        "So sánh: $d = 3$ cm và $R = 5$ cm.",
        "Vì $d < R$ $(3 < 5)$ nên đường thẳng $a$ <b>cắt</b> đường tròn.",
        "Vậy $a$ cắt đường tròn tại <b>hai điểm</b> phân biệt.",
      ],
    },
    {
      title: "Nhận biết tiếp tuyến",
      prompt: "Cho $(O; 4\\text{ cm})$. Đường thẳng $a$ cách tâm $O$ một khoảng $d = 4$ cm. Hỏi $a$ có là tiếp tuyến không?",
      steps: [
        "So sánh: $d = 4$ cm và $R = 4$ cm, tức $d = R$.",
        "Khi $d = R$, đường thẳng và đường tròn có đúng một điểm chung.",
        "Vậy $a$ <b>là tiếp tuyến</b> của đường tròn; tại tiếp điểm $H$ ta có $OH \\perp a$ và $OH = 4$ cm.",
      ],
    },
    {
      title: "Tính chất hai tiếp tuyến cắt nhau",
      prompt: "Từ điểm $M$ ngoài đường tròn $(O)$ kẻ hai tiếp tuyến $MA$, $MB$ ($A, B$ là tiếp điểm). Biết $MA = 7$ cm. Tính $MB$.",
      steps: [
        "Hai tiếp tuyến cùng xuất phát từ $M$ cắt nhau tại $M$.",
        "Theo tính chất hai tiếp tuyến cắt nhau: $MA = MB$.",
        "Vậy $MB = MA = 7$ cm.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Kết luận $d < R$ thì đường thẳng và đường tròn không có điểm chung.",
      right: "$d < R$ nghĩa là đường thẳng <b>cắt</b> đường tròn tại <b>hai điểm</b>; còn $d > R$ mới là không có điểm chung.",
      note: "Càng gần tâm (d nhỏ) thì đường thẳng càng dễ cắt đường tròn.",
    },
    {
      wrong: "Cho rằng tiếp tuyến vuông góc với bất kì bán kính nào của đường tròn.",
      right: "Tiếp tuyến chỉ vuông góc với bán kính <b>đi qua tiếp điểm</b>.",
      note: "Tiếp điểm là điểm chung duy nhất giữa tiếp tuyến và đường tròn.",
    },
    {
      wrong: "Khi $d = R$ vẫn nói đường thẳng cắt đường tròn tại hai điểm.",
      right: "$d = R$ thì đường thẳng <b>tiếp xúc</b> với đường tròn, chỉ có <b>một</b> điểm chung.",
      note: "Hãy so sánh chính xác $d$ với $R$ trước khi kết luận.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Cho $(O; 6\\text{ cm})$ và đường thẳng $a$ cách $O$ khoảng $d = 4$ cm. Đường thẳng $a$ có vị trí nào với đường tròn?",
      hints: ["So sánh $d$ với $R$."],
      solution: "Vì $d = 4 < R = 6$ nên $a$ <b>cắt</b> đường tròn tại hai điểm.",
    },
    {
      level: "Nhận biết",
      prompt: "Cho $(O; 5\\text{ cm})$ và đường thẳng $a$ cách $O$ khoảng $d = 5$ cm. Xác định vị trí của $a$.",
      hints: ["Nếu $d = R$ thì đường thẳng và đường tròn có quan hệ gì?"],
      solution: "Vì $d = R = 5$ nên $a$ <b>tiếp xúc</b> với đường tròn (là tiếp tuyến), có đúng một điểm chung.",
    },
    {
      level: "Nhận biết",
      prompt: "Cho $(O; 3\\text{ cm})$ và đường thẳng $a$ cách $O$ khoảng $d = 5$ cm. Đường thẳng và đường tròn có điểm chung không?",
      hints: ["So sánh $d$ với $R$ rồi kết luận về số điểm chung."],
      solution: "Vì $d = 5 > R = 3$ nên $a$ và đường tròn <b>không có điểm chung</b>.",
    },
    {
      level: "Thông hiểu",
      prompt: "Đường thẳng $a$ là tiếp tuyến của $(O; R)$ tại $H$. Biết $OH = 7$ cm. Tính bán kính $R$.",
      hints: ["Tại tiếp điểm, $OH$ chính là khoảng cách từ tâm đến tiếp tuyến.", "Khi tiếp xúc thì $d = R$."],
      solution: "Vì $a$ là tiếp tuyến tại $H$ nên $OH \\perp a$ và $OH = d = R$. Vậy $R = 7$ cm.",
    },
    {
      level: "Thông hiểu",
      prompt: "Cho $(O; 5\\text{ cm})$. Một đường thẳng $a$ cách $O$ khoảng $d$. Với giá trị nào của $d$ thì $a$ cắt đường tròn?",
      hints: ["Điều kiện để đường thẳng cắt đường tròn là gì?"],
      solution: "Đường thẳng cắt đường tròn khi $d < R$, tức là $0 \\le d < 5$ (cm).",
    },
    {
      level: "Thông hiểu",
      prompt: "Từ điểm $M$ ngoài $(O)$ kẻ hai tiếp tuyến $MA$, $MB$ ($A, B$ là tiếp điểm). Biết $\\widehat{AMB} = 60^\\circ$. Tính số đo góc $\\widehat{AMO}$.",
      hints: ["Tia $MO$ là phân giác của góc $\\widehat{AMB}$."],
      solution: "Vì $MO$ là tia phân giác của $\\widehat{AMB}$ nên $\\widehat{AMO} = \\dfrac{60^\\circ}{2} = 30^\\circ$.",
    },
    {
      level: "Vận dụng",
      prompt: "Cho $(O; 6\\text{ cm})$. Điểm $M$ cách tâm $O$ một khoảng $OM = 10$ cm. Kẻ tiếp tuyến $MA$ tới đường tròn ($A$ là tiếp điểm). Tính độ dài $MA$.",
      hints: ["Tại tiếp điểm $A$ ta có $OA \\perp MA$, nên tam giác $OMA$ vuông tại $A$.", "Áp dụng định lý Pythagore."],
      solution:
        "Vì $MA$ là tiếp tuyến tại $A$ nên $OA \\perp MA$, suy ra $\\triangle OMA$ vuông tại $A$ với $OA = R = 6$, $OM = 10$. " +
        "Theo định lý Pythagore: $MA = \\sqrt{OM^2 - OA^2} = \\sqrt{10^2 - 6^2} = \\sqrt{64} = 8$ cm.",
    },
    {
      level: "Vận dụng",
      prompt: "Từ điểm $M$ ngoài $(O; 3\\text{ cm})$ kẻ hai tiếp tuyến $MA$, $MB$ ($A, B$ là tiếp điểm). Biết $OM = 5$ cm. Tính chu vi tam giác $MAB$ (cho biết $AB = 4{,}8$ cm).",
      hints: ["Dùng Pythagore trong $\\triangle OMA$ để tính $MA$.", "Hai tiếp tuyến cắt nhau cho $MA = MB$."],
      solution:
        "Vì $OA \\perp MA$ nên $\\triangle OMA$ vuông tại $A$: $MA = \\sqrt{OM^2 - OA^2} = \\sqrt{5^2 - 3^2} = \\sqrt{16} = 4$ cm. " +
        "Theo tính chất hai tiếp tuyến cắt nhau, $MB = MA = 4$ cm. " +
        "Vậy chu vi $\\triangle MAB = MA + MB + AB = 4 + 4 + 4{,}8 = 12{,}8$ cm.",
    },
  ],

  quiz: [
    { type: "mc", q: "Cho $(O; R)$ và đường thẳng $a$ cách tâm khoảng $d$. Đường thẳng $a$ tiếp xúc với đường tròn khi nào?",
      choices: ["$d < R$", "$d = R$", "$d > R$", "$d = 0$"], answer: 1,
      explain: "Khi $d = R$ đường thẳng và đường tròn có đúng một điểm chung nên $a$ tiếp xúc với đường tròn." },
    { type: "fill", q: "Cho $(O; 9\\text{ cm})$. Điểm $M$ cách $O$ khoảng $OM = 15$ cm. Kẻ tiếp tuyến $MA$ ($A$ là tiếp điểm). Độ dài $MA$ bằng bao nhiêu cm?",
      answer: 12, explain: "$\\triangle OMA$ vuông tại $A$: $MA = \\sqrt{15^2 - 9^2} = \\sqrt{144} = 12$ cm." },
    { type: "mc", q: "Cho $(O; 5\\text{ cm})$ và đường thẳng $a$ cách $O$ khoảng $d = 7$ cm. Số điểm chung của $a$ và đường tròn là:",
      choices: ["$0$", "$1$", "$2$", "Vô số"], answer: 0,
      explain: "Vì $d = 7 > R = 5$ nên đường thẳng và đường tròn không có điểm chung, tức là $0$ điểm chung." },
  ],
});
