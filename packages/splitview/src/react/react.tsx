import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IDisposable } from '../lifecycle';
import { IGroupPanelApi } from '../groupview/panel/api';
import { sequentialNumberGenerator } from '../math';
import { IBaseViewApi } from '../panel/api';

export interface IPanelProps {
    api: IGroupPanelApi;
}

interface IPanelWrapperProps {
    component: React.FunctionComponent<IPanelProps>;
    componentProps: any;
}

interface IPanelWrapperRef {
    update: (props: { [key: string]: any }) => void;
}

const PanelWrapper = React.forwardRef(
    (props: IPanelWrapperProps, ref: React.RefObject<IPanelWrapperRef>) => {
        const [_, triggerRender] = React.useState<number>();
        const _props = React.useRef<{ [key: string]: any }>(
            props.componentProps
        );

        React.useImperativeHandle(
            ref,
            () => ({
                update: (props: { [key: string]: any }) => {
                    _props.current = { ..._props.current, ...props };
                    triggerRender(Date.now());
                },
            }),
            []
        );

        React.useEffect(() => {
            console.debug('[reactwrapper] component mounted ');
            return () => {
                console.debug('[reactwrapper] component unmounted ');
            };
        }, []);

        return React.createElement(
            props.component,
            _props.current as IPanelProps
        );
    }
);

const counter = sequentialNumberGenerator();

export class ReactPart implements IDisposable {
    private componentInstance: IPanelWrapperRef;
    private ref: { portal: React.ReactPortal; disposable: IDisposable };
    private disposed: boolean;

    constructor(
        private readonly parent: HTMLElement,
        private readonly api: IBaseViewApi,
        private readonly addPortal: (portal: React.ReactPortal) => IDisposable,
        private readonly component: React.FunctionComponent<{}>,
        private readonly parameters: { [key: string]: any }
    ) {
        this.createPortal();
    }

    public update(props: {}) {
        if (this.disposed) {
            throw new Error('invalid operation');
        }

        this.componentInstance?.update(props);
    }

    private createPortal() {
        if (this.disposed) {
            throw new Error('invalid operation');
        }

        let props = {
            api: this.api,
            ...this.parameters,
        } as any;


        if(typeof this.component !== 'function') {
            // if we throw an error before entering the React world it will provide us with
            // a more sensible stack trace to debug
            throw new Error("invalid operation")
        }

        const wrapper = React.createElement(PanelWrapper, {
            component: this.component,
            componentProps: props,
            ref: (element: any) => {
                this.componentInstance = element;
            },
        });
        const portal = ReactDOM.createPortal(
            wrapper,
            this.parent,
            counter.next()
        );

        this.ref = {
            portal,
            disposable: this.addPortal(portal),
        };
    }

    public dispose() {
        this.ref?.disposable?.dispose();
        this.ref = undefined;
        this.disposed = true;
    }
}
