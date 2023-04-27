import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div>
        <h1 className="text-lg text-indigo-500">RECIPES APP</h1>
      </div>
    </main>
  )
}
