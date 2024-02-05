'use client'
import CountUp from "react-countup"

const Badge = ({
  containerStyles, endCountUpNum, endCountUpTxt, icon, badgeText
}) => {
  return (
    <div className={`badge ${containerStyles}`}>

      <div className="text-3xl text-primary">{icon}</div>

      <div className="flex items-center gap-x-3">
        <div className="text-5xl font-semibold text-primary">
          <CountUp end={endCountUpNum} delay={1} duration={4} />
          {endCountUpTxt}
        </div>
        <div className="max-w-6xl leading-none text-muted-foreground text-[15px] font-medium ">
          {badgeText}
        </div>
      </div>
    </div>
  )
}

export default Badge