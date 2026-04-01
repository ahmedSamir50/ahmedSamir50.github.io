---
layout: project
title: "Nupco Tender Portal (Medical ERP)"
slug: "nupco-erp"
categories: ["gov-enterprise", "digital-transformation"]
company_logo: "assets/images/companies/Sure_logo.svg"
beneficiary_logo: "assets/images/companies/Nupco_Logo-2048x1549.png"
tech: ["App Shell", "React", "Integrations", "Ultimus WF", "Micro-frontends", "Microservices"]
icon: "briefcase"
gradient_from: "blue-600"
gradient_to: "blue-400"
description: "Led an engineering squad to build an ecosystem of micro-frontends acting as the central ERP, managing an annual tender plan exceeding 20 billion SAR."
order: 3
---

<div class="space-y-6">
  <div class="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
    <h3 class="text-xl font-bold text-blue-400 mb-4">Project Overview</h3>
    <div class="space-y-4">
      <p><strong class="text-cyan-400">Situation:</strong> Nupco required a massive scale, highly available enterprise resource planning (ERP) platform to process and govern medical sector tenders spanning the entire Kingdom of Saudi Arabia.</p>
      <p><strong class="text-cyan-400">Task:</strong> Lead the technical implementation and architectural direction of the "INupco" portal, transitioning from legacy monoliths to a modern, scalable ecosystem.</p>
      <p><strong class="text-cyan-400">Action:</strong> Led a squad of 7 engineers to build the system as a distributed microservice and micro-frontend architecture. Orchestrated complex data pipelines and multi-tier workflows capable of safely and consistently managing procurement states.</p>
      <p><strong class="text-cyan-400">Result:</strong> Successfully delivered a high-performance ERP portal that currently orchestrates an annual medical tender pipeline exceeding 20 billion SAR without downtime.</p>
    </div>
  </div>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="p-6 rounded-2xl bg-navy-900 border border-white/5">
      <h4 class="font-bold text-slate-100 mb-3">Key Challenges</h4>
      <ul class="space-y-2 text-sm text-slate-400">
        <li class="flex gap-2"><span>▹</span> High-stakes data consistency (20B+ SAR scale)</li>
        <li class="flex gap-2"><span>▹</span> Micro-frontend lifecycle management</li>
        <li class="flex gap-2"><span>▹</span> Migration from legacy monolithic models</li>
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
