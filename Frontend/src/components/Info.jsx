function Info() {
  const stats = [
    { header: "Free", label: "Always free to use" },
    { header: "4", label: "Fuel types supported" },
    { header: "DOE", label: "Weekly price source" },
    { header: "Split", label: "Group cost sharing" },
  ];

  return (
    <section id="Info" className="border-t p-4 border-b border-slate-800">
      <div className="mx-auto max-w-6xl flex">
        {stats.map((item, i) => (
          <div key={i} className="flex-1 flex flex-col items-center justify-center text-center py-10 px-6">
            <h3 className="text-white text-4xl font-bold mb-2">
              {item.header}
            </h3>
            <p className="text-slate-400 text-sm">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Info;