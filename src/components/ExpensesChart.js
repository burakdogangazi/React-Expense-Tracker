import React from "react";
import Chart from "../components/Chart/Chart";
function ExpensesChart(props) {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 1 },
    { label: "Mar", value: 2 },
  ];

  for (const expense in props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value +=expense.amount
}

  return <Chart dataPoints={chartDataPoints} />;
}

export default ExpensesChart;
