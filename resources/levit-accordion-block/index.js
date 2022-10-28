import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import Edit from './edit';
import save from './save';

import json from './block.json';
const blockName = json.name;

registerBlockType( blockName, {
    edit: Edit,
    save,
} );
