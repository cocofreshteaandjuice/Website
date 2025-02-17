// เลือกปุ่ม menu-toggle และรายการ nav-list
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

// เพิ่ม event listener สำหรับคลิกปุ่ม menu-toggle
menuToggle.addEventListener('click', () => {
  // สลับคลาส active ใน nav-list
  navList.classList.toggle('active');
});
