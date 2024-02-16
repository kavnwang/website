import PageLayout from '../layouts/PageLayout';
import Image from 'next/image';

export default function Home() {
  return (
      <PageLayout>
        <div className={`flex flex-row place-content-center space-x-16`}>

          <div className={"text-lg font-light"}>
          Hello! I'm Kevin, a high school senior. I love learning about people and the world, and I dream of fostering fulfillment, curiosity, and kindness in the world around us, starting with myself. To this end, I hope to pursue math, which forms the backbone of the world around us, and computer science, which brings ideas and creativity to scale. I'm also interested in connecting with people—through teaching, conversation, or building communities. 
          </div>
            <Image src={`/images/hero.jpg`} width={200} height={200} alt={"Picture of Kevin"} className={``}/>

        </div>
      </PageLayout>
    );
}
