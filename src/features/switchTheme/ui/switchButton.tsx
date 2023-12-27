import { RootState } from "@/shared/lib/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { ChangeTheme } from "../lib/Slice/switchTheme";
import { useState } from "react";

const SwitchButton = () => {
  const Theme = useSelector((state: RootState) => state.switchTheme);
  const dispatch = useDispatch()
  const [changeTheme, setChangeTheme] = useState(true);
  console.log(changeTheme);

  return (
    <div className="p-5">
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" onClick={() => dispatch(ChangeTheme(changeTheme, setChangeTheme(!changeTheme)))}/>
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Switch Theme</span>
    </div>
  )
}

export default SwitchButton
