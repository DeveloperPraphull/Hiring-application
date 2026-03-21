import Xarrow from "react-xarrows";
import { Settings, FileText, DollarSign } from "lucide-react";
import CEOSection from "./CEOSection";

export default function OrgStructure() {

  return (
    <div className="w-full min-h-screen bg-gray-100 py-16">

      {/* TOP ICONS */}
      <div className="flex justify-center gap-12 mb-10 text-blue-500">
        <FileText size={26}/>
        <DollarSign size={26}/>
        <Settings size={26}/>
      </div>

      {/* CEO */}
      <div className="flex justify-center mb-40">

        <div id="ceo">
          <CEOSection />
        </div>

      </div>

      {/* DEPARTMENTS */}
      <div className="grid grid-cols-6 gap-8 px-10">

        <Department
          id="tech-head"
          color="blue"
          title="TECH"
          items={["Software","App, Web","AI, IT Support"]}
        />

        <Department
          id="marketing-head"
          color="green"
          title="MARKETING"
          items={["Digital","Branding","Advertising"]}
        />

        <Department
          id="sales-head"
          color="red"
          title="SALES"
          items={["Lead Gen","CRM","Revenue Growth"]}
        />

        <Department
          id="auditing-head"
          color="yellow"
          title="AUDITING"
          items={["Finance","Compliance","Tax Filing"]}
        />

        <Department
          id="hr-head"
          color="purple"
          title="HR"
          items={["Recruitment","Payroll","Training"]}
        />

        <Department
          id="bpo-head"
          color="cyan"
          title="BPO"
          items={["Customer Support","Back Office","KPO Services"]}
        />

      </div>

      {/* ARROWS */}
{/* LEFT SIDE DEPARTMENTS */}

<Xarrow
  start="ceo"
  end="tech-head"
  startAnchor="left"
  endAnchor="top"
  path="smooth"
  color="#cbd5e1"
  strokeWidth={2}
  dashness={{ strokeLen:5, nonStrokeLen:5 }}
/>

<Xarrow
  start="ceo"
  end="marketing-head"
  startAnchor="left"
  endAnchor="top"
  path="smooth"
  color="#cbd5e1"
  strokeWidth={2}
  dashness={{ strokeLen:5, nonStrokeLen:5 }}
/>

<Xarrow
  start="ceo"
  end="sales-head"
  startAnchor="left"
  endAnchor="top"
  path="smooth"
  color="#cbd5e1"
  strokeWidth={2}
  dashness={{ strokeLen:5, nonStrokeLen:5 }}
/>


{/* RIGHT SIDE DEPARTMENTS */}

<Xarrow
  start="ceo"
  end="auditing-head"
  startAnchor="right"
  endAnchor="top"
  path="smooth"
  color="#cbd5e1"
  strokeWidth={2}
  dashness={{ strokeLen:5, nonStrokeLen:5 }}
/>

<Xarrow
  start="ceo"
  end="hr-head"
  startAnchor="right"
  endAnchor="top"
  path="smooth"
  color="#cbd5e1"
  strokeWidth={2}
  dashness={{ strokeLen:5, nonStrokeLen:5 }}
/>

<Xarrow
  start="ceo"
  end="bpo-head"
  startAnchor="right"
  endAnchor="top"
  path="smooth"
  color="#cbd5e1"
  strokeWidth={2}
  dashness={{ strokeLen:5, nonStrokeLen:5 }}
/>

</div>
  );
}


function Department({ id, color, title, items }) {

  const colors = {
    blue:"bg-blue-600",
    green:"bg-green-600",
    red:"bg-red-500",
    yellow:"bg-yellow-500",
    purple:"bg-purple-600",
    cyan:"bg-cyan-600"
  };

  return(

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden min-w-[180px]">

      {/* HEADER */}
      <div
        id={id}
        className={`${colors[color]} text-white text-center py-3 font-semibold text-sm`}
      >
        {title}
      </div>

      {/* CONTENT */}
      <ul className="p-4 text-sm text-gray-600 space-y-2">

        {items.map((item,i)=>(
          <li key={i} className="flex items-center gap-2">

            <div className={`w-2 h-2 rounded-full ${colors[color]}`} />

            {item}

          </li>
        ))}

      </ul>

    </div>

  );
}