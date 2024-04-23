import HomeButton from '../../components/HomeButton';
import ArchiveScroll from '../../components/ArchiveScroll';
import Image from 'next/image';

export default function Archive() {
    return (
        <>
        <div id="scroll-test-0" className='display:block'>
            <section>
            <HomeButton />
            <ArchiveScroll className="btn" href="#scroll-test-1">
              Scroll to different 1
            </ArchiveScroll>
            <Image 
              className="graphic-btn"
              alt="I Am Waiting"
              src="/iAmWaiting.svg"
              width="500"
              height="400"
              title="Enter the archives"
            />
            <Image 
              className="graphic-btn"
              alt="I Am Waiting" 
              src="/iAmWaiting.svg"
              width="500"
              height="400"
              title="Enter the archives"
            />
            </section>            
        </div>
       <section id="scroll-test-1">
       <ArchiveScroll className="btn" href="#scroll-test-0">
              Scroll to 0
            </ArchiveScroll>
         Archives
       </section>
        </>
    )
}
