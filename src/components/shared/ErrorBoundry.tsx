import { Component, ErrorInfo, ReactNode } from 'react';
import { ComponentType } from 'react';
import { useLocation, Location } from 'react-router-dom';
interface ErrorBoundaryProps extends WithRouterProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: string;
}

export interface WithRouterProps {
  location: Location;
}

export const GetRouterLocation = <P extends WithRouterProps>(
  OriginalComponent: ComponentType<P>
): ComponentType<Omit<P, 'location'>> => {
  const NewComponent = (props: Omit<P, 'location'>) => {
    const location = useLocation();

    return <OriginalComponent {...(props as P)} location={location} />;
  };

  return NewComponent;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error: error.message };
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ hasError: false, error: undefined });
    }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-bgPrimary w-screen h-screen flex flex-col items-center justify-center">
          {/* <p>
            “MSecurity” jamoasi yuzaga kelgan noqulayliklar uchun uzr
            so&apos;raydi. <br /> Veb-sayt o&apos;zgartirilmoqda.
          </p> */}
          <h1 className="text-3xl text-red">Error has been occured</h1>
          {this.state.error && (
            <p className=" text-xl w-[900px]">Error: {this.state.error}</p>
          )}
        </div>
      );
    }
    return this.props.children;
  }
}

export default GetRouterLocation(ErrorBoundary);
