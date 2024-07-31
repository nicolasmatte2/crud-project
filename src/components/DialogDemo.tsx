import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { SquarePen } from "lucide-react";

interface DialogDemoProps {
  text: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  inputValue: string; // Valor do input
  setInputValue: (value: string) => void; // Função para atualizar o valor do input
}

export function DialogDemo({
  text,
  onChange,
  onClick,
  inputValue,
  setInputValue,
}: DialogDemoProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange(event);
  };

  return (
    <div className="mx-1">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-amber-300 hover:bg-amber-400" variant="outline">
            <SquarePen size={18} />
          </Button>
        </DialogTrigger>
        <DialogContent className="place-content-center sm:max-w-[350px]">
          <DialogHeader>
            <DialogTitle>Edit Text</DialogTitle>
            <DialogDescription>
              Make changes to your text here.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-2 py-1">
            <div className="flex items-center gap-4">
              <Input
                id="submit"
                className=""
                placeholder={text}
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4"></div>
          </div>
          <DialogClose asChild>
            <Button
              type="submit"
              className="w-full columns-1 text-center"
              variant="default"
              id="submit"
              onClick={onClick}
              disabled={inputValue.trim() === ""}
            >
              Save
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
}
