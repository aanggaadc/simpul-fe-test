export interface TaskType {
  id: number;
  title: string;
  description: string;
  targetDate: Date | undefined;
  isCompleted: boolean;
}

export const tasks: TaskType[] = [
  {
    id: 1,
    title: "Close off Case #012920- RODRIGUES, Amiguel",
    description:
      "Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!",
    targetDate: new Date("2024-08-22"),
    isCompleted: false,
  },
  {
    id: 2,
    title:
      "Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203",
    description:
      "All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in.",
    targetDate: new Date("2024-08-23"),
    isCompleted: false,
  },
  {
    id: 3,
    title: "Set up appointment with Dr Blake",
    description: "",
    targetDate: new Date("2024-08-24"),
    isCompleted: false,
  },
];
