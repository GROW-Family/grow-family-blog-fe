/* eslint-disable @typescript-eslint/no-unsafe-function-type */
export type ImageViewerProps = {
    id?: any;
    src: any;
    useRatio?: any;
    fallbackSrc?: any;
    className?: any;
    style?: any; // boolean | object,
    size?: any;
    width?: any;
    height?: any;
    children?: any;
    clickable?: boolean;
    draggable?: boolean;
    disable?: boolean;
    softDisabled?: boolean;
    circle?: boolean;
    lazyload?: boolean;
    bgImg?: boolean;
    minimum?: boolean;
    selectable?: boolean; // not disbale userSelect css;
    svg?: any; // boolean | object, // https://github.com/tanem/react-svg/tree/master/examples/external-stylesheet
    attributes?: any;
    crossOrigin?: any;
    color?: any;
    customKey?: string;
    selector?: string;
    alt?: string;
    resizeMode?: string;
    rotate?: number;
    isCircle?: boolean;
    overflow?: boolean;
    defaultSrc?: boolean;
    onMouseOver?: Function;
    onMouseDown?: Function;
    onRef?: Function;
    onClick?: Function;
    onError?: Function;
    onMouseLeave?: Function;
    objectPosition?: Function;
};

export type IconDefine = {
    [key: string]: NodeRequire;
};