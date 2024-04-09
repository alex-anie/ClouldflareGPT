import { NavLink } from "react-router-dom";
import ClouldFlare from "../Components/ClouldFlare";
import ThreeStars from "../Components/ThreeStars";
import Pen from "../Components/pen";

export default function Sidebar() {
    const styles = {
        border: '2px solid red',
    }

    const styles2 = {
        border: '2px solid pink',
    }

    const styles3 = {
        border: '2px solid cyan',
    }

    const styles4 = {
        border: '2px solid orange',
    }
  return (
   <>
    <article className="w-[18em] h-screen bg-neutral-950 text-neutral-50 relative" >
        <section className="w-[90%] my-4 mx-auto">
            {/* Logo Section */}
            <aside className="bg-neutral-950 w-[90%] select-none absolute top-4">
                <div className="flex justify-between cursor-pointer hover:bg-slate-50/10 rounded-md p-1">
                    <div>
                        <div className="w-[30px] bg-slate-50 rounded-full p-1">
                            <ClouldFlare fill="#000"/>
                        </div>
                    </div>
                    <span className="text-xs font-bold inline-block">New Chat</span>

                    {/* Pen Icon */}
                    <div>
                        <Pen width={18} height={18}/>
                    </div>
                </div>
            </aside>

            {/* History */}
            <aside className="h-[24em] mt-[4em] overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-950 scrollbar-track-neutral-50">
                <div className="">
                    <ul id="sidebarHistory" className="text-sm [&_li]:p-2 [&_li]:m-1 [&_li]:cursor-pointer [&_li]:rounded-md">
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                        <li>This is history one</li>
                      
                    </ul>
                </div>
            </aside>

            {/* Upgrade plan and User profile */}
            <div className="absolute bottom-0 bg-neutral-950 pt-4 w-[90%]">
                <div className="hover:bg-neutral-50/10 px-2 pt-2 rounded-lg select-none">
                    <NavLink to='https://developers.cloudflare.com/workers-ai/models/llama-2-7b-chat-fp16/' target="_black" className="flex gap-3">
                        <div className="w-[30px] h-[30px] border-[1px] border-neutral-500 rounded-full p-1">
                            <ThreeStars width={20} height={20} fill="none"/>
                        </div>
                        <div className="translate-y-[-5px]">
                            <p className="text-[14px]">Upgrade plan</p>
                            <p className="text-[11px] text-neutral-400">Workers AI, Llama, and more </p>
                        </div>
                    </NavLink>
                </div>

                <div className="hover:bg-neutral-50/10 p-2 my-4 rounded-lg select-none">
                    <NavLink to="https://dev.to/alexanie_" target="_blank" className="flex gap-3">
                        <div className="w-[30px] h-[30px]">
                            <img src="https://user-images.githubusercontent.com/78242022/242978218-d0e4eba2-62f7-4464-b2fb-c89835b6e592.jpg" alt="" className="w-full rounded-full"/>
                        </div>
                        <p>Alex Anie</p>
                    </NavLink>
                </div>
            </div>
        </section>
    </article>
   </>
  )
}
