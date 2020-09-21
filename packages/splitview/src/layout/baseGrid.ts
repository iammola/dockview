import { MovementOptions2 } from '.';
import { Emitter, Event } from '../events';
import { getGridLocation, Gridview, IGridView } from '../gridview/gridview';
import { GroupChangeEvent, GroupChangeKind } from '../groupview/groupview';
import { CompositeDisposable, IValueDisposable } from '../lifecycle';
import { sequentialNumberGenerator } from '../math';

const nextLayoutId = sequentialNumberGenerator();

export interface BaseGridOptions {
    readonly proportionalLayout?: boolean;
}

export interface IBaseGridView extends IGridView {
    id: string;
    setActive(isActive: boolean): void;
}

export interface IBaseGrid<T extends IBaseGridView> {
    readonly element: HTMLElement;
    readonly id: string;
    readonly minimumHeight: number;
    readonly maximumHeight: number;
    readonly minimumWidth: number;
    readonly maximumWidth: number;
    readonly activeGroup: T;
    readonly size: number;
    getGroup(id: string): T | undefined;
    readonly onDidLayoutChange: Event<GroupChangeEvent>;
}

export class BaseGrid<T extends IBaseGridView>
    extends CompositeDisposable
    implements IBaseGrid<T> {
    private readonly _id = nextLayoutId.next();
    protected readonly groups = new Map<string, IValueDisposable<T>>();
    protected readonly gridview: Gridview;
    //
    private resizeTimer: NodeJS.Timer;
    protected _activeGroup: T;
    //
    protected _size: number;
    protected _orthogonalSize: number;
    //
    protected readonly _onDidLayoutChange = new Emitter<GroupChangeEvent>();
    readonly onDidLayoutChange: Event<GroupChangeEvent> = this
        ._onDidLayoutChange.event;

    get id() {
        return this._id;
    }

    get element() {
        return this._element;
    }

    get size() {
        return this.groups.size;
    }

    get minimumHeight() {
        return this.gridview.minimumHeight;
    }
    get maximumHeight() {
        return this.gridview.maximumHeight;
    }
    get minimumWidth() {
        return this.gridview.minimumWidth;
    }
    get maximumWidth() {
        return this.gridview.maximumWidth;
    }

    get activeGroup() {
        return this._activeGroup;
    }

    constructor(
        private readonly _element: HTMLElement,
        options: BaseGridOptions
    ) {
        super();

        this.gridview = new Gridview(!!options.proportionalLayout);
        this.element.appendChild(this.gridview.element);

        this.addDisposables(
            this.gridview.onDidChange((event) => {
                this._onDidLayoutChange.fire({ kind: GroupChangeKind.LAYOUT });
            })
        );
    }

    protected doAddGroup(group: T, location: number[] = [0], size?: number) {
        this.gridview.addView(group, size ?? { type: 'distribute' }, location);

        this._onDidLayoutChange.fire({ kind: GroupChangeKind.ADD_GROUP });
        this.doSetGroupActive(group);
    }

    protected doRemoveGroup(
        group: T,
        options?: { skipActive?: boolean; skipDispose?: boolean }
    ) {
        if (!this.groups.has(group.id)) {
            throw new Error('invalid operation');
        }

        const { disposable } = this.groups.get(group.id);

        if (!options?.skipDispose) {
            disposable.dispose();
            this.groups.delete(group.id);
        }

        const view = this.gridview.remove(group, { type: 'distribute' });
        this._onDidLayoutChange.fire({ kind: GroupChangeKind.REMOVE_GROUP });

        if (!options?.skipActive && this.groups.size > 0) {
            this.doSetGroupActive(Array.from(this.groups.values())[0].value);
        }

        return view;
    }

    public getGroup(id: string): T | undefined {
        return this.groups.get(id)?.value;
    }

    public doSetGroupActive(group: T) {
        if (this._activeGroup && this._activeGroup !== group) {
            this._activeGroup.setActive(false);
        }
        group.setActive(true);
        this._activeGroup = group;
    }

    public removeGroup(group: T) {
        if (group === this._activeGroup) {
            this._activeGroup = undefined;
        }
        this.doRemoveGroup(group);
    }

    public moveToNext(options?: MovementOptions2) {
        if (!options) {
            options = {};
        }
        if (!options.group) {
            options.group = this.activeGroup;
        }

        const location = getGridLocation(options.group.element);
        const next = this.gridview.next(location)?.view;
        this.doSetGroupActive(next as T);
    }

    public moveToPrevious(options?: MovementOptions2) {
        if (!options) {
            options = {};
        }
        if (!options.group) {
            options.group = this.activeGroup;
        }

        const location = getGridLocation(options.group.element);
        const next = this.gridview.preivous(location)?.view;
        this.doSetGroupActive(next as T);
    }

    public layout(
        size: number,
        orthogonalSize: number,
        forceResize?: boolean
    ): void {
        const different =
            forceResize ||
            size !== this._size ||
            orthogonalSize !== this._orthogonalSize;

        if (!different) {
            return;
        }

        this.element.style.height = `${orthogonalSize}px`;
        this.element.style.width = `${size}px`;

        this._size = size;
        this._orthogonalSize = orthogonalSize;
        this.gridview.layout(size, orthogonalSize);
    }

    public setAutoResizeToFit(enabled: boolean): void {
        if (this.resizeTimer) {
            clearInterval(this.resizeTimer);
        }
        if (enabled) {
            this.resizeTimer = setInterval(() => {
                this.resizeToFit();
            }, 500);
        }
    }

    /**
     * Resize the layout to fit the parent container
     */
    public resizeToFit(): void {
        const {
            width,
            height,
        } = this.element.parentElement.getBoundingClientRect();
        this.layout(width, height);
    }

    public dispose(): void {
        super.dispose();

        if (this.resizeTimer) {
            clearInterval(this.resizeTimer);
            this.resizeTimer = undefined;
        }

        this.gridview.dispose();
    }
}