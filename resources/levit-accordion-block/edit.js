import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    useInnerBlocksProps,
    InspectorControls,
    InnerBlocks,
} from '@wordpress/block-editor';
import {
    PanelBody,
    TextareaControl,
    TextControl,
} from '@wordpress/components';
import AccordionContent from './AccordionContent';

export default function Edit({
    attributes: {accordion, containerkey},
    setAttributes,
}) {
    if(!containerkey || containerkey === '') {
        const newKey = Math.floor(Math.random() * 1000000000);
        setAttributes({containerkey: newKey});
    }
    const blockProps = useBlockProps({
        className: 'levit-accordion-items',
        [`data-accordion`]: accordion,
        [`data-containerkey`]: containerkey,
    });

    const innerBlocksProps = useInnerBlocksProps( blockProps, {
        renderAppender: InnerBlocks.ButtonBlockAppender,
    } );

    const changeHandler = (itemValue, itemIndex, itemKey) => {
        let accordionItems = [...accordion];
        if(itemValue !== accordionItems[itemIndex][itemKey] && itemValue !== '') {
            accordionItems[itemIndex][itemKey] = itemValue;
            setAttributes({accordion: accordionItems});
        }

    };

    const addNewItem = () => {
        let accordionItems = [...accordion];
        accordionItems.push({"title": '', "description": ''});
        setAttributes({accordion: accordionItems});
    };

    const removeItem = (k) => {
        console.log(k)
        let accordionItems = [...accordion];
        accordionItems = accordionItems.filter((a, i) => {
            return i !== k;
        });
        setAttributes({accordion: accordionItems});
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __( 'Accordion Settings', 'levit-accordion-block' ) } initialOpen={ true } className={ 'levit-accordion-settings' }>
                    {accordion.map((item, index) => {
                        return (
                            <div key={index} className="accordion-group-container" style={{
                                "border": "1px solid #ccc",
                                "border-radius": "5px",
                                "margin-bottom": "10px",
                                "padding": "10px"
                            }}>
                                <div className="trash" style={{"float": "right"}}>
                                    <a href="javascript:;" style={{"color": "#b32d2e"}} className="submitdelete"  onClick={(e) => removeItem(index)}>{__("Remove", 'levit-accordion-block')}</a>
                                </div>
                                <TextControl label={ __( "Title", 'levit-accordion-block' ) }
                                             value={accordion[index].title}
                                             onChange={ (value) => changeHandler(value, index,'title') }
                                />
                                <TextareaControl label={ __( "Description", 'levit-accordion-block' ) }
                                             value={accordion[index].description}
                                             onChange={ (value) => changeHandler(value, index,'description') }
                                />
                            </div>)
                    })}
                    <div style={{"text-align": "center"}}>
                        <button className="button button-primary" onClick={addNewItem}>+</button>
                    </div>
                </PanelBody>
            </InspectorControls>
            <div { ...innerBlocksProps }>
                <AccordionContent items={accordion} container-key={containerkey}/>
            </div>
        </>
    )
}
