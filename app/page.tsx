import Image from "next/image";
import Dither from '../components/Dither';
import TextType from '../components/TextType';

export default function Home() {
  return (
    <main className="w-full bg-black">
      <section className="relative h-dvh w-full overflow-hidden">
        <div className="absolute inset-0">
          <Dither
            waveColor={[0.027, 0.016, 0.275]}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0}
            colorNum={3.4}
            waveAmplitude={0.52}
            waveFrequency={2.3}
            waveSpeed={0.01}
            backgroundColor={[0, 0, 0]}
          />
        </div>
        <div className="relative z-10 flex h-full items-center justify-center">
          <TextType className="text-center text-7xl font-bold text-white md:text-6xl"
            text={["Sveiki! :)", "Mani sauc Markuss"]}
            typingSpeed={100}
            pauseDuration={2000}
            showCursor={true}
            cursorCharacter="_"
            deletingSpeed={50}
            cursorBlinkDuration={0.5}
          />
        </div>
      </section>
    </main>
  );
}