function App() {

  return (
    <div className="relative">
      {/* Fixed */}
      <div className="relative md:fixed w-full md:w-7/12 min-h-screen inset-0">
        <h1 className="absolute bottom-0 left-0 p-20 text-8xl text-biruMedium font-poppins">Nero<br />The Kitten</h1>
        <img src="kucing.jpg" className="object-cover w-full h-full" />
      </div>
      {/* Scroll */}
      <div className="w-full md:w-5/12 ml-auto">
        <div className="bg-red-200 h-screen flex justify-center items-center flex-col p-10">
          <h2 className="text-4xl mb-5">Meet Nero</h2>
          <p className="mb-5">I was born 20 May 2020</p>
        </div>
        <div className="bg-red-50 h-screen flex justify-center items-center flex-col p-10">
          <h2 className="text-4xl mb-5">I love food</h2>
          <p className="mb-5">Bones, Pallets, and more!</p>
        </div>
        <div className="bg-red-200 h-screen flex justify-center items-center flex-col p-10">
          <h2 className="text-4xl mb-5">I love my humans</h2>
          <p className="mb-5">My humans are super special to me, and I love them</p>
        </div>
      </div>
    </div>
  )
}

export default App
