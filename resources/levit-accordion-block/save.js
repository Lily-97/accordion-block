import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import AccordionContent from "./AccordionContent";

export default function save ({ attributes }) {
    const blockProps = useBlockProps.save({
        className: 'levit-accordion-items',
        [`data-accordion`]: attributes.accordion,
        [`data-containerkey`]: attributes.containerkey,
    });
    console.log(attributes)
    const innerBlocksProps = useInnerBlocksProps.save( blockProps, {} );
    return (
        <div { ...innerBlocksProps }>
            <AccordionContent items={attributes.accordion} container-key={attributes.containerkey}/>
        </div>
    )
}
