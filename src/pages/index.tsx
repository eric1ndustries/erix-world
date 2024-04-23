import Image from "next/image"
import Link from "next/link"
import { PATHS, TITLE_SUBTITLE_OBJECTS, DESCRIPTIONS } from "../constants"
import Gateway from "../components/Gateway";

export default function Home() {
  return (
    <>
      <div className="group rounded-lg border border-transparent px-4 py-3">
          <h1 className={'mb-3 text-3xl font-semibold'}>
            Hey!
          </h1>
          <h1 className={'mb-3 text-2xl font-semibold'}>
            <p> {DESCRIPTIONS.LANDING_FIRST} </p>
            <p> {DESCRIPTIONS.LANDING_SECOND} </p>
          </h1>
          <Gateway entranceInfo={TITLE_SUBTITLE_OBJECTS.RESUME} pathString={PATHS.RESUME} blank/>
          <Gateway entranceInfo={TITLE_SUBTITLE_OBJECTS.MULTIMEDIA} pathString={PATHS.MEDIA_PROJECTS}/>
          <Gateway entranceInfo={TITLE_SUBTITLE_OBJECTS.CODE} pathString={PATHS.CODE_PROJECTS}/>
          <Link href={PATHS.ARCHIVE}>
            <Image 
              className="graphic-btn"
              alt="I Am Waiting"
              src="/iAmWaiting.svg"
              width="700"
              height="400"
              title="Enter the archives"
            />
          </Link>
      </div>
    </>
  )
}
