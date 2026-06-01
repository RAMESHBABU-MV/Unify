# Unify

Unify is an AI-powered community engagement platform designed to strengthen neighborhood resilience by connecting residents, volunteers, and local resources in real time.

The platform enables community members to request help, offer skills or resources, participate in local initiatives, and receive AI-powered recommendations that foster meaningful local connections.

---

## Problem Statement

Communities often struggle to coordinate resources, volunteers, and assistance during emergencies or everyday needs.

Unify addresses this challenge by:

- Connecting residents with nearby helpers
- Facilitating skill sharing within neighborhoods
- Supporting emergency resource requests
- Promoting community initiatives
- Using AI to identify and recommend relevant connections

---

## Features

### User Authentication

- Secure registration and login
- JWT-based authentication
- Resident profile management

### Skill Sharing

Residents can offer:

- Tutoring
- Technical Support
- Plumbing
- Electrical Services
- Medical Assistance
- And more

### Help Requests

Users can request:

- Food
- Medicine
- Transportation
- Shelter
- Emergency Support
- Community Assistance

### AI-Powered Matching

The system intelligently matches:

- People needing help
- Available volunteers
- Resource providers
- Community opportunities

### Real-Time Communication

- Instant messaging
- Volunteer coordination
- Live notifications

### Community Initiatives

Create and join:

- Tree Plantation Drives
- Blood Donation Camps
- Awareness Programs
- Community Events

### Location-Based Discovery

- Interactive map
- Nearby volunteers
- Resource locations
- Community events

---

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Axios
- React Leaflet

### Backend

- Ruby on Rails API
- JWT Authentication
- Action Cable (WebSockets)

### Database

- MongoDB

### AI Layer

- Python
- Sentence Transformers
- Embeddings-Based Matching

### Deployment

- Vercel (Frontend)
- Render (Backend)
- MongoDB Database

---

## System Architecture

```text
                 React Frontend
                        |
                        |
                  Rails API
                        |
      --------------------------------
      |              |              |
      |              |              |
 MongoDB     WebSockets      AI Service
                                (Python)
                                      |
                                      |
                           Semantic Matching
                           Recommendation Engine
```

## Database Schema

### Users

```text
id
name
email
phone
latitude
longitude
```

### Skills

```text
id
user_id
title
category
description
```

### Requests

```text
id
user_id
title
description
category
priority
status
```

### Offers

```text
id
user_id
title
description
category
status
```

### Matches

```text
id
request_id
offer_id
similarity_score
```

### Messages

```text
id
sender_id
receiver_id
message
```

### Initiatives

```text
id
title
description
location
event_date
organizer_id
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/Unify
cd Unify
```

### Frontend Setup

```bash
cd client

npm install

npm run dev
```

### Backend Setup

```bash
cd server

bundle install

rails db:create
rails db:migrate

rails server
```

### AI Service Setup

```bash
pip install sentence-transformers
pip install fastapi uvicorn

uvicorn app:app --reload
```

---

## Future Enhancements

- Disaster Response Dashboard
- NGO Integration
- Government Service Integration
- Resource Demand Forecasting
- AI Chat Assistant
- Mobile Application
- Multi-Language Support

---

## Team Vision

Unify aims to transform neighborhoods into connected, resilient, and self-sustaining communities by leveraging technology, AI, and local collaboration.

Together, we build stronger communities.


---
