"use client"
import { useState } from "react";

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState("");
// النتغيرات التي يتم عمل عليها العمليات مثل القوة واللون و النص 
let bawer = "";
let borderColor = "";
let textColor = "";
// الشروط والاجرائات التي تتم على المتغيرات
if(password.length < 6){
    bawer = "Easy";
    borderColor = "border-red-500";
    textColor = "text-red-500";
}else if(password.length >= 6 && password.length <= 10){
    bawer = "Medium";
    borderColor = "border-orange-400";
    textColor = "text-orange-400";
}else{
    bawer = "Difficult";
    borderColor = "border-green-600";
    textColor = "text-green-600";
}

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 rounded-xl shadow-md w-[350px] space-y-4 bg-white">
        <h1 className="text-2xl font-bold ">Password Checker</h1>
        <hr className="text-gray-500"/>
        {/* المدخل الذي يستقبل كلمة السر من المستخدم */}
        <input 
            placeholder="Enter password. . . ."
            type="password" 
            onChange={(e)=>setPassword(e.target.value)} 
            className={`w-full border-b-4 ${borderColor} rounded-lg p-3 shadow outline-none transition-all duration-300`}
            />
        {/* نص يعرض النتيجة */}
        {password.length > 0 && <p className={`text-lg font-semibold ${textColor}`}>your password is : {bawer}</p>}

      </div>
    </div>
  );
};

export default PasswordStrengthChecker;