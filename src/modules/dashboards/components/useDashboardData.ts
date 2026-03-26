export const useDashboardData = () => {
  return {
    revenue: {
      total: "$552,890",
      growth: "+10%",
      monthly: "$5,920",
      yearly: "$450,320",
    },

    sales: {
      total: 1250,
      growth: "+12%",
      breakdown: [
        { name: "Marketing", value: 55.7, color: "#3B82F6" },
        { name: "Web", value: 29.1, color: "#F97316" },
        { name: "Social", value: 17.2, color: "#14B8A6" },
      ],
    },

    expenses: {
      total: "$125,430",
      breakdown: [
        { name: "Payroll", value: "$53.2K", color: "#FACC15" },
        { name: "Advertising", value: "$29.1K", color: "#FB923C" },
        { name: "Software", value: "$17.2K", color: "#4ADE80" },
      ],
    },

    audits: {
      total: 242,
      growth: "+39%",
      increase: "+48%",
      breakdown: [
        { name: "Tech", value: "$55.7K", color: "#22C55E" },
        { name: "Billing", value: "$22.1K", color: "#3B82F6" },
        { name: "BPO", value: "$33.1K", color: "#A855F7" },
      ],
    },
  };
};