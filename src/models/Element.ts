interface IAnimationProperties {
  name: string;
}

class ElementObservable {
  constructor(public element: HTMLElement) {}

  private animationProperties: IAnimationProperties;

  public startAnimation() {
    this.element.style.animationName = this.getAnimationProperties("name");
  }

  private getAnimationProperties(property: string) {
    let getElementAtributes = this.element.getAttribute.bind(this.element);

    return getElementAtributes(`ani-${property}`);
  }
}
