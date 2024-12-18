import { cn } from '@/lib/utils';

type SkillCardProps = {
	imgSrc: string;
	label: string;
	desc: string;
	className?: string;
};

const SkillCard = ({ imgSrc, label, desc, className }: SkillCardProps) => {
	return (
		<div
			className={cn(
				'flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group',
				className
			)}
		>
			<figure className='bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors'>
				<img src={imgSrc?imgSrc:'/img/logo.svg'} width={32} height={32} alt={label} />
			</figure>
			<div>
				<h3>{label}</h3>
				<p className=''>{desc}</p>
			</div>
		</div>
	);
};

export default SkillCard;
