/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setTitle, setButtons } from "../../redux/slices/headerSlice";

const Container = ({ title, children, buttons }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (title) {
      dispatch(setTitle(title));
    }
    if (buttons) {
      dispatch(setButtons(buttons));
    }
  }, [dispatch, title, buttons]);

  return (
    <div className="w-full mx-auto mt-4">
      <main className="mt-4">{children}</main>
    </div>
  );
};

export default Container;
