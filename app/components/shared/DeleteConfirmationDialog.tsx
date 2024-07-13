import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DeleteConfirmationDialogProps extends ButtonProps {
  onConfirm: () => void;
  itemType: string;
  itemName?: string;
  triggerClassName?: string;
}

export function DeleteConfirmationDialog({
  onConfirm,
  itemType,
  itemName,
  triggerClassName,
  ...props
}: DeleteConfirmationDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "border border-red-500 text-red-500 hover:bg-red-500 hover:text-white",
            triggerClassName
          )}
          {...props}
        >
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure to delete the {itemType}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the{" "}
            {itemType}
            {itemName ? ` ${itemName}` : ""} and remove its data from our
            servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="hover:bg-red-100">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500 hover:bg-red-600 text-white"
            onClick={onConfirm}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
