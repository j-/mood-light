import { useCallback, useEffect, useRef, useState } from 'react';
import FillParent from './FillParent';

type Props = {
  onClickBack: () => void;
}

const FullScreenContainer: React.FC<Props> = ({ onClickBack, children }) => {
  const ref = useRef<HTMLDivElement>();
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const handleClickBack = useCallback<React.MouseEventHandler<HTMLButtonElement>>((e) => {
    e.preventDefault();
    if (isFullScreen) {
      document.exitFullscreen();
    } else if (ref.current) {
      onClickBack();
    }
  }, [isFullScreen, ref, onClickBack]);

  const handleClickToggle = useCallback<React.MouseEventHandler<HTMLButtonElement>>((e) => {
    e.preventDefault();
    if (isFullScreen) {
      document.exitFullscreen();
    } else if (ref.current) {
      ref.current.requestFullscreen({
        navigationUI: 'hide',
      });
    }
  }, [isFullScreen, ref]);

  useEffect(() => {
    const handler = () => {
      setIsFullScreen(document.fullscreenElement != null);
    };
    document.addEventListener('fullscreenchange', handler);
    return () => {
      document.removeEventListener('fullscreenchange', handler);
    };
  }, []);

  return (
    <FillParent ref={ref}>
      <button
        className="btn"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '4em',
          height: '4em',
        }}
        type="button"
        onClick={handleClickBack}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </button>
      <button
        className="btn"
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '4em',
          height: '4em',
        }}
        type="button"
        onClick={handleClickToggle}
      >
        {isFullScreen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        )}
      </button>
      {children}
    </FillParent>
  );
};

export default FullScreenContainer;
