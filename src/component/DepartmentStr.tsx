type DepartmentColor = 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'cyan';

interface DepartmentStrProps {
  title: string;
  items: string[];
  color?: DepartmentColor;
}

function DepartmentStr({ title, items, color = 'blue' }: DepartmentStrProps) {

  const colors: Record<DepartmentColor, { bg: string; dot: string }> = {
    blue: {
      bg: "bg-blue-600",
      dot: "bg-blue-600"
    },
    green: {
      bg: "bg-green-600",
      dot: "bg-green-600"
    },
    red: {
      bg: "bg-red-500",
      dot: "bg-red-500"
    },
    yellow: {
      bg: "bg-yellow-500",
      dot: "bg-yellow-500"
    },
    purple: {
      bg: "bg-purple-600",
      dot: "bg-purple-600"
    },
    cyan: {
      bg: "bg-cyan-600",
      dot: "bg-cyan-600"
    }
  };

  const style = colors[color];

  return (
    <div className="relative">

      {/* TITLE BADGE */}
      <div className={`${style.bg} text-white text-center py-2 px-4 rounded-xl font-bold shadow-md`}>
        {title}
      </div>

      {/* TRIANGLE POINTER */}
      <div className="flex justify-center">
        <div className={`w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent ${style.bg.replace("bg","border-t")}`}></div>
      </div>

      {/* CONTENT BOX */}
      <div className="bg-white rounded-xl shadow-md p-4 border border-gray-200">

        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-gray-700 text-sm font-medium">
              <span className={`w-2 h-2 rounded-full ${style.dot}`}></span>
              {item}
            </li>
          ))}
        </ul>

      </div>

    </div>
  );
}

export default DepartmentStr


