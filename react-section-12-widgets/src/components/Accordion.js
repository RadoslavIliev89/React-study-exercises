const Accordion = ({ items }) => {

    const renderedItems = items.map((x) => 

        <div key={x.title}>
            <div className="title active">
                <i className="dropdown icon"></i>
                {x.title}
            </div>
            <div className="content active">
                <p>{x.content}</p>
            </div>
        </div>
    )

    return (
        <div className="ui styled accordion">{renderedItems}</div>
    );
}
export default Accordion;