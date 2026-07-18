/**
 * Historical Quiz Audio Manager using Web Audio API
 * Synthesizes 19th-century-inspired classical chamber music and sound effects.
 */

class HistoricalAudio {
  private ctx: AudioContext | null = null;
  private musicPlaying: boolean = false;
  private muted: boolean = false;
  private timerId: number | null = null;
  private currentStep: number = 0;
  private lastScheduledTime: number = 0;

  // Classic 6/8 Waltz/Habanera Progression (A minor -> D minor -> E major -> A minor)
  // Structured as 48 eighth-note steps (8 bars of 6/8 meter)
  private melodySteps = [
    // Bar 1: A minor arpeggio
    { midi: 69, bassMidi: 45 }, // A4, Bass A2
    { midi: 72, bassMidi: null }, // C5
    { midi: 76, bassMidi: null }, // E5
    { midi: 81, bassMidi: null }, // A5
    { midi: 76, bassMidi: null }, // E5
    { midi: 72, bassMidi: null }, // C5

    // Bar 2: A minor arpeggio
    { midi: 69, bassMidi: 45 },
    { midi: 72, bassMidi: null },
    { midi: 76, bassMidi: null },
    { midi: 81, bassMidi: null },
    { midi: 76, bassMidi: null },
    { midi: 72, bassMidi: null },

    // Bar 3: D minor arpeggio
    { midi: 69, bassMidi: 38 }, // A4, Bass D2
    { midi: 74, bassMidi: null }, // D5
    { midi: 77, bassMidi: null }, // F5
    { midi: 81, bassMidi: null }, // A5
    { midi: 77, bassMidi: null }, // F5
    { midi: 74, bassMidi: null }, // D5

    // Bar 4: D minor arpeggio
    { midi: 69, bassMidi: 38 },
    { midi: 74, bassMidi: null },
    { midi: 77, bassMidi: null },
    { midi: 81, bassMidi: null },
    { midi: 77, bassMidi: null },
    { midi: 74, bassMidi: null },

    // Bar 5: E major arpeggio
    { midi: 68, bassMidi: 40 }, // G#4, Bass E2
    { midi: 71, bassMidi: null }, // B4
    { midi: 76, bassMidi: null }, // E5
    { midi: 80, bassMidi: null }, // G#5
    { midi: 76, bassMidi: null }, // E5
    { midi: 71, bassMidi: null }, // B4

    // Bar 6: E major arpeggio
    { midi: 68, bassMidi: 40 },
    { midi: 71, bassMidi: null },
    { midi: 76, bassMidi: null },
    { midi: 80, bassMidi: null },
    { midi: 76, bassMidi: null },
    { midi: 71, bassMidi: null },

    // Bar 7: A minor arpeggio
    { midi: 69, bassMidi: 45 }, // A4, Bass A2
    { midi: 72, bassMidi: null },
    { midi: 76, bassMidi: null },
    { midi: 81, bassMidi: null },
    { midi: 76, bassMidi: null },
    { midi: 72, bassMidi: null },

    // Bar 8: A minor climbing turnaround
    { midi: 69, bassMidi: 45 },
    { midi: 72, bassMidi: null },
    { midi: 76, bassMidi: null },
    { midi: 81, bassMidi: null }, // A5
    { midi: 83, bassMidi: null }, // B5
    { midi: 84, bassMidi: null }, // C6
  ];

  constructor() {
    // Check if running in browser
    if (typeof window !== "undefined") {
      // LocalStorage caching for user's mute preference
      const cachedMute = localStorage.getItem("historical_quiz_mute");
      this.muted = cachedMute === "true";
    }
  }

  private initCtx() {
    if (!this.ctx) {
      const AudioCtxClass =
        window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioCtxClass();
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  private midiToFreq(midi: number): number {
    return 440 * Math.pow(2, (midi - 69) / 12);
  }

  // Play a beautiful synthesized plucked Harpsichord/Lute tone
  private playHarpsichord(
    freq: number,
    time: number,
    duration: number,
    volume: number,
  ) {
    if (!this.ctx || this.muted) return;

    // Harpsichord is rich in harmonics - mix bright triangle + thin sawtooth
    const oscFundamental = this.ctx.createOscillator();
    const oscHarmonic = this.ctx.createOscillator();
    const mainGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    oscFundamental.type = "triangle";
    oscFundamental.frequency.setValueAtTime(freq, time);

    oscHarmonic.type = "sawtooth";
    oscHarmonic.frequency.setValueAtTime(freq * 2.003, time); // detuned octave harmonic

    // Warm vintage highpass/bandpass filtering to simulate an acoustic wooden soundboard
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(1400, time);
    filter.frequency.exponentialRampToValueAtTime(900, time + duration);
    filter.Q.setValueAtTime(1.2, time);

    const gainFund = this.ctx.createGain();
    const gainHarm = this.ctx.createGain();
    gainFund.gain.setValueAtTime(0.75, time);
    gainHarm.gain.setValueAtTime(0.12, time); // subtle saw presence

    // Routing
    oscFundamental.connect(gainFund);
    oscHarmonic.connect(gainHarm);
    gainFund.connect(filter);
    gainHarm.connect(filter);
    filter.connect(mainGain);
    mainGain.connect(this.ctx.destination);

    // Fast pluck envelope (ADSR)
    mainGain.gain.setValueAtTime(0, time);
    mainGain.gain.linearRampToValueAtTime(volume, time + 0.004);
    mainGain.gain.exponentialRampToValueAtTime(volume * 0.18, time + 0.15); // sharp pluck decay
    mainGain.gain.setValueAtTime(volume * 0.18, time + duration);
    mainGain.gain.exponentialRampToValueAtTime(0.0001, time + duration + 0.2);

    oscFundamental.start(time);
    oscHarmonic.start(time);
    oscFundamental.stop(time + duration + 0.3);
    oscHarmonic.stop(time + duration + 0.3);
  }

  // Play a soft dark Cello bass pluck
  private playCelloBass(
    freq: number,
    time: number,
    duration: number,
    volume: number,
  ) {
    if (!this.ctx || this.muted) return;

    const osc = this.ctx.createOscillator();
    const mainGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, time);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(300, time);

    osc.connect(filter);
    filter.connect(mainGain);
    mainGain.connect(this.ctx.destination);

    // Warm, longer bass envelope
    mainGain.gain.setValueAtTime(0, time);
    mainGain.gain.linearRampToValueAtTime(volume, time + 0.08); // softer attack
    mainGain.gain.exponentialRampToValueAtTime(volume * 0.35, time + 0.35);
    mainGain.gain.setValueAtTime(volume * 0.35, time + duration);
    mainGain.gain.exponentialRampToValueAtTime(0.0001, time + duration + 0.4);

    osc.start(time);
    osc.stop(time + duration + 0.5);
  }

  // Sequencer loop scheduling notes ahead of time
  private scheduleLoop() {
    if (!this.musicPlaying || !this.ctx) return;

    const lookAhead = 0.2; // schedule 200ms of notes
    const stepTime = 0.165; // Tempo: ~90 BPM eighth-notes (~600ms per bar)

    while (this.lastScheduledTime < this.ctx.currentTime + lookAhead) {
      const stepData = this.melodySteps[this.currentStep];
      const timeToPlay = this.lastScheduledTime;

      // Play melody pluck
      if (stepData.midi) {
        const freq = this.midiToFreq(stepData.midi);
        const duration = stepTime * 0.95;
        // Subtle volume dynamics to sound organic
        const dynamicVol = this.currentStep % 3 === 0 ? 0.06 : 0.045;
        this.playHarpsichord(freq, timeToPlay, duration, dynamicVol);
      }

      // Play heavy bass support pluck
      if (stepData.bassMidi !== null) {
        const freq = this.midiToFreq(stepData.bassMidi);
        const duration = stepTime * 2.8; // sustain across notes
        this.playCelloBass(freq, timeToPlay, duration, 0.085);
      }

      this.lastScheduledTime += stepTime;
      this.currentStep = (this.currentStep + 1) % this.melodySteps.length;
    }

    // Call scheduleLoop again soon
    this.timerId = window.setTimeout(() => this.scheduleLoop(), 50);
  }

  // PUBLIC API

  public startMusic() {
    this.initCtx();
    if (this.musicPlaying) return;

    this.musicPlaying = true;
    if (this.ctx) {
      this.lastScheduledTime = this.ctx.currentTime + 0.05;
      this.scheduleLoop();
    }
  }

  public stopMusic() {
    this.musicPlaying = false;
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  // Victorian Bell Chime (C major triad with clockwork wind-up staggered chime)
  public playCorrect() {
    this.initCtx();
    if (!this.ctx || this.muted) return;

    const now = this.ctx.currentTime;
    // Elegant bright high chime major arpeggio
    const midis = [72, 76, 79, 84]; // C5, E5, G5, C6

    midis.forEach((midi, index) => {
      const delay = index * 0.055;
      const freq = this.midiToFreq(midi);

      const oscSine = this.ctx!.createOscillator();
      const oscTriangle = this.ctx!.createOscillator();
      const bellGain = this.ctx!.createGain();

      oscSine.type = "sine";
      oscSine.frequency.setValueAtTime(freq, now + delay);

      oscTriangle.type = "triangle";
      oscTriangle.frequency.setValueAtTime(freq * 2.001, now + delay); // metal resonance tines

      const triGain = this.ctx!.createGain();
      triGain.gain.setValueAtTime(0.18, now + delay);

      oscSine.connect(bellGain);
      oscTriangle.connect(triGain);
      triGain.connect(bellGain);
      bellGain.connect(this.ctx!.destination);

      // Sweet long chime decay
      bellGain.gain.setValueAtTime(0, now + delay);
      bellGain.gain.linearRampToValueAtTime(0.12, now + delay + 0.005);
      bellGain.gain.exponentialRampToValueAtTime(0.0001, now + delay + 1.6);

      oscSine.start(now + delay);
      oscTriangle.start(now + delay);
      oscSine.stop(now + delay + 1.8);
      oscTriangle.stop(now + delay + 1.8);
    });
  }

  // Tragic low antique organ cello / clock spring snap
  public playIncorrect() {
    this.initCtx();
    if (!this.ctx || this.muted) return;

    const now = this.ctx.currentTime;
    // Dissonant minor low triad chord (F#2, G2, A#2) to sound historical & dramatic
    const midis = [42, 43, 46];

    midis.forEach((midi) => {
      const freq = this.midiToFreq(midi);

      const oscSaw = this.ctx!.createOscillator();
      const oscSquare = this.ctx!.createOscillator();
      const mainGain = this.ctx!.createGain();
      const filter = this.ctx!.createBiquadFilter();

      oscSaw.type = "sawtooth";
      oscSaw.frequency.setValueAtTime(freq, now);

      oscSquare.type = "square";
      oscSquare.frequency.setValueAtTime(freq * 1.5, now); // dissonance fifth multiplier

      const sqGain = this.ctx!.createGain();
      sqGain.gain.setValueAtTime(0.1, now);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(450, now);
      filter.frequency.exponentialRampToValueAtTime(60, now + 0.5);

      oscSaw.connect(filter);
      oscSquare.connect(sqGain);
      sqGain.connect(filter);
      filter.connect(mainGain);
      mainGain.connect(this.ctx!.destination);

      // Shock strike envelope
      mainGain.gain.setValueAtTime(0, now);
      mainGain.gain.linearRampToValueAtTime(0.3, now + 0.01);
      mainGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

      oscSaw.start(now);
      oscSquare.start(now);
      oscSaw.stop(now + 1.0);
      oscSquare.stop(now + 1.0);
    });
  }

  public toggleMute(): boolean {
    this.muted = !this.muted;
    if (typeof window !== "undefined") {
      localStorage.setItem("historical_quiz_mute", String(this.muted));
    }
    return this.muted;
  }

  public isMuted(): boolean {
    return this.muted;
  }
}

export const historicalAudio = new HistoricalAudio();
