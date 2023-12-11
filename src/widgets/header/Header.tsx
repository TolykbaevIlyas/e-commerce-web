const Header = () => {
  return (
    <div className="flex justify-between px-40 py-10">
        <div>
            <h1 className="uppercase text-2xl ">e-commerce</h1>
            <p className="lowercase text-sm font-thin text-right">shop</p>
        </div>
        <div className="flex">
            <li className="list-none p-4 ease-linear duration-75 hover:text-zinc-600 cursor-pointer">
                <a className="no-underline" href="#">Home</a>
            </li>
            <li className="list-none p-4 ease-linear duration-75 hover:text-zinc-600 cursor-pointer">
                <a className="no-underline" href="#">Products</a>
            </li>
            <li className="list-none p-4 ease-linear duration-75 hover:text-zinc-600 cursor-pointer">
                <a className="no-underline" href="#">Forum</a>
            </li>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Header