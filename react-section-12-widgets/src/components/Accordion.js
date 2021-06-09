import { Fragment, useState } from 'react'

const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState('');

    const onTitleClick = (index) => {

        setActiveIndex(index)
    }
console.log(items);
    const renderedItems = items.map((x, index) => {
        const active = index === activeIndex ? 'active' : ''
        return (<Fragment key={x.pageid} >
            <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                <div className="right floated content">
                    <a href={`http://en.wikipedia.org?curid=${x.pageid}`} className="ui button">Go</a>
                </div>
                <i className="dropdown icon"></i>
                {x.title}
            </div>
            <div className={`content ${active}`}>
                <span dangerouslySetInnerHTML={{__html:x.snippet}}></span>
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