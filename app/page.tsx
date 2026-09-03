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
            waveSpeed={0.15}
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
      
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">

          <div>
            <p className="mb-3 text-sm uppercase tracking-widest text-blue-700">
              01 / Par mani
            </p>

            <h2 className="text-4xl font-bold text-gray-300">
              Kas es esmu?
            </h2>
          </div>

          <div className="text-lg leading-8 text-gray-400">
            <p>
              Sauc Markuss — esmu programmēšanas tehniķis, itkā <br />
              Interesē datu drošība, Linux, kiberdrošība un serveri.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-5xl px-6 py-24 text-gray-300">

          <p className="mb-3 text-sm uppercase tracking-widest text-blue-700">
            02 / Prasmes
          </p>

          <h2 className="text-4xl font-bold">
            Zināšanas
          </h2>

          <div className="border border-white/10 p-4 mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            <div className="p-6">
              <h3 className="text-xl font-semibold">Valodas</h3>
              <p className="mt-3 text-gray-400">
                Python 5/10 <br />
                Php 6/10 <br />
                Javascript 6/10 <br />
                HTML ?
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold">Ietvari</h3>
              <p className="mt-3 text-gray-400">
                React, Next.js, Tailwind CSS, Flutter, utt.
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold">Linux</h3>
              <p className="mt-3 text-gray-400">
                Arch linux un Ubuntu server
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="px-6 py-20">
  <h2 className="mb-10 text-4xl font-bold">Mani projekti</h2>

  <div className="grid gap-8 md:grid-cols-2">

    {/* Projekts 1 */}
    <div className="rounded-xl border border-white/10 p-5 text-gray-300">
      <img
        src="/projects/project1.png"
        alt="Projekts 1"
        className="mb-5 h-60 w-full rounded-lg object-cover"
      />
 
      <h3 className="text-2xl font-bold text-blue-700">Sky-plane</h3>

      <p className="my-4 text-gray-400">
        Mājaslapa, kur var redzēt lidmašīnu lokācijas kartē.
      </p>

      <div className="flex gap-4">
        <a
          href="text-blue-700"
          className="text-blue-700 hover:underline"
        >
          GitHub
        </a>
      </div>
    </div>

    <div className="rounded-xl border border-white/10 p-5 text-gray-300">
      <img
        src="./assets/image2.png"
        alt="Projekts 2"
        className="mb-5 h-60 w-full rounded-lg object-cover"
      />

      <h3 className="text-2xl text-blue-700 font-bold">DropPod</h3>

      <p className="my-4 text-gray-400">
        Aplikācija, lai varētu sarakstīties starp dažādām ierīcēm lokālajā tīklā.
      </p>

      <div className="flex gap-4">
        <a
          href="#"
          className="text-blue-700 hover:underline"
        >
          GitHub
        </a>

        <a
          href="https://github.com/Lanheiv/DropPod"
          className="text-blue-700 hover:underline"
        >
        </a>
      </div>
    </div>

  </div>
</section>

    </main>
  );
}