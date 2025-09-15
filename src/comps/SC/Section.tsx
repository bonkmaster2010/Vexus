import PCardComp from './PcCard';
import spinner from '../../images/0s-200px-200px-unscreen.gif';
import { useRef, useEffect, useState } from 'react';
import { fetchAllProducts, type Product } from '../../utils/extras/Data.ts';
import { matchWord, normalize, slugify } from '../../utils/fns/extra.fns.ts';
import type { SectionIF } from '../../utils/interfaces/components/SC.if';
import '../../styles/Section.css';

function Section({ title, style, CartType, searchTerm }: SectionIF) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const scrollLeft = () => {
    if (!containerRef.current) return;
    const card = containerRef.current.querySelector('.section-card') as HTMLElement;
    if (!card) return;
    const gap = parseInt(getComputedStyle(card).marginRight) || 12;
    containerRef.current.scrollBy({ left: -card.offsetWidth - gap, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (!containerRef.current) return;
    const card = containerRef.current.querySelector('.section-card') as HTMLElement;
    if (!card) return;
    const gap = parseInt(getComputedStyle(card).marginRight) || 12;
    containerRef.current.scrollBy({ left: card.offsetWidth + gap, behavior: 'smooth' });
  };

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const allProducts = await fetchAllProducts();
      const filtered = searchTerm === 'daily-offers'
        ? allProducts
        : allProducts.filter(p => {
            if (!p.real_category) return false;
            const categories = p.real_category.split('›').map(c => normalize(c.trim()));
            return categories.some(c => matchWord(c, searchTerm));
          });
      setFilteredData(filtered.slice(0, 15)); 
      setLoading(false);
    };

    loadProducts();
  }, [searchTerm]);

  if (filteredData.length <= 1) return null;

  return (
    <div className={style ? style : 'section-cont'}>
      <h2 className='section-title'>{title}</h2>

      <div className='section-btns'>
        <button onClick={scrollLeft}>❮</button>
        <button id='right-btn-pmo' onClick={scrollRight}>❯</button>
      </div>

      <div className='section-products' ref={containerRef}>
        {filteredData.map((obj: Product) => (
          !loading ? <PCardComp
            key={obj.id}
            product={obj}
            CartType={CartType}
            route={slugify(obj.name)}
            style="section-card"
            src={obj.image}
            title={obj.name}
            price={obj.discount_price}
            salePrice={obj.actual_price}
          />
          :
          <PCardComp
            key={obj.id}
            product={obj}
            CartType={CartType}
            route={''}
            style="section-card gif"
            src={spinner}
            title={'......'}
            price={'......'}
            salePrice={''}
          />
        ))}
      </div>
    </div>
  );
}

export default Section;
