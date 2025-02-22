import { FiCameraOff } from "react-icons/fi";

export default function PlaceholderImage() {
  return (
    
     <div className="w-full h-full flex flex-col bg-base-200/30 items-center justify-center text-4xl text-primary">
      <FiCameraOff className="mb-4" />
      <p className="text-2xl"> لا تتوفر صورة   </p>
    </div>
  
  );
}