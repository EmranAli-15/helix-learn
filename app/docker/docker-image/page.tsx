import { CodeEditor } from '@/components/JSEditor'
import React from 'react'

export default function page() {

    const code1 = `
    -kfrom-k flask -kimport-k Flask
    app = Flask(__name__)

    @app.route('/')
    -kdef-k -fhello-f():
        -kreturn-k -s"Hello from Dockerized Flask App!"-s

    -kif-f __name__ = "__main__":
        app.run(host='0.0.0.0', port=-v5000-v)
    `

    const code2 = `
    # ১. পাইথন বেস ইমেজ ব্যবহার করছি
    -kFROM-k python:3.9-slim

    # ২. কন্টেইনারের ভেতরে কাজের ফোল্ডার সেট করছি
    -kWORKDIR-k /app

    # ৩. আমাদের app.py ফাইলটি কন্টেইনারের ভেতরে কপি করছি
    -kCOPY-k app.py .

    # ৪. ফ্লাস্ক ইন্সটল করছি
    -kRUN-k pip install flask

    # ৫. অ্যাপটি কোন পোর্টে চলবে
    -kEXPOSE-k -v5000-v

    # ৬. কন্টেইনার চালু হলে এই কমান্ডটি চলবে
    -kCMD-k ["python", "app.py"]
    `

    return (
        <div>
            <h1 className='h1 underline'>ডকার ইমেজ কি?</h1>

            <p className='p'>ইমেজ হলো একটি Read-only ফাইল বা টেম্পলেট। এতে আপনার অ্যাপ্লিকেশন চালানোর জন্য যা যা প্রয়োজন (যেমন: কোড, রানটাইম, লাইব্রেরি, এনভায়রনমেন্ট ভেরিয়েবল) সবকিছু প্যাকেজ করা থাকে। এটি স্থির থাকে (Static), অর্থাৎ রান করার আগে এটি পরিবর্তন হয় না। এটি একটি ব্লু-প্রিন্ট বা রেসিপির মতো।</p>

            <br />

            <p>ইমেজ লিস্ট দেখা:</p>
            <p className='cli-one'><span className='cli-two'>~</span>docker images</p>


            <br />

            <p>ইমেজ ডিলিট করা:</p>
            <p className='cli-one'><span className='cli-two'>~</span>docker rmi image_id_or_name</p>

            <br />

            <p>ডকার হাব থেকে ইমেজ নামানো (রান না করে):</p>
            <p className='cli-one'><span className='cli-two'>~</span>docker pull python</p>

            <br />
            <br />

            <h1 className='h1 underline'>এখন দেখবো কিভাবে ডকার ইমেজ তৈরি করতে হয়।</h1>

            <p>প্রথমেই আসবে ডকারফাইল (Dockerfile) কী? ডকারফাইল হলো একটি সাধারণ টেক্সট ফাইল যাতে একগুচ্ছ ইনস্ট্রাকশন বা কমান্ড লেখা থাকে। ডকার ইঞ্জিন এই ফাইলটি পড়ে ধাপে ধাপে একটি ইমেজ তৈরি করে।</p>

            <br />

            <p>একটি ডকারফাইলে সাধারণত নিচের ৫-৬টি কমান্ড সবথেকে বেশি ব্যবহৃত হয়:</p>
            <p className='ml-3'>১. FROM: আপনার ইমেজটি কোন বেস ইমেজের ওপর ভিত্তি করে তৈরি হবে? (যেমন: python বা node)</p>
            <p className='ml-3'>২. WORKDIR: কন্টেইনারের ভেতরে কোন ফোল্ডারে আপনার কোড থাকবে? (এটি অনেকটা cd কমান্ডের মতো কাজ করে)</p>
            <p className='ml-3'>৩. COPY: আপনার পিসি (Host) থেকে ফাইলগুলো কন্টেইনারের ভেতরে কপি করা।</p>
            <p className='ml-3'>৪. RUN: ইমেজ তৈরির সময় কোনো কমান্ড চালানো (যেমন: লাইব্রেরি ইন্সটল করা pip install বা npm install)।</p>
            <p className='ml-3'>৫. EXPOSE: কন্টেইনারটি কোন পোর্টে চলবে তা জানানো।</p>
            <p className='ml-3'>৬. CMD: কন্টেইনারটি স্টার্ট হওয়ার সময় কোন কমান্ডটি রান করবে (যেমন: python app.py)।</p>

            <br /><br />

            <h1 className='h1 underline'>এখন একটি প্রাক্টিক্যাল প্রোজেক্টের ইমেজ বানাবো।</h1>

            <p>আপনার পিসিতে docker-test নামে একটি ফোল্ডার খুলুন। তার ভেতরে দুটি ফাইল তৈরি করুন:</p>

            <p>ফাইল ১ঃ app.py</p>

            <div className='code'>
                <pre className='pre p1'>
                    <code dangerouslySetInnerHTML={{ __html: CodeEditor(code1) }}></code>
                </pre>
            </div>

            <p>ফাইল ২ঃ Dockerfile (কোনো এক্সটেনশন ছাড়া, শুধু Dockerfile নামে সেভ করুন)</p>

            <div className='code'>
                <pre className='pre p1'>
                    <code dangerouslySetInnerHTML={{ __html: CodeEditor(code2) }}></code>
                </pre>
            </div>

            <br /><br />
            <p>এখন আমরা ইমেজ বিল্ড করবো।</p>
            <p className='cli-one'><span className='cli-two'>~</span>docker build -t my-flask-app .</p>
            <p>(এখানে -t মানে ট্যাগ বা নাম, আর . মানে বর্তমান ডিরেক্টরিতে Dockerfile আছে)</p>

            <br />

            <p>কন্টেইনার রান করা:</p>
            <p className='cli-one'><span className='cli-two'>~</span>docker run -d -p 5000:5000 my-flask-app</p>

            <br />
            <p>এখন আপনার ব্রাউজারে localhost:5000 এ গিয়ে দেখুন! আপনার নিজের তৈরি করা ডকার ইমেজ এখন কন্টেইনার হিসেবে চলছে।</p>

        </div>
    )
}
