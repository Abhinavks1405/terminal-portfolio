// This is a placeholder component for the ASCII art.
// Write the name Shubham in ASCII Art
const Ascii = () => {
  return (
    <div>
      <pre className="text-left text-blue-400 font-bold mb-2 drop-shadow-xl selection:bg-yellow-900 selection:text-white">
        {`
     █████╗ ██████╗ ██╗  ██╗██╗███╗   ██╗ █████╗ ██╗   ██╗
    ██╔══██╗██╔══██╗██║  ██║██║████╗  ██║██╔══██╗██║   ██║
    ███████║██████╔╝███████║██║██╔██╗ ██║███████║██║   ██║
    ██╔══██║██╔══██╗██╔══██║██║██║╚██╗██║██╔══██║╚██╗ ██╔╝
    ██║  ██║██████╔╝██║  ██║██║██║ ╚████║██║  ██║ ╚████╔╝ 
    ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝  ╚═══╝  
      `}
      </pre>
    </div>
  );
};

export default Ascii;
