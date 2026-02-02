export default function Navbar() {
  return (
    <nav className="w-full fixed flex justify-between items-center p-6 mr-6 bg-black text-white">
      <h1 className="text-xl font-bold">Mohammad.dev</h1>
      <div className="space-x-6">
        <a href="#about" className="hover:text-green-400">About</a>
        <a href="#projects" className="hover:text-green-400">Projects</a>
        <a href="#contact" className="hover:text-green-400">Contact</a>
      </div>
    </nav>
  );
}
