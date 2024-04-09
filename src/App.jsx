import Body from "./Layouts/Body"
import Sidebar from "./Layouts/Sidebar"

function App() {
  return (
    <>
    <main>
      <section className="flex">
        <Sidebar />
        <Body />
      </section>
    </main>
    </>
  )
}

export default App
