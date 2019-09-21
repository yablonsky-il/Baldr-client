import { PureComponent } from 'react';

export class ErrorBoundary extends PureComponent {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    const { children } = this.props;

    return children;
  }
}
