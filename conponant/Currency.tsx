"use client"
import { useState, useEffect } from 'react';

// تعريف واجهة البيانات
interface CurrencyData {
  date: string;
  usd: {
    [key: string]: number;
  };
}

const Currency = () => {
  const [currencies, setCurrencies] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);
  const [currentRate, setCurrentRate] = useState<number>(0);

  const PRIMARY_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";
  const FALLBACK_URL = "https://latest.currency-api.pages.dev/v1/currencies/usd.json";

  const fetchInitialData = async () => {
    try {
      setLoading(true);
      const res = await fetch(PRIMARY_URL);
      const data = await res.json();
      setCurrencies(data);
    } catch (error) {
      console.error("Error fetching initial data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  const handleConvert = async () => {
    if (amount <= 0) return;

    try {
      let response;
      try {
        response = await fetch(PRIMARY_URL);
      } catch (err) {
        response = await fetch(FALLBACK_URL);
      }

      const data: CurrencyData = await response.json();
      
      // سعر الدولار الواحد مقابل الشيكل (مثلاً 3.70)
      const usdToIlsRate = data.usd.ils; 

      // الحسبة: المبلغ بالشيكل ÷ سعر الشيكل مقابل الدولار
      const finalResult = amount / usdToIlsRate;

      setCurrentRate(usdToIlsRate);
      setResult(finalResult);

    } catch (error) {
      console.error("Conversion error:", error);
      alert("حدث خطأ في جلب البيانات.");
    }
  };

  return (
    <div >
      <div className="bg-white rounded-2xl shadow-xl p-8 w-100 max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Currency Converter API</h2>
        
        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : (
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Last Updated</h3>
              <p className="text-lg font-bold text-blue-600">{currencies?.date}</p>
            </div>
          </div>
        )}
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Amount (ILS)</label>
            <input 
              type="number"
              placeholder="Enter amount"
              value={amount || ''}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg font-semibold transition-all duration-200"
            />
          </div>
          
          <button 
            onClick={handleConvert}
            className="w-full bg-linear-to-r from-blue-500 to-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Convert to USD
          </button>
        </div>
        
        {result !== null && (
          <div className="mt-8 space-y-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Result</h3>
              <p className="text-lg font-bold text-blue-600">{amount} ILS = ${result.toFixed(2)} USD</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Exchange Rate</h3>
              <p className="text-sm text-gray-700">1 USD = {currentRate.toFixed(4)} ILS</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Currency;