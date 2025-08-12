---
id: 2
title: Balance Sheet Analysis Platform
description: AI-powered full-stack platform that parses balance sheet PDFs, extracts financial metrics, and enables secure, role-based natural language Q&A with visual insights.
tech: python fastapi react tailwind langchain
logo: /images/bs_analysis.png
website: https://balance-sheet-analysis-one.vercel.app
github: https://github.com/preyalameta02/balance-sheet-analysis
---

# Balance Sheet Analysis Platform
Turning complex financial reports into actionable insights.

## Features

- **Role-Based Access Control**  
  - Analysts: Access assigned companies only  
  - CEOs: Access all companies in their organization  
  - Ambani Family: Access all group data  

- **Advanced PDF Processing**  
  - Extract data from Balance Sheets, P&L, and Cash Flow Statements  
  - Handles 100+ page PDFs efficiently  
  - Automatic data cleaning and validation  

- **AI-Powered Financial Analysis**  
  - Natural language Q&A using GPT-4/o4-mini  
  - Context-aware retrieval from structured financial data  
  - Dynamic chart generation and fallback responses  

- **Interactive Data Visualization**  
  - Real-time charts (Chart.js) for sales, growth, liabilities, assets  
  - Role-based customizable dashboards  
  - Export reports  

> “Empowering decision makers with instant clarity.”

## Live Demo & Docs
- **Frontend**: [balance-sheet-analysis-one.vercel.app](https://balance-sheet-analysis-one.vercel.app)  
- **Backend API**: [web-production-35e92.up.railway.app](https://web-production-35e92.up.railway.app)  
- **Development Report**: [Google Docs](https://docs.google.com/document/d/1lAWIoOJZpNKrlxrxxCJFqw2D0iOofbhBc1k8WJl3yeQ/edit?usp=sharing)  
- **Presentation**: [Loom Video](https://www.loom.com/share/2cf53e24d7494475bdbc385e7fddbe48?sid=ef3c61af-0236-4be1-9b5e-f5bceab7ad24)  

## Techstack

**Backend**: Python 3.12, FastAPI, PostgreSQL, SQLAlchemy ORM, JWT Auth, PyMuPDF, pdfplumber, LangChain, OpenAI API, Railway  
**Frontend**: React 18, Tailwind CSS, Chart.js, Context API, Axios, Vercel  

## Sample Queries
- “Show Jio’s net profit over the last 2 years”  
- “What’s the YoY change in liabilities?”  
- “Compare total assets between 2023 and 2024”  
- “Generate a chart for revenue trends”  
