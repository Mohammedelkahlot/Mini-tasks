import Counter from "@/conponant/Counter";
import Currency from "../conponant/Currency";
import LiveSearchFilter from "@/conponant/LiveSearchFilter";
import PasswordStrengthChecker from "@/conponant/passwordStrengthChecker";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header Section */}
      <header className="py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            مهمة الصغيرة
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            مجموعة من المشاريع الصغيرة لتعلم React و Tailwind CSS
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Grid Layout for Components */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            
            {/* Currency Converter Card */}
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-white/50">
                <div className="p-1 bg-linear-to-r from-blue-500 to-indigo-600 rounded-2xl">
                  <div className="bg-white rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                        $
                      </div>
                      <h2 className="ml-3 text-xl font-bold text-gray-800">Currency Converter</h2>
                    </div>
                    <Currency/>
                  </div>
                </div>
              </div>
            </div>

            {/* Counter Card */}
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-white/50">
                <div className="p-1 bg-linear-to-r from-green-500 to-emerald-600 rounded-2xl">
                  <div className="bg-white rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-linear-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                        #
                      </div>
                      <h2 className="ml-3 text-xl font-bold text-gray-800">Counter</h2>
                    </div>
                    <Counter/>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Search Filter Card */}
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-white/50">
                <div className="p-1 bg-linear-to-r from-purple-500 to-pink-600 rounded-2xl">
                  <div className="bg-white rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                        🔍
                      </div>
                      <h2 className="ml-3 text-xl font-bold text-gray-800">Live Search Filter</h2>
                    </div>
                    <LiveSearchFilter/>
                  </div>
                </div>
              </div>
            </div>

            {/* Password Strength Checker Card */}
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-white/50">
                <div className="p-1 bg-linear-to-r from-red-500 to-orange-600 rounded-2xl">
                  <div className="bg-white rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-linear-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                        🔐
                      </div>
                      <h2 className="ml-3 text-xl font-bold text-gray-800">Password Strength Checker</h2>
                    </div>
                    <PasswordStrengthChecker/>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer Section */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full shadow-lg border border-white/50">
              <span className="text-sm text-gray-600">Built with</span>
              <span className="mx-2 text-red-500">❤️</span>
              <span className="text-sm text-gray-600">using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}