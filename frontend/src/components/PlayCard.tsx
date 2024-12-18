type Props = {
    img: string
}

const PlayCard = ({ img }: Props) => {
  return (
    <label className={`block card-size m-1 relative cursor-pointer animate-[wiggle_1s_ease-in-out_infinite] `} >
    <input type="checkbox"
    />
    <div className="card-bg absolute card-size transition-[transform]" style={{backgroundImage: `url("/img/cardBack.jpg")`}}></div>
    <div className="front card-bg absolute card-size transition-[transform]" style={{backgroundImage: `url("${img}")`}}></div>
  </label>
  )
}

export default PlayCard