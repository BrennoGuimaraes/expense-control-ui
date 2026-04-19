import { Pie, PieChart, Sector, Tooltip } from "recharts";
import { TypesWithPercentResponse } from "@/app/types/TypesWithPercentResponse";

interface Props {
  types: TypesWithPercentResponse[];
  isAnimationActive?: boolean;
}

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#a855f7",
  "#ec4899",
  "#14b8a6",
  "#f43f5e",
  "#84cc16",
  "#f97316",
  "#6366f1",
  "#06b6d4",
  "#eab308",
  "#10b981",
];

const renderCustomShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
    props;
  const angle = Math.abs(endAngle - startAngle);
  const radius = (innerRadius + outerRadius) / 2;
  const arcLength = (angle * Math.PI * radius) / 180;
  const cr = Math.min(8, arcLength / 2 - 1);

  return (
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={fill}
      cornerRadius={cr < 0 ? 0 : cr}
    />
  );
};

export default function PieChartWithPaddingAngle({
  types,
  isAnimationActive = true,
}: Props) {
  const data = types.map((t, index) => ({
    name: t.nameType,
    value: t.percent,
    fill: COLORS[index % COLORS.length],
  }));
  const total = data.reduce((sum, d) => sum + d.value, 0);

  const renderLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    value,
  }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 1.4;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const percent = ((value / total) * 100).toFixed(0);

    return (
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={12}
        fill="#555"
      >
        {percent}%
      </text>
    );
  };

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        innerRadius={120}
        outerRadius={160}
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={isAnimationActive}
        label={renderLabel}
        labelLine={false}
        shape={renderCustomShape}
      />
      <Tooltip
        formatter={(value) => `${((Number(value) / total) * 100).toFixed(1)}%`}
      />
    </PieChart>
  );
}
