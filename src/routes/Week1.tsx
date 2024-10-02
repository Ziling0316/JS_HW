import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Homework, Title } from "@/lib/cource/week1";
function Week1() {
  return (
    <div className="ml-6 mr-6 mt-6 flex-col justify-center items-center">
      <Tabs defaultValue={Title.at(0)}>
        <TabsList>
          {Title.map((i) => (
            <TabsTrigger value={i}>{i}</TabsTrigger>
          ))}
        </TabsList>
        <ScrollArea className="h-screen rounded-md">
          {Title.map((i, index) => (
            <TabsContent value={i}>
              {Homework[index]?.map((j) => (
                <Card>
                  <CardHeader>
                    <CardTitle>{j.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <SyntaxHighlighter
                      language="javascript"
                      style={coldarkDark}
                    >
                      {j.code}
                    </SyntaxHighlighter>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          ))}
        </ScrollArea>
      </Tabs>
    </div>
  );
}

export default Week1;
