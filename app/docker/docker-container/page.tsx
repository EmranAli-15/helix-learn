import React from 'react'

export default function page() {
    return (
        <div>
            <h1 className='h1 underline'>ডকার কন্টেইনারঃ</h1>

            <p>যখন আপনি একটি ইমেজকে রান (Run) করেন, তখন সেটি একটি কন্টেইনারে পরিণত হয়। কন্টেইনার হলো ইমেজের একটি লাইভ বা চলন্ত সংস্করণ। একটি ইমেজ থেকে আপনি যত খুশি কন্টেইনার তৈরি করতে পারেন। এটি আইসোলেটেড বা আলাদা থাকে—একটি কন্টেইনারের সমস্যা অন্যটিতে প্রভাব ফেলে না।</p>

            <br />

            <h1 className='h1 underline'>কন্টেইনারের অবস্থা দেখা ও নিয়ন্ত্রণঃ</h1>

            <p>চলমান কন্টেইনার দেখাঃ</p>
            <p className='cli-one'><span className='cli-two'>~</span>docker ps</p>

            <br />

            <p>সব কন্টেইনার (বন্ধগুলোসহ) দেখাঃ</p>
            <p className='cli-one'><span className='cli-two'>~</span>docker ps -a</p>

            <br />

            <p>নতুন কন্টেইনার তৈরি ও রান করাঃ</p>
            <p className='cli-one'><span className='cli-two'>~</span>docker run -d -p 8080:5000 --name flask-app-container-one flask-app</p>
            <p>এখানে 8080 হচ্ছে হোস্ট পোর্ট আর 5000 হচ্ছে মেইন পোর্ট। flask-app-container-one হচ্ছে নতুন কন্টেইনারের নাম।</p>

            <br />

            <p>কন্টেইনার বন্ধ করাঃ</p>
            <p className='cli-one'><span className='cli-two'>~</span>docker stop container_id_or_name</p>

            <br />

            <p>বন্ধ কন্টেইনার চালু করাঃ</p>
            <p className='cli-one'><span className='cli-two'>~</span>docker start container_id_or_name</p>

            <br />

            <p>কন্টেইনার ডিলিট করাঃ</p>
            <p className='cli-one'><span className='cli-two'>~</span>docker rm container_id_or_name</p>
        </div>
    )
}
