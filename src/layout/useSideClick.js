export default function useSideClick({
  clickEvent,
  setClickEvent,
  clickEventRef,
  menuIsOpen,
  setMenuIsOpen,
  menuIsOpenRef,
}) {
  // const { clickEvent, setClickEvent, menuIsOpen, setMenuIsOpen } =
  //   useContext(MenuContext);
  return function () {
    // setClickEvent(() => !clickEvent);
    // setMenuIsOpen(() => !menuIsOpen);
    setClickEvent(() => !clickEvent);
    setMenuIsOpen(() => clickEventRef);
  };
}
