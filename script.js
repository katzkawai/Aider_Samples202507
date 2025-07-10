document.getElementById('clickMe').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.textContent = 'ボタンがクリックされました！';
    message.style.opacity = 0;
    message.style.transform = 'translateY(20px)';
    message.style.transition = 'all 0.5s ease';
    
    // Trigger reflow to restart animation
    void message.offsetWidth;
    
    message.style.opacity = 1;
    message.style.transform = 'translateY(0)';
    message.style.color = '#f72585';
    message.style.fontWeight = 'bold';
});
