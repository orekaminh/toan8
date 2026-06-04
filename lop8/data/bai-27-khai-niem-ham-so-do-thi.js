/* Bài 27. Khái niệm hàm số và đồ thị của hàm số — Chương VII (KNTT, Tập 2) */
MATH8.registerLesson({
  id: "bai-27-khai-niem-ham-so-do-thi",
  chapter: "Chương VII. Phương trình bậc nhất và hàm số bậc nhất",
  order: 3,
  title: "Bài 27. Khái niệm hàm số và đồ thị của hàm số",

  objectives: [
    "Nhận biết khái niệm hàm số; biến số và giá trị của hàm số; kí hiệu $y = f(x)$.",
    "Xác định toạ độ một điểm trên mặt phẳng toạ độ.",
    "Hiểu đồ thị của hàm số là tập hợp tất cả các điểm $(x; f(x))$.",
  ],

  intro: {
    text:
      "Một hãng taxi tính cước: mở cửa $12$ nghìn đồng, mỗi km thêm $15$ nghìn đồng. Quãng đường $x$ (km) " +
      "nào cũng cho <b>đúng một</b> số tiền $y$. Khi đó $y$ là <b>hàm số</b> của $x$. Mỗi cặp $(x; y)$ là " +
      "một điểm trên mặt phẳng toạ độ — gom tất cả các điểm ấy lại ta được <b>đồ thị</b>.",
    math: "y = f(x) = 15x + 12",
  },

  theory: [
    {
      heading: "1. Khái niệm hàm số",
      html:
        "Nếu đại lượng $y$ phụ thuộc đại lượng $x$ sao cho mỗi giá trị của $x$ xác định <b>đúng một</b> " +
        "giá trị của $y$, thì $y$ gọi là <b>hàm số</b> của $x$, viết $y = f(x)$. Ở đây $x$ là <b>biến số</b>.<br>" +
        "$f(a)$ là <b>giá trị</b> của hàm số tại $x = a$.",
    },
    {
      heading: "2. Mặt phẳng toạ độ",
      html:
        "Hai trục số vuông góc $Ox$ (nằm ngang) và $Oy$ (thẳng đứng) cắt nhau tại gốc $O$ tạo thành mặt " +
        "phẳng toạ độ. Mỗi điểm $M$ ứng với một cặp $(x_0; y_0)$ — gọi là <b>toạ độ</b> của $M$.",
    },
    {
      heading: "3. Đồ thị của hàm số",
      html:
        "Đồ thị của hàm số $y = f(x)$ là <b>tập hợp tất cả các điểm</b> có toạ độ $(x; f(x))$ trên mặt " +
        "phẳng toạ độ.<br>Một điểm $M(x_0; y_0)$ thuộc đồ thị khi và chỉ khi $y_0 = f(x_0)$.",
    },
  ],

  visual: {
    type: "graph",
    config: { a: 1, b: 1, hint: "Mỗi điểm trên đường thẳng có dạng $(x;\\ y)$ với $y = ax + b$. Tập hợp <b>tất cả</b> những điểm như vậy chính là <b>đồ thị</b> của hàm số. Trượt thanh để xem đồ thị thay đổi." },
  },

  examples: [
    {
      title: "Tính giá trị hàm số",
      prompt: "Cho hàm số $y = f(x) = 2x + 1$. Tính $f(0)$, $f(1)$, $f(-2)$.",
      steps: [
        "$f(0) = 2 \\cdot 0 + 1 = 1$.",
        "$f(1) = 2 \\cdot 1 + 1 = 3$.",
        "$f(-2) = 2 \\cdot (-2) + 1 = -3$.",
      ],
    },
    {
      title: "Điểm có thuộc đồ thị không?",
      prompt: "Với $y = 2x + 1$, hỏi điểm $A(1; 3)$ và $B(2; 4)$ có thuộc đồ thị không?",
      steps: [
        "Điểm $(x; y)$ thuộc đồ thị khi $y = 2x + 1$.",
        "$A(1;3)$: $2 \\cdot 1 + 1 = 3 = y$ → $A$ <b>thuộc</b> đồ thị.",
        "$B(2;4)$: $2 \\cdot 2 + 1 = 5 \\ne 4$ → $B$ <b>không</b> thuộc đồ thị.",
      ],
    },
    {
      title: "Lập bảng giá trị",
      prompt: "Lập bảng giá trị của $y = 2x + 1$ tại $x = -1, 0, 1, 2$.",
      steps: [
        "$x=-1 \\Rightarrow y = -1$;  $x=0 \\Rightarrow y = 1$.",
        "$x=1 \\Rightarrow y = 3$;  $x=2 \\Rightarrow y = 5$.",
        "Các điểm $(-1;-1), (0;1), (1;3), (2;5)$ đều nằm trên đồ thị.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Cho rằng một giá trị $x$ có thể ứng với nhiều giá trị $y$ mà vẫn là hàm số.",
      right: "Hàm số đòi hỏi mỗi $x$ cho <b>đúng một</b> $y$.",
      note: "Một x → một y (không được nhiều y).",
    },
    {
      wrong: "Tính $f(-2)$ của $y=2x+1$ ra $-2 \\cdot 2 + 1$ (đặt sai chỗ).",
      right: "Thay $x = -2$: $f(-2) = 2 \\cdot (-2) + 1 = -3$.",
      note: "Thay đúng giá trị của $x$ vào công thức.",
    },
  ],

  exercises: [
    { level: "Nhận biết", prompt: "Cho $f(x) = 3x - 2$. Tính $f(2)$.",
      hints: ["Thay $x = 2$."],
      solution: "$f(2) = 3 \\cdot 2 - 2 = 4$." },
    { level: "Nhận biết", prompt: "Cho $f(x) = -x + 5$. Tính $f(0)$ và $f(5)$.",
      hints: ["Thay lần lượt $x=0$ và $x=5$."],
      solution: "$f(0) = 5$; $f(5) = -5 + 5 = 0$." },
    { level: "Nhận biết", prompt: "Điểm $A(2; 7)$ có thuộc đồ thị $y = 3x + 1$ không?",
      hints: ["Kiểm tra $y = 3x + 1$ tại $x = 2$."],
      solution: "$3 \\cdot 2 + 1 = 7 = y$, nên $A$ thuộc đồ thị." },
    { level: "Thông hiểu", prompt: "Cho $f(x) = 2x - 3$. Tìm $x$ để $f(x) = 7$.",
      hints: ["Giải phương trình $2x - 3 = 7$."],
      solution: "$2x - 3 = 7 \\Rightarrow 2x = 10 \\Rightarrow x = 5$." },
    { level: "Thông hiểu", prompt: "Điểm $B(-1; 4)$ có thuộc đồ thị $y = -2x + 1$ không?",
      hints: ["Tính $-2 \\cdot (-1) + 1$ rồi so với $4$."],
      solution: "$-2 \\cdot (-1) + 1 = 3 \\ne 4$, nên $B$ KHÔNG thuộc đồ thị." },
    { level: "Thông hiểu", prompt: "Lập bảng giá trị của $y = -x + 2$ tại $x = -1, 0, 1, 2$.",
      hints: ["Thay từng giá trị $x$."],
      solution: "$x=-1 \\Rightarrow y=3$; $x=0 \\Rightarrow y=2$; $x=1 \\Rightarrow y=1$; $x=2 \\Rightarrow y=0$." },
    { level: "Vận dụng", prompt:
        "Hãng taxi tính cước $y = 15x + 12$ (nghìn đồng) cho quãng đường $x$ (km). Tính số tiền khi đi $4$ km; " +
        "và hỏi đi bao nhiêu km thì hết $72$ nghìn đồng.",
      hints: ["Số tiền khi $x=4$: thay vào.", "Hết $72$ nghìn: giải $15x + 12 = 72$."],
      solution: "Khi $x=4$: $y = 15 \\cdot 4 + 12 = 72$ (nghìn). Giải $15x + 12 = 72 \\Rightarrow 15x = 60 \\Rightarrow x = 4$ km." },
    { level: "Vận dụng", prompt: "Cho $f(x) = ax + 3$ và biết $f(2) = 11$. Tìm $a$.",
      hints: ["$f(2) = a \\cdot 2 + 3 = 11$."],
      solution: "$2a + 3 = 11 \\Rightarrow 2a = 8 \\Rightarrow a = 4$." },
  ],

  quiz: [
    { type: "fill", q: "Cho $f(x) = 2x + 1$. Tính $f(3)$.", answer: 7, explain: "$2 \\cdot 3 + 1 = 7$." },
    { type: "mc", q: "Điểm $A(1; 3)$ có thuộc đồ thị $y = 2x + 1$ không?", choices: ["Có", "Không"], answer: 0, explain: "$2 \\cdot 1 + 1 = 3 = y$ nên thuộc đồ thị." },
    { type: "fill", q: "Cho $f(x) = 3x - 2$. Tìm $x$ để $f(x) = 7$.", answer: 3, explain: "$3x - 2 = 7 \\Rightarrow x = 3$." },
  ],
});
