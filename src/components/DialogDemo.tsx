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
import { Label } from "@/components/ui/label";
interface I {
  text: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function DialogDemo({ text, onChange }: I) {
  return (
    <div className="mx-1">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
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
              <Label htmlFor="name" className="text-sm">
                Text
              </Label>
              <Input
                className=""
                placeholder={text}
                onChange={onChange}
              ></Input>
            </div>
            <div className="grid grid-cols-4 items-center gap-4"></div>
          </div>

          <DialogClose asChild>
            <Button
              type="submit"
              className="w-full columns-1 text-center"
              variant="default"
            >
              Save
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
}
