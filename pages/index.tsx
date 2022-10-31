import Head from "next/head";
import { useEffect, useRef, useState } from "react";

const OCTAVE_4 = {
  C: 261.63,
  CSharp: 277.18,
  D: 293.66,
  DSharp: 311.13,
  E: 329.63,
  F: 349.23,
  FSharp: 369.99,
  G: 392,
  GSharp: 415.3,
  A: 440,
  ASharp: 466.16,
  B: 493.88,
};

export default function Home() {
  const [freq, setFrequency] = useState(0);
  const onPlayPause = (_freq: number) => {
    if (audioContext.current?.state === "suspended") {
      audioContext.current!.resume();
    }
    setFrequency(_freq);
  };
  const osc = useRef<OscillatorNode | null>(null);
  const audioContext = useRef<AudioContext | null>(null);

  useEffect(() => {
    const _audioContext = new (window.AudioContext ||
      //@ts-ignore
      window.webkitAudioContext)();
    osc.current = _audioContext.createOscillator();
    audioContext.current = _audioContext;
    osc.current.type = "sine";
    osc.current.start();
  }, []);

  useEffect(() => {
    osc.current!.frequency.value = freq;
    osc.current!.connect(audioContext.current!.destination);
    return () => osc.current!.disconnect(audioContext.current!.destination);
  }, [freq]);

  const setWaveForm = (e: any) => {
    osc.current!.type = e.target.value;
  };

  const cancelSound = () => {
    audioContext.current!.suspend();
  };

  useEffect(() => {}, []);
  return (
    <div>
      <Head>
        <title>NextJS Piano</title>
        <meta
          name="description"
          content="A little experiment with WebAudio API"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔊</text></svg>"
        />
      </Head>

      <main className="px-4 mx-auto max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8o">
        <h1 className="mt-4 mb-8 text-3xl text-center">WebAudio Synth</h1>
        <div className="relative mx-auto" style={{ width: 350, height: 200 }}>
          <button
            className="flex absolute items-end pb-4 bg-white rounded-t-none hover:bg-white btn"
            onMouseDown={() => onPlayPause(OCTAVE_4["C"])}
            onMouseUp={cancelSound}
            onMouseLeave={cancelSound}
            style={{
              height: 200,
              width: 50,
              left: 0,
            }}
          >
            C
          </button>
          <button
            className="flex absolute items-end pb-4 bg-black rounded-t-none btn"
            onMouseDown={() => onPlayPause(OCTAVE_4["CSharp"])}
            onMouseUp={cancelSound}
            onMouseLeave={cancelSound}
            style={{
              height: 150,
              width: 33,
              left: 33,
              zIndex: 2,
            }}
          >
            C#
          </button>
          <button
            className="flex absolute items-end pb-4 bg-white rounded-t-none hover:bg-white btn"
            onMouseDown={() => onPlayPause(OCTAVE_4["D"])}
            onMouseUp={cancelSound}
            onMouseLeave={cancelSound}
            style={{
              height: 200,
              width: 50,
              left: 50,
            }}
          >
            D
          </button>
          <button
            className="flex absolute items-end pb-4 bg-black rounded-t-none btn"
            onMouseDown={() => onPlayPause(OCTAVE_4["DSharp"])}
            onMouseUp={cancelSound}
            onMouseLeave={cancelSound}
            style={{
              height: 150,
              width: 33,
              left: 100 - 33 / 2,
              zIndex: 2,
            }}
          >
            D#
          </button>
          <button
            className="flex absolute items-end pb-4 bg-white rounded-t-none hover:bg-white btn"
            onMouseDown={() => onPlayPause(OCTAVE_4["E"])}
            onMouseUp={cancelSound}
            onMouseLeave={cancelSound}
            style={{
              height: 200,
              width: 50,
              left: 100,
            }}
          >
            E
          </button>
          <button
            className="flex absolute items-end pb-4 bg-white rounded-t-none hover:bg-white btn"
            onMouseDown={() => onPlayPause(OCTAVE_4["F"])}
            onMouseUp={cancelSound}
            onMouseLeave={cancelSound}
            style={{
              height: 200,
              width: 50,
              left: 150,
            }}
          >
            F
          </button>
          <button
            className="flex absolute items-end pb-4 bg-black rounded-t-none btn"
            onMouseDown={() => onPlayPause(OCTAVE_4["FSharp"])}
            onMouseUp={cancelSound}
            onMouseLeave={cancelSound}
            style={{
              height: 150,
              width: 33,
              left: 200 - 33 / 2,
              zIndex: 2,
            }}
          >
            F#
          </button>

          <button
            className="flex absolute items-end pb-4 bg-white rounded-t-none hover:bg-white btn"
            onMouseDown={() => onPlayPause(OCTAVE_4["G"])}
            onMouseUp={cancelSound}
            onMouseLeave={cancelSound}
            style={{
              height: 200,
              width: 50,
              left: 200,
            }}
          >
            G
          </button>

          <button
            className="flex absolute items-end pb-4 bg-black rounded-t-none btn"
            onMouseDown={() => onPlayPause(OCTAVE_4["GSharp"])}
            onMouseUp={cancelSound}
            onMouseLeave={cancelSound}
            style={{
              height: 150,
              width: 33,
              left: 250 - 33 / 2,
              zIndex: 2,
            }}
          >
            G#
          </button>
          <button
            className="flex absolute items-end pb-4 bg-white rounded-t-none hover:bg-white btn"
            onMouseDown={() => onPlayPause(OCTAVE_4["A"])}
            onMouseUp={cancelSound}
            onMouseLeave={cancelSound}
            style={{
              height: 200,
              width: 50,
              left: 250,
            }}
          >
            A
          </button>
          <button
            className="flex absolute items-end pb-4 bg-black rounded-t-none btn"
            onMouseDown={() => onPlayPause(OCTAVE_4["ASharp"])}
            onMouseUp={cancelSound}
            onMouseLeave={cancelSound}
            style={{
              height: 150,
              width: 33,
              left: 300 - 33 / 2,
              zIndex: 2,
            }}
          >
            A#
          </button>
          <button
            className="flex absolute items-end pb-4 bg-white rounded-t-none hover:bg-white btn"
            onMouseDown={() => onPlayPause(OCTAVE_4["B"])}
            onMouseUp={cancelSound}
            onMouseLeave={cancelSound}
            style={{
              height: 200,
              width: 50,
              left: 300,
            }}
          >
            B
          </button>
        </div>
        <div>
          <h2 className="mt-8 text-2xl text-center">Waveform</h2>
          <select className="block mx-auto select" onChange={setWaveForm}>
            {["sine", "square", "sawtooth", "triangle"].map((value) => (
              <option key={value} className="uppercase">
                {value}
              </option>
            ))}
          </select>
        </div>
      </main>
    </div>
  );
}
