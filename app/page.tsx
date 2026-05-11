import Counter from "@/conponant/Counter";
import Currency from "../conponant/Currency";
import LiveSearchFilter from "@/conponant/LiveSearchFilter";
import PasswordStrengthChecker from "@/conponant/passwordStrengthChecker";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-blue-50 to-indigo-100 flex flex-col gap-4 p-4">
      <h1 className="text-4xl font-bold text-center text-neutral-800">مهمة الصغيرة</h1>
      <div className=" flex max-w-full mx-auto items-center justify-center gap-5 p-8">
        {/* <Currency/>
        <Counter/>
        <LiveSearchFilter/> */}
        <PasswordStrengthChecker/>
      </div>
    </div>
  );
}
