import Link from "next/link";
import { JSIcon, PYIcon, SQLIcon } from "./../ui/Icons";

export default function page() {

  return (
    <div className="flex flex-col gap-y-2">
      <Link href="/javascript" className="flex items-center p-3 border-3 border-black gap-x-2">
        <JSIcon w={40}></JSIcon>
        <h1 className="h1">JavaScript</h1>
      </Link>

      <Link href="/python" className="flex items-center p-3 border-3 border-black gap-x-2">
        <PYIcon w={40}></PYIcon>
        <h1 className="h1">Python</h1>
      </Link>

      <Link href="/sql" className="flex items-center p-3 border-3 border-black gap-x-2">
        <SQLIcon w={40}></SQLIcon>
        <h1 className="h1">Srelational Database</h1>
      </Link>
    </div>
  )
}
