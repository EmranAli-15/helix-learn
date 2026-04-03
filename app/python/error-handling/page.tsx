import { CodeEditor } from '@/components/JSEditor'
import React from 'react'

export default function page() {
  const code1 = `
  -ktry-k:
    -vx-v = 10/0
  -kexcept-k ZeroDivisionError:
    -fprint-f(-s"You can't divide by zero!"-s)
  `


  const code2 = `
  -kdef-k -ffun-f(-vx-v):
    -ktry-k:
      -kreturn-k -vx-v/0
    -kexcept-k:
      -kraise-k Exception(-s"Don't do this."-s)

  
  -ktry-k:
    -fprint-f(-ffun-f(10))
  -kexcept-k Exception -kas-k e:
    -fprint-f(e)
  `


  return (
    <div>
      <p>
        এরর হ্যান্ডেলিং অত্যান্ত গুরুত্বপূর্ণ একটা বিষয়। যেমন একটি ফাংশন কাজ করছে, তো সেখানে হয়তো কোন নিউমেরিক্যাল ক্যালকুলেশন হচ্ছে অথবা ডাটা আনা হচ্ছে অন্য কোথাও থেকে। এমন অবস্থায় যেকোন সমস্যা হতে পারে মানে এরর হতে পারে আর প্রোগ্রাম বন্ধ হয়ে যেতে পারে। তো যেসকল কাজে আন-এক্সপেক্টেড ঘটনা ঘটার সম্ভাবনা আছে সেখানে এটা ঠিকভাবে হ্যান্ডেল করতে হবে, আর <span className='code-line'>পাইথনে আমরা এটা try-except দিয়ে করে থাকি।</span> <span className='code-line'>try ব্লকের ভিতরে আমরা আমাদের কাজ করবো</span>, সেখানে যেসকল এরর হতে পারে সেগুলো আমরা <span className='code-line'>except</span> এর ভিতর ধরবো।
      </p>


      <div className='code'>
        <pre className='pre p1'>
          <code dangerouslySetInnerHTML={{ __html: CodeEditor(code1) }}></code>
        </pre>
      </div>


      <p>
        আমরাতো উপরে সরাসরি এররটা প্রিন্ট করেছি, কিন্তু যদি এমন হয় যে একটা ফাংশনে এই এরর হচ্ছে আর আমরা সেই ফাংশন থেকে <span className='code-line'>কিছু একটা রিটার্ন এক্সপেক্ট করছি তখন raise ব্যবহার করতে হবে।</span> এখান থেকেই আমরা যেই মেসেজ রিটার্ন করতে চাই বলে দিব। আর এর নিচের কোন কোড রান করবে না। এখানে রিটার্ন হবে।
      </p>

      <div className='code'>
        <pre className='pre p1'>
          <code dangerouslySetInnerHTML={{ __html: CodeEditor(code2) }}></code>
        </pre>
      </div>
    </div>
  )
}
