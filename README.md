# CommunityGuard Prototype

## Overview

CommunityGuard is a web application designed for fair, transparent, and culturally sensitive AI moderation of online communities. This prototype demonstrates the user interface for a content moderation system that aims to address cultural and linguistic biases in automated content moderation.

## Features

- **Live Moderation Feed**: View real-time moderated content with confidence scores
- **Explainability Dashboard**: Understand why content was flagged for moderation
- **Feedback System**: Submit appeals for moderation decisions
- **Bias Auditing**: Visualize potential biases in the moderation system across different language dialects
- **Model Performance**: Track and analyze AI model training and improvements
- **Admin Configuration**: Set up moderation policies and reviewer access

## Installation

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Deployed Version

The application is deployed at [https://ethical-ai-major.vercel.app/)

## Dependencies

- React
- Tailwind CSS
- Recharts (for data visualization)

## Project Structure

```
src/
├── components/
│   └── CommunityGuardApp.jsx  # Main application component
├── App.js                     # Application entry point
├── index.js                   # React rendering setup
└── index.css                  # Global styles and Tailwind imports
```

## Usage

1. Navigate to the homepage of the application
2. Use the sidebar to navigate between different sections:
   - Home: Overview of the application
   - Moderation: View live moderation feed and statistics
   - Explainability: Analyze why content was flagged
   - Feedback: Submit appeals for moderation decisions
   - Bias Auditing: View potential biases in the moderation system
   - Model Performance: Check AI model training insights
   - Admin Panel: Configure moderation policies
