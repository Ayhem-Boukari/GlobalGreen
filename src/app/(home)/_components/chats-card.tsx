"use client";

import { useState } from "react";
import { DotIcon } from "@/assets/icons";
import { formatMessageTime } from "@/lib/format-message-time";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { getChatTasks } from "../fetch";

export function ChatsCard() {
  const [chats, setChats] = useState(getChatTasks());

  const handleAcceptTask = (index: number) => {
    const updatedChats = [...chats];
    updatedChats[index].task.status = "accepted";
    setChats(updatedChats);

    alert(`Task accepted: ${updatedChats[index].task.action}`);
  };

  return (
    <div className="col-span-12 rounded-[10px] bg-white py-6 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-7">
      <h2 className="mb-5.5 px-7.5 text-body-2xlg font-bold text-dark dark:text-white">
        Tasks from AgriWealth AI
      </h2>

      <ul>
        {chats.map((chat, key) => (
          <li key={key}>
            <Link
              href="/"
              className="flex items-center gap-4.5 px-7.5 py-3 outline-none hover:bg-gray-2 focus-visible:bg-gray-2 dark:hover:bg-dark-2 dark:focus-visible:bg-dark-2"
            >
              <div className="relative shrink-0">
                <Image
                  src={chat.profile}
                  width={56}
                  height={56}
                  className="size-14 rounded-full object-cover"
                  alt={"Avatar for " + chat.name}
                />

                <span
                  className={cn(
                    "absolute bottom-0 right-0 size-3.5 rounded-full ring-2 ring-white dark:ring-dark-2",
                    chat.isActive ? "bg-green" : "bg-orange-light",
                  )}
                />
              </div>

              <div className="relative flex-grow">
                <h3 className="font-medium text-dark dark:text-white">
                  {chat.name}
                </h3>

                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={cn(
                      "truncate text-sm font-medium dark:text-dark-5 xl:max-w-[8rem]",
                      chat.unreadCount && "text-dark-4 dark:text-dark-6",
                    )}
                  >
                    {chat.lastMessage.content}
                  </span>

                  <DotIcon />

                  <time
                    className="text-xs"
                    dateTime={chat.lastMessage.timestamp}
                  >
                    {formatMessageTime(chat.lastMessage.timestamp)}
                  </time>
                </div>

                {/* Display task and reward */}
                {chat.task && (
                  <div className="mt-2 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          "rounded-full px-2 py-1 text-xs font-medium",
                          chat.task.status === "pending" &&
                            "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100",
                          chat.task.status === "accepted" &&
                            "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100",
                          chat.task.status === "completed" &&
                            "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100",
                        )}
                      >
                        {chat.task.status === "pending" && "Pending"}
                        {chat.task.status === "accepted" && "Accepted"}
                        {chat.task.status === "completed" && "Completed"}
                      </span>
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                        Earn {chat.task.reward} coins
                      </span>
                    </div>

                    {/* Task action */}
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Task:</strong> {chat.task.action}
                    </p>

                    {/* Accept button for pending tasks */}
                    {chat.task.status === "pending" && (
                      <button
                        className="mt-2 w-fit rounded-full bg-blue-500 px-3 py-1 text-xs font-medium text-white hover:bg-blue-600"
                        onClick={(e) => {
                          e.preventDefault();
                          handleAcceptTask(key);
                        }}
                      >
                        Accept Task
                      </button>
                    )}
                  </div>
                )}

                {!!chat.unreadCount && (
                  <div className="pointer-events-none absolute right-0 top-1/2 aspect-square max-w-fit -translate-y-1/2 select-none rounded-full bg-primary px-2 py-0.5 text-sm font-medium text-white">
                    {chat.unreadCount}
                  </div>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
