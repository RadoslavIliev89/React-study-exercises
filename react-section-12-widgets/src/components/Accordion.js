import { Fragment, useState } from 'react'

const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState('');

    const onTitleClick = (index) => {
        
        setActiveIndex(index)
    }

    const renderedItems = items.map((x, index) =>{
        const active= index===activeIndex?'active':''
       return (<Fragment key={x.title} >
            <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                <i className="dropdown icon"></i>
                {x.title}
            </div>
            <div className={`content ${active}`}>
                <p>{x.content}</p>
            </div>
        </Fragment>);
    })

    return (
        <div className="ui styled accordion" style={{ marginTop: '10px', marginLeft: '10px' }}>
            {renderedItems}
            </div>
    );
}
export default Accordion;