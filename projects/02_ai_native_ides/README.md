# 🚀 Exploring AI-Native IDEs

## 📖 Overview
This project explores how AI-native Integrated Development Environments (IDEs) like **Cursor**, **Zed**, and **Trae** can accelerate software development.  
The goal is to compare workflows by scaffolding the same simple REST API **twice**:  
1. **Run A – Inline Only:** Write the code while only accepting AI inline (ghost) completions.  
2. **Run B – Chat Only:** Use the AI chat feature to generate the entire scaffold in one shot.  

The experiment will document differences in speed, accuracy, and usability between these approaches.

---

## 🎯 Objectives
- Evaluate the effectiveness of **inline AI completions** vs **chat-based generation**.
- Explore AI-native IDE features (code suggestions, context-awareness, debugging).
- Build a small **FastAPI REST API** to serve as a testbed.

---

## 🛠️ Tech Stack
- **Language:** Python 3
- **Framework:** FastAPI
- **Server:** Uvicorn
- **Tools:** Cursor / Zed / Trae (IDE experimentation)
- **Package Manager:** pip, virtualenv

---

## 📌 Experiment Plan

| Run | Mode        | Description                                           |
| --- | ----------- | ----------------------------------------------------- |
| A   | Inline Only | Write code manually and accept inline AI suggestions. |
| B   | Chat Only   | Prompt AI chat to generate the entire scaffold.       |

---
## 📊 Evaluation Criteria

- Speed: Time taken to scaffold.
- Accuracy: Bugs or missing functionality.
- Ease of Use: Developer experience using AI features.
- Learning Impact: Which method helps retain knowledge better?
