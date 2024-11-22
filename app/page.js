
import Card from "./components/Card";
import CardImage from "./components/CardImage";
import ContactNav from "./components/ContactNav";
import ScoreBanner from "./components/ScoreBanner";
import ProjectReview from "./components/ProjectReview";

export default function Home() {
  return (
    <>
      {/* Card Image */}
      <div className=" w-full h-screen flex flex-col lg:flex-row justify-center lg:justify-end items-center px-4 max-w-[1600px]">
      <ProjectReview title={'Card Location'} description={'On hover, it reveals a description, enhancing interactivity and providing additional context while maintaining a clean and minimalist design.'} />
        <div className="w-full lg:w-1/2 border min-h-[600px] max-h-[90%]  h-full rounded-xl border-neutral-300 p-2 lg:p-8 flex justify-center items-center">
        <CardImage />
        </div>
      </div>

      {/* score  */}
         <div className=" w-full h-screen flex flex-col lg:flex-row justify-center lg:justify-end items-center px-4 max-w-[1600px]">
         <ProjectReview title={'Pill-shaped socore view'} description={'A pill-shaped action bar inspired by Paisanos Studio, featuring a metric label ("NPS") with an icon, a brief text summary, and an view more button. Clean and functional for dashboards or analytics.'} />
        <div className="w-full lg:w-1/2 border min-h-[600px] max-h-[90%]  h-full rounded-xl border-neutral-300 p-2 lg:p-8 flex justify-center items-center">
        <ScoreBanner />
        </div>
      </div>

      {/* Contact Section */}
      <div className=" w-full h-screen flex flex-col lg:flex-row justify-center lg:justify-end items-center px-4 max-w-[1600px]">
        <ProjectReview title={'Free Consultation CTA'} description={'Free Consultation CTA component designed with three layouts: an input field with a send button for lead capture, a minimalist pill-shaped button for quick action, and a layout displaying a success message'} />
        <div className="w-full lg:w-1/2 border min-h-[600px] max-h-[90%]  h-full rounded-xl border-neutral-300 p-2 lg:p-8 flex justify-center items-center">
        <ContactNav />
        </div>
      </div>
      {/* Card Section */}
      <div className=" w-full h-screen flex flex-col lg:flex-row justify-center lg:justify-end items-center px-4 max-w-[1600px]">
        <ProjectReview title={'Expanded card'} description={'A storytelling card inspired by Memorisely, designed with an interactive layout that expands on click. The collapsed version shows a clean preview with the course title, duration, and format. Upon expansion, additional details such as a description and highlights are revealed, creating an engaging and functional user experience.'} />
        <div className="w-full lg:w-1/2 border min-h-[600px] max-h-[90%]  h-full rounded-xl border-neutral-300 p-2 lg:p-8 flex justify-center items-center">
        <Card />
        </div>
      </div>
    </>
  );
}
