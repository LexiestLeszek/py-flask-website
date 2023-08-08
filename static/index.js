const ballContainer = document.createElement("div");
ballContainer.style.position = "fixed";
ballContainer.style.top = "50%";
ballContainer.style.left = "50%";
ballContainer.style.transform = "translate(-50%, -50%)";
document.body.appendChild(ballContainer);

const ballRadius = 100;
const numLetters = 36;
const letterSpacing = (2 * Math.PI * ballRadius) / numLetters;

for (let i = 0; i < numLetters; i++) {
  const letter = document.createElement("div");
  letter.textContent = String.fromCharCode(65 + (i % 26)); // Letters from A to Z
  letter.style.position = "absolute";
  letter.style.fontSize = "24px";
  letter.style.transformOrigin = "center";
  const angle = (i * 360) / numLetters;
  const x = ballRadius * Math.cos((angle * Math.PI) / 180);
  const y = ballRadius * Math.sin((angle * Math.PI) / 180);
  letter.style.transform = `translate(${x}px, ${y}px)`;
  ballContainer.appendChild(letter);
}

let rotation = 0;

function animate() {
  requestAnimationFrame(animate);

  rotation += 1;
  ballContainer.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
}

animate();
