document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const recentList = document.getElementById('recentList');
  
    // Danh sách Recent Searches mặc định (có thể lưu vào localStorage sau)
    let recentSearches = ['giảm giá', 'lebron', 'nike'];
  
    function renderRecent() {
      recentList.innerHTML = '';
      recentSearches.forEach((term, index) => {
        const div = document.createElement('div');
        div.className = 'recent-item';
        div.innerHTML = `
          <span onclick="performSearch('${term}')">${term}</span>
          <span class="remove material-icons-outlined" onclick="removeRecent(${index}); event.stopImmediatePropagation();">close</span>
        `;
        recentList.appendChild(div);
      });
    }
  
    // Xóa một mục recent
    window.removeRecent = function(index) {
      recentSearches.splice(index, 1);
      renderRecent();
    };
  
    // Click vào Popular Tag → thêm vào Recent và tìm kiếm
    window.searchTerm = function(element) {
      const term = element.textContent.trim();
      if (!recentSearches.includes(term)) {
        recentSearches.unshift(term);   // Thêm vào đầu danh sách
        if (recentSearches.length > 10) recentSearches.pop();
      }
      renderRecent();
      performSearch(term);
    };
  
    // Thực hiện tìm kiếm (hiện tại chỉ alert, sau bạn có thể redirect sang trang kết quả)
    window.performSearch = function(term) {
      alert(`Đang tìm kiếm: "${term}"\n\n(Bạn có thể thay alert này bằng window.location = "/search-results.html?q=" + encodeURIComponent(term))`);
      // Ví dụ: window.location.href = `/search-results.html?q=${encodeURIComponent(term)}`;
    };
  
    // Khi nhấn Enter trong ô search
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && searchInput.value.trim() !== '') {
        const term = searchInput.value.trim();
        if (!recentSearches.includes(term)) {
          recentSearches.unshift(term);
          if (recentSearches.length > 10) recentSearches.pop();
        }
        renderRecent();
        performSearch(term);
        searchInput.value = '';   // Xóa input sau khi search
      }
    });
  
    // Render lần đầu
    renderRecent();
  });