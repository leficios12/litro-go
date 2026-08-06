import InfoCard from "../components/InfoCard";
export default InfoSection;

function InfoSection() {
    return(
        <section id="Info" className="border-t p-4 border-b border-slate-800 ">
            <div className="mx-auto max-w-6xl flex ">
                <InfoCard header="Free" label="Free to use"/>
                <InfoCard header="4" label="Fuel types supported"/>
                <InfoCard header="DOE" label="Weekly price source"/>
                <InfoCard header="Split" label="Group cost sharing | Solo"/>
            </div>
        </section>
    )
}

/*
const stats = [
    { header: "Free", label: "Always free to use" },
    { header: "4", label: "Fuel types supported" },
    { header: "DOE", label: "Weekly price source" },
    { header: "Split", label: "Group cost sharing" },
  ];
  */