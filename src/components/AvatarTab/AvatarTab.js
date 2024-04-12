import "./AvatarTab.scss";

const AvatarTab = ({src, alt, projectName, className}) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} className="" />
      <p className="text-sm">{projectName}</p>
    </div>
  );
};

export default AvatarTab;
