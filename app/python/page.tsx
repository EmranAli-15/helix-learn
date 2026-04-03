import Link from "next/link";
import { ErrorIcon } from "./../../ui/Icons";

export default function page() {

  return (
    <div className="flex flex-col gap-y-2">
      <Link href="/python/error-handling" className="flex items-center p-3 border-3 border-black gap-x-2">
        <ErrorIcon w={40}></ErrorIcon>
        <h1 className="h1">Error Handling</h1>
      </Link>
    </div>
  )
}
