const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
let ctx: AudioContext | null = null;
let isMuted = false;

function initAudio() {
  if (!ctx && AudioContextClass) {
    ctx = new AudioContextClass();
  }
  if (ctx && ctx.state === "suspended") {
    ctx.resume();
  }
}

export const playHoverSound = () => {
  if (isMuted) return;
  initAudio();
  if (!ctx) return;
  
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(1000, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(1500, ctx.currentTime + 0.04);

  gain.gain.setValueAtTime(0, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(0.03, ctx.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

  osc.connect(gain);
  gain.connect(ctx.destination);
  
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.04);
};

export const playClickSound = () => {
  if (isMuted) return;
  initAudio();
  if (!ctx) return;
  
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "square";
  osc.frequency.setValueAtTime(600, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.1);

  gain.gain.setValueAtTime(0, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.1);
};

export const setupGlobalSounds = () => {
  document.addEventListener("mouseenter", (e) => {
    const target = e.target as HTMLElement;
    if (
      target.tagName === "A" ||
      target.tagName === "BUTTON" ||
      target.closest("a") ||
      target.closest("button") ||
      target.hasAttribute("data-cursor")
    ) {
      playHoverSound();
    }
  }, true);

  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (
      target.tagName === "A" ||
      target.tagName === "BUTTON" ||
      target.closest("a") ||
      target.closest("button")
    ) {
      playClickSound();
    }
  }, true);
};
