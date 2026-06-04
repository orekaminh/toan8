# Đưa "Góc học Toán" lên mạng (1 link dùng chung cho mọi lớp)

Đây là web **tĩnh** (chỉ HTML/CSS/JS), đưa lên mạng rất dễ và **miễn phí**. Cấu trúc:

```
(thư mục gốc)
├─ index.html      ← MENU chọn lớp (trang vào đầu tiên)
├─ lop8/           ← Toàn bộ Toán 8
├─ lop9/           ← Toàn bộ Toán 9
└─ .nojekyll       ← để GitHub Pages phục vụ nguyên file
```

Mở web → hiện **menu chọn lớp** → bấm vào lớp để học. Mỗi lớp lưu tiến độ **riêng** trong trình duyệt.

> Học **offline** trên máy nhà: chỉ cần nhấp đúp `index.html` ở thư mục gốc.

---

## ⭐ Cách 1 — Netlify Drop (nhanh nhất, ~30 giây, không cần cài gì)

1. Vào **https://app.netlify.com/drop**
2. **Kéo–thả cả thư mục gốc** (thư mục chứa `index.html`, `lop8`, `lop9`) vào khung trên trang.
3. Đợi vài giây → Netlify cho một link dạng `https://ten-ngau-nhien.netlify.app` → **đó là web đã lên mạng!**
4. (Nên làm) Đăng ký tài khoản Netlify miễn phí để **giữ link vĩnh viễn** và đổi tên link.

Gửi đúng một link đó cho con; vào link là thấy menu chọn lớp.

---

## Cách 2 — GitHub Pages (miễn phí, link ổn định)

**Qua trang web (không cần dòng lệnh):**
1. Tạo tài khoản tại https://github.com → **New repository**, đặt tên ví dụ `goc-hoc-toan`, để **Public**, *Create*.
2. Trong repo trống → **uploading an existing file** → **kéo–thả toàn bộ** nội dung thư mục gốc
   (gồm `index.html`, hai thư mục `lop8`, `lop9`, và file `.nojekyll`) → **Commit changes**.
3. Vào **Settings → Pages** → chọn **Branch: `main`**, thư mục **`/ (root)`** → **Save**.
4. Đợi 1–2 phút, GitHub cho link dạng `https://<tên-tài-khoản>.github.io/goc-hoc-toan/` → web đã lên mạng.

**Qua dòng lệnh (đã cài `git`):** thư mục gốc đã là một git repo. Chỉ cần:
```
git add -A
git commit -m "Them menu chon lop + Toan 9"
git remote add origin https://github.com/<tên-tài-khoản>/goc-hoc-toan.git
git push -u origin main
```
rồi bật GitHub Pages như bước 3.

> ⚠️ Tên file/thư mục **phân biệt hoa–thường** trên GitHub. Các liên kết dùng `lop8/`, `lop9/` (chữ thường) — giữ đúng như vậy.

---

## Mẹo
- Mỗi lần sửa nội dung (thêm bài, sửa quiz…): **kéo–thả lại** (Netlify) hoặc **upload lại / `git push`** (GitHub) là bản trên mạng tự cập nhật.
- Tiến độ học của mỗi lớp lưu riêng trong trình duyệt từng máy (web tĩnh nên điều này là bình thường).
