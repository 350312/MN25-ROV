/**
 * Martian Atmospheric Wind Synthesizer using Web Audio API
 * Accurately simulates the thin, low-pressure CO2 Martian atmosphere acoustics
 * captured by the Perseverance SuperCam microphone.
 */

class MarsAudioEngine {
  private ctx: AudioContext | null = null;
  private noiseNode: AudioBufferSourceNode | null = null;
  private filterNode: BiquadFilterNode | null = null;
  private gainNode: GainNode | null = null;
  private isPlaying = false;
  private gustInterval: number | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private createMartianWindBuffer(ctx: AudioContext): AudioBuffer {
    const bufferSize = ctx.sampleRate * 6; // 6 seconds loop
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    
    // Pink/Brown noise generator for atmospheric hiss and rumble
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
      b6 = white * 0.115926;
    }
    return buffer;
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    try {
      this.initContext();
      if (!this.ctx) return;

      this.stop(); // clear any previous

      const buffer = this.createMartianWindBuffer(this.ctx);
      this.noiseNode = this.ctx.createBufferSource();
      this.noiseNode.buffer = buffer;
      this.noiseNode.loop = true;

      // Low pass filter to simulate sound attenuation in Mars' 0.6% Earth density CO2 atmosphere
      this.filterNode = this.ctx.createBiquadFilter();
      this.filterNode.type = 'lowpass';
      this.filterNode.frequency.setValueAtTime(260, this.ctx.currentTime);
      this.filterNode.Q.setValueAtTime(1.8, this.ctx.currentTime);

      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.001, this.ctx.currentTime);
      // Smooth fade in
      this.gainNode.gain.exponentialRampToValueAtTime(0.18, this.ctx.currentTime + 1.2);

      this.noiseNode.connect(this.filterNode);
      this.filterNode.connect(this.gainNode);
      this.gainNode.connect(this.ctx.destination);

      this.noiseNode.start(0);
      this.isPlaying = true;

      // Random natural wind gusts
      this.gustInterval = window.setInterval(() => {
        if (!this.filterNode || !this.ctx || !this.gainNode) return;
        const now = this.ctx.currentTime;
        const targetFreq = 180 + Math.random() * 220;
        const targetGain = 0.12 + Math.random() * 0.14;
        this.filterNode.frequency.linearRampToValueAtTime(targetFreq, now + 2.5);
        this.gainNode.gain.linearRampToValueAtTime(targetGain, now + 2.5);
      }, 3500);
    } catch (e) {
      console.warn('Martian audio could not be initialized:', e);
    }
  }

  public stop() {
    if (this.gustInterval) {
      clearInterval(this.gustInterval);
      this.gustInterval = null;
    }
    if (this.gainNode && this.ctx) {
      try {
        const now = this.ctx.currentTime;
        this.gainNode.gain.linearRampToValueAtTime(0.0001, now + 0.4);
        setTimeout(() => {
          if (this.noiseNode) {
            try { this.noiseNode.stop(); } catch {}
            this.noiseNode.disconnect();
            this.noiseNode = null;
          }
        }, 450);
      } catch {}
    }
    this.isPlaying = false;
  }

  public getActive(): boolean {
    return this.isPlaying;
  }
}

export const marsAudio = new MarsAudioEngine();
