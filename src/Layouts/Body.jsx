import { AlignLeft, ChevronDown, GitHub} from "react-feather";
import {Link} from 'react-router-dom'
import ClouldFlare from "../Components/ClouldFlare";

export default function Body() {
  return (
    <>
      <main className="w-[70%] bg-neutral-800 text-white">
        <section>
          <header>
              <nav>
                {/* Hamburger Icon */}
                <div>
                    <div>
                        <AlignLeft />
                    </div>
                </div>

                {/* Heading Text */}
                <div>
                  <h1>ClouldflareGPT<span>3.5</span><ChevronDown></ChevronDown></h1>
                </div>

                {/* GitHub Link */}
                <div>
                  <Link to="" target="_blank">
                    <GitHub />
                  </Link>
                </div>

              </nav>
          </header>

          <article>
              <div>
                  <div>
                      <div className="w-[80px] bg-slate-50 rounded-full p-1">
                        <ClouldFlare fill="#000"/>
                      </div>
                  </div>
                  <h1 className="text-xs font-bold inline-block">How can I help you today?</h1>
              </div>

              <div>
                  <div>
                    <h1>What is Physics</h1>
                    <p>Learn about what make Physics awesome</p>
                  </div>

                  <div>
                    <h1>What is closure in JavaScript</h1>
                    <p>Discover how to write better closure in JavaScript</p>
                  </div>

                  <div>
                    <h1>Create a New Year Resolution Plan</h1>
                    <p>Discover how to better new year resolution plan</p>
                  </div>

                  <div>
                    <h1>How to I Prepare a Sushi</h1>
                    <p>See step by step guide how to make sushi</p>
                  </div>
              </div>
          </article>

          {/* Text input */}
          <div>
            <div>

            </div>

            <div>
              <p>Copyright © 2024 - ClouldflareGPT AI Model with llama-2-7b-chat-int8 created by <Link to="https://twitter.com/alexanie_" target="_blank">Alex Anie</Link></p>
            </div>
          </div>

        </section>
      </main>
    </>
  )
}
