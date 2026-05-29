/* Bài 35. Định lí Pythagore và ứng dụng — Chương IX (KNTT, Tập 2) */
MATH8.registerLesson({
  id: "bai-35-dinh-li-pythagore",
  chapter: "Chương IX. Tam giác đồng dạng",
  order: 3,
  title: "Bài 35. Định lí Pythagore và ứng dụng",

  objectives: [
    "Phát biểu và vận dụng định lí Pythagore: bình phương cạnh huyền bằng tổng bình phương hai cạnh góc vuông.",
    "Dùng định lí Pythagore đảo để nhận biết tam giác vuông.",
    "Vận dụng vào tính khoảng cách, độ dài trong thực tế.",
  ],

  intro: {
    text:
      "Trong một tam giác vuông, ba cạnh có một mối liên hệ tuyệt đẹp: <b>bình phương cạnh huyền bằng " +
      "tổng bình phương hai cạnh góc vuông</b>. Trượt $a, b$ ở dưới: diện tích hình vuông vàng (trên cạnh " +
      "huyền) luôn bằng tổng diện tích hai hình vuông kia.",
    math: "a^2 + b^2 = c^2",
  },

  theory: [
    {
      heading: "1. Định lí Pythagore",
      html: "Trong tam giác $ABC$ vuông tại $A$ (cạnh huyền $BC$):",
      formula: "BC^2 = AB^2 + AC^2 \\qquad (\\widehat{A} = 90^\\circ)",
    },
    {
      heading: "2. Định lí Pythagore đảo",
      html: "Nếu một tam giác có bình phương một cạnh bằng tổng bình phương hai cạnh kia thì tam giác đó vuông:",
      formula: "BC^2 = AB^2 + AC^2 \\ \\Rightarrow\\ \\widehat{A} = 90^\\circ",
    },
    {
      heading: "3. Bộ ba Pythagore quen thuộc",
      html: "Một số bộ ba số nguyên thoả mãn định lí (rất hay gặp): $(3;4;5)$, $(6;8;10)$, $(5;12;13)$, $(8;15;17)$.",
    },
  ],

  visual: { type: "similar", config: { kind: "pythagore" } },

  examples: [
    {
      title: "Tính cạnh huyền",
      prompt: "Tam giác vuông có hai cạnh góc vuông $3$ cm và $4$ cm. Tính cạnh huyền.",
      steps: [
        "Cạnh huyền $c$ thoả $c^2 = 3^2 + 4^2 = 9 + 16 = 25$.",
        "$c = \\sqrt{25} = 5$ cm.",
      ],
    },
    {
      title: "Tính cạnh góc vuông",
      prompt: "Tam giác vuông có cạnh huyền $13$ cm, một cạnh góc vuông $5$ cm. Tính cạnh góc vuông còn lại.",
      steps: [
        "Gọi cạnh cần tìm là $b$. Theo Pythagore: $13^2 = 5^2 + b^2$.",
        "$169 = 25 + b^2 \\Rightarrow b^2 = 144$.",
        "$b = \\sqrt{144} = 12$ cm.",
      ],
    },
    {
      title: "Dùng định lí đảo",
      prompt: "Tam giác có ba cạnh $6$, $8$, $10$. Hỏi có phải tam giác vuông không?",
      steps: [
        "Cạnh lớn nhất là $10$; xét $6^2 + 8^2 = 36 + 64 = 100$.",
        "$10^2 = 100$, bằng tổng trên.",
        "Theo định lí đảo, tam giác này vuông (góc vuông đối diện cạnh $10$).",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Tính 'cạnh huyền' $= 3 + 4 = 7$ (cộng thẳng hai cạnh).",
      right: "Phải bình phương: $c^2 = 3^2 + 4^2 = 25 \\Rightarrow c = 5$.",
      note: "Định lí dùng BÌNH PHƯƠNG, không cộng thẳng độ dài.",
    },
    {
      wrong: "Quên lấy căn: kết luận $c = 25$.",
      right: "$c^2 = 25 \\Rightarrow c = \\sqrt{25} = 5$.",
      note: "Tìm cạnh thì nhớ khai căn ở bước cuối.",
    },
    {
      wrong: "Đặt cạnh huyền sai (lấy một cạnh góc vuông làm huyền).",
      right: "Cạnh huyền là cạnh dài nhất, đối diện góc vuông.",
      note: "Xác định đúng cạnh huyền trước khi áp công thức.",
    },
  ],

  exercises: [
    { level: "Nhận biết", prompt: "Tam giác vuông có hai cạnh góc vuông $6$ và $8$. Tính cạnh huyền.",
      hints: ["$c^2 = 6^2 + 8^2$."],
      solution: "$c^2 = 36 + 64 = 100 \\Rightarrow c = \\sqrt{100} = 10$." },
    { level: "Nhận biết", prompt: "Tam giác vuông có cạnh huyền $5$, một cạnh góc vuông $3$. Tính cạnh còn lại.",
      hints: ["$b^2 = 5^2 - 3^2$."],
      solution: "$b^2 = 25 - 9 = 16 \\Rightarrow b = 4$." },
    { level: "Nhận biết", prompt: "Bộ ba $(5; 12; 13)$ có là bộ ba Pythagore không?",
      hints: ["Kiểm tra $5^2 + 12^2$ với $13^2$."],
      solution: "$5^2 + 12^2 = 25 + 144 = 169 = 13^2$. Đúng, là bộ ba Pythagore." },
    { level: "Thông hiểu", prompt: "Tam giác vuông có hai cạnh góc vuông $5$ cm và $12$ cm. Tính cạnh huyền.",
      hints: ["$c^2 = 5^2 + 12^2$."],
      solution: "$c^2 = 25 + 144 = 169 \\Rightarrow c = 13$ cm." },
    { level: "Thông hiểu", prompt: "Tam giác có ba cạnh $7$, $24$, $25$. Tam giác đó có vuông không?",
      hints: ["Xét $7^2 + 24^2$ so với $25^2$."],
      solution: "$7^2 + 24^2 = 49 + 576 = 625 = 25^2$. Theo định lí đảo, tam giác vuông." },
    { level: "Thông hiểu", prompt: "Một hình chữ nhật có chiều dài $8$ cm, chiều rộng $6$ cm. Tính độ dài đường chéo.",
      hints: ["Đường chéo là cạnh huyền của tam giác vuông với hai cạnh $8$ và $6$."],
      solution: "Đường chéo $= \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$ cm." },
    { level: "Vận dụng", prompt:
        "Một chiếc thang dài $5$ m dựa vào tường, chân thang cách chân tường $3$ m. Hỏi đầu thang chạm tường " +
        "ở độ cao bao nhiêu mét?",
      hints: ["Thang là cạnh huyền ($5$), khoảng cách chân là một cạnh góc vuông ($3$).", "Chiều cao $h$ thoả $5^2 = 3^2 + h^2$."],
      solution: "$h^2 = 5^2 - 3^2 = 25 - 9 = 16 \\Rightarrow h = 4$ m." },
    { level: "Vận dụng", prompt:
        "Hai người xuất phát từ cùng một điểm: một người đi về hướng đông $9$ km, người kia đi về hướng bắc " +
        "$12$ km. Tính khoảng cách giữa hai người lúc đó.",
      hints: ["Hai hướng đông và bắc vuông góc → tạo tam giác vuông.", "Khoảng cách $= \\sqrt{9^2 + 12^2}$."],
      solution: "Khoảng cách $= \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$ km." },
  ],

  quiz: [
    { type: "fill", q: "Tam giác vuông có hai cạnh góc vuông $3$ và $4$. Cạnh huyền bằng bao nhiêu?", answer: 5, explain: "$\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$." },
    { type: "fill", q: "Tam giác vuông có cạnh huyền $13$, một cạnh góc vuông $5$. Cạnh góc vuông kia bằng?", answer: 12, explain: "$\\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$." },
    { type: "mc", q: "Tam giác có ba cạnh $6, 8, 10$ là tam giác gì?", choices: ["Vuông", "Đều", "Cân (không vuông)", "Tù"], answer: 0, explain: "$6^2 + 8^2 = 100 = 10^2$ → vuông (định lí đảo)." },
  ],
});
