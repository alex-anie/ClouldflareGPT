import { useState } from "react";

import { AlignLeft, ArrowUp, ChevronDown, GitHub} from "react-feather";
import {Link} from 'react-router-dom'
import ClouldFlare from "../Components/ClouldFlare";

export default function Body() {
  return (
    <>
      <main className="w-[100%] h-screen bg-neutral-800 text-white">
        <section className="" >
          <header>
              <nav className="flex justify-between mx-[2em] mt-[1em]">
                {/* Hamburger Icon */}
                <div className="md:hidden">
                    <div className="hover:bg-neutral-700 p-2 rounded-lg cursor-pointer select-none transition-all ease-linear duration-75">
                        <AlignLeft/>
                    </div>
                </div>

                {/* Heading Text */}
                <div className="hover:bg-neutral-700 p-2 rounded-lg cursor-pointer select-none transition-all ease-linear duration-75">
                  <h1>ClouldflareGPT<span>3.5</span><ChevronDown className="inline-block" width={15}></ChevronDown></h1>
                </div>

                {/* GitHub Link */}
                <div className="hover:bg-neutral-700 p-2 rounded-lg cursor-pointer select-none transition-all ease-linear duration-75">
                  <Link to="https://github.com/alex-anie/ClouldflareGPT.git" target="_blank">
                    <GitHub />
                  </Link>
                </div>

              </nav>
          </header>

          <article className="flex justify-between flex-col items-center">
              <div className="mt-[3em]">
                  <div className="flex flex-row justify-center">
                      <div className="w-[50px] bg-slate-50 rounded-full p-1 animate-pulse">
                        <ClouldFlare fill="#000"/>
                      </div>
                  </div>
                  <h1 className="text-2xl font-bold text-center my-4">How can I help you today?</h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-[1px] border-neutral-400 rounded-lg p-3 cursor-pointer hover:bg-neutral-50/20 relative group">
                      <h1 className="font-bold">What is Physics</h1>
                        <p className="text-xs text-neutral-400">Learn about what make Physics awesome</p>
                        <div  className="bg-neutral-950 p-1 w-[fit-content] rounded-lg absolute right-5 bottom-5 hidden group-hover:block">
                          <ArrowUp width={15} height={15}/>
                        </div>
                  </div>

                  <div className="border-[1px] border-neutral-400 rounded-lg p-3 cursor-pointer hover:bg-neutral-50/20 relative group">
                    <h1 className="font-bold">What is closure in JavaScript</h1>
                    <p className="text-xs text-neutral-400">Discover how to write better closure in JavaScript</p>
                    <div  className="bg-neutral-950 p-1 w-[fit-content] rounded-lg absolute right-5 bottom-5 hidden group-hover:block">
                          <ArrowUp width={15} height={15}/>
                    </div>
                  </div>

                  <div className="hidden md:block border-[1px] border-neutral-400 rounded-lg p-3 cursor-pointer hover:bg-neutral-50/20 relative group">
                    <h1 className="font-bold">Create a New Year Resolution Plan</h1>
                    <p className="text-xs text-neutral-400">Discover how to better new year resolution plan</p>
                    <div  className="bg-neutral-950 p-1 w-[fit-content] rounded-lg absolute right-5 bottom-5 hidden group-hover:block">
                          <ArrowUp width={15} height={15}/>
                    </div>
                  </div>

                  <div className="hidden md:block border-[1px] border-neutral-400 rounded-lg p-3 cursor-pointer hover:bg-neutral-50/20 relative group">
                    <h1 className="font-bold">How to I Prepare a Sushi</h1>
                    <p className="text-xs text-neutral-400">See step by step guide how to make sushi</p>
                    <div  className="bg-neutral-950 p-1 w-[fit-content] rounded-lg absolute right-5 bottom-5 hidden group-hover:block">
                          <ArrowUp width={15} height={15}/>
                    </div>
                  </div>
              </div>
          </article>

          {/* Text input */}
          <div className="flex flex-col justify-center items-center md:w-[80%] absolute bottom-10 left-25">
            <div className="overflow-hidden [&:has(textarea:focus)]:border-token-border-xheavy [&:has(textarea:focus)]:shadow-[0_2px_6px_rgba(0,0,0,.05)] flex flex-col w-[50%] flex-grow relative border dark:text-white rounded-2xl">
              
            <textarea id="prompt-textarea" tabIndex="0" data-id="request-WEB:d3c1fd8c-01e8-4c17-8d0d-176e40037eed-4" dir="auto" rows="1" placeholder="Type a prompt …" className="m-0 w-full resize-none border-0 bg-transparent focus:ring-0 focus-visible:ring-0 dark:bg-transparent py-[10px] pr-10 md:py-3.5 md:pr-12  max-h-52 placeholder-black/50 dark:placeholder-white/50 pl-3 md:pl-4" style={{height: '52px', 'overflow-y': 'hidden'}}></textarea>

            {/* Submit button */}
              <div id="submit" onClick={getMessage} className="bg-neutral-700 p-1 w-[fit-content] rounded-lg absolute right-5 bottom-3 cursor-pointer" >
                  <ArrowUp width={20} height={20}/>
              </div>

            </div>

            <div className="mt-5 mx-10 md:mx-0 text-center">
              <p className="text-xs text-neutral-400">Copyright © 2024 - ClouldflareGPT AI Model with llama-2-7b-chat-int8 created by <Link to="https://twitter.com/alexanie_" target="_blank"  className="hover:text-white">Alex Anie</Link></p>
            </div>
          </div>

        </section>
      </main>
    </>
  )
}
