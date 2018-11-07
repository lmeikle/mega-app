import React, { Component, MouseEvent, ReactNode, ComponentType } from 'react';

const initialState = { show: false };

type State = Readonly<typeof initialState>;

export type ToggleableComponentProps<P extends object = object> = {
  show: State['show'];
  toggle: Toggleable['toggle']; // using lookup types!
} & P;

type RenderCallback = (args: ToggleableComponentProps) => JSX.Element;

const defaultProps = { props: {} as { [name: string]: any } };
type Props = Partial<
  {
    children: RenderCallback | ReactNode;
    render: RenderCallback;
    component: ComponentType<ToggleableComponentProps<any>>;
  } & DefaultProps
>;
type DefaultProps = typeof defaultProps;

export class Toggleable extends Component<Props, State> {
  readonly state: State = initialState;

  private toggle = (event: MouseEvent<HTMLElement>) => this.setState(updateShowState);

  render() {
    const { component: InjectedComponent, children, render, props } = this.props;
    const renderProps = { show: this.state.show, toggle: this.toggle };

    // when component prop api is used children is ReactNode not a function
    if (InjectedComponent) {
      return (
        <InjectedComponent {...props} {...renderProps}>
          {children}
        </InjectedComponent>
      );
    }

    if (render) {
      return render(renderProps);
    }

    // @ts-ignore
    return typeof children === 'function' ? children(renderProps) : null;
  }
}

const updateShowState = (prevState: State) => ({ show: !prevState.show });
