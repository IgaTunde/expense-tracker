import { StyleSheet, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.99,
    date: new Date("2022-12-19"),
  },
  {
    id: "e3",
    description: "A pair of shorts",
    amount: 49.99,
    date: new Date("2023-05-19"),
  },
  {
    id: "e4",
    description: "A pair of book",
    amount: 19.99,
    date: new Date("2023-07-17"),
  },
  {
    id: "e5",
    description: "A pair of pencil",
    amount: 13.99,
    date: new Date("2023-08-08"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e7",
    description: "A pair of trousers",
    amount: 89.99,
    date: new Date("2022-12-19"),
  },
  {
    id: "e8",
    description: "A pair of shorts",
    amount: 49.99,
    date: new Date("2023-05-19"),
  },
  {
    id: "e9",
    description: "A pair of book",
    amount: 19.99,
    date: new Date("2023-07-17"),
  },
];

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} preiodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
