import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Link, Outlet } from "react-router-dom";

const tags = Array.from({ length: 19 }).map((_, i) => `Week${i + 1}`);

export default function Root() {
  return (
    <div className="flex">
      <ScrollArea className="h-screen w-48 rounded-md border">
        <div className="h-10 flex items-center justify-center z-50 bg-white absolute w-44 ">
          <h4 className="text-xl font-black leading-none">周次</h4>
        </div>
        <div className="p-4 mt-10">
          {tags.map((tag) => (
            <div key={tag}>
              <Button asChild variant="ghost" className="text-sm w-full gap-2">
                {/* <CalendarFold /> */}
                <Link to={tag}>{tag}</Link>
              </Button>
              <Separator className="my-2" />
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}
