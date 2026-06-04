/* Bài 11. Tỉ số lượng giác của góc nhọn
   Chương IV (Toán 9, Kết nối tri thức, Tập 1) */
MATH9.registerLesson({
  id: "bai-11-ti-so-luong-giac-goc-nhon",
  visual: { type: "trig", config: {} },
  chapter: "Chương IV. Hệ thức lượng trong tam giác vuông",
  order: 1,
  title: "Bài 11. Tỉ số lượng giác của góc nhọn",

  objectives: [
    "Hiểu và viết được các tỉ số lượng giác sin, cos, tan, cot của một góc nhọn trong tam giác vuông.",
    "Nắm được giá trị lượng giác của các góc đặc biệt $30^\\circ, 45^\\circ, 60^\\circ$ và quan hệ giữa hai góc phụ nhau.",
    "Vận dụng các hệ thức $\\sin^2\\alpha + \\cos^2\\alpha = 1$ và $\\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha}$ để tính tỉ số lượng giác.",
  ],

  intro: {
    text:
      "Khi đứng dưới chân một cây cột và biết góc nhìn lên đỉnh cột cùng khoảng cách tới chân cột, ta có " +
      "thể tính được chiều cao cây cột mà không cần leo lên đo. Chìa khoá là các <b>tỉ số lượng giác của " +
      "góc nhọn</b>: với mỗi góc nhọn $\\alpha$ trong tam giác vuông, tỉ số giữa các cạnh là một con số " +
      "<b>không đổi</b>, đặc trưng cho góc đó. Bốn tỉ số quen thuộc là $\\sin\\alpha, \\cos\\alpha, " +
      "\\tan\\alpha, \\cot\\alpha$.",
    math: "\\sin\\alpha = \\dfrac{\\text{doi}}{\\text{huyen}}",
  },

  theory: [
    {
      heading: "1. Định nghĩa tỉ số lượng giác",
      html:
        "Xét tam giác vuông có một góc nhọn $\\alpha$. Gọi <b>cạnh đối</b> là cạnh đối diện với góc " +
        "$\\alpha$, <b>cạnh kề</b> là cạnh góc vuông còn lại, và <b>cạnh huyền</b> là cạnh đối diện góc " +
        "vuông. Khi đó:<br>" +
        "$\\sin\\alpha = \\dfrac{\\text{doi}}{\\text{huyen}}$, &nbsp; " +
        "$\\cos\\alpha = \\dfrac{\\text{ke}}{\\text{huyen}}$, &nbsp; " +
        "$\\tan\\alpha = \\dfrac{\\text{doi}}{\\text{ke}}$, &nbsp; " +
        "$\\cot\\alpha = \\dfrac{\\text{ke}}{\\text{doi}}$.<br>" +
        "Vì $\\alpha$ là góc nhọn nên $0 < \\sin\\alpha < 1$ và $0 < \\cos\\alpha < 1$.",
      formula: "\\sin\\alpha = \\dfrac{\\text{doi}}{\\text{huyen}},\\ \\cos\\alpha = \\dfrac{\\text{ke}}{\\text{huyen}},\\ \\tan\\alpha = \\dfrac{\\text{doi}}{\\text{ke}},\\ \\cot\\alpha = \\dfrac{\\text{ke}}{\\text{doi}}",
    },
    {
      heading: "2. Tỉ số lượng giác của hai góc phụ nhau",
      html:
        "Hai góc <b>phụ nhau</b> là hai góc có tổng bằng $90^\\circ$. Trong tam giác vuông, hai góc nhọn " +
        "luôn phụ nhau. Khi đó cạnh đối của góc này chính là cạnh kề của góc kia, nên:<br>" +
        "$\\sin\\alpha = \\cos(90^\\circ - \\alpha)$, &nbsp; $\\cos\\alpha = \\sin(90^\\circ - \\alpha)$,<br>" +
        "$\\tan\\alpha = \\cot(90^\\circ - \\alpha)$, &nbsp; $\\cot\\alpha = \\tan(90^\\circ - \\alpha)$.",
      formula: "\\sin\\alpha = \\cos(90^\\circ - \\alpha),\\quad \\tan\\alpha = \\cot(90^\\circ - \\alpha)",
    },
    {
      heading: "3. Giá trị đặc biệt và các hệ thức",
      html:
        "Cần nhớ các giá trị đặc biệt:<br>" +
        "$\\sin 30^\\circ = \\dfrac{1}{2}$, $\\cos 30^\\circ = \\dfrac{\\sqrt{3}}{2}$, $\\tan 30^\\circ = \\dfrac{\\sqrt{3}}{3}$;<br>" +
        "$\\sin 45^\\circ = \\cos 45^\\circ = \\dfrac{\\sqrt{2}}{2}$, $\\tan 45^\\circ = 1$;<br>" +
        "$\\sin 60^\\circ = \\dfrac{\\sqrt{3}}{2}$, $\\cos 60^\\circ = \\dfrac{1}{2}$, $\\tan 60^\\circ = \\sqrt{3}$.<br>" +
        "Hai hệ thức quan trọng: $\\sin^2\\alpha + \\cos^2\\alpha = 1$ và $\\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha}$.",
      formula: "\\sin^2\\alpha + \\cos^2\\alpha = 1,\\qquad \\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha}",
    },
  ],

  examples: [
    {
      title: "Tính tỉ số lượng giác trong tam giác 3-4-5",
      prompt:
        "Tam giác $ABC$ vuông tại $A$ có $AB = 3$, $AC = 4$, $BC = 5$. Tính $\\sin B$ và $\\cos B$.",
      steps: [
        "Với góc $B$: cạnh đối là $AC = 4$, cạnh kề là $AB = 3$, cạnh huyền là $BC = 5$.",
        "$\\sin B = \\dfrac{\\text{doi}}{\\text{huyen}} = \\dfrac{AC}{BC} = \\dfrac{4}{5}$.",
        "$\\cos B = \\dfrac{\\text{ke}}{\\text{huyen}} = \\dfrac{AB}{BC} = \\dfrac{3}{5}$.",
        "Vậy $\\sin B = \\dfrac{4}{5}$ và $\\cos B = \\dfrac{3}{5}$.",
      ],
    },
    {
      title: "Dùng hệ thức $\\sin^2\\alpha + \\cos^2\\alpha = 1$",
      prompt: "Cho góc nhọn $\\alpha$ với $\\sin\\alpha = \\dfrac{3}{5}$. Tính $\\cos\\alpha$.",
      steps: [
        "Từ $\\sin^2\\alpha + \\cos^2\\alpha = 1$ suy ra $\\cos^2\\alpha = 1 - \\sin^2\\alpha$.",
        "$\\cos^2\\alpha = 1 - \\left(\\dfrac{3}{5}\\right)^2 = 1 - \\dfrac{9}{25} = \\dfrac{16}{25}$.",
        "Vì $\\alpha$ là góc nhọn nên $\\cos\\alpha > 0$, do đó $\\cos\\alpha = \\sqrt{\\dfrac{16}{25}} = \\dfrac{4}{5}$.",
        "Vậy $\\cos\\alpha = \\dfrac{4}{5}$.",
      ],
    },
    {
      title: "Quan hệ giữa hai góc phụ nhau",
      prompt: "Viết $\\sin 70^\\circ$ và $\\tan 70^\\circ$ theo tỉ số lượng giác của góc $20^\\circ$.",
      steps: [
        "Hai góc $70^\\circ$ và $20^\\circ$ phụ nhau vì $70^\\circ + 20^\\circ = 90^\\circ$.",
        "Áp dụng $\\sin\\alpha = \\cos(90^\\circ - \\alpha)$: $\\sin 70^\\circ = \\cos 20^\\circ$.",
        "Áp dụng $\\tan\\alpha = \\cot(90^\\circ - \\alpha)$: $\\tan 70^\\circ = \\cot 20^\\circ$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Lẫn lộn cạnh đối và cạnh kề, viết $\\sin\\alpha = \\dfrac{\\text{ke}}{\\text{huyen}}$.",
      right: "Phải nhớ $\\sin\\alpha = \\dfrac{\\text{doi}}{\\text{huyen}}$, còn $\\cos\\alpha = \\dfrac{\\text{ke}}{\\text{huyen}}$.",
      note: "Cạnh đối là cạnh <b>đối diện</b> với góc $\\alpha$, không kề với góc đó.",
    },
    {
      wrong: "Cho rằng $\\sin\\alpha = \\cos\\alpha$ với mọi góc nhọn $\\alpha$.",
      right: "Chỉ khi $\\alpha = 45^\\circ$ thì $\\sin\\alpha = \\cos\\alpha = \\dfrac{\\sqrt{2}}{2}$; với góc khác hai giá trị khác nhau.",
      note: "Tổng quát $\\sin\\alpha = \\cos(90^\\circ - \\alpha)$, chỉ bằng nhau khi $\\alpha = 90^\\circ - \\alpha$.",
    },
    {
      wrong: "Khi biết $\\sin\\alpha$, lấy luôn $\\cos\\alpha = 1 - \\sin\\alpha$.",
      right: "Phải dùng $\\cos\\alpha = \\sqrt{1 - \\sin^2\\alpha}$ (với $\\alpha$ nhọn nên lấy dấu dương).",
      note: "Hệ thức đúng là $\\sin^2\\alpha + \\cos^2\\alpha = 1$, không phải $\\sin\\alpha + \\cos\\alpha = 1$.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt:
        "Tam giác $MNP$ vuông tại $M$. Với góc $N$, hãy cho biết cạnh nào là cạnh đối, cạnh nào là cạnh kề.",
      hints: ["Cạnh đối là cạnh đối diện góc $N$; cạnh kề là cạnh góc vuông còn lại."],
      solution:
        "Cạnh đối của góc $N$ là $MP$; cạnh kề của góc $N$ là $MN$; cạnh huyền là $NP$.",
    },
    {
      level: "Nhận biết",
      prompt: "Cho biết giá trị của $\\sin 30^\\circ$ và $\\cos 60^\\circ$.",
      hints: ["Đây là các giá trị đặc biệt cần thuộc lòng."],
      solution: "$\\sin 30^\\circ = \\dfrac{1}{2}$ và $\\cos 60^\\circ = \\dfrac{1}{2}$.",
    },
    {
      level: "Nhận biết",
      prompt: "Viết $\\cos 40^\\circ$ theo tỉ số lượng giác sin của một góc.",
      hints: ["Dùng $\\cos\\alpha = \\sin(90^\\circ - \\alpha)$."],
      solution: "$\\cos 40^\\circ = \\sin(90^\\circ - 40^\\circ) = \\sin 50^\\circ$.",
    },
    {
      level: "Thông hiểu",
      prompt:
        "Tam giác $ABC$ vuông tại $A$ có $AB = 6$, $AC = 8$, $BC = 10$. Tính $\\tan B$ và $\\tan C$.",
      hints: ["Với góc $B$: đối là $AC$, kề là $AB$.", "Với góc $C$: đối là $AB$, kề là $AC$."],
      solution:
        "$\\tan B = \\dfrac{AC}{AB} = \\dfrac{8}{6} = \\dfrac{4}{3}$; $\\tan C = \\dfrac{AB}{AC} = \\dfrac{6}{8} = \\dfrac{3}{4}$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Cho góc nhọn $\\alpha$ với $\\cos\\alpha = \\dfrac{12}{13}$. Tính $\\sin\\alpha$.",
      hints: ["Dùng $\\sin^2\\alpha = 1 - \\cos^2\\alpha$.", "Vì $\\alpha$ nhọn nên lấy giá trị dương."],
      solution:
        "$\\sin^2\\alpha = 1 - \\left(\\dfrac{12}{13}\\right)^2 = 1 - \\dfrac{144}{169} = \\dfrac{25}{169}$, nên $\\sin\\alpha = \\dfrac{5}{13}$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Cho góc nhọn $\\alpha$ với $\\sin\\alpha = \\dfrac{4}{5}$ và $\\cos\\alpha = \\dfrac{3}{5}$. Tính $\\tan\\alpha$.",
      hints: ["Dùng $\\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha}$."],
      solution:
        "$\\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha} = \\dfrac{4/5}{3/5} = \\dfrac{4}{5} \\cdot \\dfrac{5}{3} = \\dfrac{4}{3}$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Cho góc nhọn $\\alpha$ với $\\tan\\alpha = \\dfrac{3}{4}$. Tính $\\sin\\alpha$ và $\\cos\\alpha$.",
      hints: [
        "Dựng tam giác vuông có cạnh đối $= 3$, cạnh kề $= 4$ để $\\tan\\alpha = \\dfrac{3}{4}$.",
        "Tính cạnh huyền bằng định lý Pythagore rồi suy ra sin, cos.",
      ],
      solution:
        "Lấy cạnh đối $= 3$, cạnh kề $= 4$ thì cạnh huyền $= \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$. " +
        "Do đó $\\sin\\alpha = \\dfrac{3}{5}$ và $\\cos\\alpha = \\dfrac{4}{5}$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Một cái thang dài $5$ m dựa vào tường, tạo với mặt đất một góc $60^\\circ$. Hỏi chân thang cách " +
        "tường bao nhiêu mét?",
      hints: [
        "Khoảng cách từ chân thang tới tường là cạnh kề với góc $60^\\circ$, thang là cạnh huyền.",
        "Dùng $\\cos 60^\\circ = \\dfrac{\\text{ke}}{\\text{huyen}}$.",
      ],
      solution:
        "Gọi khoảng cách cần tìm là $d$. Ta có $\\cos 60^\\circ = \\dfrac{d}{5}$, mà $\\cos 60^\\circ = \\dfrac{1}{2}$, " +
        "nên $d = 5 \\cdot \\dfrac{1}{2} = 2{,}5$ m. Vậy chân thang cách tường $2{,}5$ m.",
    },
  ],

  quiz: [
    { type: "mc", q: "Trong tam giác vuông với góc nhọn $\\alpha$, công thức nào đúng?",
      choices: [
        "$\\sin\\alpha = \\dfrac{\\text{ke}}{\\text{huyen}}$",
        "$\\sin\\alpha = \\dfrac{\\text{doi}}{\\text{huyen}}$",
        "$\\sin\\alpha = \\dfrac{\\text{doi}}{\\text{ke}}$",
        "$\\sin\\alpha = \\dfrac{\\text{huyen}}{\\text{doi}}$",
      ], answer: 1,
      explain: "Theo định nghĩa, $\\sin\\alpha = \\dfrac{\\text{doi}}{\\text{huyen}}$ (cạnh đối chia cạnh huyền)." },
    { type: "mc", q: "Giá trị nào sau đây bằng $\\cos 30^\\circ$?",
      choices: ["$\\dfrac{1}{2}$", "$\\dfrac{\\sqrt{2}}{2}$", "$\\dfrac{\\sqrt{3}}{2}$", "$1$"], answer: 2,
      explain: "$\\cos 30^\\circ = \\dfrac{\\sqrt{3}}{2}$." },
    { type: "fill", q: "Cho góc nhọn $\\alpha$ với $\\sin\\alpha = 0{,}6$. Khi đó $\\cos\\alpha$ bằng bao nhiêu?",
      answer: 0.8, explain: "$\\cos\\alpha = \\sqrt{1 - 0{,}6^2} = \\sqrt{1 - 0{,}36} = \\sqrt{0{,}64} = 0{,}8$." },
  ],
});
