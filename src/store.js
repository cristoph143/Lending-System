export default {
  user: null,
  destinations: [
    {
      name: "Diminishing Interest",
      slug: "diminishing-interest",
      id: 1,
      description:
        "In Diminishing Balance Interest Rate method, interest is calculated every month on the outstanding loan balance as reduced by the principal repayment every month. EMI payment every month contains interest payable for the outstanding loan amount for the month plus principal repayment. On every EMI payment, outstanding loan amount reduces by the amount of principal repayment. Thus interest for next month is calculated only on the outstanding loan amount as reduced by the principal repayment this month.",
    },
    {
      name: "Fixed Interest",
      slug: "fixed-interest",
      id: 2,
      description:
        "In Fixed Interest Rate method, interest is calculated every month on the original loan amount. EMI payment every month contains interest payable for the original loan amount for the month plus principal repayment. On every EMI payment, outstanding loan amount reduces by the amount of principal repayment. Thus interest for next month is calculated on the original loan amount.",
    },
    {
      name: "Lump Sum",
      slug: "lump-sum",
      id: 3,
      description:
        "a single payment made at a particular time, as opposed to a number of smaller payments or installments.",
    },
    {
      name: "Penalty Calculator",
      slug: "penalty-calculator",
      id: 4,
      description:
        "Penalty is a fee charged by the lender for the delay in repayment of the loan. The penalty is charged on the outstanding loan amount. ",
    },
  ],
};
