

const Indicator = ({text, color}) => {
    return(
    <div className={`mb-1 mt-[11px] ${color} flex w-[233px] items-center justify-center rounded-sm  py-[10px] text-center text-xs font-semibold text-white `}>
        <h4>{text}</h4>
    </div>
    )
}

export default Indicator;