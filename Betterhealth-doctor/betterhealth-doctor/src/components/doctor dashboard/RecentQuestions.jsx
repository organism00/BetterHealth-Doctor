import React, { useState } from "react";
import { Button, Paper, Chip } from "@mui/material";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

// Css
import "../../styles/customScrollbar.css"

const questionsData = [
  {
    id: 1,
    question:
      "What are the symptoms of COVID-19? Can i affect an entire generation?",
    status: "new",
    time: "14 Jan / 01:05PM",
  },
  {
    id: 2,
    question: "How do I know if my injury is serious?",
    status: "unread",
    time: "14 Jan / 01:05PM",
  },
  {
    id: 3,
    question: "Can I schedule a consultation online?",
    status: "read",
    time: "14 Jan / 01:05PM",
  },
  {
    id: 4,
    question: "Addiction blood bank bone marrow contagious disinfectants?",
    status: "read",
    time: "14 Jan / 01:05PM",
  },
  {
    id: 5,
    question: "Triggered asthma anesthesia blood type bone marrow cartilage?",
    status: "read",
    time: "14 Jan / 01:05PM",
  },
  {
    id: 6,
    question: "Addiction blood bank bone marrow contagious disinfectants?",
    status: "read",
    time: "14 Jan / 01:05PM",
  },
  {
    id: 7,
    question: "Triggered asthma anesthesia blood type bone marrow cartilage?",
    status: "read",
    time: "14 Jan / 01:05PM",
  },
  {
    id: 8,
    question: "Addiction blood bank bone marrow contagious disinfectants?",
    status: "read",
    time: "14 Jan / 01:05PM",
  },
];

function RecentQuestions() {
  const [filter, setFilter] = useState("all");

  const filteredQuestions = questionsData.filter(
    (q) => filter === "all" || q.status === filter
  );

  return (
    <div className="rounded-lg bg-[white] shadow-md overflow-hidden h-72">
      <div className="flex justify-between gap-2 items-center bg-[white] px-4 h-16 border-b ">
        <h1 className="text-2xl font-light">
          Recent Question
        </h1>
        <div className="flex gap-1">
          <Chip
            label="All"
            onClick={() => setFilter("all")}
            clickable
            sx={{
              backgroundColor: filter === "all" ? "#5156be" : "#c8c9ee",
              "&:hover": { backgroundColor: "#5156be", color: "#fff" },
              "&.MuiChip-clickable:active": {
                backgroundColor: "#5156be",
                color: "#fff",
              },
              color: filter === "all" ? "#fff" : "#000",
              borderRadius: "5px",
            }}
          />
          <Chip
            label="Unread"
            onClick={() => setFilter("unread")}
            clickable
            sx={{
              backgroundColor: filter === "unread" ? "#5156be" : "#c8c9ee",
              "&:hover": { backgroundColor: "#5156be", color: "#fff" },
              "&.MuiChip-clickable:active": {
                backgroundColor: "#5156be",
                color: "#fff",
              },
              color: filter === "unread" ? "#fff" : "#000",
              borderRadius: "5px",
            }}
          />
          <Chip
            label="New"
            onClick={() => setFilter("new")}
            clickable
            sx={{
              backgroundColor: filter === "new" ? "#5156be" : "#c8c9ee",
              "&:hover": { backgroundColor: "#5156be", color: "#fff" },
              "&.MuiChip-clickable:active": {
                backgroundColor: "#5156be",
                color: "#fff",
              },
              color: filter === "new" ? "#fff" : "#000",
              borderRadius: "5px",
            }}
          />
        </div>
      </div>

      <div className="scrollable-div px-3  h-[188px]  ">
        {filteredQuestions.map((q) => (
          <Paper
            key={q.id}
            style={{ padding: "20px", marginTop: "5px", boxShadow: "none" }}
            className="flex items-center border-b border-dashed"
          >
            <div className="w-[200px] md:w-[30vw] lg:w-[16vw]">
              <p className="text-left text-[12px] mb-2 ">{q.time}</p>
              <p className="text-left mb-4 text-xl">{q.question}</p>
              <div className="flex gap-1 ">
                <Button
                  size="small"
                  style={{
                    backgroundColor: "#c8c9ee",
                    color: "#5156be",
                    fontSize: "10px",
                    padding: "4px 8px",
                  }}
                >
                  Read More
                </Button>
                <Button
                  size="small"
                  style={{
                    backgroundColor: "#c8c9ee",
                    color: "#5156be",
                    fontSize: "10px",
                  }}
                >
                  Reply
                </Button>
              </div>
            </div>
            <div className="cursor-pointer text-[20px] rounded-full border p-2 w-[50px] h-[50px] flex items-center justify-center ">
              <HiOutlineChatBubbleLeftRight className="text-[20px] " />
            </div>
          </Paper>
        ))}
      </div>
    </div>
  );
}
export default RecentQuestions;
