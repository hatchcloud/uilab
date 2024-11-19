
import Card from "./components/Card";
import ContactNav from "./components/ContactNav";

export default function Home() {
  return (
    <>
      {/* Contact Section */}
      <div className=" w-full h-screen flex flex-col lg:flex-row justify-center lg:justify-end items-center px-4 max-w-[1600px]">
        <div className="w-full lg:w-1/2 lg:min-h-[90%] flex justify-start gap-4 py-2 lg:py-8">
        <span className="flex gap-2 items-center top-2 left-2 bg-neutral-100/25 border border-neubg-neutral-50 text-neubg-neutral-600 text-sm font-medium p-2 rounded-lg leading-none h-fit">
              Motion
        </span>
        <span className="flex gap-2 items-center top-2 left-2 bg-neutral-100/25 border border-neubg-neutral-50 text-neubg-neutral-600 text-sm font-medium p-2 rounded-lg leading-none h-fit">
              NextJs
        </span>
        <span className="flex gap-2 items-center top-2 left-2 bg-neutral-100/25 border border-neubg-neutral-50 text-neubg-neutral-600 text-sm font-medium p-2 rounded-lg leading-none h-fit">
              Tailwind
        </span>
        </div>
        <div className="w-full lg:w-1/2 border min-h-[600px] max-h-[90%]  h-full rounded-xl border-neutral-300 p-8 flex justify-center items-center">
        <ContactNav />
        </div>
      </div>
      {/* Card Section */}
      <div className=" w-full h-screen flex flex-col lg:flex-row justify-center lg:justify-end items-center px-4 max-w-[1600px]">
        <div className="w-full lg:w-1/2 lg:min-h-[90%] flex justify-start gap-4 py-2 lg:py-8">
        <span className="flex gap-2 items-center top-2 left-2 bg-neutral-100/25 border border-neubg-neutral-50 text-neubg-neutral-600 text-sm font-medium p-2 rounded-lg leading-none h-fit">
              Motion
        </span>
        <span className="flex gap-2 items-center top-2 left-2 bg-neutral-100/25 border border-neubg-neutral-50 text-neubg-neutral-600 text-sm font-medium p-2 rounded-lg leading-none h-fit">
              NextJs
        </span>
        <span className="flex gap-2 items-center top-2 left-2 bg-neutral-100/25 border border-neubg-neutral-50 text-neubg-neutral-600 text-sm font-medium p-2 rounded-lg leading-none h-fit">
              Tailwind
        </span>
        </div>
        <div className="w-full lg:w-1/2 border min-h-[600px] max-h-[90%]  h-full rounded-xl border-neutral-300 p-8 flex justify-center items-center">
        <Card />
        </div>
      </div>
    </>
    
  );
}
