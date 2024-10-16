export default function Page() {
    return (
        <div className="flex flex-col  justify-center items-center ">
            
                <h1 className="text-5xl my-4 font-bold flex justify-center">
                    TODO LIST
                </h1>
                
            
            <div className="w-[45vw] flex justify-center flex-col">
            <hr className="my-4 border-[0.9px] border-red-50" />
                <input placeholder="add item ..." className=" rounded-lg px-4 py-1.5 text-2xl placeholder-gray-700 flex justify-center  border-2" type="text" />
                <button className="bg-black py-2 px-3 text-white mt-2 mb-3 rounded-lg w-fit">ADD</button>
            
            <div className="flex bg-gray-300 justify-between px-2 py-1 ">
                    <p className="p-3">Task 1</p>
                    <div className="flex gap-2">
                    <button className="bg-zinc-50 py-2 px-3 text-black mt-2 mb-3 rounded-lg w-fit">Delete</button>
                    <button className="bg-zinc-50 py-2 px-3 text-black mt-2 mb-3 rounded-lg w-fit">Edit</button>
                    </div>
                </div>
                <hr className=" border-[0.9px]" />
                <div className="flex bg-gray-300 justify-between px-2 py-1 ">
                    <p className="p-3">Task 1</p>
                    <div className="flex gap-2">
                    <button className="bg-zinc-50 py-2 px-3 text-black mt-2 mb-3 rounded-lg w-fit">Delete</button>
                    <button className="bg-zinc-50 py-2 px-3 text-black mt-2 mb-3 rounded-lg w-fit">Edit</button>
                    </div>
                </div>
                <hr className=" border-[0.9px]" />
                <div className="flex bg-gray-300 justify-between px-2 py-1 ">
                    <p className="p-3">Task 1</p>
                    <div className="flex gap-2">
                    <button className="bg-zinc-50 py-2 px-3 text-black mt-2 mb-3 rounded-lg w-fit">Delete</button>
                    <button className="bg-zinc-50 py-2 px-3 text-black mt-2 mb-3 rounded-lg w-fit">Edit</button>
                    </div>
                </div>
                <hr className=" border-[0.9px]" />
                <div className="flex bg-gray-300 justify-between px-2 py-1 ">
                    <p className="p-3">Task 1</p>
                    <div className="flex gap-2">
                    <button className="bg-zinc-50 py-2 px-3 text-black mt-2 mb-3 rounded-lg w-fit">Delete</button>
                    <button className="bg-zinc-50 py-2 px-3 text-black mt-2 mb-3 rounded-lg w-fit">Edit</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
