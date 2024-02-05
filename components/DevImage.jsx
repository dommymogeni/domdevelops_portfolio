import Image from "next/image"

const DevImage = ({containerStyles, imgSrc}) => {
  return (
      <div className={`${containerStyles}`}>
          <Image src={imgSrc} fill priority alt='developer image' className=""/>
      </div>
  )
}

export default DevImage