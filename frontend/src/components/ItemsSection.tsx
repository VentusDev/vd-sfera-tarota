import { v4 as uuidv4 } from 'uuid';
import ItemCard from './ItemCard';
import { cn } from '@/lib/utils';


type ItemsSectionProps = {
    PRODUCTS_DATA: any[],
    title: string,
    className?: string;
}
const ItemsSection = ({PRODUCTS_DATA, title, className}:ItemsSectionProps) => {
  return (
    <section
    id='products'
    className='section'>

        <div className='container'>
            <h2 className='headline-2 text-end my-5'>
                {title}
            </h2>
            <div
                className={cn(
                    'grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]',
                    className
                )}
>
            {
                    PRODUCTS_DATA.map((item)=>(
                        <ItemCard item={item} key={uuidv4()} />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default ItemsSection