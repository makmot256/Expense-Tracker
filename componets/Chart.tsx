import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

interface ChartProps {
  income: number
  expenses: number
}

export default function Chart({ income, expenses }: ChartProps) {
  const data = [
    { name: 'Income', value: income },
    { name: 'Expenses', value: expenses },
  ]

  const COLORS = ['#4CAF50', '#F44336']

  return (
    <div className="h-64 mb-6">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

