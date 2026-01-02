import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import GameSaves from "@/pages/GameSaves";
import Diaries from "@/pages/Diaries";
import GameSaveDetail from "@/pages/GameSaveDetail";
import DiaryDetail from "@/pages/DiaryDetail";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/game-saves" component={GameSaves} />
      <Route path="/game-save/:slug" component={GameSaveDetail} />
      <Route path="/diaries" component={Diaries} />
      <Route path="/diary/:slug" component={DiaryDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
