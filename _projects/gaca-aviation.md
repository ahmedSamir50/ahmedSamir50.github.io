---
layout: project
title: "GACA Aviation Portal"
slug: "gaca-aviation"
categories: ["gov-enterprise", "digital-transformation"]
company_logo: "assets/images/companies/ELm_logo.svg"
beneficiary_logo: "assets/images/companies/Gaca_Logo.svg"
tech: ["Angular", "Camunda WF", "Integrations", "RabbitMQ", "Aviation Traffic Management", "Airport Governance"]
icon: "plane"
gradient_from: "emerald-500"
gradient_to: "cyan-500"
description: "Mission-critical e-services managing KSA aviation traffic, airport governance, and aircraft licensing with strict high-security compliance."
order: 1
---

<div class="space-y-6">
  <div class="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
    <h3 class="text-xl font-bold text-emerald-400 mb-4">Project Overview</h3>
    <div class="space-y-4">
      <p><strong class="text-emerald-400">Situation:</strong> The General Authority of Civil Aviation (GACA) required a highly secure, digitized platform to manage the Kingdom's critical aviation infrastructure and licensing.</p>
      <p><strong class="text-emerald-400">Task:</strong> Architect and lead the implementation of a centralized, secure portal to handle external aviation entities, airport governance, and compliance workflows.</p>
      <p><strong class="text-emerald-400">Action:</strong> Spearheaded the development of a resilient .NET Core ecosystem with strict EF Core data management, ensuring high-security compliance protocols for sensitive government data and cross-service integrations.</p>
      <p><strong class="text-emerald-400">Result:</strong> Successfully delivered a robust e-services portal that transformed manual governance into a streamlined, secure digital pipeline for all KSA aviation traffic and licensing.</p>
    </div>
  </div>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="p-6 rounded-2xl bg-navy-900 border border-white/5">
      <h4 class="font-bold text-slate-100 mb-3">Key Challenges</h4>
      <ul class="space-y-2 text-sm text-slate-400">
        <li class="flex gap-2"><span>▹</span> High-security government data compliance</li>
        <li class="flex gap-2"><span>▹</span> Complex workflow governance</li>
        <li class="flex gap-2"><span>▹</span> Resilient architecture for national infrastructure</li>
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
