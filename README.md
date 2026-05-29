# Tự học Toán 8 — Kết nối tri thức với cuộc sống

Website **tự học** môn Toán lớp 8, bám sát SGK *Kết nối tri thức với cuộc sống*
và tinh thần Chương trình GDPT 2018: **học hiểu → làm được → tự kiểm tra → ôn chỗ yếu**
(không phải web "chép lời giải").

✅ Đã hoàn thành **TOÀN BỘ 10/10 chương — 39 bài, 312 bài tập**:
- **Chương I — Đa thức** (5 bài) — đại số
- **Chương II — Hằng đẳng thức đáng nhớ và ứng dụng** (4 bài) — đại số
- **Chương III — Tứ giác** (5 bài) — hình học
- **Chương IV — Định lí Thalès** (3 bài) — hình học
- **Chương V — Dữ liệu và biểu đồ** (3 bài) — thống kê
- **Chương VI — Phân thức đại số** (4 bài) — đại số
- **Chương VII — Phương trình bậc nhất và hàm số bậc nhất** (5 bài) — đại số
- **Chương VIII — Mở đầu về tính xác suất của biến cố** (3 bài) — xác suất
- **Chương IX — Tam giác đồng dạng** (5 bài, gồm định lí Pythagore) — hình học
- **Chương X — Một số hình khối trong thực tiễn** (2 bài) — hình học không gian
Mỗi bài đều có hình minh hoạ tương tác (mô hình diện tích, đồ thị, cân phương trình, phân thức, tam giác đồng dạng, Pythagore, biểu đồ bảng/cột/tròn, tung xúc xắc/đồng xu ảo, hình chóp 3D).

---

## 🚀 Cách mở web

**Cách 1 — Nhanh nhất (không cần cài gì):**
Mở thư mục này rồi **nhấp đúp vào `index.html`**. Trang web chạy ngay trong trình duyệt,
**không cần Internet**, không cần đăng nhập.

**Cách 2 — Chạy bằng máy chủ cục bộ (tùy chọn):**
Nếu muốn (ví dụ để xem trên điện thoại cùng mạng Wi‑Fi), nhấp đúp **`start.bat`**.
Máy chủ sẽ chạy tại `http://localhost:8000` (cần đã cài Python hoặc Node.js).

> 💡 Học trên điện thoại/máy tính bảng: dùng Cách 2 rồi mở
> `http://<địa-chỉ-IP-máy-tính>:8000` trên thiết bị cùng Wi‑Fi.

---

## 🧠 Công cụ giúp NHỚ bài (mới)
Ngoài đọc – hiểu, web có "vòng học chủ động" giúp nhớ lâu (lưu ngay trong trình duyệt, không cần đăng nhập):
- **Tự kiểm tra (quiz chấm điểm)** ở cuối **mọi bài** (39 bài, 117 câu): trắc nghiệm / điền đáp số, chấm ngay đúng–sai kèm giải thích.
- **Lưu tiến độ**: đánh dấu "đã học", trang chủ hiện % mỗi chương + nút "Tiếp tục bài đang học".
- **Flashcard công thức** ([flashcards.html](flashcards.html)): tự sinh từ công thức các bài, ôn theo lịch ngắt quãng (nhớ → giãn lịch; quên → ôn lại sớm).
- **Bảng công thức tổng hợp** ([cong-thuc.html](cong-thuc.html)): mọi công thức/định lí gom theo chương để tra cứu nhanh.
- **Sổ tay lỗi sai** ([loi-sai.html](loi-sai.html)): câu quiz làm sai tự được ghi lại để ôn đúng chỗ yếu.
- **Chỉnh cỡ chữ** (nút A− / A+ góc dưới phải mọi trang) cho con dễ đọc.
- **Đưa lên mạng**: xem hướng dẫn trong [DEPLOY.md](DEPLOY.md) (nhanh nhất: Netlify Drop).

> Dữ liệu học (tiến độ, lỗi sai, lịch flashcard) lưu bằng `localStorage` của trình duyệt trên máy con — riêng tư, không gửi đi đâu. Xoá dữ liệu trình duyệt sẽ xoá tiến độ.

## 📚 Mỗi bài học gồm 7 phần

1. 🎯 **Mục tiêu** — học xong làm được gì.
2. 💡 **Tình huống mở đầu** — ví dụ đời sống dẫn vào kiến thức.
3. 📘 **Kiến thức cần nhớ** — lý thuyết ngắn gọn + công thức nổi bật.
4. 🧩 **Hình minh hoạ tương tác** — kéo thanh trượt / bấm để hiểu trực quan.
5. ✏️ **Ví dụ minh hoạ** — giải từng bước.
6. ⚠️ **Lỗi thường gặp** — tránh sai lầm phổ biến.
7. 📝 **Bài tập 3 mức** (Nhận biết · Thông hiểu · Vận dụng) — mỗi câu có
   **Gợi ý** (mở dần từng tầng) và **Xem lời giải** (ẩn cho tới khi bấm).

---

## 🗂️ Cấu trúc thư mục

```
TOAN 8/
├─ index.html          Trang chủ (lộ trình 10 chương + tiến độ học)
├─ bai.html            Trang hiển thị một bài học (mở theo ?id=...)
├─ flashcards.html     Flashcard công thức (ôn ngắt quãng)
├─ cong-thuc.html      Bảng công thức tổng hợp
├─ loi-sai.html        Sổ tay lỗi sai
├─ DEPLOY.md           Hướng dẫn đưa web lên mạng
├─ start.bat           (tùy chọn) chạy máy chủ cục bộ
├─ css/style.css       Giao diện
├─ js/
│  ├─ app.js              Registry trung tâm + lộ trình + render trang chủ
│  ├─ store.js            Lưu tiến độ/quiz/lỗi sai/flashcard (localStorage)
│  ├─ prefs.js            Chỉnh cỡ chữ (lưu localStorage)
│  ├─ render-lesson.js    Dựng trang bài học + quiz chấm điểm
│  ├─ flashcards.js       Logic flashcard
│  ├─ formulas.js         Logic bảng công thức
│  ├─ mistakes.js         Logic sổ tay lỗi sai
│  └─ widgets/
│     ├─ area-model.js    Mô hình diện tích (nhân / chia đa thức)
│     └─ algebra-tiles.js Gạch đại số (gom số hạng đồng dạng)
│     ├─ identity.js      Hằng đẳng thức ((a+b)² diện tích; kiểm chứng bằng số)
│     ├─ geometry.js      Hình học tương tác (tứ giác: kéo đỉnh, trượt thanh)
│     ├─ thales.js        Tam giác: đường song song, đường trung bình, phân giác
│     ├─ graph.js         Đồ thị hàm số bậc nhất y = ax + b (lưới toạ độ, trượt a,b)
│     ├─ equation.js      Cân thăng bằng giải phương trình bậc nhất
│     ├─ fraction.js      Phân thức: điều kiện xác định + rút gọn từng bước
│     ├─ similar.js       Tam giác đồng dạng, Pythagore (a²+b²=c²), hình đồng dạng
│     ├─ chart.js         Biểu diễn dữ liệu: bảng / biểu đồ cột / biểu đồ tròn
│     ├─ probability.js   Tung xúc xắc/đồng xu ảo: xác suất thực nghiệm vs lí thuyết
│     └─ solid.js         Hình chóp đều 3D: diện tích xung quanh + thể tích
├─ data/
│  ├─ chuong-0X.js        Danh mục bài của từng chương
│  └─ bai-XX-....js       Nội dung từng bài
├─ tools/
│  └─ kiem-tra-noi-dung.js  Công cụ kiểm tra nội dung (xem bên dưới)
└─ vendor/katex/       Thư viện KaTeX để hiển thị công thức (chạy offline)
```

## 🔎 Kiểm tra nội dung trước khi cho con dùng
Sau khi thêm/sửa bài, mở terminal tại thư mục này và chạy:
```
node tools/kiem-tra-noi-dung.js
```
Công cụ sẽ tự nạp mọi bài, **biên dịch thử toàn bộ công thức bằng KaTeX**, và báo nếu có
lỗi LaTeX, dấu `$` lệch, hay thiếu trường. (Chỉ cần có Node.js; không cài thêm gì.)

---

## ➕ Cách thêm một bài học mới

1. Tạo file `data/bai-XX-ten-bai.js` theo mẫu một bài có sẵn
   (xem `data/bai-01-don-thuc.js`). Mỗi bài gọi `MATH8.registerLesson({ ... })`.
2. Thêm bài vào danh mục chương tương ứng `data/chuong-XX.js` (mảng `lessons`).
3. Thêm một dòng `<script src="data/bai-XX-ten-bai.js"></script>` vào `bai.html`
   (cùng nhóm với các file bài học khác).

### Cách thêm cả một CHƯƠNG mới
1. Tạo `data/chuong-XX.js` gọi `MATH8.registerChapter({ ... })` (xem `data/chuong-03.js`).
2. Trong `js/app.js`, tìm `MATH8.ROADMAP` và thêm `active: true` cho chương đó.
3. Khai báo `data/chuong-XX.js` trong **cả** `index.html` và `bai.html`; khai báo các file
   `data/bai-*.js` của chương trong `bai.html`.
4. Chạy `node tools/kiem-tra-noi-dung.js` để kiểm tra.

### Thêm câu hỏi "Tự kiểm tra" (quiz) cho một bài
Thêm trường `quiz` vào đối tượng bài (xem `data/bai-01-don-thuc.js`). Mỗi câu:
- Trắc nghiệm: `{ type: "mc", q: "...", choices: ["...","..."], answer: 0, explain: "..." }` (`answer` là **chỉ số** đáp án đúng, bắt đầu từ 0).
- Điền số: `{ type: "fill", q: "...", answer: 7, explain: "..." }` (chấm theo số, chấp nhận dấu phẩy hoặc chấm thập phân). Với đáp án là phân thức/biểu thức, nên dùng dạng trắc nghiệm.

### Viết công thức Toán
- Công thức inline: đặt giữa hai dấu `$ ... $`, ví dụ `$x^2 + 2x + 1$`.
- Công thức trên một dòng riêng: dùng `$$ ... $$`.
- Trường `formula` và `intro.math` đã **tự động** hiển thị dạng công thức — chỉ cần
  viết nội dung LaTeX, **không cần** thêm `$`.
- Vì nội dung nằm trong chuỗi JavaScript, các lệnh LaTeX có dấu `\` phải viết **gấp đôi**:
  ví dụ `\\dfrac{1}{2}`, `\\cdot`, `\\ge`.

---

## 🧱 Công nghệ
HTML/CSS/JavaScript thuần + [KaTeX](https://katex.org) (đã đóng gói sẵn để chạy offline).
Không dùng framework, không cần build, không cần cơ sở dữ liệu.

## 🗺️ Định hướng phát triển tiếp
- Lưu tiến độ học (localStorage), sổ tay lỗi sai, bài tập chấm điểm tự động.
- Soạn tiếp Chương II → X (39 bài); thêm hình học tương tác (GeoGebra) cho các chương hình.
