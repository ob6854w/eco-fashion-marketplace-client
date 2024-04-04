import "./Founder.scss"

const  Founder = ({src,name}) => {
  return (
    <div className="founder">
      <div className="founder__wrapper">
        <img src={src}/>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Founder;
