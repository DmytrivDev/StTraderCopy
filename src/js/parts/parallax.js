const messages = document.querySelectorAll('.copytrad__tel');

if (messages) {
  document.addEventListener('mousemove', event => {
    const currentMousePosition = { x: event.clientX, y: event.clientY };

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    messages.forEach(message => {
      const offsetX = -(currentMousePosition.x - centerX) / 75;
      let offsetY = -(currentMousePosition.y - centerY) / 75;

      if (message.classList.contains('solution')) {
        const messH = message.offsetHeight / 2;
        offsetY = -((currentMousePosition.y - centerY) / 50) - messH;
      }

      message.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(6deg)`;
    });
  });
}
