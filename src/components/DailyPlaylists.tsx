import Image from 'next/image'

export function DailyPlaylists() {
  return (
    <div className="grid grid-cols-8 gap-4 mt-4">
      <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
        <Image src="/album.png" className="w-full" width={104} height={104} alt="Capa do álbum" />
        <strong className="font-semibold">Daily Mix 1</strong>
        <span className="text-sm text-zinc-400">Gorillaz, Twenty One Pilots, Yellowcard e mais</span>
      </a>
      <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
        <Image src="/album.png" className="w-full" width={104} height={104} alt="Capa do álbum" />
        <strong className="font-semibold">Daily Mix 2</strong>
        <span className="text-sm text-zinc-400">Led Zeppelin, Helloween, Bon Jovi e mais</span>
      </a>
      <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
        <Image src="/album.png" className="w-full" width={104} height={104} alt="Capa do álbum" />
        <strong className="font-semibold">Daily Mix 3</strong>
        <span className="text-sm text-zinc-400">The Notorious B.I.G., Migos, Colby ODonis e mais</span>
      </a>
      <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
        <Image src="/album.png" className="w-full" width={104} height={104} alt="Capa do álbum" />
        <strong className="font-semibold">Daily Mix 5</strong>
        <span className="text-sm text-zinc-400">Jorge & Matheus, Matheus e Kauan e mais</span>
      </a>
      <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
        <Image src="/album.png" className="w-full" width={104} height={104} alt="Capa do álbum" />
        <strong className="font-semibold">Daily Mix 6</strong>
        <span className="text-sm text-zinc-400">A Samurai in Tokyo e mais</span>
      </a>
    </div>
  )
}