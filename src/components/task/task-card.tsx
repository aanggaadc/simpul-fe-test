import { useState, useRef, useEffect } from "react";
import { useTaskContext } from "@/providers/task-provider";
import { cn, formatDate } from "@/lib/utils";
import { differenceInDays } from "date-fns";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "../ui/textarea";
import { MoreIcon, ClockIcon, CalendarIcon, PencilIcon } from "../icons";
import { TaskType } from "@/fixtures/task";

interface TaskCardProps {
  props: TaskType;
}

const TaskCard: React.FC<TaskCardProps> = ({ props }) => {
  const { id, title, description, targetDate, isCompleted } = props;
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const { setTaskList } = useTaskContext();
  const currentDate = new Date();
  const daysLeft = targetDate ? differenceInDays(targetDate, currentDate) : 0;

  const [date, setDate] = useState<Date | undefined>(targetDate);
  const [currentDescription, setCurrentDescription] = useState(description);
  const [editMode, setEditMode] = useState(false);

  const onChecked = (id: number) => {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const onSelectDate = (date: Date | undefined) => {
    if (!date) return;
    setDate(date);
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, targetDate: date } : task
      )
    );
  };

  const onEditDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentDescription(e.target.value);
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, description: e.target.value } : task
      )
    );
  };

  const onDelete = () => {
    setTaskList((prev) => prev.filter((task) => task.id !== id));
  };

  useEffect(() => {
    if (editMode) textAreaRef.current?.focus();
  }, [editMode]);

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <div className="flex items-center justify-between my-[22px]">
          <div className="flex items-center gap-[22px]">
            <Checkbox
              id={id.toString()}
              checked={isCompleted}
              onCheckedChange={() => onChecked(id)}
            />
            <label
              htmlFor={id.toString()}
              className={cn(
                "font-bold  max-w-[356px] text-dark-gray text-base",
                isCompleted && "line-through"
              )}
            >
              {title}
            </label>
          </div>

          <div className="flex items-center">
            {!isCompleted && daysLeft > 0 && (
              <span className="text-red text-sm mr-[18px]">
                {daysLeft} {daysLeft === 1 ? "Day" : "Days"} Left
              </span>
            )}
            <span className="text-dark-gray text-sm mr-[10px]">
              {formatDate(date, "dd/MM/yyyy")}
            </span>
            <AccordionTrigger className="mr-[20px]" />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  <MoreIcon />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[126px] p-0">
                <DropdownMenuItem className="p-0">
                  <button
                    onClick={() => onDelete()}
                    className="w-full px-[18px] py-[11px] text-sm text-left text-[#EB5757]"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-1"
                  >
                    Delete
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <AccordionContent>
          <div className="flex items-center gap-5 mb-3">
            <ClockIcon color={date ? "#2F80ED" : undefined} />

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[193px] h-[40px] px-[15px] py-0 justify-between items-center text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <span className="text-dark-gray">
                    {date ? formatDate(date, "dd/MM/yyyy") : "Set Date"}
                  </span>

                  <CalendarIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={onSelectDate}
                  fromDate={new Date()}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex gap-5">
            <button
              className="p-0 h-fit"
              onClick={() => setEditMode(!editMode)}
            >
              <PencilIcon color={description ? "#2F80ED" : undefined} />
            </button>
            {editMode ? (
              <Textarea
                ref={textAreaRef}
                placeholder="No Description"
                className="max-w-[543px] h-fit text-dark-gray text-base border-none p-0"
                value={currentDescription}
                onChange={onEditDescription}
                onBlur={() => setEditMode(false)}
              />
            ) : (
              <p
                onClick={() => setEditMode(true)}
                className="max-w-[543px] text-dark-gray text-base"
              >
                {currentDescription || "No Description"}
              </p>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default TaskCard;
