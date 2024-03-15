import Image from "next/image";
import styles from "./page.module.css";
import Service from "@/components/service";
import Soga from "@/components/soga";
import Soga2 from "@/components/soga2";
import Soga3 from "@/components/soga3";
import YoutubeVideo from "@/components/youtube";



export default function Home() {
  return (
    <div>
      <Service />
      <Soga />
      <Soga2 />
      <Soga3 />
      <YoutubeVideo videoId="0d8RS7xSXA0"></YoutubeVideo>
    </div>
  );
}
