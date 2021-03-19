import { BaseEvent } from '../events/index';
import {
    animationConfig
} from '../animation/fx';

import {
    positionConfig
} from '../animation/position';

import {
    TElement
} from '../core/element';

import {
    template
} from '../core/templates/template';

import dxOverlay, {
    dxOverlayAnimation,
    dxOverlayOptions,
    ShownEvent,
    HidindEvent,
    HiddenEvent,
    ShowingEvent,
    ContentReadyEvent,
    ResizeEvent,
    ResizeEndEvent,
    ResizeStartEvent
} from './overlay';

export interface TitleRenderedEvent<T> extends BaseEvent<T> {
    titleElement: TElement
}
export {
    ShownEvent,
    HidindEvent,
    HiddenEvent,
    ShowingEvent,
    ContentReadyEvent,
    ResizeEvent,
    ResizeEndEvent,
    ResizeStartEvent
}
export interface dxPopupOptions<T = dxPopup> extends dxOverlayOptions<T> {
    /**
     * @docid
     * @default { show: { type: 'slide', duration: 400, from: { position: { my: 'top', at: 'bottom', of: window } }, to: { position: { my: 'center', at: 'center', of: window } } }, hide: { type: 'slide', duration: 400, from: { position: { my: 'center', at: 'center', of: window } }, to: { position: { my: 'top', at: 'bottom', of: window } } }} [for](iOS)
     * @prevFileNamespace DevExpress.ui
     * @public
     * @type object
     */
    animation?: dxPopupAnimation;
    /**
     * @docid
     * @default undefined
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    container?: string | TElement;
    /**
     * @docid
     * @default false
     * @default true [for](desktop)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    dragEnabled?: boolean;
    /**
     * @docid
     * @default true [for](desktop)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    focusStateEnabled?: boolean;
    /**
     * @docid
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    fullScreen?: boolean;
    /**
     * @docid
     * @type_function_return number|string
     * @fires dxPopupOptions.onResize
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    height?: number | string | (() => number | string);
    /**
     * @docid
     * @extends Action
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onResize?: ((e: ResizeEvent<T>) => any);
    /**
     * @docid
     * @extends Action
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onResizeEnd?: ((e: ResizeEndEvent<T>) => any);
    /**
     * @docid
     * @extends Action
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onResizeStart?: ((e: ResizeStartEvent<T>) => any);
    /**
     * @docid
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 titleElement:dxElement
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onTitleRendered?: ((e: TitleRenderedEvent<T>) => any);
    /**
     * @docid
     * @type Enums.PositionAlignment|positionConfig|function
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    position?: 'bottom' | 'center' | 'left' | 'left bottom' | 'left top' | 'right' | 'right bottom' | 'right top' | 'top' | positionConfig | Function;
    /**
     * @docid
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    resizeEnabled?: boolean;
    /**
     * @docid
     * @default false
     * @default true [for](desktop)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showCloseButton?: boolean;
    /**
     * @docid
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showTitle?: boolean;
    /**
     * @docid
     * @default ""
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    title?: string;
    /**
     * @docid
     * @default "title"
     * @type_function_param1 titleElement:dxElement
     * @type_function_return string|Element|jQuery
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    titleTemplate?: template | ((titleElement: TElement) => string | TElement);
    /**
     * @docid
     * @type Array<Object>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    toolbarItems?: Array<dxPopupToolbarItem>;
    /**
     * @docid
     * @type_function_return number|string
     * @fires dxPopupOptions.onResize
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    width?: number | string | (() => number | string);
}
export interface dxPopupAnimation extends dxOverlayAnimation {
    /**
     * @docid dxPopupOptions.animation.hide
     * @default { type: 'slide', duration: 400, from: { position: { my: 'center', at: 'center', of: window } }, to: { position: { my: 'top', at: 'bottom', of: window } }} [for](iOS)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    hide?: animationConfig;
    /**
     * @docid dxPopupOptions.animation.show
     * @default { type: 'slide', duration: 400, from: { position: { my: 'top', at: 'bottom', of: window } }, to: { position: { my: 'center', at: 'center', of: window } }} [for](iOS)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    show?: animationConfig;
}
export interface dxPopupToolbarItem {
    /**
     * @docid dxPopupOptions.toolbarItems.disabled
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    disabled?: boolean;
    /**
     * @docid dxPopupOptions.toolbarItems.html
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    html?: string;
    /**
     * @docid dxPopupOptions.toolbarItems.location
     * @type Enums.ToolbarItemLocation
     * @default 'center'
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    location?: 'after' | 'before' | 'center';
    /**
     * @docid dxPopupOptions.toolbarItems.options
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    options?: any;
    /**
     * @docid dxPopupOptions.toolbarItems.template
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    template?: template;
    /**
     * @docid dxPopupOptions.toolbarItems.text
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    text?: string;
    /**
     * @docid dxPopupOptions.toolbarItems.toolbar
     * @type Enums.Toolbar
     * @default 'top'
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    toolbar?: 'bottom' | 'top';
    /**
     * @docid dxPopupOptions.toolbarItems.visible
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    visible?: boolean;
    /**
     * @docid dxPopupOptions.toolbarItems.widget
     * @type Enums.ToolbarItemWidget
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    widget?: 'dxAutocomplete' | 'dxButton' | 'dxCheckBox' | 'dxDateBox' | 'dxMenu' | 'dxSelectBox' | 'dxTabs' | 'dxTextBox' | 'dxButtonGroup' | 'dxDropDownButton';
}
/**
 * @docid
 * @inherits dxOverlay
 * @hasTranscludedContent
 * @module ui/popup
 * @export default
 * @prevFileNamespace DevExpress.ui
 * @public
 */
export default class dxPopup extends dxOverlay {
    constructor(element: TElement, options?: dxPopupOptions)
}

export type Options = dxPopupOptions;

/** @deprecated use Options instead */
export type IOptions = dxPopupOptions;
export type ToolbarItem = dxPopupToolbarItem;
