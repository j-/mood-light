import { forwardRef } from 'react';

const FillViewport = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ style, ...props }, ref) => (
  <div ref={ref} style={{ ...style, width: '100vw', height: '100vh' }} {...props} />
));

export default FillViewport;
