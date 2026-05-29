# Đưa web lên mạng (để con học mọi lúc, mọi nơi)

Đây là web **tĩnh** (chỉ gồm file HTML/CSS/JS), nên đưa lên mạng rất dễ và **miễn phí**.
Chọn **một** trong hai cách dưới đây.

> 💡 Lưu ý: tiến độ học, flashcard, sổ tay lỗi sai được lưu **trong trình duyệt của từng máy**.
> Khi đưa lên mạng, mỗi thiết bị con dùng sẽ có tiến độ riêng (điều này bình thường với web tĩnh).

---

## ⭐ Cách 1 — Netlify Drop (nhanh nhất, ~30 giây, không cần cài gì)

1. Mở trình duyệt vào: **https://app.netlify.com/drop**
2. Mở thư mục dự án `TOAN 8` trên máy.
3. **Kéo–thả cả thư mục `TOAN 8`** vào khung trên trang Netlify.
4. Đợi vài giây → Netlify cho một đường link dạng `https://ten-ngau-nhien.netlify.app` → **đó là web đã lên mạng!**
5. (Nên làm) Đăng ký tài khoản Netlify miễn phí để **giữ link vĩnh viễn** và đổi tên link.

✅ Xong. Gửi link đó cho con học trên điện thoại/máy tính bảng đều được.

---

## Cách 2 — GitHub Pages (miễn phí, link ổn định)

Cần một tài khoản GitHub (miễn phí).

**Qua trang web (không cần dòng lệnh):**
1. Tạo tài khoản tại https://github.com → bấm **New repository**, đặt tên ví dụ `toan8`, để **Public**, bấm *Create*.
2. Trong repo trống, bấm **uploading an existing file** → **kéo–thả toàn bộ** file và thư mục trong `TOAN 8` (gồm `index.html`, các thư mục `js`, `css`, `data`, `vendor`…) → **Commit changes**.
3. Vào **Settings → Pages** → mục *Build and deployment*, chọn **Branch: `main`**, thư mục **`/ (root)`** → **Save**.
4. Đợi 1–2 phút, GitHub cho link dạng `https://<tên-tài-khoản>.github.io/toan8/` → web đã lên mạng.

**Qua dòng lệnh (đã cài `git`):** repo đã được khởi tạo sẵn ở máy. Chỉ cần tạo repo trên GitHub rồi chạy:
```
git remote add origin https://github.com/<tên-tài-khoản>/toan8.git
git push -u origin main
```
rồi bật GitHub Pages như bước 3 ở trên.

> Nếu cài thêm công cụ `gh` (GitHub CLI) và đăng nhập (`gh auth login`), có thể nhờ trợ lý tự tạo repo + bật Pages giúp.

---

## Mẹo
- Mỗi lần sửa nội dung (thêm bài, sửa quiz…), chỉ cần **kéo–thả lại** (Netlify) hoặc **upload lại / `git push`** (GitHub) là bản trên mạng cập nhật.
- Muốn dùng offline trên máy nhà thì vẫn cứ **nhấp đúp `index.html`** như cũ — không cần mạng.
