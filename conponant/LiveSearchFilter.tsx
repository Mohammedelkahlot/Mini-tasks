"use client"
import { useState, useMemo, SetStateAction } from "react";

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
}

const LiveSearchFilter = () => {
    const products: Product[] = [
        { id: 1, name: "Laptop", category: "Electronics", price: 999 },
        { id: 2, name: "Phone", category: "Electronics", price: 699 },
        { id: 3, name: "Headphones", category: "Electronics", price: 199 },
        { id: 4, name: "Tablet", category: "Electronics", price: 499 },
        { id: 5, name: "Watch", category: "Accessories", price: 299 },
        { id: 6, name: "Camera", category: "Electronics", price: 799 },
        { id: 7, name: "Speaker", category: "Electronics", price: 149 },
        { id: 8, name: "Mouse", category: "Accessories", price: 49 },
        { id: 9, name: "Keyboard", category: "Accessories", price: 89 },
        { id: 10, name: "Monitor", category: "Electronics", price: 399 },
    ];

    const [searchTerm, setSearchTerm] = useState<string>("");
   
    const handleInputChange =(e: { target: { value: SetStateAction<string>; }; })=>{
        setSearchTerm(e.target.value)
    }
    const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
    
    return (<>
        
        <div className="w-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Live Search Filter</h2>
                
                {/* Search Input */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Search Products</label>
                    <input 
                        type="text" 
                        placeholder="Search by name or category..." 
                        value={searchTerm}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        onChange={handleInputChange}
                    />
                </div>
                {filteredProducts.map((product) => (
                    <div key={product.id} className="flex justify-between my-3 p-2">
                        <h2 className=" text-gray-800">{product.name}</h2>
                        <p className="text-green-500 font-bold">{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    </>);
};

export default LiveSearchFilter;