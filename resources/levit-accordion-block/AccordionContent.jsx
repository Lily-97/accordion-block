export default function AccordionContent({items, containerKey}) {
    return (
        <div className="levit-accordion-container" id={`accordion-${containerKey}`}>
            <div className="levit-accordion--items">
                {items.map((item, index) => {
                    let randKey = 'accordion-' + index + '-' + containerKey;
                    return (<div className="levit-accordion-item-container">
                        <div className={`levit-accordion-item-heading ${index > 0 ? 'inactive' : 'active'}`} data-key={randKey} data-container={containerKey}>
                            {item.title}
                        </div>
                        <div className={`levit-accordion-item-content`}
                             data-rand={randKey}>
                            <div dangerouslySetInnerHTML={{__html: item.description}} />
                        </div>
                    </div>)
                })}
            </div>
        </div>
    )
}