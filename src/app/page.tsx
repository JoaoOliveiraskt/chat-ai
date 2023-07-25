import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Chat } from "@/components/Chat";



export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Chat />
    </div>
  )
}
