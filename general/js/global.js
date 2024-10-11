document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    const cursorSize = cursor.offsetWidth / 2; // Half of the cursor size for centering
    cursor.style.left = (e.pageX - cursorSize) + 'px';
    cursor.style.top = (e.pageY - cursorSize) + 'px';
  });