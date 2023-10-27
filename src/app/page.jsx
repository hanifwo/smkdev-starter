import Image from 'next/image'
import logo from '@/assets/logo.svg'

export default function Home() {
  return (
    <>
    <header className="container mx-auto">
    <nav className="flex justify-between">
      <Image src={logo} alt="logo" width="100" height="100"/>
      <div>
        <input type="text" placeholder="Searching" />
      </div>
      <div>
        <button>Sign In</button>
      </div>
    </nav>
    </header>
    <div>

    </div>
    </>

  )
}
