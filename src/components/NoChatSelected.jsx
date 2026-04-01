const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-gradient-to-b from-white via-red-50 to-white pattern-tunisian">
      <div className="max-w-md text-center space-y-6">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div
              className="w-24 h-24 rounded-3xl bg-gradient-to-br from-red-100 to-red-50 flex items-center
             justify-center animate-bounce shadow-2xl"
            >
              <img src="/tunichaticon.png" alt="TUNIChat" className="w-16 h-16" />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
            Bienvenue sur TUNIChat! 🇹🇳
          </h2>
          <p className="text-gray-600 mt-2 text-lg font-medium">
            Sélectionnez une conversation dans la barre latérale pour démarrer le chat
          </p>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center gap-2 text-4xl">
          
        </div>
      </div>
    </div>
  );
};

export default NoChatSelected;
