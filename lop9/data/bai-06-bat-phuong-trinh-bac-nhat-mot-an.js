/* Bài 6. Bất phương trình bậc nhất một ẩn
   Chương II (Toán 9, Kết nối tri thức, Tập 1) */
MATH9.registerLesson({
  id: "bai-06-bat-phuong-trinh-bac-nhat-mot-an",
  chapter: "Chương II. Phương trình và bất phương trình bậc nhất một ẩn",
  order: 3,
  title: "Bài 6. Bất phương trình bậc nhất một ẩn",

  objectives: [
    "Nhận biết bất phương trình bậc nhất một ẩn và nghiệm của nó.",
    "Giải được bất phương trình bậc nhất một ẩn (nhớ đổi chiều khi chia cho số âm).",
    "Biểu diễn được tập nghiệm của bất phương trình trên trục số.",
  ],

  intro: {
    text:
      "Một chiếc thang máy chở được tối đa $400$ kg. Bác bảo vệ nặng $60$ kg muốn chuyển các thùng hàng, " +
      "mỗi thùng nặng $50$ kg. Gọi $x$ là số thùng hàng, ta cần $60 + 50x \\le 400$ — đó là một " +
      "<b>bất phương trình bậc nhất một ẩn</b>. Giải nó sẽ cho biết bác chở được nhiều nhất bao nhiêu thùng " +
      "mỗi lượt.",
    math: "60 + 50x \\le 400",
  },

  theory: [
    {
      heading: "1. Bất phương trình bậc nhất một ẩn",
      html:
        "<b>Bất phương trình bậc nhất một ẩn</b> $x$ là bất phương trình có một trong các dạng " +
        "$ax + b > 0$, $ax + b \\ge 0$, $ax + b < 0$, $ax + b \\le 0$, trong đó $a, b$ là các số đã biết " +
        "và $a \\ne 0$.<br>" +
        "Một số $x_0$ làm cho bất phương trình trở thành khẳng định đúng được gọi là một <b>nghiệm</b>. " +
        "Khác với phương trình, tập nghiệm của bất phương trình thường là <b>một khoảng</b> (vô số giá trị).",
      formula: "ax + b > 0 \\ \\ (a \\ne 0)",
    },
    {
      heading: "2. Cách giải",
      html:
        "<b>Bước 1.</b> Chuyển vế hạng tử tự do $b$ sang vế phải (đổi dấu) để được dạng $ax > c$ " +
        "(hoặc $\\ge, <, \\le$).<br>" +
        "<b>Bước 2.</b> Chia cả hai vế cho hệ số $a$.<br>" +
        "<b>Lưu ý quan trọng:</b> nếu $a < 0$ thì khi chia cho $a$ ta phải <b>đổi chiều</b> bất phương trình.",
      formula: "ax > c \\ \\Rightarrow\\ x > \\dfrac{c}{a} \\ (a > 0); \\quad x < \\dfrac{c}{a} \\ (a < 0)",
    },
    {
      heading: "3. Biểu diễn tập nghiệm trên trục số",
      html:
        "Trên trục số, ta đánh dấu giá trị ngưỡng rồi tô phần thoả mãn.<br>" +
        "• Với dấu $>$ hoặc $<$: dùng <b>dấu tròn rỗng</b> $\\circ$ tại ngưỡng (không lấy điểm đó).<br>" +
        "• Với dấu $\\ge$ hoặc $\\le$: dùng <b>dấu tròn đặc</b> $\\bullet$ tại ngưỡng (lấy luôn điểm đó).<br>" +
        "Chẳng hạn nghiệm $x > 3$ được biểu diễn bằng tia số bên phải điểm $3$, với vòng tròn rỗng tại $3$.",
    },
  ],

  examples: [
    {
      title: "Hệ số dương",
      prompt: "Giải bất phương trình $2x - 6 > 0$ và biểu diễn tập nghiệm trên trục số.",
      steps: [
        "Chuyển vế: $2x - 6 > 0 \\Rightarrow 2x > 6$.",
        "Chia hai vế cho $2$ (số dương, không đổi chiều): $x > 3$.",
        "Tập nghiệm: $\\{x \\mid x > 3\\}$.",
        "Trên trục số: tia bên phải điểm $3$, vòng tròn rỗng tại $3$ (không lấy $x = 3$).",
      ],
    },
    {
      title: "Hệ số âm — đổi chiều",
      prompt: "Giải bất phương trình $-2x + 4 < 0$.",
      steps: [
        "Chuyển vế: $-2x + 4 < 0 \\Rightarrow -2x < -4$.",
        "Chia hai vế cho $-2$ (số âm) nên <b>đổi chiều</b> dấu: $x > 2$.",
        "Tập nghiệm: $\\{x \\mid x > 2\\}$.",
        "Lưu ý: quên đổi chiều sẽ ra $x < 2$ — kết quả sai.",
      ],
    },
    {
      title: "Bất phương trình có dấu bằng",
      prompt: "Giải bất phương trình $3x - 9 \\le 0$ và biểu diễn tập nghiệm.",
      steps: [
        "Chuyển vế: $3x - 9 \\le 0 \\Rightarrow 3x \\le 9$.",
        "Chia hai vế cho $3$ (số dương, không đổi chiều): $x \\le 3$.",
        "Tập nghiệm: $\\{x \\mid x \\le 3\\}$.",
        "Trên trục số: tia bên trái điểm $3$, vòng tròn <b>đặc</b> tại $3$ (có lấy $x = 3$).",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Chia cho số âm mà <b>không đổi chiều</b>: $-2x < -4 \\Rightarrow x < 2$.",
      right: "Chia cho số âm phải <b>đổi chiều</b>: $-2x < -4 \\Rightarrow x > 2$.",
      note: "Đây là lỗi phổ biến nhất — luôn xem dấu của hệ số trước khi chia.",
    },
    {
      wrong: "Chuyển vế hạng tử mà <b>quên đổi dấu</b>: $2x - 6 > 0 \\Rightarrow 2x > -6$.",
      right: "Chuyển vế thì đổi dấu: $2x - 6 > 0 \\Rightarrow 2x > 6$.",
      note: "Quy tắc chuyển vế giống như với phương trình.",
    },
    {
      wrong: "Dùng vòng tròn đặc cho dấu $>$, $<$ (lấy luôn điểm ngưỡng).",
      right: "Dấu $>$, $<$ dùng vòng tròn <b>rỗng</b>; chỉ dấu $\\ge$, $\\le$ mới dùng vòng tròn <b>đặc</b>.",
      note: "Vòng rỗng nghĩa là không lấy giá trị tại ngưỡng đó.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt:
        "Trong các bất phương trình sau, bất phương trình nào là bất phương trình bậc nhất một ẩn: " +
        "$2x - 1 > 0$; $x^2 + 3 \\le 0$; $-5x + 2 \\ge 0$; $0x + 4 < 0$ ?",
      hints: ["Dạng $ax + b$ với $a \\ne 0$ và $x$ có số mũ $1$."],
      solution:
        "Đó là $2x - 1 > 0$ và $-5x + 2 \\ge 0$. (Loại $x^2 + 3 \\le 0$ vì có $x^2$; loại $0x + 4 < 0$ vì $a = 0$.)",
    },
    {
      level: "Nhận biết",
      prompt: "Số $x = 5$ có là nghiệm của bất phương trình $x - 3 > 0$ không?",
      hints: ["Thay $x = 5$ vào vế trái rồi so với $0$."],
      solution: "$5 - 3 = 2 > 0$ đúng, nên $x = 5$ là một nghiệm của bất phương trình.",
    },
    {
      level: "Nhận biết",
      prompt: "Giải bất phương trình $x - 4 > 0$.",
      hints: ["Chuyển hạng tử $-4$ sang vế phải."],
      solution: "$x - 4 > 0 \\Rightarrow x > 4$. Tập nghiệm: $\\{x \\mid x > 4\\}$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Giải bất phương trình $2x - 6 > 0$.",
      hints: ["Chuyển vế rồi chia cho hệ số dương $2$."],
      solution: "$2x - 6 > 0 \\Rightarrow 2x > 6 \\Rightarrow x > 3$. Tập nghiệm: $\\{x \\mid x > 3\\}$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Giải bất phương trình $-2x + 4 < 0$.",
      hints: ["Chuyển vế để được $-2x < -4$.", "Chia cho $-2$ thì phải đổi chiều dấu."],
      solution: "$-2x + 4 < 0 \\Rightarrow -2x < -4 \\Rightarrow x > 2$ (đổi chiều). Tập nghiệm: $\\{x \\mid x > 2\\}$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Giải bất phương trình $3x - 9 \\le 0$ và nêu cách biểu diễn tập nghiệm trên trục số.",
      hints: ["Chuyển vế rồi chia cho $3$ (dương, không đổi chiều)."],
      solution:
        "$3x - 9 \\le 0 \\Rightarrow 3x \\le 9 \\Rightarrow x \\le 3$. Trên trục số: tia bên trái điểm $3$, " +
        "vòng tròn đặc tại $3$.",
    },
    {
      level: "Vận dụng",
      prompt: "Giải bất phương trình $5 - 3x \\ge 2x - 5$.",
      hints: ["Chuyển các hạng tử chứa $x$ về một vế, số về vế kia.", "Chú ý dấu khi chia hệ số."],
      solution:
        "$5 - 3x \\ge 2x - 5 \\Rightarrow 5 + 5 \\ge 2x + 3x \\Rightarrow 10 \\ge 5x \\Rightarrow 2 \\ge x$, " +
        "tức $x \\le 2$. Tập nghiệm: $\\{x \\mid x \\le 2\\}$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Một thang máy chở được tối đa $400$ kg. Bác bảo vệ nặng $60$ kg chở các thùng hàng, mỗi thùng " +
        "nặng $50$ kg. Hỏi mỗi lượt bác chở được nhiều nhất bao nhiêu thùng?",
      hints: ["Gọi $x$ là số thùng, lập bất phương trình $60 + 50x \\le 400$.", "$x$ phải là số nguyên không âm."],
      solution:
        "$60 + 50x \\le 400 \\Rightarrow 50x \\le 340 \\Rightarrow x \\le 6{,}8$. Vì $x$ nguyên không âm nên " +
        "$x$ lớn nhất là $6$. Vậy mỗi lượt bác chở được nhiều nhất $6$ thùng.",
    },
  ],

  quiz: [
    { type: "mc", q: "Bất phương trình nào sau đây là bất phương trình bậc nhất một ẩn?",
      choices: ["$x^2 - 1 > 0$", "$3x + 2 \\le 0$", "$\\dfrac{1}{x} > 0$", "$0x - 5 < 0$"], answer: 1,
      explain: "Dạng $ax + b \\le 0$ với $a = 3 \\ne 0$ và $x$ bậc nhất." },
    { type: "fill", q: "Giải bất phương trình $2x - 8 > 0$. Nghiệm có dạng $x > k$. Giá trị của $k$ là bao nhiêu?",
      answer: 4, explain: "$2x > 8 \\Rightarrow x > 4$, nên $k = 4$." },
    { type: "mc", q: "Giải bất phương trình $-3x + 6 < 0$. Tập nghiệm là gì?",
      choices: ["$x < 2$", "$x > 2$", "$x < -2$", "$x > -2$"], answer: 1,
      explain: "$-3x < -6$, chia cho $-3$ và đổi chiều được $x > 2$." },
  ],
});
