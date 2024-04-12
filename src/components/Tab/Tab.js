import "./Tab.scss";

const Tab = ({ tabTitle, num,onClick,activeTab }) => {
  return (
    <div
      className={`tab ${activeTab ? "active_tab" : ""}`}
        onClick={onClick}
    >
      <p className="tab__title">{tabTitle}</p>
      <p className="tab__num">{num}</p>
    </div>
  );
};

export default Tab;
