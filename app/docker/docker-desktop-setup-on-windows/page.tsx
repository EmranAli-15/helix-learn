import React from 'react'

export default function page() {
  return (
    <div>
      <h1 className='h1 underline'>উইন্ডোজ পিসিতে যেভাবে ডকার ব্যাবহার করতে হয়ঃ</h1>
      <div className='p'>
        <p>উইন্ডোজ ১০ বা ১১-এ WSL 2 (Windows Subsystem for Linux) ইন্সটল করা থাকা জরুরি। ডকার মূলত লিনাক্স কার্নেল ব্যবহার করে চলে। কিভাবে করবো তা নিচে ধাপে ধাপে বলা হয়েছে।</p>

        <br />

        <p>● মাদার্বোডের বায়োস থেকে ভার্চুয়ালাইজেশন এনাবল করুন।</p>

        <br />

        <p>● স্টার্ট মেনুতে সার্চ করুন "Turn windows features on or off" তারপর নিচের দুটোয় চেকমার্ক আছে কিনা দেখুন, না থাকলে চেক দিয়ে দিন। ওকে করে দিন, এখন পিসি রিস্টার্ট নিতে পারে।</p>

        <br />

        <div className="mockup-code w-full">
          <pre data-prefix="~"><code>virtual machine platform</code></pre>
          <pre data-prefix="~"><code>windows subsystem for linux</code></pre>
        </div>

        <br />

        <p>● অ্যাডমিনিস্ট্রেটর হিসেবে পাওয়ারশেল রান করুন। এখন নিচের ২টা কমান্ড রান করুন।</p>

        <br />

        <div className="mockup-code w-full">
          <pre data-prefix="~"><code>wsl --install --no-distribution</code></pre>
          <pre data-prefix="~"><code>wsl --install -d Ubuntu</code></pre>
        </div>

        <br />

        <p>● উপরের কাজ হয়ে গেলে ইউনিক্স ইউজার নেম আর পাসওয়ার্ড চাইবে, দিয়ে দিন।</p>

        <br />

        <p>● এখন ডকার ডেস্কটপ ডাউনলোড করুন, হয়ে গেলে পিসি একবার রিস্টার্ট দিয়ে নিন। এখন ডকার ডেস্কটপ ইন্সটল করে ওপেন করুন। এই মুহূর্তে wsl update চাইতে পারে। তাই cmd ওপেন করে নিচের কমান্ডটি রান করুন। হয়ে গেলে আবার ওপেন করুন, এখানে একটু সময় নিতে পারে।</p>

        <br />

        <div className="mockup-code w-full">
          <pre data-prefix="~"><code>wsl --update</code></pre>
        </div>

        <br />

      </div>
    </div>
  )
}
