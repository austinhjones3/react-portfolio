export const useSideClick = ({
  clickEvent,
  setClickEvent,
  clickEventRef,
  setMenuIsOpen,
}) => () => {
    setClickEvent(() => !clickEvent);
    setMenuIsOpen(() => clickEventRef);
  };
