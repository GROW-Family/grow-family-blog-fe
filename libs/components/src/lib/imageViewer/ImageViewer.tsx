import { Component, memo } from 'react';
import { ReactSVG } from 'react-svg';

import { getImageSize } from '../utils/FileUtils';
import { getHTMLAttributes } from '../utils/StringUtils';
import { isNumber, isString } from '../utils/Utils';

import { IconDefine, ImageViewerProps } from '../../types/common/CommonType';

const images: IconDefine = {
    defaultError: require('./img_error.png'),
};

const getSRC = (src: any) => (src ? src.default?.src || src.src || src.default || String(src) : '');

type CompStates = {
    src: any;
    renderId?: string;
    renderReady: boolean;
    isReRender: boolean;
    reRender: boolean;
    isError: boolean;
    expectWidth?: any;
    expectHeight?: any;
};

class ImageViewer extends Component<ImageViewerProps, CompStates> {
    _mounted: boolean;
    injectFailed: boolean;

    constructor(props: ImageViewerProps) {
        super(props);
        const { src, useRatio } = props;
        this.state = {
            src,
            renderId: '',
            reRender: false,
            renderReady: !src || (src && !useRatio),
            isError: false,
            isReRender: false,
        };
        this.injectFailed = false;
        this._mounted = true;
    }

    componentDidMount(): void {
        this.handleGetExpectSize();
    }

    componentDidUpdate(prevProps: ImageViewerProps) {
        const { src, useRatio } = this.props;
        if (src !== prevProps.src) {
            this.injectFailed = false;
            this.setState(
                {
                    src,
                    isError: false,
                    isReRender: true,
                    renderReady: !src || (src && !useRatio),
                },
                () => {
                    this.handleGetExpectSize();
                    this.setState({ isReRender: false });
                },
            );
        }
    }

    componentWillUnmount() {
        this._mounted = false;
    }

    handleError = () => {
        const { isError } = this.state;
        const { fallbackSrc } = this.props;
        if (!isError) {
            this.props.onError?.();
            this._mounted && this.setState({ src: fallbackSrc || images.defaultError, isError: true });
        }
    };

    handleGetExpectSize = () => {
        const { useRatio, src: _src } = this.props;
        const src = getSRC(_src);
        if (src && useRatio) {
            getImageSize(src).then((sizes) => {
                if (!this._mounted) return;
                const { width: actualWidth, height: actualHeight } = sizes;
                const { size, width, height, style } = this.props;
                let expectWidth = size ?? width ?? style?.width;
                let expectHeight = size ?? height ?? style?.height;
                switch (useRatio) {
                    case 'width':
                        expectWidth = (actualWidth * Number(expectHeight)) / actualHeight;
                        break;
                    case 'height':
                        expectHeight = (actualHeight * Number(expectWidth)) / actualWidth;
                        break;
                    default:
                        break;
                }
                if (isNaN(expectWidth)) expectWidth = null;
                if (isNaN(expectHeight)) expectHeight = null;
                this.setState({
                    renderReady: true,
                    expectWidth,
                    expectHeight,
                });
            });
        }
    };

    handleBeforeInjection = (svgNode: any) => {
        const { renderId } = this.state;
        const { id, gradient, color, gradientSelector } = this.props.svg;
        let _gradient = gradient;
        if ((color || '').includes('gradient')) {
            const gradientAngles: any = {
                'to bottom': { x2: '0', y2: '1' },
                'to bottom right': { x1: '.5', x2: '.5', y2: '1' },
            };
            _gradient = {
                ...gradientAngles[color.split(/[(,]/)[1]],
                colors: color.match(/#+\w{3,6}/g),
            };
        }
        if (_gradient) {
            const pathNodes = svgNode.querySelectorAll(gradientSelector || 'path[fill*="#"]');
            if (pathNodes.length) {
                const { colors = [], x1 = '0', y1 = '0', x2 = '1', y2 = '1' } = _gradient;
                const gradientId = `svg${id || renderId}`;
                const stopColorsHtml = colors
                    .map((color: any, index: number) => {
                        if (isString(color)) {
                            color = [color];
                        }
                        const [stopColor, attributes] = color;
                        return `<stop ${getHTMLAttributes({
                            offset: index,
                            'stop-color': stopColor,
                            ...attributes,
                        })} />`;
                    })
                    .join('');
                const gradientHtml = `<defs><linearGradient ${getHTMLAttributes({
                    id: gradientId,
                    x1,
                    y1,
                    x2,
                    y2,
                })}>${stopColorsHtml}</linearGradient></defs>`;
                svgNode.insertAdjacentHTML('afterbegin', gradientHtml);
                pathNodes.forEach((i: any) => i.setAttribute('fill', `url(#${gradientId})`));
            }
        }
        return svgNode.setAttribute('style', 'height:100%');
    };

    handleAfterInjection = (err: any): void => {
        if (err && this._mounted && !this.injectFailed) {
            this.injectFailed = true;
            this.setState({ reRender: true });
        }
    };

    render() {
        const { isError, isReRender, src: _src, renderReady, expectWidth, expectHeight } = this.state;
        const {
            id,
            svg,
            size,
            width,
            height,
            bgImg,
            color,
            style,
            disable,
            softDisabled,
            lazyload,
            fallbackSrc,
            draggable,
            className,
            defaultSrc,
            attributes,
            crossOrigin,
            isCircle,
            alt,
            onClick,
            onError,
            onMouseOver,
            onMouseLeave,
            onMouseDown,
            resizeMode = 'cover',
        } = this.props;
        const src = getSRC(_src || (defaultSrc ? images.defaultError : null));

        if (!renderReady) return null;

        const _style = style || {};
        const isFunc = typeof onClick === 'function';
        const isHandleError = !!(lazyload || fallbackSrc || onError);
        const imgSize = size ? (isNumber(size) ? size + 'px' : size) : 16;
        const imgConstraint = {
            width: expectWidth ?? width ?? imgSize,
            height: expectHeight ?? height ?? imgSize,
        };
        const imgProps = {
            draggable,
            crossOrigin,
            onMouseOver,
            onMouseLeave,
            onMouseDown,
            className: className,
            onClick: (e: any) => !(disable || softDisabled) && isFunc && onClick(e),
            ref: (_ref: any) => this.props.onRef?.(_ref),
            ...(isError && isHandleError && { 'origin-src': src }),
            ...(id && { id }),
            ...imgConstraint,
        };
        if (isReRender) return null;
        if (bgImg) {
            imgProps.style = {
                backgroundImage: 'url(' + src + ')',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: resizeMode,
                ..._style,
            };
            return <div {...imgProps}>{this.props.children}</div>;
        }
        if (svg) {
            if (color || svg.color) {
                imgProps.className = className
            }
            imgProps.beforeInjection = this.handleBeforeInjection;
            imgProps.afterInjection = this.handleAfterInjection;
            return <ReactSVG {...{ ...imgProps, ...svg, src, style: _style }} />;
        }
        if (isHandleError) imgProps.onError = this.handleError;
        if (isCircle) _style.borderRadius = '50%';
        return <img alt={alt || ''} {...{ ...imgProps, src, style: _style, ...attributes }} />;
    }
}

export default memo(ImageViewer);
