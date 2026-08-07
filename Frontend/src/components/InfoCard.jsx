const InfoCard = (props) => {
  return (
        <div className="flex-1 flex flex-col text-center py-10 px-6">
            <h3 className="text-white text-4xl font-bold mb-2">
              {props.header}
            </h3>
            <p className="text-slate-400 text-sm">
              {props.label}
            </p>
      </div>
  );
}

export default InfoCard;