import { CodeEditor } from '@/components/JSEditor'
import Link from 'next/link'
import React from 'react'

export default function page() {

    const select = `
    -s--সাধারন select কুয়েরি।-s
    -kSELECT-k * -kFROM-k customers;
    -kSELECT-k age, address -kFROM-k customers;
    `
    const distinct = `
    -s--সেইম ডাটা অনেকগুলা করে থাকলেও একবার করেই দেখাবে।-s
    -kSELECT DISTINCT-k address -kFROM-k customers;

    -s--সেইম ডাটা কতবার রিপিট হয়েছে তার সংখ্যা দেখাবে।-s
    -kSELECT COUNT-k(-kDISTINCT-k address) -kFROM-k customers;
    `
    const where = `
    -s--দুইটা কন্ডিশন সত্যি হলে ডাটা দিবে।-s
    -kSELECT-k * -kFROM-k customers
    -kWHERE-k age >= 35 -kand-k address = 'Bangladesh';

    -s--যেকোন একটা কন্ডিশন সত্যি হেলেই ঐ ডাটা দিবে।-s
    -kSELECT-k * -kFROM-k customers
    -kWHERE-k age = 7 -kor-k address = 'Ireland';
    `
    const order = `
    -s--অ্যাসেন্ডিং অর্ডারে ডাটা দিবে।-s
    -kSELECT-k * -kFROM-k customers
    -kORDER BY-k age;

    -s--ডিসেন্ডিং অর্ডারে ডাটা দিবে।-s
    -kSELECT-k * -kFROM-k customers
    -kORDER BY-k age DESC;
    `
    const group = `
    -s--একটা টেবিলে অনেকগুলা জেলার ছাত্র আছে, যদি আমি জানতে চাই-s
    -s--কোন জেলা থেকে কতগুলা ছাত্র আছে তাহলে GROUP BY ব্যবহার করবো।-s
    -kSELECT COUNT-k(customer_id), address
    -kFROM-k customers
    -kGROUP BY-k(address);
    `
    const having = `
    -s--সাধারণত কন্ডিশন সেট করা হয় where দিয়ে। তবে group by ব্যবহার করার-s
    -s--পর এগ্রিগেট ফাংশন ব্যবহার করতে হলে where এর বদলে having লিখে করতে হয়।-s
    -kSELECT COUNT-k(customer_id), address
    -kFROM-k customers
    -kGROUP BY-k(address)
    -kHAVING COUNT-k(customer_id) < 2;
    `
    const lim_off = `
    -s--লিমিট দেই সর্বোচ্চ কয়টা ডাটা নিব তার জন্য আর-s
    -s--অফসেট হচ্ছে প্রথম থেকে কয়টা স্কিপ করবো-s
    -kSELECT COUNT-k(customer_id) as total, address
    -kFROM-k customers
    -kGROUP BY-k(address)
    -kORDER BY-k total -kDESC-k
    -kLIMIT-k 1;

    -kSELECT COUNT-k(customer_id) as total, address
    -kFROM-k customers
    -kGROUP BY-k(address)
    -kORDER BY-k total -kDESC-k
    -kLIMIT-k 1 -kOFFSET-k 1;
    `

    return (
        <div>
            <h1 className='h1 text-center'>Data Query Language</h1>
            <h2 className='h2'>INSERT QUERIES</h2>
            <div className='code'>
                <pre className='pre p1'>
                    <code dangerouslySetInnerHTML={{ __html: CodeEditor(select) }}></code>
                </pre>
                <Link className='text-sm text-yellow-500 p-2' href="/sql/ddl">go outside</Link>
            </div>
            <h2 className='h2'>DISTINCT QUERIES</h2>
            <div className='code'>
                <pre className='pre p1'>
                    <code dangerouslySetInnerHTML={{ __html: CodeEditor(distinct) }}></code>
                </pre>
                <Link className='text-sm text-yellow-500 p-2' href="/sql/ddl">go outside</Link>
            </div>
            <h2 className='h2'>WHERE QUERIES</h2>
            <div className='code'>
                <pre className='pre p1'>
                    <code dangerouslySetInnerHTML={{ __html: CodeEditor(where) }}></code>
                </pre>
                <Link className='text-sm text-yellow-500 p-2' href="/sql/ddl">go outside</Link>
            </div>
            <h2 className='h2'>ORDER QUERIES</h2>
            <div className='code'>
                <pre className='pre p1'>
                    <code dangerouslySetInnerHTML={{ __html: CodeEditor(order) }}></code>
                </pre>
                <Link className='text-sm text-yellow-500 p-2' href="/sql/ddl">go outside</Link>
            </div>
            <h2 className='h2'>GROUP QUERIES</h2>
            <div className='code'>
                <pre className='pre p1'>
                    <code dangerouslySetInnerHTML={{ __html: CodeEditor(group) }}></code>
                </pre>
                <Link className='text-sm text-yellow-500 p-2' href="/sql/ddl">go outside</Link>
            </div>
            <h2 className='h2'>HAVING QUERIES</h2>
            <div className='code'>
                <pre className='pre p1'>
                    <code dangerouslySetInnerHTML={{ __html: CodeEditor(having) }}></code>
                </pre>
                <Link className='text-sm text-yellow-500 p-2' href="/sql/ddl">go outside</Link>
            </div>
            <h2 className='h2'>LIMIT and OFFSET QUERIES</h2>
            <div className='code'>
                <pre className='pre p1'>
                    <code dangerouslySetInnerHTML={{ __html: CodeEditor(lim_off) }}></code>
                </pre>
                <Link className='text-sm text-yellow-500 p-2' href="/sql/ddl">go outside</Link>
            </div>
        </div>
    )
}
