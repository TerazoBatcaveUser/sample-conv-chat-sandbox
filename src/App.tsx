import { Box } from "@twilio-paste/box";
import React from "react";

import { ChatDialog } from "./components/ChatDialog";
import { CustomerChatLog } from "./components/CustomerChatLog";

export const App: React.FC = () => {
  return (
    <Box position="absolute" bottom="space70" right="space70">
      <ChatDialog>
        <CustomerChatLog />
      </ChatDialog>
    </Box>
  );
};
