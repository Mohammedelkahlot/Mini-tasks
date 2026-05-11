"use client"
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const handlePlus = () => {
        if (count < 10) {
            setCount(count + 1);
        } else {
            alert("لا يمكن زيادة العداد عن 10");
        }
    };

    const handleMinus = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            alert("لا يمكن إنقاص العداد عن صفر");
        }
    };

    const handleReset = () => {
        setCount(0);
    };

    // تحديد لون الخلفية ديناميكياً بناءً على قيمة العداد
    const getCounterColor = () => {
        if (count === 10) return "bg-red-500 text-white";
        if (count === 0) return "bg-gray-200";
        return "bg-blue-500 text-white";
    };

    return (
        <div >
            <div className="bg-white rounded-2xl shadow-xl p-8">
                <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">العداد</h1>
                
                <div className="flex items-center justify-center gap-6 mb-8">
                    <button 
                        onClick={handlePlus}
                        disabled={count >= 10}
                        className={`w-16 h-16 rounded-full text-2xl font-bold transition-all ${
                            count >= 10 
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                                : 'bg-green-500 hover:bg-green-600 text-white cursor-pointer active:scale-95'
                        }`}
                    >
                        +
                    </button>
                    
                    <div className={`text-5xl font-black px-8 py-4 rounded-2xl transition-all ${getCounterColor()}`}>
                        {count}
                    </div>
                    
                    <button 
                        onClick={handleMinus}
                        disabled={count <= 0}
                        className={`w-16 h-16 rounded-full text-2xl font-bold transition-all ${
                            count <= 0 
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                                : 'bg-red-500 hover:bg-red-600 text-white cursor-pointer active:scale-95'
                        }`}
                    >
                        -
                    </button>
                </div>
                
                <div className="text-center">
                    <button 
                        onClick={handleReset}
                        className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-lg transition-all active:scale-95"
                    >
                        إعادة تعيين
                    </button>
                </div>
                
                <div className="mt-6 text-center text-sm text-gray-500 ">
                    النطاق: 0 - 10
                </div>
            </div>
        </div>
    );
};

export default Counter;