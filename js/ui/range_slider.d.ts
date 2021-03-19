import {
    TElement
} from '../core/element';

import {
    dxSliderBaseOptions,
    ContentReadyEvent,
    ValueChangedEvent as SliderValueChangedEvent
} from './slider';

import dxTrackBar from './track_bar';

export {
    ContentReadyEvent,
    ValueChangedEvent
}
export interface ValueChangedEvent<T> extends SliderValueChangedEvent<T> {
    start?: number,
    end?: number,
    value?: Array<number>
}
export interface dxRangeSliderOptions extends dxSliderBaseOptions<dxRangeSlider> {
    /**
     * @docid
     * @default 60
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    end?: number;
    /**
     * @docid
     * @default ""
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    endName?: string;
    /**
     * @docid
     * @action
     * @extends Action
     * @type_function_param1_field4 start:number
     * @type_function_param1_field5 end:number
     * @type_function_param1_field6 value:array<number>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onValueChanged?: ((e: ValueChangedEvent<dxRangeSlider>) => any);
    /**
     * @docid
     * @default 40
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    start?: number;
    /**
     * @docid
     * @default ""
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    startName?: string;
    /**
     * @docid
     * @default [40, 60]
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    value?: Array<number>;
}
/**
 * @docid
 * @isEditor
 * @inherits dxSliderBase
 * @module ui/range_slider
 * @export default
 * @prevFileNamespace DevExpress.ui
 * @public
 */
export default class dxRangeSlider extends dxTrackBar {
    constructor(element: TElement, options?: dxRangeSliderOptions)
}

export type Options = dxRangeSliderOptions;

/** @deprecated use Options instead */
export type IOptions = dxRangeSliderOptions;
