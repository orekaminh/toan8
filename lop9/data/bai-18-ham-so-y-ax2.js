/* Bài 18. Hàm số y = ax² (a ≠ 0)
   Chương VI (Toán 9, Kết nối tri thức, Tập 2) */
MATH9.registerLesson({
  id: "bai-18-ham-so-y-ax2",
  visual: { type: "parabola", config: { a: 1 } },
  chapter: "Chương VI. Hàm số y = ax² (a ≠ 0). Phương trình bậc hai một ẩn",
  order: 1,
  title: "Bài 18. Hàm số y = ax² (a ≠ 0)",

  objectives: [
    "Nhận biết hàm số $y = ax^2\\ (a \\ne 0)$ và lập được bảng giá trị của nó.",
    "Nhận biết đồ thị của hàm số là một parabol đỉnh $O(0; 0)$, nhận trục $Oy$ làm trục đối xứng.",
    "Xác định tính đồng biến, nghịch biến và kiểm tra một điểm có thuộc đồ thị hay không.",
  ],

  intro: {
    text:
      "Khi một vật rơi tự do, quãng đường rơi $s$ (mét) sau thời gian $t$ (giây) được tính bởi " +
      "$s = 5t^2$ — đại lượng $s$ tỉ lệ với <b>bình phương</b> của $t$. Đây là một ví dụ của " +
      "<b>hàm số</b> $y = ax^2$, một hàm số rất quan trọng vì đồ thị của nó — đường <b>parabol</b> — " +
      "xuất hiện ở khắp nơi: vòi phun nước, cầu treo, quỹ đạo của vật ném đi...",
    math: "y = ax^2 \\ (a \\ne 0)",
  },

  theory: [
    {
      heading: "1. Hàm số y = ax² (a ≠ 0)",
      html:
        "Hàm số $y = ax^2$ (với $a$ là số khác $0$ cho trước) xác định với <b>mọi</b> giá trị của $x$.<br>" +
        "Để khảo sát hàm số này, ta thường <b>lập bảng giá trị</b>: chọn vài giá trị của $x$ rồi tính " +
        "$y = ax^2$ tương ứng. Lưu ý hai giá trị $x$ <b>đối nhau</b> thì cho cùng một giá trị $y$, vì " +
        "$a(-x)^2 = ax^2$.",
      formula: "y = ax^2 \\quad (a \\ne 0)",
    },
    {
      heading: "2. Đồ thị của hàm số y = ax²",
      html:
        "Đồ thị của hàm số $y = ax^2\\ (a \\ne 0)$ là một đường cong gọi là <b>parabol</b>, có " +
        "<b>đỉnh</b> là gốc toạ độ $O(0; 0)$ và nhận trục tung $Oy$ làm <b>trục đối xứng</b>.<br>" +
        "&bull; Nếu $a > 0$: bề lõm hướng <b>lên trên</b>, đỉnh $O$ là điểm <b>thấp nhất</b> của đồ thị, " +
        "khi đó $y \\ge 0$ với mọi $x$.<br>" +
        "&bull; Nếu $a < 0$: bề lõm hướng <b>xuống dưới</b>, đỉnh $O$ là điểm <b>cao nhất</b> của đồ thị, " +
        "khi đó $y \\le 0$ với mọi $x$.",
      formula: "a(-x)^2 = ax^2",
    },
    {
      heading: "3. Tính đồng biến, nghịch biến. Điểm thuộc đồ thị",
      html:
        "Với $a > 0$: hàm số <b>nghịch biến</b> khi $x < 0$ và <b>đồng biến</b> khi $x > 0$.<br>" +
        "Với $a < 0$: hàm số <b>đồng biến</b> khi $x < 0$ và <b>nghịch biến</b> khi $x > 0$.<br>" +
        "Điểm $M(x_0; y_0)$ <b>thuộc</b> đồ thị của hàm số $y = ax^2$ khi và chỉ khi toạ độ của nó " +
        "thoả mãn $y_0 = a x_0^2$.",
      formula: "M(x_0; y_0) \\in (P) \\Leftrightarrow y_0 = a x_0^2",
    },
  ],

  examples: [
    {
      title: "Lập bảng giá trị",
      prompt: "Lập bảng giá trị của hàm số $y = 2x^2$ với $x \\in \\{-2; -1; 0; 1; 2\\}$.",
      steps: [
        "Với $x = -2$ và $x = 2$: $y = 2 \\cdot (\\pm 2)^2 = 2 \\cdot 4 = 8$.",
        "Với $x = -1$ và $x = 1$: $y = 2 \\cdot (\\pm 1)^2 = 2 \\cdot 1 = 2$.",
        "Với $x = 0$: $y = 2 \\cdot 0^2 = 0$.",
        "Bảng giá trị: $(-2; 8),\\ (-1; 2),\\ (0; 0),\\ (1; 2),\\ (2; 8)$. Hai giá trị $x$ đối nhau cho cùng một $y$.",
      ],
    },
    {
      title: "Xác định hệ số a khi biết một điểm",
      prompt: "Parabol $(P): y = ax^2$ đi qua điểm $A(2; 12)$. Tìm hệ số $a$.",
      steps: [
        "Vì $A(2; 12)$ thuộc $(P)$ nên toạ độ của $A$ thoả mãn $y = ax^2$.",
        "Thay $x = 2,\\ y = 12$: $12 = a \\cdot 2^2 = 4a$.",
        "Suy ra $a = \\dfrac{12}{4} = 3$.",
        "Vậy $a = 3$ và hàm số là $y = 3x^2$.",
      ],
    },
    {
      title: "Kiểm tra điểm thuộc đồ thị và tính đơn điệu",
      prompt: "Cho hàm số $y = -x^2$. Điểm $B(3; -9)$ có thuộc đồ thị không? Hàm số đồng biến hay nghịch biến khi $x > 0$?",
      steps: [
        "Thay $x = 3$ vào hàm số: $y = -3^2 = -9$, đúng bằng tung độ của $B$.",
        "Vậy điểm $B(3; -9)$ <b>thuộc</b> đồ thị.",
        "Hệ số $a = -1 < 0$, nên khi $x > 0$ hàm số <b>nghịch biến</b>.",
        "(Khi $x < 0$ thì hàm số đồng biến.)",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Tính $y = 2x^2$ tại $x = -2$ thành $y = 2 \\cdot (-2)^2 = -8$.",
      right: "Bình phương trước rồi mới nhân: $(-2)^2 = 4$, nên $y = 2 \\cdot 4 = 8$ (luôn không âm khi $a > 0$).",
      note: "Dấu trừ trong $-2$ bị triệt tiêu khi bình phương.",
    },
    {
      wrong: "Cho rằng với $a > 0$ hàm số luôn đồng biến trên toàn trục số.",
      right: "Với $a > 0$: hàm <b>nghịch biến</b> khi $x < 0$ và <b>đồng biến</b> khi $x > 0$.",
      note: "Đồ thị là parabol, không phải đường thẳng, nên tính đơn điệu đổi chiều qua đỉnh $O$.",
    },
    {
      wrong: "Để kiểm tra $M(x_0; y_0)$ thuộc đồ thị, chỉ thay $x_0$ mà không so sánh với $y_0$.",
      right: "Phải tính $a x_0^2$ rồi so với $y_0$: điểm thuộc đồ thị khi và chỉ khi $y_0 = a x_0^2$.",
      note: "Thiếu bước so sánh thì không kết luận được.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Trong các hàm số sau, hàm nào có dạng $y = ax^2\\ (a \\ne 0)$: $y = 3x^2$; $y = 2x + 1$; $y = -5x^2$; $y = 0x^2$ ?",
      hints: ["Cần đúng dạng $y = ax^2$ với hệ số $a$ khác $0$."],
      solution: "Đó là $y = 3x^2$ và $y = -5x^2$. (Loại $y = 2x + 1$ vì bậc nhất; loại $y = 0x^2$ vì $a = 0$.)",
    },
    {
      level: "Nhận biết",
      prompt: "Cho hàm số $y = 3x^2$. Tính giá trị của $y$ khi $x = -2$.",
      hints: ["Bình phương trước: $(-2)^2 = 4$, rồi nhân với $3$."],
      solution: "$y = 3 \\cdot (-2)^2 = 3 \\cdot 4 = 12$.",
    },
    {
      level: "Nhận biết",
      prompt: "Đồ thị hàm số $y = ax^2\\ (a \\ne 0)$ có đỉnh là điểm nào và nhận đường nào làm trục đối xứng?",
      hints: ["Nhớ đặc điểm của đường parabol."],
      solution: "Đồ thị là parabol có đỉnh $O(0; 0)$ và nhận trục tung $Oy$ làm trục đối xứng.",
    },
    {
      level: "Thông hiểu",
      prompt: "Lập bảng giá trị của hàm số $y = -x^2$ với $x \\in \\{-2; -1; 0; 1; 2\\}$.",
      hints: ["Tính $-x^2$ cho từng giá trị; hai giá trị $x$ đối nhau cho cùng một $y$."],
      solution: "$(-2; -4),\\ (-1; -1),\\ (0; 0),\\ (1; -1),\\ (2; -4)$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Parabol $(P): y = ax^2$ đi qua điểm $A(3; 18)$. Tìm hệ số $a$.",
      hints: ["Thay toạ độ điểm $A$ vào $y = ax^2$ rồi giải tìm $a$."],
      solution: "$18 = a \\cdot 3^2 = 9a \\Rightarrow a = \\dfrac{18}{9} = 2$. Vậy $a = 2$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Cho hàm số $y = \\dfrac{1}{2}x^2$. Điểm $M(4; 8)$ có thuộc đồ thị hàm số không?",
      hints: ["Thay $x = 4$ vào $y = \\dfrac{1}{2}x^2$ rồi so với tung độ $8$."],
      solution: "$\\dfrac{1}{2} \\cdot 4^2 = \\dfrac{1}{2} \\cdot 16 = 8$, đúng bằng tung độ. Vậy $M(4; 8)$ <b>thuộc</b> đồ thị.",
    },
    {
      level: "Vận dụng",
      prompt: "Parabol $(P): y = ax^2$ đi qua điểm $A(-2; -8)$. Tìm $a$, sau đó cho biết đồ thị có bề lõm hướng lên hay xuống.",
      hints: ["Thay toạ độ $A$ để tìm $a$.", "Xét dấu của $a$ để kết luận hướng bề lõm."],
      solution: "$-8 = a \\cdot (-2)^2 = 4a \\Rightarrow a = -2$. Vì $a = -2 < 0$ nên bề lõm hướng <b>xuống dưới</b>.",
    },
    {
      level: "Vận dụng",
      prompt: "Một vật rơi tự do có quãng đường $s = 5t^2$ (m), với $t$ là thời gian (giây). Tính quãng đường rơi sau $2$ giây và sau $3$ giây.",
      hints: ["Thay lần lượt $t = 2$ và $t = 3$ vào công thức $s = 5t^2$."],
      solution: "Sau $2$ giây: $s = 5 \\cdot 2^2 = 20$ m. Sau $3$ giây: $s = 5 \\cdot 3^2 = 45$ m.",
    },
  ],

  quiz: [
    { type: "mc", q: "Đồ thị của hàm số $y = ax^2\\ (a \\ne 0)$ là đường gì?",
      choices: ["Đường thẳng", "Đường parabol", "Đường tròn", "Đường gấp khúc"], answer: 1,
      explain: "Đồ thị của $y = ax^2$ là một parabol đỉnh $O(0; 0)$, nhận $Oy$ làm trục đối xứng." },
    { type: "fill", q: "Cho hàm số $y = 3x^2$. Giá trị của $y$ khi $x = 2$ là bao nhiêu?", answer: 12,
      explain: "$y = 3 \\cdot 2^2 = 3 \\cdot 4 = 12$." },
    { type: "mc", q: "Với hàm số $y = ax^2$ mà $a < 0$, điều nào sau đây đúng?",
      choices: [
        "Bề lõm hướng lên, $O$ là điểm thấp nhất",
        "Bề lõm hướng xuống, $O$ là điểm cao nhất",
        "Đồ thị là đường thẳng",
        "Hàm số luôn đồng biến",
      ], answer: 1,
      explain: "Khi $a < 0$, parabol có bề lõm hướng xuống và đỉnh $O$ là điểm cao nhất của đồ thị." },
  ],
});
