export default function useSideClick({
  clickEvent,
  setClickEvent,
  clickEventRef,
  setMenuIsOpen,
}) {
  return function () {
    setClickEvent(() => !clickEvent);
    setMenuIsOpen(() => clickEventRef);
  };
}
