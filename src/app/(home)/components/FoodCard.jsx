import Image from "next/image";

// components/FoodCard.js
const FoodCard = ({ name, image , category, price, rating = 5 }) => {
    return (
      <div className="bg-white rounded-lg shadow-md w-full">
        <Image 
            src={image} 
            alt="food item"
            className="object-contain w-full h-auto"
            />
        <div className="flex justify-between items-start p-4">
          <div>
            <h3 className="font-medium text-lg mb-2">{name}</h3>
            <div className="text-yellow-400">
              {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
            </div>
          </div>
          <div className="text-right">
            <div className='px-4 py-2 bg-[#F03328] mb-2 border rounded-full'><p className="text-white text-sm">{category}</p></div>
            <p className="font-bold text-lg">{price}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default FoodCard;