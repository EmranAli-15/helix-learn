import { DockerImageIcon, SetupIcon } from '@/ui/Icons'
import Image from 'next/image'
import Link from 'next/link'
import dockerOne from '../../public/assests/docker-one.png'

export default function page() {
    return (
        <div className='flex flex-col gap-y-10'>
            <div>
                <h1 className='h1 underline'>ডকার (Docker) কেন ব্যবহার করবেন?</h1>
                <p className='p'>
                    সহজ কথায়, ডকার হলো এমন একটি প্ল্যাটফর্ম যা আপনার অ্যাপ্লিকেশন এবং সেটি চালানোর জন্য প্রয়োজনীয় সব টুলস (লাইব্রেরি, এনভায়রনমেন্ট, ডিপেন্ডেন্সি) একটি ছোট প্যাকেজের মধ্যে বন্দি করে রাখে। একে বলা হয় কন্টেইনার (Container)।
                    <br />
                    <br />
                    আপনার পিসিতে যদি Node.js এর 13v ইন্সটল করা থাকে, তবে সাধারণত 14v এর অন্য একটি প্রজেক্ট চালাতে গেলে সমস্যা হয়, এনভায়রনমেন্ট কনফ্লিক্ট হতে পারে। কিন্তু ডকার ব্যবহার করলে, একটি কন্টেইনারে Node.js 13v চলবে অন্য একটি কন্টেইনারে Node.js 14v চলবে। একটি কন্টেইনারের ভেতর কী হচ্ছে, তার প্রভাব অন্যটির ওপর পড়বে না।
                    <br />
                    <br />
                    এই সমস্যাই ডকার সমাধান করে। প্রতিটি কন্টেইনার এমনভাবে থাকে যেন তারা একেকটি মিনি-কম্পিউটার। একটি অ্যাপ যদি ক্রাশও করে, তবে সেটি অন্য অ্যাপ বা পুরো সিস্টেমের কোনো ক্ষতি করে না।
                    <br />
                    <br />
                    সংক্ষেপে: ডকার হলো একটি জাদুর বাক্সের মতো, যার ভেতর আপনি আপনার অ্যাপ এবং তার সব প্রয়োজনীয় জিনিস ভরে দিতে পারেন। এই বাক্সটি আপনি যেখানেই নিয়ে যাবেন (উইন্ডোজ, লিনাক্স বা ক্লাউড), আপনার অ্যাপটি ঠিক একইভাবে রান করবে।
                </p>
                <div className='flex justify-center'>
                    <Image className='w-[80%] md:w-1/2' height={400} width={400} alt='docker infrastructure' src={dockerOne}></Image>
                </div>
            </div>

            <div className="flex flex-col gap-y-2">
                <Link href="/docker/docker-desktop-setup-on-windows" className="flex items-center p-3 border-3 border-black gap-x-2">
                    <SetupIcon w={40}></SetupIcon>
                    <h1 className="h1">Docker Desktop setup on windows</h1>
                </Link>

                <Link href="/docker/docker-image" className="flex items-center p-3 border-3 border-black gap-x-2">
                    <DockerImageIcon w={40}></DockerImageIcon>
                    <h1 className="h1">Docker Image</h1>
                </Link>

                <Link href="/docker/docker-container" className="flex items-center p-3 border-3 border-black gap-x-2">
                    <DockerImageIcon w={40}></DockerImageIcon>
                    <h1 className="h1">Docker Container</h1>
                </Link>
            </div>
        </div>
    )
}
