---
layout: project
title: "Pro Stores Manager"
slug: "pro-stores"
categories: ["self-owned-saas", "hybrid-mobile"]
tech: [".NET MAUI", "Blazor Hybrid", "SQLite", "Offline-First", "Hangfire", "RabbitMQ"]
icon: "store"
gradient_from: "blue-500"
gradient_to: "violet-500"
description: "Offline-First SaaS retail system with a custom SQLite synchronization engine. Built for mission-critical environments that must remain operational without a network connection."
order: 10
---

<div class="space-y-6">
  <div class="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
    <h3 class="text-xl font-bold text-blue-400 mb-4">Project Overview</h3>
    <div class="space-y-4">
      <p><strong class="text-emerald-400">Situation:</strong> Retail environments faced severe disruptions and data loss during frequent network outages.</p>
      <p><strong class="text-emerald-400">Task:</strong> Architect a bulletproof SaaS Point-of-Sale system that guarantees 100% operational uptime irrespective of connection status.</p>
      <p><strong class="text-emerald-400">Action:</strong> Engineered a robust Offline-First application using .NET MAUI Blazor Hybrid, featuring an advanced local SQLite synchronization engine that seamlessly maps to centralized nodes via RabbitMQ when connectivity resumes.</p>
      <p><strong class="text-emerald-400">Result:</strong> Completely eliminated downtime for POS terminals, securing 50,000+ daily transactions with zero data-loss during complex reconnection phases.</p>
    </div>
  </div>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="p-6 rounded-2xl bg-navy-900 border border-white/5">
      <h4 class="font-bold text-slate-100 mb-3">Key Challenges</h4>
      <ul class="space-y-2 text-sm text-slate-400">
        <li class="flex gap-2"><span>▹</span> Conflict resolution for multi-terminal sync</li>
        <li class="flex gap-2"><span>▹</span> Low-level SQLite hardware optimization</li>
        <li class="flex gap-2"><span>▹</span> Real-time background job safety</li>
      </ul>
    </div>
    <div class="p-6 rounded-2xl bg-navy-900 border border-white/5">
      <h4 class="font-bold text-slate-100 mb-3">Core Stack</h4>
      <div class="flex flex-wrap gap-2">
        {% for t in page.tech %}
          <span class="tech-tag">{{ t }}</span>
        {% endfor %}
      </div>
    </div>
  </div>
</div>
