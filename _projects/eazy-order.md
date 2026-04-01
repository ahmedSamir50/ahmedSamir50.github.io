---
layout: project
title: "Eazy-Order — Cloud POS/RMS"
slug: "eazy-order"
categories: ["self-owned-saas", "microservices"]
tech: ["RabbitMQ", ".NET Core APIs", "PostgreSQL", "Real-Time Sync", "SignalR", "B2B SaaS"]
icon: "shopping-cart"
gradient_from: "cyan-500"
gradient_to: "emerald-500"
description: "Cloud-based Point-of-Sale and Restaurant Management System with RabbitMQ async order processing and resilient real-time .NET Core REST APIs."
order: 12
---

<div class="space-y-6">
  <div class="p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/10">
    <h3 class="text-xl font-bold text-cyan-400 mb-4">Project Overview</h3>
    <div class="space-y-4">
      <p><strong class="text-cyan-400">Situation:</strong> High-traffic restaurants experienced severe lag and order-dropping during peak rush hours using legacy monolithic systems.</p>
      <p><strong class="text-cyan-400">Task:</strong> Develop a high-performance Restaurant Management System capable of handling thousands of concurrent requests seamlessly.</p>
      <p><strong class="text-cyan-400">Action:</strong> Integrated RabbitMQ advanced message brokering to decouple order taking from backend processing. Built robust real-time SignalR hubs to instantly update kitchen displays and driver tracking apps without database polling.</p>
      <p><strong class="text-cyan-400">Result:</strong> Successfully processed 10,000+ concurrent orders at peak hours with sub-200ms latency, drastically improving operational agility.</p>
    </div>
  </div>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="p-6 rounded-2xl bg-navy-900 border border-white/5">
      <h4 class="font-bold text-slate-100 mb-3">Key Challenges</h4>
      <ul class="space-y-2 text-sm text-slate-400">
        <li class="flex gap-2"><span>▹</span> Real-time order consistency</li>
        <li class="flex gap-2"><span>▹</span> Handling message queue backpressure</li>
        <li class="flex gap-2"><span>▹</span> Kitchen display synchronization</li>
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
