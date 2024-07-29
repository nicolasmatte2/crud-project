import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import { Input } from "./ui/input";
interface I {
  text: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function DialogDemo({ text, onChange }: I) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <Input placeholder={text} onChange={onChange}></Input>
          <DialogClose asChild>
            <Button type="button" variant="destructive">
              Close
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  );
}
