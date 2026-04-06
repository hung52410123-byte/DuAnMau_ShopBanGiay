document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('mainMediaContainer');
  const thumbs = document.querySelectorAll('.thumb');
  let currentIndex = 0;

  function showMedia(index) {
      if (index < 0 || index >= thumbs.length) return;

      const thumb = thumbs[index];
      const src = thumb.getAttribute('data-src');

      const img = new Image();
      img.src = src;
      img.alt = "Jordan Trunner LX";
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "contain";
      img.style.borderRadius = "12px";

      img.onload = () => {
          container.innerHTML = '';
          container.appendChild(img);
      };

      img.onerror = () => {
          container.innerHTML = `
              <div style="color: red; padding: 40px; text-align: center; font-size: 16px;">
                  Không tìm thấy ảnh:<br>
                  <strong>${src}</strong><br><br>
                  Vui lòng kiểm tra đường dẫn file trong thư mục /Images/
              </div>`;
          console.error("Lỗi load ảnh:", src);
      };

      // Active thumbnail
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');

      currentIndex = index;
  }

  // Click vào thumbnail
  thumbs.forEach((thumb, i) => {
      thumb.addEventListener('click', () => showMedia(i));
  });

  // Nút Prev / Next
  document.getElementById('prevBtn').addEventListener('click', () => {
      let idx = currentIndex - 1;
      if (idx < 0) idx = thumbs.length - 1;
      showMedia(idx);
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
      let idx = currentIndex + 1;
      if (idx >= thumbs.length) idx = 0;
      showMedia(idx);
  });

  // Load ảnh đầu tiên
  showMedia(0);
});