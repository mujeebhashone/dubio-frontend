import BuiltInSection from "@/components/landing/BuiltInSection";
import FutureOfVoiceCards from "@/components/landing/FutureOfVoiceCards";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import HowItsWork from "@/components/landing/HowItsWork";
import MainFooter from "@/components/landing/MainFooter";
import Platform from "@/components/landing/Platform";
import VideoSection from "@/components/landing/VideoSection";
import ResilienceSection from "@/components/ResilienceSection";

export default function Home() {
  return (
   <div className="max-w-[1920px] mx-auto overflow-x-hidden">
    <Header/>
    <HeroSection/>
    <HowItsWork/>
    <VideoSection/>
    <ResilienceSection/>
    <FutureOfVoiceCards/>
    <BuiltInSection/>
    <Platform/>
    <MainFooter/>
   </div>
  );
}
