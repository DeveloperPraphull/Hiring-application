import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

type DataItem = {
  name: string;
  value: number;
  color: string;
};

type CardProps = {
  title: string;
  total: number;
  growth: string;
  data: DataItem[];
};

const Card = ({ title, total, growth, data }: CardProps) => {
  return (
    <div className="w-[100%] rounded-xl shadow-md border bg-white overflow-hidden">
      
      {/* Header */}
      <div className="flex justify-between items-center bg-red-500 text-white px-4 py-2">
        <h3 className="font-semibold">{title}</h3>
        <span className="text-sm font-medium">{growth}</span>
      </div>

      {/* Body */}
      <div className="p-4">
        
        {/* Top Section */}
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">{total.toLocaleString()}</h2>

          {/* Donut Chart */}
          <div className="w-[24%]">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={30}
                  outerRadius={45}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Breakdown List */}
        <div className="mt-4 space-y-2">
          {data.map((item, index) => (
            <div key={index} className="flex justify-between items-center text-sm">
              
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-gray-600">{item.name}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-medium">
                  ${item.value.toFixed(1)}K
                </span>
                <span className="text-green-500">✔</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Card;