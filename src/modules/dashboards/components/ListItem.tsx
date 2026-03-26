type Props = {
  color: string;
  label: string;
  value: string;
};

const ListItem = ({ color, label, value }: Props) => {
  return (
    <div className="flex justify-between text-sm color-gray-700 text-gray-700">
      <span className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full" style={{ background: color }} />
        {label}
      </span>
      <span className="font-medium">{value}</span>
    </div>
  );
};

export default ListItem;