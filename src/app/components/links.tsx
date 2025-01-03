import { FaGithub, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiQiita } from 'react-icons/si';
import * as motion from 'motion/react-client';
import { Tooltip } from './tooltip';

const CopyToClipboard = async (str: string) => {
	await global.navigator.clipboard.writeText(str);
};

export default function Links() {
	return (
		<div className='flex flex-row flex-wrap justify-center gap-3'>
			<motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, delay: 0.6, type: 'spring', bounce: 0.7 }}>
				<a href='https://github.com/ruka64-dev/'>
					<FaGithub className='size-7 transition-colors text-gray-400 hover:text-white active:text-gray-300' data-tooltip-id='test' data-tooltip-content='ruka64-dev' />
				</a>
			</motion.div>
			<motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, delay: 0.7, type: 'spring', bounce: 0.7 }}>
				<a href='https://discord.com/users/760731506448138251'>
					<FaDiscord className='size-7 transition-colors text-gray-400 hover:text-white active:text-gray-300' data-tooltip-id='test' data-tooltip-content='ruka64___' />
				</a>
			</motion.div>
			<motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, delay: 0.8, type: 'spring', bounce: 0.7 }}>
				<a href='https://qiita.com/ruka64'>
					<SiQiita className='size-7 transition-colors text-gray-400 hover:text-white active:text-gray-300' data-tooltip-id='test' data-tooltip-content='ruka64' />
				</a>
			</motion.div>
			<motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, delay: 0.9, type: 'spring', bounce: 0.7 }}>
				<a href='https://x.com/ruka64_'>
					<FaXTwitter className='size-7 transition-colors text-gray-400 hover:text-white active:text-gray-300' data-tooltip-id='test' data-tooltip-content='@ruka64_' />
				</a>
			</motion.div>
			<Tooltip id='test' />
		</div>
	);
}
