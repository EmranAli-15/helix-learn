import { SQLIcon } from '@/ui/Icons'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className="flex flex-col gap-y-2">
      <Link href="./sql/ddl" className="flex items-center p-3 border-3 border-black gap-x-2">
        <SQLIcon w={40}></SQLIcon>
        <h1 className="h1">Data Definition Language</h1>
      </Link>
      <Link href="./sql/dml" className="flex items-center p-3 border-3 border-black gap-x-2">
        <SQLIcon w={40}></SQLIcon>
        <h1 className="h1">Data Manipulation Language</h1>
      </Link>
      <Link href="./sql/dql" className="flex items-center p-3 border-3 border-black gap-x-2">
        <SQLIcon w={40}></SQLIcon>
        <h1 className="h1">Data Query Language</h1>
      </Link>
    </div>
  )
}
