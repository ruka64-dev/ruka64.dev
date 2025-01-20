'use client';

import Image from 'next/image';
import * as motion from 'motion/react-client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Head from 'next/head';

export default function Hero() {
	return (
		<>
			<Head>
				<link rel='preload' href='/static/icon.webp' as='image' />
			</Head>
			<motion.div className='hello' initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
				<Image aria-hidden src='/static/icon.webp' alt='icon' width={160} height={160} quality={80} className='rounded-full' draggable='false' fetchPriority='high' loading='eager' />
				<h1 className='text-[2rem] font-light text-center'>ruka</h1>
				<h2 className='text-[1rem] font-light text-center'>I'm a 16y/o developer.</h2>
			</motion.div>
		</>
	);
}
