const Spacer = ({ sm, md, lg }) => {
  let height = "h-4";

  if (md) height = "h-12";
  if (lg) height = "h-20";

  return <div className={height}></div>;
};

export default Spacer;
