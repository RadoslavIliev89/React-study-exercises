import { Fragment } from 'react'
const Accordion = ({ items }) => {
    const onTitleClick = (index) => {
        console.log('Title was Clicked',index);
    }
    const renderedItems = items.map((x, index) =>

        <Fragment key={x.title} >
            <div className="title active" onClick={() =>onTitleClick(index)}>
                <i className="dropdown icon"></i>
                {x.title}
            </div>
            <div className="content active">
                <p>{x.content}</p>
            </div>
        </Fragment>
    )

    return (
        <div className="ui styled accordion" style={{ marginTop: '10px', marginLeft: '10px' }}>{renderedItems}</div>
    );
}
export default Accordion;