import { CodeEditor } from '@/components/JSEditor'
import Link from 'next/link'
import React from 'react'

export default function page() {

    const insert = `
    -kINSERT INTO-k customers(name, age, address, height)
    -kVALUES-k
	    ('Affan', 9, 'Ireland', 4),
	    ('Sayeem', 8, 'Ireland', 3),
	    ('Sebastian', 10, 'New York', 4),
	    ('Emran', 35, 'Bangladesh', 6),
	    ('Ridoy', 35, 'Bangladesh', 5);
        
    -kINSERT INTO-k orders(customer_id)
    -kVALUES-k
	    (2),
	    (3),
	    (5),
	    (5);
    `
    const update = `
    -s--update a record-s
    -kUPDATE-k customers
    -kSET-k weight = 33, height = 10
    -kWHERE-k customer_id = 1;
    `

    const upsert = `
    -s--upsert a row - unique key is important, here used primary key-s
    -kINSERT INTO-k customers(customer_id, name, age, address, height)
    -kVALUES-k(1, 'Affan', 8, 'Ireland', 4.3)
    -kON CONFLICT-k (customer_id)
    -kDO UPDATE SET-k age=EXCLUDED.age, height=EXCLUDED.height, address=EXCLUDED.address;
    `

    const del = `
    -s--delete a record-s
    -kDELETE FROM-k customers
    -kWHERE-k customer_id = 6;
    `

    return (
        <div>
            <h2 className='h2'>INSERT QUERIES</h2>
            <div className='code'>
                <pre className='pre p1'>
                    <code dangerouslySetInnerHTML={{ __html: CodeEditor(insert) }}></code>
                </pre>
                <Link className='text-sm text-yellow-500 p-2' href="/sql/ddl">go outside</Link>
            </div>
            <h2 className='h2'>UPDATE QUERIES</h2>
            <div className='code'>
                <pre className='pre p1'>
                    <code dangerouslySetInnerHTML={{ __html: CodeEditor(update) }}></code>
                </pre>
                <Link className='text-sm text-yellow-500 p-2' href="/sql/ddl">go outside</Link>
            </div>
            <h2 className='h2'>UPSERT QUERIES</h2>
            <div className='code'>
                <pre className='pre p1'>
                    <code dangerouslySetInnerHTML={{ __html: CodeEditor(upsert) }}></code>
                </pre>
                <Link className='text-sm text-yellow-500 p-2' href="/sql/ddl">go outside</Link>
            </div>
            <h2 className='h2'>DELETE QUERIES</h2>
            <div className='code'>
                <pre className='pre p1'>
                    <code dangerouslySetInnerHTML={{ __html: CodeEditor(del) }}></code>
                </pre>
                <Link className='text-sm text-yellow-500 p-2' href="/sql/ddl">go outside</Link>
            </div>
        </div>
    )
}
