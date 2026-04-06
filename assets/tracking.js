document.addEventListener('DOMContentLoaded', () => {
    // Lấy ID từ URL (ví dụ: tracking.html?id=VN987654321)
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get('id') || 'VN987654321';
    document.getElementById('orderId').textContent = orderId;
  
    // Timeline mẫu
    const timelineData = [
      { text: "Đặt hàng thành công", date: "02/04/2026 09:15", completed: true },
      { text: "Đã xác nhận đơn hàng", date: "02/04/2026 11:30", completed: true },
      { text: "Đang chuẩn bị giao hàng", date: "03/04/2026 08:00", completed: true },
      { text: "Đã giao cho đơn vị vận chuyển", date: "03/04/2026 14:20", completed: true },
      { text: "Đã giao hàng thành công", date: "04/04/2026 10:45", completed: false }
    ];
  
    const timelineContainer = document.getElementById('timeline');
  
    timelineData.forEach((step, index) => {
      const div = document.createElement('div');
      div.className = 'timeline-step';
      div.innerHTML = `
        <div class="timeline-dot ${step.completed ? 'completed' : ''}">
          ${step.completed ? '✓' : ''}
        </div>
        <div class="timeline-line"></div>
        <div class="timeline-content">
          <strong>${step.text}</strong><br>
          <span style="color:#707072; font-size:14px;">${step.date}</span>
        </div>
      `;
      timelineContainer.appendChild(div);
    });
  
    // Sản phẩm trong đơn (mẫu)
    const itemsContainer = document.getElementById('orderItems');
    const items = [
      { name: "Jordan Trunner LX", price: "3,063,000đ", qty: 1, img: "/Images/jordan-trunner-fav.jpg" }
    ];
  
    items.forEach(item => {
      const div = document.createElement('div');
      div.className = 'order-item';
      div.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <div style="flex:1">
          <h4>${item.name}</h4>
          <p>Số lượng: ${item.qty}</p>
        </div>
        <div style="text-align:right">
          <strong>${item.price}</strong>
        </div>
      `;
      itemsContainer.appendChild(div);
    });
  });