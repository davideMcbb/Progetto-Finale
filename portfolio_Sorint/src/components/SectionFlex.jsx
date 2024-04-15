import React from 'react';
import Item from './Item';
import { ItemData } from '../data';

const SectionFlex = () => {
    const articoleData = ItemData.filter(item => item.tag === 'article').slice(0,5);

    console.log(articoleData)

    return(
        <section className='section'>
            {articoleData.map( item => <Item key={item.id} data={item} />)}
        </section>
    );
};

export default SectionFlex;