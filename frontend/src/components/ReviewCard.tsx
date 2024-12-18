import { v4 as uuidv4 } from 'uuid';


const ratings = new Array(5);
ratings.fill({
	icon: '★',
	style: { fontVariationSettings: '"FILL" 1' },
});

type ReviewCardProps = {
	imgSrc: string;
	company: string;
	content: string;
	name: string;
};

const ReviewCard = ({ imgSrc, company, content, name }: ReviewCardProps) => {
	return (
        <div className='glass-bg p-5 rounded-xl w-[300px] flex flex-col lg:w-[500px]'>

      
		<div className='flex items-center gap-1 mb-3'>
			{ratings.map(({ icon, style }) => (
				<span key={uuidv4()} className=' text-yellow-300 text-[18px]' style={style}>
					{icon}
				</span>
			))}
		</div>
        <p className='text-zinc-400 mb-8'>
            {content}
        </p>
        <div className="flex items-center gap-2 mt-auto">
            <figure className='img-box rounded-lg'>
                <img src={`/img/reviews/${imgSrc}`} alt={name} width={44} height={44} loading='lazy' className='img-cover max-h-[60px] max-w-[60px]'/>
            </figure>

            <div>
                <p>
                    {name}
                </p>
                <p className='text-xs text-zinc-400 tracking-wide'>
                    {company}
                </p>
            </div>
        </div>
        </div>
	);
};

export default ReviewCard;
