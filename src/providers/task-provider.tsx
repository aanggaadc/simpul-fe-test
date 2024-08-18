import { useContext, createContext, useState } from "react";
import { TaskType, tasks } from "@/fixtures/task";

interface TaskContextType {
  taskList: TaskType[];
  setTaskList: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

interface TaskProviderProps {
  children: React.ReactNode;
}

const ChatContext = createContext<TaskContextType | undefined>(undefined);

export const useTaskState = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useTaskState must be used within a TaskContextProvider");
  }
  return context;
};

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [taskList, setTaskList] = useState(tasks);

  return (
    <ChatContext.Provider value={{ taskList, setTaskList }}>
      {children}
    </ChatContext.Provider>
  );
};

export default TaskProvider;
