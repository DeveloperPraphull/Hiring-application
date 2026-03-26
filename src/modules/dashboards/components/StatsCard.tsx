type Props = {
  title: string;
  amount: string;   
};

const StatsCard = ({ title, amount }: Props) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold">{title}</h3>
      <h2 className="text-xl font-bold mt-2">{amount}</h2>

      {/* <div className="mt-3 text-sm text-gray-500">
        Monthly data + analytics
      </div> */}
    </div>
  );
};

export default StatsCard;