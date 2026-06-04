/* Bài 18. Thu thập và phân loại dữ liệu — Chương V (KNTT, Tập 1) */
MATH8.registerLesson({
  id: "bai-18-thu-thap-phan-loai-du-lieu",
  chapter: "Chương V. Dữ liệu và biểu đồ",
  order: 1,
  title: "Bài 18. Thu thập và phân loại dữ liệu",

  objectives: [
    "Biết các cách thu thập dữ liệu (trực tiếp và gián tiếp).",
    "Phân loại dữ liệu thành định tính và định lượng (rời rạc, liên tục).",
    "Bước đầu đánh giá tính hợp lí, tính đại diện của dữ liệu.",
  ],

  intro: {
    text:
      "Trước khi vẽ biểu đồ hay tính toán, ta phải <b>thu thập</b> rồi <b>phân loại</b> dữ liệu. " +
      "Ví dụ khảo sát môn thể thao yêu thích của lớp, ta được một bảng số liệu như dưới đây.",
  },

  theory: [
    {
      heading: "1. Thu thập dữ liệu",
      html:
        "• <b>Trực tiếp:</b> quan sát, đo đạc, làm thí nghiệm, phỏng vấn, lập phiếu hỏi.<br>" +
        "• <b>Gián tiếp:</b> lấy từ nguồn có sẵn như sách, báo, internet, số liệu của cơ quan thống kê.",
    },
    {
      heading: "2. Phân loại dữ liệu",
      html:
        "• <b>Dữ liệu định tính</b>: không phải số (môn yêu thích, màu sắc, giới tính).<br>" +
        "• <b>Dữ liệu định lượng</b>: là số — gồm <b>rời rạc</b> (đếm được: số anh chị em, số học sinh) " +
        "và <b>liên tục</b> (đo được: chiều cao, cân nặng).",
    },
    {
      heading: "3. Tính hợp lí của dữ liệu",
      html:
        "Dữ liệu cần <b>đại diện</b> (mẫu đủ lớn, chọn ngẫu nhiên) và <b>không mâu thuẫn</b>. " +
        "Hỏi quá ít người hoặc chọn lệch sẽ cho kết luận sai.",
    },
  ],

  visual: {
    type: "chart",
    config: {
      labels: ["Bóng đá", "Cầu lông", "Bơi", "Bóng rổ"],
      values: [12, 8, 6, 4],
      unit: "học sinh",
      views: ["table", "bar"],
      title: "Môn thể thao yêu thích của lớp 8A",
      hint: "Đây là dữ liệu <b>định tính</b> (tên môn) kèm tần số. Bấm để xem ở dạng bảng hoặc biểu đồ cột.",
    },
  },

  examples: [
    {
      title: "Phân loại dữ liệu",
      prompt: "Phân loại các dữ liệu: (a) màu mắt; (b) số con vật nuôi trong nhà; (c) chiều cao học sinh.",
      steps: [
        "(a) Màu mắt: không phải số → <b>định tính</b>.",
        "(b) Số con vật nuôi: đếm được → <b>định lượng rời rạc</b>.",
        "(c) Chiều cao: đo được → <b>định lượng liên tục</b>.",
      ],
    },
    {
      title: "Chọn cách thu thập",
      prompt: "Muốn biết môn thể thao yêu thích của học sinh trong lớp, nên thu thập dữ liệu bằng cách nào?",
      steps: [
        "Đây là thông tin của chính lớp mình → nên thu thập <b>trực tiếp</b>.",
        "Cách hợp lí: phát phiếu hỏi hoặc hỏi từng bạn rồi ghi lại (kiểm phiếu).",
      ],
    },
    {
      title: "Đánh giá tính hợp lí",
      prompt: "Bạn An hỏi $3$ bạn thân rồi kết luận 'cả trường thích bóng đá nhất'. Kết luận đó hợp lí không?",
      steps: [
        "Chỉ hỏi $3$ bạn thân → mẫu quá nhỏ và không đại diện cho cả trường.",
        "Kết luận <b>không hợp lí</b>; cần khảo sát nhiều học sinh ở nhiều lớp.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Cho rằng cứ là con số thì luôn là dữ liệu định lượng — ví dụ 'số áo cầu thủ'.",
      right: "Số áo chỉ để phân biệt, không đo/đếm độ lớn → là dữ liệu <b>định tính</b> (định danh).",
      note: "Xét ý nghĩa của số, không chỉ nhìn 'có phải số hay không'.",
    },
    {
      wrong: "Khảo sát quá ít người rồi kết luận cho cả tập thể lớn.",
      right: "Mẫu phải đủ lớn và đại diện thì kết luận mới đáng tin.",
      note: "Dữ liệu phải có tính đại diện.",
    },
  ],

  exercises: [
    { level: "Nhận biết", prompt: "Dữ liệu 'môn học yêu thích' là định tính hay định lượng?",
      hints: ["Có phải là số không?"],
      solution: "Là dữ liệu định tính (không phải số)." },
    { level: "Nhận biết", prompt: "Dữ liệu 'số học sinh vắng mỗi ngày' thuộc loại nào?",
      hints: ["Đếm được hay đo được?"],
      solution: "Định lượng rời rạc (đếm được)." },
    { level: "Nhận biết", prompt: "Kể hai cách thu thập dữ liệu trực tiếp.",
      hints: ["Tự mình lấy thông tin."],
      solution: "Ví dụ: phỏng vấn/phiếu hỏi và quan sát (đo đạc, làm thí nghiệm)." },
    { level: "Thông hiểu", prompt: "Phân loại: (a) cân nặng các bạn; (b) loại nhạc yêu thích; (c) số sách đã đọc trong tháng.",
      hints: ["Số đo / không phải số / số đếm."],
      solution: "(a) định lượng liên tục; (b) định tính; (c) định lượng rời rạc." },
    { level: "Thông hiểu", prompt: "Để biết thời gian tự học mỗi ngày của học sinh khối 8, nên thu thập trực tiếp hay gián tiếp? Vì sao?",
      hints: ["Thông tin này có sẵn ở đâu không?"],
      solution: "Nên thu thập trực tiếp (phiếu hỏi/phỏng vấn) vì thông tin này không có sẵn ở nguồn nào." },
    { level: "Thông hiểu", prompt: "Theo bảng trong bài (Bóng đá 12, Cầu lông 8, Bơi 6, Bóng rổ 4), môn nào được yêu thích nhất và lớp có bao nhiêu học sinh tham gia khảo sát?",
      hints: ["Tìm số lớn nhất; cộng tất cả."],
      solution: "Bóng đá được yêu thích nhất ($12$). Tổng số học sinh $= 12 + 8 + 6 + 4 = 30$." },
    { level: "Vận dụng", prompt: "Một bạn khảo sát 'chiều cao' nhưng ghi cả giá trị $300$ cm cho một học sinh lớp 8. Hãy nhận xét.",
      hints: ["Giá trị này có hợp lí với học sinh lớp 8 không?"],
      solution: "$300$ cm là phi thực tế với học sinh lớp 8 → đây là dữ liệu không hợp lí (sai sót), cần loại bỏ hoặc kiểm tra lại." },
    { level: "Vận dụng", prompt:
        "Muốn biết tỉ lệ học sinh toàn trường đi học bằng xe đạp, bạn Bình chỉ hỏi các bạn ở câu lạc bộ xe đạp. " +
        "Cách lấy mẫu này có vấn đề gì?",
      hints: ["Nhóm được hỏi có đại diện cho toàn trường không?"],
      solution: "Mẫu bị lệch: các bạn trong câu lạc bộ xe đạp gần như đều đi xe đạp, không đại diện cho toàn trường, nên tỉ lệ thu được sẽ cao hơn thực tế." },
  ],

  quiz: [
    { type: "mc", q: "Dữ liệu “môn thể thao yêu thích” thuộc loại nào?", choices: ["Định tính", "Định lượng rời rạc", "Định lượng liên tục", "Số đo"], answer: 0, explain: "Không phải số → định tính." },
    { type: "mc", q: "Dữ liệu “chiều cao học sinh” thuộc loại nào?", choices: ["Định lượng liên tục", "Định tính", "Định lượng rời rạc", "Định danh"], answer: 0, explain: "Là số đo được → định lượng liên tục." },
    { type: "fill", q: "Khảo sát môn thể thao: Bóng đá 12, Cầu lông 8, Bơi 6, Bóng rổ 4. Tổng số học sinh được hỏi?", answer: 30, explain: "$12 + 8 + 6 + 4 = 30$." },
  ],
});
