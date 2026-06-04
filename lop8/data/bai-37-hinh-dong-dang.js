/* Bài 37. Hình đồng dạng — Chương IX (KNTT, Tập 2) */
MATH8.registerLesson({
  id: "bai-37-hinh-dong-dang",
  chapter: "Chương IX. Tam giác đồng dạng",
  order: 5,
  title: "Bài 37. Hình đồng dạng",

  objectives: [
    "Nhận biết hai hình đồng dạng (qua phép phóng to / thu nhỏ) và tỉ số đồng dạng.",
    "Hiểu trong hai hình đồng dạng: góc tương ứng bằng nhau, độ dài tương ứng cùng tỉ lệ.",
    "Vận dụng vào bản đồ, mô hình tỉ lệ.",
  ],

  intro: {
    text:
      "Một bức ảnh và bản phóng to của nó, mô hình ô tô và chiếc ô tô thật, bản đồ và vùng đất thật… " +
      "đều là những cặp <b>hình đồng dạng</b>: cùng hình dạng, chỉ khác kích thước theo một tỉ số $k$. " +
      "Trượt $k$ ở dưới để phóng to / thu nhỏ.",
    math: "k = \\dfrac{A'B'}{AB}",
  },

  theory: [
    {
      heading: "1. Hai hình đồng dạng",
      html:
        "Hai hình gọi là <b>đồng dạng</b> nếu hình này là ảnh của hình kia qua một phép <b>phóng to hoặc " +
        "thu nhỏ</b> (có thể kèm di chuyển). Tỉ số phóng to/thu nhỏ gọi là <b>tỉ số đồng dạng</b> $k$.",
    },
    {
      heading: "2. Tính chất",
      html:
        "Trong hai hình đồng dạng: các <b>góc tương ứng bằng nhau</b>; các <b>độ dài tương ứng tỉ lệ</b> " +
        "với cùng một tỉ số $k$. Khi $k = 1$, hai hình <b>bằng nhau</b>.",
    },
    {
      heading: "3. Hình đồng dạng phối cảnh",
      html:
        "Một cách tạo hình đồng dạng: chọn một điểm $O$ (tâm), nối $O$ với các điểm của hình rồi lấy điểm " +
        "tương ứng cách $O$ gấp $k$ lần. Ta được hình đồng dạng <b>phối cảnh</b> (vị tự) tâm $O$, tỉ số $k$.",
    },
  ],

  visual: { type: "similar", config: { kind: "similar-figures" } },

  examples: [
    {
      title: "Bản đồ (thu nhỏ)",
      prompt: "Trên bản đồ tỉ lệ $1 : 100000$, hai địa điểm cách nhau $5$ cm. Tính khoảng cách thật.",
      steps: [
        "Tỉ lệ $1 : 100000$ nghĩa là $1$ cm trên bản đồ ứng với $100000$ cm thật.",
        "Khoảng cách thật $= 5 \\cdot 100000 = 500000$ cm $= 5$ km.",
      ],
    },
    {
      title: "Phóng to (cùng hình dạng)",
      prompt: "Một hình chữ nhật $4 \\times 3$ được phóng to với tỉ số $k = 2$. Hỏi kích thước hình mới và các góc thay đổi thế nào?",
      steps: [
        "Mọi độ dài nhân với $k = 2$: hình mới có kích thước $8 \\times 6$.",
        "Các góc giữ nguyên (vẫn là góc vuông) vì hai hình đồng dạng.",
      ],
    },
    {
      title: "Các hình luôn đồng dạng",
      prompt: "Hai hình vuông bất kì có đồng dạng với nhau không? Hai đường tròn bất kì thì sao?",
      steps: [
        "Mọi hình vuông đều có bốn góc vuông và bốn cạnh bằng nhau, chỉ khác độ dài cạnh → luôn đồng dạng.",
        "Mọi đường tròn cũng luôn đồng dạng (chỉ khác bán kính).",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Cho rằng hai hình đồng dạng thì bằng nhau.",
      right: "Đồng dạng cho phép khác kích thước; chỉ khi $k = 1$ mới bằng nhau.",
      note: "Bằng nhau là trường hợp đặc biệt của đồng dạng ($k = 1$).",
    },
    {
      wrong: "Kéo giãn hình theo MỘT chiều (chỉ tăng chiều dài) và gọi là đồng dạng.",
      right: "Đồng dạng phải nhân MỌI độ dài với cùng tỉ số $k$ (không làm méo hình).",
      note: "Giãn một chiều làm méo → không còn đồng dạng.",
    },
  ],

  exercises: [
    { level: "Nhận biết", prompt: "Tỉ số đồng dạng $k$ được tính như thế nào?",
      hints: ["Là tỉ số giữa độ dài tương ứng của hai hình."],
      solution: "$k$ bằng tỉ số giữa một độ dài trên hình ảnh và độ dài tương ứng trên hình gốc, ví dụ $k = \\dfrac{A'B'}{AB}$." },
    { level: "Nhận biết", prompt: "Hai hình đồng dạng với $k = 1$ thì có quan hệ gì đặc biệt?",
      hints: ["Mọi độ dài giữ nguyên."],
      solution: "Chúng bằng nhau." },
    { level: "Nhận biết", prompt: "Hai đường tròn bất kì có luôn đồng dạng không?",
      hints: ["Chúng chỉ khác nhau yếu tố nào?"],
      solution: "Có, hai đường tròn bất kì luôn đồng dạng (chỉ khác bán kính)." },
    { level: "Thông hiểu", prompt: "Một hình được phóng to với $k = 3$. Một đoạn dài $5$ cm trên hình gốc sẽ dài bao nhiêu trên hình mới?",
      hints: ["Nhân độ dài với $k$."],
      solution: "$5 \\cdot 3 = 15$ cm." },
    { level: "Thông hiểu", prompt: "Trên bản đồ tỉ lệ $1 : 50000$, một con đường dài $4$ cm. Tính chiều dài thật (theo km).",
      hints: ["$1$ cm ứng $50000$ cm; đổi ra km."],
      solution: "Thật $= 4 \\cdot 50000 = 200000$ cm $= 2$ km." },
    { level: "Thông hiểu", prompt: "Mô hình một toà nhà cao $30$ cm được làm theo tỉ số $1 : 200$ so với toà nhà thật. Toà nhà thật cao bao nhiêu mét?",
      hints: ["Chiều cao thật $= 30 \\cdot 200$ cm.", "Đổi ra mét."],
      solution: "Thật $= 30 \\cdot 200 = 6000$ cm $= 60$ m." },
    { level: "Vận dụng", prompt:
        "Một tấm ảnh kích thước $6 \\times 9$ cm được phóng to thành ảnh $10 \\times 15$ cm. Hỏi hai ảnh có " +
        "đồng dạng không?",
      hints: ["So sánh tỉ số hai chiều: $\\dfrac{10}{6}$ và $\\dfrac{15}{9}$."],
      solution: "$\\dfrac{10}{6} = \\dfrac{5}{3}$ và $\\dfrac{15}{9} = \\dfrac{5}{3}$ — bằng nhau, nên hai ảnh đồng dạng (tỉ số $\\dfrac{5}{3}$)." },
    { level: "Vận dụng", prompt:
        "Hai tam giác đều (mọi cạnh bằng nhau, mọi góc $60^\\circ$) bất kì có đồng dạng không? Giải thích.",
      hints: ["Tam giác đều có các góc luôn bằng $60^\\circ$.", "Dùng trường hợp g.g hoặc khái niệm hình đồng dạng."],
      solution:
        "Có. Mọi tam giác đều đều có ba góc $60^\\circ$, nên hai tam giác đều bất kì luôn đồng dạng (g.g); " +
        "chúng chỉ khác nhau về độ dài cạnh." },
  ],

  quiz: [
    { type: "mc", q: "Hai hình đồng dạng với tỉ số $k = 1$ thì:", choices: ["Bằng nhau", "Gấp đôi nhau", "Không liên quan", "Vuông góc"], answer: 0, explain: "$k = 1$ là trường hợp đặc biệt: hai hình bằng nhau." },
    { type: "fill", q: "Bản đồ tỉ lệ $1 : 100000$, hai điểm cách nhau $5$ cm. Khoảng cách thật là bao nhiêu km?", answer: 5, explain: "$5 \\times 100000 = 500000$ cm $= 5$ km." },
    { type: "mc", q: "Hai đường tròn bất kì:", choices: ["Luôn đồng dạng", "Không bao giờ đồng dạng", "Chỉ đồng dạng khi cùng bán kính", "Luôn bằng nhau"], answer: 0, explain: "Mọi đường tròn luôn đồng dạng (chỉ khác bán kính)." },
  ],
});
