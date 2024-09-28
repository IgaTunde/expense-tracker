import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpenseItems from "./ExpenseItems";

function renderExpenseItems({ item }) {
  return <ExpenseItems {...item} />;
}

export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItems}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({});
