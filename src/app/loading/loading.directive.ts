import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { RoundLoaderComponent } from './round-loader/round-loader.component';

/**
 * This directive adds loader to a component
 */
@Directive({
  selector: '[appLoading]',
})
export class LoadingDirective implements OnInit, OnDestroy {

  /**
   * Shows or hides loader
   * @param loading - Whether a loader is shown
   */
  @Input()
  set appLoading(loading: boolean) {
    if (!this.componentInstance) {
      this.createLoaderComponent();
      this.makeComponentChild();
    }

    this.componentInstance.instance.loading = loading;
  }

  /**
   * Sets top offset of loader from center
   * @param value - Offset
   */
  @Input()
  set topOffset(value) {
    if (this.componentInstance && value) {
      this.componentInstance.instance.topOffset = value;
    }
  }

  /**
   * Sets loader diameter
   * @param value - Diameter
   */
  @Input()
  set diameter(value) {
    if (this.componentInstance && value) {
      this.componentInstance.instance.diameter = value;
    }
  }

  /**
   * Sets loader width
   * @param value - Width
   */
  @Input()
  set strokeWidth(value) {
    if (this.componentInstance && value) {
      this.componentInstance.instance.strokeWidth = value;
    }
  }

  /**
   * Sets style to the loader wrapper
   * @param value - class
   */
  @Input()
  set wrapperClass(value: string) {
    if (this.componentInstance && value) {
      this.componentInstance.instance.wrapperClass = value;
    }
  }

  /**
   * Instance of loader components
   */
  private componentInstance: ComponentRef<RoundLoaderComponent> = null;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
  }

  /**
   * Sets relative position to hte parent element
   */
  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
  }

  /**
   * Creates instance of a loader component
   */
  private createLoaderComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(RoundLoaderComponent);
    this.componentInstance = this.viewContainerRef.createComponent(componentFactory);

  }

  /**
   * Appends the instance of a loader component to parent element
   */
  private makeComponentChild() {
    const loaderComponentElement = this.componentInstance.location.nativeElement;
    const sibling: HTMLElement = loaderComponentElement.previousSibling;
    sibling.insertBefore(loaderComponentElement, sibling.firstChild);
  }

  /**
   * Destroys loader component instance
   */
  ngOnDestroy(): void {
    if (this.componentInstance) {
      this.componentInstance.destroy();
    }
  }
}
