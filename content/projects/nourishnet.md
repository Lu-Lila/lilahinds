---
title: "NourishNet: Food Rescue Logistics Platform"
description: "A three-day sprint challenge exploring AI-assisted product development — using Gemini to generate a research persona and Claude AI to build a full-stack food rescue logistics platform connecting donors, volunteers, and administrators."
tags: ["Full-Stack Development", "Web App", "AI-Assisted Build", "UX Research", "Supabase", "Next.js", "Sprint Challenge"]
liveUrl: "https://project-o0ntx.vercel.app/"
image: "/images/nourishnet/home.png"
---

## Overview

NourishNet is a web-based food rescue logistics platform designed to connect food donors, volunteers, and administrators through a centralized system for coordinating surplus food pickups and deliveries.

It was built during a **three-day sprint challenge** focused on experimenting with AI as a creative and technical collaborator — using **Gemini** to generate a research persona that guided design decisions, and **Claude AI** to help build the website and full-stack application end to end.

The platform addresses a common challenge faced by food banks and community organizations: efficiently managing donated food before it expires while ensuring volunteers can quickly claim and complete pickup routes. NourishNet streamlines this process by providing route management, volunteer coordination, donor tracking, and administrative oversight within a single application.

![NourishNet — Home](/images/nourishnet/home.png)

## Problem

Many food rescue organizations rely on phone calls, spreadsheets, emails, and manual scheduling to coordinate food donations.

This creates several operational challenges:

* Limited visibility into available pickup opportunities
* Difficulty matching volunteers with routes
* Lack of real-time status updates
* Minimal reporting on food recovered
* Administrative overhead for tracking donor and volunteer activity

Without a centralized system, organizations risk delays, inefficiencies, and food waste.

## Goal

The goal of NourishNet was to create a scalable logistics platform that would:

* Allow donors to submit food donations
* Enable volunteers to discover and claim routes
* Provide route completion workflows
* Track rescued food quantities
* Offer administrators operational visibility
* Generate accountability through route history and event tracking

## Research & Planning

To ground the project in real user needs within the sprint's three-day timeline, **Gemini was used to generate a research persona** representing the people food rescue organizations rely on. That persona became a reference point for prioritizing features and shaping each workflow.

The project was inspired by operational workflows commonly used by food banks, food rescue nonprofits, and community kitchens. Three key stakeholder groups emerged:

### Donors

Organizations and businesses donating surplus food.

Needs:

* Easy donation submission
* Visibility into pickup status
* Confidence that food reaches recipients

### Volunteers

Individuals responsible for transportation and delivery.

Needs:

* Simple route discovery
* Mobile-friendly workflow
* Clear pickup instructions
* Route history

### Administrators

Program coordinators overseeing logistics.

Needs:

* Route monitoring
* Volunteer tracking
* Donation analytics
* Operational reporting

## Solution

NourishNet was built as a full-stack web application using modern web technologies — with **Claude AI** acting as a development partner throughout the build, from scaffolding the interface to wiring up the database logic.

### Technology Stack

**Frontend**

* Next.js
* TypeScript
* React
* Tailwind CSS

**Backend**

* Supabase
* PostgreSQL
* Row Level Security (RLS)
* Stored Procedures

**Deployment**

* GitHub
* Vercel

## Key Features

### Authentication

Users can securely authenticate using Supabase Magic Links.

Benefits:

* Passwordless login
* Reduced user friction
* Secure session management

### Volunteer Dashboard

Volunteers can browse available routes, search and filter, view pickup details, claim routes, complete pickups, and review route history. The dashboard updates dynamically as route statuses change.

![NourishNet — Volunteer Dashboard](/images/nourishnet/volunteer-dashboard.png)

### Route Management

Each route contains donor information, pickup location, food type, estimated weight, vehicle requirements, and status tracking.

Route lifecycle:

`Available → Claimed → Completed`

Administrative cancellation and reopening workflows are also supported.

![NourishNet — Route Administration](/images/nourishnet/admin-routes.png)

### Route Timeline System

A route event system records major actions — route creation, claimed, completed, cancelled, and reopened — providing accountability and operational transparency.

### Donor Tracking

Administrators can review donor activity and evaluate donation frequency, total food contributed, and organizational impact. This supports future reporting and partnership development.

![NourishNet — Donor Dashboard](/images/nourishnet/donor-dashboard.png)

### Volunteer Impact Reporting

Volunteer performance metrics include completed pickups and total pounds rescued — measurable indicators of volunteer contribution and program effectiveness.

![NourishNet — Donor History](/images/nourishnet/donor-history.png)

### Administrative Dashboard

The admin dashboard provides live route monitoring, volunteer management, donor analytics, and route administration. Administrators can review route details, cancel routes, reopen cancelled routes, and monitor platform activity.

![NourishNet — Admin Dashboard](/images/nourishnet/admin-dashboard.png)

![NourishNet — Volunteer Management](/images/nourishnet/admin-volunteers.png)

![NourishNet — Donor Analytics](/images/nourishnet/admin-donors.png)

![NourishNet — Notifications](/images/nourishnet/admin-notifications.png)

## Challenges

### Authentication Configuration

During deployment, authentication redirects initially pointed to a GitHub Pages URL instead of the Vercel deployment.

Resolution: updated Supabase URL configuration, configured Vercel environment variables, and corrected redirect destinations.

### Route Ownership Tracking

Early implementations stored volunteer information as text values, which created issues when linking route data to volunteer records.

Resolution: standardized user identification using UUIDs, updated database relationships, and improved reporting reliability.

### Deployment Troubleshooting

The project encountered deployment issues caused by missing environment variables, framework detection errors, and incorrect deployment settings.

Resolution: configured Vercel environment variables, updated the framework preset to Next.js, and redeployed with corrected settings.

## Results

NourishNet successfully provides centralized food rescue coordination, volunteer route management, donor impact tracking, administrative oversight, and real-time route status updates.

The platform demonstrates how modern web technologies — paired with AI-assisted development — can improve operational efficiency for food rescue organizations while reducing administrative burden and supporting community food distribution efforts.

## Reflection

Building NourishNet strengthened my experience in full-stack application development, database design, authentication systems, role-based access control, real-time data management, cloud deployment workflows, and user-centered design.

Just as importantly, the sprint was an experiment in working alongside AI — letting Gemini shape the research persona and Claude AI accelerate the build — while still owning the product decisions, problem-solving, and design direction. The project reinforced the value of iterative problem-solving, deployment testing, and designing systems around the needs of multiple stakeholder groups.
