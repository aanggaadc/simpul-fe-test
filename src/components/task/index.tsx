import { useState, useEffect } from "react";
import { useTaskContext } from "@/providers/task-provider";
import TaskCard from "./task-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { PopupContainer, Spinner } from "../shared";

const Task = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { taskList, setTaskList } = useTaskContext();

  const onAddTask = () => {
    const newTask = {
      id: taskList.length + 1,
      title: "",
      description: "",
      targetDate: undefined,
      isCompleted: false,
    };

    setTaskList((prev) => [...prev, newTask]);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <PopupContainer>
      <div className="py-6 px-8 flex flex-col h-full">
        <div className="flex items-center justify-between">
          <Select>
            <SelectTrigger className="w-[118px] h-10 border-[#828282]">
              <span className="text-lg font-medium">My Task</span>
            </SelectTrigger>
            <SelectContent className="w-[288px] p-0">
              <SelectItem
                value="personal-errand"
                className="font-lato text-lg font-medium border-b"
              >
                Personal Errands
              </SelectItem>
              <SelectItem
                value="urgent-to-do"
                className="font-lato text-lg font-medium"
              >
                Urgent To-Do
              </SelectItem>
            </SelectContent>
          </Select>

          <button
            onClick={onAddTask}
            className="h-10 px-4 bg-primary text-white rounded font-bold"
          >
            New Task
          </button>
        </div>

        {isLoading ? (
          <div className="flex-grow flex flex-col items-center justify-center">
            <Spinner className="mb-2" />
            <span className="text-xs font-semibold text-dark-gray">
              Loading Task List ...
            </span>
          </div>
        ) : (
          <div className="flex-grow overflow-y-scroll pr-2">
            {taskList.map((task) => (
              <TaskCard key={task.id} props={task} />
            ))}
          </div>
        )}
      </div>
    </PopupContainer>
  );
};

export default Task;
