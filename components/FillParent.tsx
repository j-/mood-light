import { forwardRef } from 'react';

const FillParent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ style, ...props }, ref) => (
  <div ref={ref} style={{ ...style, width: '100%', height: '100%' }} {...props} />
));

export default FillParent;
