/**
 * Internal dependencies
 */
import * as globalStyles from './components/global-styles';
import { ExperimentalBlockEditorProvider } from './components/provider';
import { lock } from './lock-unlock';
import OffCanvasEditor from './components/off-canvas-editor';
import LeafMoreMenu from './components/off-canvas-editor/leaf-more-menu';

/**
 * Experimental @wordpress/block-editor APIs.
 */
export const experiments = {};
lock( experiments, {
	...globalStyles,
	ExperimentalBlockEditorProvider,
	LeafMoreMenu,
	OffCanvasEditor,
} );
