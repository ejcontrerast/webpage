
export const PageTop = () => {

  return (
    <div>
      <img src="./static/images/SpaceShip_Vegeta.png" alt="Sayan SpaceShip Pagetop element" onClick={() => window.location.href = '#header'} 
        className="fixed z-50 bottom-0 right-0 w-2/12 h-auto py-3 cursor-pointer hover:scale-110 transform transition duration-500 ease-in-out"
        style={{ animation: "rotate 3s infinite" }}
      />
    </div>
  );
};